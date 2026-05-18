import {
    callAsynchronously,
    getOrSet,
    HttpMethod,
    type AnyFunction,
    type MaybePromise,
} from '@augment-vir/common';
import {type CreateHostContextOutput, type WebSocketDefinition} from '@rest-vir/api';
import {parseUrl} from 'url-vir';
import {extractSearchParams} from '../search-params.js';
import {
    CommonWebSocketState,
    type CommonWebSocket,
    type CommonWebSocketEventMap,
} from '../websocket-connect/common-web-socket.js';
import {
    type WebSocketConnectWebSocketConstructor,
    type WebSocketConnectWebSocketConstructorParams,
} from '../websocket-connect/websocket-params.js';
import {type MockCreateHostContext} from './mock-host-context.js';
import {resolveMockHostContext} from './mock-host-resolve-context.js';
import {
    type MockHostWebSocket,
    type MockWebSocketListenerImplementations,
} from './mock-web-socket-implementation.js';

/**
 * Options for {@link createMockHostWebSocketConstructor}.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type MockHostWebSocketConstructorOptions<Context> = {
    webSocketImplementations: Readonly<
        Record<
            string,
            MockWebSocketListenerImplementations<WebSocketDefinition, Context> | undefined
        >
    >;
    /**
     * Raw mock-host `createHostContext` callback. The constructor handles the missing-callback case
     * (treats it as `{context: undefined}`) and forwards the per-event params for you.
     */
    createHostContext: MockCreateHostContext<Context> | undefined;
};

