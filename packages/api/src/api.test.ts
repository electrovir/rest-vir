import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus, type Values} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineShape} from 'object-shape-tester';
import {DefineApiError, defineApi, type ApiDefinition, type ApiInit} from './api.js';
import {defineEndpoint, type EndpointDefinition} from './endpoint.js';
import {type BaseRoutePath} from './route.js';
import {defineWebSocket, type WebSocketDefinition} from './web-socket.js';

describe('ApiDefinition', () => {
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
    it('does not preserve endpoint types (required to prevent TypeScript explosion)', () => {
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
            endpoints: [
                usersEndpoint,
                itemsEndpoint,
            ],
        });

        assert.tsType<Values<typeof result.endpoints>>().equals<Readonly<EndpointDefinition>>();
        assert
            .tsType<typeof result.webSockets>()
            .equals<Readonly<Record<`/${string}`, Readonly<WebSocketDefinition>>>>();

        assert.tsType<Values<typeof result.endpoints>['path']>().notMatches<'/users'>();
        assert.tsType<Values<typeof result.endpoints>['path']>().notMatches<'/items'>();
    });
    it('knows if websockets or endpoints were defined', () => {
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
        const socket = defineWebSocket({
            path: '/updates',
            clientMessage: defineShape(''),
        });

        const result = defineApi({
            endpoints: [
                usersEndpoint,
                itemsEndpoint,
            ],
            webSockets: [socket],
        });

        assert
            .tsType(result.endpoints)
            .equals<Readonly<Record<BaseRoutePath, Readonly<EndpointDefinition>>>>();
        assert
            .tsType(result.webSockets)
            .equals<Readonly<Record<BaseRoutePath, Readonly<WebSocketDefinition>>>>();
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
            endpoints: [
                usersEndpoint,
                itemsEndpoint,
            ],
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
            webSockets: [
                chatSocket,
                eventsSocket,
            ],
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
                    endpoints: [
                        firstEndpoint,
                        secondEndpoint,
                    ],
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
                    webSockets: [
                        firstSocket,
                        secondSocket,
                    ],
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
                    endpoints: [
                        firstEndpoint,
                        secondEndpoint,
                    ],
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
                    webSockets: [
                        firstSocket,
                        secondSocket,
                    ],
                }),
            {
                matchMessage: '/updates',
            },
        );
    });

    it('detects multiple distinct duplicate endpoint paths', () => {
        const endpoints: ReadonlyArray<EndpointDefinition> = [
            {
                path: '/a',
                requests: {
                    [HttpMethod.Get]: {
                        clientOrigin: '',
                        responses: {},
                    },
                },
            },
            {
                path: '/a',
                requests: {
                    [HttpMethod.Post]: {
                        clientOrigin: '',
                        responses: {},
                    },
                },
            },
            {
                path: '/b',
                requests: {
                    [HttpMethod.Get]: {
                        clientOrigin: '',
                        responses: {},
                    },
                },
            },
            {
                path: '/b',
                requests: {
                    [HttpMethod.Put]: {
                        clientOrigin: '',
                        responses: {},
                    },
                },
            },
        ];

        try {
            defineApi({
                endpoints,
            });
            assert.fail('expected defineApi to throw');
        } catch (error) {
            assert.instanceOf(error, DefineApiError);
            assert.isTrue(error.message.includes('/a'));
            assert.isTrue(error.message.includes('/b'));
        }
    });

    it('names thrown errors ApiDefinitionError', () => {
        const sockets: ReadonlyArray<WebSocketDefinition> = [
            {
                path: '/same',
            },
            {
                path: '/same',
            },
        ];

        try {
            defineApi({
                webSockets: sockets,
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
        const endpoints = [
            defineEndpoint({
                path: '/users',
                requests: {
                    [HttpMethod.Get]: {clientOrigin: '', responses: {}},
                },
            }),
            defineEndpoint({
                path: '/items',
                requests: {
                    [HttpMethod.Get]: {clientOrigin: '', responses: {}},
                },
            }),
            defineEndpoint({
                path: '/orders',
                requests: {
                    [HttpMethod.Post]: {clientOrigin: '', responses: {}},
                },
            }),
        ];
        const webSockets = [
            defineWebSocket({
                path: '/chat',
                clientMessage: defineShape(''),
            }),
            defineWebSocket({
                path: '/updates',
                hostMessage: defineShape(''),
            }),
            defineWebSocket({
                path: '/events',
                clientMessage: defineShape(''),
                hostMessage: defineShape(''),
            }),
        ];

        const result = defineApi({
            endpoints,
            webSockets,
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
