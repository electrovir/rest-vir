import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineShape, exactShape, tupleShape} from 'object-shape-tester';
import {defineWebSocket, type WebSocketDefinition} from './web-socket.js';

describe('WebSocketDefinition', () => {
    it('allows all optional message shapes', () => {
        const definition: WebSocketDefinition = {
            path: '/ws',
            clientMessage: defineShape(''),
            hostMessage: defineShape(''),
            protocols: tupleShape(''),
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
            protocols: undefined,
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

    it('allows requiredHeaders', () => {
        const definition: WebSocketDefinition = {
            path: '/ws',
            requiredRequestHeaders: {
                authorization: defineShape(''),
            },
        };
    });

    it('allows requiredClientOrigin', () => {
        const definition: WebSocketDefinition = {
            path: '/ws',
            clientOrigin: 'https://example.com',
        };
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
});
