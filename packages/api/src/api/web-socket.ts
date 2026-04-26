import {type Shape} from 'object-shape-tester';
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
export function defineWebSocket<const WebSocket extends WebSocketDefinition>(
    webSocket: Readonly<WebSocket>,
): Readonly<WebSocket> {
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
    /** Required protocols for this WebSocket. */
    protocols?: Shape | undefined;
} & CommonRouteDefinition;

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
export type WebSocketClientMessageType<WebSocket extends WebSocketDefinition> =
    WebSocket['clientMessage'] extends undefined
        ? undefined
        : NonNullable<WebSocket['clientMessage']>['runtimeType'];

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
export type WebSocketHostMessageType<WebSocket extends WebSocketDefinition> =
    WebSocket['hostMessage'] extends undefined
        ? undefined
        : NonNullable<WebSocket['hostMessage']>['runtimeType'];
