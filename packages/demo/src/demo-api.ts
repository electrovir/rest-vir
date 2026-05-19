import {
    defineApi,
    defineEndpoint,
    defineWebSocket,
    formDataShape,
    HttpMethod,
    HttpStatus,
} from '@rest-vir/api';
import {defineShape, exactShape, nullableShape} from 'object-shape-tester';

export const apiServerStartPort = 6734;

/** Minimal endpoint: GET with no request data and a single literal response. */
export const demoHealthEndpoint = defineEndpoint({
    path: '/health',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: exactShape('ok'),
                },
            },
        },
    },
});

/** POST with a request body shape that the server echoes back. Returns 202 Accepted. */
export const demoEchoEndpoint = defineEndpoint({
    path: '/echo',
    requests: {
        [HttpMethod.Post]: {
            requestData: defineShape({
                message: '',
                count: 1,
            }),
            responses: {
                [HttpStatus.Accepted]: {
                    responseData: defineShape({
                        echoed: '',
                        length: 1,
                    }),
                },
            },
        },
    },
});

/** Named path param plus a not-found error response. */
export const demoUserEndpoint = defineEndpoint({
    path: '/users/:userId',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        name: '',
                    }),
                },
                [HttpStatus.NotFound]: {
                    responseData: defineShape({
                        missingId: '',
                    }),
                },
            },
        },
    },
});

/**
 * Search params combining a required string shape, an optional shape, and a RegExp. Returns 206
 * PartialContent to signal that the result is a slice of the full search space.
 */
export const demoSearchEndpoint = defineEndpoint({
    path: '/search',
    requests: {
        [HttpMethod.Get]: {
            searchParams: {
                query: defineShape(''),
                tags: nullableShape(['']),
                code: /^[A-Z]{3}$/,
            },
            responses: {
                [HttpStatus.PartialContent]: {
                    responseData: defineShape({
                        query: '',
                        tags: [''],
                        code: '',
                    }),
                },
            },
        },
    },
});

/** Wildcard path: everything after `/files/` is bundled into a single path param. */
export const demoFilesEndpoint = defineEndpoint({
    path: '/files/*',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        wildcard: '',
                    }),
                },
            },
        },
    },
});

/** Form data upload returning 201 Created with the list of submitted keys. */
export const demoUploadEndpoint = defineEndpoint({
    path: '/upload',
    requests: {
        [HttpMethod.Post]: {
            requestData: formDataShape(),
            responses: {
                [HttpStatus.Created]: {
                    responseData: defineShape({
                        receivedKeys: [''],
                    }),
                },
            },
        },
    },
});

/** Header-gated endpoint: requires a specific request header to pass through. */
export const demoSecretEndpoint = defineEndpoint({
    path: '/secret',
    requests: {
        [HttpMethod.Get]: {
            requiredRequestHeaders: {
                'x-demo-token': /^demo-/,
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        secret: '',
                    }),
                },
            },
        },
    },
});

/**
 * Same path with three methods (PUT/PATCH/DELETE), each returning a distinct success status: PUT
 * yields 201 Created, PATCH yields 200 Ok, DELETE yields 204 NoContent.
 */
export const demoItemsEndpoint = defineEndpoint({
    path: '/items/:itemId',
    requests: {
        [HttpMethod.Put]: {
            requestData: defineShape({
                value: '',
            }),
            responses: {
                [HttpStatus.Created]: {
                    responseData: defineShape({
                        replaced: '',
                    }),
                },
            },
        },
        [HttpMethod.Patch]: {
            requestData: defineShape({
                value: '',
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        patched: '',
                    }),
                },
            },
        },
        [HttpMethod.Delete]: {
            responses: {
                [HttpStatus.NoContent]: {
                    responseData: undefined,
                },
            },
        },
    },
});

/** Always-418 endpoint demonstrating a declared client-error status as a success-style response. */
export const demoTeapotEndpoint = defineEndpoint({
    path: '/teapot',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.ImATeapot]: {
                    responseData: defineShape({
                        short: '',
                        tall: 1,
                        stout: true,
                    }),
                },
            },
        },
    },
});

/** WebSocket with both client and host message shapes. Round-trip echo. */
export const demoEchoWebSocket = defineWebSocket({
    path: '/echo-ws',
    clientMessage: defineShape(''),
    hostMessage: defineShape({
        echoed: '',
        receivedAt: 0,
    }),
});

/** WebSocket that the host pushes to without expecting any client messages. */
export const demoClockWebSocket = defineWebSocket({
    path: '/clock-ws',
    hostMessage: defineShape({
        tick: 0,
    }),
});

/** WebSocket with a `connectProtocol` shape and search params for parameterized rooms. */
export const demoRoomWebSocket = defineWebSocket({
    path: '/rooms/:roomId',
    searchParams: {
        nickname: defineShape(''),
    },
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
    connectProtocol: defineShape(''),
});

export const demoApi = defineApi({
    apiName: 'rest-vir-demo',
    endpoints: [
        demoHealthEndpoint,
        demoEchoEndpoint,
        demoUserEndpoint,
        demoSearchEndpoint,
        demoFilesEndpoint,
        demoUploadEndpoint,
        demoSecretEndpoint,
        demoItemsEndpoint,
        demoTeapotEndpoint,
    ],
    webSockets: [
        demoEchoWebSocket,
        demoClockWebSocket,
        demoRoomWebSocket,
    ],
});
