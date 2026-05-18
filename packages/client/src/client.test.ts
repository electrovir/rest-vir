import {assert, assertWrap} from '@augment-vir/assert';
import {
    type AnyObject,
    getOrSet,
    HttpMethod,
    HttpStatus,
    type MaybePromise,
    stringify,
    wait,
} from '@augment-vir/common';
import {describe, it, itCases} from '@augment-vir/test';
import {
    defineApi,
    defineEndpoint,
    defineWebSocket,
    formDataShape,
    parseJsonWithUndefined,
    type WebSocketDefinition,
} from '@rest-vir/api';
import {defineShape, exactShape, nullableShape} from 'object-shape-tester';
import {readResponseBodyAsJsonOrText, RestVirClient} from './client.js';
import {type HttpStatusByKey} from './endpoint-fetch/endpoint-response.js';
import {createMockFetch, createMockResponse} from './endpoint-fetch/mock-fetch.js';
import {
    type CommonWebSocket,
    type CommonWebSocketEventMap,
    CommonWebSocketState,
} from './websocket-connect/common-web-socket.js';

const mockWebSocketRegistry: {lastInstance: MockWebSocket | undefined} = {
    lastInstance: undefined,
};

function getLastMockWebSocket() {
    return assertWrap.isDefined(mockWebSocketRegistry.lastInstance);
}

class MockWebSocket implements CommonWebSocket {
    public listeners: Partial<{
        [EventName in keyof CommonWebSocketEventMap]: Set<
            (event: CommonWebSocketEventMap[EventName]) => MaybePromise<void>
        >;
    }> = {};

    public readyState: CommonWebSocketState = CommonWebSocketState.Connecting;

    public capturedConstructorArgs: {
        url: string;
        protocols: string[] | undefined;
        webSocket: WebSocketDefinition;
    };

    public sendCallback: ((data: unknown) => void) | undefined;

    constructor(
        url: string,
        protocols: string[] | undefined,
        webSocket: WebSocketDefinition,
        options: {preventImmediateOpen?: boolean} = {},
    ) {
        this.capturedConstructorArgs = {
            url,
            protocols,
            webSocket,
        };
        mockWebSocketRegistry.lastInstance = this;
        if (!options.preventImmediateOpen) {
            this.open();
        }
    }

    public open() {
        setTimeout(() => {
            if (this.readyState === CommonWebSocketState.Connecting) {
                this.readyState = CommonWebSocketState.Open;
                this.dispatchEvent('open', {});
            }
        });
    }

    public close() {
        this.dispatchEvent('close', {
            code: 0,
            reason: 'closed',
            wasClean: true,
        });
        this.listeners = {};
        this.readyState = CommonWebSocketState.Closed;
    }

    public dispatchEvent<const EventName extends keyof CommonWebSocketEventMap>(
        eventName: EventName,
        event: Omit<CommonWebSocketEventMap[EventName], 'type' | 'target'>,
    ) {
        this.listeners[eventName]?.forEach((listener) => {
            void listener({
                ...event,
                target: this,
                type: eventName,
            } as AnyObject as CommonWebSocketEventMap[EventName]);
        });
    }

    public addEventListener<const EventName extends keyof CommonWebSocketEventMap>(
        eventName: EventName,
        listener: (event: CommonWebSocketEventMap[EventName]) => MaybePromise<void>,
    ): void {
        getOrSet(this.listeners, eventName, () => new Set<any>()).add(listener as any);
    }

    public removeEventListener<const EventName extends keyof CommonWebSocketEventMap>(
        eventName: EventName,
        listener: (event: CommonWebSocketEventMap[EventName]) => MaybePromise<void>,
    ): void {
        this.listeners[eventName]?.delete(listener);
    }

    public send(data: any): void {
        if (this.readyState !== CommonWebSocketState.Open) {
            return;
        }
        this.sendCallback?.(parseJsonWithUndefined(String(data)));
    }

    /** Send a message as if it came from the host. */
    public sendFromHost(data: unknown) {
        if (this.readyState !== CommonWebSocketState.Open) {
            return;
        }
        this.dispatchEvent('message', {
            data: JSON.stringify(data),
        });
    }
}

const noMessagesWebSocket = defineWebSocket({
    path: '/ws/no-messages',
});

const echoWebSocket = defineWebSocket({
    path: '/ws/echo',
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

const noServerDataWebSocket = defineWebSocket({
    path: '/ws/no-server-data',
    clientMessage: defineShape(''),
});

const noClientDataWebSocket = defineWebSocket({
    path: '/ws/no-client-data',
    hostMessage: defineShape(''),
});

const arrayMessageWebSocket = defineWebSocket({
    path: '/ws/array-messages',
    clientMessage: defineShape([
        '',
    ]),
    hostMessage: defineShape([
        '',
    ]),
});

const searchParamsWebSocket = defineWebSocket({
    path: '/ws/search',
    searchParams: {
        roomId: defineShape(''),
        token: defineShape(''),
    },
    clientMessage: defineShape({
        action: '',
    }),
    hostMessage: defineShape({
        event: '',
    }),
});

const pathParamsWebSocket = defineWebSocket({
    path: '/ws/rooms/:roomId',
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

const wildcardWebSocket = defineWebSocket({
    path: '/ws/files/*',
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

const exactProtocolWebSocket = defineWebSocket({
    path: '/ws/exact-protocol',
    connectProtocol: exactShape('graphql-ws'),
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

/** Endpoint included only so we can construct a valid api. */
const placeholderEndpoint = defineEndpoint({
    path: '/placeholder',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const wsApi = defineApi({
    apiName: 'test',
    endpoints: [
        placeholderEndpoint,
    ],
    webSockets: [
        noMessagesWebSocket,
        echoWebSocket,
        noServerDataWebSocket,
        noClientDataWebSocket,
        arrayMessageWebSocket,
        searchParamsWebSocket,
        pathParamsWebSocket,
        wildcardWebSocket,
        exactProtocolWebSocket,
    ],
});

function makeClient() {
    return new RestVirClient(wsApi, 'https://example.com');
}

const simpleEndpoint = defineEndpoint({
    path: '/simple',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: exactShape('hi'),
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
                email: '',
            }),
            responses: {
                [HttpStatus.Created]: {
                    responseData: defineShape({
                        id: '',
                    }),
                },
                [HttpStatus.BadRequest]: {
                    responseData: defineShape({
                        error: '',
                    }),
                },
            },
        },
    },
});

const userByIdEndpoint = defineEndpoint({
    path: '/users/:userId',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        name: '',
                    }),
                },
            },
        },
        [HttpMethod.Delete]: {
            responses: {
                [HttpStatus.NoContent]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const userPostEndpoint = defineEndpoint({
    path: '/users/:userId/posts/:postId',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                    }),
                },
            },
        },
    },
});

