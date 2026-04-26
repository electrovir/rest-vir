import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineEndpoint, formDataShape} from '@rest-vir/api';
import {defineShape, exactShape} from 'object-shape-tester';
import {RestVirClient} from './client.js';
import {createMockFetch, createMockResponse} from './mock-fetch.js';

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
                page: defineShape(0),
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
            responses: {},
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
            responses: {},
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
        it('returns ok=true with parsed data for a 2xx response', async () => {
            const client = new RestVirClient(fullApi, '', () =>
                Promise.resolve(createMockResponse({body: 'hi'})),
            );
            const result = await client.fetch(simpleEndpoint, HttpMethod.Get);

            assert.isTrue(result.ok);
            assert.strictEquals(result.data, 'hi');
        });

        it('returns ok=false with parsed data for a 4xx response', async () => {
            const client = new RestVirClient(fullApi, '', () =>
                Promise.resolve(
                    createMockResponse({
                        status: HttpStatus.NotFound,
                        body: {error: 'missing'},
                    }),
                ),
            );
            const result = await client.fetch(errorEndpoint, HttpMethod.Get);

            assert.isFalse(result.ok);
            assert.deepEquals(result.data, {error: 'missing'});
        });

        it('returns text body when error response has no shape definition', async () => {
            const client = new RestVirClient(fullApi, '', () =>
                Promise.resolve(
                    createMockResponse({
                        status: HttpStatus.InternalServerError,
                        body: 'oops',
                    }),
                ),
            );
            const result = await client.fetch(simpleEndpoint, HttpMethod.Get);

            assert.isFalse(result.ok);
            assert.strictEquals(result.data, 'oops');
        });

        it('throws when endpoint path is not in the api', async () => {
            const otherEndpoint = defineEndpoint({
                path: '/other',
                requests: {
                    [HttpMethod.Get]: {
                        responses: {},
                    },
                },
            });
            const client = new RestVirClient(fullApi, '', () =>
                Promise.resolve(createMockResponse()),
            );

            await assert.throws(
                async () =>
                    await client.fetch(
                        // @ts-expect-error: `otherEndpoint` is not in `fullApi`.
                        otherEndpoint,
                        HttpMethod.Get,
                    ),
                {matchMessage: '/other'},
            );
        });

        it('throws when method is not defined on the endpoint', async () => {
            const client = new RestVirClient(fullApi, '', () =>
                Promise.resolve(createMockResponse()),
            );

            await assert.throws(
                async () =>
                    // @ts-expect-error: simpleEndpoint does not support POST.
                    await client.fetch(simpleEndpoint, HttpMethod.Post),
                {matchMessage: HttpMethod.Post},
            );
        });

        it('uses fetchOverride from params instead of constructor', async () => {
            const client = new RestVirClient(fullApi, '', () =>
                Promise.resolve(createMockResponse({body: 'wrong'})),
            );
            const result = await client.fetch(simpleEndpoint, HttpMethod.Get, {
                fetchOverride: () => Promise.resolve(createMockResponse({body: 'hi'})),
            });

            assert.isTrue(result.ok);
            assert.strictEquals(result.data, 'hi');
        });

        it('passes the constructed URL and request init to fetch', async () => {
            const captured: {url: string; init: RequestInit | undefined} = {
                url: '',
                init: undefined,
            };
            const client = new RestVirClient(fullApi, 'https://example.com', (url, init) => {
                captured.url = String(url);
                captured.init = init;
                return Promise.resolve(createMockResponse({body: {id: '1', name: 'Alice'}}));
            });

            await client.fetch(userByIdEndpoint, HttpMethod.Get, {
                pathParams: {userId: '1'} as never,
            });

            assert.strictEquals(captured.url, 'https://example.com/users/1');
            assert.strictEquals(captured.init?.method, HttpMethod.Get);
        });

        it('serializes request body as JSON', async () => {
            const captured: {init: RequestInit | undefined} = {init: undefined};
            const client = new RestVirClient(fullApi, '', (url, init) => {
                captured.init = init;
                return Promise.resolve(
                    createMockResponse({
                        status: HttpStatus.Created,
                        body: {id: '42'},
                    }),
                );
            });

            const result = await client.fetch(usersCreateEndpoint, HttpMethod.Post, {
                requestData: {name: 'Alice', email: 'a@b.com'},
            });

            assert.isTrue(result.ok);
            assert.strictEquals(
                captured.init?.body,
                JSON.stringify({name: 'Alice', email: 'a@b.com'}),
            );
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
                pathParams: {userId: '42'} as never,
            });
            assert.strictEquals(url, 'https://example.com/users/42');
        });

        it('interpolates multiple named path params', () => {
            const url = client.buildEndpointUrl(userPostEndpoint, HttpMethod.Get, {
                pathParams: {userId: '1', postId: '2'} as never,
            });
            assert.strictEquals(url, 'https://example.com/users/1/posts/2');
        });

        it('throws when a wildcard is missing', () => {
            assert.throws(
                () => client.buildEndpointUrl(filesEndpoint, HttpMethod.Get, {} as never),
                {matchMessage: 'wildcard'},
            );
        });

        it('throws when a named path param is missing', () => {
            assert.throws(
                () =>
                    client.buildEndpointUrl(userByIdEndpoint, HttpMethod.Get, {
                        pathParams: {} as never,
                    }),
                {matchMessage: 'userId'},
            );
        });

        it('throws when path has no params but pathParams are set', () => {
            assert.throws(
                () =>
                    client.buildEndpointUrl(simpleEndpoint, HttpMethod.Get, {
                        pathParams: {extra: 'oops'} as never,
                    }),
                {matchMessage: '/simple'},
            );
        });

        it('throws when method does not exist on endpoint', () => {
            assert.throws(
                () =>
                    // @ts-expect-error: simpleEndpoint has no POST method.
                    client.buildEndpointUrl(simpleEndpoint, HttpMethod.Post, {}),
                {matchMessage: HttpMethod.Post},
            );
        });

        it('appends search params to the URL', () => {
            const url = client.buildEndpointUrl(searchEndpoint, HttpMethod.Get, {
                searchParams: {query: 'hello', page: 2},
            });
            assert.strictEquals(url, 'https://example.com/search?query=hello&page=2');
        });

        it('omits undefined search param values', () => {
            const url = client.buildEndpointUrl(searchEndpoint, HttpMethod.Get, {
                searchParams: {query: 'hello'},
            });
            assert.strictEquals(url, 'https://example.com/search?query=hello');
        });

        it('throws when a regex search param does not match', () => {
            assert.throws(
                () =>
                    client.buildEndpointUrl(regexSearchEndpoint, HttpMethod.Get, {
                        searchParams: {code: 'abc'},
                    }),
                {matchMessage: 'code'},
            );
        });

        it('accepts a regex search param that matches', () => {
            const url = client.buildEndpointUrl(regexSearchEndpoint, HttpMethod.Get, {
                searchParams: {code: 'ABC'},
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
                {matchMessage: HttpMethod.Post},
            );
        });

        it('sets json content-type by default when requestData is provided', () => {
            const {requestInit} = client.buildEndpointRequestInit(
                usersCreateEndpoint,
                HttpMethod.Post,
                {
                    requestData: {name: 'A', email: 'a@b.com'},
                },
            );
            const headers = requestInit.headers as Record<string, string>;
            assert.strictEquals(headers['content-type'], 'application/json');
            assert.strictEquals(requestInit.body, JSON.stringify({name: 'A', email: 'a@b.com'}));
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
                    requestData: {name: 'A', email: 'a@b.com'},
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
            const headersInstance = new Headers({'X-Custom': 'from-headers'});
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
                    requiredHeaders: {authorization: 'Bearer token'},
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
                    requiredHeaders: {authorization: 'Bearer required'},
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
                {matchMessage: '/protected'},
            );
        });

        it('throws when a regex required header value does not match', () => {
            assert.throws(
                () =>
                    client.buildEndpointRequestInit(regexHeaderEndpoint, HttpMethod.Get, {
                        requiredHeaders: {'x-api-key': 'INVALID'},
                    }),
                {matchMessage: 'x-api-key'},
            );
        });

        it('builds a url that includes path params and search params', () => {
            const {url} = client.buildEndpointRequestInit(searchEndpoint, HttpMethod.Get, {
                searchParams: {query: 'foo'},
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

    describe('integration', () => {
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
                endpoints: [integrationEndpoint],
            });
            const client = new RestVirClient(integrationApi, 'https://example.com', (url, init) => {
                captured.url = String(url);
                captured.init = init;
                return Promise.resolve(createMockResponse({body: {ok: true}}));
            });

            const result = await client.fetch(integrationEndpoint, HttpMethod.Post, {
                pathParams: {itemId: '99'} as never,
                searchParams: {mode: 'fast'},
                requiredHeaders: {authorization: 'Bearer abc'},
                requestData: {value: 'payload'},
            });

            assert.isTrue(result.ok);
            assert.strictEquals(captured.url, 'https://example.com/items/99?mode=fast');
            assert.strictEquals(captured.init?.method, HttpMethod.Post);
            assert.strictEquals(captured.init?.body, JSON.stringify({value: 'payload'}));
            const headers = captured.init?.headers as Record<string, string>;
            assert.strictEquals(headers.authorization, 'Bearer abc');
            assert.strictEquals(headers['content-type'], 'application/json');
        });

        it('uses createMockFetch as a fetchOverride', async () => {
            const client = new RestVirClient(
                fullApi,
                'https://example.com',
                createMockFetch({body: 'hi'}),
            );
            const result = await client.fetch(simpleEndpoint, HttpMethod.Get);
            assert.isTrue(result.ok);
            assert.strictEquals(result.data, 'hi');
        });

        it('restricts endpoint paths from defineApi', async () => {
            const otherApi = defineApi({
                endpoints: [simpleEndpoint],
            });
            const otherEndpoint = defineEndpoint({
                path: '/different-path',
                requests: {
                    [HttpMethod.Get]: {
                        responses: {},
                    },
                },
            });
            const client = new RestVirClient(otherApi, '', () =>
                Promise.resolve(createMockResponse({body: 'hi'})),
            );

            assert.isTrue((await client.fetch(simpleEndpoint, HttpMethod.Get)).ok);

            await assert.throws(
                async () =>
                    // @ts-expect-error: `otherEndpoint` is not in `otherApi`.
                    await client.fetch(otherEndpoint, HttpMethod.Get),
            );
        });
    });
});
