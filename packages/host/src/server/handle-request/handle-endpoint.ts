import {assert, assertWrap, check} from '@augment-vir/assert';
import {ensureErrorAndPrependMessage, filterMap, isErrorHttpStatus} from '@augment-vir/common';
import {
    type ApiDefinition,
    definableHttpMethods,
    HttpMethod,
    HttpStatus,
    readHeaderValue,
} from '@rest-vir/api';
import {assertValidShape} from 'object-shape-tester';
import {
    type EndpointImplementation,
    type EndpointMethodImplementationParams,
} from '../../implementation/implement-endpoint.js';
import {type RunningServerInfo} from '../../implementation/raw-route-data.js';
import {type ServerLogger} from '../../implementation/server-logger.js';
import {type RestVirRequestContext} from '../run-api/attach-api.js';
import {createRestVirHandlerErrorPrefix, RestVirHandlerError} from '../util/handler.error.js';
import {type HandledOutput, type RouteHandlerParams} from './endpoint-handler.js';
import {buildHandlerParams} from './handler-params.js';

/**
 * Handles an endpoint's implementation execution.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export async function handleEndpointRequest(
    this: void,
    {
        endpoint,
        request,
        response,
        attachId,
        server,
        serverLogger,
        api,
    }: Readonly<
        Omit<RouteHandlerParams, 'route'> & {
            attachId: string;
            endpoint: Readonly<EndpointImplementation>;
            server: Readonly<RunningServerInfo>;
            serverLogger: Readonly<ServerLogger>;
            api: ApiDefinition;
        }
    >,
): Promise<HandledOutput> {
    try {
        // by this point in the request lifecycle, we know that these properties have been set.
        const restVirContext = request.restVirContext?.[attachId] as
            | undefined
            | RestVirRequestContext;
        assert.isDefined(restVirContext, 'restVirContext is not defined');

        const context = restVirContext.context;
        const requestData = restVirContext.requestData;

        const searchParams = restVirContext.searchParams;
        const method = assertWrap.isIn(
            assertWrap.isEnumValue(request.method.toUpperCase(), HttpMethod),
            definableHttpMethods,
        );

        const endpointParams: EndpointMethodImplementationParams = {
            ...buildHandlerParams({
                request,
                requestData,
                response,
                server,
            }),
            method,
            context,
            searchParams,
            endpointDefinition: endpoint.definition,
            serverLogger,
        };

        const endpointMethodImplementation = endpoint.implementation[method];
        const endpointMethodDefinition = endpoint.definition.requests[method];

        if (!endpointMethodImplementation) {
            throw new RestVirHandlerError(
                {
                    apiName: api.apiName,
                    isEndpoint: true,
                    isWebSocket: false,
                    path: endpoint.path,
                },
                `No implementation found for method '${method}'.`,
                HttpStatus.NotFound,
            );
        } else if (!endpointMethodDefinition) {
            throw new RestVirHandlerError(
                {
                    apiName: api.apiName,
                    isEndpoint: true,
                    isWebSocket: false,
                    path: endpoint.path,
                },
                `No definition found for method '${method}'.`,
                HttpStatus.NotFound,
            );
        }

        const endpointResult = await endpointMethodImplementation(endpointParams);

        /** The implementation already handled the response (e.g. SSE streaming). */
        if ('responseHandled' in endpointResult) {
            return undefined;
            /** If the dev forgets to set a status code. */
        }

        /**
         * Implementations must return `RequireExactlyOne` of a status-code key. `Object.entries`'
         * ordering for numeric-string keys depends on V8, so don't rely on `[0]`. Instead, find the
         * single entry whose key parses to a valid `HttpStatus` and reject ambiguous results.
         */
        const statusEntries = filterMap(
            Object.entries(endpointResult),
            ([
                rawStatusCode,
                statusResponse,
            ]) => {
                const statusCode = Number(rawStatusCode);
                if (check.isEnumValue(statusCode, HttpStatus)) {
                    return {
                        statusCode,
                        statusResponse,
                    };
                } else {
                    return undefined;
                }
            },
            check.isTruthy,
        );

        if (statusEntries.length !== 1 || !statusEntries[0]) {
            throw new RestVirHandlerError(
                {
                    apiName: api.apiName,
                    isEndpoint: true,
                    isWebSocket: false,
                    path: endpoint.path,
                },
                statusEntries.length === 0
                    ? 'Missing status code response.'
                    : `Expected exactly one status code response key but got ${statusEntries.length}.`,
                HttpStatus.InternalServerError,
            );
        }

        const {statusCode, statusResponse} = statusEntries[0];

        const statusResponseDefinition =
            endpoint.definition.requests[method]?.responses[statusCode];

        if (statusResponseDefinition?.responseData) {
            assertValidShape(statusResponse.responseData, statusResponseDefinition.responseData, {
                allowExtraKeys: true,
            });
        } else if (
            statusResponse.responseData &&
            /**
             * Implementations may return an error status (4xx/5xx) that the endpoint definition did
             * not declare an explicit response shape for — the type system permits this via
             * `DefaultErrorResponseType` (`undefined | string`) on undeclared error statuses. Allow
             * a string body in that case (it will be JSON-stringified for the wire) and only reject
             * non-string bodies, which the type contract does not permit.
             */
            (!isErrorHttpStatus(statusCode) || check.isNotString(statusResponse.responseData))
        ) {
            throw new RestVirHandlerError(
                {
                    apiName: api.apiName,
                    isEndpoint: true,
                    isWebSocket: false,
                    path: endpoint.path,
                },
                'Got response data but none was expected.',
                HttpStatus.InternalServerError,
            );
        }

        /**
         * `Content-Type` is single-valued by spec. `readHeaderValue` always returns an array; take
         * its first entry (if any) for the outgoing header, falling back to `application/json`.
         */
        const contentType =
            readHeaderValue(statusResponse.headers || {}, 'content-type')[0] || 'application/json';

        return {
            statusCode,
            body: statusResponse.responseData,
            headers: {
                ...statusResponse.headers,
                'content-type': contentType,
            },
        };
    } catch (error) {
        throw ensureErrorAndPrependMessage(
            error,
            createRestVirHandlerErrorPrefix({
                apiName: api.apiName,
                isEndpoint: true,
                isWebSocket: false,
                path: endpoint.path,
            }),
        );
    }
}