/**
 * Builds the WebSocket constructor used by the mock host. The returned class is compatible with
 * `connectWebSocket`'s `webSocketConstructor` param: it opens via `queueMicrotask`, fires `open`,
 * `message`, `close`, and `error` events into the client's listener API, and dispatches messages
 * sent from the client into the user's declared mock implementations. Extracted from
 * `createMockHost` so it can be reused independently and so the closure-captured `api`/`context`
 * resolver are explicit factory inputs rather than implicit captures.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export function createMockHostWebSocketConstructor<const Context = unknown>({
    webSocketImplementations,
    createHostContext,
}: MockHostWebSocketConstructorOptions<Context>): WebSocketConnectWebSocketConstructor {
    class MockHostWebSocketConstructor implements CommonWebSocket {
        public readyState: CommonWebSocketState = CommonWebSocketState.Connecting;
        public async send(data: unknown) {
            await this.handleClientSend(data);
        }

        protected listeners: Partial<{
            [EventName in keyof CommonWebSocketEventMap]: AnyFunction[];
        }> = {};

        protected readonly url: string;
        protected readonly protocols: string[];
        protected readonly webSocketDefinition: WebSocketDefinition;
        protected readonly implementations:
            | MockWebSocketListenerImplementations<WebSocketDefinition, Context>
            | undefined;
        protected readonly searchParams: ReturnType<typeof extractSearchParams>;
        /**
         * The wrapping class is the client-facing mock WebSocket. This member is the host-facing
         * mock WebSocket.
         */
        protected readonly hostFacingMockWebSocket: MockHostWebSocket;

        constructor(...args: Readonly<WebSocketConnectWebSocketConstructorParams>) {
            const [
                url,
                protocols,
                webSocketDefinition,
            ] = args;
            this.url = url;
            this.protocols = protocols || [];
            this.webSocketDefinition = webSocketDefinition;
            this.implementations = webSocketImplementations[webSocketDefinition.path];

            try {
                this.searchParams = extractSearchParams(
                    webSocketDefinition.searchParams,
                    parseUrl(this.url).searchParams,
                );
            } catch (error) {
                /** Defer the open + emit an error event so callers can react like with a real WS. */
                this.searchParams = {};
                // eslint-disable-next-line sonarjs/no-async-constructor
                void callAsynchronously(() => {
                    this.dispatchEvent('error', {
                        target: this,
                        type: 'error',
                    });
                });
                throw error;
            }

            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const owner = this;
            this.hostFacingMockWebSocket = {
                get readyState() {
                    return owner.readyState;
                },
                send: (message: unknown) => {
                    this.sendFromHost(message);
                },
                sendFromHost: (message: unknown) => {
                    this.sendFromHost(message);
                },
                close: () => {
                    this.close();
                },
            };

            // eslint-disable-next-line sonarjs/no-async-constructor
            void callAsynchronously(() => {
                void this.open();
            });
        }

        public addEventListener<const EventName extends keyof CommonWebSocketEventMap>(
            eventName: EventName,
            listener: (event: CommonWebSocketEventMap[EventName]) => MaybePromise<void>,
        ) {
            getOrSet(this.listeners, eventName, () => []).push(listener);
        }

        public removeEventListener<const EventName extends keyof CommonWebSocketEventMap>(
            eventName: EventName,
            listener: (event: CommonWebSocketEventMap[EventName]) => MaybePromise<void>,
        ) {
            const listeners = this.listeners[eventName];
            if (!listeners) {
                return;
            }
            this.listeners[eventName] = listeners.filter((entry) => entry !== listener);
        }

        public close() {
            if (this.readyState === CommonWebSocketState.Closed) {
                return;
            }
            const wasOpen = this.readyState === CommonWebSocketState.Open;
            this.readyState = CommonWebSocketState.Closed;
            this.dispatchEvent('close', {
                code: 0,
                reason: 'manually closed',
                wasClean: true,
                target: this,
                type: 'close',
            });
            if (wasOpen) {
                void this.callListener('close');
            }
            this.listeners = {};
        }

        protected async open() {
            if (this.readyState !== CommonWebSocketState.Connecting) {
                return;
            }
            this.readyState = CommonWebSocketState.Open;
            this.dispatchEvent('open', {
                target: this,
                type: 'open',
            });
            await this.callListener('open');
        }

        protected async callListener(eventName: 'open' | 'close', message?: unknown) {
            const handler = this.implementations ? this.implementations[eventName] : undefined;
            if (!handler) {
                return;
            }
            const contextOutput = await this.resolveSocketContext(message);
            if (!contextOutput || contextOutput.reject) {
                return;
            }
            try {
                await handler({
                    context: contextOutput.context,
                    webSocketDefinition: this.webSocketDefinition,
                    requestHeaders: {},
                    protocols: this.protocols as never,
                    searchParams: this.searchParams,
                    webSocket: this.hostFacingMockWebSocket,
                    ...(eventName === 'open'
                        ? {}
                        : {
                              message,
                          }),
                });
            } catch {
                /**
                 * Surface handler failures as an `error` event on the WebSocket — matching how a
                 * real WebSocket signals trouble — instead of leaking an unhandled rejection.
                 */
                this.dispatchEvent('error', {
                    target: this,
                    type: 'error',
                });
            }
        }

        protected async handleClientSend(message: unknown) {
            if (this.readyState !== CommonWebSocketState.Open) {
                return;
            }
            const parsedMessage = parseMockSocketMessage(message);
            const handler = this.implementations ? this.implementations['message'] : undefined;
            if (!handler) {
                return;
            }
            const contextOutput = await this.resolveSocketContext(parsedMessage);
            if (!contextOutput || contextOutput.reject) {
                return;
            }
            try {
                await handler({
                    context: contextOutput.context,
                    webSocketDefinition: this.webSocketDefinition,
                    requestHeaders: {},
                    protocols: this.protocols as never,
                    searchParams: this.searchParams,
                    webSocket: this.hostFacingMockWebSocket,
                    message: parsedMessage,
                });
            } catch {
                this.dispatchEvent('error', {
                    target: this,
                    type: 'error',
                });
            }
        }

        /**
         * Run the `createHostContext` callback for a WebSocket event. Returns the resolved output,
         * or `undefined` if the callback threw (an `error` event has already been emitted in that
         * case). When the output is a `{reject}`, this also closes the connection so the client
         * sees an immediate disconnect, mirroring how the host package handles a rejected context.
         */
        protected async resolveSocketContext(
            message: unknown,
        ): Promise<CreateHostContextOutput<Context> | undefined> {
            try {
                const output = await resolveMockHostContext(createHostContext, {
                    searchParams: this.searchParams,
                    requestHeaders: {},
                    /** WebSocket connections are always made over GET. */
                    method: HttpMethod.Get,
                    requestData: message,
                    endpointDefinition: undefined,
                    webSocketDefinition: this.webSocketDefinition,
                    url: this.url,
                });
                if (output.reject) {
                    this.dispatchEvent('error', {
                        target: this,
                        type: 'error',
                    });
                    this.close();
                }
                return output;
            } catch {
                this.dispatchEvent('error', {
                    target: this,
                    type: 'error',
                });
                return undefined;
            }
        }

        protected sendFromHost(data: unknown) {
            if (this.readyState !== CommonWebSocketState.Open) {
                return;
            }
            this.dispatchEvent('message', {
                data: JSON.stringify(data),
                target: this,
                type: 'message',
            });
        }

        protected dispatchEvent<const EventName extends keyof CommonWebSocketEventMap>(
            eventName: EventName,
            event: CommonWebSocketEventMap[EventName],
        ) {
            this.listeners[eventName]?.forEach((listener) => {
                void listener(event);
            });
        }
    }

    return MockHostWebSocketConstructor as unknown as WebSocketConnectWebSocketConstructor;
}

function parseMockSocketMessage(rawData: unknown): unknown {
    if (typeof rawData !== 'string') {
        return rawData;
    } else if (rawData === 'undefined') {
        return undefined;
    }
    try {
        return JSON.parse(rawData);
    } catch {
        return rawData;
    }
}
