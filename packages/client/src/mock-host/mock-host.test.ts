import {assert, waitUntil} from '@augment-vir/assert';
import {HttpMethod, HttpStatus, wait} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineEndpoint, defineWebSocket, formDataShape} from '@rest-vir/api';
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

const uploadEndpoint = defineEndpoint({
    path: '/upload',
    requests: {
        [HttpMethod.Post]: {
            requestData: formDataShape(),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        receivedKeys: [''],
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

const handledEndpoint = defineEndpoint({
    path: '/handled',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.NoContent]: {
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
        handledEndpoint,
        uploadEndpoint,
    ],
    webSockets: [
        chatWebSocket,
        greetingWebSocket,
        closableWebSocket,
    ],
});

describe(createMockHost.name, () => {
    it('routes a fetch to the matching mock endpoint implementation', async () => {
        const client = createMockHost(mockApi, {
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

        const result = await client.fetch(echoEndpoint).POST({
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
        const client = createMockHost(mockApi, {
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

        await client.fetch(searchEndpoint).GET({
            searchParams: {
                query: 'world',
            },
        });

        assert.strictEquals(receivedQuery, 'world');
    });

    it('passes a created host context into the implementation', async () => {
        let receivedContext: {user: string} | undefined;
        const client = createMockHost<typeof mockApi, {user: string}>(mockApi, {
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

        await client.fetch(echoEndpoint).POST({
            requestData: {
                value: 'ignored',
            },
        });

        assert.deepEquals(receivedContext, {
            user: 'alice',
        });
    });

    it('returns 501 NotImplemented when the path has no mock implementation', async () => {
        const client = createMockHost(mockApi);

        const result = await client.fetch(unsupportedMethodEndpoint).GET();

        assert.isDefined(result.unexpectedError);
        assert.strictEquals(result.unexpectedError.status, HttpStatus.NotImplemented);
    });

    it('returns 500 InternalServerError when the implementation throws', async () => {
        const client = createMockHost(mockApi, {
            endpoints: {
                '/throws': {
                    [HttpMethod.Get]() {
                        throw new Error('boom');
                    },
                },
            },
        });

        const result = await client.fetch(errorThrowingEndpoint).GET();

        assert.isDefined(result.unexpectedError);
        assert.strictEquals(result.unexpectedError.status, HttpStatus.InternalServerError);
    });

    it('returns the rejected status when createHostContext returns {reject}', async () => {
        const client = createMockHost(mockApi, {
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

        const result = await client.fetch(echoEndpoint).POST({
            requestData: {
                value: 'ignored',
            },
        });

        assert.isDefined(result.unexpectedError);
        assert.strictEquals(result.unexpectedError.status, HttpStatus.Unauthorized);
        assert.strictEquals(result.unexpectedError.responseData, 'nope');
    });

    it('returns 204 NoContent when the implementation returns {responseHandled: true}', async () => {
        const client = createMockHost(mockApi, {
            endpoints: {
                '/handled': {
                    [HttpMethod.Get]() {
                        return {
                            responseHandled: true,
                        };
                    },
                },
            },
        });

        const result = await client.fetch(handledEndpoint).GET();

        assert.isDefined(result.NoContent);
        assert.strictEquals(result.NoContent.status, HttpStatus.NoContent);
    });

    it('passes FormData request bodies through to the implementation untouched', async () => {
        let receivedBody: unknown;
        const client = createMockHost(mockApi, {
            endpoints: {
                '/upload': {
                    [HttpMethod.Post]({requestData}) {
                        receivedBody = requestData;
                        return {
                            [HttpStatus.Ok]: {
                                responseData: {
                                    receivedKeys:
                                        requestData instanceof FormData
                                            ? Array.from(requestData.keys())
                                            : [],
                                },
                            },
                        };
                    },
                },
            },
        });

        const formData = new FormData();
        formData.append('file', new Blob(['hello']), 'hello.txt');

        const result = await client.fetch(uploadEndpoint).POST({
            requestData: formData,
        });

        assert.isTrue(receivedBody instanceof FormData);
        assert.isDefined(result.Ok);
        assert.deepEquals(result.Ok.responseData, {
            receivedKeys: ['file'],
        });
    });

    it('returns 500 when the implementation returns an empty result', async () => {
        const client = createMockHost(mockApi, {
            endpoints: {
                '/handled': {
                    [HttpMethod.Get]() {
                        return {} as never;
                    },
                },
            },
        });

        const result = await client.fetch(handledEndpoint).GET();

        assert.isDefined(result.unexpectedError);
        assert.strictEquals(result.unexpectedError.status, HttpStatus.InternalServerError);
    });

    it('returns 500 when the implementation returns an invalid HTTP status key', async () => {
        const client = createMockHost(mockApi, {
            endpoints: {
                '/no-impl': {
                    [HttpMethod.Get]() {
                        return {
                            999: {
                                responseData: undefined,
                            },
                        } as never;
                    },
                },
            },
        });

        const result = await client.fetch(unsupportedMethodEndpoint).GET();

        assert.isDefined(result.unexpectedError);
        assert.strictEquals(result.unexpectedError.status, HttpStatus.InternalServerError);
    });

    it('routes a client send to the message implementation and replies via webSocket.send', async () => {
        const client = createMockHost(mockApi, {
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

    it('exposes readyState/sendFromHost/close on the host-facing webSocket', async () => {
        let observedReadyState: number | undefined;
        let closed = false;
        const client = createMockHost(mockApi, {
            webSockets: {
                '/chat': {
                    message({message, webSocket}) {
                        observedReadyState = webSocket.readyState;
                        webSocket.sendFromHost(`alias: ${message}`);
                    },
                    close() {
                        closed = true;
                    },
                },
            },
        });

        const socket = await client.connectWebSocket(chatWebSocket);
        const reply = await socket.sendAndWaitForReply({
            message: 'hi',
        });

        assert.strictEquals(reply, 'alias: hi');
        assert.isDefined(observedReadyState);
        await socket.close();
        await waitUntil.isTrue(() => closed);
    });

    it('lets the host implementation close the socket via webSocket.close', async () => {
        const client = createMockHost(mockApi, {
            webSockets: {
                '/chat': {
                    message({webSocket}) {
                        webSocket.close();
                    },
                },
            },
        });

        const socket = await client.connectWebSocket(chatWebSocket);
        socket.send('please close');
        await waitUntil.isTrue(() => socket.readyState === 3);
    });

    it('skips the close handler when createHostContext rejects', async () => {
        let closeHandlerRan = false;
        let rejectActive = false;
        const client = createMockHost<typeof mockApi, undefined>(mockApi, {
            createHostContext: () =>
                rejectActive
                    ? {
                          reject: {
                              statusCode: HttpStatus.Unauthorized,
                              responseData: 'nope',
                          },
                      }
                    : {
                          context: undefined,
                      },
            webSockets: {
                '/closable': {
                    close() {
                        closeHandlerRan = true;
                    },
                },
            },
        });

        const socket = await client.connectWebSocket(closableWebSocket);
        rejectActive = true;
        await socket.close();
        await wait({
            milliseconds: 5,
        });
        assert.isFalse(closeHandlerRan);
    });

    it('swallows a throw from the close handler', async () => {
        let closeHandlerRan = false;
        const client = createMockHost(mockApi, {
            webSockets: {
                '/closable': {
                    close() {
                        closeHandlerRan = true;
                        throw new Error('close boom');
                    },
                },
            },
        });

        const socket = await client.connectWebSocket(closableWebSocket);
        await socket.close();
        await waitUntil.isTrue(() => closeHandlerRan);
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

    it('closes the websocket when createHostContext returns {reject}', async () => {
        const client = createMockHost<typeof mockApi, undefined>(mockApi, {
            createHostContext: () => ({
                reject: {
                    statusCode: HttpStatus.Unauthorized,
                    responseData: 'nope',
                },
            }),
            webSockets: {
                '/chat': {
                    message() {
                        throw new Error('should not run when context rejects');
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
    });

    it('emits an error event when createHostContext throws', async () => {
        const client = createMockHost<typeof mockApi, undefined>(mockApi, {
            createHostContext: () => {
                throw new Error('context boom');
            },
            webSockets: {
                '/chat': {
                    message() {
                        throw new Error('should not run when context throws');
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

    it('is a no-op when close is called more than once', async () => {
        const client = createMockHost(mockApi);
        const socket = await client.connectWebSocket(closableWebSocket);

        await socket.close();
        await socket.close();
    });

    it('parses an undefined message sent from the client', async () => {
        let receivedMessage: unknown = 'sentinel';
        const client = createMockHost(mockApi, {
            webSockets: {
                '/greeting': {
                    message({message}) {
                        receivedMessage = message;
                    },
                },
            },
        });

        const socket = await client.connectWebSocket(greetingWebSocket);
        socket.send(undefined);

        await waitUntil.isTrue(() => receivedMessage !== 'sentinel');
        assert.strictEquals(receivedMessage, undefined);
        await socket.close();
    });

    it('drops a client send made after the socket has been closed', async () => {
        let messageCount = 0;
        const client = createMockHost(mockApi, {
            webSockets: {
                '/chat': {
                    message() {
                        messageCount++;
                    },
                },
            },
        });

        const socket = await client.connectWebSocket(chatWebSocket);
        await socket.close();

        socket.send('after-close');
        await wait({
            milliseconds: 5,
        });
        assert.strictEquals(messageCount, 0);
    });

    it('drops a client send when no implementations are registered for the path', async () => {
        const client = createMockHost(mockApi);
        const socket = await client.connectWebSocket(chatWebSocket);
        socket.send('ignored');
        await wait({
            milliseconds: 5,
        });
        await socket.close();
    });

    it('drops a client send when no message handler is defined', async () => {
        let openHandlerRan = false;
        const client = createMockHost(mockApi, {
            webSockets: {
                '/chat': {
                    open() {
                        openHandlerRan = true;
                    },
                },
            },
        });

        const socket = await client.connectWebSocket(chatWebSocket);
        await waitUntil.isTrue(() => openHandlerRan);
        socket.send('ignored');
        await wait({
            milliseconds: 5,
        });
        await socket.close();
    });

    it('stops dispatching to a removed event listener', async () => {
        const client = createMockHost(mockApi, {
            webSockets: {
                '/chat': {
                    message({message, webSocket}) {
                        webSocket.send(`echo: ${message}`);
                    },
                },
            },
        });

        const socket = await client.connectWebSocket(chatWebSocket);

        const received: unknown[] = [];
        const listener = ({message}: {message: unknown}) => {
            received.push(message);
        };
        socket.addEventListener('message', listener);
        socket.removeEventListener('message', listener);
        socket.removeEventListener('close', listener);

        await socket.sendAndWaitForReply({
            message: 'hi',
        });

        assert.isLengthExactly(received, 0);
        await socket.close();
    });
});