const filesEndpoint = defineEndpoint({
    path: '/files/*',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape(''),
                },
            },
        },
    },
});

const searchEndpoint = defineEndpoint({
    path: '/search',
    requests: {
        [HttpMethod.Get]: {
            searchParams: {
                query: defineShape(''),
                page: nullableShape(''),
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        results: [''],
                    }),
                },
            },
        },
    },
});

const regexSearchEndpoint = defineEndpoint({
    path: '/regex-search',
    requests: {
        [HttpMethod.Get]: {
            searchParams: {
                code: /^[A-Z]{3}$/,
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const protectedEndpoint = defineEndpoint({
    path: '/protected',
    requests: {
        [HttpMethod.Get]: {
            requiredRequestHeaders: {
                authorization: defineShape(''),
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        data: '',
                    }),
                },
            },
        },
    },
});

const regexHeaderEndpoint = defineEndpoint({
    path: '/regex-header',
    requests: {
        [HttpMethod.Get]: {
            requiredRequestHeaders: {
                'x-api-key': /^key-.+$/,
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const noBodyEndpoint = defineEndpoint({
    path: '/no-body',
    requests: {
        [HttpMethod.Post]: {
            requestData: undefined,
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        ok: true,
                    }),
                },
            },
        },
    },
});

const formDataEndpoint = defineEndpoint({
    path: '/form-data',
    requests: {
        [HttpMethod.Post]: {
            requestData: formDataShape(),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const errorEndpoint = defineEndpoint({
    path: '/error',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.NotFound]: {
                    responseData: defineShape({
                        error: '',
                    }),
                },
            },
        },
    },
});

const fullApi = defineApi({
    apiName: 'test',
    endpoints: [
        simpleEndpoint,
        usersCreateEndpoint,
        userByIdEndpoint,
        userPostEndpoint,
        filesEndpoint,
        searchEndpoint,
        regexSearchEndpoint,
        protectedEndpoint,
        regexHeaderEndpoint,
        noBodyEndpoint,
        formDataEndpoint,
        errorEndpoint,
    ],
});

describe('StatusByKey', () => {
    it('extracts ok', () => {
        type Extracted = HttpStatusByKey<HttpStatus.Ok>;

        assert.tsType<Extracted>().equals<'Ok'>();
    });
});

describe(readResponseBodyAsJsonOrText.name, () => {
    it('does not consume the original response body (uses clone)', async () => {
        const response = new Response(
            JSON.stringify({
                n: 1,
            }),
        );

        await readResponseBodyAsJsonOrText(response, {
            'content-type': 'application/json',
        });

        /** Original is still readable because the helper clones before reading. */
        assert.deepEquals(await response.json(), {
            n: 1,
        });
    });

    itCases(readResponseBodyAsJsonOrText, [
        {
            it: 'parses a JSON object body when content-type is application/json',
            inputs: [
                new Response(
                    JSON.stringify({
                        hello: 'world',
                    }),
                ),
                {
                    'content-type': 'application/json',
                },
            ],
            expect: {
                hello: 'world',
            },
        },
        {
            it: 'parses a JSON-encoded string when content-type is application/json',
            inputs: [
                new Response(JSON.stringify('hi')),
                {
                    'content-type': 'application/json',
                },
            ],
            expect: 'hi',
        },
        {
            it: 'parses a JSON-encoded number when content-type is application/json',
            inputs: [
                new Response(JSON.stringify(42)),
                {
                    'content-type': 'application/json',
                },
            ],
            expect: 42,
        },
        {
            it: 'parses when content-type advertises a JSON variant like application/vnd.api+json',
            inputs: [
                new Response(
                    JSON.stringify({
                        type: 'thing',
                    }),
                ),
                {
                    'content-type': 'application/vnd.api+json; charset=utf-8',
                },
            ],
            expect: {
                type: 'thing',
            },
        },
        {
            it: 'returns raw text when content-type is not JSON',
            inputs: [
                new Response('plain text body'),
                {
                    'content-type': 'text/plain',
                },
            ],
            expect: 'plain text body',
        },
        {
            it: 'returns raw text when content-type header is missing',
            inputs: [
                new Response('no header'),
                {},
            ],
            expect: 'no header',
        },
        {
            it: 'returns undefined for an empty body',
            inputs: [
                new Response(''),
                {
                    'content-type': 'application/json',
                },
            ],
            expect: undefined,
        },
        {
            it: 'returns undefined for a null body',
            inputs: [
                new Response(null),
                {
                    'content-type': 'application/json',
                },
            ],
            expect: undefined,
        },
        {
            it: 'falls back to the raw text when JSON parsing fails on a JSON content-type',
            inputs: [
                new Response('not really { json'),
                {
                    'content-type': 'application/json',
                },
            ],
            expect: 'not really { json',
        },
        {
            it: 'does not parse JSON-looking text when content-type is not JSON',
            inputs: [
                new Response('{"x":1}'),
                {
                    'content-type': 'text/plain',
                },
            ],
            expect: '{"x":1}',
        },
        {
            it: 'parses a JSON content-type with charset parameter',
            inputs: [
                new Response(
                    JSON.stringify({
                        a: 1,
                    }),
                ),
                {
                    'content-type': 'application/json; charset=utf-8',
                },
            ],
            expect: {
                a: 1,
            },
        },
    ]);
});

describe(RestVirClient.name, () => {
    describe('constructor', () => {
        it('stores api, baseUrl, and fetchOverride', () => {
            const fetchOverride = () => Promise.resolve(createMockResponse());
            const client = new RestVirClient(fullApi, 'https://example.com', fetchOverride);

            assert.strictEquals(client.api, fullApi);
            assert.strictEquals(client.baseUrl, 'https://example.com');
            assert.strictEquals(client.fetchOverride, fetchOverride);
        });

        it('allows omitting fetchOverride', () => {
            const client = new RestVirClient(fullApi, 'https://example.com');
            assert.isUndefined(client.fetchOverride);
        });
    });

    describe('fetch', () => {
        it('returns the Ok status entry with parsed data for a 2xx response', async () => {
            const client = new RestVirClient(fullApi, '', () =>
                Promise.resolve(
                    createMockResponse({
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: 'hi',
                    }),
                ),
            );

            const result = await client.fetch(simpleEndpoint).GET();

            assert.isDefined(result.Ok);

            assert.strictEquals(result.Ok.responseData, 'hi');
            assert.tsType<typeof result.Ok.responseData>().equals<'hi'>();
        });

        it('returns the NotFound status entry with parsed data for a 4xx response', async () => {
            const client = new RestVirClient(fullApi, '', () =>
                Promise.resolve(
                    createMockResponse({
                        headers: {
                            'content-type': 'application/json',
                        },
                        status: HttpStatus.NotFound,
                        body: {
                            error: 'missing',
                        },
                    }),
                ),
            );
            const result = await client.fetch(errorEndpoint).GET();

            assert.isDefined(result.NotFound);
            assert.deepEquals(result.NotFound.responseData, {
                error: 'missing',
            });
        });

        it('returns the unexpectedError entry when an error response has no shape definition', async () => {
            const client = new RestVirClient(fullApi, '', () =>
                Promise.resolve(
                    createMockResponse({
                        headers: {
                            'content-type': 'application/json',
                        },
                        status: HttpStatus.InternalServerError,
                        body: 'oops',
                    }),
                ),
            );
            const result = await client.fetch(simpleEndpoint).GET();

            assert.isDefined(result.unexpectedError);
            assert.strictEquals(result.unexpectedError.responseData, 'oops');
            assert.strictEquals(result.unexpectedError.status, HttpStatus.InternalServerError);
        });

        it('throws when endpoint path is not in the api', async () => {
            const otherEndpoint = defineEndpoint({
                path: '/other',
                requests: {
                    [HttpMethod.Get]: {
                        responses: {
                            [HttpStatus.Ok]: {
                                responseData: undefined,
                            },
                        },
                    },
                },
            });
            const client = new RestVirClient(fullApi, '', () =>
                Promise.resolve(createMockResponse()),
            );

            await assert.throws(
                async () =>
                    await client
                        // @ts-expect-error: `otherEndpoint` is not in `fullApi`.
                        .fetch(otherEndpoint)
                        .GET(),
                {
                    matchMessage: '/other',
                },
            );
        });

        it('omits undeclared methods from the fetch result object', () => {
            const client = new RestVirClient(fullApi, '', () =>
                Promise.resolve(createMockResponse()),
            );
            const fetchers = client.fetch(simpleEndpoint) as Record<string, unknown>;
            assert.isFunction(fetchers.GET);
            assert.isUndefined(fetchers.POST);
        });

        it('uses fetchOverride from params instead of constructor', async () => {
            const client = new RestVirClient(fullApi, '', () =>
                Promise.resolve(
                    createMockResponse({
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: 'wrong',
                    }),
                ),
            );
            const result = await client.fetch(simpleEndpoint).GET({
                fetchOverride: () =>
                    Promise.resolve(
                        createMockResponse({
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: 'hi',
                        }),
                    ),
            });

            assert.isDefined(result.Ok);
            assert.strictEquals(result.Ok.responseData, 'hi');
        });

        it('passes the constructed URL and request init to fetch', async () => {
            const captured: {url: string; init: RequestInit | undefined} = {
                url: '',
                init: undefined,
            };
            const client = new RestVirClient(fullApi, 'https://example.com', (url, init) => {
                captured.url = stringify(url);
                captured.init = init;
                return Promise.resolve(
                    createMockResponse({
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: {
                            id: '1',
                            name: 'Alice',
                        },
                    }),
                );
            });

            await client.fetch(userByIdEndpoint).GET({
                pathParams: {
                    userId: '1',
                } as never,
            });

            assert.strictEquals(captured.url, 'https://example.com/users/1');
            assert.strictEquals(captured.init?.method, HttpMethod.Get);
        });

        it('serializes request body as JSON', async () => {
            const captured: {init: RequestInit | undefined} = {
                init: undefined,
            };
            const client = new RestVirClient(fullApi, '', (url, init) => {
                captured.init = init;
                return Promise.resolve(
                    createMockResponse({
                        headers: {
                            'content-type': 'application/json',
                        },
                        status: HttpStatus.Created,
                        body: {
                            id: '42',
                        },
                    }),
                );
            });

            const result = await client.fetch(usersCreateEndpoint).POST({
                requestData: {
                    name: 'Alice',
                    email: 'a@b.com',
                },
            });

            assert.isDefined(result.Created);
            assert.strictEquals(
                captured.init?.body,
                JSON.stringify({
                    name: 'Alice',
                    email: 'a@b.com',
                }),
            );
        });

        it('falls back to globalThis.fetch when no override is provided', async () => {
            const originalFetch = globalThis.fetch;
            try {
                globalThis.fetch = ((..._args: unknown[]) =>
                    Promise.resolve(
                        createMockResponse({
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: 'hi',
                        }),
                    )) as unknown as typeof globalThis.fetch;

                const client = new RestVirClient(fullApi, '');
                const result = await client.fetch(simpleEndpoint).GET();
                assert.strictEquals(result.Ok?.responseData, 'hi');
            } finally {
                globalThis.fetch = originalFetch;
            }
        });

        it('throws when responseData is undefined-shaped but the server sends body data', async () => {
            const client = new RestVirClient(fullApi, '', () =>
                Promise.resolve(
                    createMockResponse({
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: 'unexpected payload',
                    }),
                ),
            );

            await assert.throws(
                async () =>
                    await client.fetch(regexSearchEndpoint).GET({
                        searchParams: {
                            code: 'ABC',
                        },
                    }),
                {
                    matchMessage: 'unexpectedly present data',
                },
            );
        });

        it('throws when receiving an unexpected successful status with no response definition', async () => {
            const client = new RestVirClient(fullApi, '', () =>
                Promise.resolve(
                    createMockResponse({
                        headers: {
                            'content-type': 'application/json',
                        },
                        status: HttpStatus.Accepted,
                        body: 'unexpected',
                    }),
                ),
            );

            await assert.throws(async () => await client.fetch(simpleEndpoint).GET(), {
                matchMessage: 'unexpected successful response',
            });
        });
    });

    describe('fetchStream', () => {
        it('returns the response body as a ReadableStream', async () => {
            const client = new RestVirClient(fullApi, '', () => {
                const response = new Response('hi', {
                    status: HttpStatus.Ok,
                    headers: {
                        'content-type': 'application/json',
                    },
                });
                return Promise.resolve(response);
            });
            const result = await client.fetchStream(simpleEndpoint, HttpMethod.Get);

            assert.isDefined(result.Ok);
            assert.instanceOf(result.Ok.responseData, ReadableStream);
        });

        it('throws when the response body is null', async () => {
            const client = new RestVirClient(fullApi, '', () => {
                const response = new Response(null, {
                    status: HttpStatus.Ok,
                    headers: {
                        'content-type': 'application/json',
                    },
                });
                return Promise.resolve(response);
            });

            await assert.throws(
                async () => await client.fetchStream(simpleEndpoint, HttpMethod.Get),
                {
                    matchMessage: 'no body to stream',
                },
            );
        });

        it('builds wildcard path params correctly via the websocket builder', () => {
            const wsClient = new RestVirClient(wsApi, 'https://example.com');
            const url = wsClient.buildWebSocketUrl(wildcardWebSocket, {
                pathParams: {
                    wildcard: 'a/b/c',
                } as never,
            });
            assert.strictEquals(url, 'wss://example.com/ws/files/a/b/c');
        });
    });

    describe('buildEndpointUrl', () => {
        const client = new RestVirClient(fullApi, 'https://example.com');

        it('builds a URL for a simple path with no params', () => {
            const url = client.buildEndpointUrl(simpleEndpoint, HttpMethod.Get, {});
            assert.strictEquals(url, 'https://example.com/simple');
        });

        it('interpolates a single named path param', () => {
            const url = client.buildEndpointUrl(userByIdEndpoint, HttpMethod.Get, {
                pathParams: {
                    userId: '42',
                } as never,
            });
            assert.strictEquals(url, 'https://example.com/users/42');
        });

        it('interpolates multiple named path params', () => {
            const url = client.buildEndpointUrl(userPostEndpoint, HttpMethod.Get, {
                pathParams: {
                    userId: '1',
                    postId: '2',
                } as never,
            });
            assert.strictEquals(url, 'https://example.com/users/1/posts/2');
        });

        it('throws when a wildcard is missing', () => {
            assert.throws(
                () => client.buildEndpointUrl(filesEndpoint, HttpMethod.Get, {} as never),
                {
                    matchMessage: 'wildcard',
                },
            );
        });

        it('throws when a named path param is missing', () => {
            assert.throws(
                () =>
                    client.buildEndpointUrl(userByIdEndpoint, HttpMethod.Get, {
                        pathParams: {} as never,
                    }),
                {
                    matchMessage: 'userId',
                },
            );
        });

        it('throws when path has no params but pathParams are set', () => {
            assert.throws(
                () =>
                    client.buildEndpointUrl(simpleEndpoint, HttpMethod.Get, {
                        pathParams: {
                            extra: 'oops',
                        } as never,
                    }),
                {
                    matchMessage: '/simple',
                },
            );
        });

        it('throws when method does not exist on endpoint', () => {
            assert.throws(
                () =>
                    // @ts-expect-error: simpleEndpoint has no POST method.
                    client.buildEndpointUrl(simpleEndpoint, HttpMethod.Post, {}),
                {
                    matchMessage: HttpMethod.Post,
                },
            );
        });

        it('appends search params to the URL', () => {
            const url = client.buildEndpointUrl(searchEndpoint, HttpMethod.Get, {
                searchParams: {
                    query: 'hello',
                    page: '2',
                },
            });
            assert.strictEquals(url, 'https://example.com/search?query=hello&page=2');
        });

        it('omits undefined search param values', () => {
            const url = client.buildEndpointUrl(searchEndpoint, HttpMethod.Get, {
                searchParams: {
                    query: 'hello',
                },
            });
            assert.strictEquals(url, 'https://example.com/search?query=hello');
        });

        it('throws when a regex search param does not match', () => {
            assert.throws(
                () =>
                    client.buildEndpointUrl(regexSearchEndpoint, HttpMethod.Get, {
                        searchParams: {
                            code: 'abc',
                        },
                    }),
                {
                    matchMessage: 'code',
                },
            );
        });

        it('accepts a regex search param that matches', () => {
            const url = client.buildEndpointUrl(regexSearchEndpoint, HttpMethod.Get, {
                searchParams: {
                    code: 'ABC',
                },
            });
            assert.strictEquals(url, 'https://example.com/regex-search?code=ABC');
        });
    });

    describe('buildEndpointRequestInit', () => {
        const client = new RestVirClient(fullApi, 'https://example.com');

        it('sets the request method', () => {
            const {requestInit} = client.buildEndpointRequestInit(
                simpleEndpoint,
                HttpMethod.Get,
                undefined,
            );
            assert.strictEquals(requestInit.method, HttpMethod.Get);
        });

        it('throws when method does not exist on endpoint', () => {
            assert.throws(
                () =>
                    client.buildEndpointRequestInit(
                        simpleEndpoint,
                        // @ts-expect-error: simpleEndpoint has no POST method.
                        HttpMethod.Post,
                        undefined,
                    ),
                {
                    matchMessage: HttpMethod.Post,
                },
            );
        });

        it('sets json content-type by default when requestData is provided', () => {
            const {requestInit} = client.buildEndpointRequestInit(
                usersCreateEndpoint,
                HttpMethod.Post,
                {
                    requestData: {
                        name: 'A',
                        email: 'a@b.com',
                    },
                },
            );
            const headers = requestInit.headers as Record<string, string>;
            assert.strictEquals(headers['content-type'], 'application/json');
            assert.strictEquals(
                requestInit.body,
                JSON.stringify({
                    name: 'A',
                    email: 'a@b.com',
                }),
            );
        });

        it('does not set content-type for FormData request data', () => {
            const formData = new FormData();
            formData.append('field', 'value');
            const {requestInit} = client.buildEndpointRequestInit(
                formDataEndpoint,
                HttpMethod.Post,
                {
                    requestData: formData,
                },
            );
            const headers = requestInit.headers as Record<string, string>;
            assert.isUndefined(headers['content-type']);
            assert.strictEquals(requestInit.body, formData);
        });

        it('does not set content-type when skipAutomaticContentTypeHeader is true', () => {
            const {requestInit} = client.buildEndpointRequestInit(
                usersCreateEndpoint,
                HttpMethod.Post,
                {
                    requestData: {
                        name: 'A',
                        email: 'a@b.com',
                    },
                    skipAutomaticContentTypeHeader: true,
                },
            );
            const headers = requestInit.headers as Record<string, string>;
            assert.isUndefined(headers['content-type']);
        });

        it('omits the body when requestData is not provided', () => {
            const {requestInit} = client.buildEndpointRequestInit(
                noBodyEndpoint,
                HttpMethod.Post,
                undefined,
            );
            assert.isUndefined(requestInit.body);
        });

        it('merges plain object headers from options', () => {
            const {requestInit} = client.buildEndpointRequestInit(simpleEndpoint, HttpMethod.Get, {
                options: {
                    headers: {
                        'X-Custom': 'value',
                    },
                },
            });
            const headers = requestInit.headers as Record<string, string>;
            assert.strictEquals(headers['x-custom'], 'value');
        });

        it('merges Headers instance from options', () => {
            const headersInstance = new Headers({
                'X-Custom': 'from-headers',
            });
            const {requestInit} = client.buildEndpointRequestInit(simpleEndpoint, HttpMethod.Get, {
                options: {
                    headers: headersInstance,
                },
            });
            const headers = requestInit.headers as Record<string, string>;
            assert.strictEquals(headers['x-custom'], 'from-headers');
        });

        it('merges tuple-array headers from options', () => {
            const {requestInit} = client.buildEndpointRequestInit(simpleEndpoint, HttpMethod.Get, {
                options: {
                    headers: [
                        [
                            'X-Custom',
                            'tuple-value',
                        ],
                    ],
                },
            });
            const headers = requestInit.headers as Record<string, string>;
            assert.strictEquals(headers['x-custom'], 'tuple-value');
        });

        it('lowercases header keys', () => {
            const {requestInit} = client.buildEndpointRequestInit(simpleEndpoint, HttpMethod.Get, {
                options: {
                    headers: {
                        'X-MIXED-Case': 'value',
                    },
                },
            });
            const headers = requestInit.headers as Record<string, string>;
            assert.strictEquals(headers['x-mixed-case'], 'value');
            assert.isUndefined(headers['X-MIXED-Case']);
        });

        it('applies required headers', () => {
            const {requestInit} = client.buildEndpointRequestInit(
                protectedEndpoint,
                HttpMethod.Get,
                {
                    requiredHeaders: {
                        authorization: 'Bearer token',
                    },
                },
            );
            const headers = requestInit.headers as Record<string, string>;
            assert.strictEquals(headers.authorization, 'Bearer token');
        });

        it('lets required headers override options headers on key collision', () => {
            const {requestInit} = client.buildEndpointRequestInit(
                protectedEndpoint,
                HttpMethod.Get,
                {
                    requiredHeaders: {
                        authorization: 'Bearer required',
                    },
                    options: {
                        headers: {
                            authorization: 'Bearer overridden',
                        },
                    },
                },
            );
            const headers = requestInit.headers as Record<string, string>;
            assert.strictEquals(headers.authorization, 'Bearer required');
        });

        it('throws when required headers are missing', () => {
            assert.throws(
                () =>
                    client.buildEndpointRequestInit(protectedEndpoint, HttpMethod.Get, {} as never),
                {
                    matchMessage: '/protected',
                },
            );
        });

        it('throws when a regex required header value does not match', () => {
            assert.throws(
                () =>
                    client.buildEndpointRequestInit(regexHeaderEndpoint, HttpMethod.Get, {
                        requiredHeaders: {
                            'x-api-key': 'INVALID',
                        },
                    }),
                {
                    matchMessage: 'x-api-key',
                },
            );
        });

        it('builds a url that includes path params and search params', () => {
            const {url} = client.buildEndpointRequestInit(searchEndpoint, HttpMethod.Get, {
                searchParams: {
                    query: 'foo',
                },
            });
            assert.strictEquals(url, 'https://example.com/search?query=foo');
        });

        it('forwards extra options like credentials and signal', () => {
            const controller = new AbortController();
            const {requestInit} = client.buildEndpointRequestInit(simpleEndpoint, HttpMethod.Get, {
                options: {
                    credentials: 'include',
                    signal: controller.signal,
                },
            });
            assert.strictEquals(requestInit.credentials, 'include');
            assert.strictEquals(requestInit.signal, controller.signal);
        });
    });

    it('combines path params, search params, headers, and request body', async () => {
        const captured: {url: string; init: RequestInit | undefined} = {
            url: '',
            init: undefined,
        };
        const integrationEndpoint = defineEndpoint({
            path: '/items/:itemId',
            requests: {
                [HttpMethod.Post]: {
                    requestData: defineShape({
                        value: '',
                    }),
                    searchParams: {
                        mode: defineShape(''),
                    },
                    requiredRequestHeaders: {
                        authorization: defineShape(''),
                    },
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape({
                                ok: true,
                            }),
                        },
                    },
                },
            },
        });
        const integrationApi = defineApi({
            apiName: 'test',
            endpoints: [integrationEndpoint],
        });
        const client = new RestVirClient(integrationApi, 'https://example.com', (url, init) => {
            captured.url = stringify(url);
            captured.init = init;
            return Promise.resolve(
                createMockResponse({
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: {
                        ok: true,
                    },
                }),
            );
        });

        const result = await client.fetch(integrationEndpoint).POST({
            pathParams: {
                itemId: '99',
            } as never,
            searchParams: {
                mode: 'fast',
            },
            requiredHeaders: {
                authorization: 'Bearer abc',
            },
            requestData: {
                value: 'payload',
            },
        });

        assert.isDefined(result.Ok);
        assert.strictEquals(captured.url, 'https://example.com/items/99?mode=fast');
        assert.strictEquals(captured.init?.method, HttpMethod.Post);
        assert.strictEquals(
            captured.init.body,
            JSON.stringify({
                value: 'payload',
            }),
        );
        const headers = captured.init.headers as Record<string, string>;
        assert.strictEquals(headers.authorization, 'Bearer abc');
        assert.strictEquals(headers['content-type'], 'application/json');
    });

    it('uses createMockFetch as a fetchOverride', async () => {
        const client = new RestVirClient(
            fullApi,
            'https://example.com',
            createMockFetch({
                body: 'hi',
            }),
        );
        const result = await client.fetch(simpleEndpoint).GET();
        assert.isDefined(result.Ok);
        assert.strictEquals(result.Ok.responseData, 'hi');
    });

    it('restricts endpoint paths from defineApi', async () => {
        const otherApi = defineApi({
            apiName: 'test',
            endpoints: [simpleEndpoint],
        });
        const otherEndpoint = defineEndpoint({
            path: '/different-path',
            requests: {
                [HttpMethod.Get]: {
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: undefined,
                        },
                    },
                },
            },
        });

        const client = new RestVirClient(otherApi, '', () =>
            Promise.resolve(
                createMockResponse({
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: 'hi',
                }),
            ),
        );

        assert.isDefined((await client.fetch(simpleEndpoint).GET()).Ok);

        await assert.throws(
            async () =>
                await client
                    // @ts-expect-error: `otherEndpoint` is not in `otherApi`.
                    .fetch(otherEndpoint)
                    .GET(),
        );
    });
});

