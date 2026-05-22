import {createApiImplementor, HttpMethod, HttpStatus, implementApi} from '@rest-vir/host';
import {
    demoApi,
    demoClockWebSocket,
    demoEchoEndpoint,
    demoEchoWebSocket,
    demoFilesEndpoint,
    demoHealthEndpoint,
    demoItemsEndpoint,
    demoRoomWebSocket,
    demoSearchEndpoint,
    demoSecretEndpoint,
    demoTeapotEndpoint,
    demoUploadEndpoint,
    demoUserEndpoint,
} from '../demo-api.js';

type ServerContext = {
    callCount: number;
};

const serverContext: ServerContext = {
    callCount: 0,
};

const knownUsers: Readonly<Record<string, string>> = {
    '1': 'Alice',
    '2': 'Bob',
};

const {implementEndpoint, implementWebSocket} = createApiImplementor<ServerContext>()(demoApi);

const healthImplementation = implementEndpoint(demoHealthEndpoint, {
    [HttpMethod.Get]() {
        return {
            [HttpStatus.Ok]: {
                responseData: 'ok',
            },
        };
    },
});

const echoImplementation = implementEndpoint(demoEchoEndpoint, {
    [HttpMethod.Post]({requestData}) {
        return {
            [HttpStatus.Accepted]: {
                responseData: {
                    echoed: requestData.message.repeat(requestData.count),
                    length: requestData.message.length * requestData.count,
                },
            },
        };
    },
});

const userImplementation = implementEndpoint(demoUserEndpoint, {
    [HttpMethod.Get]({request}) {
        const userId = (request.params as Readonly<{userId: string}>).userId;
        const name = knownUsers[userId];
        if (name) {
            return {
                [HttpStatus.Ok]: {
                    responseData: {
                        id: userId,
                        name,
                    },
                },
            };
        }
        return {
            [HttpStatus.NotFound]: {
                responseData: {
                    missingId: userId,
                },
            },
        };
    },
});

const searchImplementation = implementEndpoint(demoSearchEndpoint, {
    [HttpMethod.Get]({searchParams}) {
        const params = searchParams || {
            query: '',
            tags: [],
            code: '',
        };
        return {
            [HttpStatus.PartialContent]: {
                responseData: {
                    query: params.query,
                    tags: params.tags || [],
                    code: params.code,
                },
            },
        };
    },
});

const filesImplementation = implementEndpoint(demoFilesEndpoint, {
    [HttpMethod.Get]({request}) {
        const wildcard = (request.params as Readonly<{'*': string}>)['*'];
        return {
            [HttpStatus.Ok]: {
                responseData: {
                    wildcard,
                },
            },
        };
    },
});

const uploadImplementation = implementEndpoint(demoUploadEndpoint, {
    /**
     * `@fastify/multipart` doesn't populate `request.body`, so the multipart parts are walked via
     * the async iterator the plugin exposes on the request.
     */
    async [HttpMethod.Post]({request}) {
        const receivedKeys: string[] = [];
        for await (const part of request.parts()) {
            receivedKeys.push(part.fieldname);
        }
        return {
            [HttpStatus.Created]: {
                responseData: {
                    receivedKeys,
                },
            },
        };
    },
});

const secretImplementation = implementEndpoint(demoSecretEndpoint, {
    [HttpMethod.Get]({requestHeaders}) {
        const token = requestHeaders['x-demo-token'];
        return {
            [HttpStatus.Ok]: {
                responseData: {
                    secret: `accepted ${Array.isArray(token) ? token.join(',') : token || ''}`,
                },
            },
        };
    },
});

const itemsImplementation = implementEndpoint(demoItemsEndpoint, {
    [HttpMethod.Put]({request, requestData}) {
        const itemId = (request.params as Readonly<{itemId: string}>).itemId;
        return {
            [HttpStatus.Created]: {
                responseData: {
                    replaced: `${itemId}=${requestData.value}`,
                },
            },
        };
    },
    [HttpMethod.Patch]({request, requestData}) {
        const itemId = (request.params as Readonly<{itemId: string}>).itemId;
        return {
            [HttpStatus.Ok]: {
                responseData: {
                    patched: `${itemId}+=${requestData.value}`,
                },
            },
        };
    },
    [HttpMethod.Delete]() {
        return {
            [HttpStatus.NoContent]: {
                responseData: undefined,
            },
        };
    },
});

const teapotImplementation = implementEndpoint(demoTeapotEndpoint, {
    [HttpMethod.Get]() {
        return {
            [HttpStatus.ImATeapot]: {
                responseData: {
                    short: 'and stout',
                    tall: 4,
                    stout: true,
                },
            },
        };
    },
});

const echoWebSocketImplementation = implementWebSocket(demoEchoWebSocket, {
    message({message, webSocket}) {
        webSocket.send({
            echoed: message,
            receivedAt: Date.now(),
        });
    },
});

const clockWebSocketImplementation = implementWebSocket(demoClockWebSocket, {
    open({webSocket}) {
        let tick = 0;
        const interval = setInterval(() => {
            tick += 1;
            webSocket.send({
                tick,
            });
        }, 1000);
        webSocket.addEventListener('close', () => clearInterval(interval));
    },
});

const roomWebSocketImplementation = implementWebSocket(demoRoomWebSocket, {
    open({webSocket, searchParams, protocols, request}) {
        const roomId = (request.params as Readonly<{roomId: string}>).roomId;
        webSocket.send(`welcome ${searchParams.nickname} to ${roomId} via ${protocols.join(', ')}`);
    },
    message({message, webSocket}) {
        webSocket.send(`reply: ${message}`);
    },
});

export const demoApiImplementation = implementApi<ServerContext>()(demoApi, {
    /** CORS preflight needs to advertise any custom request headers we accept. */
    customHeaders: ['x-demo-token'],
    createHostContext() {
        return {
            context: serverContext,
        };
    },
    endpoints: [
        healthImplementation,
        echoImplementation,
        userImplementation,
        searchImplementation,
        filesImplementation,
        uploadImplementation,
        secretImplementation,
        itemsImplementation,
        teapotImplementation,
    ],
    webSockets: [
        echoWebSocketImplementation,
        clockWebSocketImplementation,
        roomWebSocketImplementation,
    ],
});
