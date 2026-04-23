import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {type BaseSearchParams} from '@rest-vir/api';
import {type mockApi} from '@rest-vir/api/src/api.mock.js';
import {type largeApi} from '@rest-vir/api/src/large-api.mock.js';
import {type defineShape} from 'object-shape-tester';
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
        const fromMinimalEndpoint: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof mockApi)['endpoints']['/empty']
        >;
        const fromNoRequestData: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof mockApi)['endpoints']['/ping']
        >;
        const fromWithRequestData: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof mockApi)['endpoints']['/users/create']
        >;
        const fromWithSearchParams: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof mockApi)['endpoints']['/search']
        >;
        const fromWithPathParams: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof mockApi)['endpoints']['/items/:id']
        >;
        const fromWithRequiredHeaders: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof mockApi)['endpoints']['/protected']
        >;
        const fromWithCustomProps: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof mockApi)['endpoints']['/admin/settings']
        >;
        const fromWithResponseHeaders: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof mockApi)['endpoints']['/download']
        >;
        const fromWithAllCommonRouteFields: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof mockApi)['endpoints']['/full-route']
        >;
        const fromWithRegexClientOrigin: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof mockApi)['endpoints']['/partner-api']
        >;
        const fromComplexNestedResponse: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof largeApi)['endpoints']['/auth/login']
        >;
        const fromNestedPathParams: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof largeApi)['endpoints']['/projects/:projectId']
        >;
        const fromDeepNestedPathParams: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof largeApi)['endpoints']['/projects/:projectId/comments/:commentId']
        >;
        const fromPaginatedRequest: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof largeApi)['endpoints']['/tickets/table']
        >;
        const fromRenderCardResponse: EndpointParamObject = {} as any as EndpointParamObject<
            (typeof largeApi)['endpoints']['/reports/generate']
        >;
        const fromMultipleRequiredHeaders: EndpointParamObject = {} as any as EndpointParamObject<{
            path: '/custom';
            requiredHeaders: {
                authorization: ReturnType<typeof defineShape<string>>;
                'x-api-key': ReturnType<typeof defineShape<string>>;
            };
        }>;
        const fromWildcardPath: EndpointParamObject = {} as any as EndpointParamObject<{
            path: '/files/*';
        }>;
        const fromNamedParamsAndWildcard: EndpointParamObject = {} as any as EndpointParamObject<{
            path: '/files/:category/*';
        }>;
    });

    it('makes all properties optional for an endpoint with no request data or search params', () => {
        type Result = EndpointParamObject<(typeof mockApi)['endpoints']['/ping']>;

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
        type Result = EndpointParamObject<{
            path: '/with-body';
            requestData: ReturnType<typeof defineShape<{name: string}>>;
        }>;

        assert.tsType<Result['requestData']>().equals<{name: string}>();
    });

    it('makes requestData optional when endpoint has undefined requestData', () => {
        type Result = EndpointParamObject<{
            path: '/no-body';
            requestData: undefined;
        }>;

        assert.tsType<Result>().matches<{
            requestData?: undefined;
        }>();
    });

    it('requires searchParams when endpoint defines search param shapes', () => {
        type Result = EndpointParamObject<{
            path: '/with-search';
            searchParams: {
                query: ReturnType<typeof defineShape<string>>;
            };
        }>;

        type SearchType = Result['searchParams'];

        /** The search params should include a query key with a string value. */
        assert.tsType<SearchType>().matches<{
            query?: string;
        }>();
    });

    it('requires pathParams for endpoints with named path parameters', () => {
        type Result = EndpointParamObject<{
            path: '/users/:userId';
        }>;

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
        type Result = EndpointParamObject<{
            path: '/users/:userId/posts/:postId';
        }>;

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
        type Result = EndpointParamObject<{
            path: '/simple';
        }>;

        assert.tsType<Result>().matches<{
            pathParams?: undefined;
        }>();
    });

    it('requires wildcard in pathParams for wildcard endpoints', () => {
        type Result = EndpointParamObject<{
            path: '/files/*';
        }>;

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
        type Result = EndpointParamObject<{
            path: '/protected';
            requiredHeaders: {
                authorization: ReturnType<typeof defineShape<string>>;
            };
        }>;

        assert.tsType<Result>().matches<{
            requiredHeaders?: {
                authorization?: string;
            };
        }>();
    });

    it('makes requiredHeaders optional when not defined on endpoint', () => {
        type Result = EndpointParamObject<{
            path: '/public';
        }>;

        assert.tsType<Result>().matches<{
            requiredHeaders?: undefined;
        }>();
    });
});

describe('EndpointParams', () => {
    it('is an optional tuple when no required keys exist', () => {
        type Result = EndpointParams<{
            path: '/simple';
        }>;

        /**
         * When all properties are optional, the tuple itself should be optional (zero args
         * allowed).
         */
        assert.tsType<Result>().matches<[unknown?]>();
    });

    it('is a required tuple when requestData is required', () => {
        type Result = EndpointParams<{
            path: '/with-body';
            requestData: ReturnType<typeof defineShape<{name: string}>>;
        }>;

        /** When requestData is required, the params object must be provided. */
        assert.tsType<Result>().matches<[unknown]>();
    });

    it('is a required tuple when pathParams are required', () => {
        type Result = EndpointParams<{
            path: '/users/:userId';
        }>;

        /** When path has named params, the params object must be provided. */
        assert.tsType<Result>().matches<[unknown]>();
    });

    it('is a required tuple when wildcard is required', () => {
        type Result = EndpointParams<{
            path: '/files/*';
        }>;

        /** When path has a wildcard, the params object must be provided. */
        assert.tsType<Result>().matches<[unknown]>();
    });

    it('is an optional tuple when only optional features are used', () => {
        type Result = EndpointParams<{
            path: '/no-required';
            requestData: undefined;
        }>;

        assert.tsType<Result>().matches<[unknown?]>();
    });
});
