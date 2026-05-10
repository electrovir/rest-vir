import {assert, assertWrap} from '@augment-vir/assert';
import {wait} from '@augment-vir/common';
import {describe, it, itCases} from '@augment-vir/test';
import {
    type CommonWebSocket,
    type CommonWebSocketEventMap,
    CommonWebSocketState,
} from './common-web-socket.js';
import {WebSocketLocation} from './overwrite-web-socket-types.js';
import {getOppositeWebSocketLocation, waitForOpenWebSocket} from './overwrite-web-socket.js';

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
});
