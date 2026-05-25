import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it, itCases} from '@augment-vir/test';
import {
    type downloadEndpoint,
    type itemByIdEndpoint,
    type partnerApiEndpoint,
    type protectedEndpoint,
    type usersCreateEndpoint,
    type usersEndpoint,
} from '@rest-vir/api/src/api/api.mock.js';
import {defineShape} from 'object-shape-tester';
import {
    defineEndpoint,
    type DefaultErrorResponseType,
    type DefaultResponseHeadersType,
} from '../api/endpoint.js';
import type {
    DefinedEndpointFetchOutputs,
    DefinedEndpointFetchStreamOutputs,
    EndpointFetchOutput,
    EndpointFetchStreamOutput,
    ResolveShapeType,
    UnknownFetchOutput,
} from './endpoint-response.js';
import {httpStatusToKey, readResponseHeaders} from './endpoint-response.js';

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

const errorOnlyEndpoint = defineEndpoint({
    path: '/error-only',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.BadRequest]: {
                    responseData: defineShape({
                        message: '',
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
        const result = {} as EndpointFetchOutput<typeof usersEndpoint, typeof HttpMethod.Get>;

        if (result.Ok) {
            assert.tsType(result.Ok).matches<{
                responseData: {
                    users: {id: string; name: string}[];
                };
                headers: Record<string, string>;
                response: Response;
            }>();
        }
    });

    it('handles POST endpoint with multiple response statuses', () => {
        const result = {} as EndpointFetchOutput<
            typeof usersCreateEndpoint,
            typeof HttpMethod.Post
        >;

        if (result.Created) {
            assert.tsType(result.Created).matches<{
                responseData: {id: string};
                headers: Record<string, string>;
                response: Response;
            }>();
        } else if (result.BadRequest) {
            assert
                .tsType(result.BadRequest.responseData)
                .equals<{error: string} | string | undefined>();
        }
    });

    it('handles GET endpoint with Ok and NotFound responses', () => {
        const result = {} as EndpointFetchOutput<typeof itemByIdEndpoint, typeof HttpMethod.Get>;

        if (result.Ok) {
            assert.tsType(result.Ok).matches<{
                responseData: {id: string; title: string; count: number};
                headers: Record<string, string>;
                response: Response;
            }>();
        } else if (result.NotFound) {
            assert.tsType(result.NotFound.responseData).equals<string | undefined>();
        }
    });

    it('handles endpoint with empty responses', () => {
        const result = {} as EndpointFetchOutput<typeof partnerApiEndpoint, typeof HttpMethod.Post>;

        if (result.unexpectedError) {
            assert.tsType(result.unexpectedError).matches<{
                responseData: unknown;
                headers: Record<string, string>;
                response: Response;
            }>();
        }
    });

    it('includes headers as Record<string, string> for endpoint without response headers', () => {
        const result = {} as EndpointFetchOutput<typeof protectedEndpoint, typeof HttpMethod.Get>;

        if (result.Ok) {
            assert.tsType(result.Ok.headers).matches<DefaultResponseHeadersType>();
        }
    });

    it('handles DELETE endpoint with NoContent response', () => {
        const result = {} as EndpointFetchOutput<typeof itemByIdEndpoint, typeof HttpMethod.Delete>;

        if (result.NoContent) {
            assert.tsType(result.NoContent).matches<{
                responseData: undefined;
                headers: Record<string, string>;
                response: Response;
            }>();
        }
    });

    it('handles endpoint with complex nested response', () => {
        const result = {} as EndpointFetchOutput<typeof authLoginEndpoint, typeof HttpMethod.Post>;

        if (result.Ok) {
            const data = result.Ok.responseData;

            assert.tsType(data.user.id).equals<string>();
            assert.tsType(data.user.emailAddress).equals<string>();
            assert.tsType(data.user.displayName).equals<string>();
            assert.tsType(data.token).equals<string>();
            assert.tsType(data.refreshToken).equals<string>();
            assert.tsType(data.expiresAt).equals<string>();
        } else if (result.Unauthorized) {
            assert
                .tsType(result.Unauthorized.responseData)
                .equals<{error: string; remainingAttempts: number} | string | undefined>();
        }
    });

    it('handles paginated endpoint', () => {
        const result = {} as EndpointFetchOutput<
            typeof projectsListEndpoint,
            typeof HttpMethod.Post
        >;

        if (result.Ok) {
            const data = result.Ok.responseData;

            assert.tsType(data.pageIndex).equals<number>();
            assert.tsType(data.pageCount).equals<number>();
            assert.tsType(data.totalCount).equals<number>();
            assert.tsType(data.items).matches<{id: string; name: string}[]>();
        }
    });

    it('handles PUT endpoint with Ok response', () => {
        const result = {} as EndpointFetchOutput<typeof itemByIdEndpoint, typeof HttpMethod.Put>;

        if (result.Ok) {
            assert.tsType(result.Ok).matches<{
                responseData: {id: string; title: string; count: number};
                headers: Record<string, string>;
                response: Response;
            }>();
        }
    });

    it('handles download endpoint with string response data', () => {
        const result = {} as EndpointFetchOutput<typeof downloadEndpoint, typeof HttpMethod.Get>;

        if (result.Ok) {
            assert.tsType(result.Ok.responseData).equals<string>();
        }
    });

    it('always allows string or undefined for a defined error response status', () => {
        type CreateResult = EndpointFetchOutput<typeof usersCreateEndpoint, typeof HttpMethod.Post>;

        /** Defined error response data must include `string | undefined` in addition to its shape. */
        assert
            .tsType<NonNullable<CreateResult['BadRequest']>['responseData']>()
            .equals<{error: string} | string | undefined>();

        type AuthResult = EndpointFetchOutput<typeof authLoginEndpoint, typeof HttpMethod.Post>;

        assert
            .tsType<NonNullable<AuthResult['Unauthorized']>['responseData']>()
            .equals<{error: string; remainingAttempts: number} | string | undefined>();

        type ItemResult = EndpointFetchOutput<typeof itemByIdEndpoint, typeof HttpMethod.Get>;

        /**
         * A defined error response with `responseData: undefined` collapses to `string |
         * undefined`.
         */
        assert
            .tsType<NonNullable<ItemResult['NotFound']>['responseData']>()
            .equals<string | undefined>();

        type ErrorOnlyResult = EndpointFetchOutput<typeof errorOnlyEndpoint, typeof HttpMethod.Get>;

        assert
            .tsType<NonNullable<ErrorOnlyResult['BadRequest']>['responseData']>()
            .equals<{message: string} | string | undefined>();
    });

    it('does not widen success response data with string or undefined', () => {
        type Result = EndpointFetchOutput<typeof usersCreateEndpoint, typeof HttpMethod.Post>;

        assert.tsType<NonNullable<Result['Created']>['responseData']>().equals<{id: string}>();
    });

    it('exposes undefined error statuses with unknown response data', () => {
        type Result = EndpointFetchOutput<typeof usersEndpoint, typeof HttpMethod.Get>;

        assert
            .tsType<NonNullable<Result['unexpectedError']>['responseData']>()
            .equals<DefaultErrorResponseType>();
        assert
            .tsType<NonNullable<Result['unexpectedError']>['responseData']>()
            .equals<DefaultErrorResponseType>();
    });
});

