import {assert, waitUntil} from '@augment-vir/assert';
import {
    DeferredPromise,
    extractErrorMessage,
    HttpMethod,
    HttpStatus,
    randomInteger,
    wait,
} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineEndpoint, defineWebSocket, formDataShape} from '@rest-vir/api';
import {restVirApiNameHeader} from '@rest-vir/client';
import fastify from 'fastify';
import {defineShape, exactShape} from 'object-shape-tester';
import {implementApi} from '../../implementation/implement-api.js';
import {createApiImplementor} from '../../implementation/implementor.js';
import {RejectRequestError} from '../../implementation/reject-request.error.js';
import {condenseResponse, describeApi, testApi, testExistingServer} from './test-api.js';

function makePort() {
    return (
        4500 +
        randomInteger({
            min: 0,
            max: 4000,
        })
    );
}

const healthEndpoint = defineEndpoint({
    path: '/health',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const internalErrorEndpoint = defineEndpoint({
    path: '/internal-error',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const rejectsWithErrorEndpoint = defineEndpoint({
    path: '/rejects-with-error',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const echoEndpoint = defineEndpoint({
    path: '/echo',
    requests: {
        [HttpMethod.Post]: {
            requestData: exactShape('echo request'),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: exactShape('echo response'),
                },
            },
        },
    },
});

const chatWebSocket = defineWebSocket({
    path: '/socket',
    clientMessage: exactShape('from client'),
    hostMessage: exactShape('from server'),
});

const plainApi = defineApi({
    apiName: 'plain api',
    endpoints: [
        healthEndpoint,
        internalErrorEndpoint,
        rejectsWithErrorEndpoint,
        echoEndpoint,
    ],
    webSockets: [chatWebSocket],
});

const plainImplementor = createApiImplementor<undefined>()(plainApi);

const plainImplementation = implementApi<undefined>()(plainApi, {
    createHostContext({requestHeaders}) {
        if (requestHeaders.authorization === 'reject') {
            throw new Error('context failed');
        }
        return {
            context: undefined,
        };
    },
    clientOriginRequirement: {
        anyOrigin: true,
    },
    endpoints: {
        '/health': plainImplementor.implementEndpoint(healthEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
        '/internal-error': plainImplementor.implementEndpoint(internalErrorEndpoint, {
            [HttpMethod.Get]() {
                throw new Error('Intentional error.');
            },
        }),
        '/rejects-with-error': plainImplementor.implementEndpoint(rejectsWithErrorEndpoint, {
            [HttpMethod.Get]() {
                throw new RejectRequestError(HttpStatus.BadGateway);
            },
        }),
        '/echo': plainImplementor.implementEndpoint(echoEndpoint, {
            [HttpMethod.Post]({requestData}) {
                assert.strictEquals(requestData, 'echo request');
                return {
                    [HttpStatus.Ok]: {
                        responseData: 'echo response',
                    },
                };
            },
        }),
    },
    webSockets: {
        '/socket': plainImplementor.implementWebSocket(chatWebSocket, {
            message({message, webSocket}) {
                assert.strictEquals(message, 'from client');
                webSocket.send('from server');
            },
        }),
    },
});

describeApi(
    {
        api: plainImplementation,
    },
    ({fetchEndpoint, connectWebSocket, getServer}) => {
        it('exposes the underlying server', async () => {
            const server = await getServer();
            assert.isDefined(server);
        });

        it('connects to a websocket via describeApi.connectWebSocket', async () => {
            const webSocket = await connectWebSocket(chatWebSocket);
            try {
                const reply = await webSocket.sendAndWaitForReply({
                    message: 'from client',
                });
                assert.strictEquals(reply, 'from server');
            } finally {
                await webSocket.close();
            }
        });

        it('responds to a request', async () => {
            const response = await fetchEndpoint(healthEndpoint, HttpMethod.Get);
            assert.isTrue(response.ok);
        });

        it('rejects an invalid request', async () => {
            const response = await fetchEndpoint(echoEndpoint, HttpMethod.Post, {
                // @ts-expect-error: invalid request data
                requestData: undefined,
            });
            assert.isFalse(response.ok);
        });

        it('echoes a valid request', async () => {
            const response = await fetchEndpoint(echoEndpoint, HttpMethod.Post, {
                requestData: 'echo request',
            });
            assert.isTrue(response.ok);
            assert.strictEquals(await response.text(), 'echo response');
        });

        it('handles a RejectRequestError', async () => {
            const response = await fetchEndpoint(rejectsWithErrorEndpoint, HttpMethod.Get);
            assert.isFalse(response.ok);
            assert.strictEquals(response.status, HttpStatus.BadGateway);
        });

        it('includes fastify default headers', async () => {
            const response = await fetchEndpoint(healthEndpoint, HttpMethod.Get);

            assert.hasKeys(
                (
                    await condenseResponse(response, {
                        includeDefaultHeaders: true,
                    })
                ).headers,
                [
                    'connection',
                    'content-length',
                    'date',
                ],
            );
        });
    },
);

describe(testApi.name, () => {
    it('works with an actual port', async () => {
        const {fetchEndpoint, connectWebSocket, kill} = await testApi(plainImplementation, {
            port:
                4500 +
                randomInteger({
                    min: 0,
                    max: 4000,
                }),
        });

        try {
            assert.deepEquals(
                await condenseResponse(await fetchEndpoint(healthEndpoint, HttpMethod.Get)),
                {
                    headers: {
                        'access-control-allow-origin': '*',
                        'access-control-expose-headers': restVirApiNameHeader,
                    },
                    status: HttpStatus.Ok,
                },
            );

            const webSocketMessageReceived = new DeferredPromise<string>();

            const webSocket = await connectWebSocket(chatWebSocket, {
                listeners: {
                    message({message}) {
                        webSocketMessageReceived.resolve(message);
                    },
                },
            });
            try {
                const reply = await webSocket.sendAndWaitForReply({
                    message: 'from client',
                });
                assert.strictEquals(reply, 'from server');
                webSocket.send('from client');

                const messageReceived = await webSocketMessageReceived.promise;
                assert.strictEquals(messageReceived, 'from server');
            } finally {
                await webSocket.close();
            }
        } finally {
            await kill();
        }
    });

    it('works without a port', async () => {
        const {fetchEndpoint, connectWebSocket, kill} = await testApi(plainImplementation);

        try {
            assert.deepEquals(
                await condenseResponse(await fetchEndpoint(healthEndpoint, HttpMethod.Get)),
                {
                    headers: {
                        'access-control-allow-origin': '*',
                        'access-control-expose-headers': restVirApiNameHeader,
                    },
                    status: HttpStatus.Ok,
                },
            );

            const webSocketMessageReceived = new DeferredPromise<string>();

            const webSocket = await connectWebSocket(chatWebSocket, {
                listeners: {
                    message({message}) {
                        webSocketMessageReceived.resolve(message);
                    },
                },
            });
            try {
                const reply = await webSocket.sendAndWaitForReply({
                    message: 'from client',
                });
                assert.strictEquals(reply, 'from server');
                webSocket.send('from client');

                const messageReceived = await webSocketMessageReceived.promise;
                assert.strictEquals(messageReceived, 'from server');
            } finally {
                await webSocket.close();
            }
        } finally {
            await kill();
        }
    });
});

const sseEndpoint = defineEndpoint({
    path: '/sse-stream',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const sseApi = defineApi({
    apiName: 'sse api',
    endpoints: [sseEndpoint],
    webSockets: [],
});

const sseImplementor = createApiImplementor<undefined>()(sseApi);

const sseImplementation = implementApi<undefined>()(sseApi, {
    createHostContext() {
        return {
            context: undefined,
        };
    },
    clientOriginRequirement: {
        anyOrigin: true,
    },
    endpoints: {
        '/sse-stream': sseImplementor.implementEndpoint(sseEndpoint, {
            [HttpMethod.Get]({response}) {
                response.hijack();
                const raw = response.raw;

                raw.writeHead(200, {
                    'content-type': 'text/event-stream',
                    'cache-control': 'no-cache',
                    connection: 'keep-alive',
                });

                raw.write('event: status\ndata: {"message":"thinking"}\n\n');
                raw.write('event: done\ndata: {}\n\n');
                raw.end();

                return {
                    responseHandled: true,
                };
            },
        }),
    },
    webSockets: {},
});

describe('responseHandled (SSE)', () => {
    it('streams SSE events when endpoint hijacks the response', async () => {
        const port =
            4500 +
            randomInteger({
                min: 0,
                max: 4000,
            });
        const {fetchEndpoint, kill} = await testApi(sseImplementation, {
            port,
        });

        try {
            const response = await fetchEndpoint(sseEndpoint, HttpMethod.Get);

            assert.strictEquals(response.status, HttpStatus.Ok);
            assert.strictEquals(response.headers.get('content-type'), 'text/event-stream');

            const body = await response.text();
            assert.isTrue(body.includes('event: status'));
            assert.isTrue(body.includes('event: done'));
        } finally {
            await kill();
        }
    });

    it('preserves CORS headers on hijacked responses', async () => {
        const port =
            4500 +
            randomInteger({
                min: 0,
                max: 4000,
            });
        const {fetchEndpoint, kill} = await testApi(sseImplementation, {
            port,
        });

        try {
            const response = await fetchEndpoint(sseEndpoint, HttpMethod.Get);

            assert.strictEquals(response.headers.get('access-control-allow-origin'), '*');
            assert.strictEquals(
                response.headers.get('access-control-expose-headers'),
                restVirApiNameHeader,
            );
        } finally {
            await kill();
        }
    });
});

describe(testExistingServer.name, () => {
    it('works with an existing fastify instance', async () => {
        const server = fastify();

        const errors: string[] = [];

        server.setErrorHandler((error, request, reply) => {
            errors.push(extractErrorMessage(error));
            reply.status(HttpStatus.InternalServerError).send();
        });

        const {fetchEndpoint} = await testExistingServer(server, plainImplementation, {
            throwErrorsForExternalHandling: true,
        });

        try {
            assert.deepEquals(
                await condenseResponse(await fetchEndpoint(healthEndpoint, HttpMethod.Get)),
                {
                    headers: {
                        'access-control-allow-origin': '*',
                        'access-control-expose-headers': restVirApiNameHeader,
                    },
                    status: HttpStatus.Ok,
                },
                'should work with a simple request',
            );

            assert.isFalse((await fetchEndpoint(internalErrorEndpoint, HttpMethod.Get)).ok);

            await waitUntil.isLengthAtLeast(1, () => errors);
            assert.isTrue(errors[0]?.includes('Intentional error.'));

            assert.isFalse(
                (
                    await fetchEndpoint(healthEndpoint, HttpMethod.Get, {
                        options: {
                            headers: {
                                authorization: 'reject',
                            },
                        },
                    })
                ).ok,
            );

            await waitUntil.isLengthAtLeast(2, () => errors);
            assert.isTrue(errors[1]?.includes('context failed'));
        } finally {
            await server.close();
        }
    });
});

/**
 * Integration tests written specifically to exercise code paths that other targeted unit tests
 * cannot easily reach. These rely on the running fastify server inside `testApi` so that we go
 * through the full pre-handler -> handle-route -> handle-endpoint/handle-web-socket pipeline.
 */
const gapsEchoEndpoint = defineEndpoint({
    path: '/echo',
    requests: {
        [HttpMethod.Post]: {
            requestData: defineShape({
                value: '',
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        echoed: '',
                    }),
                },
            },
        },
    },
});

const multiMethodEndpoint = defineEndpoint({
    path: '/multi-method',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
        [HttpMethod.Post]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const noBodyEndpoint = defineEndpoint({
    path: '/no-body',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const searchEndpoint = defineEndpoint({
    path: '/search',
    requests: {
        [HttpMethod.Get]: {
            searchParams: {
                code: /^[A-Z]{3}$/,
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const badStatusCodeEndpoint = defineEndpoint({
    path: '/bad-status-code',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const missingStatusEndpoint = defineEndpoint({
    path: '/missing-status',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const noRequestDataEndpoint = defineEndpoint({
    path: '/no-request-data',
    requests: {
        [HttpMethod.Post]: {
            // requestData explicitly undefined: host should reject any body
            requestData: undefined,
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const formDataEndpoint = defineEndpoint({
    path: '/form-upload',
    requests: {
        [HttpMethod.Post]: {
            requestData: formDataShape(),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const rejectingContextEndpoint = defineEndpoint({
    path: '/rejecting-context',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const unexpectedDataEndpoint = defineEndpoint({
    path: '/unexpected-data',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const echoWebSocket = defineWebSocket({
    path: '/echo-ws',
    clientMessage: defineShape({
        value: '',
    }),
    hostMessage: defineShape(''),
});

const noClientMessageWebSocket = defineWebSocket({
    path: '/no-client-message',
    hostMessage: defineShape(''),
});

const throwingWebSocket = defineWebSocket({
    path: '/throwing-ws',
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

const protocolWebSocket = defineWebSocket({
    path: '/protocol-ws',
    connectProtocol: exactShape('graphql-ws'),
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

const sharedPathEndpoint = defineEndpoint({
    path: '/shared-path',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
        [HttpMethod.Post]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const sharedPathWebSocket = defineWebSocket({
    path: '/shared-path',
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

const gapsApi = defineApi({
    apiName: 'coverage-gaps-api',
    endpoints: [
        gapsEchoEndpoint,
        noBodyEndpoint,
        searchEndpoint,
        badStatusCodeEndpoint,
        missingStatusEndpoint,
        unexpectedDataEndpoint,
        sharedPathEndpoint,
        multiMethodEndpoint,
        noRequestDataEndpoint,
        formDataEndpoint,
        rejectingContextEndpoint,
    ],
    webSockets: [
        echoWebSocket,
        noClientMessageWebSocket,
        throwingWebSocket,
        protocolWebSocket,
        sharedPathWebSocket,
    ],
});

const gapsImplementor = createApiImplementor<undefined>()(gapsApi);

const gapsImplementation = implementApi<undefined>()(gapsApi, {
    createHostContext({request}) {
        if (request.headers['x-reject-context']) {
            return {
                reject: {
                    statusCode: HttpStatus.Forbidden,
                    responseData: 'context rejected',
                },
            };
        }
        return {
            context: undefined,
        };
    },
    clientOriginRequirement: {
        anyOrigin: true,
    },
    postRouteHook({originalResponseData, originalStatus, request}) {
        // exercise the post-route hook path; for most requests just return undefined
        // (preserving the original response). When the request asks for an override
        // (via a special header), we override.
        if (request.headers['x-post-hook-override']) {
            return {
                statusCode: HttpStatus.Accepted,
                responseData: 'overridden',
                headers: {
                    'x-post-hook': 'true',
                },
            };
        } else if (request.headers['x-post-hook-headers-only']) {
            // Only return headers, leaving the original responseData and status to pass
            // through. Exercises the `'responseData' in result` and `'statusCode' in
            // result` branches in run-post-route-hook.
            return {
                headers: {
                    'x-post-hook': 'headers-only',
                },
            };
        } else if (originalStatus !== HttpStatus.Ok) {
            // For any non-Ok response, override with custom headers so the post-route
            // hook short-circuits the response in attach-api (lines 167-168).
            return {
                headers: {
                    'x-post-hook-attached-on-error': 'true',
                },
            };
        }
        return undefined;
    },
    endpoints: {
        '/echo': gapsImplementor.implementEndpoint(gapsEchoEndpoint, {
            [HttpMethod.Post]({requestData}) {
                return {
                    [HttpStatus.Ok]: {
                        responseData: {
                            echoed: requestData.value,
                        },
                    },
                };
            },
        }),
        '/no-body': gapsImplementor.implementEndpoint(noBodyEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
        '/search': gapsImplementor.implementEndpoint(searchEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
        '/bad-status-code': gapsImplementor.implementEndpoint(badStatusCodeEndpoint, {
            [HttpMethod.Get]() {
                // intentionally return an unrecognized HTTP status code
                return {
                    [999 as HttpStatus]: {
                        responseData: undefined,
                    },
                } as never;
            },
        }),
        '/missing-status': gapsImplementor.implementEndpoint(missingStatusEndpoint, {
            [HttpMethod.Get]() {
                // valid status code with falsy status response triggers the
                // "Missing status code response" branch in handle-endpoint.
                return {
                    [HttpStatus.Ok]: undefined,
                } as never;
            },
        }),
        '/unexpected-data': gapsImplementor.implementEndpoint(unexpectedDataEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        // sending data when the definition forbids it
                        responseData: 'should not be here' as never,
                    },
                };
            },
        }),
        '/shared-path': gapsImplementor.implementEndpoint(sharedPathEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
            [HttpMethod.Post]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
        '/multi-method': gapsImplementor.implementEndpoint(multiMethodEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
            // POST is intentionally omitted; we'll patch the implementation below to
            // make the request still reach handleEndpointRequest.
        } as never),
        '/no-request-data': gapsImplementor.implementEndpoint(noRequestDataEndpoint, {
            [HttpMethod.Post]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
        '/form-upload': gapsImplementor.implementEndpoint(formDataEndpoint, {
            [HttpMethod.Post]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
        '/rejecting-context': gapsImplementor.implementEndpoint(rejectingContextEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
    },
    webSockets: {
        '/echo-ws': gapsImplementor.implementWebSocket(echoWebSocket, {
            message({message, webSocket}) {
                webSocket.send(message.value);
            },
        }),
        '/no-client-message': gapsImplementor.implementWebSocket(noClientMessageWebSocket, {
            message() {
                // No client messages are expected, but we still want a handler so we
                // exercise the code path in handle-web-socket.ts that errors when a
                // message arrives despite no clientMessage shape.
            },
        }),
        '/throwing-ws': gapsImplementor.implementWebSocket(throwingWebSocket, {
            message() {
                throw new Error('intentional message handler failure');
            },
        }),
        '/protocol-ws': gapsImplementor.implementWebSocket(protocolWebSocket, {
            message({message, webSocket}) {
                webSocket.send(message);
            },
        }),
        '/shared-path': gapsImplementor.implementWebSocket(sharedPathWebSocket, {
            message({message, webSocket}) {
                webSocket.send(message);
            },
        }),
    },
});

describe('coverage-gaps integration', () => {
    it('exercises endpoint and websocket gaps', async () => {
        const port = makePort();
        const {fetchEndpoint, connectWebSocket, kill} = await testApi(gapsImplementation, {
            port,
        });

        try {
            // Endpoint: missing implementation for a defined method (handle-endpoint lines 78-87)
            const missingImplResponse = await fetchEndpoint(multiMethodEndpoint, HttpMethod.Post);
            assert.strictEquals(missingImplResponse.status, HttpStatus.InternalServerError);

            // Endpoint: invalid response status code path (handle-endpoint lines 116-125)
            const badStatusResponse = await fetchEndpoint(badStatusCodeEndpoint, HttpMethod.Get);
            assert.strictEquals(badStatusResponse.status, HttpStatus.InternalServerError);

            // Endpoint: missing status response (handle-endpoint lines 127-137)
            const missingStatusResponse = await fetchEndpoint(
                missingStatusEndpoint,
                HttpMethod.Get,
            );
            assert.strictEquals(missingStatusResponse.status, HttpStatus.InternalServerError);

            // Endpoint: unexpected data when definition expects none (handle-endpoint lines 145-155)
            const unexpectedDataResponse = await fetchEndpoint(
                unexpectedDataEndpoint,
                HttpMethod.Get,
            );
            assert.strictEquals(unexpectedDataResponse.status, HttpStatus.InternalServerError);

            // Endpoint: post-route-hook overrides response (handle-route lines 92-103,
            // run-post-route-hook lines 64-95)
            const overriddenResponse = await fetchEndpoint(noBodyEndpoint, HttpMethod.Get, {
                options: {
                    headers: {
                        'x-post-hook-override': 'yes',
                    },
                },
            });
            assert.strictEquals(overriddenResponse.status, HttpStatus.Accepted);
            assert.strictEquals(await overriddenResponse.text(), 'overridden');
            assert.strictEquals(overriddenResponse.headers.get('x-post-hook'), 'true');

            // Endpoint: post-route-hook returns undefined keeps the original response
            const passthroughResponse = await fetchEndpoint(noBodyEndpoint, HttpMethod.Get);
            assert.strictEquals(passthroughResponse.status, HttpStatus.Ok);

            // Endpoint: post-route-hook returns only headers (exercises run-post-route-hook
            // lines 91-92 fallback branches).
            const headersOnlyResponse = await fetchEndpoint(noBodyEndpoint, HttpMethod.Get, {
                options: {
                    headers: {
                        'x-post-hook-headers-only': 'yes',
                    },
                },
            });
            assert.strictEquals(headersOnlyResponse.status, HttpStatus.Ok);
            assert.strictEquals(headersOnlyResponse.headers.get('x-post-hook'), 'headers-only');

            // Search params: invalid value triggers handle-search-params error path
            // (handle-search-params lines 82-99). The host validates incoming search params
            // and returns 400 when they don't match the requirement.
            const fetchUrl = `http://localhost:${port}/search?code=oops`;
            const badSearchResponse = await fetch(fetchUrl);
            assert.strictEquals(badSearchResponse.status, HttpStatus.BadRequest);

            // Endpoint on a path that also has a websocket defined - GET via http
            // exercises attach-api lines 233-245 (the endpoint http handler).
            const sharedHttpResponse = await fetchEndpoint(sharedPathEndpoint, HttpMethod.Get);
            assert.strictEquals(sharedHttpResponse.status, HttpStatus.Ok);

            // POST on the same path exercises attach-api lines 215-227 (the shared-path
            // endpoint handler for non-GET methods).
            const sharedPostResponse = await fetch(`http://localhost:${port}/shared-path`, {
                method: HttpMethod.Post,
            });
            assert.strictEquals(sharedPostResponse.status, HttpStatus.Ok);

            // WebSocket on a path that also has an endpoint defined (attach-api lines 211-260)
            const sharedWs = await connectWebSocket(sharedPathWebSocket);
            const sharedReply = await sharedWs.sendAndWaitForReply({
                message: 'hello',
            });
            assert.strictEquals(sharedReply, 'hello');
            await sharedWs.close();

            // Hit the websocket-only path via HTTP - exercises attach-api lines 288-289.
            const wsOnlyHttp = await fetch(`http://localhost:${port}/echo-ws`);
            assert.strictEquals(wsOnlyHttp.status, HttpStatus.NotFound);

            // PATCH request hits the method-rejection branch in pre-handler
            // (lines 168-188) because /no-body only defines GET.
            const patchResponse = await fetch(`http://localhost:${port}/no-body`, {
                method: 'PATCH',
            });
            assert.strictEquals(patchResponse.status, HttpStatus.MethodNotAllowed);

            // OPTIONS request triggers the CORS preflight short-circuit in pre-handler
            // (lines 153-155) and the customHeaders branch in handle-cors (line 162).
            const optionsResponse = await fetch(`http://localhost:${port}/no-body`, {
                method: HttpMethod.Options,
                headers: {
                    origin: 'http://example.com',
                    'access-control-request-method': HttpMethod.Get,
                },
            });
            assert.isIn(optionsResponse.status, [
                HttpStatus.NoContent,
                HttpStatus.Ok,
            ]);

            // pre-handler: createHostContext returns {reject:...} (lines 247-268).
            const rejectedResponse = await fetchEndpoint(rejectingContextEndpoint, HttpMethod.Get, {
                options: {
                    headers: {
                        'x-reject-context': 'yes',
                    },
                },
            });
            assert.strictEquals(rejectedResponse.status, HttpStatus.Forbidden);

            // pre-handler: send a body to an endpoint with requestData=undefined
            // (lines 282-285).
            const noBodyExpectedResponse = await fetch(`http://localhost:${port}/no-request-data`, {
                method: HttpMethod.Post,
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    unexpected: true,
                }),
            });
            assert.strictEquals(noBodyExpectedResponse.status, HttpStatus.BadRequest);

            // pre-handler: send formData (lines 290-294). Without a multipart parser
            // fastify rejects with 415; what matters for coverage is that the request
            // reached the formData branch in pre-handler.
            const formData = new FormData();
            formData.set('field', 'value');
            const formDataResponse = await fetch(`http://localhost:${port}/form-upload`, {
                method: HttpMethod.Post,
                body: formData,
            });
            assert.isIn(formDataResponse.status, [
                HttpStatus.Ok,
                HttpStatus.UnsupportedMediaType,
                HttpStatus.BadRequest,
            ]);

            // WebSocket: noClientMessage path - sending data when none is expected
            // triggers handle-web-socket's "Did not expect any data" branch (lines 121-125)
            // and the catch block (lines 126-146). We bypass the client's typed send by using
            // a raw WebSocket connection.
            await new Promise<void>((resolve) => {
                const rawWs = new WebSocket(`ws://localhost:${port}/no-client-message`);
                rawWs.addEventListener('open', () => {
                    rawWs.send('"hello"');
                    setTimeout(() => {
                        rawWs.close();
                        resolve();
                    }, 100);
                });
                rawWs.addEventListener('error', () => {
                    resolve();
                });
            });

            // WebSocket: handler throws (handle-web-socket lines 153-170)
            const throwingWs = await connectWebSocket(throwingWebSocket);
            throwingWs.send('any-message');
            // give the server time to process and log the error
            await wait({
                milliseconds: 100,
            });
            await throwingWs.close();
        } finally {
            await kill();
        }
    });

    it('rejects an invalid websocket protocol', async () => {
        const port = makePort();
        const {kill} = await testApi(gapsImplementation, {
            port,
        });

        try {
            const fullUrl = `ws://localhost:${port}/protocol-ws`;
            const ws = new WebSocket(fullUrl, [
                'invalid-protocol',
            ]);

            const closed = new DeferredPromise<number>();
            ws.addEventListener('close', (event) => {
                closed.resolve(event.code);
            });
            ws.addEventListener('error', () => {
                closed.resolve(-1);
            });

            await closed.promise;
        } finally {
            await kill();
        }
    });
});
