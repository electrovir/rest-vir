import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus, type Values} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineShape} from 'object-shape-tester';
import {defineApi, DefineApiError, type ApiDefinition, type ApiInit} from './api.js';
import {defineEndpoint, type EndpointDefinition} from './endpoint.js';
import {type BaseRoutePath} from './route.js';
import {defineWebSocket, type WebSocketDefinition} from './web-socket.js';

describe('ApiInit', () => {
    it('allows omitting both endpoints and webSockets', () => {
        const api: ApiInit = {};
    });

    it('allows empty endpoint and web socket arrays', () => {
        const api: ApiInit = {
            endpoints: [],
            webSockets: [],
        };
    });

    it('accepts an array of endpoint definitions', () => {
        const api: ApiInit = {
            endpoints: [
                {
                    path: '/users',
                    requests: {
                        [HttpMethod.Get]: {
                            clientOrigin: '',
                            responses: {
                                [HttpStatus.Ok]: {
                                    responseData: defineShape({
                                        users: [''],
                                    }),
                                },
                            },
                        },
                    },
                },
            ],
        };
    });

    it('accepts an array of web socket definitions', () => {
        const api: ApiInit = {
            webSockets: [
                {
                    path: '/chat',
                    clientMessage: defineShape(''),
                    hostMessage: defineShape(''),
                },
            ],
        };
    });

    it('accepts a full api with both endpoints and web sockets', () => {
        const api: ApiInit = {
            endpoints: [
                {
                    path: '/health',
                    requests: {
                        [HttpMethod.Get]: {
                            clientOrigin: '',
                            responses: {
                                [HttpStatus.Ok]: {
                                    responseData: defineShape({
                                        status: '',
                                    }),
                                },
                            },
                        },
                    },
                },
                {
                    path: '/data',
                    requests: {
                        [HttpMethod.Post]: {
                            clientOrigin: '',
                            requestData: defineShape({
                                payload: '',
                            }),
                        },
                    },
                },
            ],
            webSockets: [
                {
                    path: '/notifications',
                    hostMessage: defineShape({
                        event: '',
                    }),
                },
            ],
        };
    });
});

