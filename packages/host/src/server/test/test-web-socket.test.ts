import {assert, waitUntil} from '@augment-vir/assert';
import {stringify} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineWebSocket} from '@rest-vir/api';
import {exactShape} from 'object-shape-tester';
import {implementApi} from '../../implementation/implement-api.js';
import {createApiImplementor} from '../../implementation/implementor.js';
import {testWebSocket, withWebSocketTest} from './test-web-socket.js';

const basicWebSocket = defineWebSocket({
    path: '/socket',
    clientMessage: exactShape('ping'),
    hostMessage: exactShape('pong'),
});

const noClientDataWebSocket = defineWebSocket({
    path: '/no-client-data',
    hostMessage: exactShape('ok'),
});

const requiredProtocolsWebSocket = defineWebSocket({
    path: '/required-protocols',
    clientMessage: exactShape('hello'),
    hostMessage: exactShape('ok'),
    connectProtocol: exactShape('hi'),
});

const api = defineApi({
    apiName: 'testWebSocket helper api',
    endpoints: [],
    webSockets: [
        basicWebSocket,
        noClientDataWebSocket,
        requiredProtocolsWebSocket,
    ],
});

const implementor = createApiImplementor<undefined>()(api);

const apiImplementation = implementApi<undefined>()(api, {
    createHostContext() {
        return {
            context: undefined,
        };
    },
    clientOriginRequirement: {
        anyOrigin: true,
    },
    endpoints: {},
    webSockets: {
        '/socket': implementor.implementWebSocket(basicWebSocket, {
            open() {},
            close() {},
            message({webSocket}) {
                webSocket.send('pong');
            },
        }),
        '/no-client-data': implementor.implementWebSocket(noClientDataWebSocket, {
            open({webSocket}) {
                webSocket.send('ok');
            },
        }),
        '/required-protocols': implementor.implementWebSocket(requiredProtocolsWebSocket, {
            message({webSocket}) {
                webSocket.send('ok');
            },
        }),
    },
});

describe(testWebSocket.name, () => {
    it('fires listeners', async () => {
        const listeners = {
            closedOnClient: false,
            openedOnClient: false,
            messageOnClient: false,
        };
        const webSocket = await testWebSocket(
            apiImplementation.implementation.webSockets['/socket'],
            {
                listeners: {
                    open() {
                        listeners.openedOnClient = true;
                    },
                    close() {
                        listeners.closedOnClient = true;
                    },
                    message() {
                        listeners.messageOnClient = true;
                    },
                },
            },
        );

        await waitUntil.isTrue(
            () => listeners.openedOnClient,
            undefined,
            `never opened: ${stringify(listeners)}`,
        );

        webSocket.send('ping');

        await waitUntil.isTrue(
            () => listeners.messageOnClient,
            undefined,
            `never got message: ${stringify(listeners)}`,
        );

        await webSocket.close();

        await waitUntil.isTrue(
            () => listeners.closedOnClient,
            undefined,
            `never closed: ${stringify(listeners)}`,
        );
    });
});

describe(withWebSocketTest.name, () => {
    it(
        'tests a basic WebSocket connection',
        withWebSocketTest(
            apiImplementation.implementation.webSockets['/no-client-data'],
            {},
            async (webSocket) => {
                const response = await webSocket.sendAndWaitForReply();
                assert.strictEquals(response, 'ok');
            },
        ),
    );

    it(
        'accepts protocols',
        withWebSocketTest(
            apiImplementation.implementation.webSockets['/required-protocols'],
            {
                protocols: ['hi'],
            },
            async (webSocket) => {
                const response = await webSocket.sendAndWaitForReply({
                    message: 'hello',
                });
                assert.strictEquals(response, 'ok');
            },
        ),
    );

    it('requires protocols', async () => {
        await assert.throws(
            withWebSocketTest(
                apiImplementation.implementation.webSockets['/required-protocols'],
                // @ts-expect-error: protocols are missing
                {},
                async () => {},
            ),
            {
                matchMessage: 'Unexpected server response: 400',
            },
        );
    });

    it('rejects wrong protocol values', async () => {
        await assert.throws(
            withWebSocketTest(
                apiImplementation.implementation.webSockets['/required-protocols'],
                {
                    protocols: [
                        'a',
                        // @ts-expect-error: this should be a string, but it'll get stringified anyway
                        -1,
                        // @ts-expect-error: this should be 'hi'
                        'wrong',
                    ],
                },
                async () => {},
            ),
            {
                matchMessage: 'Unexpected server response: 400',
            },
        );
    });
});
