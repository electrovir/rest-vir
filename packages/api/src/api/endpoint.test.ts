import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it, itCases} from '@augment-vir/test';
import {defineShape, exactShape, type Shape} from 'object-shape-tester';
import {type NoParam} from '../util/no-param.js';
import {
    definableHttpMethods,
    defineEndpoint,
    extractEndpointMethodDefinition,
    extractHttpMethod,
    httpMethodsWithBodies,
    type BaseRequiredResponseHeaders,
    type DefaultErrorResponseType,
    type DefaultResponseHeadersType,
    type DefaultResponseType,
    type EndpointDefinition,
    type EndpointMethodDefinition,
    type EndpointRequestHeadersType,
    type EndpointRequestType,
    type EndpointResponseHeadersType,
    type EndpointResponseType,
    type ExtractEndpointMethodDefinition,
    type ExtractEndpointMethodDefinitionWithNoParam,
    type ExtractRequiredHeaderValue,
    type ResponseDefinitions,
    type ResponseStatusDefinition,
} from './endpoint.js';

describe('ExtractEndpointMethodDefinition', () => {
    it('falls back to plain definition', () => {
        assert
            .tsType<ExtractEndpointMethodDefinition<NoParam, NoParam>>()
            .equals<EndpointMethodDefinition>();
    });
    it('extracts an existing endpoint method definition', () => {
        const endpoint = defineEndpoint({
            path: '/users',
            requests: {
                [HttpMethod.Get]: {
                    clientOriginRequirement: '',
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape({
                                users: [''],
                            }),
                        },
                    },
                },
                [HttpMethod.Post]: {
                    clientOriginRequirement: '',
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

        type ExtractedEndpointMethodDefinition = ExtractEndpointMethodDefinition<
            typeof endpoint,
            HttpMethod.Get
        >;

        assert.tsType<ExtractedEndpointMethodDefinition>().equals<
            Readonly<{
                clientOriginRequirement: '';
                responses: Readonly<{
                    [HttpStatus.Ok]: Readonly<{
                        responseData: Shape<{
                            users: string[];
                        }>;
                    }>;
                }>;
            }>
        >();
    });
});

describe('EndpointMethodDefinition', () => {
    it('allows requestData for POST', () => {
        const definition: EndpointMethodDefinition<HttpMethod.Post> = {
            clientOriginRequirement: 'https://example.com',
            requestData: defineShape({
                name: '',
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape(''),
                },
            },
        };
    });

    it('disallows requestData for GET', () => {
        const definition: EndpointMethodDefinition<HttpMethod.Get> = {
            clientOriginRequirement: 'https://example.com',
            // @ts-expect-error: GET does not allow requestData
            requestData: defineShape({
                name: '',
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape(''),
                },
            },
        };
        const definition2: EndpointMethodDefinition<HttpMethod.Get> = {
            clientOriginRequirement: 'https://example.com',
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape(''),
                },
            },
        };
    });

    it('allows searchParams', () => {
        const definition: EndpointMethodDefinition<HttpMethod.Get> = {
            clientOriginRequirement: '',
            searchParams: {
                query: defineShape(''),
                page: defineShape(''),
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape(''),
                },
            },
        };
    });

    it('allows customProps', () => {
        const definition: EndpointMethodDefinition<HttpMethod.Get> = {
            clientOriginRequirement: '',
            customProps: {
                someProp: 'hello',
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape(''),
                },
            },
        };
    });

    it('allows omitting optional fields', () => {
        const definition: EndpointMethodDefinition<HttpMethod.Post> = {
            clientOriginRequirement: '',
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape(''),
                },
            },
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
                    clientOriginRequirement: '',
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape({
                                users: [''],
                            }),
                        },
                    },
                },
                [HttpMethod.Post]: {
                    clientOriginRequirement: '',
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

    it('requires at least one method definition', () => {
        const endpoint: EndpointDefinition = {
            path: '/',
            // @ts-expect-error: requests must declare at least one HTTP method
            requests: {},
        };
        assert.isDefined(endpoint);
    });

    it('allows response shape access', () => {
        const endpoint: EndpointDefinition = {
            path: '/',
            requests: {
                [HttpMethod.Get]: {
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: undefined,
                        },
                    },
                },
            },
        };

        const responseDefinition =
            endpoint.requests[HttpMethod.Get]?.responses[HttpStatus.Accepted];

        assert.tsType(responseDefinition).equals<ResponseStatusDefinition | undefined>();
    });
});

