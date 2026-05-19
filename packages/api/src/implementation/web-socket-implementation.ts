import {type BivariantFunction, type MaybePromise} from '@augment-vir/common';
import {type IsEqual} from 'type-fest';
import {type RouteSearchParamsType} from '../api/route.js';
import {
    type WebSocketClientMessageType,
    type WebSocketConnectProtocolType,
    type WebSocketDefinition,
} from '../api/web-socket.js';
import {type NoParam} from '../util/no-param.js';

/**
 * The portion of a WebSocket implementation's parameters that is independent of the runtime
 * environment. Both host (server) implementations and client (mock) implementations include these
 * fields; each side adds its own environment-specific extras on top via
 * {@link WebSocketListenerImplementationsBase}.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type BaseWebSocketImplementationParams<
    ThisWebSocket extends Readonly<WebSocketDefinition> | NoParam = NoParam,
    WithMessage extends boolean = boolean,
    Context = unknown,
> = {
    context: Context;
    webSocketDefinition: ThisWebSocket extends WebSocketDefinition
        ? Readonly<ThisWebSocket>
        : Readonly<WebSocketDefinition>;
    requestHeaders: Readonly<Record<string, string | string[] | undefined>>;
    protocols: WebSocketConnectProtocolType<ThisWebSocket>;
    searchParams: NonNullable<RouteSearchParamsType<ThisWebSocket>>;
} & (IsEqual<WithMessage, true> extends true
    ? {
          message: WebSocketClientMessageType<ThisWebSocket>;
      }
    : unknown);

/**
 * Generic listener implementation record for a WebSocket. Both host and client (mock) reuse this by
 * supplying their own `ExtraParams` (the environment-specific parameters layered onto the shared
 * {@link BaseWebSocketImplementationParams}).
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type WebSocketListenerImplementationsBase<
    ThisWebSocket extends WebSocketDefinition | NoParam = NoParam,
    Context = unknown,
    ExtraParams = unknown,
> = Partial<{
    /** This will be called when the WebSocket is opened and created. */
    open: BivariantFunction<
        [BaseWebSocketImplementationParams<ThisWebSocket, false, Context> & ExtraParams],
        MaybePromise<void>
    >;
    /** This will be called on every received WebSocket message. */
    message: BivariantFunction<
        [BaseWebSocketImplementationParams<ThisWebSocket, true, Context> & ExtraParams],
        MaybePromise<void>
    >;
    /** This will be called when the WebSocket is closed. */
    close: BivariantFunction<
        [BaseWebSocketImplementationParams<ThisWebSocket, false, Context> & ExtraParams],
        MaybePromise<void>
    >;
}>;

/**
 * Generic implementation envelope for a single WebSocket. Host and client (mock) reuse this by
 * supplying their own `ExtraParams`.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type WebSocketImplementationBase<
    ThisWebSocket extends Readonly<WebSocketDefinition> = WebSocketDefinition,
    Context = unknown,
    ExtraParams = unknown,
> = {
    path: ThisWebSocket['path'];
    implementation: WebSocketListenerImplementationsBase<ThisWebSocket, Context, ExtraParams>;
    definition: ThisWebSocket;
    isWebSocket: true;
    isEndpoint: false;
};
