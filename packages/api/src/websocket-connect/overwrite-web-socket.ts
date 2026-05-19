import {check, waitUntil} from '@augment-vir/assert';
import {
    type AnyFunction,
    type AnyObject,
    callAsynchronously,
    DeferredPromise,
    ensureErrorAndPrependMessage,
    getOrSet,
    stringify,
    type Values,
    wrapInTry,
} from '@augment-vir/common';
import {type NoParam, parseJsonWithUndefined, type WebSocketDefinition} from '@rest-vir/api';
import {convertDuration} from 'date-vir';
import {assertValidShape} from 'object-shape-tester';
import {
    type CommonWebSocket,
    type CommonWebSocketEventMap,
    CommonWebSocketState,
} from './common-web-socket.js';
import {
    type ConnectWebSocketListeners,
    type FlipWebSocketLocation,
    type OverwriteWebSocketMethods,
    type SendAndWaitForReplyParamObject,
    type WebSocketListenerParams,
    WebSocketLocation,
} from './overwrite-web-socket-types.js';

/**
 * Overwrites WebSocket methods with the typed rest-vir replacements, attaches WebSocket listeners,
 * and waits for the WebSocket to be opened.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export async function finalizeClientWebSocket<
    const ThisWebSocket extends Readonly<WebSocketDefinition>,
    const WebSocketClass extends CommonWebSocket,
>(
    webSocketDefinition: ThisWebSocket,
    /** An already-constructed WebSocket instance. */
    webSocketInstance: WebSocketClass,
    listeners:
        | ConnectWebSocketListeners<NoInfer<ThisWebSocket>, NoInfer<WebSocketClass>>
        | undefined,
): Promise<OverwriteWebSocketMethods<WebSocketClass, WebSocketLocation.OnClient, ThisWebSocket>> {
    const webSocket = overwriteWebSocketMethods<
        ThisWebSocket,
        WebSocketClass,
        WebSocketLocation.OnClient
    >(webSocketDefinition, webSocketInstance, WebSocketLocation.OnClient);

    if (listeners?.open) {
        webSocket.addEventListener('open', listeners.open);
    }
    if (listeners?.error) {
        webSocket.addEventListener('error', listeners.error);
    }
    if (listeners?.message) {
        webSocket.addEventListener('message', listeners.message);
    }
    if (listeners?.close) {
        webSocket.addEventListener('close', listeners.close);
    }

    await waitForOpenWebSocket(webSocketInstance);

    return webSocket;
}

function cleanUpWebSocketError(error: unknown) {
    if (check.isObject(error)) {
        delete error.webSocket;
        if (
            check.hasKey(error, 'webSocketDefinition') &&
            check.hasKey(error.webSocketDefinition, 'path')
        ) {
            error.path = error.webSocketDefinition.path;
        }
        delete error.webSocketDefinition;
        return error;
        /* node:coverage ignore next 3: edge case */
    } else {
        return error;
    }
}

