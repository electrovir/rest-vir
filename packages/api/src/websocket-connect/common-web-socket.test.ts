import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import type WsWebSocket from 'ws';
import {
    CommonWebSocket,
    CommonWebSocketState,
    type CommonWebSocketEventMap,
    type CommonWebSocketListenerOptions,
} from './common-web-socket.js';

describe(CommonWebSocket.name, () => {
    it('is assignable to from both client and server WebSockets', () => {
        const wsTest: CommonWebSocket = {} as any as WsWebSocket;

        const webTest: CommonWebSocket = {} as any as globalThis.WebSocket;
    });
    it('cannot be constructed in typescript', () => {
        // @ts-expect-error: this is an abstract class and cannot be constructed
        // eslint-disable-next-line sonarjs/constructor-for-side-effects
        new CommonWebSocket('url');
    });
});

describe('CommonWebSocketState', () => {
    it('matches the numeric WebSocket readyState values', () => {
        assert.strictEquals(CommonWebSocketState.Connecting, 0);
        assert.strictEquals(CommonWebSocketState.Open, 1);
        assert.strictEquals(CommonWebSocketState.Closing, 2);
        assert.strictEquals(CommonWebSocketState.Closed, 3);
    });

    it('matches the global WebSocket constants', () => {
        assert.strictEquals(CommonWebSocketState.Connecting, WebSocket.CONNECTING);
        assert.strictEquals(CommonWebSocketState.Open, WebSocket.OPEN);
        assert.strictEquals(CommonWebSocketState.Closing, WebSocket.CLOSING);
        assert.strictEquals(CommonWebSocketState.Closed, WebSocket.CLOSED);
    });
});

describe('CommonWebSocketListenerOptions', () => {
    it('accepts a once flag', () => {
        const options: CommonWebSocketListenerOptions = {
            once: true,
        };
        assert.isTrue(options.once);
    });

    it('allows omitting once', () => {
        const options: CommonWebSocketListenerOptions = {};
        assert.isUndefined(options.once);
    });
});

describe('CommonWebSocketEventMap', () => {
    it('models open events with target and type', () => {
        const event: CommonWebSocketEventMap['open'] = {
            target: {} as CommonWebSocket,
            type: 'open',
        };
        assert.strictEquals(event.type, 'open');
    });

    it('models error events with target and type', () => {
        const event: CommonWebSocketEventMap['error'] = {
            target: {} as CommonWebSocket,
            type: 'error',
        };
        assert.strictEquals(event.type, 'error');
    });

    it('models close events with code, reason, wasClean, target, and type', () => {
        const event: CommonWebSocketEventMap['close'] = {
            code: 1000,
            reason: 'normal',
            wasClean: true,
            target: {} as CommonWebSocket,
            type: 'close',
        };
        assert.strictEquals(event.code, 1000);
        assert.strictEquals(event.reason, 'normal');
        assert.isTrue(event.wasClean);
    });

    it('models message events with unknown data', () => {
        const event: CommonWebSocketEventMap['message'] = {
            data: 'whatever',
            target: {} as CommonWebSocket,
            type: 'message',
        };
        assert.tsType<typeof event.data>().equals<unknown>();
    });
});
