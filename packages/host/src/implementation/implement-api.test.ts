import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {
    defineApi,
    defineEndpoint,
    defineWebSocket,
    type EndpointDefinition,
    HttpMethod,
    HttpStatus,
    type WebSocketDefinition,
} from '@rest-vir/api';
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
            createHostContext() {
                return {
                    context: undefined,
                };
            },
            endpoints: {
                '/ping': {} as EndpointImplementation<typeof pingEndpoint>,
                '/users/create': {} as EndpointImplementation<typeof usersCreateEndpoint>,
            },
            webSockets: {
                '/ws/chat': {} as WebSocketImplementation<typeof chatWebSocket>,
                '/ws/presence': {} as WebSocketImplementation<typeof presenceWebSocket>,
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
            createHostContext() {
                return {
                    context: undefined,
                };
            },
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
                '/ping': {} as EndpointImplementation<typeof pingEndpoint>,
                '/users/create': {} as EndpointImplementation<typeof usersCreateEndpoint>,
                // @ts-expect-error: '/unknown' is not a registered endpoint path.
                '/unknown': {} as EndpointImplementation,
            },
            webSockets: {
                '/ws/chat': {} as WebSocketImplementation<typeof chatWebSocket>,
                '/ws/presence': {} as WebSocketImplementation<typeof presenceWebSocket>,
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

describe('HostContext mismatch', () => {
    type HostContextA = {
        userId: string;
    };
    type HostContextB = {
        sessionId: number;
    };

    /**
     * Typed to match the slot signature exactly so that the only type difference between these
     * values and the slot is the `HostContext` parameter. This ensures the `@ts-expect-error`
     * assertions below catch HostContext mismatches specifically, not unrelated variance issues in
     * the endpoint or websocket shape parameters.
     */
    const pingForA = {} as EndpointImplementation<
        EndpointDefinition & {path: '/ping'},
        HostContextA
    >;
    const usersCreateForB = {} as EndpointImplementation<
        EndpointDefinition & {path: '/users/create'},
        HostContextB
    >;
    const usersCreateForA = {} as EndpointImplementation<
        EndpointDefinition & {path: '/users/create'},
        HostContextA
    >;
    const chatForA = {} as WebSocketImplementation<
        WebSocketDefinition & {path: '/ws/chat'},
        HostContextA
    >;
    const chatForB = {} as WebSocketImplementation<
        WebSocketDefinition & {path: '/ws/chat'},
        HostContextB
    >;
    const presenceForA = {} as WebSocketImplementation<
        WebSocketDefinition & {path: '/ws/presence'},
        HostContextA
    >;
    const presenceForB = {} as WebSocketImplementation<
        WebSocketDefinition & {path: '/ws/presence'},
        HostContextB
    >;

    /**
     * Known limitation: the endpoint slot value type in `ApiRouteImplementations` uses
     * `EndpointImplementation<any, NoInfer<HostContext>>` so the type stays cheap enough for APIs
     * with thousands of endpoints (`large-api-mock` defines 1600). The `any` parameter causes
     * `EndpointMethodImplementations` to take its `NoParam` fallback branch, which uses
     * `MakeBivariantFunction` and erases the contravariance check on the method's `context`
     * parameter. So a HostContext mismatch on an _endpoint_ implementation is not caught.
     *
     * Tightening this (either by using `EndpointDefinition` for the slot's Endpoint param, or by
     * adding a phantom `__hostContextMarker` field to `EndpointImplementation`) triggers a
     * TypeScript internal compiler error (`Debug Failure: parameter should have errors when
     * reporting errors`) at the 1,600-endpoint scale.
     *
     * The websocket equivalent below still catches the mismatch because `WebSocketImplementation`
     * doesn't have a bivariant fallback path. If you need this check on endpoints, narrow the slot
     * value type at the call site by writing `as EndpointImplementation<typeof yourEndpoint,
     * YourHostContext>` when assigning.
     */
    it('does not catch HostContext mismatch on endpoint implementations', () => {
        implementApi<HostContextB>()(smallApi, {
            createHostContext() {
                return {
                    context: {
                        sessionId: 1,
                    },
                };
            },
            endpoints: {
                '/ping': pingForA,
                '/users/create': usersCreateForB,
            },
            webSockets: {
                '/ws/chat': chatForB,
                '/ws/presence': presenceForB,
            },
        });
    });

    it('rejects a websocket implementation built for a different HostContext', () => {
        implementApi<HostContextB>()(smallApi, {
            createHostContext() {
                return {
                    context: {
                        sessionId: 1,
                    },
                };
            },
            endpoints: {
                '/ping': {} as EndpointImplementation<
                    EndpointDefinition & {path: '/ping'},
                    HostContextB
                >,
                '/users/create': usersCreateForB,
            },
            webSockets: {
                // @ts-expect-error: webSocket was built with HostContextA, not HostContextB.
                '/ws/chat': chatForA,
                '/ws/presence': presenceForB,
            },
        });
    });

    it('accepts implementations built for the matching HostContext', () => {
        implementApi<HostContextA>()(smallApi, {
            createHostContext() {
                return {
                    context: {
                        userId: 'u-1',
                    },
                };
            },
            endpoints: {
                '/ping': pingForA,
                '/users/create': usersCreateForA,
            },
            webSockets: {
                '/ws/chat': chatForA,
                '/ws/presence': presenceForA,
            },
        });
    });
});

describe('path slot narrowing', () => {
    it('rejects an endpoint implementation whose path does not match the slot', () => {
        const pingImpl = {} as EndpointImplementation<EndpointDefinition & {path: '/ping'}>;
        const usersCreateImpl = {} as EndpointImplementation<
            EndpointDefinition & {path: '/users/create'}
        >;
        const chatImpl = {} as WebSocketImplementation<WebSocketDefinition & {path: '/ws/chat'}>;
        const presenceImpl = {} as WebSocketImplementation<
            WebSocketDefinition & {path: '/ws/presence'}
        >;

        implementApi()(smallApi, {
            createHostContext() {
                return {
                    context: undefined,
                };
            },
            endpoints: {
                // @ts-expect-error: usersCreateImpl has path '/users/create', not '/ping'.
                '/ping': usersCreateImpl,
                '/users/create': usersCreateImpl,
            },
            webSockets: {
                '/ws/chat': chatImpl,
                '/ws/presence': presenceImpl,
            },
        });

        implementApi()(smallApi, {
            createHostContext() {
                return {
                    context: undefined,
                };
            },
            endpoints: {
                '/ping': pingImpl,
                '/users/create': usersCreateImpl,
            },
            webSockets: {
                // @ts-expect-error: presenceImpl has path '/ws/presence', not '/ws/chat'.
                '/ws/chat': presenceImpl,
                '/ws/presence': presenceImpl,
            },
        });
    });
});

/**
 * NOTE: validation of `largeApiImplementation` lives in `@rest-vir/large-api-mock`'s
 * `implement-large-api.mock.ts` as documentation-only `describe/it` blocks, mirroring the pattern
 * used by `large-api.mock.ts` in the same package. Importing those mocks from a `.test.ts` file
 * pulls the 40,000-line definition into the browser bundle and exceeds the test runner's timeouts.
 */
