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
     * Allowed connection protocols for this WebSocket. Each protocol the client sends is matched
     * against the requirement; the client must supply at least one matching protocol when the
     * requirement is set.
     *
     * Modeled the same way as `searchParams`:
     *
     * - A `Shape` (runtime type usually a `string` or string union): each supplied protocol must
     *   satisfy the shape.
     * - A `RegExp`: each supplied protocol must match the regex.
     * - A `ReadonlyArray<Shape | RegExp>`: each supplied protocol must satisfy at least one entry.
     *   Order is not significant. The array is treated as a list of alternatives.
     */
    connectProtocol?: WebSocketConnectProtocolRequirement | undefined;
} & CommonRouteDefinition;

/**
 * A single protocol-list requirement for a WebSocket. See `WebSocketDefinition.connectProtocol` for
 * the meaning of each form.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type WebSocketConnectProtocolRequirement = Shape | RegExp | ReadonlyArray<Shape | RegExp>;

/**
 * Extracts a WebSocket's protocol type. The value to pass to the client when connecting. When the
 * `connectProtocol` is a single `Shape` whose runtime type narrows to a string union, that union is
 * preserved as the array element type. RegExp requirements and array-of-requirement requirements
 * widen to the default `string[]` (the exact set of accepted strings is unknown at compile time).
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type WebSocketConnectProtocolType<
    ThisWebSocket extends WebSocketDefinition | NoParam = NoParam,
> = ThisWebSocket extends NoParam
    ? DefaultWebSocketProtocol
    : Extract<ThisWebSocket, WebSocketDefinition>['connectProtocol'] extends infer Requirement
      ? Requirement extends Shape
          ? IsNever<Extract<Requirement['runtimeType'], string>> extends true
              ? DefaultWebSocketProtocol
              : undefined | null extends Requirement['runtimeType']
                ? Extract<Requirement['runtimeType'], string>[] | undefined
                : Extract<Requirement['runtimeType'], string>[]
          : Requirement extends RegExp
            ? string[]
            : Requirement extends ReadonlyArray<unknown>
              ? string[]
              : DefaultWebSocketProtocol
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
