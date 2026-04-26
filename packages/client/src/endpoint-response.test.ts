import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineEndpoint} from '@rest-vir/api';
import {
    downloadEndpoint,
    itemByIdEndpoint,
    partnerApiEndpoint,
    protectedEndpoint,
    usersCreateEndpoint,
    usersEndpoint,
} from '@rest-vir/api/src/api.mock.js';
import {defineShape} from 'object-shape-tester';
import type {EndpointFetchOutput, ResolveShapeType} from './endpoint-response.js';

const authLoginEndpoint = defineEndpoint({
    path: '/auth/login',
    requests: {
        [HttpMethod.Post]: {
            requestData: defineShape({
                email: '',
                password: '',
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        user: {
                            id: '',
                            emailAddress: '',
                            displayName: '',
                        },
                        token: '',
                        refreshToken: '',
                        expiresAt: '',
                    }),
                },
                [HttpStatus.Unauthorized]: {
                    responseData: defineShape({
                        error: '',
                        remainingAttempts: 0,
                    }),
                },
            },
        },
    },
});

const projectsListEndpoint = defineEndpoint({
    path: '/projects/list',
    requests: {
        [HttpMethod.Post]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        pageIndex: 0,
                        pageCount: 0,
                        totalCount: 0,
                        items: [
                            {
                                id: '',
                                name: '',
                            },
                        ],
                    }),
                },
            },
        },
    },
});

describe('ResolveShapeType', () => {
    it('resolves a string shape to string', () => {
        assert.tsType<ResolveShapeType<ReturnType<typeof defineShape<string>>>>().equals<string>();
    });

    it('resolves an object shape to its runtime type', () => {
        assert
            .tsType<ResolveShapeType<ReturnType<typeof defineShape<{id: string; count: number}>>>>()
            .equals<{id: string; count: number}>();
    });

    it('resolves undefined to undefined', () => {
        assert.tsType<ResolveShapeType<undefined>>().equals<undefined>();
    });
});

