import {assert} from '@augment-vir/assert';
import {ensureErrorClass, extractErrorMessage, stringify} from '@augment-vir/common';
import {
    overwriteWebSocketMethods,
    parseJsonWithUndefined,
    WebSocketLocation,
} from '@rest-vir/define-service';
import {
    type ImplementedWebSocket,
    RestVirHandlerError,
    type RunningServerInfo,
    type ServerRequest,
    type WebSocketImplementationParams,
} from '@rest-vir/implement-service';
import {assertValidShape} from 'object-shape-tester';
import {type WebSocket as WsWebSocket} from 'ws';
import {type RestVirRequestContext} from '../start-service/attach-service.js';

/**
 * Handles a WebSocket request.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export async function handleWebSocketRequest(
    this: void,
    {
        attachId,
        request,
        implementedWebSocket,
        webSocket: wsWebSocket,
        server,
    }: Readonly<{
        request: ServerRequest;
        attachId: string;
        implementedWebSocket: Readonly<ImplementedWebSocket>;
        webSocket: WsWebSocket;
        server: Readonly<RunningServerInfo>;
    }>,
): Promise<void> {
    // by this point in the request lifecycle, we know that these properties have been set.
    const restVirContext = request.restVirContext?.[attachId] as undefined | RestVirRequestContext;
    assert.isDefined(restVirContext, 'restVirContext is not defined');

    const webSocket = overwriteWebSocketMethods(
        implementedWebSocket,
        wsWebSocket,
        WebSocketLocation.OnHost,
    );

    /**
     * `Duplexify`-based sockets (used by `@fastify/websocket`'s `injectWS` for testing) don't emit
     * `'close'` after `end()` like real TCP sockets do. The `ws` library relies on the socket
     * `'close'` event to fire `emitClose()` and complete the close handshake. Destroying the socket
     * when it finishes writing triggers `'close'` promptly. For real TCP sockets this is
     * effectively a no-op since they close naturally after the FIN handshake.
     */
    const rawSocket = (
        wsWebSocket as unknown as {
            _socket?: {
                on: (event: string, listener: () => void) => void;
                destroyed?: boolean;
                destroy: () => void;
            };
        }
    )._socket;
    rawSocket?.on('finish', () => {
        if (!rawSocket.destroyed) {
            rawSocket.destroy();
        }
    });

    const webSocketCallbackParams: WebSocketImplementationParams = {
        context: restVirContext.context,
        headers: request.headers,
        log: implementedWebSocket.service.logger,
        request,
        service: implementedWebSocket.service,
        webSocketDefinition: implementedWebSocket,
        webSocket,
        protocols: restVirContext.protocols,
        searchParams: restVirContext.searchParams,
        server,
    };

    if (implementedWebSocket.implementation.close) {
        webSocket.on('close', async () => {
            await implementedWebSocket.implementation.close?.(webSocketCallbackParams);
        });
    }

    if (implementedWebSocket.implementation.message) {
        webSocket.on('message', async (rawMessage) => {
            let message: unknown;
            try {
                // eslint-disable-next-line @typescript-eslint/no-base-to-string
                const stringRawMessage = String(rawMessage);

                message = parseJsonWithUndefined(stringRawMessage);

                if (implementedWebSocket.messageFromClientShape) {
                    assertValidShape(
                        message,
                        implementedWebSocket.messageFromClientShape,
                        {
                            allowExtraKeys: true,
                        },
                        'Invalid message send shape.',
                    );
                } else if (message) {
                    throw new Error(
                        `Did not expect any data from the client but got ${stringify(message)}.`,
                    );
                }
            } catch (error) {
                const errorMessage = `Failed to receive WebSocket message '${String(rawMessage as unknown)}': ${extractErrorMessage(error)}`;

                implementedWebSocket.service.logger.error(
                    ensureErrorClass(
                        error,
                        RestVirHandlerError,
                        implementedWebSocket,
                        errorMessage,
                    ),
                );
            }
            try {
                await implementedWebSocket.implementation.message?.({
                    ...webSocketCallbackParams,
                    message,
                });
            } catch (error) {
                implementedWebSocket.service.logger.error(
                    ensureErrorClass(
                        error,
                        RestVirHandlerError,
                        implementedWebSocket,
                        `Failed to handle WebSocket message '${String(rawMessage as unknown)}': ${extractErrorMessage(error)}`,
                    ),
                );
            }
        });
    }

    if (implementedWebSocket.implementation.open) {
        await implementedWebSocket.implementation.open(webSocketCallbackParams);
    }
}
