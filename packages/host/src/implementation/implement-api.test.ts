import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineEndpoint, defineWebSocket, HttpMethod, HttpStatus} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';
import {type ApiRouteImplementations, implementApi} from './implement-api.js';
import {type EndpointImplementation} from './implement-endpoint.js';
import {type WebSocketImplementation} from './implement-websocket.js';
import {createApiImplementor} from './implementor.js';

const pingEndpoint = defineEndpoint({
    path: '/ping',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        pong: true,
                    }),
                },
            },
        },
    },
});

const usersCreateEndpoint = defineEndpoint({
    path: '/users/create',
    requests: {
        [HttpMethod.Post]: {
            requestData: defineShape({
                name: '',
            }),
            responses: {
                [HttpStatus.Created]: {
                    responseData: defineShape({
                        id: '',
                    }),
                },
            },
        },
    },
});

const chatWebSocket = defineWebSocket({
    path: '/ws/chat',
    clientMessage: defineShape({
        text: '',
    }),
    hostMessage: defineShape({
        text: '',
    }),
});

const presenceWebSocket = defineWebSocket({
    path: '/ws/presence',
    clientMessage: defineShape({
        userId: '',
    }),
    hostMessage: defineShape({
        userId: '',
        online: true,
    }),
});

const smallApi = defineApi({
    apiName: 'small-api',
    endpoints: [
        pingEndpoint,
        usersCreateEndpoint,
    ],
    webSockets: [
        chatWebSocket,
        presenceWebSocket,
    ],
});

const smallImplementor = createApiImplementor<unknown>()(smallApi);

describe(implementApi.name, () => {
    it('returns the implementations object as-is', () => {
        const implementations: ApiRouteImplementations<typeof smallApi> = {
            endpoints: {
                '/ping': {} as EndpointImplementation,
                '/users/create': {} as EndpointImplementation,
            },
            webSockets: {
                '/ws/chat': {} as WebSocketImplementation,
                '/ws/presence': {} as WebSocketImplementation,
            },
        };

        const result = implementApi()(smallApi, implementations);

        assert.strictEquals(result.implementation, implementations);
        assert.strictEquals(result.definition, smallApi);
    });

    it('accepts implementations built with implementEndpoint and implementWebSocket', () => {
        const ping = smallImplementor.implementEndpoint(pingEndpoint, {
            [HttpMethod.Get]: () => {
                return {
                    [HttpStatus.Ok]: {
                        responseData: {
                            pong: true,
                        },
                    },
                };
            },
        });
        const usersCreate = smallImplementor.implementEndpoint(usersCreateEndpoint, {
            [HttpMethod.Post]: () => {
                return {
                    [HttpStatus.Created]: {
                        responseData: {
                            id: 'new-id',
                        },
                    },
                };
            },
        });
        const chat = smallImplementor.implementWebSocket(chatWebSocket, {
            message() {},
        });
        const presence = smallImplementor.implementWebSocket(presenceWebSocket, {
            open() {},
            close() {},
        });

        const implementations = implementApi()(smallApi, {
            endpoints: {
                '/ping': ping,
                '/users/create': usersCreate,
            },
            webSockets: {
                '/ws/chat': chat,
                '/ws/presence': presence,
            },
        });

        assert
            .tsType<keyof (typeof implementations.implementation)['endpoints']>()
            .equals<'/ping' | '/users/create'>();
        assert
            .tsType<keyof (typeof implementations.implementation)['webSockets']>()
            .equals<'/ws/chat' | '/ws/presence'>();
    });
});

describe('ApiImplementation', () => {
    it('keys endpoints by the api endpoint paths', () => {
        type Implementation = ApiRouteImplementations<typeof smallApi>;

        assert.tsType<keyof Implementation['endpoints']>().equals<'/ping' | '/users/create'>();
    });

    it('keys webSockets by the api web socket paths', () => {
        type Implementation = ApiRouteImplementations<typeof smallApi>;

        assert.tsType<keyof Implementation['webSockets']>().equals<'/ws/chat' | '/ws/presence'>();
    });

    it('rejects an extra endpoint key not declared on the api', () => {
        const implementations: ApiRouteImplementations<typeof smallApi> = {
            endpoints: {
                '/ping': {} as EndpointImplementation,
                '/users/create': {} as EndpointImplementation,
                // @ts-expect-error: '/unknown' is not a registered endpoint path.
                '/unknown': {} as EndpointImplementation,
            },
            webSockets: {
                '/ws/chat': {} as WebSocketImplementation,
                '/ws/presence': {} as WebSocketImplementation,
            },
        };

        assert.isDefined(implementations);
    });

    it('rejects a missing endpoint key', () => {
        const incomplete = {
            endpoints: {
                '/ping': {} as EndpointImplementation,
            },
            webSockets: {
                '/ws/chat': {} as WebSocketImplementation,
                '/ws/presence': {} as WebSocketImplementation,
            },
        };

        // @ts-expect-error: '/users/create' implementation is missing.
        const implementations: ApiRouteImplementations<typeof smallApi> = incomplete;

        assert.isDefined(implementations);
    });

    it('rejects a missing webSocket key', () => {
        const incomplete = {
            endpoints: {
                '/ping': {} as EndpointImplementation,
                '/users/create': {} as EndpointImplementation,
            },
            webSockets: {
                '/ws/chat': {} as WebSocketImplementation,
            },
        };

        // @ts-expect-error: '/ws/presence' implementation is missing.
        const implementations: ApiRouteImplementations<typeof smallApi> = incomplete;

        assert.isDefined(implementations);
    });

    it('requires both endpoints and webSockets fields on the implementation object', () => {
        const onlyEndpoints = {
            endpoints: {
                '/ping': {} as EndpointImplementation,
                '/users/create': {} as EndpointImplementation,
            },
        };

        // @ts-expect-error: webSockets field is missing.
        const implementations: ApiRouteImplementations<typeof smallApi> = onlyEndpoints;

        assert.isDefined(implementations);
    });
});

/**
 * NOTE: validation of `largeApiImplementation` lives in `@rest-vir/large-api-mock`'s
 * `implement-large-api.mock.ts` as documentation-only `describe/it` blocks, mirroring the pattern
 * used by `large-api.mock.ts` in the same package. Importing those mocks from a `.test.ts` file
 * pulls the 40,000-line definition into the browser bundle and exceeds the test runner's timeouts.
 */
