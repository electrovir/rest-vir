import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineShape, exactShape, tupleShape} from 'object-shape-tester';
import {type NoParam} from '../util/no-param.js';
import {
    defineWebSocket,
    type WebSocketClientMessageType,
    type WebSocketConnectProtocolType,
    type WebSocketDefinition,
} from './web-socket.js';

describe('WebSocketDefinition', () => {
    it('allows all optional message shapes', () => {
        const definition: WebSocketDefinition = {
            path: '/ws',
            clientMessage: defineShape(''),
            hostMessage: defineShape(''),
            connectProtocol: tupleShape(''),
        };
    });

    it('allows omitting all optional fields', () => {
        const definition: WebSocketDefinition = {
            path: '/ws',
        };
    });

    it('allows undefined for optional shape fields', () => {
        const definition: WebSocketDefinition = {
            path: '/ws',
            clientMessage: undefined,
            hostMessage: undefined,
            connectProtocol: undefined,
        };
    });

    it('allows searchParams', () => {
        const definition: WebSocketDefinition = {
            path: '/ws',
            searchParams: {
                token: defineShape(''),
            },
        };
    });

    it('allows customProps', () => {
        const definition: WebSocketDefinition = {
            path: '/ws',
            customProps: {
                maxConnections: 100,
            },
        };
    });

    it('allows requiredClientOrigin', () => {
        const definition: WebSocketDefinition = {
            path: '/ws',
            clientOrigin: 'https://example.com',
        };
    });

    it('is compatible with specific definition', () => {
        function testFunction<const ThisWebSocket extends WebSocketDefinition | NoParam>(
            webSocket: ThisWebSocket,
        ) {
            type Generic = ThisWebSocket extends WebSocketDefinition
                ? ThisWebSocket
                : WebSocketDefinition;

            const generic: WebSocketDefinition = webSocket as Generic;
        }
    });
});