describe('UnknownFetchOutput', () => {
    it('has the four error-shape keys', () => {
        const sample: UnknownFetchOutput = {
            status: HttpStatus.InternalServerError,
            responseData: 'boom',
            headers: {
                'content-type': 'text/plain',
            },
            response: new Response(),
        };
        assert.strictEquals(sample.status, HttpStatus.InternalServerError);
    });

    it('allows responseData to be string or undefined', () => {
        assert.tsType<UnknownFetchOutput['responseData']>().equals<DefaultErrorResponseType>();
    });

    it('uses DefaultResponseHeadersType for its headers', () => {
        assert.tsType<UnknownFetchOutput['headers']>().equals<DefaultResponseHeadersType>();
    });
});

describe('DefinedEndpointFetchOutputs', () => {
    it('produces a record keyed by HttpStatus name', () => {
        type Result = DefinedEndpointFetchOutputs<
            typeof usersCreateEndpoint,
            typeof HttpMethod.Post
        >;

        assert.tsType<keyof Result>().equals<'Created' | 'BadRequest'>();
    });

    it('returns an empty object for an endpoint with no matching method', () => {
        type Result = DefinedEndpointFetchOutputs<
            typeof usersCreateEndpoint,
            typeof HttpMethod.Get
        >;

        // eslint-disable-next-line @typescript-eslint/no-empty-object-type
        assert.tsType<Result>().equals<{}>();
    });
});

