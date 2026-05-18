import {assert, waitUntil} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {runShellCommand} from '@augment-vir/node';
import {describe, it} from '@augment-vir/test';
import {findDevServerPort, restVirApiNameHeader, RestVirClient} from '@rest-vir/client';
import {buildUrl} from 'url-vir';
import {condenseResponse} from '../test/test-api.js';
import {
    arrayOriginEndpoint,
    asyncRejectionEndpoint,
    emptyEndpoint,
    emptyStringResponseEndpoint,
    formDataEndpoint,
    functionOriginEndpoint,
    healthEndpoint,
    incorrectlyHasResponseDataEndpoint,
    longRunningEndpoint,
    missingStatusCodeEndpoint,
    mockApi,
    mockWebsiteOrigin,
    noClientDataWebSocket,
    plainEndpoint,
    requiredProtocolsWebSocket,
    requiresOriginEndpoint,
    returnsResponseErrorEndpoint,
    searchParamsWebSocket,
    sendsProtocolWebSocket,
    testEndpoint,
    withAllListenersWebSocket,
    withSearchParamsEndpoint,
} from './examples/mock-api-implementation.mock.js';
import {startApiServer} from './start-api-server.js';
import {describeApiServerScript, getMockScriptCommand} from './test-start-api-server.mock.js';

