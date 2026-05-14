import {assertWrap} from '@augment-vir/assert';
import {
    ensureErrorAndPrependMessage,
    extractErrorMessage,
    getOrSet,
    HttpStatus,
    stringify,
    wrapInTry,
    type SelectFrom,
} from '@augment-vir/common';
import {
    isFormDataShape,
    matchUrlToService,
    restVirServiceNameHeader,
    type EndpointDefinition,
    type WebSocketDefinition,
} from '@rest-vir/define-service';
import {
    HttpMethod,
    RestVirHandlerError,
    type ContextInitParams,
    type GenericServiceImplementation,
    type RunningServerInfo,
    type ServerRequest,
    type ServerResponse,
} from '@rest-vir/implement-service';
import {type IncomingHttpHeaders} from 'node:http';
import {assertValidShape, checkValidShape} from 'object-shape-tester';
import {handleHandlerOutputWithoutSending, type HandledOutput} from './endpoint-handler.js';
import {handleCors} from './handle-cors.js';
import {handleRequestMethod} from './handle-request-method.js';
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
    service,
    server,
    attachId,
}: {
    request: ServerRequest;
    response: ServerResponse;
    service: Readonly<
        SelectFrom<
            GenericServiceImplementation,
            {
                webSockets: true;
                endpoints: true;
                serviceName: true;
                createContext: true;
                serviceOrigin: true;
                requiredClientOrigin: true;
                logger: true;
            }
        >
    >;
    server: Readonly<RunningServerInfo>;
    attachId: string;
}): Promise<Readonly<HandledOutput>> {
    if (!request.restVirContext) {
        request.restVirContext = {};
    }
    const attachedRestVirContext = getOrSet(request.restVirContext, attachId, () => {
        return {};
    });

    response.header(restVirServiceNameHeader, service.serviceName);

    const pathMatch = matchUrlToService(service, request.originalUrl);

    if (!pathMatch) {
        /** Nothing to do. */
        return undefined;
    }

    const endpointDefinition = pathMatch.endpointPath
        ? service.endpoints[pathMatch.endpointPath]
        : undefined;
    const webSocketDefinition =
        request.ws && pathMatch.webSocketPath
            ? service.webSockets[pathMatch.webSocketPath]
            : undefined;

    const route = endpointDefinition || webSocketDefinition;

    if (!route) {
        return undefined;
    }

    const protocols = webSocketDefinition
        ? (request.headers['sec-websocket-protocol'] || '').split(', ')
        : [];

    const protocolShapeError = webSocketDefinition?.protocolsShape
        ? wrapInTry(() =>
              assertValidShape(protocols, webSocketDefinition.protocolsShape, {
                  allowExtraKeys: true,
              }),
          )
        : undefined;

    if (protocolShapeError) {
        service.logger.error(
            new RestVirHandlerError(
                route,
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

    const subHandlerResponse =
        handleHandlerOutputWithoutSending(
            await handleCors({
                request,
                route,
            }),
            response,
        ) ||
        handleHandlerOutputWithoutSending(
            handleRequestMethod({
                request,
                route,
            }),
            response,
        );

    if (subHandlerResponse) {
        return subHandlerResponse;
    }

    const requestData = wrapInTry(() => extractRequestData(request.body, request.headers, route));

    if (requestData instanceof Error) {
        service.logger.error(
            new RestVirHandlerError(
                route,
                `Rejected request body from '${request.originalUrl}': ${stringify(requestData)}`,
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

    const contextParams: ContextInitParams = {
        ...buildHandlerParams({
            request,
            requestData,
            response,
            server,
        }),

        method: assertWrap.isEnumValue(request.method.toUpperCase(), HttpMethod),
        service,
        endpointDefinition,
        webSocketDefinition,
        searchParams: searchParams.data,
    };

    try {
        const contextOutput = await service.createContext?.(contextParams);

        if (contextOutput?.reject) {
            service.logger.error(
                new RestVirHandlerError(
                    route,
                    `Context creation rejected: '${request.originalUrl}'`,
                    contextOutput.reject.statusCode,
                ),
            );
            return handleHandlerOutputWithoutSending(
                {
                    body: contextOutput.reject.responseErrorMessage,
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
    route: Readonly<
        SelectFrom<
            EndpointDefinition | WebSocketDefinition,
            {
                requestDataShape: true;
                path: true;
                service: {
                    serviceName: true;
                };
                isEndpoint: true;
                isWebSocket: true;
            }
        >
    >,
): unknown {
    const dataShape = 'requestDataShape' in route ? route.requestDataShape : undefined;

    if (dataShape == undefined) {
        if (body) {
            throw new Error('Did not expect any request data but received it.');
        } else {
            return undefined;
        }
    }

    if (isFormDataShape(dataShape) && headers['content-type']?.includes('multipart/form-data')) {
        return body;
    } else if (
        !checkValidShape(body, dataShape, {
            /** Allow extra keys for forwards / backwards compatibility. */
            allowExtraKeys: true,
        })
    ) {
        throw new Error('Invalid request data.');
    }

    return body;
}
