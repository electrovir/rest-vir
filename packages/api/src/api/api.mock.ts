import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {defineShape, exactShape, tupleShape} from 'object-shape-tester';
import {defineApi} from './api.js';
import {defineEndpoint} from './endpoint.js';
import {defineWebSocket} from './web-socket.js';

/** Minimal endpoint: a single GET with no body or response data. */
export const emptyEndpoint = defineEndpoint({
    path: '/empty',
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

/** GET-only endpoint with response data. */
export const usersEndpoint = defineEndpoint({
    path: '/users',
    requests: {
        [HttpMethod.Get]: {
            clientOriginRequirement: 'https://app.example.com',
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        users: [
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

/** POST endpoint with request data and multiple response statuses. */
export const usersCreateEndpoint = defineEndpoint({
    path: '/users/create',
    requests: {
        [HttpMethod.Post]: {
            clientOriginRequirement: 'https://app.example.com',
            requestData: defineShape({
                name: '',
                email: '',
            }),
            responses: {
                [HttpStatus.Created]: {
                    responseData: defineShape({
                        id: '',
                    }),
                },
                [HttpStatus.BadRequest]: {
                    responseData: defineShape({
                        error: '',
                    }),
                },
            },
        },
    },
});

/** Multiple methods on one endpoint. */
export const itemByIdEndpoint = defineEndpoint({
    path: '/items/:id',
    requests: {
        [HttpMethod.Get]: {
            clientOriginRequirement: 'https://app.example.com',
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        title: '',
                        count: 0,
                    }),
                },
                [HttpStatus.NotFound]: {
                    responseData: undefined,
                },
            },
        },
        [HttpMethod.Put]: {
            clientOriginRequirement: 'https://app.example.com',
            requestData: defineShape({
                title: '',
                count: 0,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        title: '',
                        count: 0,
                    }),
                },
            },
        },
        [HttpMethod.Delete]: {
            clientOriginRequirement: 'https://app.example.com',
            responses: {
                [HttpStatus.NoContent]: {
                    responseData: undefined,
                },
            },
        },
    },
});

/** Endpoint with searchParams. */
export const searchEndpoint = defineEndpoint({
    path: '/search',
    requests: {
        [HttpMethod.Get]: {
            clientOriginRequirement: 'https://app.example.com',
            searchParams: {
                query: defineShape(''),
                page: defineShape(''),
                limit: defineShape(''),
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        results: [''],
                        total: 0,
                    }),
                },
            },
        },
    },
});

/** Endpoint with customProps. */
export const adminSettingsEndpoint = defineEndpoint({
    path: '/admin/settings',
    requests: {
        [HttpMethod.Get]: {
            clientOriginRequirement: 'https://admin.example.com',
            customProps: {
                requiresAuth: true,
                roles: [
                    'admin',
                ],
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        settings: {
                            maintenanceMode: false,
                        },
                    }),
                },
            },
        },
    },
});

/** Endpoint with requiredHeaders. */
export const protectedEndpoint = defineEndpoint({
    path: '/protected',
    requests: {
        [HttpMethod.Get]: {
            clientOriginRequirement: 'https://app.example.com',
            requiredRequestHeaders: {
                authorization: defineShape(''),
                'x-request-id': defineShape(''),
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        data: '',
                    }),
                },
            },
        },
    },
});

/** Endpoint with response headers. */
export const downloadEndpoint = defineEndpoint({
    path: '/download',
    requests: {
        [HttpMethod.Get]: {
            clientOriginRequirement: 'https://app.example.com',
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape(''),
                    requiredResponseHeaders: {
                        'content-type': defineShape(''),
                        'content-disposition': defineShape(''),
                    },
                },
            },
        },
    },
});

/** Endpoint with per-route clientOrigin override (regex). */
export const partnerApiEndpoint = defineEndpoint({
    path: '/partner-api',
    requests: {
        [HttpMethod.Post]: {
            clientOriginRequirement: /^https:\/\/.*\.partner\.com$/,
            requestData: defineShape({
                action: '',
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

/** Endpoint with undefined requestData (explicitly no body). */
export const pingEndpoint = defineEndpoint({
    path: '/ping',
    requests: {
        [HttpMethod.Post]: {
            clientOriginRequirement: {
                anyOriginWithCredentials: true,
            },
            requestData: undefined,
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        pong: true,
                    }),
                },
            },
        },
    },
});

/** PATCH endpoint with request data. */
export const itemPatchEndpoint = defineEndpoint({
    path: '/items/:id/patch',
    requests: {
        [HttpMethod.Patch]: {
            clientOriginRequirement: 'https://app.example.com',
            requestData: defineShape({
                title: '',
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        id: '',
                        title: '',
                    }),
                },
            },
        },
    },
});

