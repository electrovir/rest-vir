import {type WebSocketDefinition} from '../api/web-socket.js';
import {
    type WebSocketImplementationBase,
    type WebSocketListenerImplementationsBase,
} from '../implementation/web-socket-implementation.js';
import {type NoParam} from '../util/no-param.js';
import {type CommonWebSocketState} from '../websocket-connect/common-web-socket.js';

/**
 * Extras that mock WebSocket implementations receive on top of the shared base params.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type MockWebSocketParamsExtras = {
    /** The WebSocket the client is connected to, with `send`/`close`/event subscription. */
    webSocket: MockHostWebSocket;
};

/**
 * Listener record for a WebSocket on the client (mock) side.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type MockWebSocketListenerImplementations<
    ThisWebSocket extends WebSocketDefinition | NoParam = NoParam,
    Context = unknown,
> = WebSocketListenerImplementationsBase<ThisWebSocket, Context, MockWebSocketParamsExtras>;

/**
 * Implementation envelope for a single WebSocket on the client (mock) side.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type MockWebSocketImplementation<
    ThisWebSocket extends Readonly<WebSocketDefinition> = WebSocketDefinition,
    Context = unknown,
> = WebSocketImplementationBase<ThisWebSocket, Context, MockWebSocketParamsExtras>;

/**
 * The minimal `webSocket` interface that a mock WebSocket implementation can call into to send
 * messages back to the connected client or close the connection.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type MockHostWebSocket = {
    readyState: CommonWebSocketState;
    /**
     * Send a message from the mock host back to the connected client. Equivalent to
     * `webSocket.send(...)` on the host side.
     */
    send: (message: unknown) => void;
    /** Close the WebSocket connection. */
    close: () => void;
};