describe('RestVirClient.connectWebSocket', () => {
    it('opens a websocket and resolves with the wrapped client instance', async () => {
        const client = makeClient();
        const socket = await client.connectWebSocket(noMessagesWebSocket, {
            webSocketConstructor: MockWebSocket,
        });

        assert.strictEquals(socket.readyState, CommonWebSocketState.Open);
        await socket.close();
    });

    it('builds the url from the websocket definition path', async () => {
        const client = makeClient();
        await client.connectWebSocket(echoWebSocket, {
            webSocketConstructor: MockWebSocket,
        });

        assert.strictEquals(
            getLastMockWebSocket().capturedConstructorArgs.url,
            'wss://example.com/ws/echo',
        );
    });

    it('builds an http origin into a ws:// url', async () => {
        const httpClient = new RestVirClient(wsApi, 'http://example.com');
        await httpClient.connectWebSocket(echoWebSocket, {
            webSocketConstructor: MockWebSocket,
        });

        assert.strictEquals(
            getLastMockWebSocket().capturedConstructorArgs.url,
            'ws://example.com/ws/echo',
        );
    });

    it('forwards search params into the url', async () => {
        const client = makeClient();
        await client.connectWebSocket(searchParamsWebSocket, {
            webSocketConstructor: MockWebSocket,
            searchParams: {
                roomId: 'r1',
                token: 'abc',
            },
        });

        const {url} = getLastMockWebSocket().capturedConstructorArgs;
        assert.isTrue(url.startsWith('wss://example.com/ws/search?'));
        assert.isTrue(url.includes('roomId=r1'));
        assert.isTrue(url.includes('token=abc'));
    });

    it('interpolates path params into the url', async () => {
        const client = makeClient();
        await client.connectWebSocket(pathParamsWebSocket, {
            webSocketConstructor: MockWebSocket,
            pathParams: {
                roomId: '42',
            } as never,
        });

        assert.strictEquals(
            getLastMockWebSocket().capturedConstructorArgs.url,
            'wss://example.com/ws/rooms/42',
        );
    });

    it('passes the protocols list to the WebSocket constructor', async () => {
        const client = makeClient();
        await client.connectWebSocket(noMessagesWebSocket, {
            webSocketConstructor: MockWebSocket,
            protocols: [
                'a',
                'b',
                'c',
            ],
        });

        assert.deepEquals(getLastMockWebSocket().capturedConstructorArgs.protocols, [
            'a',
            'b',
            'c',
        ]);
    });

    it('passes the webSocket definition to the WebSocket constructor', async () => {
        const client = makeClient();
        await client.connectWebSocket(echoWebSocket, {
            webSocketConstructor: MockWebSocket,
        });

        assert.strictEquals(
            getLastMockWebSocket().capturedConstructorArgs.webSocket,
            echoWebSocket,
        );
    });

    it('attaches declarative listeners and forwards events', async () => {
        const client = makeClient();
        const events: string[] = [];
        const socket = await client.connectWebSocket(noClientDataWebSocket, {
            webSocketConstructor: MockWebSocket,
            listeners: {
                open: ({event}) => {
                    events.push(event.type);
                },
                message: ({event}) => {
                    events.push(event.type);
                },
                close: ({event}) => {
                    events.push(event.type);
                },
                error: ({event}) => {
                    events.push(event.type);
                },
            },
        });

        getLastMockWebSocket().sendFromHost('ok');
        getLastMockWebSocket().dispatchEvent('error', {});
        await socket.close();

        assert.deepEquals(events, [
            'open',
            'message',
            'error',
            'close',
        ]);
    });

    it('respects addEventListener and removeEventListener for messages', async () => {
        const client = makeClient();
        const messages: unknown[] = [];
        const socket = await client.connectWebSocket(noClientDataWebSocket, {
            webSocketConstructor: MockWebSocket,
        });
        const listener = ({message}: {message: unknown}) => {
            messages.push(message);
        };
        socket.addEventListener('message', listener);

        getLastMockWebSocket().sendFromHost('one');
        socket.removeEventListener('message', listener);
        getLastMockWebSocket().sendFromHost('two');

        await socket.close();

        assert.deepEquals(messages, [
            'one',
        ]);
    });

    it('validates incoming host messages against the host shape', async () => {
        const client = makeClient();
        const socket = await client.connectWebSocket(noClientDataWebSocket, {
            webSocketConstructor: MockWebSocket,
        });

        socket.addEventListener('message', () => {});
        assert.throws(() => getLastMockWebSocket().sendFromHost(42 as never));

        await socket.close();
    });

    it('rejects send() data when the socket is not expecting client data', async () => {
        const client = makeClient();
        const socket = await client.connectWebSocket(noClientDataWebSocket, {
            webSocketConstructor: MockWebSocket,
        });

        assert.throws(
            () => {
                socket.send('disallowed' as never);
            },
            {
                matchMessage: 'does not expect any message data',
            },
        );

        await socket.close();
    });

    it('rejects messages from host when the socket is not expecting host data', async () => {
        const client = makeClient();
        const socket = await client.connectWebSocket(noServerDataWebSocket, {
            webSocketConstructor: MockWebSocket,
        });

        socket.addEventListener('message', () => {});
        assert.throws(() => getLastMockWebSocket().sendFromHost('unexpected'));

        await socket.close();
    });

    it('serializes outgoing client messages through the client shape', async () => {
        const client = makeClient();
        const sent: unknown[] = [];
        const socket = await client.connectWebSocket(echoWebSocket, {
            webSocketConstructor: MockWebSocket,
        });
        getLastMockWebSocket().sendCallback = (data) => {
            sent.push(data);
        };

        socket.send('hello');
        await socket.close();

        assert.deepEquals(sent, [
            'hello',
        ]);
    });

    it('sendAndWaitForReply resolves with the next host message', async () => {
        const client = makeClient();
        const socket = await client.connectWebSocket(echoWebSocket, {
            webSocketConstructor: MockWebSocket,
        });

        const replyPromise = socket.sendAndWaitForReply({
            message: 'ping',
        });

        await wait({
            milliseconds: 50,
        });
        getLastMockWebSocket().sendFromHost('pong');

        assert.strictEquals(await replyPromise, 'pong');
        await socket.close();
    });

    it('sendAndWaitForReply honors a replyCheck and ignores non-matching replies', async () => {
        const client = makeClient();
        const socket = await client.connectWebSocket(arrayMessageWebSocket, {
            webSocketConstructor: MockWebSocket,
        });

        const replyPromise = socket.sendAndWaitForReply({
            message: [
                'q',
            ],
            replyCheck: (msg) => msg[0] === 'c',
        });

        await wait({
            milliseconds: 50,
        });
        getLastMockWebSocket().sendFromHost([
            'a',
        ]);
        getLastMockWebSocket().sendFromHost([
            'b',
        ]);
        getLastMockWebSocket().sendFromHost([
            'c',
        ]);

        assert.deepEquals(await replyPromise, [
            'c',
        ]);
        await socket.close();
    });

    it('sendAndWaitForReply rejects after the timeout if no reply arrives', async () => {
        const client = makeClient();
        const socket = await client.connectWebSocket(echoWebSocket, {
            webSocketConstructor: MockWebSocket,
        });

        await assert.throws(
            () =>
                socket.sendAndWaitForReply({
                    message: 'ping',
                    timeout: {
                        milliseconds: 50,
                    },
                }),
            {
                matchMessage: 'got no reply',
            },
        );

        await socket.close();
    });

    it('does not send messages once the socket has closed', async () => {
        const client = makeClient();
        const sent: unknown[] = [];
        const socket = await client.connectWebSocket(echoWebSocket, {
            webSocketConstructor: MockWebSocket,
        });
        getLastMockWebSocket().sendCallback = (data) => {
            sent.push(data);
        };

        socket.send('first');
        await socket.close();
        socket.send('after-close');

        assert.deepEquals(sent, [
            'first',
        ]);
    });

    it('rejects an empty-string protocol', async () => {
        const client = makeClient();

        await assert.throws(
            () =>
                client.connectWebSocket(noMessagesWebSocket, {
                    webSocketConstructor: MockWebSocket,
                    protocols: [
                        '',
                        'b',
                    ],
                }),
            {
                matchMessage: 'Invalid protocols given',
            },
        );
    });

    it('rejects duplicate protocols', async () => {
        const client = makeClient();

        await assert.throws(
            () =>
                client.connectWebSocket(noMessagesWebSocket, {
                    webSocketConstructor: MockWebSocket,
                    protocols: [
                        'a',
                        'a',
                    ],
                }),
            {
                matchMessage: 'Invalid protocols given',
            },
        );
    });

    it('rejects a protocol that contains an illegal character', async () => {
        const client = makeClient();

        await assert.throws(
            () =>
                client.connectWebSocket(noMessagesWebSocket, {
                    webSocketConstructor: MockWebSocket,
                    protocols: [
                        ',',
                        'b',
                    ],
                }),
            {
                matchMessage: 'Invalid protocols given',
            },
        );
    });

    it('rejects whitespace-only protocols', async () => {
        const client = makeClient();

        await assert.throws(
            () =>
                client.connectWebSocket(noMessagesWebSocket, {
                    webSocketConstructor: MockWebSocket,
                    protocols: [
                        ' ',
                        'b',
                    ],
                }),
            {
                matchMessage: 'Invalid protocols given',
            },
        );
    });

    it('rejects protocols that fail the connectProtocol shape requirement', async () => {
        const client = makeClient();

        await assert.throws(
            () =>
                client.connectWebSocket(exactProtocolWebSocket, {
                    webSocketConstructor: MockWebSocket,
                    protocols: [
                        'soap-ws',
                    ] as never,
                }),
            {
                matchMessage: 'failed protocol requirement',
            },
        );
    });

    it('accepts protocols that satisfy the connectProtocol shape requirement', async () => {
        const client = makeClient();
        const socket = await client.connectWebSocket(exactProtocolWebSocket, {
            webSocketConstructor: MockWebSocket,
            protocols: [
                'graphql-ws',
            ],
        });
        await socket.close();
    });

    it('fails if the websocket dispatches an error before opening', async () => {
        const client = makeClient();
        class ErrorMockWebSocket extends MockWebSocket {
            constructor(
                url: string,
                protocols: string[] | undefined,
                webSocket: WebSocketDefinition,
            ) {
                super(url, protocols, webSocket, {
                    preventImmediateOpen: true,
                });
                setTimeout(() => this.dispatchEvent('error', {}), 5);
            }
        }

        await assert.throws(
            () =>
                client.connectWebSocket(noMessagesWebSocket, {
                    webSocketConstructor: ErrorMockWebSocket,
                }),
            {
                matchMessage: 'WebSocket connection failed',
            },
        );
    });

    it('fails if the websocket closes before it opens', async () => {
        const client = makeClient();
        class ImmediatelyClosedMockWebSocket extends MockWebSocket {
            constructor(
                url: string,
                protocols: string[] | undefined,
                webSocket: WebSocketDefinition,
            ) {
                super(url, protocols, webSocket, {
                    preventImmediateOpen: true,
                });
                this.readyState = CommonWebSocketState.Closed;
            }
        }

        await assert.throws(
            () =>
                client.connectWebSocket(noMessagesWebSocket, {
                    webSocketConstructor: ImmediatelyClosedMockWebSocket,
                }),
            {
                matchMessage: 'WebSocket closed while waiting for it to open',
            },
        );
    });

    it('uses the default WebSocket constructor when none is provided', async () => {
        /**
         * Connecting against a non-routable origin will fail at the global `WebSocket` level rather
         * than reaching our mock. We just want to confirm `defaultWebSocket` is used as the
         * fallback — i.e. the call doesn't throw a TypeError before construction. We catch the
         * inevitable connection failure.
         */
        const offlineClient = new RestVirClient(wsApi, 'wss://nonexistent.invalid');
        await assert.throws(() => offlineClient.connectWebSocket(echoWebSocket));
    });
});

