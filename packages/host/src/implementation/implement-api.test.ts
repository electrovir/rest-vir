import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineEndpoint, defineWebSocket, HttpMethod, HttpStatus} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';
import {type ApiImplementation, implementApi} from './implement-api.js';
import {type ImplementedEndpoint} from './implement-endpoint.js';
import {type ImplementedWebSocket} from './implement-websocket.js';
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
        const implementations: ApiImplementation<typeof smallApi> = {
            endpoints: {
                '/ping': {} as ImplementedEndpoint,
                '/users/create': {} as ImplementedEndpoint,
            },
            webSockets: {
                '/ws/chat': {} as ImplementedWebSocket,
                '/ws/presence': {} as ImplementedWebSocket,
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
        type Implementation = ApiImplementation<typeof smallApi>;

        assert.tsType<keyof Implementation['endpoints']>().equals<'/ping' | '/users/create'>();
    });

    it('keys webSockets by the api web socket paths', () => {
        type Implementation = ApiImplementation<typeof smallApi>;

        assert.tsType<keyof Implementation['webSockets']>().equals<'/ws/chat' | '/ws/presence'>();
    });

    it('rejects an extra endpoint key not declared on the api', () => {
        const implementations: ApiImplementation<typeof smallApi> = {
            endpoints: {
                '/ping': {} as ImplementedEndpoint,
                '/users/create': {} as ImplementedEndpoint,
                // @ts-expect-error: '/unknown' is not a registered endpoint path.
                '/unknown': {} as ImplementedEndpoint,
            },
            webSockets: {
                '/ws/chat': {} as ImplementedWebSocket,
                '/ws/presence': {} as ImplementedWebSocket,
            },
        };

        assert.isDefined(implementations);
    });

    it('rejects a missing endpoint key', () => {
        const incomplete = {
            endpoints: {
                '/ping': {} as ImplementedEndpoint,
            },
            webSockets: {
                '/ws/chat': {} as ImplementedWebSocket,
                '/ws/presence': {} as ImplementedWebSocket,
            },
        };

        // @ts-expect-error: '/users/create' implementation is missing.
        const implementations: ApiImplementation<typeof smallApi> = incomplete;

        assert.isDefined(implementations);
    });

    it('rejects a missing webSocket key', () => {
        const incomplete = {
            endpoints: {
                '/ping': {} as ImplementedEndpoint,
                '/users/create': {} as ImplementedEndpoint,
            },
            webSockets: {
                '/ws/chat': {} as ImplementedWebSocket,
            },
        };

        // @ts-expect-error: '/ws/presence' implementation is missing.
        const implementations: ApiImplementation<typeof smallApi> = incomplete;

        assert.isDefined(implementations);
    });

    it('requires both endpoints and webSockets fields on the implementation object', () => {
        const onlyEndpoints = {
            endpoints: {
                '/ping': {} as ImplementedEndpoint,
                '/users/create': {} as ImplementedEndpoint,
            },
        };

        // @ts-expect-error: webSockets field is missing.
        const implementations: ApiImplementation<typeof smallApi> = onlyEndpoints;

        assert.isDefined(implementations);
    });
});

/**
 * NOTE: validation of `largeApiImplementation` lives in `@rest-vir/large-api-mock`'s
 * `implement-large-api.mock.ts` as documentation-only `describe/it` blocks, mirroring the pattern
 * used by `large-api.mock.ts` in the same package. Importing those mocks from a `.test.ts` file
 * pulls the 40,000-line definition into the browser bundle and exceeds the test runner's timeouts.
 */
