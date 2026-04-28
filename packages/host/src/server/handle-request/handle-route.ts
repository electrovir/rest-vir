import {assert, check} from '@augment-vir/assert';
import {ensureError, HttpStatus, type SelectFrom} from '@augment-vir/common';
import {
    type GenericServiceImplementation,
    type ImplementedEndpoint,
    type ImplementedWebSocket,
    type PostHook,
    RejectRequestError,
    RestVirHandlerError,
    type RunningServerInfo,
    type ServerRequest,
    type ServerResponse,
} from '@rest-vir/implement-service';
import cluster from 'node:cluster';
import {type WebSocket as WsWebSocket} from 'ws';
import {
    handleHandlerOutput,
    handleHandlerOutputWithoutSending,
    type HandleRouteOptions,
} from './endpoint-handler.js';
import {handleEndpointRequest} from './handle-endpoint.js';
import {handleWebSocketRequest} from './handle-web-socket.js';
import {runPostHook} from './run-post-hook.js';

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
    postHook,
    service,
}: {
    /** Endpoint requests won't have a `WebSocket`. */ webSocket: WsWebSocket | undefined;
    request: ServerRequest /** `WebSocket` requests won't have a response. */;
    response: ServerResponse | undefined;
    route: Readonly<ImplementedEndpoint | ImplementedWebSocket>;
    attachId: string;
    server: Readonly<RunningServerInfo>;
    options: Readonly<Pick<HandleRouteOptions, 'throwErrorsForExternalHandling'>>;
    postHook: PostHook | undefined;
    service: Readonly<
        SelectFrom<
            GenericServiceImplementation,
            {
                webSockets: true;
                endpoints: true;
                serviceName: true;
                serviceOrigin: true;
                requiredClientOrigin: true;
            }
        >
    >;
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
        route.service.logger.info(logParts.join('\t'));

        if (route.isEndpoint) {
            assert.isDefined(response, 'no response object');

            const result = await handleEndpointRequest({
                request,
                response,
                endpoint: route,
                attachId,
                server,
            });

            /** The implementation already handled the response (e.g. SSE streaming). */
            if (response.sent) {
                return;
            }

            const endpointResult = handleHandlerOutputWithoutSending(result, response);

            const postHookResult =
                (postHook &&
                    endpointResult?.statusCode &&
                    (await runPostHook({
                        attachId,
                        originalBody: endpointResult.body,
                        originalStatus: endpointResult.statusCode,
                        postHook,
                        request,
                        response,
                        server,
                        service,
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
                implementedWebSocket: route,
                webSocket,
                attachId,
                server,
            });
        }

        /* node:coverage ignore next: this can't actually be triggered but it should be covered as a potential future edge case. */
        throw new RestVirHandlerError(route, 'Request was not handled.');
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

        route.service.logger.error(ensureError(error));
        if (options.throwErrorsForExternalHandling) {
            throw error;
        } else if (response && !response.sent) {
            response.statusCode = HttpStatus.InternalServerError;
            response.send();
        }
    }
}
