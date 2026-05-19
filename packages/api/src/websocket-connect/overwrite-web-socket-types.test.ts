import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineShape, exactShape} from 'object-shape-tester';
import {defineWebSocket} from '../api/web-socket.js';
import {type NoParam} from '../util/no-param.js';
import {type CommonWebSocket} from './common-web-socket.js';
import {
    type ClientWebSocket,
    type ConnectWebSocketListeners,
    type FlipWebSocketLocation,
    type OverwriteWebSocketMethods,
    type SendAndWaitForReplyParamObject,
    type WebSocketListener,
    type WebSocketListenerParams,
    type WebSocketLocation,
    type WebSocketLocationMessageType,
    type WebSocketMessageType,
    type WebSocketSendAndWaitForReplyParams,
    type WebSocketSendMessageParams,
} from './overwrite-web-socket-types.js';

const stringMessageWebSocket = defineWebSocket({
    path: '/ws/string',
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

const distinctMessageWebSocket = defineWebSocket({
    path: '/ws/distinct',
    clientMessage: exactShape('from-client'),
    hostMessage: exactShape('from-host'),
});

const noMessagesWebSocket = defineWebSocket({
    path: '/ws/none',
});

const clientOnlyWebSocket = defineWebSocket({
    path: '/ws/client-only',
    clientMessage: defineShape(''),
});

describe('FlipWebSocketLocation', () => {
    it('flips OnHost to OnClient at the type level', () => {
        assert
            .tsType<FlipWebSocketLocation<WebSocketLocation.OnHost>>()
            .equals<WebSocketLocation.OnClient>();
    });

    it('flips OnClient to OnHost at the type level', () => {
        assert
            .tsType<FlipWebSocketLocation<WebSocketLocation.OnClient>>()
            .equals<WebSocketLocation.OnHost>();
    });
});

describe('WebSocketLocationMessageType', () => {
    it('resolves to clientMessage when source is OnClient', () => {
        assert
            .tsType<
                WebSocketLocationMessageType<
                    WebSocketLocation.OnClient,
                    typeof distinctMessageWebSocket
                >
            >()
            .equals<'from-client'>();
    });

    it('resolves to hostMessage when source is OnHost', () => {
        assert
            .tsType<
                WebSocketLocationMessageType<
                    WebSocketLocation.OnHost,
                    typeof distinctMessageWebSocket
                >
            >()
            .equals<'from-host'>();
    });

    it('falls back to any for NoParam', () => {
        assert.tsType<WebSocketLocationMessageType<WebSocketLocation.OnHost>>().matches<any>();
    });
});

describe('WebSocketMessageType', () => {
    it('returns the location-appropriate message type for a concrete definition', () => {
        assert
            .tsType<
                WebSocketMessageType<WebSocketLocation.OnClient, typeof distinctMessageWebSocket>
            >()
            .equals<'from-client'>();
    });

    it('falls back to any for NoParam', () => {
        assert.tsType<WebSocketMessageType<WebSocketLocation.OnClient>>().matches<any>();
    });
});

describe('WebSocketSendMessageParams', () => {
    it('requires a message argument when client messages are required', () => {
        assert
            .tsType<
                WebSocketSendMessageParams<
                    WebSocketLocation.OnClient,
                    typeof distinctMessageWebSocket
                >
            >()
            .equals<['from-client']>();
    });

    it('makes the message argument optional when client messages are undefined', () => {
        assert
            .tsType<
                WebSocketSendMessageParams<WebSocketLocation.OnClient, typeof noMessagesWebSocket>
            >()
            .equals<[undefined?]>();
    });

    it('collapses to [any?] for NoParam', () => {
        assert.tsType<WebSocketSendMessageParams<WebSocketLocation.OnClient>>().matches<[any?]>();
    });
});

describe('SendAndWaitForReplyParamObject', () => {
    it('requires a typed message field', () => {
        type Result = SendAndWaitForReplyParamObject<
            WebSocketLocation.OnClient,
            typeof distinctMessageWebSocket
        >;

        assert.tsType<Result['message']>().equals<'from-client'>();
    });

    it('makes timeout and replyCheck optional', () => {
        type Result = SendAndWaitForReplyParamObject<
            WebSocketLocation.OnClient,
            typeof stringMessageWebSocket
        >;

        const minimal: Result = {
            message: 'hello',
        };
        assert.strictEquals(minimal.message, 'hello');
    });
});

describe('WebSocketSendAndWaitForReplyParams', () => {
    it('is a required tuple when message is required', () => {
        assert
            .tsType<
                WebSocketSendAndWaitForReplyParams<
                    WebSocketLocation.OnClient,
                    typeof distinctMessageWebSocket
                >
            >()
            .matches<[unknown]>();
    });

    it('is an optional tuple when nothing is required', () => {
        assert
            .tsType<
                WebSocketSendAndWaitForReplyParams<
                    WebSocketLocation.OnClient,
                    typeof noMessagesWebSocket
                >
            >()
            .matches<[unknown?]>();
    });
});

describe('WebSocketListenerParams', () => {
    it('adds message + searchParams + typed data for message events', () => {
        type Result = WebSocketListenerParams<
            'message',
            typeof distinctMessageWebSocket,
            WebSocketLocation.OnHost,
            CommonWebSocket
        >;

        assert.tsType<Result['message']>().equals<'from-host'>();
        assert.tsType<Result['event']['data']>().equals<'from-host'>();
    });

    it('does not add message for non-message events', () => {
        type Result = WebSocketListenerParams<
            'open',
            typeof distinctMessageWebSocket,
            WebSocketLocation.OnHost,
            CommonWebSocket
        >;

        assert.tsType<Result>().matches<{
            webSocketDefinition: typeof distinctMessageWebSocket;
        }>();
    });

    it('falls back to WebSocketDefinition for NoParam', () => {
        type Result = WebSocketListenerParams<
            'open',
            NoParam,
            WebSocketLocation.OnHost,
            CommonWebSocket
        >;

        assert.tsType<Result['webSocketDefinition']>().matches<{path: string}>();
    });
});

describe('WebSocketListener', () => {
    it('is a function returning MaybePromise<void>', () => {
        const listener: WebSocketListener<
            'message',
            typeof stringMessageWebSocket,
            WebSocketLocation.OnHost,
            CommonWebSocket
        > = ({message}) => {
            assert.tsType<typeof message>().equals<string>();
        };
        assert.isFunction(listener);
    });

    it('allows an async listener', () => {
        const listener: WebSocketListener<
            'message',
            typeof stringMessageWebSocket,
            WebSocketLocation.OnHost,
            CommonWebSocket
        > = async () => {
            await Promise.resolve();
        };
        assert.isFunction(listener);
    });
});

describe('ConnectWebSocketListeners', () => {
    it('allows undefined', () => {
        const listeners: ConnectWebSocketListeners<typeof stringMessageWebSocket, CommonWebSocket> =
            undefined;
        assert.isUndefined(listeners);
    });

    it('allows a partial listener record', () => {
        const listeners: ConnectWebSocketListeners<typeof stringMessageWebSocket, CommonWebSocket> =
            {
                open() {},
                message() {},
            };
        assert.isFunction(listeners.open);
        assert.isFunction(listeners.message);
    });

    it('allows omitting all event names', () => {
        const listeners: ConnectWebSocketListeners<typeof stringMessageWebSocket, CommonWebSocket> =
            {};
        assert.tsType<typeof listeners>().matches<object | undefined>();
    });
});

describe('ClientWebSocket', () => {
    it('narrows send to the client message type', () => {
        type Result = ClientWebSocket<typeof stringMessageWebSocket, CommonWebSocket>;

        assert.tsType<Parameters<Result['send']>>().equals<[string]>();
    });

    it('replaces close with an async close()', () => {
        type Result = ClientWebSocket<typeof stringMessageWebSocket, CommonWebSocket>;

        assert.tsType<ReturnType<Result['close']>>().equals<Promise<void>>();
    });

    it('exposes sendAndWaitForReply', () => {
        type Result = ClientWebSocket<typeof stringMessageWebSocket, CommonWebSocket>;

        assert.tsType<Result['sendAndWaitForReply']>().matches<(...args: any[]) => Promise<any>>();
    });
});

describe('OverwriteWebSocketMethods', () => {
    it('narrows the send method to the client message type when on the client', () => {
        type Result = OverwriteWebSocketMethods<
            CommonWebSocket,
            WebSocketLocation.OnClient,
            typeof distinctMessageWebSocket
        >;

        assert.tsType<Parameters<Result['send']>>().equals<['from-client']>();
    });

    it('replaces close with an async close()', () => {
        type Result = OverwriteWebSocketMethods<
            CommonWebSocket,
            WebSocketLocation.OnClient,
            typeof stringMessageWebSocket
        >;

        assert.tsType<ReturnType<Result['close']>>().equals<Promise<void>>();
    });

    it('keeps unrelated CommonWebSocket members untouched', () => {
        type Result = OverwriteWebSocketMethods<
            CommonWebSocket,
            WebSocketLocation.OnClient,
            typeof clientOnlyWebSocket
        >;

        assert.tsType<Result['readyState']>().equals<CommonWebSocket['readyState']>();
    });
});
