import {assert, waitUntil} from '@augment-vir/assert';
import {HttpMethod, HttpStatus, wait} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineEndpoint, defineWebSocket} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';
import {createMockHost} from './mock-host.js';

const echoEndpoint = defineEndpoint({
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

const searchEndpoint = defineEndpoint({
    path: '/search',
    requests: {
        [HttpMethod.Get]: {
            searchParams: {
                query: defineShape(''),
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        results: [''],
                    }),
                },
            },
        },
    },
});

const unsupportedMethodEndpoint = defineEndpoint({
    path: '/no-impl',
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

const errorThrowingEndpoint = defineEndpoint({
    path: '/throws',
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

const chatWebSocket = defineWebSocket({
    path: '/chat',
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

const greetingWebSocket = defineWebSocket({
    path: '/greeting',
    hostMessage: defineShape(''),
});

const closableWebSocket = defineWebSocket({
    path: '/closable',
    hostMessage: defineShape(''),
});

const mockApi = defineApi({
    apiName: 'mock-host test api',
    endpoints: [
        echoEndpoint,
        searchEndpoint,
        unsupportedMethodEndpoint,
        errorThrowingEndpoint,
    ],
    webSockets: [
        chatWebSocket,
        greetingWebSocket,
        closableWebSocket,
    ],
});

function makeMockClient<Context = undefined>(
    options: Parameters<typeof createMockHost<typeof mockApi, Context>>[1] = {},
) {
    const client = createMockHost(mockApi, options);
    return {
        client,
    };
}

describe(createMockHost.name, () => {
    describe('endpoint mocking', () => {
        it('routes a fetch to the matching mock endpoint implementation', async () => {
            const {client} = makeMockClient({
                endpoints: {
                    '/echo': {
                        [HttpMethod.Post]({requestData}) {
                            return {
                                [HttpStatus.Ok]: {
                                    responseData: {
                                        echoed: requestData.value,
                                    },
                                },
                            };
                        },
                    },
                },
            });

            const result = await client.fetch(echoEndpoint, HttpMethod.Post, {
                requestData: {
                    value: 'hello',
                },
            });

            assert.isDefined(result.Ok);
            assert.deepEquals(result.Ok.responseData, {
                echoed: 'hello',
            });
        });

        it('passes parsed search params to the implementation', async () => {
            let receivedQuery: string | undefined;
            const {client} = makeMockClient({
                endpoints: {
                    '/search': {
                        [HttpMethod.Get]({searchParams}) {
                            const query = searchParams?.query as string;
                            receivedQuery = query;
                            return {
                                [HttpStatus.Ok]: {
                                    responseData: {
                                        results: [query],
                                    },
                                },
                            };
                        },
                    },
                },
            });

            await client.fetch(searchEndpoint, HttpMethod.Get, {
                searchParams: {
                    query: 'world',
                },
            });

            assert.strictEquals(receivedQuery, 'world');
        });

        it('passes a created host context into the implementation', async () => {
            let receivedContext: {user: string} | undefined;
            const {client} = makeMockClient<{user: string}>({
                createHostContext: () => ({
                    context: {
                        user: 'alice',
                    },
                }),
                endpoints: {
                    '/echo': {
                        [HttpMethod.Post]({context, requestData}) {
                            receivedContext = context;
                            return {
                                [HttpStatus.Ok]: {
                                    responseData: {
                                        echoed: requestData.value,
                                    },
                                },
                            };
                        },
                    },
                },
            });

            await client.fetch(echoEndpoint, HttpMethod.Post, {
                requestData: {
                    value: 'ignored',
                },
            });

            assert.deepEquals(receivedContext, {
                user: 'alice',
            });
        });

        it('returns 501 NotImplemented when the path has no mock implementation', async () => {
            const {client} = makeMockClient();

            const result = await client.fetch(unsupportedMethodEndpoint, HttpMethod.Get);

            assert.isDefined(result.unexpectedError);
            assert.strictEquals(result.unexpectedError.status, HttpStatus.NotImplemented);
        });

        it('returns 500 InternalServerError when the implementation throws', async () => {
            const {client} = makeMockClient({
                endpoints: {
                    '/throws': {
                        [HttpMethod.Get]() {
                            throw new Error('boom');
                        },
                    },
                },
            });

            const result = await client.fetch(errorThrowingEndpoint, HttpMethod.Get);

            assert.isDefined(result.unexpectedError);
            assert.strictEquals(result.unexpectedError.status, HttpStatus.InternalServerError);
        });

        it('returns the rejected status when createHostContext returns {reject}', async () => {
            const {client} = makeMockClient({
                createHostContext: () => ({
                    reject: {
                        statusCode: HttpStatus.Unauthorized,
                        responseData: 'nope',
                    },
                }),
                endpoints: {
                    '/echo': {
                        [HttpMethod.Post]() {
                            throw new Error('should not run when context rejects');
                        },
                    },
                },
            });

            const result = await client.fetch(echoEndpoint, HttpMethod.Post, {
                requestData: {
                    value: 'ignored',
                },
            });

            assert.isDefined(result.unexpectedError);
            assert.strictEquals(result.unexpectedError.status, HttpStatus.Unauthorized);
            assert.strictEquals(result.unexpectedError.responseData, 'nope');
        });
    });

    describe('WebSocket mocking', () => {
        it('routes a client send to the message implementation and replies via webSocket.send', async () => {
            const {client} = makeMockClient({
                webSockets: {
                    '/chat': {
                        message({message, webSocket}) {
                            webSocket.send(`echo: ${message}`);
                        },
                    },
                },
            });

            const socket = await client.connectWebSocket(chatWebSocket);

            const reply = await socket.sendAndWaitForReply({
                message: 'hi',
            });

            assert.strictEquals(reply, 'echo: hi');
            await socket.close();
        });

        it('invokes the open handler after the connection opens', async () => {
            const opens: number[] = [];
            const client = createMockHost(mockApi, {
                webSockets: {
                    '/greeting': {
                        open({webSocket}) {
                            opens.push(opens.length);
                            webSocket.send('welcome');
                        },
                    },
                },
            });

            const received: unknown[] = [];
            const socket = await client.connectWebSocket(greetingWebSocket, {
                listeners: {
                    message({message}) {
                        received.push(message);
                    },
                },
            });

            await waitUntil.isTrue(() => received.length >= 1);
            assert.strictEquals(received[0], 'welcome');
            assert.strictEquals(opens.length, 1);
            await socket.close();
        });

        it('invokes the close handler when the client closes the socket', async () => {
            let closeCount = 0;
            const client = createMockHost(mockApi, {
                webSockets: {
                    '/closable': {
                        close() {
                            closeCount++;
                        },
                    },
                },
            });
            const socket = await client.connectWebSocket(closableWebSocket);

            await socket.close();
            await wait({
                milliseconds: 5,
            });
            assert.strictEquals(closeCount, 1);
        });

        it('emits an error event when the message handler throws', async () => {
            const client = createMockHost(mockApi, {
                webSockets: {
                    '/chat': {
                        message() {
                            throw new Error('mock-host crash');
                        },
                    },
                },
            });

            const socket = await client.connectWebSocket(chatWebSocket);

            const errors: string[] = [];
            socket.addEventListener('error', ({event}) => {
                errors.push(event.type);
            });

            await assert.throws(
                () =>
                    socket.sendAndWaitForReply({
                        message: 'ping',
                        timeout: {
                            milliseconds: 50,
                        },
                    }),
                {
                    matchMessage: 'got no reply',
                },
            );
            assert.isLengthAtLeast(errors, 1);
            await socket.close();
        });
    });
});
