import {check} from '@augment-vir/assert';
import {getObjectTypedKeys, HttpMethod, HttpStatus, type SelectFrom} from '@augment-vir/common';
import {
    AnyOrigin,
    checkOriginRequirement,
    type DefinableHttpMethod,
    type OriginRequirement,
} from '@rest-vir/api';
import {restVirApiNameHeader} from '@rest-vir/client';
import {convertDuration} from 'date-vir';
import {type OutgoingHttpHeaders} from 'node:http';
import {type ApiImplementation} from '../../implementation/implement-api.js';
import {type EndpointImplementation} from '../../implementation/implement-endpoint.js';
import {type WebSocketImplementation} from '../../implementation/implement-websocket.js';
import {type ServerLogger} from '../../implementation/server-logger.js';
import {RestVirHandlerError} from '../util/handler.error.js';
import {type HandledOutput, type RouteHandlerParams} from './endpoint-handler.js';

/**
 * Determines the required origin for the endpoint and compares it with the given request.
 *
 * If an OPTIONS request is being handled, a `NoContent` response is always sent, with all CORS
 * headers set appropriately.
 *
 * For other requests:
 *
 * - If the request fails the origin checks, a `Forbidden` response is sent.
 * - If the request passes origin checks, the appropriate CORS headers are set and a response is not
 *   sent (so further handlers can process it).
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export async function handleCors(
    this: void,
    {
        api,
        serverLogger,
        route,
        request,
    }: Readonly<
        SelectFrom<
            RouteHandlerParams,
            {
                request: true;
                route: true;
            }
        > & {
            api: ApiImplementation;
            serverLogger: ServerLogger;
        }
    >,
): Promise<HandledOutput> {
    const origin = request.headers.origin;
    const method = request.method.toUpperCase();
    const allowedMethods: DefinableHttpMethod[] = route.isEndpoint
        ? getObjectTypedKeys(route.definition.requests)
        : [HttpMethod.Get];

    const matchedOrigin = await matchOrigin({
        route,
        method,
        api,
        origin,
    });

    if (request.method.toUpperCase() === HttpMethod.Options) {
        return {
            statusCode: HttpStatus.NoContent,
            headers: buildOptionsRequestCorsHeaders(
                matchedOrigin,
                allowedMethods,
                api.implementation.customHeaders || [],
            ),
        };
    } else if (matchedOrigin) {
        return {
            headers: buildStandardCorsHeaders(matchedOrigin, api.implementation.customHeaders),
        };
    } else {
        serverLogger.error(
            new RestVirHandlerError(
                {
                    apiName: api.definition.apiName,
                    ...route,
                },
                `CORS rejected for origin '${origin}'.`,
                HttpStatus.Forbidden,
            ),
        );
        /** The CORS requirements for this request have not been met. */
        return {
            statusCode: HttpStatus.Forbidden,
        };
    }
}

function buildStandardCorsHeaders(
    matchedOrigin: NonNullable<MatchedOrigin>,
    customHeaders: ReadonlyArray<string> | undefined,
): OutgoingHttpHeaders {
    if (matchedOrigin === AnyOrigin) {
        return {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Expose-Headers': [
                restVirApiNameHeader,
                ...(customHeaders || []),
            ].join(','),
        };
    } else {
        return {
            'Access-Control-Allow-Origin': matchedOrigin,
            'Access-Control-Allow-Credentials': 'true',
            Vary: 'Origin',
            'Access-Control-Expose-Headers': [
                restVirApiNameHeader,
                ...(customHeaders || []),
            ].join(','),
        };
    }
}

const accessControlMaxAgeValue: string = String(
    convertDuration(
        {
            hours: 1,
        },
        {
            seconds: true,
        },
    ).seconds,
);

const contentLengthHeaders = {
    /**
     * Safari (and potentially other browsers) need content-length 0 for 204 or it will hang waiting
     * for a body.
     */
    'Content-Length': '0',
};

function buildOptionsRequestCorsHeaders(
    matchedOrigin: MatchedOrigin,
    allowedMethods: HttpMethod[],
    customHeaders: ReadonlyArray<string> | undefined,
): OutgoingHttpHeaders {
    if (matchedOrigin == undefined) {
        return contentLengthHeaders;
    }

    return {
        ...buildStandardCorsHeaders(matchedOrigin, customHeaders),
        'Access-Control-Allow-Methods': [
            allowedMethods,
            HttpMethod.Options,
        ].join(','),
        'Access-Control-Allow-Headers': [
            'Cookie',
            'Authorization',
            'Content-Type',
            ...(customHeaders || []),
        ].join(','),
        'Access-Control-Max-Age': accessControlMaxAgeValue,

        ...contentLengthHeaders,
    };
}

/**
 * The possible types here should be used for the following:
 *
 * - `string`: should be the valid origin that matches the request origin
 * - `undefined`: should be used when the request origin is not valid and thus should be rejected.
 * - `AnyOrigin`: should be used when the endpoint accepts any origin.
 */
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type MatchedOrigin = string | undefined | AnyOrigin;

async function matchOrigin({
    route,
    method,
    api,
    origin,
}: {
    route: Readonly<EndpointImplementation | WebSocketImplementation>;
    method: string;
    api: ApiImplementation;
    origin: string | undefined;
}): Promise<MatchedOrigin> {
    const routeOriginRequirement: OriginRequirement | undefined = route.isWebSocket
        ? route.definition.clientOriginRequirement
        : check.isKeyOf(method, route.definition.requests)
          ? route.definition.requests[method]?.clientOriginRequirement
          : undefined;

    const routeOriginResult = await checkOriginRequirement(origin, routeOriginRequirement);

    if (routeOriginResult === AnyOrigin) {
        return AnyOrigin;
    } else if (routeOriginResult === false) {
        return undefined;
    } else if (routeOriginResult === true) {
        return origin || AnyOrigin;
    }

    /** If the endpoint requirement is `undefined`, then we check the service requirement. */

    const serviceOriginResult = await checkOriginRequirement(
        origin,
        api.implementation.clientOriginRequirement,
    );

    if (serviceOriginResult === false) {
        return undefined;
    } else if (serviceOriginResult === true) {
        return origin || AnyOrigin;
    } else {
        /** Fall back to any origin. */
        return AnyOrigin;
    }
}
