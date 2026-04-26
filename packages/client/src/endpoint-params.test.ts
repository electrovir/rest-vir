import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {type BaseSearchParams, defineEndpoint} from '@rest-vir/api';
import {
    adminSettingsEndpoint,
    downloadEndpoint,
    fullRouteEndpoint,
    itemByIdEndpoint,
    partnerApiEndpoint,
    pingEndpoint,
    protectedEndpoint,
    searchEndpoint,
    usersCreateEndpoint,
} from '@rest-vir/api/src/api.mock.js';
import {defineShape} from 'object-shape-tester';
import type {EndpointParamObject, EndpointParams} from './endpoint-params.js';
import {type GenericPathParams} from './path-params.js';

describe('EndpointParamObject', () => {
    it('has default values', () => {
        type Generic = EndpointParamObject;

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
        const fromNoRequestData: EndpointParamObject = {} as any as EndpointParamObject<
            typeof pingEndpoint,
            HttpMethod.Post
        >;
        const fromWithRequestData: EndpointParamObject = {} as any as EndpointParamObject<
            typeof usersCreateEndpoint,
            HttpMethod.Post
        >;
        const fromWithSearchParams: EndpointParamObject = {} as any as EndpointParamObject<
            typeof searchEndpoint,
            HttpMethod.Get
        >;
        const fromWithPathParams: EndpointParamObject = {} as any as EndpointParamObject<
            typeof itemByIdEndpoint,
            HttpMethod.Get
        >;
        const fromWithRequiredHeaders: EndpointParamObject = {} as any as EndpointParamObject<
            typeof protectedEndpoint,
            HttpMethod.Get
        >;
        const fromWithCustomProps: EndpointParamObject = {} as any as EndpointParamObject<
            typeof adminSettingsEndpoint,
            HttpMethod.Get
        >;
        const fromWithResponseHeaders: EndpointParamObject = {} as any as EndpointParamObject<
            typeof downloadEndpoint,
            HttpMethod.Get
        >;
        const fromWithAllCommonRouteFields: EndpointParamObject = {} as any as EndpointParamObject<
            typeof fullRouteEndpoint,
            HttpMethod.Post
        >;
        const fromWithRegexClientOrigin: EndpointParamObject = {} as any as EndpointParamObject<
            typeof partnerApiEndpoint,
            HttpMethod.Post
        >;
        const fromMultipleRequiredHeaders: EndpointParamObject = {} as any as EndpointParamObject<
            typeof multipleRequiredHeadersEndpoint,
            HttpMethod.Get
        >;
        const fromWildcardPath: EndpointParamObject = {} as any as EndpointParamObject<
            typeof wildcardEndpoint,
            HttpMethod.Get
        >;
        const fromNamedParamsAndWildcard: EndpointParamObject = {} as any as EndpointParamObject<
            typeof namedParamsAndWildcardEndpoint,
            HttpMethod.Get
        >;
    });

    it('makes all properties optional for an endpoint with no request data or search params', () => {
        type Result = EndpointParamObject<typeof pingEndpoint, HttpMethod.Post>;

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
        type Result = EndpointParamObject<typeof withBodyEndpoint, HttpMethod.Post>;

        assert.tsType<Result['requestData']>().equals<{name: string}>();
    });

    it('makes requestData optional when endpoint has undefined requestData', () => {
        type Result = EndpointParamObject<typeof noBodyEndpoint, HttpMethod.Post>;

        assert.tsType<Result>().matches<{
            requestData?: undefined;
        }>();
    });

    it('requires searchParams when endpoint defines search param shapes', () => {
        type Result = EndpointParamObject<typeof withSearchEndpoint, HttpMethod.Get>;

        type SearchType = Result['searchParams'];

        /** The search params should include a query key with a string value. */
        assert.tsType<SearchType>().matches<{
            query?: string;
        }>();
    });

    it('requires pathParams for endpoints with named path parameters', () => {
        type Result = EndpointParamObject<typeof userByIdEndpoint, HttpMethod.Get>;

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
        type Result = EndpointParamObject<typeof userPostEndpoint, HttpMethod.Get>;

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
        type Result = EndpointParamObject<typeof simpleEndpoint, HttpMethod.Get>;

        assert.tsType<Result>().matches<{
            pathParams?: undefined;
        }>();
    });

    it('requires wildcard in pathParams for wildcard endpoints', () => {
        type Result = EndpointParamObject<typeof wildcardEndpoint, HttpMethod.Get>;

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
        type Result = EndpointParamObject<typeof singleRequiredHeaderEndpoint, HttpMethod.Get>;

        assert.tsType<Result>().matches<{
            requiredHeaders?: {
                authorization?: string;
            };
        }>();
    });

    it('makes requiredHeaders optional when not defined on endpoint', () => {
        type Result = EndpointParamObject<typeof publicEndpoint, HttpMethod.Get>;

        assert.tsType<Result>().matches<{
            requiredHeaders?: undefined;
        }>();
    });
});

describe('EndpointParams', () => {
    it('is an optional tuple when no required keys exist', () => {
        type Result = EndpointParams<typeof simpleEndpoint, HttpMethod.Get>;

        /**
         * When all properties are optional, the tuple itself should be optional (zero args
         * allowed).
         */
        assert.tsType<Result>().matches<[unknown?]>();
    });

    it('is a required tuple when requestData is required', () => {
        type Result = EndpointParams<typeof withBodyEndpoint, HttpMethod.Post>;

        /** When requestData is required, the params object must be provided. */
        assert.tsType<Result>().matches<[unknown]>();
    });

    it('is a required tuple when pathParams are required', () => {
        type Result = EndpointParams<typeof userByIdEndpoint, HttpMethod.Get>;

        /** When path has named params, the params object must be provided. */
        assert.tsType<Result>().matches<[unknown]>();
    });

    it('is a required tuple when wildcard is required', () => {
        type Result = EndpointParams<typeof wildcardEndpoint, HttpMethod.Get>;

        /** When path has a wildcard, the params object must be provided. */
        assert.tsType<Result>().matches<[unknown]>();
    });

    it('is an optional tuple when only optional features are used', () => {
        type Result = EndpointParams<typeof noBodyEndpoint, HttpMethod.Post>;

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
            responses: {},
        },
    },
});

const wildcardEndpoint = defineEndpoint({
    path: '/files/*',
    requests: {
        [HttpMethod.Get]: {
            responses: {},
        },
    },
});

const namedParamsAndWildcardEndpoint = defineEndpoint({
    path: '/files/:category/*',
    requests: {
        [HttpMethod.Get]: {
            responses: {},
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
            responses: {},
        },
    },
});

const noBodyEndpoint = defineEndpoint({
    path: '/no-body',
    requests: {
        [HttpMethod.Post]: {
            requestData: undefined,
            responses: {},
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
            responses: {},
        },
    },
});

const userPostEndpoint = defineEndpoint({
    path: '/users/:userId/posts/:postId',
    requests: {
        [HttpMethod.Get]: {
            responses: {},
        },
    },
});

const simpleEndpoint = defineEndpoint({
    path: '/simple',
    requests: {
        [HttpMethod.Get]: {
            responses: {},
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
            responses: {},
        },
    },
});

const publicEndpoint = defineEndpoint({
    path: '/public',
    requests: {
        [HttpMethod.Get]: {
            responses: {},
        },
    },
});
