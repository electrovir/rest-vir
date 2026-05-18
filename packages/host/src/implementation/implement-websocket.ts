import {type NoParam, type WebSocketDefinition} from '@rest-vir/api';
import {
    type BaseWebSocketImplementationParams,
    type WebSocketImplementationBase,
    type WebSocketListenerImplementationsBase,
} from '@rest-vir/api';
import {
    type RunningServerInfo,
    type ServerRequest,
    type ServerWebSocket,
} from './raw-route-data.js';
import {type ServerLogger} from './server-logger.js';

/**
 * Environment-specific extras that the fastify-backed host adds on top of
 * {@link BaseWebSocketImplementationParams} for every WebSocket listener implementation.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type HostWebSocketParamsExtras<
    ThisWebSocket extends Readonly<WebSocketDefinition> | NoParam = NoParam,
> = {
    serverLogger: ServerLogger;
    webSocket: ServerWebSocket<ThisWebSocket>;
    request: ServerRequest;
    server: RunningServerInfo;
};

/**
 * Parameters for event callbacks in {@link WebSocketListenerImplementations} on the host side.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type WebSocketImplementationParams<
    ThisWebSocket extends Readonly<WebSocketDefinition> | NoParam = NoParam,
    WithMessage extends boolean = boolean,
    HostContext = unknown,
> = BaseWebSocketImplementationParams<ThisWebSocket, WithMessage, HostContext> &
    HostWebSocketParamsExtras<ThisWebSocket>;

/**
 * Listener record for a WebSocket on the host (fastify-backed) side.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type WebSocketListenerImplementations<
    ThisWebSocket extends WebSocketDefinition | NoParam = NoParam,
    HostContext = unknown,
> = WebSocketListenerImplementationsBase<
    ThisWebSocket,
    HostContext,
    HostWebSocketParamsExtras<ThisWebSocket>
>;

/**
 * Implementation envelope for a single WebSocket on the host (fastify-backed) side.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type WebSocketImplementation<
    ThisWebSocket extends Readonly<WebSocketDefinition> = WebSocketDefinition,
    HostContext = unknown,
> = WebSocketImplementationBase<
    ThisWebSocket,
    HostContext,
    HostWebSocketParamsExtras<ThisWebSocket>
>;