describe('DefinedEndpointFetchStreamOutputs', () => {
    it('replaces responseData with a ReadableStream<Uint8Array>', () => {
        type Result = DefinedEndpointFetchStreamOutputs<
            typeof usersEndpoint,
            typeof HttpMethod.Get
        >;

        assert
            .tsType<NonNullable<Result['Ok']>['responseData']>()
            .equals<ReadableStream<Uint8Array>>();
    });

    it('preserves the error fallback for error statuses', () => {
        type Result = DefinedEndpointFetchStreamOutputs<
            typeof usersCreateEndpoint,
            typeof HttpMethod.Post
        >;

        assert
            .tsType<NonNullable<Result['BadRequest']>['responseData']>()
            .equals<ReadableStream<Uint8Array> | string | undefined>();
    });
});

describe('EndpointFetchStreamOutput', () => {
    it('exactly-one-of unions ReadableStream success cases with unexpectedError', () => {
        const result = {} as EndpointFetchStreamOutput<typeof usersEndpoint, typeof HttpMethod.Get>;

        if (result.Ok) {
            assert.tsType<typeof result.Ok.responseData>().equals<ReadableStream<Uint8Array>>();
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        } else if (result.unexpectedError) {
            assert
                .tsType<typeof result.unexpectedError.responseData>()
                .equals<DefaultErrorResponseType>();
        }
    });
});

describe('httpStatusToKey', () => {
    it('maps numeric HttpStatus values back to their enum key names', () => {
        assert.strictEquals(httpStatusToKey[HttpStatus.Ok], 'Ok');
        assert.strictEquals(httpStatusToKey[HttpStatus.Created], 'Created');
        assert.strictEquals(httpStatusToKey[HttpStatus.BadRequest], 'BadRequest');
        assert.strictEquals(httpStatusToKey[HttpStatus.InternalServerError], 'InternalServerError');
    });

    it('has a mapping for every HttpStatus value', () => {
        Object.values(HttpStatus).forEach((status) => {
            if (typeof status === 'number') {
                assert.isDefined(httpStatusToKey[status]);
            }
        });
    });
});

describe(readResponseHeaders.name, () => {
    it('reads headers from a Response object', () => {
        const response = new Response(null, {
            headers: {
                'x-source': 'response',
            },
        });

        const result = readResponseHeaders(response.headers);

        assert.strictEquals(result['x-source'], 'response');
    });

    it('returns a Record<string, string>', () => {
        const result = readResponseHeaders(new Headers());

        assert.tsType(result).matches<Record<string, string>>();
    });

    itCases(readResponseHeaders, [
        {
            it: 'returns an empty object for an empty Headers instance',
            input: new Headers(),
            expect: {},
        },
        {
            it: 'reads a single header into a key-value pair',
            input: new Headers({
                'content-type': 'application/json',
            }),
            expect: {
                'content-type': 'application/json',
            },
        },
        {
            it: 'reads multiple headers',
            input: new Headers({
                'content-type': 'application/json',
                'x-request-id': 'abc-123',
                authorization: 'Bearer token',
            }),
            expect: {
                'content-type': 'application/json',
                'x-request-id': 'abc-123',
                authorization: 'Bearer token',
            },
        },
        {
            it: 'lowercases header keys (Headers normalizes them)',
            input: new Headers({
                'X-Custom-Header': 'value',
            }),
            expect: {
                'x-custom-header': 'value',
            },
        },
        {
            it: 'reads headers built from a tuple-array initializer',
            input: new Headers([
                [
                    'a',
                    'one',
                ],
                [
                    'b',
                    'two',
                ],
            ]),
            expect: {
                a: 'one',
                b: 'two',
            },
        },
        {
            it: 'reads headers built from another Headers instance',
            input: new Headers(
                new Headers({
                    foo: 'bar',
                }),
            ),
            expect: {
                foo: 'bar',
            },
        },
        {
            it: 'combines duplicate header values into a single comma-separated string',
            input: new Headers([
                [
                    'x-multi',
                    'first',
                ],
                [
                    'x-multi',
                    'second',
                ],
            ]),
            expect: {
                'x-multi': 'first, second',
            },
        },
    ]);
});
