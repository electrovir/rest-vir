import {assertWrap} from '@augment-vir/assert';
import {type AnyObject, getOrSet, type MaybePromise} from '@augment-vir/common';
import {parseJsonWithUndefined, type WebSocketDefinition} from '@rest-vir/api';
import {
    type CommonWebSocket,
    type CommonWebSocketEventMap,
    CommonWebSocketState,
} from '../websocket-connect/common-web-socket.js';

const mockWebSocketRegistry: {lastInstance: MockWebSocket | undefined} = {
    lastInstance: undefined,
};

/**
 * Returns the most recently constructed {@link MockWebSocket} instance. Throws if none has been
 * constructed yet (typically because the test did not call `client.connectWebSocket(...)` with
 * `webSocketConstructor: MockWebSocket` in its params).
 *
 * @category Testing
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export function getLastMockWebSocket() {
    return assertWrap.isDefined(mockWebSocketRegistry.lastInstance);
}

/**
 * Options accepted by the {@link MockWebSocket} constructor's fourth argument.
 *
 * @category Testing
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type MockWebSocketOptions = {
    /**
     * When `true`, the constructed mock will stay in the `Connecting` state until the test calls
     * `instance.open()` explicitly. Defaults to false (auto-opens on next tick).
     */
    preventImmediateOpen?: boolean;
};

/**
 * A mock {@link CommonWebSocket} implementation for unit tests. Drop-in replacement for the global
 * `WebSocket` constructor passed to `RestVirClient.connectWebSocket`'s `webSocketConstructor`
 * param. The test then drives the mock via {@link getLastMockWebSocket} to dispatch synthetic
 * events, inspect captured constructor args, or capture outbound client sends via
 * {@link MockWebSocket.sendCallback}.
 *
 * @category Testing
 * @category Package : @rest-vir/client
 * @example
 *
 * ```ts
 * const ws = await client.connectWebSocket(myWebSocketDefinition, {
 *     webSocketConstructor: MockWebSocket,
 * });
 *
 * getLastMockWebSocket().sendFromHost({event: 'hello'});
 * ```
 *
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export class MockWebSocket implements CommonWebSocket {
    public listeners: Partial<{
        [EventName in keyof CommonWebSocketEventMap]: Set<
            (event: CommonWebSocketEventMap[EventName]) => MaybePromise<void>
        >;
    }> = {};

    public readyState: CommonWebSocketState = CommonWebSocketState.Connecting;

    public capturedConstructorArgs: {
        url: string;
        protocols: string[] | undefined;
        webSocket: WebSocketDefinition;
    };

    /**
     * If set, this callback is invoked with the parsed payload every time the client calls `send`.
     * Use it to assert on what the client tried to send.
     */
    public sendCallback: ((data: unknown) => void) | undefined;

    constructor(
        url: string,
        protocols: string[] | undefined,
        webSocket: WebSocketDefinition,
        options: MockWebSocketOptions = {},
    ) {
        this.capturedConstructorArgs = {
            url,
            protocols,
            webSocket,
        };
        mockWebSocketRegistry.lastInstance = this;
        if (!options.preventImmediateOpen) {
            this.open();
        }
    }

    public open() {
        setTimeout(() => {
            if (this.readyState === CommonWebSocketState.Connecting) {
                this.readyState = CommonWebSocketState.Open;
                this.dispatchEvent('open', {});
            }
        });
    }

    public close() {
        this.dispatchEvent('close', {
            code: 0,
            reason: 'closed',
            wasClean: true,
        });
        this.listeners = {};
        this.readyState = CommonWebSocketState.Closed;
    }

    public dispatchEvent<const EventName extends keyof CommonWebSocketEventMap>(
        eventName: EventName,
        event: Omit<CommonWebSocketEventMap[EventName], 'type' | 'target'>,
    ) {
        this.listeners[eventName]?.forEach((listener) => {
            void listener({
                ...event,
                target: this,
                type: eventName,
            } as AnyObject as CommonWebSocketEventMap[EventName]);
        });
    }

    public addEventListener<const EventName extends keyof CommonWebSocketEventMap>(
        eventName: EventName,
        listener: (event: CommonWebSocketEventMap[EventName]) => MaybePromise<void>,
    ): void {
        getOrSet(this.listeners, eventName, () => new Set<any>()).add(listener as any);
    }

    public removeEventListener<const EventName extends keyof CommonWebSocketEventMap>(
        eventName: EventName,
        listener: (event: CommonWebSocketEventMap[EventName]) => MaybePromise<void>,
    ): void {
        this.listeners[eventName]?.delete(listener);
    }

    public send(data: any): void {
        if (this.readyState !== CommonWebSocketState.Open) {
            return;
        }
        this.sendCallback?.(parseJsonWithUndefined(String(data)));
    }

    /** Dispatch a synthetic `message` event as if the host pushed `data` to this client. */
    public sendFromHost(data: unknown) {
        if (this.readyState !== CommonWebSocketState.Open) {
            return;
        }
        this.dispatchEvent('message', {
            data: JSON.stringify(data),
        });
    }
}