describe(defineWebSocket.name, () => {
    it('returns the same object', () => {
        const input = {
            path: '/ws',
            clientMessage: defineShape(''),
        } as const;

        const result = defineWebSocket(input);
        assert.strictEquals(result, input);
    });

    it('preserves path literal type', () => {
        const result = defineWebSocket({
            path: '/ws/chat',
            clientMessage: defineShape(''),
        });

        assert.tsType(result.path).equals<'/ws/chat'>();
    });

    it('preserves clientMessage shape type', () => {
        const messageShape = defineShape({
            text: '',
            sender: '',
        });

        const result = defineWebSocket({
            path: '/ws',
            clientMessage: messageShape,
        });

        assert.tsType(result.clientMessage).equals<typeof messageShape>();
    });

    it('preserves hostMessage shape type', () => {
        const responseShape = defineShape({
            status: '',
            payload: 0,
        });

        const result = defineWebSocket({
            path: '/ws',
            hostMessage: responseShape,
        });

        assert.tsType(result.hostMessage).equals<typeof responseShape>();
    });

    it('preserves protocols shape type', () => {
        const protocolsShape = tupleShape('', exactShape('v2'));

        const result = defineWebSocket({
            path: '/ws',
            protocols: protocolsShape,
        });

        assert.tsType(result.protocols).equals<typeof protocolsShape>();
    });

    it('preserves customProps types', () => {
        const result = defineWebSocket({
            path: '/ws',
            customProps: {
                requiresAuth: true,
                maxMessageSize: 1024,
            },
        });

        assert.tsType(result.customProps).equals<{
            readonly requiresAuth: true;
            readonly maxMessageSize: 1024;
        }>();
    });

    it('preserves searchParams types', () => {
        const tokenShape = defineShape('');

        const result = defineWebSocket({
            path: '/ws',
            searchParams: {
                token: tokenShape,
            },
        });

        assert.tsType(result.searchParams).equals<{
            readonly token: typeof tokenShape;
        }>();
    });

    it('preserves requiredHeaders types', () => {
        const authShape = defineShape('');

        const result = defineWebSocket({
            path: '/ws',
            requiredRequestHeaders: {
                authorization: authShape,
            },
        });

        assert.tsType(result.requiredRequestHeaders).equals<{
            readonly authorization: typeof authShape;
        }>();
    });

    it('preserves requiredClientOrigin type', () => {
        const result = defineWebSocket({
            path: '/ws',
            clientOrigin: 'https://my-app.com',
        });

        assert.tsType(result.clientOrigin).equals<'https://my-app.com'>();
    });

    it('preserves all fields simultaneously', () => {
        const clientShape = defineShape('');
        const hostShape = defineShape(0);

        const result = defineWebSocket({
            path: '/ws',
            clientMessage: clientShape,
            hostMessage: hostShape,
            customProps: {
                isPublic: false,
            },
            searchParams: {
                room: defineShape(''),
            },
        });

        assert.tsType(result.clientMessage).equals<typeof clientShape>();
        assert.tsType(result.hostMessage).equals<typeof hostShape>();
        assert.tsType(result.customProps).equals<{
            readonly isPublic: false;
        }>();
    });

    it('is assignable to WebSocketDefinition', () => {
        const result = defineWebSocket({
            path: '/ws',
            clientMessage: defineShape(''),
            hostMessage: defineShape(0),
        });

        const asBase: WebSocketDefinition = result;
    });

    it('a path-only definition is assignable to WebSocketDefinition', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/empty',
        });
    });

    it('a definition with a string-shape connectProtocol is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/string-protocol',
            connectProtocol: defineShape(''),
            clientMessage: defineShape(''),
            hostMessage: defineShape(''),
        });
    });

    it('a definition with an exactShape connectProtocol is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/exact-protocol',
            connectProtocol: exactShape('graphql-ws'),
            clientMessage: defineShape(''),
            hostMessage: defineShape(''),
        });
    });

    it('a definition with searchParams is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/rooms',
            searchParams: {
                roomId: defineShape(''),
                token: defineShape(''),
            },
            clientMessage: defineShape({
                action: '',
            }),
            hostMessage: defineShape({
                event: '',
                data: '',
            }),
        });
    });

    it('a definition with customProps is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/admin',
            customProps: {
                requiresAuth: true,
                maxConnections: 10,
            },
            clientMessage: defineShape(''),
            hostMessage: defineShape(''),
        });
    });

    it('a definition with requiredRequestHeaders is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/secure',
            requiredRequestHeaders: {
                authorization: defineShape(''),
            },
            clientMessage: defineShape({
                command: '',
            }),
            hostMessage: defineShape({
                result: '',
            }),
        });
    });

    it('a definition with a string-literal clientOrigin is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/partner',
            clientOrigin: 'https://partner.example.com',
            clientMessage: defineShape(''),
            hostMessage: defineShape(0),
        });
    });

    it('a definition with a regex clientOrigin is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/regex-origin',
            clientOrigin: /^https:\/\/.*\.example\.com$/,
            clientMessage: defineShape(''),
            hostMessage: defineShape(''),
        });
    });

    it('a definition with named path params is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/rooms/:roomId',
            clientMessage: defineShape(''),
            hostMessage: defineShape(''),
        });
    });

    it('a definition with multiple named path params is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/users/:userId/rooms/:roomId',
            clientMessage: defineShape(''),
            hostMessage: defineShape(''),
        });
    });

    it('a definition with a wildcard path is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/files/*',
            clientMessage: defineShape(''),
            hostMessage: defineShape(''),
        });
    });

    it('a definition with combined named param and wildcard is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/files/:category/*',
            clientMessage: defineShape(''),
            hostMessage: defineShape(''),
        });
    });

    it('a definition without messages is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/no-messages',
        });
    });

    it('a definition with only a clientMessage is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/client-only',
            clientMessage: defineShape({
                value: '',
            }),
        });
    });

    it('a definition with only a hostMessage is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/host-only',
            hostMessage: defineShape({
                value: '',
            }),
        });
    });

    it('a definition with all CommonRouteDefinition fields and shapes is assignable', () => {
        const asBase: WebSocketDefinition = defineWebSocket({
            path: '/ws/full-route',
            clientMessage: defineShape({
                payload: '',
            }),
            hostMessage: defineShape({
                response: '',
            }),
            connectProtocol: exactShape('graphql-ws'),
            searchParams: {
                token: defineShape(''),
            },
            customProps: {
                maxMessageSize: 65_536,
            },
            requiredRequestHeaders: {
                'sec-websocket-protocol': defineShape(''),
            },
            clientOrigin: /^https:\/\/.*\.example\.com$/,
        });
    });
});

