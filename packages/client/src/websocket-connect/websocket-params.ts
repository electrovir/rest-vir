import {
    type DefaultWebSocketProtocol,
    type NoParam,
    type RouteSearchParamsType,
    type SetNullishPropertiesAsOptional,
    type WebSocketConnectProtocolType,
    type WebSocketDefinition,
} from '@rest-vir/api';
import {type HasRequiredKeys} from 'type-fest';
import {type ExtractPathParams} from '../path-params.js';
import {type CommonWebSocket} from './common-web-socket.js';
import {type ConnectWebSocketListeners} from './overwrite-web-socket-types.js';

/**
 * Used to define a function's rest params. The params object is only required if it has any
 * required keys.
 *
 * @category Internal
 */
export type WebSocketConnectParams<
    ThisWebSocket extends WebSocketDefinition,
    WebSocketClass extends CommonWebSocket,
> =
    HasRequiredKeys<WebSocketConnectParamObject<ThisWebSocket, WebSocketClass>> extends true
        ? [WebSocketConnectParamObject<ThisWebSocket, WebSocketClass>]
        : [WebSocketConnectParamObject<ThisWebSocket, WebSocketClass>?];

/**
 * An client params object for calling an endpoint. Only the params that have required options to
 * set are required, the rest are optional. Pass `NoParam` for a completely generic param object
 * that all param objects should be assignable to, with all properties being optional.
 *
 * @category Internal
 */
export type WebSocketConnectParamObject<
    ThisWebSocket extends WebSocketDefinition | NoParam = NoParam,
    WebSocketClass extends CommonWebSocket | NoParam = NoParam,
> = SetNullishPropertiesAsOptional<{
    /** Set search params on the WebSocket's URL. */
    searchParams: RouteSearchParamsType<ThisWebSocket>;
    /**
     * Set the required path params, if any. These are only allowed if the WebSocket's path has
     * param or wildcard strings.
     */
    pathParams: ExtractPathParams<
        ThisWebSocket extends {path: string} ? ThisWebSocket['path'] : NoParam
    >;
    /**
     * Optional listeners that will be immediately attached to the WebSocket instance instead of
     * requiring externally adding them.
     */
    listeners: ConnectWebSocketListeners<ThisWebSocket, WebSocketClass>;
    protocols: WebSocketConnectProtocolType<ThisWebSocket>;
    /**
     * A custom `WebSocket` constructor. Useful for debugging or unit testing. This can safely be
     * omitted to use the default JavaScript built-in global `WebSocket` class.
     *
     * @default globalThis.WebSocket
     */
    webSocketConstructor?: WebSocketConnectWebSocketConstructor<WebSocketClass> | undefined;
}>;

export type WebSocketConnectWebSocketConstructor<
    WebsocketClass extends CommonWebSocket | NoParam = NoParam,
> = WebsocketClass extends CommonWebSocket
    ? new (...params: WebSocketConnectWebSocketConstructorParams) => WebsocketClass
    : new (...params: WebSocketConnectWebSocketConstructorParams) => CommonWebSocket;

export type WebSocketConnectWebSocketConstructorParams = [
    url: string,
    protocols: DefaultWebSocketProtocol,
    webSocketDefinition: WebSocketDefinition,
];
