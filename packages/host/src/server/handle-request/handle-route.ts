import {assert, check} from '@augment-vir/assert';
import {ensureError, HttpStatus} from '@augment-vir/common';
import cluster from 'node:cluster';
import {type WebSocket as WsWebSocket} from 'ws';
import {type ApiImplementation} from '../../implementation/implement-api.js';
import {type EndpointImplementation} from '../../implementation/implement-endpoint.js';
import {type WebSocketImplementation} from '../../implementation/implement-websocket.js';
import {type PostRouteHook} from '../../implementation/post-route-hook.js';
import {
    type RunningServerInfo,
    type ServerRequest,
    type ServerResponse,
} from '../../implementation/raw-route-data.js';
import {RejectRequestError} from '../../implementation/reject-request.error.js';
import {type ServerLogger} from '../../implementation/server-logger.js';
import {RestVirHandlerError} from '../util/handler.error.js';
import {
    handleHandlerOutput,
    handleHandlerOutputWithoutSending,
    type HandleRouteOptions,
} from './endpoint-handler.js';
import {handleEndpointRequest} from './handle-endpoint.js';
import {handleWebSocketRequest} from './handle-web-socket.js';
import {runPostRouteHook} from './run-post-route-hook.js';

/**
 * Handles a WebSocket or Endpoint request.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export async function handleRoute({
    webSocket,
    request,
    response,
    route,
    attachId,
    server,
    options,
    postRouteHook,
    serverLogger,
    api,
}: {
    /** Endpoint requests won't have a `WebSocket`. */
    webSocket: WsWebSocket | undefined;
    request: ServerRequest;
    /** `WebSocket` requests won't have a response. */
    response: ServerResponse | undefined;
    route: Readonly<EndpointImplementation | WebSocketImplementation>;
    attachId: string;
    server: Readonly<RunningServerInfo>;
    options: Readonly<HandleRouteOptions>;
    postRouteHook: PostRouteHook | undefined;
    serverLogger: ServerLogger;
    api: ApiImplementation;
}) {
    try {
        const workerPid = cluster.isPrimary ? '' : process.pid;
        const webSocketMarker = route.isWebSocket ? '(ws)' : '';

        const logParts = [
            workerPid,
            request.method,
            webSocketMarker,
            request.originalUrl,
        ].filter(check.isTruthy);
        serverLogger.info(logParts.join('\t'));

        if (route.isEndpoint) {
            assert.isDefined(response, 'no response object');

            const result = await handleEndpointRequest({
                request,
                response,
                endpoint: route,
                attachId,
                server,
                api: api.definition,
                serverLogger,
            });

            /** The implementation already handled the response (e.g. SSE streaming). */
            if (response.sent) {
                return;
            }

            const endpointResult = handleHandlerOutputWithoutSending(result, response);

            const postHookResult =
                (postRouteHook &&
                    endpointResult?.statusCode &&
                    (await runPostRouteHook({
                        attachId,
                        originalBody: endpointResult.body,
                        originalStatus: endpointResult.statusCode,
                        postHook: postRouteHook,
                        request,
                        response,
                        server,
                        api,
                        serverLogger,
                    }))) ||
                endpointResult;

            if (postHookResult) {
                if (postHookResult.body == undefined) {
                    postHookResult.headers = {
                        ...postHookResult.headers,
                        'content-type': undefined,
                    };
                }

                return handleHandlerOutput(postHookResult, response);
            }
        } else if (route.isWebSocket as boolean) {
            assert.isDefined(webSocket);

            return await handleWebSocketRequest({
                request,
                webSocketImplementation: route,
                webSocket,
                attachId,
                server,
            });
        }

        /* node:coverage ignore next: this can't actually be triggered but it should be covered as a potential future edge case. */
        throw new RestVirHandlerError(
            {
                apiName: api.definition.apiName,
                isEndpoint: route.isEndpoint,
                isWebSocket: route.isWebSocket,
                path: route.definition.path,
            },
            'Request was not handled.',
            HttpStatus.InternalServerError,
        );
    } catch (error) {
        if (error instanceof RejectRequestError) {
            assert.isDefined(response, 'no response object');

            await handleHandlerOutput(
                {
                    statusCode: error.httpStatus,
                    body: error.responseErrorMessage,
                },
                response,
            );

            return;
        }

        serverLogger.error(ensureError(error));
        if (options.throwErrorsForExternalHandling) {
            throw error;
        } else if (response && !response.sent) {
            response.statusCode = HttpStatus.InternalServerError;
            response.send();
        }
    }
}
