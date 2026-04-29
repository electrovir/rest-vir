import {type WebSocketDefinition} from '@rest-vir/api';
import {
    type ClientWebSocket,
    type CommonWebSocket,
    type WebSocketConnectParamObject,
    type WebSocketConnectParams,
} from '@rest-vir/client';
import {type WebSocketListenerImplementations} from '../../implementation/implement-websocket.js';
import {testApi} from './test-service.js';

/**
 * Type for {@link testWebSocket}.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type TestWebSocket = <
    ThisWebSocket extends WebSocketDefinition,
    WebSocketClass extends CommonWebSocket,
>(
    webSocketDefinition: ThisWebSocket,
    ...args: WebSocketConnectParams<NoInfer<ThisWebSocket>, WebSocketClass>
) => Promise<ClientWebSocket<ThisWebSocket>>;

/**
 * Test your WebSocket implementation with a real connection pipeline. Make sure to close your
 * WebSocket after each test. Use {@link withWebSocketTest} to automatically close the WebSocket
 * after a test.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export const testWebSocket = async function testWebSocket<
    const ThisWebSocket extends WebSocketDefinition,
    const WebSocketClass extends CommonWebSocket,
>(
    webSocketDefinition: ThisWebSocket,
    webSocketImplementation: WebSocketListenerImplementations<NoInfer<ThisWebSocket>, any>,
    params: WebSocketConnectParamObject<NoInfer<ThisWebSocket>, WebSocketClass>,
) {
    const {connectWebSocket, kill} = await testApi(
        {
            ...webSocketImplementation.service,
            webSockets: {
                [webSocketImplementation.path]: webSocketImplementation,
            },
            endpoints: {},
        },
        {
            debug: true,
        },
    );

    const webSocket = await (connectWebSocket[webSocketImplementation.path] as AnyFunction)(params);

    webSocket.addEventListener('close', () => {
        setTimeout(async () => {
            await kill();
        }, 1000);
    });
    return webSocket;
} as TestWebSocket;

/**
 * Callback type for {@link withWebSocketTest}.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type WithWebSocketTestCallback<ThisWebSocket extends ImplementedWebSocket> = (
    clientWebSocket: ClientWebSocket<ThisWebSocket>,
) => MaybePromise<void>;

/**
 * Test your WebSocket implementation with a real connection pipeline. This is used to generate an
 * `it` callback and will automatically close the WebSocket connection at the end of the test.
 *
 * You can also use {@link testWebSocket} to directly test a WebSocket but it does not automatically
 * close the WebSocket.
 *
 * This should be used in backend testing to verify your WebSocket implementation.
 *
 * @category Testing : Backend
 * @category Package : @rest-vir/run-service
 * @example
 *
 * ```ts
 * import {withWebSocketTest} from '@rest-vir/run-service';
 * import {describe, it} from '@augment-vir/test'; // or use mocha, jest, etc. values
 *
 * describe('my WebSocket', () => {
 *     it(
 *         'does a thing',
 *         withWebSocketTest(
 *             myServiceImplementation.webSockets['/my-web-socket-path'],
 *             {},
 *             (webSocket) => {
 *                 const response = await webSocket.sendAndWaitForReply();
 *                 assert.strictEquals(response, 'ok');
 *             },
 *         ),
 *     );
 * });
 * ```
 *
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export function withWebSocketTest<const ThisWebSocket extends ImplementedWebSocket>(
    webSocketDefinition: ThisWebSocket,
    params: Omit<ConnectWebSocketParams<ThisWebSocket, false>, 'listeners'>,
    callback: WithWebSocketTestCallback<ThisWebSocket>,
) {
    return async () => {
        const clientWebSocket = await testWebSocket(webSocketDefinition, params as any);

        await callback(clientWebSocket);

        await clientWebSocket.close();
    };
}
