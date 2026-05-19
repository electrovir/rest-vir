import {assert, assertWrap} from '@augment-vir/assert';
import {wait} from '@augment-vir/common';
import {describe, it, itCases} from '@augment-vir/test';
import {defineWebSocket} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';
import {
    type CommonWebSocket,
    type CommonWebSocketEventMap,
    CommonWebSocketState,
} from './common-web-socket.js';
import {WebSocketLocation} from './overwrite-web-socket-types.js';
import {
    getOppositeWebSocketLocation,
    verifyWebSocketMessage,
    waitForOpenWebSocket,
} from './overwrite-web-socket.js';

describe(getOppositeWebSocketLocation.name, () => {
    itCases(getOppositeWebSocketLocation, [
        {
            it: 'flips OnClient to OnHost',
            input: WebSocketLocation.OnClient,
            expect: WebSocketLocation.OnHost,
        },
        {
            it: 'flips OnHost to OnClient',
            input: WebSocketLocation.OnHost,
            expect: WebSocketLocation.OnClient,
        },
    ]);
});

class FakeWebSocket {
    public readyState: CommonWebSocketState = CommonWebSocketState.Connecting;
    private listeners = new Map<keyof CommonWebSocketEventMap, Set<(event: unknown) => void>>();

    public addEventListener<EventName extends keyof CommonWebSocketEventMap>(
        eventName: EventName,
        listener: (event: CommonWebSocketEventMap[EventName]) => void,
    ): void {
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, new Set());
        }
        assertWrap
            .isDefined(this.listeners.get(eventName))
            .add(listener as (event: unknown) => void);
    }

    public removeEventListener<EventName extends keyof CommonWebSocketEventMap>(
        eventName: EventName,
        listener: (event: CommonWebSocketEventMap[EventName]) => void,
    ): void {
        this.listeners.get(eventName)?.delete(listener as (event: unknown) => void);
    }

    public fire<EventName extends keyof CommonWebSocketEventMap>(
        eventName: EventName,
        event: CommonWebSocketEventMap[EventName],
    ): void {
        this.listeners.get(eventName)?.forEach((listener) => listener(event));
    }
}

describe(waitForOpenWebSocket.name, () => {
    it('rejects when the WebSocket transitions to Closed', async () => {
        const fake = new FakeWebSocket();
        const openedPromise = waitForOpenWebSocket(fake as unknown as CommonWebSocket);

        await wait({
            milliseconds: 10,
        });
        fake.readyState = CommonWebSocketState.Closed;

        await assert.throws(async () => await openedPromise, {
            matchMessage: 'closed while waiting',
        });
    });

    it('resolves when the WebSocket transitions to Open', async () => {
        const fake = new FakeWebSocket();
        const openedPromise = waitForOpenWebSocket(fake as unknown as CommonWebSocket);

        await wait({
            milliseconds: 10,
        });
        fake.readyState = CommonWebSocketState.Open;

        await openedPromise;
    });

    it('rejects when an error event fires before opening', async () => {
        const fake = new FakeWebSocket();
        const openedPromise = waitForOpenWebSocket(fake as unknown as CommonWebSocket);

        await wait({
            milliseconds: 10,
        });
        fake.fire('error', {
            type: 'error',
        } as CommonWebSocketEventMap['error']);

        await assert.throws(async () => await openedPromise, {
            matchMessage: 'WebSocket connection failed',
        });
        // give the waitUntil polling loop a chance to observe `isSettled` and exit
        await wait({
            milliseconds: 250,
        });
    });

    it('rejects when waitUntil times out without the WebSocket ever opening', async () => {
        const fake = new FakeWebSocket();

        await assert.throws(() => waitForOpenWebSocket(fake as unknown as CommonWebSocket), {
            matchMessage: 'WebSocket never opened',
        });
    });
});

describe(verifyWebSocketMessage.name, () => {
    const echoWebSocket = defineWebSocket({
        path: '/ws/echo',
        clientMessage: defineShape(''),
        hostMessage: defineShape(0),
    });

    const noMessagesWebSocket = defineWebSocket({
        path: '/ws/empty',
    });

    it('returns the message when it matches the client shape from a client source', () => {
        assert.strictEquals(
            verifyWebSocketMessage(echoWebSocket, 'hello', WebSocketLocation.OnClient),
            'hello',
        );
    });

    it('returns the message when it matches the host shape from a host source', () => {
        assert.strictEquals(
            verifyWebSocketMessage(echoWebSocket, 42, WebSocketLocation.OnHost),
            42,
        );
    });

    it('throws when a client message has the wrong shape', () => {
        assert.throws(() => verifyWebSocketMessage(echoWebSocket, 99, WebSocketLocation.OnClient));
    });

    it('throws when a host message has the wrong shape', () => {
        assert.throws(() =>
            verifyWebSocketMessage(echoWebSocket, 'wrong', WebSocketLocation.OnHost),
        );
    });

    it('throws when a message arrives but the WebSocket expects no client data', () => {
        assert.throws(
            () => verifyWebSocketMessage(noMessagesWebSocket, 'oops', WebSocketLocation.OnClient),
            {
                matchMessage: 'does not expect any message data',
            },
        );
    });

    it('throws when a message arrives but the WebSocket expects no host data', () => {
        assert.throws(
            () => verifyWebSocketMessage(noMessagesWebSocket, 'oops', WebSocketLocation.OnHost),
            {
                matchMessage: 'does not expect any message data',
            },
        );
    });

    it('accepts an undefined/falsy message when the WebSocket has no message shapes', () => {
        assert.isUndefined(
            verifyWebSocketMessage(noMessagesWebSocket, undefined, WebSocketLocation.OnClient),
        );
    });

    it('mentions the client/host source in the unexpected-message error', () => {
        assert.throws(
            () => verifyWebSocketMessage(noMessagesWebSocket, 'oops', WebSocketLocation.OnClient),
            {
                matchMessage: 'client',
            },
        );
        assert.throws(
            () => verifyWebSocketMessage(noMessagesWebSocket, 'oops', WebSocketLocation.OnHost),
            {
                matchMessage: 'host',
            },
        );
    });
});