describe(defineApi.name, () => {
    it('narrows path keys from an inline endpoint array', () => {
        const usersEndpoint = defineEndpoint({
            path: '/users',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });
        const itemsEndpoint = defineEndpoint({
            path: '/items',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });

        const result = defineApi({
            endpoints: [usersEndpoint, itemsEndpoint],
        });

        assert
            .tsType<keyof typeof result.endpoints>()
            .equals<typeof usersEndpoint.path | typeof itemsEndpoint.path>();
    });

    it('narrows path keys from an inline web socket array', () => {
        const chatSocket = defineWebSocket({
            path: '/chat',
            clientMessage: defineShape(''),
        });
        const eventsSocket = defineWebSocket({
            path: '/events',
            hostMessage: defineShape(''),
        });

        const result = defineApi({
            webSockets: [chatSocket, eventsSocket],
        });

        assert
            .tsType<keyof typeof result.webSockets>()
            .equals<typeof chatSocket.path | typeof eventsSocket.path>();
    });

    it('widens stored endpoint value types to EndpointDefinition', () => {
        const usersEndpoint = defineEndpoint({
            path: '/users',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });

        const result = defineApi({
            endpoints: [usersEndpoint],
        });

        assert.tsType<Values<typeof result.endpoints>>().equals<Readonly<EndpointDefinition>>();
    });

    it('widens stored web socket value types to WebSocketDefinition', () => {
        const chatSocket = defineWebSocket({
            path: '/chat',
            clientMessage: defineShape(''),
        });

        const result = defineApi({
            webSockets: [chatSocket],
        });

        assert.tsType<Values<typeof result.webSockets>>().equals<Readonly<WebSocketDefinition>>();
    });

    it('accepts an api with unique endpoint paths', () => {
        const usersEndpoint = defineEndpoint({
            path: '/users',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });
        const itemsEndpoint = defineEndpoint({
            path: '/items',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });

        const result = defineApi({
            endpoints: [usersEndpoint, itemsEndpoint],
        });

        assert.isLengthExactly(result.endpoints, 2);
    });

    it('accepts an api with unique web socket paths', () => {
        const chatSocket = defineWebSocket({
            path: '/chat',
            clientMessage: defineShape(''),
        });
        const eventsSocket = defineWebSocket({
            path: '/events',
            hostMessage: defineShape(''),
        });

        const result = defineApi({
            webSockets: [chatSocket, eventsSocket],
        });

        assert.isLengthExactly(result.webSockets, 2);
    });

    it('allows the same path across an endpoint and a web socket', () => {
        const sharedPathEndpoint = defineEndpoint({
            path: '/shared',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });
        const sharedPathSocket = defineWebSocket({
            path: '/shared',
            clientMessage: defineShape(''),
        });

        const result = defineApi({
            endpoints: [sharedPathEndpoint],
            webSockets: [sharedPathSocket],
        });

        assert.isLengthExactly(result.endpoints, 1);
        assert.isLengthExactly(result.webSockets, 1);
    });

    it('throws ApiDefinitionError on duplicate endpoint paths', () => {
        const firstEndpoint = defineEndpoint({
            path: '/users',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });
        const secondEndpoint = defineEndpoint({
            path: '/users',
            requests: {
                [HttpMethod.Post]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });

        assert.throws(
            () =>
                defineApi({
                    endpoints: [firstEndpoint, secondEndpoint],
                }),
            {
                matchConstructor: DefineApiError,
                matchMessage: 'Duplicate API endpoints paths: /users',
            },
        );
    });

    it('throws ApiDefinitionError on duplicate web socket paths', () => {
        const firstSocket = defineWebSocket({
            path: '/chat',
            clientMessage: defineShape(''),
        });
        const secondSocket = defineWebSocket({
            path: '/chat',
            hostMessage: defineShape(''),
        });

        assert.throws(
            () =>
                defineApi({
                    webSockets: [firstSocket, secondSocket],
                }),
            {
                matchConstructor: DefineApiError,
            },
        );
    });

    it('includes the duplicate endpoint path in the error message', () => {
        const firstEndpoint = defineEndpoint({
            path: '/orders',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });
        const secondEndpoint = defineEndpoint({
            path: '/orders',
            requests: {
                [HttpMethod.Post]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });

        assert.throws(
            () =>
                defineApi({
                    endpoints: [firstEndpoint, secondEndpoint],
                }),
            {
                matchMessage: '/orders',
            },
        );
    });

    it('includes the duplicate web socket path in the error message', () => {
        const firstSocket = defineWebSocket({
            path: '/updates',
            clientMessage: defineShape(''),
        });
        const secondSocket = defineWebSocket({
            path: '/updates',
            hostMessage: defineShape(''),
        });

        assert.throws(
            () =>
                defineApi({
                    webSockets: [firstSocket, secondSocket],
                }),
            {
                matchMessage: '/updates',
            },
        );
    });

    it('detects multiple distinct duplicate endpoint paths', () => {
        const first = defineEndpoint({
            path: '/a',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });
        const second = defineEndpoint({
            path: '/a',
            requests: {
                [HttpMethod.Post]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });
        const third = defineEndpoint({
            path: '/b',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });
        const fourth = defineEndpoint({
            path: '/b',
            requests: {
                [HttpMethod.Put]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });

        try {
            defineApi({
                endpoints: [first, second, third, fourth],
            });
            assert.fail('expected defineApi to throw');
        } catch (error) {
            assert.instanceOf(error, DefineApiError);
            assert.isTrue(error.message.includes('/a'));
            assert.isTrue(error.message.includes('/b'));
        }
    });

    it('names thrown errors ApiDefinitionError', () => {
        const first = defineWebSocket({
            path: '/same',
        });
        const second = defineWebSocket({
            path: '/same',
        });

        try {
            defineApi({
                webSockets: [first, second],
            });
            assert.fail('expected defineApi to throw');
        } catch (error) {
            assert.instanceOf(error, DefineApiError);
            assert.strictEquals(error.name, 'ApiDefinitionError');
        }
    });

    it('accepts an api with only endpoints and omitted web sockets', () => {
        const endpoint = defineEndpoint({
            path: '/only-endpoint',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });

        const result = defineApi({
            endpoints: [endpoint],
        });

        assert.isLengthExactly(result.endpoints, 1);
        assert.isLengthExactly(result.webSockets, 0);
    });

    it('accepts an api with only web sockets and omitted endpoints', () => {
        const socket = defineWebSocket({
            path: '/only-socket',
            clientMessage: defineShape(''),
        });

        const result = defineApi({
            webSockets: [socket],
        });

        assert.isLengthExactly(result.webSockets, 1);
        assert.isLengthExactly(result.endpoints, 0);
    });

    it('maps every endpoint and web socket into the returned definition', () => {
        const usersEndpoint = defineEndpoint({
            path: '/users',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });
        const itemsEndpoint = defineEndpoint({
            path: '/items',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });
        const ordersEndpoint = defineEndpoint({
            path: '/orders',
            requests: {
                [HttpMethod.Post]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });
        const endpoints = [
            usersEndpoint,
            itemsEndpoint,
            ordersEndpoint,
        ];

        const chatSocket = defineWebSocket({
            path: '/chat',
            clientMessage: defineShape(''),
        });
        const updatesSocket = defineWebSocket({
            path: '/updates',
            hostMessage: defineShape(''),
        });
        const eventsSocket = defineWebSocket({
            path: '/events',
            clientMessage: defineShape(''),
            hostMessage: defineShape(''),
        });
        const webSockets = [
            chatSocket,
            updatesSocket,
            eventsSocket,
        ];

        const result = defineApi({
            endpoints: [usersEndpoint, itemsEndpoint, ordersEndpoint],
            webSockets: [chatSocket, updatesSocket, eventsSocket],
        });

        assert.isLengthExactly(result.endpoints, endpoints.length);
        assert.isLengthExactly(result.webSockets, webSockets.length);

        endpoints.forEach((endpoint) => {
            assert.strictEquals(result.endpoints[endpoint.path], endpoint);
        });
        webSockets.forEach((webSocket) => {
            assert.strictEquals(result.webSockets[webSocket.path], webSocket);
        });
    });

    it('defaults path keys to BaseRoutePath when the lists are not used', () => {
        const endpoints: ReadonlyArray<EndpointDefinition> = [];
        const webSockets: ReadonlyArray<WebSocketDefinition> = [];
        const result = defineApi({
            endpoints,
            webSockets,
        });

        assert.tsType<keyof typeof result.endpoints>().equals<BaseRoutePath>();
        assert.tsType<keyof typeof result.webSockets>().equals<BaseRoutePath>();
    });

    it('is assignable to ApiDefinition', () => {
        const result = defineApi({
            endpoints: [
                defineEndpoint({
                    path: '/test',
                    requests: {
                        [HttpMethod.Get]: {
                            clientOrigin: '',
                            responses: {},
                        },
                    },
                }),
            ],
            webSockets: [
                defineWebSocket({
                    path: '/ws',
                    clientMessage: defineShape(''),
                }),
            ],
        });

        const asBase: ApiDefinition = result;
    });
});