/** TRACE endpoint (no body allowed). */
export const traceEndpoint = defineEndpoint({
    path: '/trace',
    requests: {
        [HttpMethod.Trace]: {
            clientOriginRequirement: 'https://app.example.com',
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

/** Endpoint with all CommonRouteDefinition fields. */
export const fullRouteEndpoint = defineEndpoint({
    path: '/full-route',
    requests: {
        [HttpMethod.Post]: {
            clientOriginRequirement: 'https://app.example.com',
            requestData: defineShape({
                value: '',
            }),
            searchParams: {
                format: defineShape(''),
            },
            customProps: {
                rateLimit: 100,
            },
            requiredRequestHeaders: {
                authorization: defineShape(''),
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        result: '',
                    }),
                    requiredResponseHeaders: {
                        'x-rate-limit-remaining': defineShape(''),
                    },
                },
                [HttpStatus.TooManyRequests]: {
                    responseData: undefined,
                },
            },
        },
    },
});

/** Minimal web socket. */
export const emptyWebSocket = defineWebSocket({
    path: '/ws/empty',
});

/** Web socket with client and host message shapes. */
export const chatWebSocket = defineWebSocket({
    path: '/ws/chat',
    clientMessage: defineShape({
        text: '',
        sender: '',
    }),
    hostMessage: defineShape({
        text: '',
        sender: '',
        timestamp: 0,
    }),
});

/** Web socket with protocols. */
export const versionedWebSocket = defineWebSocket({
    path: '/ws/versioned',
    protocols: tupleShape('', exactShape('v2')),
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

/** Web socket with searchParams. */
export const roomsWebSocket = defineWebSocket({
    path: '/ws/rooms',
    searchParams: {
        roomId: defineShape(''),
        token: defineShape(''),
    },
    clientMessage: defineShape({
        action: '',
    }),
    hostMessage: defineShape({
        event: '',
        data: '',
    }),
});

/** Web socket with customProps. */
export const adminWebSocket = defineWebSocket({
    path: '/ws/admin',
    customProps: {
        requiresAuth: true,
        maxConnections: 10,
    },
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

/** Web socket with requiredHeaders. */
export const secureWebSocket = defineWebSocket({
    path: '/ws/secure',
    requiredRequestHeaders: {
        authorization: defineShape(''),
    },
    clientMessage: defineShape({
        command: '',
    }),
    hostMessage: defineShape({
        result: '',
    }),
});

/** Web socket with per-route clientOrigin. */
export const partnerWebSocket = defineWebSocket({
    path: '/ws/partner',
    clientOriginRequirement: 'https://partner.example.com',
    clientMessage: defineShape(''),
    hostMessage: defineShape(0),
});

/** Web socket with all CommonRouteDefinition fields. */
export const fullRouteWebSocket = defineWebSocket({
    path: '/ws/full-route',
    clientMessage: defineShape({
        payload: '',
    }),
    hostMessage: defineShape({
        response: '',
    }),
    protocols: tupleShape(exactShape('graphql-ws')),
    searchParams: {
        token: defineShape(''),
    },
    customProps: {
        maxMessageSize: 65_536,
    },
    requiredRequestHeaders: {
        'sec-websocket-protocol': defineShape(''),
    },
    clientOriginRequirement: /^https:\/\/.*\.example\.com$/,
});

export const mockApi = defineApi({
    apiName: 'mock api',
    endpoints: [
        emptyEndpoint,
        usersEndpoint,
        usersCreateEndpoint,
        itemByIdEndpoint,
        searchEndpoint,
        adminSettingsEndpoint,
        protectedEndpoint,
        downloadEndpoint,
        partnerApiEndpoint,
        pingEndpoint,
        itemPatchEndpoint,
        traceEndpoint,
        fullRouteEndpoint,
    ],
    webSockets: [
        emptyWebSocket,
        chatWebSocket,
        versionedWebSocket,
        roomsWebSocket,
        adminWebSocket,
        secureWebSocket,
        partnerWebSocket,
        fullRouteWebSocket,
    ],
});
