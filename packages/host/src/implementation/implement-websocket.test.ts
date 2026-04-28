import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {
    type BaseSearchParams,
    defineApi,
    defineWebSocket,
    type NoParam,
    type WebSocketDefinition,
} from '@rest-vir/api';
import {type IncomingHttpHeaders} from 'node:http';
import {defineShape, exactShape} from 'object-shape-tester';
import {
    type WebSocketImplementation,
    type WebSocketImplementationParams,
} from './implement-websocket.js';
import {
    type RunningServerInfo,
    type ServerRequest,
    type ServerWebSocket,
} from './raw-route-data.js';

const noMessagesWebSocket = defineWebSocket({
    path: '/ws/no-messages',
});

const echoWebSocket = defineWebSocket({
    path: '/ws/echo',
    clientMessage: defineShape({
        text: '',
    }),
    hostMessage: defineShape({
        text: '',
    }),
});

const noClientMessageWebSocket = defineWebSocket({
    path: '/ws/no-client-message',
    hostMessage: defineShape(''),
});

const numericClientMessageWebSocket = defineWebSocket({
    path: '/ws/numeric-client',
    clientMessage: defineShape(0),
    hostMessage: defineShape(''),
});

const connectProtocolWebSocket = defineWebSocket({
    path: '/ws/connect-protocol',
    connectProtocol: exactShape('graphql-ws'),
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

const searchParamsWebSocket = defineWebSocket({
    path: '/ws/search',
    searchParams: {
        roomId: defineShape(''),
        token: defineShape(''),
    },
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

type CustomContext = {
    db: {kind: 'db'};
};

/** A defineApi that includes a websocket — exercised by `WebSocketImplementation` consumers. */
const wsApi = defineApi({
    webSockets: [
        noMessagesWebSocket,
        echoWebSocket,
        noClientMessageWebSocket,
        numericClientMessageWebSocket,
        connectProtocolWebSocket,
        searchParamsWebSocket,
    ],
});

describe('WebSocketImplementationParams', () => {
    it('defaults to unknown context, NoParam-typed websocket fields, and no message field', () => {
        type Params = WebSocketImplementationParams;

        assert.tsType<Params['context']>().equals<unknown>();
        assert.tsType<Params['webSocket']>().equals<ServerWebSocket>();
        assert.tsType<Params['requestHeaders']>().equals<IncomingHttpHeaders>();
        assert.tsType<Params['request']>().equals<ServerRequest>();
        assert.tsType<Params['server']>().equals<RunningServerInfo>();
    });

    it('allows undefined for protocols at the NoParam default', () => {
        type Params = WebSocketImplementationParams;

        assert.tsType<Params['protocols']>().equals<string[] | undefined>();
    });

    it('produces a non-nullable BaseSearchParams default for searchParams', () => {
        type Params = WebSocketImplementationParams;

        assert.tsType<Params['searchParams']>().equals<BaseSearchParams>();
    });

    it('omits the message field when WithMessage is false', () => {
        type Params = WebSocketImplementationParams<NoParam, false>;

        assert.tsType<'message' extends keyof Params ? true : false>().equals<false>();
    });

    it('exposes message: any when WithMessage is true and the websocket is NoParam', () => {
        type Params = WebSocketImplementationParams<NoParam, true>;

        assert.tsType<'message' extends keyof Params ? true : false>().equals<true>();
        assert.tsType<Params extends {message: any} ? true : false>().equals<true>();
    });

    it('narrows message to the clientMessage runtime type when WithMessage is true', () => {
        type Params = WebSocketImplementationParams<typeof echoWebSocket, true>;

        assert.tsType<Params['message']>().equals<{text: string}>();
    });

    it('resolves no message type to undefined', () => {
        type Params = WebSocketImplementationParams<typeof noClientMessageWebSocket, true>;

        assert.tsType<Params['message']>().equals<undefined>();
    });

    it('narrows message to a numeric runtime type when the clientMessage shape is numeric', () => {
        type Params = WebSocketImplementationParams<typeof numericClientMessageWebSocket, true>;

        assert.tsType<Params['message']>().equals<number>();
    });

    it('narrows protocols to the connectProtocol runtime type when the websocket declares one', () => {
        type Params = WebSocketImplementationParams<typeof connectProtocolWebSocket, true>;

        assert.tsType<Params['protocols']>().equals<'graphql-ws'[] | undefined>();
    });

    it('narrows searchParams to the declared searchParams runtime type', () => {
        type Params = WebSocketImplementationParams<typeof searchParamsWebSocket, true>;

        type ExpectedSearchParams = Readonly<
            Partial<{
                readonly roomId: string;
                readonly token: string;
            }>
        > &
            BaseSearchParams;

        assert.tsType<Params['searchParams']>().equals<ExpectedSearchParams>();
    });

    it('strips the | undefined from searchParams via NonNullable', () => {
        type Params = WebSocketImplementationParams<typeof searchParamsWebSocket, true>;

        assert.tsType<undefined extends Params['searchParams'] ? true : false>().equals<false>();
    });

    it('threads the HostContext generic through the context field', () => {
        type Params = WebSocketImplementationParams<typeof echoWebSocket, true, CustomContext>;

        assert.tsType<Params['context']>().equals<CustomContext>();
    });

    it('narrows the webSocket field to a ServerWebSocket<ThisWebSocket>', () => {
        type Params = WebSocketImplementationParams<typeof echoWebSocket, true>;

        assert.tsType<Params['webSocket']>().equals<ServerWebSocket<typeof echoWebSocket>>();
    });

    it('web socket definition is the original type parameter', () => {
        type Params = WebSocketImplementationParams<typeof echoWebSocket, true>;

        assert.tsType<Params['webSocketDefinition']>().equals<typeof echoWebSocket>();
    });

    it('keeps webSocketDefinition wide at the NoParam default', () => {
        type Params = WebSocketImplementationParams;

        assert.tsType<Params['webSocketDefinition']>().equals<Readonly<WebSocketDefinition>>();
    });
});

describe('WebSocketImplementation', () => {
    it('exposes optional open / message / close callbacks at the NoParam default', () => {
        assert.tsType<keyof WebSocketImplementation>().equals<'open' | 'message' | 'close'>();
        assert.tsType<WebSocketImplementation>().matches<{
            open?: (params: WebSocketImplementationParams) => unknown;
            message?: (params: WebSocketImplementationParams<NoParam, true>) => unknown;
            close?: (params: WebSocketImplementationParams) => unknown;
        }>();
    });

    it('threads the websocket generic into each callback parameter', () => {
        type Implementation = WebSocketImplementation<typeof echoWebSocket>;

        type OpenParams = Parameters<NonNullable<Implementation['open']>>[0];
        type MessageParams = Parameters<NonNullable<Implementation['message']>>[0];
        type CloseParams = Parameters<NonNullable<Implementation['close']>>[0];

        assert
            .tsType<OpenParams>()
            .equals<WebSocketImplementationParams<typeof echoWebSocket, false>>();
        assert
            .tsType<MessageParams>()
            .equals<WebSocketImplementationParams<typeof echoWebSocket, true>>();
        assert
            .tsType<CloseParams>()
            .equals<WebSocketImplementationParams<typeof echoWebSocket, false>>();
    });

    it('only attaches a message field to the message callback parameters', () => {
        type Implementation = WebSocketImplementation<typeof echoWebSocket>;

        type OpenParams = Parameters<NonNullable<Implementation['open']>>[0];
        type MessageParams = Parameters<NonNullable<Implementation['message']>>[0];
        type CloseParams = Parameters<NonNullable<Implementation['close']>>[0];

        assert.tsType<'message' extends keyof OpenParams ? true : false>().equals<false>();
        assert.tsType<'message' extends keyof MessageParams ? true : false>().equals<true>();
        assert.tsType<'message' extends keyof CloseParams ? true : false>().equals<false>();
    });

    it('threads the HostContext generic through every callback parameter', () => {
        type Implementation = WebSocketImplementation<typeof echoWebSocket, CustomContext>;

        type OpenParams = Parameters<NonNullable<Implementation['open']>>[0];
        type MessageParams = Parameters<NonNullable<Implementation['message']>>[0];
        type CloseParams = Parameters<NonNullable<Implementation['close']>>[0];

        assert.tsType<OpenParams['context']>().equals<CustomContext>();
        assert.tsType<MessageParams['context']>().equals<CustomContext>();
        assert.tsType<CloseParams['context']>().equals<CustomContext>();
    });

    it('narrows the message callback parameter to the websocket clientMessage type', () => {
        type Implementation = WebSocketImplementation<typeof echoWebSocket>;

        type MessageParams = Parameters<NonNullable<Implementation['message']>>[0];

        assert.tsType<MessageParams['message']>().equals<{text: string}>();
    });

    it('returns MaybePromise<void> from each callback', () => {
        type Implementation = WebSocketImplementation;

        type OpenReturn = ReturnType<NonNullable<Implementation['open']>>;
        type MessageReturn = ReturnType<NonNullable<Implementation['message']>>;
        type CloseReturn = ReturnType<NonNullable<Implementation['close']>>;

        assert.tsType<OpenReturn>().equals<void | Promise<void>>();
        assert.tsType<MessageReturn>().equals<void | Promise<void>>();
        assert.tsType<CloseReturn>().equals<void | Promise<void>>();
    });

    it('accepts an empty object literal (every callback is optional)', () => {
        const implementation: WebSocketImplementation<typeof echoWebSocket, CustomContext> = {};

        assert.deepEquals(implementation, {});
    });

    it('accepts a partial implementation with just open', () => {
        const implementation: WebSocketImplementation<typeof echoWebSocket, CustomContext> = {
            open() {},
        };

        assert.tsType<typeof implementation>().matches<{
            open?: unknown;
            message?: unknown;
            close?: unknown;
        }>();
    });

    it('accepts a fully populated implementation with all three callbacks', () => {
        const implementation: WebSocketImplementation<typeof echoWebSocket, CustomContext> = {
            open({context}) {
                assert.tsType(context).equals<CustomContext>();
            },
            message({context, message}) {
                assert.tsType(context).equals<CustomContext>();
                assert.tsType(message).equals<{text: string}>();
            },
            close({context}) {
                assert.tsType(context).equals<CustomContext>();
            },
        };

        assert.tsType<keyof typeof implementation>().equals<'open' | 'message' | 'close'>();
    });
});

describe('WebSocketImplementation assignability across api shapes', () => {
    it('a specific implementation widens to the bare WebSocketImplementation type', () => {
        const specific: WebSocketImplementation<typeof echoWebSocket, CustomContext> = {
            open() {},
        };
        const widened: WebSocketImplementation = specific;

        assert.tsType<typeof widened>().matches<WebSocketImplementation>();
    });

    it('typeof wsApi.webSockets exposes the registered paths', () => {
        assert
            .tsType<'/ws/echo' | '/ws/no-messages' | '/ws/connect-protocol'>()
            .matches<keyof typeof wsApi.webSockets>();
    });
});