describe('EndpointFetchOutput', () => {
    it('handles single ok response status', () => {
        const result = {} as EndpointFetchOutput<
            (typeof usersEndpoint.requests)[HttpMethod.Get]
        >;

        if (result[HttpStatus.Ok]) {
            assert.tsType(result[HttpStatus.Ok]).matches<{
                status: HttpStatus.Ok;
                data: {
                    users: {id: string; name: string}[];
                };
                headers: Record<string, string>;
            }>();
        } else {
            assert.tsType(result.other).matches<{
                status: HttpStatus;
                data: unknown;
                headers: Record<string, string>;
            }>();
            assert.tsType(result[HttpStatus.Ok]).matches<undefined>();
        }
    });

    it('handles POST endpoint with multiple response statuses', () => {
        const result = {} as EndpointFetchOutput<
            (typeof usersCreateEndpoint.requests)[HttpMethod.Post]
        >;

        if (result[HttpStatus.Created]) {
            assert.tsType(result[HttpStatus.Created]).matches<{
                status: HttpStatus.Created;
                data: {id: string};
                headers: Record<string, string>;
            }>();
            assert.tsType(result[HttpStatus.BadRequest]).matches<undefined>();
            assert.tsType(result.other).matches<undefined>();
        } else if (result[HttpStatus.BadRequest]) {
            assert.tsType(result[HttpStatus.BadRequest]).matches<{
                status: HttpStatus.BadRequest;
                data: {error: string};
                headers: Record<string, string>;
            }>();
            assert.tsType(result[HttpStatus.Created]).matches<undefined>();
            assert.tsType(result.other).matches<undefined>();
        } else {
            assert.tsType(result.other).matches<{
                status: HttpStatus;
                data: unknown;
                headers: Record<string, string>;
            }>();
            assert.tsType(result[HttpStatus.Created]).matches<undefined>();
            assert.tsType(result[HttpStatus.BadRequest]).matches<undefined>();
        }
    });

    it('handles GET endpoint with Ok and NotFound responses', () => {
        const result = {} as EndpointFetchOutput<
            (typeof itemByIdEndpoint.requests)[HttpMethod.Get]
        >;

        if (result[HttpStatus.Ok]) {
            assert.tsType(result[HttpStatus.Ok]).matches<{
                status: HttpStatus.Ok;
                data: {id: string; title: string; count: number};
                headers: Record<string, string>;
            }>();
            assert.tsType(result[HttpStatus.NotFound]).matches<undefined>();
        } else if (result[HttpStatus.NotFound]) {
            assert.tsType(result[HttpStatus.NotFound]).matches<{
                status: HttpStatus.NotFound;
                data: undefined;
                headers: Record<string, string>;
            }>();
            assert.tsType(result[HttpStatus.Ok]).matches<undefined>();
        } else {
            assert.tsType(result.other).matches<{
                status: HttpStatus;
                data: unknown;
                headers: Record<string, string>;
            }>();
        }
    });

    it('handles endpoint with empty responses', () => {
        const result = {} as EndpointFetchOutput<
            (typeof partnerApiEndpoint.requests)[HttpMethod.Post]
        >;

        assert.tsType(result.other).matches<{
            status: HttpStatus;
            data: unknown;
            headers: Record<string, string>;
        }>();
    });

    it('includes headers as Record<string, string> for endpoint without response headers', () => {
        const result = {} as EndpointFetchOutput<
            (typeof protectedEndpoint.requests)[HttpMethod.Get]
        >;

        if (result[HttpStatus.Ok]) {
            assert.tsType(result[HttpStatus.Ok].headers).matches<Record<string, string>>();
        }
    });

    it('handles DELETE endpoint with NoContent response', () => {
        const result = {} as EndpointFetchOutput<
            (typeof itemByIdEndpoint.requests)[HttpMethod.Delete]
        >;

        if (result[HttpStatus.NoContent]) {
            assert.tsType(result[HttpStatus.NoContent]).matches<{
                status: HttpStatus.NoContent;
                data: undefined;
                headers: Record<string, string>;
            }>();
        }
    });

    it('handles endpoint with complex nested response', () => {
        const result = {} as EndpointFetchOutput<
            (typeof authLoginEndpoint.requests)[HttpMethod.Post]
        >;

        if (result[HttpStatus.Ok]) {
            const data = result[HttpStatus.Ok].data;

            assert.tsType(data.user.id).equals<string>();
            assert.tsType(data.user.emailAddress).equals<string>();
            assert.tsType(data.user.displayName).equals<string>();
            assert.tsType(data.token).equals<string>();
            assert.tsType(data.refreshToken).equals<string>();
            assert.tsType(data.expiresAt).equals<string>();
            assert.tsType(result[HttpStatus.Unauthorized]).matches<undefined>();
        } else if (result[HttpStatus.Unauthorized]) {
            const data = result[HttpStatus.Unauthorized].data;

            assert.tsType(data.error).equals<string>();
            assert.tsType(data.remainingAttempts).equals<number>();
            assert.tsType(result[HttpStatus.Ok]).matches<undefined>();
        }
    });

    it('handles paginated endpoint', () => {
        const result = {} as EndpointFetchOutput<
            (typeof projectsListEndpoint.requests)[HttpMethod.Post]
        >;

        if (result[HttpStatus.Ok]) {
            const data = result[HttpStatus.Ok].data;

            assert.tsType(data.pageIndex).equals<number>();
            assert.tsType(data.pageCount).equals<number>();
            assert.tsType(data.totalCount).equals<number>();
            assert.tsType(data.items).matches<{id: string; name: string}[]>();
        }
    });

    it('handles PUT endpoint with Ok response', () => {
        const result = {} as EndpointFetchOutput<
            (typeof itemByIdEndpoint.requests)[HttpMethod.Put]
        >;

        if (result[HttpStatus.Ok]) {
            assert.tsType(result[HttpStatus.Ok]).matches<{
                status: HttpStatus.Ok;
                data: {id: string; title: string; count: number};
                headers: Record<string, string>;
            }>();
        } else {
            assert.tsType(result.other).matches<{
                status: HttpStatus;
                data: unknown;
                headers: Record<string, string>;
            }>();
        }
    });

    it('handles download endpoint with string response data', () => {
        const result = {} as EndpointFetchOutput<
            (typeof downloadEndpoint.requests)[HttpMethod.Get]
        >;

        if (result[HttpStatus.Ok]) {
            assert.tsType(result[HttpStatus.Ok].data).equals<string>();
        }
    });

    it('has correct keys for single-response endpoint', () => {
        type Result = EndpointFetchOutput<(typeof usersEndpoint.requests)[HttpMethod.Get]>;

        assert.tsType<keyof Result>().matches<'other' | HttpStatus.Ok>();
    });

    it('has correct keys for multi-response endpoint', () => {
        type Result = EndpointFetchOutput<
            (typeof usersCreateEndpoint.requests)[HttpMethod.Post]
        >;

        assert
            .tsType<keyof Result>()
            .matches<'other' | HttpStatus.Created | HttpStatus.BadRequest>();
    });

    it('has correct keys for endpoint with no responses', () => {
        type Result = EndpointFetchOutput<
            (typeof partnerApiEndpoint.requests)[HttpMethod.Post]
        >;

        assert.tsType<keyof Result>().matches<'other'>();
    });
});