describe('WebSocketConnectProtocolType', () => {
    it('returns string[] | undefined for the NoParam default', () => {
        type Result = WebSocketConnectProtocolType;

        assert.tsType<Result>().equals<string[] | undefined>();
    });

    it('returns string[] | undefined when the definition omits connectProtocol', () => {
        type Result = WebSocketConnectProtocolType<{
            path: '/ws';
        }>;

        assert.tsType<Result>().equals<string[] | undefined>();
    });

    it('returns string[] | undefined when connectProtocol is explicitly undefined', () => {
        type Result = WebSocketConnectProtocolType<{
            path: '/ws';
            connectProtocol: undefined;
        }>;

        assert.tsType<Result>().equals<string[] | undefined>();
    });

    it('narrows to string[] | undefined when connectProtocol is a generic string shape', () => {
        type Result = WebSocketConnectProtocolType<{
            path: '/ws';
            connectProtocol: ReturnType<typeof defineShape<string>>;
        }>;

        assert.tsType<Result>().equals<string[] | undefined>();
    });

    it('narrows to a string-literal array when connectProtocol is an exactShape literal', () => {
        type Result = WebSocketConnectProtocolType<{
            path: '/ws';
            connectProtocol: ReturnType<typeof exactShape<'v2'>>;
        }>;

        assert.tsType<Result>().equals<'v2'[] | undefined>();
    });

    it('collapses to never[] | undefined when the shape runtimeType is not assignable to string', () => {
        /**
         * `tupleShape` produces a Shape whose `runtimeType` is an array, not a string. After
         * `Extract<runtimeType, string>` strips out the non-string members, nothing is left.
         */
        type Result = WebSocketConnectProtocolType<{
            path: '/ws';
            connectProtocol: ReturnType<typeof tupleShape<['', 'v2']>>;
        }>;

        assert.tsType<Result>().equals<never[] | undefined>();
    });

    it('always allows undefined regardless of input', () => {
        assert.tsType<undefined>().matches<
            WebSocketConnectProtocolType<{
                path: '/ws';
                connectProtocol: ReturnType<typeof defineShape<string>>;
            }>
        >();

        assert.tsType<undefined>().matches<WebSocketConnectProtocolType>();

        assert.tsType<undefined>().matches<
            WebSocketConnectProtocolType<{
                path: '/ws';
            }>
        >();
    });

    it('produces an array (never a single value) for any input', () => {
        type Result = WebSocketConnectProtocolType<{
            path: '/ws';
            connectProtocol: ReturnType<typeof defineShape<string>>;
        }>;

        /** Must be assignable to and from an array — never a non-array. */
        assert.tsType<NonNullable<Result>>().matches<readonly unknown[]>();
    });

    it('narrows correctly through a real defineWebSocket value with a string connectProtocol', () => {
        const fullDefinition = defineWebSocket({
            path: '/ws',
            connectProtocol: defineShape(''),
        });

        type Result = WebSocketConnectProtocolType<typeof fullDefinition>;

        assert.tsType<Result>().equals<string[] | undefined>();
    });

    it('narrows correctly through a real defineWebSocket value with an exactShape connectProtocol', () => {
        const fullDefinition = defineWebSocket({
            path: '/ws',
            connectProtocol: exactShape('graphql-ws'),
        });

        type Result = WebSocketConnectProtocolType<typeof fullDefinition>;

        assert.tsType<Result>().equals<'graphql-ws'[] | undefined>();
    });
});

describe('WebSocketClientMessageType', () => {
    it('resolves to undefined when the websocket definition omits clientMessage entirely', () => {
        const noClientMessage = defineWebSocket({
            path: '/ws/no-client-message',
            hostMessage: defineShape(''),
        });

        type Result = WebSocketClientMessageType<typeof noClientMessage>;

        assert.tsType<Result>().equals<undefined>();
    });

    it('resolves to undefined when clientMessage is explicitly undefined', () => {
        const explicitUndefined = defineWebSocket({
            path: '/ws/explicit-undefined',
            clientMessage: undefined,
            hostMessage: defineShape(''),
        });

        type Result = WebSocketClientMessageType<typeof explicitUndefined>;

        assert.tsType<Result>().equals<undefined>();
    });

    it('resolves to the runtime type of a string-shaped clientMessage', () => {
        const stringClient = defineWebSocket({
            path: '/ws/string-client',
            clientMessage: defineShape(''),
            hostMessage: defineShape(''),
        });

        type Result = WebSocketClientMessageType<typeof stringClient>;

        assert.tsType<Result>().equals<string>();
    });

    it('resolves to the runtime type of a numeric-shaped clientMessage', () => {
        const numericClient = defineWebSocket({
            path: '/ws/numeric-client',
            clientMessage: defineShape(0),
            hostMessage: defineShape(''),
        });

        type Result = WebSocketClientMessageType<typeof numericClient>;

        assert.tsType<Result>().equals<number>();
    });

    it('resolves to the runtime object shape of a complex clientMessage', () => {
        const objectClient = defineWebSocket({
            path: '/ws/object-client',
            clientMessage: defineShape({
                action: '',
                payload: 0,
            }),
            hostMessage: defineShape(''),
        });

        type Result = WebSocketClientMessageType<typeof objectClient>;

        assert.tsType<Result>().equals<{action: string; payload: number}>();
    });

    it('resolves to the literal runtime type of an exactShape clientMessage', () => {
        const exactClient = defineWebSocket({
            path: '/ws/exact-client',
            clientMessage: exactShape('open'),
            hostMessage: defineShape(''),
        });

        type Result = WebSocketClientMessageType<typeof exactClient>;

        assert.tsType<Result>().equals<'open'>();
    });

    it('handles NoParam', () => {
        type Result = WebSocketClientMessageType<NoParam>;

        assert.tsType<Result>().equals<unknown>();
    });

    it('does not narrow the result based on the wide WebSocketDefinition input', () => {
        type Result = WebSocketClientMessageType<WebSocketDefinition>;

        /**
         * For the loose `WebSocketDefinition`, `clientMessage` is `Shape | undefined`. The
         * conditional in `WebSocketClientMessageType` returns `NonNullable<Shape |
         * undefined>['runtimeType']` = `Shape['runtimeType']` = `any`.
         */
        assert.tsType<Result>().matches<any>();
    });
});