describe(startApiServer.name, () => {
    describeApiServerScript('single-thread', ({it}) => {
        it('accepts a valid socket message', async ({connectWebSocket}) => {
            const webSocket = await connectWebSocket(noClientDataWebSocket.path);
            const serverMessage = await webSocket.sendAndWaitForReply();

            assert.strictEquals(serverMessage, 'ok');
        });
        it('handles an async rejection', async ({fetchEndpoint, stderr}) => {
            const response = await fetchEndpoint(asyncRejectionEndpoint.path);

            assert.strictEquals(response.status, HttpStatus.Ok);

            await waitUntil.isTrue(() => {
                return stderr.join('').includes('async crash');
            });
        });
        it('can be dev port scanned', async ({address}) => {
            const result = await findDevServerPort(mockApi, {
                startOrigin: 'http://localhost:3790',
                maxScanDistance: 20,
            });

            assert.isDefined(result);
            assert.strictEquals(result.origin, address);
            assert.strictEquals(result.origin, 'http://localhost:3800');
        });
        it('fires websocket listeners', async ({connectWebSocket}) => {
            const webSocket = await connectWebSocket(withAllListenersWebSocket.path);

            webSocket.send();
        });
        it('handles client message data that should not exist', async ({connectWebSocket}) => {
            const webSocket = await connectWebSocket(noClientDataWebSocket.path);

            webSocket.send('something here');
        });
        it('rejects invalid WebSocket protocols', async ({connectWebSocket}) => {
            await assert.throws(() => connectWebSocket(requiredProtocolsWebSocket.path), {
                matchMessage: 'WebSocket connection failed',
            });
        });
        it('receives web socket protocols', async ({connectWebSocket}) => {
            const mockProtocols = [
                'hi',
                'hi1',
                'hi2',
            ];

            const webSocket = await connectWebSocket(sendsProtocolWebSocket.path, mockProtocols);

            const serverMessage = await webSocket.sendAndWaitForReply();

            assert.deepEquals(serverMessage, mockProtocols);
        });
        it('rejects invalid WebSocket search params', async ({connectWebSocket}) => {
            await assert.throws(() => connectWebSocket(searchParamsWebSocket.path), {
                matchMessage: 'WebSocket connection failed',
            });
        });
        it('accepts valid WebSocket search params', async ({connectWebSocket}) => {
            const mockSearchParams = {
                param1: ['hi'],
                param2: [
                    'a',
                    'b',
                    'c',
                ],
            };

            const webSocket = await connectWebSocket(
                buildUrl(searchParamsWebSocket.path, {
                    search: mockSearchParams,
                }).href,
            );

            const serverMessage = await webSocket.sendAndWaitForReply();

            assert.deepEquals(serverMessage, mockSearchParams);
        });
        it('errors on invalid response', async ({fetchEndpoint}) => {
            assert.strictEquals(
                (
                    await fetchEndpoint(incorrectlyHasResponseDataEndpoint.path, {
                        method: HttpMethod.Get,
                    })
                ).status,
                HttpStatus.InternalServerError,
            );
        });
        it('errors on invalid status code', async ({fetchEndpoint}) => {
            assert.strictEquals(
                (
                    await fetchEndpoint(missingStatusCodeEndpoint.path, {
                        method: HttpMethod.Get,
                    })
                ).status,
                HttpStatus.InternalServerError,
            );
        });
        it('allows empty string response shape', async ({fetchEndpoint}) => {
            const output = await fetchEndpoint(emptyStringResponseEndpoint.path, {
                method: HttpMethod.Get,
            });
            assert.strictEquals(output.status, HttpStatus.Ok);
            assert.strictEquals(await output.text(), '');
        });
        it('rejects an unexpected method', async ({fetchEndpoint}) => {
            assert.strictEquals(
                (
                    await fetchEndpoint(testEndpoint.path, {
                        method: HttpMethod.Get,
                    })
                ).status,
                HttpStatus.MethodNotAllowed,
            );
        });
        it('passes path params', async ({fetchEndpoint}) => {
            assert.deepEquals(
                await (
                    await fetchEndpoint('/with/first/second', {
                        method: HttpMethod.Get,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                ).json(),
                {
                    param1: 'first',
                    param2: 'second',
                },
            );
        });
        it('accepts form data', async ({fetchEndpoint}) => {
            const response = await fetchEndpoint(formDataEndpoint.path, {
                method: HttpMethod.Post,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: new FormData(),
            });

            assert.isTrue(response.ok);
            assert.strictEquals(await response.text(), 'ok');
        });
        it('does not parse body when content type is not json', async ({fetchEndpoint}) => {
            assert.strictEquals(
                (
                    await fetchEndpoint(testEndpoint.path, {
                        method: HttpMethod.Post,
                        body: JSON.stringify({
                            somethingHere: 'value',
                            testValue: 422,
                        }),
                    })
                ).status,
                HttpStatus.BadRequest,
            );
        });
        it('parses body when content type is json', async ({fetchEndpoint}) => {
            const postResponse = await fetchEndpoint(testEndpoint.path, {
                method: HttpMethod.Post,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    somethingHere: 'value',
                    testValue: 422,
                }),
            });

            assert.isTrue(postResponse.ok);
            assert.strictEquals(postResponse.status, HttpStatus.Accepted);

            assert.deepEquals(await postResponse.json(), {
                result: 4,
                requestData: {
                    somethingHere: 'value',
                    testValue: 422,
                },
            });
        });
        it('rejects a missing origin when CORS is required', async ({fetchEndpoint}) => {
            assert.strictEquals(
                (await fetchEndpoint(requiresOriginEndpoint.path)).status,
                HttpStatus.Forbidden,
            );
        });
        it('rejects invalid endpoint search params', async ({fetchEndpoint}) => {
            assert.strictEquals(
                (await fetchEndpoint(withSearchParamsEndpoint.path)).status,
                HttpStatus.BadRequest,
            );
        });
        it('accepts valid endpoint search params', async ({fetchEndpoint}) => {
            assert.strictEquals(
                (
                    await fetchEndpoint(
                        buildUrl(withSearchParamsEndpoint.path, {
                            search: {
                                param1: ['hi'],
                                param2: [
                                    'a',
                                    'b',
                                    'c',
                                ],
                            },
                        }).href,
                    )
                ).status,
                HttpStatus.Ok,
            );
        });
        it('accepts endpoint with same path as WebSocket and non-get method', async ({
            fetchEndpoint,
        }) => {
            assert.strictEquals(
                (
                    await fetchEndpoint(
                        buildUrl(withSearchParamsEndpoint.path, {
                            search: {
                                param1: ['hi'],
                                param2: [
                                    'a',
                                    'b',
                                    'c',
                                ],
                            },
                        }).href,
                        {
                            method: HttpMethod.Post,
                        },
                    )
                ).status,
                HttpStatus.Ok,
            );
        });
        it('accepts endpoint with extra body data', async ({fetchEndpoint}) => {
            assert.strictEquals(
                (
                    await fetchEndpoint(testEndpoint.path, {
                        method: HttpMethod.Post,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            somethingHere: 'a',
                            testValue: -4,
                            extraValue: 'hi',
                        }),
                    })
                ).status,
                HttpStatus.Accepted,
            );
        });
        it('rejects fetch to WebSocket path', async ({fetchEndpoint}) => {
            assert.strictEquals(
                (
                    await fetchEndpoint(noClientDataWebSocket.path, {
                        method: HttpMethod.Get,
                    })
                ).status,
                HttpStatus.NotFound,
            );
        });
        it('passes a matching CORS origin', async ({fetchEndpoint}) => {
            assert.strictEquals(
                (
                    await fetchEndpoint(requiresOriginEndpoint.path, {
                        headers: {
                            origin: mockWebsiteOrigin,
                        },
                    })
                ).status,
                HttpStatus.Ok,
                'should accept matching origin',
            );
        });
        it("allows options requests even when the endpoint doesn't specify it", async ({
            fetchEndpoint,
        }) => {
            assert.strictEquals(
                (
                    await fetchEndpoint(testEndpoint.path, {
                        method: HttpMethod.Options,
                    })
                ).status,
                HttpStatus.NoContent,
                'options should be allowed without content',
            );
        });
        it('gets blocked', async ({fetchEndpoint}) => {
            const startTime = Date.now();
            const longRunningTime = fetchEndpoint(longRunningEndpoint.path).then(
                () => Date.now() - startTime,
            );
            const plainTime = fetchEndpoint(plainEndpoint.path).then(() => Date.now() - startTime);

            assert.isAtLeast(await plainTime, await longRunningTime);
        });
        it('handles function CORS requirements', async ({fetchEndpoint}) => {
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint(functionOriginEndpoint.path, {
                        method: HttpMethod.Get,
                        headers: {
                            origin: 'https://electrovir.com',
                        },
                    }),
                ),
                {
                    status: HttpStatus.Forbidden,
                    headers: {},
                },
                'blocks an invalid origin with functions',
            );
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint(functionOriginEndpoint.path, {
                        method: HttpMethod.Get,
                        headers: {
                            origin: 'https://example.com',
                        },
                    }),
                ),
                {
                    status: HttpStatus.Ok,
                    headers: {
                        'access-control-allow-credentials': 'true',
                        'access-control-allow-origin': 'https://example.com',
                        'access-control-expose-headers': restVirApiNameHeader,
                        vary: 'Origin',
                    },
                },
                'accepts a valid origin with functions',
            );
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint(functionOriginEndpoint.path, {
                        method: HttpMethod.Options,
                        headers: {
                            origin: 'https://electrovir.com',
                            'access-control-request-method': HttpMethod.Get,
                        },
                    }),
                ),
                {
                    status: HttpStatus.NoContent,
                    headers: {},
                },
                'blocks an invalid OPTIONS origin with functions',
            );
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint(functionOriginEndpoint.path, {
                        method: HttpMethod.Options,
                        headers: {
                            origin: 'https://example.com',
                            'access-control-request-method': HttpMethod.Get,
                        },
                    }),
                ),
                {
                    status: HttpStatus.NoContent,
                    headers: {
                        'access-control-allow-credentials': 'true',
                        'access-control-allow-headers': 'Cookie,Authorization,Content-Type',
                        'access-control-expose-headers': restVirApiNameHeader,
                        'access-control-allow-methods': 'GET,OPTIONS',
                        'access-control-allow-origin': 'https://example.com',
                        'access-control-max-age': '3600',
                        vary: 'Origin',
                    },
                },
                'accepts a valid OPTIONS origin with functions',
            );
        });
        it('handles array CORS requirements', async ({fetchEndpoint}) => {
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint(arrayOriginEndpoint.path, {
                        method: HttpMethod.Get,
                        headers: {
                            origin: 'https://wikipedia.org',
                        },
                    }),
                ),
                {
                    status: HttpStatus.Forbidden,
                    headers: {},
                },
                'blocks an invalid origin with an array',
            );
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint(arrayOriginEndpoint.path, {
                        method: HttpMethod.Get,
                        headers: {
                            origin: 'https://example.com',
                        },
                    }),
                ),
                {
                    status: HttpStatus.Ok,
                    headers: {
                        'access-control-allow-credentials': 'true',
                        'access-control-allow-origin': 'https://example.com',
                        'access-control-expose-headers': restVirApiNameHeader,
                        vary: 'Origin',
                    },
                },
                'accepts a valid origin with an array',
            );
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint(arrayOriginEndpoint.path, {
                        method: HttpMethod.Options,
                        headers: {
                            origin: 'https://wikipedia.org',
                            'access-control-request-method': HttpMethod.Get,
                        },
                    }),
                ),
                {
                    status: HttpStatus.NoContent,
                    headers: {},
                },
                'blocks an invalid OPTIONS origin with an array',
            );
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint(arrayOriginEndpoint.path, {
                        method: HttpMethod.Options,
                        headers: {
                            origin: 'https://example.com',
                            'access-control-request-method': HttpMethod.Get,
                        },
                    }),
                ),
                {
                    status: HttpStatus.NoContent,
                    headers: {
                        'access-control-allow-credentials': 'true',
                        'access-control-allow-headers': 'Cookie,Authorization,Content-Type',
                        'access-control-expose-headers': restVirApiNameHeader,
                        'access-control-allow-methods': 'GET,OPTIONS',
                        'access-control-allow-origin': 'https://example.com',
                        'access-control-max-age': '3600',
                        vary: 'Origin',
                    },
                },
                'accepts a valid OPTIONS origin with an array',
            );
        });
        it("accepts an api's AnyOrigin", async ({fetchEndpoint}) => {
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint(healthEndpoint.path, {
                        method: HttpMethod.Get,
                    }),
                ),
                {
                    status: HttpStatus.Ok,
                    headers: {
                        'access-control-allow-origin': '*',
                        'access-control-expose-headers': restVirApiNameHeader,
                    },
                },
                'accepts a get request without any origin',
            );
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint(healthEndpoint.path, {
                        method: HttpMethod.Options,
                    }),
                ),
                {
                    status: HttpStatus.NoContent,
                    headers: {
                        'access-control-allow-headers': 'Cookie,Authorization,Content-Type',
                        'access-control-expose-headers': restVirApiNameHeader,
                        'access-control-allow-methods': 'GET,OPTIONS',
                        'access-control-allow-origin': '*',
                        'access-control-max-age': '3600',
                    },
                },
                'accepts an options request without any origin',
            );
        });
        it('generates an error response', async ({fetchEndpoint}) => {
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint(returnsResponseErrorEndpoint.path, {
                        method: HttpMethod.Get,
                    }),
                ),
                {
                    status: HttpStatus.NotAcceptable,
                    body: 'INTENTIONAL ERROR',
                    headers: {
                        'access-control-allow-origin': '*',
                        'content-type': 'application/json; charset=utf-8',
                        'access-control-expose-headers': restVirApiNameHeader,
                    },
                },
            );
        });
        it('handles a context rejection', async ({fetchEndpoint}) => {
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint(emptyEndpoint.path, {
                        method: HttpMethod.Get,
                        headers: {
                            authorization: 'reject',
                        },
                    }),
                ),
                {
                    status: HttpStatus.Unauthorized,
                    headers: {
                        'access-control-allow-origin': '*',
                        'access-control-expose-headers': restVirApiNameHeader,
                    },
                },
            );
        });
        it('handles failed context generation', async ({fetchEndpoint}) => {
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint(emptyEndpoint.path, {
                        method: HttpMethod.Get,
                        headers: {
                            authorization: 'error',
                        },
                    }),
                ),
                {
                    status: HttpStatus.InternalServerError,
                    headers: {
                        'access-control-allow-origin': '*',
                        'access-control-expose-headers': restVirApiNameHeader,
                    },
                },
            );
        });
        it('rejects unexpected request body', async ({fetchEndpoint}) => {
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint(plainEndpoint.path, {
                        method: HttpMethod.Post,
                        body: JSON.stringify({
                            somethingHere: 'hi',
                        }),
                        headers: {
                            'content-type': 'application/json',
                        },
                    }),
                ),
                {
                    status: HttpStatus.BadRequest,
                    body: 'Invalid body.',
                    headers: {
                        'access-control-allow-origin': '*',
                        'content-type': 'text/plain; charset=utf-8',
                        'access-control-expose-headers': restVirApiNameHeader,
                    },
                },
            );
        });
        it('404s on missing endpoint', async ({fetchEndpoint}) => {
            assert.deepEquals(
                await condenseResponse(
                    await fetchEndpoint('/missing', {
                        method: HttpMethod.Get,
                    }),
                ),
                {
                    status: 404,
                    body: '{"message":"Route GET:/missing not found","error":"Not Found","statusCode":404}',
                    headers: {
                        'content-type': 'application/json; charset=utf-8',
                    },
                },
            );
        });
        it('works with RestVirClient', async ({address}) => {
            const client = new RestVirClient(mockApi, address);

            const output = await client.fetch(emptyEndpoint, HttpMethod.Get);

            assert.isTrue('Accepted' in output);
            if ('Accepted' in output) {
                assert.deepEquals(await condenseResponse(output.Accepted.response), {
                    status: HttpStatus.Accepted,
                    headers: {
                        'access-control-allow-origin': '*',
                        'access-control-expose-headers': restVirApiNameHeader,
                    },
                });
            }
        });
    });

    describeApiServerScript('multi-threaded', ({it}) => {
        /**
         * Unfortunately this test is not reliable as an automated test. Instead, test it manually
         * by doing the following:
         *
         * 1. Run `npx tsx <path-to-multithreaded-script-file>`.
         * 2. Hit the `/long-running` endpoint in a browser.
         * 3. Quickly, in a separate tab, open `/empty`.
         * 4. `/empty` should resolve immediately while `/long-running` is still loading.
         */
        // it('does not get blocked', async ({fetchEndpoint}) => {
        //     const startTime = Date.now();
        //     const longRunningTime = fetchEndpoint(longRunningEndpoint.path).then(
        //         () => Date.now() - startTime,
        //     );
        //     const plainTime = fetchEndpoint(plainEndpoint.path).then(() => Date.now() - startTime);
        //     assert.isBelow(await plainTime, await longRunningTime);
        // });
        it('runs on multiple threads', async ({fetchEndpoint}) => {
            const response = await fetchEndpoint(emptyEndpoint.path);
            assert.deepEquals(await condenseResponse(response), {
                headers: {
                    'access-control-allow-origin': '*',
                    'access-control-expose-headers': restVirApiNameHeader,
                },
                status: HttpStatus.Accepted,
            });
        });
    });
    describeApiServerScript('locked-port', ({it}) => {
        it('locks the port number', ({address}) => {
            assert.strictEquals(address, 'http://localhost:3889');
        });
    });

    it('kills workers and exits automatically', async () => {
        assert.strictEquals(
            (await runShellCommand(getMockScriptCommand('kill-workers'))).exitCode,
            0,
        );
    });
    it('kills the cluster', async () => {
        assert.strictEquals(
            (await runShellCommand(getMockScriptCommand('kill-cluster'))).exitCode,
            0,
        );
    });
});
