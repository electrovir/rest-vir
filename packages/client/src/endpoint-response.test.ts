import {assert} from '@augment-vir/assert';
import {HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {type mockApi} from '@rest-vir/api/src/api.mock.js';
import {type largeApi} from '@rest-vir/api/src/large-api.mock.js';
import {type defineShape} from 'object-shape-tester';
import type {EndpointFetchOutput, ResolveShapeType} from './endpoint-response.js';

type MockEndpoints = (typeof mockApi)['endpoints'];
type LargeEndpoints = (typeof largeApi)['endpoints'];

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
        const result = {} as EndpointFetchOutput<MockEndpoints['/users']['GET']>;

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
        const result = {} as EndpointFetchOutput<MockEndpoints['/users/create']['POST']>;

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
        const result = {} as EndpointFetchOutput<MockEndpoints['/items/:id']['GET']>;

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
        const result = {} as EndpointFetchOutput<MockEndpoints['/partner-api']['POST']>;

        assert.tsType(result.other).matches<{
            status: HttpStatus;
            data: unknown;
            headers: Record<string, string>;
        }>();
    });

    it('includes headers as Record<string, string> for endpoint without response headers', () => {
        const result = {} as EndpointFetchOutput<MockEndpoints['/protected']['GET']>;

        if (result[HttpStatus.Ok]) {
            assert.tsType(result[HttpStatus.Ok].headers).matches<Record<string, string>>();
        }
    });

    it('handles DELETE endpoint with NoContent response', () => {
        const result = {} as EndpointFetchOutput<MockEndpoints['/items/:id']['DELETE']>;

        if (result[HttpStatus.NoContent]) {
            assert.tsType(result[HttpStatus.NoContent]).matches<{
                status: HttpStatus.NoContent;
                data: undefined;
                headers: Record<string, string>;
            }>();
        }
    });

    it('handles large api endpoint with complex nested response', () => {
        const result = {} as EndpointFetchOutput<LargeEndpoints['/auth/login']['POST']>;

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

    it('handles large api paginated endpoint', () => {
        const result = {} as EndpointFetchOutput<LargeEndpoints['/projects/list']['POST']>;

        if (result[HttpStatus.Ok]) {
            const data = result[HttpStatus.Ok].data;

            assert.tsType(data.pageIndex).equals<number>();
            assert.tsType(data.pageCount).equals<number>();
            assert.tsType(data.totalCount).equals<number>();
            assert.tsType(data.items).matches<unknown[]>();
        }
    });

    it('handles PUT endpoint with Ok response', () => {
        const result = {} as EndpointFetchOutput<MockEndpoints['/items/:id']['PUT']>;

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
        const result = {} as EndpointFetchOutput<MockEndpoints['/download']['GET']>;

        if (result[HttpStatus.Ok]) {
            assert.tsType(result[HttpStatus.Ok].data).equals<string>();
        }
    });

    it('has correct keys for single-response endpoint', () => {
        type Result = EndpointFetchOutput<MockEndpoints['/users']['GET']>;

        assert.tsType<keyof Result>().matches<'other' | HttpStatus.Ok>();
    });

    it('has correct keys for multi-response endpoint', () => {
        type Result = EndpointFetchOutput<MockEndpoints['/users/create']['POST']>;

        assert
            .tsType<keyof Result>()
            .matches<'other' | HttpStatus.Created | HttpStatus.BadRequest>();
    });

    it('has correct keys for endpoint with no responses', () => {
        type Result = EndpointFetchOutput<MockEndpoints['/partner-api']['POST']>;

        assert.tsType<keyof Result>().matches<'other'>();
    });
});
