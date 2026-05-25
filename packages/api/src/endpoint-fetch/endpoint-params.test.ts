import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {
    type adminSettingsEndpoint,
    type downloadEndpoint,
    type fullRouteEndpoint,
    type itemByIdEndpoint,
    type partnerApiEndpoint,
    type pingEndpoint,
    type protectedEndpoint,
    type searchEndpoint,
    type usersCreateEndpoint,
} from '@rest-vir/api/src/api/api.mock.js';
import {defineShape} from 'object-shape-tester';
import {defineEndpoint} from '../api/endpoint.js';
import {type GenericPathParams} from '../api/path-params.js';
import {type BaseSearchParams} from '../api/route.js';
import type {
    ClientFetch,
    EndpointFetchParamObject,
    EndpointFetchParams,
} from './endpoint-params.js';
import {createMockResponse} from './mock-fetch.js';

describe('EndpointParamObject', () => {
    it('has default values', () => {
        type Generic = EndpointFetchParamObject;

        assert.tsType<Generic>().equals<{
            requestData?: any;
            searchParams?: BaseSearchParams | undefined;
            options?: Omit<RequestInit, 'body' | 'method'> | undefined;
            fetchOverride?: ClientFetch | undefined;
            skipAutomaticContentTypeHeader?: boolean | undefined;
            requiredHeaders?: Record<string, string> | undefined;
            pathParams?: GenericPathParams;
        }>();
    });

    it('can be assigned to from specific implementations', () => {
        const fromNoRequestData: EndpointFetchParamObject = {} as any as EndpointFetchParamObject<
            typeof pingEndpoint,
            typeof HttpMethod.Post
        >;
        const fromWithRequestData: EndpointFetchParamObject = {} as any as EndpointFetchParamObject<
            typeof usersCreateEndpoint,
            typeof HttpMethod.Post
        >;
        const fromWithSearchParams: EndpointFetchParamObject =
            {} as any as EndpointFetchParamObject<typeof searchEndpoint, typeof HttpMethod.Get>;
        const fromWithPathParams: EndpointFetchParamObject = {} as any as EndpointFetchParamObject<
            typeof itemByIdEndpoint,
            typeof HttpMethod.Get
        >;
        const fromWithRequiredHeaders: EndpointFetchParamObject =
            {} as any as EndpointFetchParamObject<typeof protectedEndpoint, typeof HttpMethod.Get>;
        const fromWithCustomProps: EndpointFetchParamObject = {} as any as EndpointFetchParamObject<
            typeof adminSettingsEndpoint,
            typeof HttpMethod.Get
        >;
        const fromWithResponseHeaders: EndpointFetchParamObject =
            {} as any as EndpointFetchParamObject<typeof downloadEndpoint, typeof HttpMethod.Get>;
        const fromWithAllCommonRouteFields: EndpointFetchParamObject =
            {} as any as EndpointFetchParamObject<typeof fullRouteEndpoint, typeof HttpMethod.Post>;
        const fromWithRegexClientOrigin: EndpointFetchParamObject =
            {} as any as EndpointFetchParamObject<
                typeof partnerApiEndpoint,
                typeof HttpMethod.Post
            >;
        const fromMultipleRequiredHeaders: EndpointFetchParamObject =
            {} as any as EndpointFetchParamObject<
                typeof multipleRequiredHeadersEndpoint,
                typeof HttpMethod.Get
            >;
        const fromWildcardPath: EndpointFetchParamObject = {} as any as EndpointFetchParamObject<
            typeof wildcardEndpoint,
            typeof HttpMethod.Get
        >;
        const fromNamedParamsAndWildcard: EndpointFetchParamObject =
            {} as any as EndpointFetchParamObject<
                typeof namedParamsAndWildcardEndpoint,
                typeof HttpMethod.Get
            >;
    });

    it('makes all properties optional for an endpoint with no request data or search params', () => {
        type Result = EndpointFetchParamObject<typeof pingEndpoint, typeof HttpMethod.Post>;

        assert.tsType<Result>().matches<{
            requestData?: undefined;
            searchParams?: BaseSearchParams | undefined;
            options?: Omit<RequestInit, 'body' | 'method'> | undefined;
            fetchOverride?: ClientFetch | undefined;
            skipAutomaticContentTypeHeader?: boolean | undefined;
            requiredHeaders?: undefined;
            pathParams?: undefined;
        }>();
    });

    it('requires requestData when endpoint defines a request shape', () => {
        type Result = EndpointFetchParamObject<typeof withBodyEndpoint, typeof HttpMethod.Post>;

        assert.tsType<Result['requestData']>().equals<{name: string}>();
    });

    it('makes requestData optional when endpoint has undefined requestData', () => {
        type Result = EndpointFetchParamObject<typeof noBodyEndpoint, typeof HttpMethod.Post>;

        assert.tsType<Result>().matches<{
            requestData?: undefined;
        }>();
    });

    it('requires searchParams when endpoint defines search param shapes', () => {
        type Result = EndpointFetchParamObject<typeof withSearchEndpoint, typeof HttpMethod.Get>;

        type SearchType = Result['searchParams'];

        /** The search params should include a query key with a string value. */
        assert.tsType<SearchType>().matches<
            | {
                  query?: string;
              }
            | undefined
        >();
    });

    it('requires pathParams for endpoints with named path parameters', () => {
        type Result = EndpointFetchParamObject<typeof userByIdEndpoint, typeof HttpMethod.Get>;

        assert.tsType<Result['pathParams']>().equals<
            Readonly<{
                wildcard?: undefined;
            }> &
                Readonly<Record<'userId', string>>
        >();
    });

    it('requires pathParams with multiple named parameters', () => {
        type Result = EndpointFetchParamObject<typeof userPostEndpoint, typeof HttpMethod.Get>;

        assert.tsType<Result['pathParams']>().equals<
            Readonly<{
                wildcard?: undefined;
            }> &
                Readonly<Record<'userId' | 'postId', string>>
        >();
    });

    it('makes pathParams optional for endpoints with no path parameters', () => {
        type Result = EndpointFetchParamObject<typeof simpleEndpoint, typeof HttpMethod.Get>;

        assert.tsType<Result>().matches<{
            pathParams?: undefined;
        }>();
    });

    it('requires wildcard in pathParams for wildcard endpoints', () => {
        type Result = EndpointFetchParamObject<typeof wildcardEndpoint, typeof HttpMethod.Get>;

        assert.tsType<Result['pathParams']>().equals<
            Readonly<{
                wildcard: string;
            }>
        >();
    });

    it('requires requiredHeaders when endpoint defines them', () => {
        type Result = EndpointFetchParamObject<
            typeof singleRequiredHeaderEndpoint,
            typeof HttpMethod.Get
        >;

        assert.tsType<Result>().matches<{
            requiredHeaders?: {
                authorization?: string;
            };
        }>();
    });

    it('makes requiredHeaders optional when not defined on endpoint', () => {
        type Result = EndpointFetchParamObject<typeof publicEndpoint, typeof HttpMethod.Get>;

        assert.tsType<Result>().matches<{
            requiredHeaders?: undefined;
        }>();
    });
});

