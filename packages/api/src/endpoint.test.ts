import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineShape, type Shape} from 'object-shape-tester';
import {
    defineEndpoint,
    type EndpointDefinition,
    type EndpointMethodDefinition,
    type ResponseDefinitions,
} from './endpoint.js';

describe('EndpointMethodDefinition', () => {
    it('allows requestData for POST', () => {
        const definition: EndpointMethodDefinition<HttpMethod.Post> = {
            clientOrigin: 'https://example.com',
            requestData: defineShape({
                name: '',
            }),
            responses: {},
        };
    });

    it('disallows requestData for GET', () => {
        const definition: EndpointMethodDefinition<HttpMethod.Get> = {
            clientOrigin: 'https://example.com',
            // @ts-expect-error: GET does not allow requestData
            requestData: defineShape({
                name: '',
            }),
            responses: {},
        };
        const definition2: EndpointMethodDefinition<HttpMethod.Get> = {
            clientOrigin: 'https://example.com',
            responses: {},
        };
    });

    it('allows searchParams', () => {
        const definition: EndpointMethodDefinition<HttpMethod.Get> = {
            clientOrigin: '',
            searchParams: {
                query: defineShape(''),
                page: defineShape(0),
            },
            responses: {},
        };
    });

    it('allows customProps', () => {
        const definition: EndpointMethodDefinition<HttpMethod.Get> = {
            clientOrigin: '',
            customProps: {
                someProp: 'hello',
            },
            responses: {},
        };
    });

    it('allows omitting optional fields', () => {
        const definition: EndpointMethodDefinition<HttpMethod.Post> = {
            clientOrigin: '',
            responses: {},
        };
    });
});

describe('ResponseDefinitions', () => {
    it('allows partial status code mapping', () => {
        const responses: ResponseDefinitions = {
            [HttpStatus.Ok]: {
                responseData: defineShape({
                    message: '',
                }),
            },
        };
    });

    it('allows undefined responseData', () => {
        const responses: ResponseDefinitions = {
            [HttpStatus.NoContent]: {
                responseData: undefined,
            },
        };
    });

    it('allows multiple status codes', () => {
        const responses: ResponseDefinitions = {
            [HttpStatus.Ok]: {
                responseData: defineShape({
                    data: '',
                }),
            },
            [HttpStatus.BadRequest]: {
                responseData: defineShape({
                    error: '',
                }),
            },
            [HttpStatus.InternalServerError]: {
                responseData: undefined,
            },
        };
    });
});

describe('EndpointDefinition', () => {
    it('allows multiple methods on one endpoint', () => {
        const endpoint: EndpointDefinition = {
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
                [HttpMethod.Post]: {
                    clientOrigin: '',
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
        };
    });

    it('allows an endpoint with no methods', () => {
        const endpoint: EndpointDefinition = {
            path: '/',
            requests: {},
        };
    });
});

describe(defineEndpoint.name, () => {
    it('returns the same object', () => {
        const input = {
            path: '/',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        } as const;

        const result = defineEndpoint(input);
        assert.strictEquals(result, input);
    });

    it('preserves literal response status types', () => {
        const result = defineEndpoint({
            path: '/items',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape({
                                items: [''],
                            }),
                        },
                        [HttpStatus.NotFound]: {
                            responseData: undefined,
                        },
                    },
                },
            },
        });

        assert.tsType(result.path).equals<'/items'>();

        assert.tsType(result.requests[HttpMethod.Get].responses).equals<
            Readonly<{
                [HttpStatus.Ok]: Readonly<{
                    responseData: Shape<{
                        items: string[];
                    }>;
                }>;
                [HttpStatus.NotFound]: Readonly<{
                    responseData: undefined;
                }>;
            }>
        >();
    });

    it('preserves method-specific types', () => {
        const result = defineEndpoint({
            path: '/resource',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: 'https://get.com',
                },
                [HttpMethod.Post]: {
                    clientOrigin: 'https://post.com',
                    requestData: defineShape({
                        value: 0,
                    }),
                },
            },
        });

        assert.tsType(result.requests[HttpMethod.Get].clientOrigin).equals<'https://get.com'>();
        assert.tsType(result.requests[HttpMethod.Post].clientOrigin).equals<'https://post.com'>();
    });

    it('preserves clientOrigin literal type', () => {
        const result = defineEndpoint({
            path: '/me',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: 'https://my-app.com',
                    responses: {},
                },
            },
        });

        assert.tsType(result.requests[HttpMethod.Get].clientOrigin).equals<'https://my-app.com'>();
    });

    it('preserves path literal type', () => {
        const result = defineEndpoint({
            path: '/widgets/42',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });

        assert.tsType(result.path).equals<'/widgets/42'>();
    });

    it('preserves customProps types', () => {
        const result = defineEndpoint({
            path: '/admin',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    customProps: {
                        requiresAuth: true,
                        role: 'admin',
                    },
                    responses: {},
                },
            },
        });

        assert.tsType(result.requests[HttpMethod.Get].customProps).equals<{
            readonly requiresAuth: true;
            readonly role: 'admin';
        }>();
    });

    it('preserves searchParams types', () => {
        const queryShape = defineShape('');
        const limitShape = defineShape(0);

        const result = defineEndpoint({
            path: '/search',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    searchParams: {
                        query: queryShape,
                        limit: limitShape,
                    },
                    responses: {},
                },
            },
        });

        assert.tsType(result.requests[HttpMethod.Get].searchParams).equals<{
            readonly query: typeof queryShape;
            readonly limit: typeof limitShape;
        }>();
    });

    it('preserves requestData shape type for POST', () => {
        const bodyShape = defineShape({
            title: '',
            count: 0,
        });

        const result = defineEndpoint({
            path: '/posts',
            requests: {
                [HttpMethod.Post]: {
                    clientOrigin: '',
                    requestData: bodyShape,
                    responses: {},
                },
            },
        });

        assert.tsType(result.requests[HttpMethod.Post].requestData).equals<typeof bodyShape>();
    });

    it('preserves undefined requestData type', () => {
        const result = defineEndpoint({
            path: '/noop',
            requests: {
                [HttpMethod.Post]: {
                    clientOrigin: '',
                    requestData: undefined,
                    responses: {},
                },
            },
        });

        assert.tsType(result.requests[HttpMethod.Post].requestData).equals<undefined>();
    });

    it('is assignable to EndpointDefinition', () => {
        const result = defineEndpoint({
            path: '/base',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });

        const asBase: EndpointDefinition = result;
    });

    it('preserves multiple method definitions simultaneously', () => {
        const result = defineEndpoint({
            path: '/multi',
            requests: {
                [HttpMethod.Get]: {
                    clientOrigin: '',
                    responses: {},
                },
                [HttpMethod.Put]: {
                    clientOrigin: '',
                    requestData: defineShape({
                        updated: true,
                    }),
                    responses: {},
                },
                [HttpMethod.Delete]: {
                    clientOrigin: '',
                    responses: {},
                },
            },
        });

        assert.isDefined(result.requests[HttpMethod.Get]);
        assert.isDefined(result.requests[HttpMethod.Put]);
        assert.isDefined(result.requests[HttpMethod.Delete]);
        // @ts-expect-error: this endpoint has no post
        assert.isUndefined(result.requests[HttpMethod.Post]);
        // @ts-expect-error: this endpoint has no patch
        assert.isUndefined(result.requests[HttpMethod.Patch]);
    });
});
