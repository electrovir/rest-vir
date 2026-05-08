import {type MaybePromise} from '@augment-vir/common';
import {
    type MakeBivariantFunction,
    type NoParam,
    type RouteSearchParamsType,
    type WebSocketClientMessageType,
    type WebSocketConnectProtocolType,
    type WebSocketDefinition,
} from '@rest-vir/api';
import {type IncomingHttpHeaders} from 'node:http';
import {type IsEqual} from 'type-fest';
import {
    type RunningServerInfo,
    type ServerRequest,
    type ServerWebSocket,
} from './raw-route-data.js';
import {type ServerLogger} from './server-logger.js';

export type WebSocketImplementation<Path extends PropertyKey = PropertyKey> = {
    path: Path;
    implementation: WebSocketListenerImplementations;
    definition: WebSocketDefinition & {
        path: Path;
    };
    isWebSocket: true;
    isEndpoint: false;
};

export type WebSocketListenerImplementations<
    ThisWebSocket extends WebSocketDefinition | NoParam = NoParam,
    HostContext = unknown,
> = Partial<{
    /** This will be called when the WebSocket is opened and created. */
    open: MakeBivariantFunction<
        WebSocketImplementationParams<ThisWebSocket, false, HostContext>,
        MaybePromise<void>
    >;
    /**
     * This will be called on every received WebSocket message.
     *
     * @see https://github.com/websockets/ws/blob/HEAD/doc/ws.md#event-message
     */
    message: MakeBivariantFunction<
        WebSocketImplementationParams<ThisWebSocket, true, HostContext>,
        MaybePromise<void>
    >;
    /**
     * This will be called when the WebSocket is closed.
     *
     * @see https://github.com/websockets/ws/blob/HEAD/doc/ws.md#event-close-1
     */
    close: MakeBivariantFunction<
        WebSocketImplementationParams<ThisWebSocket, false, HostContext>,
        MaybePromise<void>
    >;
}>;

/**
 * Parameters for event callbacks in {@link WebSocketListenerImplementations}.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type WebSocketImplementationParams<
    ThisWebSocket extends Readonly<WebSocketDefinition> | NoParam = NoParam,
    WithMessage extends boolean = boolean,
    HostContext = unknown,
> = {
    serverLogger: ServerLogger;
    context: HostContext;
    webSocket: ServerWebSocket<ThisWebSocket>;
    webSocketDefinition: ThisWebSocket extends WebSocketDefinition
        ? Readonly<ThisWebSocket>
        : Readonly<WebSocketDefinition>;
    requestHeaders: IncomingHttpHeaders;
    request: ServerRequest;
    protocols: WebSocketConnectProtocolType<ThisWebSocket>;
    searchParams: NonNullable<RouteSearchParamsType<ThisWebSocket>>;
    /** The actual running server info. */
    server: RunningServerInfo;
} & (IsEqual<WithMessage, true> extends true
    ? {
          message: WebSocketClientMessageType<ThisWebSocket>;
      }
    : unknown);