describe('ClientFetch', () => {
    it('accepts a function with (url, requestInit, endpoint) returning a Response', () => {
        const fetcher: ClientFetch = (url, requestInit, endpoint) => {
            assert.tsType<typeof url>().equals<string>();
            assert.tsType<typeof requestInit>().equals<RequestInit>();
            assert.tsType<typeof endpoint.path>().matches<string>();
            return createMockResponse();
        };
        assert.isFunction(fetcher);
    });

    it('accepts an async function returning a Response', () => {
        const fetcher: ClientFetch = async () => {
            return Promise.resolve(createMockResponse());
        };
        assert.isFunction(fetcher);
    });
    it('accepts a sync function', () => {
        const fetcher: ClientFetch = () => {
            return createMockResponse();
        };
        assert.isFunction(fetcher);
    });
});

describe('EndpointParams', () => {
    it('is an optional tuple when no required keys exist', () => {
        type Result = EndpointFetchParams<typeof simpleEndpoint, typeof HttpMethod.Get>;

        /**
         * When all properties are optional, the tuple itself should be optional (zero args
         * allowed).
         */
        assert.tsType<Result>().matches<[unknown?]>();
    });

    it('is a required tuple when requestData is required', () => {
        type Result = EndpointFetchParams<typeof withBodyEndpoint, typeof HttpMethod.Post>;

        /** When requestData is required, the params object must be provided. */
        assert.tsType<Result>().matches<[unknown]>();
    });

    it('is a required tuple when pathParams are required', () => {
        type Result = EndpointFetchParams<typeof userByIdEndpoint, typeof HttpMethod.Get>;

        /** When path has named params, the params object must be provided. */
        assert.tsType<Result>().matches<[unknown]>();
    });

    it('is a required tuple when wildcard is required', () => {
        type Result = EndpointFetchParams<typeof wildcardEndpoint, typeof HttpMethod.Get>;

        /** When path has a wildcard, the params object must be provided. */
        assert.tsType<Result>().matches<[unknown]>();
    });

    it('is an optional tuple when only optional features are used', () => {
        type Result = EndpointFetchParams<typeof noBodyEndpoint, typeof HttpMethod.Post>;

        assert.tsType<Result>().matches<[unknown?]>();
    });
});

const multipleRequiredHeadersEndpoint = defineEndpoint({
    path: '/custom',
    requests: {
        [HttpMethod.Get]: {
            requiredRequestHeaders: {
                authorization: defineShape(''),
                'x-api-key': defineShape(''),
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape(''),
                },
            },
        },
    },
});

const wildcardEndpoint = defineEndpoint({
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

const namedParamsAndWildcardEndpoint = defineEndpoint({
    path: '/files/:category/*',
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

const withBodyEndpoint = defineEndpoint({
    path: '/with-body',
    requests: {
        [HttpMethod.Post]: {
            requestData: defineShape({
                name: '',
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape(''),
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
                    responseData: defineShape(''),
                },
            },
        },
    },
});

const withSearchEndpoint = defineEndpoint({
    path: '/with-search',
    requests: {
        [HttpMethod.Get]: {
            searchParams: {
                query: defineShape(''),
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
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
                    responseData: defineShape(''),
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
                    responseData: defineShape(''),
                },
            },
        },
    },
});

const simpleEndpoint = defineEndpoint({
    path: '/simple',
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

const singleRequiredHeaderEndpoint = defineEndpoint({
    path: '/protected',
    requests: {
        [HttpMethod.Get]: {
            requiredRequestHeaders: {
                authorization: defineShape(''),
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape(''),
                },
            },
        },
    },
});

const publicEndpoint = defineEndpoint({
    path: '/public',
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
