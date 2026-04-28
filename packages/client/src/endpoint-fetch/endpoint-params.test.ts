import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {type BaseSearchParams, defineEndpoint} from '@rest-vir/api';
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
import {type GenericPathParams} from '../path-params.js';
import type {EndpointFetchParamObject, EndpointFetchParams} from './endpoint-params.js';

describe('EndpointParamObject', () => {
    it('has default values', () => {
        type Generic = EndpointFetchParamObject;

        assert.tsType<Generic>().equals<{
            requestData?: any;
            searchParams?: BaseSearchParams | undefined;
            options?: Omit<RequestInit, 'body' | 'method'> | undefined;
            fetchOverride?: typeof fetch | undefined;
            skipAutomaticContentTypeHeader?: boolean | undefined;
            requiredHeaders?: Record<string, string> | undefined;
            pathParams?: GenericPathParams;
        }>();
    });

    it('can be assigned to from specific implementations', () => {
        const fromNoRequestData: EndpointFetchParamObject = {} as any as EndpointFetchParamObject<
            typeof pingEndpoint,
            HttpMethod.Post
        >;
        const fromWithRequestData: EndpointFetchParamObject = {} as any as EndpointFetchParamObject<
            typeof usersCreateEndpoint,
            HttpMethod.Post
        >;
        const fromWithSearchParams: EndpointFetchParamObject =
            {} as any as EndpointFetchParamObject<typeof searchEndpoint, HttpMethod.Get>;
        const fromWithPathParams: EndpointFetchParamObject = {} as any as EndpointFetchParamObject<
            typeof itemByIdEndpoint,
            HttpMethod.Get
        >;
        const fromWithRequiredHeaders: EndpointFetchParamObject =
            {} as any as EndpointFetchParamObject<typeof protectedEndpoint, HttpMethod.Get>;
        const fromWithCustomProps: EndpointFetchParamObject = {} as any as EndpointFetchParamObject<
            typeof adminSettingsEndpoint,
            HttpMethod.Get
        >;
        const fromWithResponseHeaders: EndpointFetchParamObject =
            {} as any as EndpointFetchParamObject<typeof downloadEndpoint, HttpMethod.Get>;
        const fromWithAllCommonRouteFields: EndpointFetchParamObject =
            {} as any as EndpointFetchParamObject<typeof fullRouteEndpoint, HttpMethod.Post>;
        const fromWithRegexClientOrigin: EndpointFetchParamObject =
            {} as any as EndpointFetchParamObject<typeof partnerApiEndpoint, HttpMethod.Post>;
        const fromMultipleRequiredHeaders: EndpointFetchParamObject =
            {} as any as EndpointFetchParamObject<
                typeof multipleRequiredHeadersEndpoint,
                HttpMethod.Get
            >;
        const fromWildcardPath: EndpointFetchParamObject = {} as any as EndpointFetchParamObject<
            typeof wildcardEndpoint,
            HttpMethod.Get
        >;
        const fromNamedParamsAndWildcard: EndpointFetchParamObject =
            {} as any as EndpointFetchParamObject<
                typeof namedParamsAndWildcardEndpoint,
                HttpMethod.Get
            >;
    });

    it('makes all properties optional for an endpoint with no request data or search params', () => {
        type Result = EndpointFetchParamObject<typeof pingEndpoint, HttpMethod.Post>;

        assert.tsType<Result>().matches<{
            requestData?: undefined;
            searchParams?: BaseSearchParams | undefined;
            options?: Omit<RequestInit, 'body' | 'method'> | undefined;
            fetchOverride?: typeof fetch | undefined;
            skipAutomaticContentTypeHeader?: boolean | undefined;
            requiredHeaders?: undefined;
            pathParams?: undefined;
        }>();
    });

    it('requires requestData when endpoint defines a request shape', () => {
        type Result = EndpointFetchParamObject<typeof withBodyEndpoint, HttpMethod.Post>;

        assert.tsType<Result['requestData']>().equals<{name: string}>();
    });

    it('makes requestData optional when endpoint has undefined requestData', () => {
        type Result = EndpointFetchParamObject<typeof noBodyEndpoint, HttpMethod.Post>;

        assert.tsType<Result>().matches<{
            requestData?: undefined;
        }>();
    });

    it('requires searchParams when endpoint defines search param shapes', () => {
        type Result = EndpointFetchParamObject<typeof withSearchEndpoint, HttpMethod.Get>;

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
        type Result = EndpointFetchParamObject<typeof userByIdEndpoint, HttpMethod.Get>;

        assert.tsType<Result['pathParams']>().equals<
            Readonly<{
                wildcard?: undefined;
            }> &
                Readonly<{
                    pathParams: Readonly<Record<'userId', string>>;
                }>
        >();
    });

    it('requires pathParams with multiple named parameters', () => {
        type Result = EndpointFetchParamObject<typeof userPostEndpoint, HttpMethod.Get>;

        assert.tsType<Result['pathParams']>().equals<
            Readonly<{
                wildcard?: undefined;
            }> &
                Readonly<{
                    pathParams: Readonly<Record<'userId' | 'postId', string>>;
                }>
        >();
    });

    it('makes pathParams optional for endpoints with no path parameters', () => {
        type Result = EndpointFetchParamObject<typeof simpleEndpoint, HttpMethod.Get>;

        assert.tsType<Result>().matches<{
            pathParams?: undefined;
        }>();
    });

    it('requires wildcard in pathParams for wildcard endpoints', () => {
        type Result = EndpointFetchParamObject<typeof wildcardEndpoint, HttpMethod.Get>;

        assert.tsType<Result['pathParams']>().equals<
            Readonly<{
                wildcard: string;
            }> &
                Readonly<{
                    pathParams?: undefined;
                }>
        >();
    });

    it('requires requiredHeaders when endpoint defines them', () => {
        type Result = EndpointFetchParamObject<typeof singleRequiredHeaderEndpoint, HttpMethod.Get>;

        assert.tsType<Result>().matches<{
            requiredHeaders?: {
                authorization?: string;
            };
        }>();
    });

    it('makes requiredHeaders optional when not defined on endpoint', () => {
        type Result = EndpointFetchParamObject<typeof publicEndpoint, HttpMethod.Get>;

        assert.tsType<Result>().matches<{
            requiredHeaders?: undefined;
        }>();
    });
});

describe('EndpointParams', () => {
    it('is an optional tuple when no required keys exist', () => {
        type Result = EndpointFetchParams<typeof simpleEndpoint, HttpMethod.Get>;

        /**
         * When all properties are optional, the tuple itself should be optional (zero args
         * allowed).
         */
        assert.tsType<Result>().matches<[unknown?]>();
    });

    it('is a required tuple when requestData is required', () => {
        type Result = EndpointFetchParams<typeof withBodyEndpoint, HttpMethod.Post>;

        /** When requestData is required, the params object must be provided. */
        assert.tsType<Result>().matches<[unknown]>();
    });

    it('is a required tuple when pathParams are required', () => {
        type Result = EndpointFetchParams<typeof userByIdEndpoint, HttpMethod.Get>;

        /** When path has named params, the params object must be provided. */
        assert.tsType<Result>().matches<[unknown]>();
    });

    it('is a required tuple when wildcard is required', () => {
        type Result = EndpointFetchParams<typeof wildcardEndpoint, HttpMethod.Get>;

        /** When path has a wildcard, the params object must be provided. */
        assert.tsType<Result>().matches<[unknown]>();
    });

    it('is an optional tuple when only optional features are used', () => {
        type Result = EndpointFetchParams<typeof noBodyEndpoint, HttpMethod.Post>;

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
