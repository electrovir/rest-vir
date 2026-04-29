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
import {extractEndpointMethodDefinition, extractHttpMethod, isFormDataShape} from '@rest-vir/api';
import {restVirApiNameHeader} from '@rest-vir/client';
import {type IncomingHttpHeaders} from 'node:http';
import {assertValidShape, checkValidShape, type Shape} from 'object-shape-tester';
import {type CreateHostContextParams} from '../../implementation/host-context.js';
import {type ImplementedApi} from '../../implementation/implement-api.js';
import {
    type RunningServerInfo,
    type ServerRequest,
    type ServerResponse,
} from '../../implementation/raw-route-data.js';
import {type ServerLogger} from '../../implementation/server-logger.js';
import {RestVirHandlerError} from '../util/handler.error.js';
import {matchUrlToRoute} from '../util/match-url.js';
import {handleHandlerOutputWithoutSending, type HandledOutput} from './endpoint-handler.js';
import {handleCors} from './handle-cors.js';
import {handleSearchParams} from './handle-search-params.js';
import {buildHandlerParams} from './handler-params.js';

/**
 * Handles a request before it gets to the actual route handlers.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export async function preHandler({
    request,
    response,
    api,
    server,
    attachId,
    serverLogger,
}: {
    request: ServerRequest;
    response: ServerResponse;
    api: Readonly<ImplementedApi>;
    server: Readonly<RunningServerInfo>;
    attachId: string;
    serverLogger: ServerLogger;
}): Promise<Readonly<HandledOutput>> {
    if (!request.restVirContext) {
        request.restVirContext = {};
    }
    const attachedRestVirContext = getOrSet(request.restVirContext, attachId, () => {
        return {};
    });

    response.header(restVirApiNameHeader, api.definition.apiName);

    const pathMatch = matchUrlToRoute(api.definition, request.originalUrl);

    if (!pathMatch) {
        /** Nothing to do. */
        return undefined;
    }

    const endpointDefinition = pathMatch.endpointPath
        ? api.definition.endpoints[pathMatch.endpointPath]
        : undefined;
    const webSocketDefinition =
        request.ws && pathMatch.webSocketPath
            ? api.definition.webSockets[pathMatch.webSocketPath]
            : undefined;

    const route = endpointDefinition || webSocketDefinition;

    if (!route) {
        return undefined;
    }

    const protocols = webSocketDefinition
        ? (request.headers['sec-websocket-protocol'] || '').split(', ')
        : [];

    const connectProtocol = webSocketDefinition?.connectProtocol;

    const protocolShapeError = connectProtocol
        ? wrapInTry(() => {
              protocols.forEach((protocol) => {
                  assertValidShape(protocol, connectProtocol, {
                      allowExtraKeys: true,
                  });
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
                    path: route.path,
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
            route,
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
                    path: route.path,
                },
                `Method '${request.method.toUpperCase()}' rejected: '${request.originalUrl}'`,
                HttpStatus.MethodNotAllowed,
            ),
        );
        return {
            statusCode: HttpStatus.MethodNotAllowed,
        };
    }

    const requestData = wrapInTry(() =>
        extractRequestData(request.body, request.headers, endpointMethodDefinition?.requestData),
    );

    if (requestData instanceof Error) {
        serverLogger.error(
            new RestVirHandlerError(
                {
                    apiName: api.definition.apiName,
                    isEndpoint: !!endpointDefinition,
                    isWebSocket: !!webSocketDefinition,
                    path: route.path,
                },
                combineErrorMessages(
                    `Rejected request body from '${request.originalUrl}'.`,
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
        request,
        route,
    });

    if (!('data' in searchParams)) {
        return handleHandlerOutputWithoutSending(searchParams, response);
    }
    attachedRestVirContext.searchParams = searchParams.data;

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
        searchParams: searchParams.data,
    };

    try {
        const contextOutput = await api.implementation.createHostContext?.(contextParams);

        if (contextOutput?.reject) {
            serverLogger.error(
                new RestVirHandlerError(
                    {
                        apiName: api.definition.apiName,
                        isEndpoint: !!endpointDefinition,
                        isWebSocket: !!webSocketDefinition,
                        path: route.path,
                    },
                    `Context creation rejected: '${request.originalUrl}'`,
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
        attachedRestVirContext.context = contextOutput?.context;

        return undefined;
    } catch (error) {
        throw ensureErrorAndPrependMessage(error, 'Failed to generate request context.');
    }
}

function extractRequestData(
    body: unknown,
    headers: IncomingHttpHeaders,
    requestDataShape: Shape | undefined,
): unknown {
    if (requestDataShape == undefined) {
        if (body) {
            throw new Error(`Did not expect any request data but received it.`);
        } else {
            return undefined;
        }
    }

    if (
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
