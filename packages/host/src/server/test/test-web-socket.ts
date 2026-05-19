import {type MaybePromise} from '@augment-vir/common';
import {defineApi, type WebSocketDefinition} from '@rest-vir/api';
import {
    type ClientWebSocket,
    type CommonWebSocket,
    type WebSocketConnectParamObject,
} from '@rest-vir/api';
import {type CreateHostContext} from '../../implementation/host-context.js';
import {implementApi} from '../../implementation/implement-api.js';
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
export async function testWebSocket<
    const HostContext,
    const ThisWebSocket extends Readonly<WebSocketImplementation<WebSocketDefinition, HostContext>>,
    WebSocketClass extends CommonWebSocket,
>(
    webSocket: ThisWebSocket,
    createHostContext: CreateHostContext<HostContext>,
    params: WebSocketConnectParamObject<NoInfer<ThisWebSocket>['definition'], WebSocketClass>,
): Promise<ClientWebSocket<ThisWebSocket['definition'], WebSocketClass>> {
    const apiDefinition = defineApi({
        apiName: `websocket-test-${webSocket.path}`,
        webSockets: [webSocket.definition],
    });

    const apiImplementation = implementApi<HostContext>()(apiDefinition, {
        createHostContext,
        webSockets: {
            [webSocket.path]: webSocket,
        },
    });

    const {connectWebSocket, kill} = await testApi(apiImplementation);

    const clientWebSocket = (await connectWebSocket(
        webSocket.definition,
        params satisfies WebSocketConnectParamObject as any,
    )) as ClientWebSocket<ThisWebSocket['definition'], WebSocketClass>;

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
export type WithWebSocketTestCallback<
    ThisWebSocket extends WebSocketImplementation,
    WebSocketClass extends CommonWebSocket,
> = (
    clientWebSocket: ClientWebSocket<ThisWebSocket['definition'], WebSocketClass>,
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
export function withWebSocketTest<
    const HostContext,
    const ThisWebSocket extends Readonly<WebSocketImplementation<WebSocketDefinition, HostContext>>,
    const WebSocketClass extends CommonWebSocket,
>(
    webSocket: ThisWebSocket,
    createHostContext: CreateHostContext<HostContext>,
    params: Omit<
        WebSocketConnectParamObject<NoInfer<ThisWebSocket>['definition'], WebSocketClass>,
        'listeners'
    >,
    callback: WithWebSocketTestCallback<NoInfer<ThisWebSocket>, WebSocketClass>,
) {
    return async () => {
        const clientWebSocket: ClientWebSocket<ThisWebSocket['definition'], WebSocketClass> =
            await testWebSocket(
                webSocket,
                createHostContext,
                params satisfies WebSocketConnectParamObject as any,
            );

        await callback(clientWebSocket);

        await clientWebSocket.close();
    };
}