/**
 * Waits for a WebSocket to reach to the open state.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export async function waitForOpenWebSocket(
    webSocket: Readonly<
        Pick<CommonWebSocket, 'readyState' | 'addEventListener' | 'removeEventListener'>
    >,
) {
    const webSocketOpenedPromise = new DeferredPromise();

    function errorListener(error: unknown) {
        if (!webSocketOpenedPromise.isSettled) {
            webSocketOpenedPromise.reject(
                ensureErrorAndPrependMessage(
                    cleanUpWebSocketError(error),
                    'WebSocket connection failed.',
                ),
            );
        }
    }

    webSocket.addEventListener('error', errorListener);

    void waitUntil
        .isTruthy(
            () => {
                if (webSocketOpenedPromise.isSettled) {
                    return true;
                } else if (webSocket.readyState === CommonWebSocketState.Closed) {
                    webSocketOpenedPromise.reject('WebSocket closed while waiting for it to open.');
                    return true;
                } else if (webSocket.readyState === CommonWebSocketState.Open) {
                    webSocketOpenedPromise.resolve();
                    return true;
                } else {
                    return false;
                }
            },
            undefined,
            'WebSocket never opened',
        )
        .catch((error: unknown) => {
            if (!webSocketOpenedPromise.isSettled) {
                webSocketOpenedPromise.reject(cleanUpWebSocketError(error));
            }
        });

    await webSocketOpenedPromise.promise.finally(() => {
        webSocket.removeEventListener('error', errorListener);
    });
}

/**
 * Returns the inverse WebSocket location compared to the given WebSocket location. For example,
 * passing in `WebSocketLocation.OnHost` here will give you `WebSocketLocation.OnClient`.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function getOppositeWebSocketLocation(
    originalWebSocketLocation: WebSocketLocation,
): WebSocketLocation {
    if (originalWebSocketLocation === WebSocketLocation.OnClient) {
        return WebSocketLocation.OnHost;
    } else {
        return WebSocketLocation.OnClient;
    }
}

/**
 * Overwrites WebSocket methods with their rest-vir, type-safe replacements.
 *
 * WARNING: this mutates the input WebSocket.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function overwriteWebSocketMethods<
    const ThisWebSocket extends WebSocketDefinition,
    const WebSocketClass extends CommonWebSocket,
    const Location extends WebSocketLocation,
>(
    webSocketDefinition: ThisWebSocket,
    rawWebSocket: Readonly<WebSocketClass>,
    webSocketLocation: Location,
): OverwriteWebSocketMethods<WebSocketClass, Location, ThisWebSocket> {
    const originalSend = rawWebSocket.send;
    const originalClose = rawWebSocket.close;
    const originalAddEventListener = rawWebSocket.addEventListener;
    const originalRemoveEventListener = rawWebSocket.removeEventListener;

    const webSocket = rawWebSocket as unknown as OverwriteWebSocketMethods<
        WebSocketClass,
        Location,
        ThisWebSocket
    >;

    const deferredClosePromise = new DeferredPromise();

    webSocket.addEventListener('close', () => {
        /**
         * Call this asynchronously so the other `close` event listeners get fired before this
         * resolves.
         */
        void callAsynchronously(() => {
            deferredClosePromise.resolve();
        });
    });

    const originalListenerMap: Record<string, WeakMap<AnyFunction, AnyFunction>> = {};

    Object.assign(webSocket, {
        originalListenerMap,
        async close() {
            originalClose.call(webSocket);
            /**
             * Closing takes a _long time_ for some reason, so we want to wait until it's actually
             * done before proceeding with other operations.
             */
            await deferredClosePromise.promise;
        },
        addEventListener<const EventName extends keyof CommonWebSocketEventMap>(
            this: CommonWebSocket,
            eventName: EventName,
            listener: (
                params: WebSocketListenerParams<
                    EventName,
                    NoParam,
                    FlipWebSocketLocation<Location>,
                    WebSocketClass
                >,
            ) => unknown,
        ) {
            function newListener(event: Values<CommonWebSocketEventMap>) {
                const baseParams: Omit<
                    Record<
                        keyof WebSocketListenerParams<
                            keyof CommonWebSocketEventMap,
                            NoParam,
                            FlipWebSocketLocation<Location>,
                            WebSocketClass
                        >,
                        unknown
                    >,
                    'message'
                > = {
                    event,
                    webSocket,
                    webSocketDefinition,
                };
                if (eventName === 'message') {
                    const message = verifyWebSocketMessage(
                        webSocketDefinition,
                        parseJsonWithUndefined(
                            String((event as CommonWebSocketEventMap['message']).data),
                        ),
                        /**
                         * Flip the WebSocket location because messages on the client WebSocket will
                         * come from the host and messages on the host WebSocket will come from the
                         * client.
                         */
                        getOppositeWebSocketLocation(webSocketLocation),
                    );
                    return listener({
                        ...baseParams,
                        message,
                    } as AnyObject as WebSocketListenerParams<
                        EventName,
                        NoParam,
                        FlipWebSocketLocation<Location>,
                        WebSocketClass
                    >);
                } else {
                    return listener(
                        baseParams as AnyObject as WebSocketListenerParams<
                            EventName,
                            NoParam,
                            FlipWebSocketLocation<Location>,
                            WebSocketClass
                        >,
                    );
                }
            }

            getOrSet(originalListenerMap, eventName, () => new WeakMap()).set(
                listener,
                newListener,
            );

            return originalAddEventListener.call(webSocket, eventName, newListener);
        },
        removeEventListener(eventName: keyof CommonWebSocketEventMap, listener: AnyFunction) {
            const existing = originalListenerMap[eventName]?.get(listener);
            if (existing) {
                originalListenerMap[eventName]?.delete(listener);
                originalRemoveEventListener.call(webSocket, eventName, existing);
            }
        },
        async sendAndWaitForReply({
            message,
            timeout = {
                seconds: 10,
            },
            replyCheck,
        }: SendAndWaitForReplyParamObject<Location> | undefined = {}) {
            const deferredReply = new DeferredPromise<any>();

            async function listener({
                message,
            }: WebSocketListenerParams<
                'message',
                NoParam,
                FlipWebSocketLocation<Location>,
                WebSocketClass
            >) {
                if (!deferredReply.isSettled) {
                    const matchesChecker = replyCheck
                        ? (await wrapInTry(() => replyCheck(message))) === true
                        : true;
                    if (matchesChecker) {
                        deferredReply.resolve(message);
                    }
                }
            }
            setTimeout(
                () => {
                    if (!deferredReply.isSettled) {
                        deferredReply.reject(
                            `WebSocket '${webSocketDefinition.path}' message timeout: got no reply.`,
                        );
                    }
                },
                convertDuration(timeout, {
                    milliseconds: true,
                }).milliseconds,
            );

            webSocket.addEventListener('message', listener);
            (webSocket.send as AnyFunction)(message);

            try {
                const reply = await deferredReply.promise;

                return reply;
            } finally {
                webSocket.removeEventListener('message', listener);
            }
        },
        send(message: any) {
            originalSend.call(
                webSocket,
                /** The extra `String()` wrapper is to convert `undefined` into `'undefined'`. */
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion
                String(
                    JSON.stringify(
                        verifyWebSocketMessage(webSocketDefinition, message, webSocketLocation),
                    ),
                ),
            );
        },
    });

    return webSocket;
}

/**
 * Verifies that the given WebSocket message matches the defined expectations for the given message
 * source.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function verifyWebSocketMessage<
    const ThisWebSocket extends WebSocketDefinition,
    Location extends WebSocketLocation,
>(
    webSocketDefinition: Readonly<ThisWebSocket>,
    /** The raw message data. */
    message: any,
    /** The location from which the message was sent. */
    messageSentFrom: Location,
): any {
    const shape =
        messageSentFrom === WebSocketLocation.OnClient
            ? webSocketDefinition.clientMessage
            : webSocketDefinition.hostMessage;

    if (shape) {
        assertValidShape(message, shape, {
            allowExtraKeys: true,
        });
    } else if (message) {
        throw new TypeError(
            `WebSocket '${webSocketDefinition.path}' does not expect any message data from the ${messageSentFrom === WebSocketLocation.OnClient ? 'client' : 'host'} but received it: ${stringify(message)}.`,
        );
    }

    return message;
}
