import {type BivariantFunction, type MaybePromise, type Overwrite} from '@augment-vir/common';
import {
    type NoParam,
    type RouteSearchParamsType,
    type SetNullishPropertiesAsOptional,
    type WebSocketClientMessageType,
    type WebSocketDefinition,
    type WebSocketHostMessageType,
} from '@rest-vir/api';
import {type AnyDuration} from 'date-vir';
import {type HasRequiredKeys, type IsAny} from 'type-fest';
import {type CommonWebSocket, type CommonWebSocketEventMap} from './common-web-socket.js';

/**
 * Location of the WebSocket in question: on a client connecting to a WebSocket host or on the host
 * that's accepting WebSocket connections.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export enum WebSocketLocation {
    /** On the host, accepting WebSocket client connections. */
    OnHost = 'on-host',
    /** On a client, connecting to a WebSocket host. */
    OnClient = 'on-client',
}

/**
 * An object defining declaratively created listeners that will be attached to a rest-vir WebSocket
 * connection
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type ConnectWebSocketListeners<
    ThisWebSocket extends WebSocketDefinition | NoParam,
    WebSocketClass extends CommonWebSocket | NoParam,
> =
    | Partial<{
          [EventName in keyof CommonWebSocketEventMap]: BivariantFunction<
              [
                  WebSocketListenerParams<
                      EventName,
                      ThisWebSocket,
                      WebSocketLocation.OnHost,
                      WebSocketClass
                  >,
              ],
              MaybePromise<void>
          >;
      }>
    | undefined;

/**
 * A type-safe WebSocket listener callback.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type WebSocketListener<
    EventName extends keyof CommonWebSocketEventMap,
    ThisWebSocket extends WebSocketDefinition | NoParam,
    MessageSource extends WebSocketLocation,
    WebSocketClass extends CommonWebSocket | NoParam,
> = (
    params: WebSocketListenerParams<EventName, ThisWebSocket, MessageSource, WebSocketClass>,
) => MaybePromise<void>;

/**
 * A WebSocket instance used only in clients to connect to a host.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type ClientWebSocket<
    ThisWebSocket extends WebSocketDefinition | NoParam = NoParam,
    WebSocketClass extends CommonWebSocket | NoParam = NoParam,
> = OverwriteWebSocketMethods<
    WebSocketClass extends CommonWebSocket ? WebSocketClass : CommonWebSocket,
    WebSocketLocation.OnClient,
    ThisWebSocket
>;

/**
 * Parameters for a type-safe WebSocket listener callback. Used in {@link WebSocketListener}.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type WebSocketListenerParams<
    EventName extends keyof CommonWebSocketEventMap,
    ThisWebSocket extends WebSocketDefinition | NoParam,
    MessageSource extends WebSocketLocation,
    WebSocketClass extends CommonWebSocket | NoParam,
> = {
    webSocketDefinition: ThisWebSocket extends WebSocketDefinition
        ? ThisWebSocket
        : WebSocketDefinition;
    webSocket: ClientWebSocket<ThisWebSocket, WebSocketClass>;
} & (EventName extends 'message'
    ? {
          event: Overwrite<
              CommonWebSocketEventMap[EventName],
              {
                  data: WebSocketLocationMessageType<MessageSource, ThisWebSocket>;
              }
          >;
          searchParams: RouteSearchParamsType<ThisWebSocket>;
          message: WebSocketLocationMessageType<MessageSource, ThisWebSocket>;
      }
    : {
          event: CommonWebSocketEventMap[EventName];
      });

/**
 * Returns the inverse WebSocket location compared to the given WebSocket location. For example,
 * passing in `WebSocketLocation.OnHost` here will give you `WebSocketLocation.OnClient`.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type FlipWebSocketLocation<Location extends WebSocketLocation> =
    Location extends WebSocketLocation.OnHost
        ? WebSocketLocation.OnClient
        : WebSocketLocation.OnHost;

/**
 * Takes any WebSocket class and overwrites it with some new rest vir methods and makes some
 * existing WebSocket methods type safe.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type OverwriteWebSocketMethods<
    WebSocketClass extends CommonWebSocket,
    Location extends WebSocketLocation,
    ThisWebSocket extends WebSocketDefinition | NoParam = NoParam,
> = Overwrite<
    WebSocketClass,
    {
        /**
         * Closes the WebSocket and waits it to actually close (so that you _know_ it's been closed
         * once this resolves).
         */
        close(): Promise<void>;
        /**
         * Adds an event listener that's wrapped in assertions to verify that message events have
         * the expected contents.
         */
        addEventListener<const EventName extends keyof CommonWebSocketEventMap>(
            eventName: EventName,
            listener: WebSocketListener<
                EventName,
                ThisWebSocket,
                FlipWebSocketLocation<Location>,
                WebSocketClass
            >,
        ): void;
        /**
         * Sends a message to the other side of the WebSocket connection and waits that other side
         * to send a message in response.
         *
         * This will catch messages that might not have been intended as a response for the original
         * message as it will catch _any_ message sent from the other side.
         */
        sendAndWaitForReply(
            ...params: WebSocketSendAndWaitForReplyParams<Location, ThisWebSocket>
        ): Promise<WebSocketLocationMessageType<FlipWebSocketLocation<Location>, ThisWebSocket>>;
        /**
         * Sends data through the WebSocket to the other side of the connection. This rest-vir
         * wrapper ensures that all sent messages match expected types from the WebSocket
         * definition.
         *
         * See [MDN](https://developer.mozilla.org/docs/Web/API/WebSocket/send) for the original
         * `WebSocket.send()` docs.
         */
        send(...args: WebSocketSendMessageParams<Location, ThisWebSocket>): void;
    }
