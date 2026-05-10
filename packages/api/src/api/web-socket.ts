import {type Shape} from 'object-shape-tester';
import {type IsNever} from 'type-fest';
import {type NoParam} from '../util/no-param.js';
import {type BaseRoutePath, type CommonRouteDefinition} from './route.js';

/**
 * Define a single WebSocket.
 *
 * @category Define API
 * @category Package : @rest-vir/api
 * @example
 *
 * ```ts
 * import {defineWebSocket} from '@rest-vir/api';
 * import {defineShape} from 'object-shape-tester';
 *
 * const chatSocket = defineWebSocket({
 *     path: '/ws/chat',
 *     clientMessage: defineShape({
 *         text: '',
 *     }),
 *     hostMessage: defineShape({
 *         text: '',
 *         sender: '',
 *     }),
 * });
 * ```
 *
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function defineWebSocket<const ThisWebSocket extends WebSocketDefinition>(
    webSocket: Readonly<ThisWebSocket>,
): Readonly<ThisWebSocket> {
    return webSocket;
}

/**
 * An individual WebSocket definition.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type WebSocketDefinition = {
    path: BaseRoutePath;
    /** Allowed messages from the WebSocket client. */
    clientMessage?: Shape | undefined;
    /** Allowed messages from the WebSocket host. */
    hostMessage?: Shape | undefined;
    /**
     * Allowed connection protocol for this WebSocket. Since multiple protocols can be used, each
     * applied protocol is tested against the given shape, if any is provided.
     */
    connectProtocol?: Shape | undefined;
} & CommonRouteDefinition;

/**
 * Extracts a WebSocket's protocol type.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type WebSocketConnectProtocolType<
    ThisWebSocket extends WebSocketDefinition | NoParam = NoParam,
> = ThisWebSocket extends NoParam
    ? DefaultWebSocketProtocol
    : Extract<
            ThisWebSocket,
            WebSocketDefinition
        >['connectProtocol'] extends infer ProtocolShape extends Shape
      ? IsNever<Extract<ProtocolShape['runtimeType'], string>> extends true
          ? DefaultWebSocketProtocol
          : undefined | null extends ProtocolShape['runtimeType']
            ? Extract<ProtocolShape['runtimeType'], string>[] | undefined
            : Extract<ProtocolShape['runtimeType'], string>[]
      : DefaultWebSocketProtocol;

export type DefaultWebSocketProtocol = string[] | undefined;
/**
 * Extracts a WebSocket's client message type.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @example
 *
 * ```ts
 * import {defineWebSocket, type WebSocketClientMessageType} from '@rest-vir/api';
 * import {defineShape} from 'object-shape-tester';
 *
 * const chatSocket = defineWebSocket({
 *     path: '/ws/chat',
 *     clientMessage: defineShape({text: ''}),
 * });
 *
 * type ClientMessage = WebSocketClientMessageType<typeof chatSocket>;
 * ```
 *
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type WebSocketClientMessageType<ThisWebSocket extends WebSocketDefinition | NoParam> =
    ThisWebSocket extends WebSocketDefinition
        ? 'clientMessage' extends keyof ThisWebSocket
            ? ThisWebSocket['clientMessage'] extends undefined
                ? undefined
                : NonNullable<ThisWebSocket['clientMessage']>['runtimeType']
            : undefined
        : unknown;

/**
 * Extracts a WebSocket's host message type.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @example
 *
 * ```ts
 * import {defineWebSocket, type WebSocketHostMessageType} from '@rest-vir/api';
 * import {defineShape} from 'object-shape-tester';
 *
 * const chatSocket = defineWebSocket({
 *     path: '/ws/chat',
 *     hostMessage: defineShape({event: '', payload: ''}),
 * });
 *
 * type HostMessage = WebSocketHostMessageType<typeof chatSocket>;
 * ```
 *
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type WebSocketHostMessageType<ThisWebSocket extends WebSocketDefinition> =
    ThisWebSocket['hostMessage'] extends undefined
        ? undefined
        : NonNullable<ThisWebSocket['hostMessage']>['runtimeType'];
