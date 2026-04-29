import {type SelectFrom, HttpMethod, HttpStatus} from '@augment-vir/common';
import {convertDuration} from 'date-vir';
import {type OutgoingHttpHeaders} from 'node:http';
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
        route,
        request,
    }: Readonly<
        SelectFrom<
            RouteHandlerParams,
            {
                request: {
                    headers: true;
                    method: true;
                    originalUrl: true;
                };
                route: {
                    requiredClientOrigin: true;
                    path: true;
                    service: {
                        serviceName: true;
                        requiredClientOrigin: true;
                        logger: true;
                        customHeaders: true;
                    };
                    methods: true;
                    isEndpoint: true;
                    isWebSocket: true;
                };
            }
        >
    >,
): Promise<HandledOutput> {
    const origin = request.headers.origin;
    const matchedOrigin = await matchOrigin(route, origin);
    const allowedMethods = route.isEndpoint ? getAllowedEndpointMethods(route) : [HttpMethod.Get];

    if (request.method.toUpperCase() === HttpMethod.Options) {
        return {
            statusCode: HttpStatus.NoContent,
            headers: buildOptionsRequestCorsHeaders(
                matchedOrigin,
                allowedMethods,
                route.service.customHeaders,
            ),
        };
    } else if (matchedOrigin) {
        return {
            headers: buildStandardCorsHeaders(matchedOrigin, route.service.customHeaders),
        };
    } else {
        route.service.logger.error(
            new RestVirHandlerError(
                route,
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
    customHeaders: string[],
): OutgoingHttpHeaders {
    if (isAnyOrigin(matchedOrigin)) {
        return {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Expose-Headers': [
                restVirServiceNameHeader,
                ...customHeaders,
            ].join(','),
        };
    } else {
        return {
            'Access-Control-Allow-Origin': matchedOrigin,
            'Access-Control-Allow-Credentials': 'true',
            Vary: 'Origin',
            'Access-Control-Expose-Headers': [
                restVirServiceNameHeader,
                ...customHeaders,
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
    customHeaders: string[],
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
            ...customHeaders,
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
type MatchedOrigin = string | undefined | AnyOrigin;

async function matchOrigin(
    endpoint: Readonly<
        SelectFrom<
            EndpointDefinition | WebSocketDefinition,
            {
                requiredClientOrigin: true;
                path: true;
                service: {
                    serviceName: true;
                    requiredClientOrigin: true;
                };
                isEndpoint: true;
                isWebSocket: true;
            }
        >
    >,
    origin: string | undefined,
): Promise<MatchedOrigin> {
    const endpointRequirement = await checkOriginRequirement(origin, endpoint.requiredClientOrigin);

    if (isAnyOrigin(endpointRequirement)) {
        return AnyOrigin;
    } else if (endpointRequirement === false) {
        return undefined;
    } else if (endpointRequirement === true) {
        return origin || AnyOrigin;
    }

    /** If the endpoint requirement is `undefined`, then we check the service requirement. */

    const serviceRequirement = await checkOriginRequirement(
        origin,
        endpoint.service.requiredClientOrigin,
    );

    if (isAnyOrigin(serviceRequirement)) {
        return AnyOrigin;
    } else if (serviceRequirement === false) {
        return undefined;
    } else if (serviceRequirement === true) {
        return origin || AnyOrigin;
    }

    /**
     * If the service requirement is `undefined`, something went wrong because service definitions
     * are not allowed to have an `undefined` origin requirement.
     */
    throw new RestVirHandlerError(
        endpoint,
        `Request origin '${origin}' failed to get checked for endpoint '${endpoint.path}' or service '${endpoint.service.serviceName}'`,
    );
}