>;

export type WebSocketSendMessageParams<
    Location extends WebSocketLocation,
    ThisWebSocket extends WebSocketDefinition | NoParam = NoParam,
> =
    IsAny<WebSocketLocationMessageType<Location, ThisWebSocket>> extends true
        ? [any?]
        : WebSocketLocationMessageType<Location, ThisWebSocket> extends undefined
          ? [WebSocketLocationMessageType<Location, ThisWebSocket>?]
          : [WebSocketLocationMessageType<Location, ThisWebSocket>];

/**
 * Collapsed version of {@link WebSocketSendAndWaitForReplyParams} for the `sendAndWaitForReply`
 * method that only _requires_ an object parameter if the parameters object has any required keys.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type WebSocketSendAndWaitForReplyParams<
    Location extends WebSocketLocation,
    ThisWebSocket extends WebSocketDefinition | NoParam = NoParam,
> =
    HasRequiredKeys<SendAndWaitForReplyParamObject<Location, ThisWebSocket>> extends true
        ? [SendAndWaitForReplyParamObject<Location, ThisWebSocket>]
        : [SendAndWaitForReplyParamObject<Location, ThisWebSocket>?];

/**
 * Determines a message's type based on the WebSocketLocation of where that message came from.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type WebSocketLocationMessageType<
    MessageFromSource extends WebSocketLocation,
    ThisWebSocket extends WebSocketDefinition | NoParam = NoParam,
> = ThisWebSocket extends WebSocketDefinition
    ? MessageFromSource extends WebSocketLocation.OnClient
        ? WebSocketClientMessageType<ThisWebSocket>
        : WebSocketHostMessageType<ThisWebSocket>
    : any;

/**
 * Parameters for the `sendAndWaitForReply` method that gets attached to WebSockets.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type SendAndWaitForReplyParamObject<
    Location extends WebSocketLocation,
    ThisWebSocket extends WebSocketDefinition | NoParam = NoParam,
> = SetNullishPropertiesAsOptional<{
    message: WebSocketMessageType<Location, ThisWebSocket>;
    /**
     * The duration to wait for a reply message. If this duration is exceeded and a response still
     * hasn't been received, an error is thrown.
     *
     * @default {seconds: 10}
     */
    timeout?: Readonly<AnyDuration> | undefined;
    /**
     * An optional function to check if the current reply is the one you were waiting for.
     *
     * If this is set, `sendAndWaitForReply` will wait until a reply is received that matches this
     * condition. If this not set, the first reply is used.
     */
    replyCheck?: (
        messageFromHost: ThisWebSocket extends WebSocketDefinition
            ? WebSocketHostMessageType<ThisWebSocket>
            : any,
    ) => MaybePromise<boolean>;
}>;

export type WebSocketMessageType<
    Location extends WebSocketLocation,
    ThisWebSocket extends WebSocketDefinition | NoParam = NoParam,
> = ThisWebSocket extends WebSocketDefinition
    ? WebSocketLocationMessageType<Location, ThisWebSocket>
    : any;
