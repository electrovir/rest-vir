import {type MaybePromise, type PartialWithUndefined} from '@augment-vir/common';
import {type WebSocketDefinition} from '@rest-vir/api';
import {type ClientWebSocket, type WebSocketConnectParamObject} from '@rest-vir/client';
import {type WebSocketImplementation} from '../../implementation/implement-websocket.js';
import {testApi} from './test-api.js';

/**
 * Test your WebSocket implementation with a real connection pipeline. Make sure to close your
 * WebSocket after each test. Use {@link withWebSocketTest} to automatically close the WebSocket
 * after a test.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export async function testWebSocket<const ThisWebSocket extends WebSocketImplementation>(
    webSocket: ThisWebSocket,
    params?: WebSocketConnectParamObject | undefined,
): Promise<ClientWebSocket<ThisWebSocket['definition']>> {
    const {connectWebSocket, kill} = await testApi({
        definition: {
            apiName: 'testWebSocket',
            endpoints: {},
            webSockets: {
                [webSocket.path]: webSocket.definition,
            },
        },
        implementation: {
            endpoints: {},
            webSockets: {
                [webSocket.path]: webSocket,
            },
        },
    });

    const clientWebSocket = (await connectWebSocket(
        webSocket.definition as WebSocketDefinition,
        params as never,
    )) as ClientWebSocket<ThisWebSocket['definition']>;

    clientWebSocket.addEventListener('close', () => {
        setTimeout(async () => {
            await kill();
        }, 1000);
    });
    return clientWebSocket;
}

/**
 * Callback type for {@link withWebSocketTest}.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type WithWebSocketTestCallback<ThisWebSocket extends WebSocketImplementation> = (
    clientWebSocket: ClientWebSocket<ThisWebSocket['definition']>,
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
 * @category Package : @rest-vir/host
 * @example
 *
 * ```ts
 * import {withWebSocketTest} from '@rest-vir/host';
 * import {describe, it} from '@augment-vir/test';
 *
 * describe('my WebSocket', () => {
 *     it(
 *         'does a thing',
 *         withWebSocketTest(
 *             myApiImplementation.implementation.webSockets['/my-web-socket-path'],
 *             {},
 *             async (webSocket) => {
 *                 const response = await webSocket.sendAndWaitForReply();
 *                 assert.strictEquals(response, 'ok');
 *             },
 *         ),
 *     );
 * });
 * ```
 *
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export function withWebSocketTest<const ThisWebSocket extends WebSocketImplementation>(
    webSocket: ThisWebSocket,
    params: PartialWithUndefined<Omit<WebSocketConnectParamObject, 'listeners'>>,
    callback: WithWebSocketTestCallback<ThisWebSocket>,
) {
    return async () => {
        const clientWebSocket = await testWebSocket(webSocket, params);

        await callback(clientWebSocket);

        await clientWebSocket.close();
    };
}
