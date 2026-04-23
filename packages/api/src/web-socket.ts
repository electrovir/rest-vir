import {type Shape} from 'object-shape-tester';
import {type BaseRoutePath, type CommonRouteDefinition} from './route.js';

/**
 * Define a single WebSocket.
 *
 * @category Define API
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
 * @category Define API
 */
export type WebSocketClientMessageType<WebSocket extends WebSocketDefinition> =
    WebSocket['clientMessage'] extends undefined
        ? undefined
        : NonNullable<WebSocket['clientMessage']>['runtimeType'];

/**
 * Extracts a WebSocket's host message type.
 *
 * @category Define API
 */
export type WebSocketHostMessageType<WebSocket extends WebSocketDefinition> =
    WebSocket['hostMessage'] extends undefined
        ? undefined
        : NonNullable<WebSocket['hostMessage']>['runtimeType'];