describe('RestVirClient.buildWebSocketUrl', () => {
    it('builds a wss url for an https base origin', () => {
        const client = new RestVirClient(wsApi, 'https://example.com');
        const url = client.buildWebSocketUrl(noMessagesWebSocket, undefined);
        assert.strictEquals(url, 'wss://example.com/ws/no-messages');
    });

    it('builds a ws url for an http base origin', () => {
        const client = new RestVirClient(wsApi, 'http://example.com');
        const url = client.buildWebSocketUrl(noMessagesWebSocket, undefined);
        assert.strictEquals(url, 'ws://example.com/ws/no-messages');
    });

    it('appends search params', () => {
        const client = new RestVirClient(wsApi, 'https://example.com');
        const url = client.buildWebSocketUrl(searchParamsWebSocket, {
            searchParams: {
                roomId: '1',
                token: 'abc',
            },
        });
        assert.isTrue(url.startsWith('wss://example.com/ws/search?'));
        assert.isTrue(url.includes('roomId=1'));
        assert.isTrue(url.includes('token=abc'));
    });

    it('interpolates path params', () => {
        const client = new RestVirClient(wsApi, 'https://example.com');
        const url = client.buildWebSocketUrl(pathParamsWebSocket, {
            pathParams: {
                roomId: 'r1',
            } as never,
        });
        assert.strictEquals(url, 'wss://example.com/ws/rooms/r1');
    });

    it('throws when a path param is missing', () => {
        const client = new RestVirClient(wsApi, 'https://example.com');
        assert.throws(
            () =>
                client.buildWebSocketUrl(pathParamsWebSocket, {
                    pathParams: {} as never,
                }),
            {
                matchMessage: 'roomId',
            },
        );
    });

    it('throws when a wildcard segment is missing', () => {
        const client = new RestVirClient(wsApi, 'https://example.com');
        assert.throws(
            () =>
                client.buildWebSocketUrl(wildcardWebSocket, {
                    pathParams: {} as never,
                }),
            {
                matchMessage: 'wildcard',
            },
        );
    });

    it('returns undefined params untouched', () => {
        const client = new RestVirClient(wsApi, 'https://example.com');
        const url = client.buildWebSocketUrl(echoWebSocket, undefined);
        assert.strictEquals(url, 'wss://example.com/ws/echo');
    });
});