describe('EndpointResponseHeadersType', () => {
    it('has default headers type', () => {
        const defaultHeaders = {} as any as EndpointResponseHeadersType;

        assert.tsType(defaultHeaders).equals<Record<string, string>>();
    });
});

describe(defineEndpoint.name, () => {
    it('returns the same object', () => {
        const input = {
            path: '/',
            requests: {
                [HttpMethod.Get]: {
                    clientOriginRequirement: '',
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
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
                    clientOriginRequirement: '',
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
                    clientOriginRequirement: 'https://get.com',
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
                },
                [HttpMethod.Post]: {
                    clientOriginRequirement: 'https://post.com',
                    requestData: defineShape({
                        value: 0,
                    }),
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
                },
            },
        });

        assert
            .tsType(result.requests[HttpMethod.Get].clientOriginRequirement)
            .equals<'https://get.com'>();
        assert
            .tsType(result.requests[HttpMethod.Post].clientOriginRequirement)
            .equals<'https://post.com'>();
    });

    it('preserves clientOrigin literal type', () => {
        const result = defineEndpoint({
            path: '/me',
            requests: {
                [HttpMethod.Get]: {
                    clientOriginRequirement: 'https://my-app.com',
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
                },
            },
        });

        assert
            .tsType(result.requests[HttpMethod.Get].clientOriginRequirement)
            .equals<'https://my-app.com'>();
    });

    it('preserves path literal type', () => {
        const result = defineEndpoint({
            path: '/widgets/42',
            requests: {
                [HttpMethod.Get]: {
                    clientOriginRequirement: '',
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
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
                    clientOriginRequirement: '',
                    customProps: {
                        requiresAuth: true,
                        role: 'admin',
                    },
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
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
        const limitShape = defineShape('');

        const result = defineEndpoint({
            path: '/search',
            requests: {
                [HttpMethod.Get]: {
                    clientOriginRequirement: '',
                    searchParams: {
                        query: queryShape,
                        limit: limitShape,
                    },
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
                },
            },
        });

        assert.tsType(result.requests[HttpMethod.Get].searchParams).equals<
            Readonly<{
                query: typeof queryShape;
                limit: typeof limitShape;
            }>
        >();
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
                    clientOriginRequirement: '',
                    requestData: bodyShape,
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
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
                    clientOriginRequirement: '',
                    requestData: undefined,
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
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
                    clientOriginRequirement: '',
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
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
                    clientOriginRequirement: '',
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
                },
                [HttpMethod.Put]: {
                    clientOriginRequirement: '',
                    requestData: defineShape({
                        updated: true,
                    }),
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
                },
                [HttpMethod.Delete]: {
                    clientOriginRequirement: '',
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
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

describe(extractEndpointMethodDefinition.name, () => {
    const endpoint = defineEndpoint({
        path: '/users',
        requests: {
            [HttpMethod.Get]: {
                clientOriginRequirement: '',
                responses: {
                    [HttpStatus.Ok]: {
                        responseData: defineShape({
                            users: [''],
                        }),
                    },
                },
            },
        },
    });

    it('returns the method definition when defined', () => {
        const result = extractEndpointMethodDefinition(endpoint, HttpMethod.Get);
        assert.strictEquals(result, endpoint.requests[HttpMethod.Get]);
    });

    it('returns undefined when method is not defined', () => {
        const result = extractEndpointMethodDefinition(
            endpoint as unknown as EndpointDefinition,
            HttpMethod.Post,
        );
        assert.isUndefined(result);
    });
});

describe('definableHttpMethods', () => {
    it('contains exactly the definable methods, frozen as const', () => {
        assert.deepEquals(definableHttpMethods, [
            HttpMethod.Get,
            HttpMethod.Put,
            HttpMethod.Post,
            HttpMethod.Delete,
            HttpMethod.Patch,
            HttpMethod.Trace,
        ]);
    });

    it('excludes HttpMethod.Options and HttpMethod.Head', () => {
        assert.isFalse(definableHttpMethods.includes(HttpMethod.Options as never));
        assert.isFalse(definableHttpMethods.includes(HttpMethod.Head as never));
    });
});

describe('httpMethodsWithBodies', () => {
    it('contains only methods that allow request bodies', () => {
        assert.deepEquals(httpMethodsWithBodies, [
            HttpMethod.Post,
            HttpMethod.Put,
            HttpMethod.Patch,
            HttpMethod.Delete,
        ]);
    });

    it('excludes HttpMethod.Get and HttpMethod.Trace', () => {
        assert.isFalse(httpMethodsWithBodies.includes(HttpMethod.Get as never));
        assert.isFalse(httpMethodsWithBodies.includes(HttpMethod.Trace as never));
    });
});

describe('ExtractEndpointMethodDefinitionWithNoParam', () => {
    it('falls back to NoParam when given NoParam', () => {
        assert
            .tsType<ExtractEndpointMethodDefinitionWithNoParam<NoParam, NoParam>>()
            .equals<NoParam>();
    });

    it('falls back to NoParam when method is NoParam', () => {
        const endpoint = defineEndpoint({
            path: '/x',
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

        assert
            .tsType<ExtractEndpointMethodDefinitionWithNoParam<typeof endpoint, NoParam>>()
            .equals<NoParam>();
    });

    it('extracts a concrete method definition', () => {
        const endpoint = defineEndpoint({
            path: '/x',
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

        type Extracted = ExtractEndpointMethodDefinitionWithNoParam<
            typeof endpoint,
            HttpMethod.Get
        >;

        assert.tsType<Extracted>().equals<
            Readonly<{
                responses: Readonly<{
                    [HttpStatus.Ok]: Readonly<{
                        responseData: Shape<string>;
                    }>;
                }>;
            }>
        >();
    });
});

describe('EndpointRequestType', () => {
    it('returns the shape runtimeType for a defined requestData', () => {
        const endpoint = defineEndpoint({
            path: '/posts',
            requests: {
                [HttpMethod.Post]: {
                    requestData: defineShape({
                        title: '',
                    }),
                    responses: {
                        [HttpStatus.Created]: {
                            responseData: undefined,
                        },
                    },
                },
            },
        });

        assert
            .tsType<EndpointRequestType<typeof endpoint, HttpMethod.Post>>()
            .equals<{title: string}>();
    });

    it('returns undefined when requestData is explicitly undefined', () => {
        const endpoint = defineEndpoint({
            path: '/posts',
            requests: {
                [HttpMethod.Post]: {
                    requestData: undefined,
                    responses: {
                        [HttpStatus.Created]: {
                            responseData: undefined,
                        },
                    },
                },
            },
        });

        assert.tsType<EndpointRequestType<typeof endpoint, HttpMethod.Post>>().equals<undefined>();
    });

    it('returns undefined when requestData is omitted', () => {
        const endpoint = defineEndpoint({
            path: '/posts',
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

        assert.tsType<EndpointRequestType<typeof endpoint, HttpMethod.Get>>().equals<undefined>();
    });

    it('falls back to any when given NoParam', () => {
        assert.tsType<EndpointRequestType<NoParam, NoParam>>().matches<any>();
    });

    it('falls back to any for a method not defined on the endpoint', () => {
        const endpoint = defineEndpoint({
            path: '/get-only',
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

        assert.tsType<EndpointRequestType<typeof endpoint, HttpMethod.Post>>().matches<any>();
    });
});

describe('EndpointResponseType', () => {
    it('returns the runtimeType of a defined responseData', () => {
        const endpoint = defineEndpoint({
            path: '/users',
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

        assert
            .tsType<EndpointResponseType<typeof endpoint, HttpMethod.Get, HttpStatus.Ok>>()
            .equals<{id: string}>();
    });

    it('returns the error default for undeclared error statuses', () => {
        const endpoint = defineEndpoint({
            path: '/users',
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

        assert
            .tsType<
                EndpointResponseType<
                    typeof endpoint,
                    HttpMethod.Get,
                    HttpStatus.InternalServerError
                >
            >()
            .equals<DefaultErrorResponseType>();
    });

    it('returns unknown for undeclared success statuses', () => {
        const endpoint = defineEndpoint({
            path: '/users',
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

        assert
            .tsType<EndpointResponseType<typeof endpoint, HttpMethod.Get, HttpStatus.Accepted>>()
            .equals<unknown>();
    });

    it('falls back to unknown when given NoParam', () => {
        assert.tsType<EndpointResponseType<NoParam, NoParam, NoParam>>().equals<unknown>();
    });
});

describe('DefaultResponseType', () => {
    it('is the error response type for error statuses', () => {
        assert
            .tsType<DefaultResponseType<HttpStatus.InternalServerError>>()
            .equals<DefaultErrorResponseType>();
    });

    it('is unknown for success statuses', () => {
        assert.tsType<DefaultResponseType<HttpStatus.Ok>>().equals<unknown>();
    });
});

describe('DefaultErrorResponseType', () => {
    it('is string | undefined', () => {
        assert.tsType<DefaultErrorResponseType>().equals<string | undefined>();
    });
});

describe('DefaultResponseHeadersType', () => {
    it('is Record<string, string>', () => {
        assert.tsType<DefaultResponseHeadersType>().equals<Record<string, string>>();
    });
});

describe('BaseRequiredResponseHeaders', () => {
    it('accepts a record of Shape values', () => {
        const headers: BaseRequiredResponseHeaders = {
            'x-shape': defineShape(''),
        };
        assert.isDefined(headers['x-shape']);
    });

    it('accepts a record of RegExp values', () => {
        const headers: BaseRequiredResponseHeaders = {
            'x-regex': /^[a-z]+$/,
        };
        assert.isDefined(headers['x-regex']);
    });
});

describe('ExtractRequiredHeaderValue', () => {
    it('extracts the string portion of a Shape runtime type', () => {
        type Result = ExtractRequiredHeaderValue<ReturnType<typeof defineShape<string>>>;
        assert.tsType<Result>().equals<string>();
    });

    it('narrows to a string-literal Shape runtime type', () => {
        const literalShape = exactShape('v1');
        type Result = ExtractRequiredHeaderValue<typeof literalShape>;
        assert.tsType<Result>().equals<'v1'>();
    });

    it('falls back to string for a RegExp requirement', () => {
        assert.tsType<ExtractRequiredHeaderValue<RegExp>>().equals<string>();
    });
});

describe('EndpointResponseHeadersType (with required headers)', () => {
    it('merges declared required headers with default headers', () => {
        const endpoint = defineEndpoint({
            path: '/with-headers',
            requests: {
                [HttpMethod.Get]: {
                    clientOriginRequirement: '',
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: undefined,
                            requiredResponseHeaders: {
                                'x-request-id': defineShape(''),
                            },
                        },
                    },
                },
            },
        });

        type Result = EndpointResponseHeadersType<typeof endpoint, HttpMethod.Get, HttpStatus.Ok>;

        const merged: Result = {
            'x-request-id': 'abc-123',
            'x-extra': 'value',
        };
        assert.strictEquals(merged['x-request-id'], 'abc-123');
        assert.tsType<Result['x-request-id']>().equals<string>();
        assert.tsType<Result>().matches<Record<string, string>>();
    });

    it('returns the default headers type when no required headers are declared', () => {
        const endpoint = defineEndpoint({
            path: '/no-headers',
            requests: {
                [HttpMethod.Get]: {
                    clientOriginRequirement: '',
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: undefined,
                        },
                    },
                },
            },
        });

        type Result = EndpointResponseHeadersType<typeof endpoint, HttpMethod.Get, HttpStatus.Ok>;

        assert.tsType<Result>().equals<DefaultResponseHeadersType>();
    });
});

describe('EndpointRequestHeadersType', () => {
    it('falls back to a generic record when given NoParam', () => {
        assert.tsType<EndpointRequestHeadersType>().equals<Record<string, string> | undefined>();
    });

    it('returns undefined when the route does not declare requiredRequestHeaders', () => {
        type Result = EndpointRequestHeadersType<
            EndpointMethodDefinition<HttpMethod.Get> & {requiredRequestHeaders?: undefined}
        >;

        assert.tsType<Result>().equals<undefined>();
    });

    it('returns a partial record of declared required headers', () => {
        const authShape = defineShape('');
        type Result = EndpointRequestHeadersType<
            EndpointMethodDefinition<HttpMethod.Get> & {
                requiredRequestHeaders: {
                    authorization: typeof authShape;
                    'x-tenant': RegExp;
                };
            }
        >;

        const sample: Result = {
            authorization: 'bearer xyz',
            'x-tenant': 't-42',
        };
        assert.strictEquals(sample.authorization, 'bearer xyz');
        assert.tsType<NonNullable<Result>['authorization']>().equals<string | undefined>();
    });
});

describe(extractHttpMethod.name, () => {
    itCases(extractHttpMethod, [
        {
            it: 'extracts uppercase GET',
            input: 'GET',
            expect: HttpMethod.Get,
        },
        {
            it: 'normalizes lowercase post',
            input: 'post',
            expect: HttpMethod.Post,
        },
        {
            it: 'normalizes mixed case Patch',
            input: 'Patch',
            expect: HttpMethod.Patch,
        },
        {
            it: 'returns undefined for unknown methods',
            input: 'HEAD',
            expect: undefined,
        },
        {
            it: 'returns undefined for empty string',
            input: '',
            expect: undefined,
        },
    ]);
});
