import {assert, waitUntil} from '@augment-vir/assert';
import {DeferredPromise, HttpMethod, HttpStatus, selectFrom} from '@augment-vir/common';
import {runShellCommand} from '@augment-vir/node';
import {describe, it} from '@augment-vir/test';
import {
    condenseResponse,
    findDevServerPort,
    readResponseHeaders,
    RestVirClient,
} from '@rest-vir/api';
import {readFile} from 'node:fs/promises';
import {get} from 'node:https';
import {join} from 'node:path';
import {buildUrl} from 'url-vir';
import {startApiServerMocksDirPath} from '../util/file-paths.mock.js';
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
            assert.isDefined(webSocket);

            webSocket.send();
        });
        it('handles client message data that should not exist', async ({connectWebSocket}) => {
            const webSocket = await connectWebSocket(noClientDataWebSocket.path);
            assert.isDefined(webSocket);

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
            /**
             * String `responseData` is JSON-encoded on the wire so the body is a well-formed JSON
             * document (e.g. `""` for the empty string). Clients using `.json()` get the original
             * value back; only direct `.text()` callers see the surrounding quotes.
             */
            assert.strictEquals(await output.json(), '');
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
            /** String `responseData` is JSON-encoded on the wire — read it back via `.json()`. */
            assert.strictEquals(await response.json(), 'ok');
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
            const invalidOriginResponse = createMutableResponse(
                await fetchEndpoint(functionOriginEndpoint.path, {
                    method: HttpMethod.Get,
                    headers: {
                        origin: 'https://electrovir.com',
                    },
                }),
            );
            condenseResponse(invalidOriginResponse);
            assert.deepEquals(
                {
                    headers: readResponseHeaders(invalidOriginResponse.headers),
                    status: invalidOriginResponse.status,
                },
                {
                    headers: {},
                    status: HttpStatus.Forbidden,
                },
                'blocks an invalid origin with functions',
            );
            const validOriginResponse = createMutableResponse(
                await fetchEndpoint(functionOriginEndpoint.path, {
                    method: HttpMethod.Get,
                    headers: {
                        origin: 'https://example.com',
                    },
                }),
            );
            condenseResponse(validOriginResponse);
            assert.deepEquals(
                {
                    headers: readResponseHeaders(validOriginResponse.headers),
                    status: validOriginResponse.status,
                },
                {
                    headers: {},
                    status: HttpStatus.Ok,
                },
                'accepts a valid origin with functions',
            );
            const invalidOptionsOriginResponse = createMutableResponse(
                await fetchEndpoint(functionOriginEndpoint.path, {
                    method: HttpMethod.Options,
                    headers: {
                        origin: 'https://electrovir.com',
                        'access-control-request-method': HttpMethod.Get,
                    },
                }),
            );
            condenseResponse(invalidOptionsOriginResponse);
            assert.deepEquals(
                {
                    headers: readResponseHeaders(invalidOptionsOriginResponse.headers),
                    status: invalidOptionsOriginResponse.status,
                },
                {
                    headers: {},
                    status: HttpStatus.NoContent,
                },
                'blocks an invalid OPTIONS origin with functions',
            );
            const validOptionsOriginResponse = createMutableResponse(
                await fetchEndpoint(functionOriginEndpoint.path, {
                    method: HttpMethod.Options,
                    headers: {
                        origin: 'https://example.com',
                        'access-control-request-method': HttpMethod.Get,
                    },
                }),
            );
            condenseResponse(validOptionsOriginResponse);
            assert.deepEquals(
                {
                    headers: readResponseHeaders(validOptionsOriginResponse.headers),
                    status: validOptionsOriginResponse.status,
                },
                {
                    headers: {
                        'access-control-allow-headers': 'Cookie,Authorization,Content-Type',
                        'access-control-allow-methods': 'GET,OPTIONS',
                        'access-control-max-age': '3600',
                    },
                    status: HttpStatus.NoContent,
                },
                'accepts a valid OPTIONS origin with functions',
            );
        });
        it('handles array CORS requirements', async ({fetchEndpoint}) => {
            const invalidOriginResponse = createMutableResponse(
                await fetchEndpoint(arrayOriginEndpoint.path, {
                    method: HttpMethod.Get,
                    headers: {
                        origin: 'https://wikipedia.org',
                    },
                }),
            );
            condenseResponse(invalidOriginResponse);
            assert.deepEquals(
                {
                    headers: readResponseHeaders(invalidOriginResponse.headers),
                    status: invalidOriginResponse.status,
                },
                {
                    headers: {},
                    status: HttpStatus.Forbidden,
                },
                'blocks an invalid origin with an array',
            );
            const validOriginResponse = createMutableResponse(
                await fetchEndpoint(arrayOriginEndpoint.path, {
                    method: HttpMethod.Get,
                    headers: {
                        origin: 'https://example.com',
                    },
                }),
            );
            condenseResponse(validOriginResponse);
            assert.deepEquals(
                {
                    headers: readResponseHeaders(validOriginResponse.headers),
                    status: validOriginResponse.status,
                },
                {
                    headers: {},
                    status: HttpStatus.Ok,
                },
                'accepts a valid origin with an array',
            );
            const invalidOptionsOriginResponse = createMutableResponse(
                await fetchEndpoint(arrayOriginEndpoint.path, {
                    method: HttpMethod.Options,
                    headers: {
                        origin: 'https://wikipedia.org',
                        'access-control-request-method': HttpMethod.Get,
                    },
                }),
            );
            condenseResponse(invalidOptionsOriginResponse);
            assert.deepEquals(
                {
                    headers: readResponseHeaders(invalidOptionsOriginResponse.headers),
                    status: invalidOptionsOriginResponse.status,
                },
                {
                    headers: {},
                    status: HttpStatus.NoContent,
                },
                'blocks an invalid OPTIONS origin with an array',
            );
            const validOptionsOriginResponse = createMutableResponse(
                await fetchEndpoint(arrayOriginEndpoint.path, {
                    method: HttpMethod.Options,
                    headers: {
                        origin: 'https://example.com',
                        'access-control-request-method': HttpMethod.Get,
                    },
                }),
            );
            condenseResponse(validOptionsOriginResponse);
            assert.deepEquals(
                {
                    headers: readResponseHeaders(validOptionsOriginResponse.headers),
                    status: validOptionsOriginResponse.status,
                },
                {
                    headers: {
                        'access-control-allow-headers': 'Cookie,Authorization,Content-Type',
                        'access-control-allow-methods': 'GET,OPTIONS',
                        'access-control-max-age': '3600',
                    },
                    status: HttpStatus.NoContent,
                },
                'accepts a valid OPTIONS origin with an array',
            );
        });
        it("accepts an api's AnyOrigin", async ({fetchEndpoint}) => {
            const getResponse = createMutableResponse(
                await fetchEndpoint(healthEndpoint.path, {
                    method: HttpMethod.Get,
                }),
            );
            condenseResponse(getResponse);
            assert.deepEquals(
                {
                    headers: readResponseHeaders(getResponse.headers),
                    status: getResponse.status,
                },
                {
                    headers: {},
                    status: HttpStatus.Ok,
                },
                'accepts a get request without any origin',
            );
            const optionsResponse = createMutableResponse(
                await fetchEndpoint(healthEndpoint.path, {
                    method: HttpMethod.Options,
                }),
            );
            condenseResponse(optionsResponse);
            assert.deepEquals(
                {
                    headers: readResponseHeaders(optionsResponse.headers),
                    status: optionsResponse.status,
                },
                {
                    headers: {
                        'access-control-allow-headers': 'Cookie,Authorization,Content-Type',
                        'access-control-allow-methods': 'GET,OPTIONS',
                        'access-control-max-age': '3600',
                    },
                    status: HttpStatus.NoContent,
                },
                'accepts an options request without any origin',
            );
        });
        it('generates an error response', async ({fetchEndpoint}) => {
            const response = createMutableResponse(
                await fetchEndpoint(returnsResponseErrorEndpoint.path, {
                    method: HttpMethod.Get,
                }),
            );
            condenseResponse(response);
            const responseBody = await response.text();
            assert.deepEquals(
                {
                    body: responseBody,
                    headers: readResponseHeaders(response.headers),
                    status: response.status,
                },
                {
                    /** String `responseData` is JSON-encoded on the wire — quotes are expected. */
                    body: '"INTENTIONAL ERROR"',
                    headers: {},
                    status: HttpStatus.NotAcceptable,
                },
            );
        });
        it('handles a context rejection', async ({fetchEndpoint}) => {
            const response = createMutableResponse(
                await fetchEndpoint(emptyEndpoint.path, {
                    method: HttpMethod.Get,
                    headers: {
                        authorization: 'reject',
                    },
                }),
            );
            condenseResponse(response);
            assert.deepEquals(
                {
                    headers: readResponseHeaders(response.headers),
                    status: response.status,
                },
                {
                    headers: {},
                    status: HttpStatus.Unauthorized,
                },
            );
        });
        it('handles failed context generation', async ({fetchEndpoint}) => {
            const response = createMutableResponse(
                await fetchEndpoint(emptyEndpoint.path, {
                    method: HttpMethod.Get,
                    headers: {
                        authorization: 'error',
                    },
                }),
            );
            condenseResponse(response);
            assert.deepEquals(
                {
                    headers: readResponseHeaders(response.headers),
                    status: response.status,
                },
                {
                    headers: {},
                    status: HttpStatus.InternalServerError,
                },
            );
        });
        it('rejects unexpected request body', async ({fetchEndpoint}) => {
            const response = createMutableResponse(
                await fetchEndpoint(plainEndpoint.path, {
                    method: HttpMethod.Post,
                    body: JSON.stringify({
                        somethingHere: 'hi',
                    }),
                    headers: {
                        'content-type': 'application/json',
                    },
                }),
            );
            condenseResponse(response);
            const responseBody = await response.text();
            assert.deepEquals(
                {
                    body: responseBody,
                    headers: readResponseHeaders(response.headers),
                    status: response.status,
                },
                {
                    body: 'Invalid body.',
                    headers: {},
                    status: HttpStatus.BadRequest,
                },
            );
        });
        it('404s on missing endpoint', async ({fetchEndpoint}) => {
            const response = createMutableResponse(
                await fetchEndpoint('/missing', {
                    method: HttpMethod.Get,
                }),
            );
            condenseResponse(response);
            const responseBody = await response.text();
            assert.deepEquals(
                {
                    body: responseBody,
                    headers: readResponseHeaders(response.headers),
                    status: response.status,
                },
                {
                    body: '{"message":"Route GET:/missing not found","error":"Not Found","statusCode":404}',
                    headers: {},
                    status: 404,
                },
            );
        });
        it('works with RestVirClient', async ({address}) => {
            const client = new RestVirClient(mockApi, address);

            const output = await client.fetch(emptyEndpoint).GET();

            assert.isDefined(output.Accepted);

            const response = createMutableResponse(output.Accepted.response);
            condenseResponse(response);
            assert.deepEquals(
                {
                    headers: readResponseHeaders(response.headers),
                    status: response.status,
                },
                {
                    headers: {},
                    status: HttpStatus.Accepted,
                },
            );
        });
    });

    describeApiServerScript('multi-threaded', ({it}) => {
        /**
         * Unfortunately this test is not reliable as an automated test. Instead, test it manually
         * by doing the following:
         *
         * 1. Run `npx tsx packages/host/src/server/run-api/examples/multi-threaded.script.mock.ts`.
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
            const response = createMutableResponse(await fetchEndpoint(emptyEndpoint.path));
            condenseResponse(response);
            assert.deepEquals(
                {
                    headers: readResponseHeaders(response.headers),
                    status: response.status,
                },
                {
                    headers: {},
                    status: HttpStatus.Accepted,
                },
            );
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

    it('passes trustProxy through to Fastify when set', async () => {
        const {mockApiImplementation} = await import('./examples/mock-api-implementation.mock.js');
        const {kill} = await startApiServer(mockApiImplementation, {
            port: 0,
            workerCount: 1,
            preventWorkerRespawn: true,
            externalOrigin: 'http://localhost',
            trustProxy: true,
        });
        assert.isDefined(kill);
        await kill();
    });
    it('serves https with its timeout options', async () => {
        const {mockApiImplementation} = await import('./examples/mock-api-implementation.mock.js');
        const cert = await readFile(join(startApiServerMocksDirPath, 'localhost-https.mock.cert'));
        const {kill, server} = await startApiServer(mockApiImplementation, {
            port: 3890,
            lockPort: true,
            workerCount: 1,
            externalOrigin: 'https://localhost:3890',
            connectionTimeout: 34_567,
            keepAliveTimeout: 23_456,
            requestTimeout: 12_345,
            https: {
                cert,
                key: await readFile(join(startApiServerMocksDirPath, 'localhost-https.mock.key')),
            },
        });

        try {
            assert.isDefined(server);
            const statusCode = new DeferredPromise<number | undefined>();
            get(
                {
                    host: 'localhost',
                    port: 3890,
                    path: healthEndpoint.path,
                    ca: cert,
                },
                (response) => {
                    response.resume();
                    statusCode.resolve(response.statusCode);
                },
            ).on('error', (error) => statusCode.reject(error));

            assert.deepEquals(
                {
                    statusCode: await statusCode.promise,
                    ...selectFrom(server.server, {
                        timeout: true,
                        keepAliveTimeout: true,
                        requestTimeout: true,
                    }),
                },
                {
                    statusCode: HttpStatus.Ok,
                    timeout: 34_567,
                    keepAliveTimeout: 23_456,
                    requestTimeout: 12_345,
                },
            );
        } finally {
            await kill();
        }
    });
});

function createMutableResponse(response: Response): Response {
    return new Response(response.body, response);
}
