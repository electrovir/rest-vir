import {
    HttpMethod,
    HttpStatus,
    combineErrorMessages,
    ensureErrorAndPrependMessage,
    extractErrorMessage,
    getOrSet,
    stringify,
    wrapInTry,
} from '@augment-vir/common';
import {
    buildMethodNotAllowedMessage,
    extractEndpointMethodDefinition,
    extractHttpMethod,
    extractRequiredHeaders,
    isFormDataShape,
    matchesWebSocketProtocolRequirement,
    restVirApiNameHeader,
    type EndpointDefinition,
    type EndpointMethodDefinition,
    type WebSocketDefinition,
} from '@rest-vir/api';
import {type IncomingHttpHeaders} from 'node:http';
import {checkValidShape, type Shape} from 'object-shape-tester';
import {type CreateHostContextParams} from '../../implementation/host-context.js';
import {type ApiImplementation} from '../../implementation/implement-api.js';
import {type EndpointImplementation} from '../../implementation/implement-endpoint.js';
import {type WebSocketImplementation} from '../../implementation/implement-websocket.js';
import {
    type RunningServerInfo,
    type ServerRequest,
    type ServerResponse,
} from '../../implementation/raw-route-data.js';
import {RejectRequestError} from '../../implementation/reject-request.error.js';
import {type ServerLogger} from '../../implementation/server-logger.js';
import {RestVirHandlerError} from '../util/handler.error.js';
import {extractErrorRoutePath, extractMatchedRoutePath} from '../util/matched-route.js';
import {handleHandlerOutputWithoutSending, type HandledOutput} from './endpoint-handler.js';
import {handleCors} from './handle-cors.js';
import {handleSearchParams} from './handle-search-params.js';
import {buildHandlerParams} from './handler-params.js';

