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

const basicImplementation = implementor.implementWebSocket(basicWebSocket, {
    open() {},
    close() {},
    message({webSocket}) {
        webSocket.send('pong');
    },
});

const noClientDataImplementation = implementor.implementWebSocket(noClientDataWebSocket, {
    /**
     * Reply on `message` rather than `open` so the test's `sendAndWaitForReply` listener is
     * attached before the host reply is dispatched. An `open`-time reply races the client's
     * listener registration.
     */
    message({webSocket}) {
        webSocket.send('ok');
    },
});

const requiredProtocolsImplementation = implementor.implementWebSocket(requiredProtocolsWebSocket, {
    message({webSocket}) {
        webSocket.send('ok');
    },
});

function createTestHostContext() {
    return {
        context: undefined,
    };
}

implementApi<undefined>()(api, {
    createHostContext: createTestHostContext,
    clientOriginRequirement: {
        anyOrigin: true,
    },
    webSockets: {
        '/socket': basicImplementation,
        '/no-client-data': noClientDataImplementation,
        '/required-protocols': requiredProtocolsImplementation,
    },
});

describe(testWebSocket.name, () => {
    it('fires listeners', async () => {
        const listeners = {
            closedOnClient: false,
            openedOnClient: false,
            messageOnClient: false,
        };
        const webSocket = await testWebSocket(basicImplementation, createTestHostContext, {
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
        });

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
            noClientDataImplementation,
            createTestHostContext,
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
            requiredProtocolsImplementation,
            createTestHostContext,
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
                requiredProtocolsImplementation,
                createTestHostContext,
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
                requiredProtocolsImplementation,
                createTestHostContext,
                {
                    protocols: [
                        'hi',
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
