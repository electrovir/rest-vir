import {assert, waitUntil} from '@augment-vir/assert';
import {
    DeferredPromise,
    extractErrorMessage,
    HttpMethod,
    HttpStatus,
    randomInteger,
} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineEndpoint, defineWebSocket} from '@rest-vir/api';
import {restVirApiNameHeader} from '@rest-vir/client';
import fastify from 'fastify';
import {exactShape} from 'object-shape-tester';
import {implementApi} from '../../implementation/implement-api.js';
import {createApiImplementor} from '../../implementation/implementor.js';
import {RejectRequestError} from '../../implementation/reject-request.error.js';
import {condenseResponse, describeApi, testApi, testExistingServer} from './test-api.js';

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
    ({fetchEndpoint}) => {
        it.only('responds to a request', async () => {
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
