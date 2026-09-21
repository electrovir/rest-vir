import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus, type RequireExactlyOne} from '@augment-vir/common';
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
import {defineApi} from '../api/api.js';
import {
    defineEndpoint,
    type DefaultErrorResponseType,
    type DefaultResponseHeadersType,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type EndpointResponseType,
} from '../api/endpoint.js';
import {RestVirClient} from '../client.js';
import {type NoParam} from '../util/no-param.js';
import type {
    DefinedEndpointFetchOutputs,
    DefinedEndpointFetchStreamOutputs,
    EndpointFetchOutput,
    EndpointFetchStreamOutput,
    HttpStatusByKey,
    ResolveShapeType,
    UnknownFetchOutput,
} from './endpoint-response.js';
import {
    condenseResponse,
    createEndpointResponseOutput,
    extractEndpointResult,
    httpStatusToKey,
    readResponseBodyAsJsonOrText,
    readResponseHeaders,
} from './endpoint-response.js';
import {createMockEndpointResponse, createMockResponse} from './mock-fetch.js';

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
                [HttpStatus.BadRequest]: {
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
    it('has fallback value', () => {
        const value = {} as any as EndpointFetchOutput;

        value.Accepted;

        assert.tsType(value).equals<
            RequireExactlyOne<
                {
                    [Status in HttpStatus as HttpStatusByKey<Status>]: {
                        status: Status;
                        responseData: any;
                        headers: DefaultResponseHeadersType;
                    } & {
                        response?: Response | undefined;
                    };
                } & {
                    unexpectedError: UnknownFetchOutput;
                }
            >
        >();
    });

    it('handles single ok response status', () => {
        const result = {} as EndpointFetchOutput<typeof usersEndpoint, typeof HttpMethod.Get>;

        if (result.Ok) {
            assert.tsType(result.Ok).matches<
                {
                    responseData: {
                        users: {id: string; name: string}[];
                    };
                    headers: Record<string, string>;
                } & {
                    response?: Response | undefined;
                }
            >();
        }
    });

    it('handles POST endpoint with multiple response statuses', () => {
        const result = {} as EndpointFetchOutput<
            typeof usersCreateEndpoint,
            typeof HttpMethod.Post
        >;

        if (result.Created) {
            assert.tsType(result.Created).matches<
                {
                    responseData: {id: string};
                    headers: Record<string, string>;
                } & {response?: Response | undefined}
            >();
        } else if (result.BadRequest) {
            assert
                .tsType(result.BadRequest.responseData)
                .equals<{error: string} | string | undefined>();
        }
    });

    it('handles GET endpoint with Ok and NotFound responses', () => {
        const result = {} as EndpointFetchOutput<typeof itemByIdEndpoint, typeof HttpMethod.Get>;

        if (result.Ok) {
            assert.tsType(result.Ok).matches<
                {
                    responseData: {id: string; title: string; count: number};
                    headers: Record<string, string>;
                } & {response?: Response | undefined}
            >();
        } else if (result.NotFound) {
            assert.tsType(result.NotFound.responseData).equals<string | undefined>();
        }
    });

    it('handles endpoint with empty responses', () => {
        const result = {} as EndpointFetchOutput<typeof partnerApiEndpoint, typeof HttpMethod.Post>;

        if (result.unexpectedError) {
            assert.tsType(result.unexpectedError).matches<
                {
                    responseData: unknown;
                    headers: Record<string, string>;
                } & {response?: Response | undefined}
            >();
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
            assert.tsType(result.NoContent).matches<
                {
                    responseData: undefined;
                    headers: Record<string, string>;
                } & {response?: Response | undefined}
            >();
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
        } else if (result.BadRequest) {
            assert
                .tsType(result.BadRequest.responseData)
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
            assert.tsType(result.Ok).matches<
                {
                    responseData: {id: string; title: string; count: number};
                    headers: Record<string, string>;
                } & {response?: Response | undefined}
            >();
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
            .tsType<NonNullable<AuthResult['BadRequest']>['responseData']>()
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

    it('allows typed instances to be assigned to the generic instance', () => {
        const specific = {} as EndpointFetchOutput<
            typeof usersCreateEndpoint,
            typeof HttpMethod.Post
        >;
        const generic: EndpointFetchOutput = specific;

        assert.tsType(generic).matches<EndpointFetchOutput>();
    });

    it('allows a concrete instance to be erased to the NoParam instantiation', () => {
        const specific = {} as EndpointFetchOutput<
            typeof usersCreateEndpoint,
            typeof HttpMethod.Post,
            true
        >;

        const erased: EndpointFetchOutput<NoParam, NoParam, true> = specific;

        assert.tsType(erased).matches<EndpointFetchOutput<NoParam, NoParam, true>>();
    });

    it('cannot relate an abstract generic instantiation to the NoParam instantiation', () => {
        function passThrough<
            Endpoint extends EndpointDefinition,
            Method extends DefinableHttpMethod,
        >(
            input: EndpointFetchOutput<Endpoint, Method, true>,
        ): EndpointFetchOutput<Endpoint, Method, true> {
            // @ts-expect-error: an abstract generic instantiation does not reduce, so it is not
            // assignable to the resolved NoParam instantiation.
            const erased: EndpointFetchOutput<NoParam, NoParam, true> = input;

            // @ts-expect-error: the resolved NoParam instantiation is likewise not assignable back
            // to the abstract generic instantiation.
            return erased;
        }

        assert.isFunction(passThrough);
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

describe(createEndpointResponseOutput.name, () => {
    it('creates declared output for defined statuses', async () => {
        const mockResponseData: EndpointResponseType<
            typeof authLoginEndpoint,
            typeof HttpMethod.Post,
            typeof HttpStatus.Ok
        > = {
            expiresAt: '',
            refreshToken: '',
            token: '',
            user: {
                displayName: '',
                emailAddress: '',
                id: '',
            },
        };

        const result = await createEndpointResponseOutput({
            endpoint: authLoginEndpoint,
            method: HttpMethod.Post,
            shouldCondenseResponse: false,
            includeResponse: false,
            response: createMockEndpointResponse(
                authLoginEndpoint,
                HttpMethod.Post,
                HttpStatus.Ok,
                {
                    headers: {
                        'x-source': 'test',
                    },
                    body: mockResponseData,
                },
            ),
        });

        assert.deepEquals(result, {
            Ok: {
                headers: {
                    'content-type': 'application/json',
                    'x-source': 'test',
                },
                responseData: mockResponseData,
                status: HttpStatus.Ok,
            },
        });
    });

    it('condenses declared response outputs', async () => {
        const responseData: EndpointResponseType<
            typeof authLoginEndpoint,
            typeof HttpMethod.Post,
            typeof HttpStatus.Ok
        > = {
            expiresAt: '',
            refreshToken: '',
            token: '',
            user: {
                displayName: '',
                emailAddress: '',
                id: '',
            },
        };
        const result = await createEndpointResponseOutput({
            endpoint: authLoginEndpoint,
            method: HttpMethod.Post,
            shouldCondenseResponse: true,
            includeResponse: false,
            response: createMockEndpointResponse(
                authLoginEndpoint,
                HttpMethod.Post,
                HttpStatus.Ok,
                {
                    headers: {
                        'access-control-allow-origin': '*',
                        'x-source': 'test',
                    },
                    body: responseData,
                },
            ),
        });

        assert.deepEquals(result, {
            Ok: {
                headers: {
                    'x-source': 'test',
                },
                responseData,
                status: HttpStatus.Ok,
            },
        });
    });

    it('creates unexpected error output for undefined error statuses', async () => {
        const result = await createEndpointResponseOutput({
            endpoint: authLoginEndpoint,
            method: HttpMethod.Post,
            shouldCondenseResponse: false,
            response: createMockResponse({
                body: 'not allowed',
                status: HttpStatus.Unauthorized,
            }),
            includeResponse: false,
            handleDeclaredResponseStatusOverride() {
                throw new Error('This callback should not run.');
            },
        });

        assert.deepEquals(result, {
            unexpectedError: {
                headers: {
                    'content-type': 'text/plain',
                },
                responseData: 'not allowed',
                status: HttpStatus.Unauthorized,
            },
        });
    });

    it('condenses unexpected error responses', async () => {
        const response = createMockResponse({
            body: 'not allowed',
            headers: {
                'access-control-allow-origin': '*',
                'x-source': 'test',
            },
            status: HttpStatus.Unauthorized,
        });
        const result = await createEndpointResponseOutput({
            endpoint: authLoginEndpoint,
            method: HttpMethod.Post,
            shouldCondenseResponse: true,
            response,
            includeResponse: false,
        });

        assert.deepEquals(result, {
            unexpectedError: {
                headers: {
                    'x-source': 'test',
                },
                responseData: 'not allowed',
                status: HttpStatus.Unauthorized,
            },
        });
    });

    it('can include the full response', async () => {
        const responseData = {
            expiresAt: '',
            refreshToken: '',
            token: '',
            user: {
                displayName: '',
                emailAddress: '',
                id: '',
            },
        };

        const response = createMockEndpointResponse(
            authLoginEndpoint,
            HttpMethod.Post,
            HttpStatus.Ok,
            {
                body: responseData,
            },
        );
        const result = await createEndpointResponseOutput({
            endpoint: authLoginEndpoint,
            method: HttpMethod.Post,
            response,
            shouldCondenseResponse: false,
            includeResponse: true,
        });

        assert.deepEquals(result, {
            Ok: {
                headers: {
                    'content-type': 'application/json',
                },
                response,
                responseData,
                status: HttpStatus.Ok,
            },
        });
    });

    it('throws for undefined successful statuses', async () => {
        await assert.throws(
            async () => {
                return await createEndpointResponseOutput({
                    endpoint: authLoginEndpoint,
                    method: HttpMethod.Post,
                    response: createMockResponse({
                        status: HttpStatus.Created,
                    }),
                    shouldCondenseResponse: false,
                    includeResponse: false,
                    handleDeclaredResponseStatusOverride() {
                        throw new Error('This callback should not run.');
                    },
                });
            },
            {
                matchMessage: `Received unexpected successful response status from endpoint '${authLoginEndpoint.path}': ${HttpStatus.Created}`,
            },
        );
    });
});

describe(condenseResponse.name, () => {
    it('removes noisy response headers', () => {
        const response = createMockResponse({
            body: {
                value: 'kept',
            },
            headers: {
                'access-control-allow-credentials': 'true',
                'access-control-allow-origin': '*',
                'access-control-expose-headers': 'rest-vir-api',
                connection: 'keep-alive',
                'content-length': '16',
                date: 'Mon, 01 Jun 2026 00:00:00 GMT',
                'keep-alive': 'timeout=72',
                'rest-vir-api': 'api',
                vary: 'origin',
                'x-source': 'test',
            },
        });

        condenseResponse(response);

        assert.deepEquals(readResponseHeaders(response.headers), {
            'x-source': 'test',
        });
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
        // eslint-disable-next-line @typescript-eslint/no-generated-empty-object-type
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

describe(readResponseBodyAsJsonOrText.name, () => {
    it('does not consume the original response body (uses clone)', async () => {
        const response = new Response(
            JSON.stringify({
                n: 1,
            }),
        );

        await readResponseBodyAsJsonOrText(response);

        /** Original is still readable because the helper clones before reading. */
        assert.deepEquals(await response.json(), {
            n: 1,
        });
    });

    itCases(readResponseBodyAsJsonOrText, [
        {
            it: 'parses a JSON object body',
            input: new Response(
                JSON.stringify({
                    hello: 'world',
                }),
            ),
            expect: {
                hello: 'world',
            },
        },
        {
            it: 'parses a JSON-encoded string',
            input: new Response(JSON.stringify('hi')),
            expect: 'hi',
        },
        {
            it: 'parses a JSON-encoded number',
            input: new Response(JSON.stringify(42)),
            expect: 42,
        },
        {
            it: 'preserves a JSON-encoded zero instead of falling back to raw text',
            input: new Response(JSON.stringify(0)),
            expect: 0,
        },
        {
            it: 'preserves a JSON-encoded false instead of falling back to raw text',
            input: new Response(JSON.stringify(false)),
            expect: false,
        },
        {
            it: 'preserves a JSON-encoded null instead of falling back to raw text',
            input: new Response(JSON.stringify(null)),
            expect: null,
        },
        {
            it: 'parses a JSON object body without checking content-type',
            input: new Response(
                JSON.stringify({
                    type: 'thing',
                }),
            ),
            expect: {
                type: 'thing',
            },
        },
        {
            it: 'parses another JSON object body without checking content-type',
            input: new Response(
                JSON.stringify({
                    type: 'thing',
                }),
            ),
            expect: {
                type: 'thing',
            },
        },
        {
            it: 'returns raw text when parsing fails',
            input: new Response('plain text body'),
            expect: 'plain text body',
        },
        {
            it: 'returns raw text for another non-JSON body',
            input: new Response('no header'),
            expect: 'no header',
        },
        {
            it: 'returns undefined for an empty body',
            input: new Response(''),
            expect: undefined,
        },
        {
            it: 'returns undefined for a null body',
            input: new Response(null),
            expect: undefined,
        },
        {
            it: 'falls back to the raw text when JSON parsing fails',
            input: new Response('not really { json'),
            expect: 'not really { json',
        },
        {
            it: 'parses JSON-looking text',
            input: new Response('{"x":1}'),
            expect: {
                x: 1,
            },
        },
        {
            it: 'parses another JSON-looking text body',
            input: new Response('{"x":1}'),
            expect: {
                x: 1,
            },
        },
        {
            it: 'parses a JSON object body that would normally include charset metadata',
            input: new Response(
                JSON.stringify({
                    a: 1,
                }),
            ),
            expect: {
                a: 1,
            },
        },
    ]);
});

describe(extractEndpointResult.name, () => {
    const loginApi = defineApi({
        apiName: 'login-api',
        endpoints: [authLoginEndpoint],
    });

    const validCredentials = {
        email: 'a@b.c',
        password: 'pw',
    };

    const okBody = {
        user: {
            id: 'u-1',
            emailAddress: 'a@b.c',
            displayName: 'A',
        },
        token: 't',
        refreshToken: 'r',
        expiresAt: '2099-01-01',
    };

    it('returns the defined Ok branch when the response is a successful 200', async () => {
        const client = new RestVirClient(loginApi, '', () => {
            return createMockResponse({
                status: HttpStatus.Ok,
                body: okBody,
            });
        });

        const output = (await client.fetch(authLoginEndpoint).POST({
            requestData: validCredentials,
        })) satisfies EndpointFetchOutput as EndpointFetchOutput;
        const extracted = extractEndpointResult(output);

        assert.tsType(extracted.status).equals<HttpStatus>();
        assert.tsType(extracted.responseData).equals<any>();
        assert.strictEquals(extracted.status, HttpStatus.Ok);
        assert.deepEquals(extracted.responseData, okBody);
    });

    it('handles a generic response', async () => {
        const client = new RestVirClient(loginApi, '', () => {
            return createMockResponse({
                status: HttpStatus.Ok,
                body: okBody,
            });
        });

        const output = await client.fetch(authLoginEndpoint).POST({
            requestData: validCredentials,
        });
        const extracted = extractEndpointResult(output);

        assert.tsType(extracted.status).equals<HttpStatus>();
        assert
            .tsType(extracted.responseData)
            .equals<
                | DefaultErrorResponseType
                | EndpointResponseType<
                      typeof authLoginEndpoint,
                      typeof HttpMethod.Post,
                      typeof HttpStatus.Ok
                  >
                | EndpointResponseType<
                      typeof authLoginEndpoint,
                      typeof HttpMethod.Post,
                      typeof HttpStatus.BadRequest
                  >
            >();
        assert.strictEquals(extracted.status, HttpStatus.Ok);
        assert.deepEquals(extracted.responseData, okBody);
    });

    it('returns the defined BadRequest branch when the response is a declared 400', async () => {
        const badRequestBody = {
            error: 'bad credentials',
            remainingAttempts: 2,
        };

        const client = new RestVirClient(loginApi, '', () => {
            return createMockResponse({
                status: HttpStatus.BadRequest,
                body: badRequestBody,
            });
        });

        const output = await client.fetch(authLoginEndpoint).POST({
            requestData: validCredentials,
        });
        const extracted = extractEndpointResult(output);

        assert.strictEquals(extracted.status, HttpStatus.BadRequest);
        assert.deepEquals(extracted.responseData, badRequestBody);
    });

    it('returns the unexpectedError branch when the response is an undeclared error status', async () => {
        const client = new RestVirClient(loginApi, '', () => {
            return createMockResponse({
                status: HttpStatus.InternalServerError,
                body: 'boom',
            });
        });

        const output = await client.fetch(authLoginEndpoint).POST({
            requestData: validCredentials,
        });
        const extracted = extractEndpointResult(output);

        assert.strictEquals(extracted.status, HttpStatus.InternalServerError);
        assert.strictEquals(extracted.responseData, 'boom');
    });

    it('throws when the fetch result is empty', () => {
        assert.throws(() => extractEndpointResult({} as EndpointFetchOutput), {
            matchMessage: 'No fetch result contents.',
        });
    });
});
