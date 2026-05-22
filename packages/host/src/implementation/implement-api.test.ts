import {assert} from '@augment-vir/assert';
import {wrapInTry} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineEndpoint, defineWebSocket, HttpMethod, HttpStatus} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';
import {type ApiRouteImplementations, implementApi, ImplementApiError} from './implement-api.js';
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

const pingImplementation = smallImplementor.implementEndpoint(pingEndpoint, {
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

const usersCreateImplementation = smallImplementor.implementEndpoint(usersCreateEndpoint, {
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

const chatImplementation = smallImplementor.implementWebSocket(chatWebSocket, {
    message() {},
});

const presenceImplementation = smallImplementor.implementWebSocket(presenceWebSocket, {
    open() {},
    close() {},
});

describe(implementApi.name, () => {
    it("keys endpoints and webSockets by each implementation's path field", () => {
        const result = implementApi()(smallApi, {
            createHostContext() {
                return {
                    context: undefined,
                };
            },
            endpoints: [
                pingImplementation,
                usersCreateImplementation,
            ],
            webSockets: [
                chatImplementation,
                presenceImplementation,
            ],
        });

        assert.deepEquals(
            new Set(Object.keys(result.implementation.endpoints)),
            new Set([
                '/ping',
                '/users/create',
            ]),
        );
        assert.deepEquals(
            new Set(Object.keys(result.implementation.webSockets)),
            new Set([
                '/ws/chat',
                '/ws/presence',
            ]),
        );
        assert.strictEquals(result.implementation.endpoints['/ping'], pingImplementation);
        assert.strictEquals(
            result.implementation.webSockets['/ws/presence'],
            presenceImplementation,
        );
        assert.strictEquals(result.definition, smallApi);
    });

    it('throws when endpoints field is undefined but the api declares endpoints', () => {
        assert.throws(
            () =>
                implementApi()(smallApi, {
                    createHostContext() {
                        return {
                            context: undefined,
                        };
                    },
                    webSockets: [
                        chatImplementation,
                        presenceImplementation,
                    ],
                }),
            {
                matchConstructor: ImplementApiError,
                matchMessage: '/ping',
            },
        );
    });

    it('throws when an api endpoint path is missing an implementation', () => {
        assert.throws(
            () =>
                implementApi()(smallApi, {
                    createHostContext() {
                        return {
                            context: undefined,
                        };
                    },
                    endpoints: [pingImplementation],
                    webSockets: [
                        chatImplementation,
                        presenceImplementation,
                    ],
                }),
            {
                matchConstructor: ImplementApiError,
                matchMessage: '/users/create',
            },
        );
    });

    it('throws when an api webSocket path is missing an implementation', () => {
        assert.throws(
            () =>
                implementApi()(smallApi, {
                    createHostContext() {
                        return {
                            context: undefined,
                        };
                    },
                    endpoints: [
                        pingImplementation,
                        usersCreateImplementation,
                    ],
                    webSockets: [chatImplementation],
                }),
            {
                matchConstructor: ImplementApiError,
                matchMessage: '/ws/presence',
            },
        );
    });

    it('lists every missing path in the error message', () => {
        const caught = wrapInTry(() =>
            implementApi()(smallApi, {
                createHostContext() {
                    return {
                        context: undefined,
                    };
                },
            }),
        );

        assert.instanceOf(caught, ImplementApiError);
        assert.isTrue(caught.message.includes('/ping'));
        assert.isTrue(caught.message.includes('/users/create'));
        assert.isTrue(caught.message.includes('/ws/chat'));
        assert.isTrue(caught.message.includes('/ws/presence'));
    });

    it('throws on duplicate endpoint paths', () => {
        assert.throws(
            () =>
                implementApi()(smallApi, {
                    createHostContext() {
                        return {
                            context: undefined,
                        };
                    },
                    endpoints: [
                        pingImplementation,
                        pingImplementation,
                    ],
                    webSockets: [
                        chatImplementation,
                        presenceImplementation,
                    ],
                }),
            {
                matchConstructor: ImplementApiError,
                matchMessage: 'duplicate',
            },
        );
    });

    it('throws on duplicate webSocket paths', () => {
        assert.throws(
            () =>
                implementApi()(smallApi, {
                    createHostContext() {
                        return {
                            context: undefined,
                        };
                    },
                    endpoints: [
                        pingImplementation,
                        usersCreateImplementation,
                    ],
                    webSockets: [
                        chatImplementation,
                        chatImplementation,
                    ],
                }),
            {
                matchConstructor: ImplementApiError,
                matchMessage: 'duplicate',
            },
        );
    });

    it('does not throw when the api has zero endpoints and zero webSockets', () => {
        const emptyApi = defineApi({
            apiName: 'empty',
        });

        const result = implementApi()(emptyApi, {
            createHostContext() {
                return {
                    context: undefined,
                };
            },
        });

        assert.deepEquals(result.implementation.endpoints, {});
        assert.deepEquals(result.implementation.webSockets, {});
    });
});

describe('ApiRouteImplementations', () => {
    it('takes path tuples and a HostContext type parameter', () => {
        type HostContext = {
            userId: string;
        };

        const implementations: ApiRouteImplementations<[], [], HostContext> = {
            createHostContext() {
                return {
                    context: {
                        userId: 'u-1',
                    },
                };
            },
        };

        assert.isDefined(implementations);
    });
});

/**
 * NOTE: validation of `largeApiImplementation` lives in `@rest-vir/large-api-mock`'s
 * `implement-large-api.mock.ts` as documentation-only `describe/it` blocks, mirroring the pattern
 * used by `large-api.mock.ts` in the same package. Importing those mocks from a `.test.ts` file
 * pulls the large definition into the browser bundle and exceeds the test runner's timeouts.
 */