/**
 * Handles a request before it gets to the actual route handlers.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export async function preHandler({
    request,
    response,
    api,
    server,
    attachId,
    serverLogger,
    disableRestVirApiNameHeader,
    excludedErrorSearchParams,
}: {
    request: ServerRequest;
    response: ServerResponse;
    api: Readonly<ApiImplementation>;
    server: Readonly<RunningServerInfo>;
    attachId: string;
    serverLogger: ServerLogger;
    disableRestVirApiNameHeader?: boolean | undefined;
    excludedErrorSearchParams?: ReadonlyArray<string> | undefined;
}): Promise<Readonly<HandledOutput>> {
    if (!request.restVirContext) {
        request.restVirContext = {};
    }
    const attachedRestVirContext = getOrSet(request.restVirContext, attachId, () => {
        return {};
    });

    if (!disableRestVirApiNameHeader) {
        response.header(restVirApiNameHeader, api.definition.apiName);
    }

    const matchedRoutePath = extractMatchedRoutePath({
        request,
        attachId,
    });

    if (!matchedRoutePath) {
        /** Not a route this attachment registered. Nothing to do. */
        return undefined;
    }

    const endpointDefinition = api.definition.endpoints[matchedRoutePath];
    const webSocketDefinition = request.ws
        ? api.definition.webSockets[matchedRoutePath]
        : undefined;
    const endpointImplementation = api.implementation.endpoints[matchedRoutePath];
    const webSocketImplementation = request.ws
        ? api.implementation.webSockets[matchedRoutePath]
        : undefined;

    const routeDefinition: Readonly<EndpointDefinition | WebSocketDefinition> | undefined =
        endpointDefinition || webSocketDefinition;
    const routeImplementation:
        | Readonly<EndpointImplementation | WebSocketImplementation>
        | undefined = endpointImplementation || webSocketImplementation;

    if (!routeDefinition || !routeImplementation) {
        return undefined;
    }

    const errorRoutePath = extractErrorRoutePath({
        request,
        excludedSearchParams: excludedErrorSearchParams,
    });

    const protocols = webSocketDefinition
        ? (request.headers['sec-websocket-protocol'] || '').split(', ')
        : [];

    const connectProtocol = webSocketDefinition?.connectProtocol;

    const protocolShapeError = connectProtocol
        ? wrapInTry(() => {
              protocols.forEach((protocol) => {
                  if (!matchesWebSocketProtocolRequirement(protocol, connectProtocol)) {
                      throw new Error(
                          `WebSocket protocol '${protocol}' failed protocol requirement.`,
                      );
                  }
              });
          })
        : undefined;

    if (protocolShapeError) {
        serverLogger.error(
            new RestVirHandlerError(
                {
                    apiName: api.definition.apiName,
                    isEndpoint: !!endpointDefinition,
                    isWebSocket: !!webSocketDefinition,
                    path: routeDefinition.path,
                },
                extractErrorMessage(
                    ensureErrorAndPrependMessage(
                        protocolShapeError,
                        `WebSocket protocols rejected (${stringify(protocols)}):`,
                    ),
                ),
                HttpStatus.BadRequest,
            ),
        );

        return {
            statusCode: HttpStatus.BadRequest,
            body: 'Invalid protocol.',
        };
    }
    attachedRestVirContext.protocols = protocols;

    const corsResponse = handleHandlerOutputWithoutSending(
        await handleCors({
            request,
            route: routeImplementation,
            api,
            serverLogger,
            disableRestVirApiNameHeader,
        }),
        response,
    );

    if (corsResponse) {
        return corsResponse;
    }

    /**
     * At this point, if the method is Options, then `handleCors` would've returned something. So
     * this `method` variable can never be Options.
     */
    const method = extractHttpMethod(request.method);

    const endpointMethodDefinition =
        endpointDefinition && method
            ? extractEndpointMethodDefinition(endpointDefinition, method)
            : undefined;

    if (
        !method ||
        (endpointDefinition && !endpointMethodDefinition) ||
        (webSocketDefinition && method != HttpMethod.Get)
    ) {
        serverLogger.error(
            new RestVirHandlerError(
                {
                    apiName: api.definition.apiName,
                    isEndpoint: !!endpointDefinition,
                    isWebSocket: !!webSocketDefinition,
                    path: routeDefinition.path,
                },
                buildMethodNotAllowedMessage({
                    method: request.method,
                    url: errorRoutePath,
                }),
                HttpStatus.MethodNotAllowed,
            ),
        );
        return {
            statusCode: HttpStatus.MethodNotAllowed,
        };
    }

    const requiredHeaders = wrapInTry(() => {
        if (endpointMethodDefinition?.requiredRequestHeaders) {
            extractRequiredHeaders(
                routeDefinition.path,
                endpointMethodDefinition.requiredRequestHeaders,
                request.headers,
            );
        }
    });

    if (requiredHeaders instanceof Error) {
        serverLogger.error(
            new RestVirHandlerError(
                {
                    apiName: api.definition.apiName,
                    isEndpoint: !!endpointDefinition,
                    isWebSocket: !!webSocketDefinition,
                    path: routeDefinition.path,
                },
                combineErrorMessages(
                    `Rejected request headers from '${errorRoutePath}'.`,
                    requiredHeaders,
                ),
                HttpStatus.BadRequest,
            ),
        );
        return {
            statusCode: HttpStatus.BadRequest,
            body: 'Invalid headers.',
        };
    }

    const requestData = wrapInTry(() => {
        return extractRequestData({
            body: request.body,
            headers: request.headers,
            endpointMethodDefinition,
        });
    });

    if (requestData instanceof Error) {
        serverLogger.error(
            new RestVirHandlerError(
                {
                    apiName: api.definition.apiName,
                    isEndpoint: !!endpointDefinition,
                    isWebSocket: !!webSocketDefinition,
                    path: routeDefinition.path,
                },
                combineErrorMessages(
                    `Rejected request body from '${errorRoutePath}'.`,
                    requestData,
                ),
                HttpStatus.BadRequest,
            ),
        );
        return {
            statusCode: HttpStatus.BadRequest,
            body: 'Invalid body.',
        };
    }

    attachedRestVirContext.requestData = requestData;
    const searchParams = handleSearchParams({
        api: api.definition,
        serverLogger,
        request,
        route: routeImplementation,
        excludedErrorSearchParams,
    });

    if (!('searchParams' in searchParams)) {
        return handleHandlerOutputWithoutSending(searchParams, response);
    }
    attachedRestVirContext.searchParams = searchParams.searchParams;

    const contextParams: CreateHostContextParams = {
        ...buildHandlerParams({
            request,
            requestData,
            response,
            server,
        }),

        method,
        api,
        endpointDefinition,
        webSocketDefinition,
        searchParams: searchParams.searchParams,
    };

    try {
        const contextOutput = await api.implementation.createHostContext(contextParams);

        if (contextOutput.reject) {
            serverLogger.error(
                new RestVirHandlerError(
                    {
                        apiName: api.definition.apiName,
                        isEndpoint: !!endpointDefinition,
                        isWebSocket: !!webSocketDefinition,
                        path: routeDefinition.path,
                    },
                    `Context creation rejected: '${errorRoutePath}'`,
                    contextOutput.reject.statusCode,
                ),
            );
            return handleHandlerOutputWithoutSending(
                {
                    body: contextOutput.reject.responseData,
                    statusCode: contextOutput.reject.statusCode,
                    headers: contextOutput.reject.headers,
                },
                response,
            );
        }
        attachedRestVirContext.context = contextOutput.context;
        attachedRestVirContext.contextCreated = true;

        return undefined;
    } catch (error) {
        /**
         * Preserve the original error class when rethrowing so downstream handlers (e.g. the
         * RejectRequestError branch in handleRoute) can still recognize it.
         */
        if (error instanceof RejectRequestError) {
            throw error;
        }
        throw ensureErrorAndPrependMessage(error, 'Failed to generate request context.');
    }
}

function extractRequestData({
    body,
    headers,
    endpointMethodDefinition,
}: Readonly<{
    body: unknown;
    headers: IncomingHttpHeaders;
    endpointMethodDefinition: EndpointMethodDefinition | undefined;
}>): unknown {
    if (!endpointMethodDefinition || !('requestData' in endpointMethodDefinition)) {
        return body;
    }

    const requestDataShape: Shape | undefined = endpointMethodDefinition.requestData;

    if (requestDataShape == undefined) {
        if (body === undefined) {
            return undefined;
        } else {
            throw new Error('Did not expect any request data but received it.');
        }
    } else if (
        isFormDataShape(requestDataShape) &&
        headers['content-type']?.includes('multipart/form-data')
    ) {
        return body;
    } else if (
        !checkValidShape(body, requestDataShape, {
            /** Allow extra keys for forwards / backwards compatibility. */
            allowExtraKeys: true,
        })
    ) {
        throw new Error('Invalid request data.');
    }

    return body;
}
