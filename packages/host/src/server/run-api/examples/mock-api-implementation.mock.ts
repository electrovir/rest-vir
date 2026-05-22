/* node:coverage disable */
/** This is just a mock api used by the script-based start-api-server tests. */

import {HttpMethod, HttpStatus, log, wait} from '@augment-vir/common';
import {defineApi, defineEndpoint, defineWebSocket, formDataShape} from '@rest-vir/api';
import {defineShape, exactShape, tupleShape, unionShape} from 'object-shape-tester';
import {implementApi} from '../../../implementation/implement-api.js';
import {createApiImplementor} from '../../../implementation/implementor.js';
import {RejectRequestError} from '../../../implementation/reject-request.error.js';

export const mockWebsiteOrigin = 'https://example.com';

async function runLongLoop(max: number) {
    return await new Promise<number>((resolve) => {
        let counter = 0;
        for (let i = 0; i < max; i++) {
            counter++;
        }
        resolve(counter);
    });
}

export const healthEndpoint = defineEndpoint({
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

export const emptyEndpoint = defineEndpoint({
    path: '/empty',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Accepted]: {
                    responseData: undefined,
                },
            },
        },
    },
});

export const plainEndpoint = defineEndpoint({
    path: '/plain',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        fakeData: '',
                    }),
                },
            },
        },
        [HttpMethod.Post]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        fakeData: '',
                    }),
                },
            },
        },
    },
});

export const testEndpoint = defineEndpoint({
    path: '/test',
    requests: {
        [HttpMethod.Post]: {
            requestData: defineShape({
                somethingHere: '',
                testValue: 5,
            }),
            responses: {
                [HttpStatus.Accepted]: {
                    responseData: defineShape({
                        result: 5,
                        requestData: {
                            somethingHere: '',
                            testValue: 5,
                        },
                    }),
                },
            },
        },
    },
});

export const formDataEndpoint = defineEndpoint({
    path: '/form-data',
    requests: {
        [HttpMethod.Post]: {
            requestData: formDataShape(),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: exactShape('ok'),
                },
            },
        },
    },
});

export const requiresOriginEndpoint = defineEndpoint({
    path: '/requires-origin',
    requests: {
        [HttpMethod.Get]: {
            clientOriginRequirement: mockWebsiteOrigin,
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

export const withSearchParamsEndpoint = defineEndpoint({
    path: '/with-search-params',
    requests: {
        [HttpMethod.Get]: {
            searchParams: {
                param1: defineShape(''),
                param2: defineShape(['']),
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
        [HttpMethod.Post]: {
            searchParams: {
                param1: defineShape(''),
                param2: defineShape(['']),
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

export const longRunningEndpoint = defineEndpoint({
    path: '/long-running',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        result: -1,
                    }),
                },
            },
        },
        [HttpMethod.Post]: {
            requestData: unionShape(undefined, {
                count: -1,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        result: -1,
                    }),
                },
            },
        },
    },
});

export const functionOriginEndpoint = defineEndpoint({
    path: '/function-origin',
    requests: {
        [HttpMethod.Get]: {
            async clientOriginRequirement(origin) {
                await wait({
                    milliseconds: 1,
                });
                return !!origin?.includes('example.com');
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

export const arrayOriginEndpoint = defineEndpoint({
    path: '/array-origin',
    requests: {
        [HttpMethod.Get]: {
            clientOriginRequirement(origin) {
                return (
                    origin === 'http://example.com' ||
                    /example\.com/.test(origin || '') ||
                    !!origin?.includes('electrovir')
                );
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

export const returnsResponseErrorEndpoint = defineEndpoint({
    path: '/returns-response-error',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.NotAcceptable]: {
                    responseData: exactShape('INTENTIONAL ERROR'),
                },
            },
        },
    },
});

export const asyncRejectionEndpoint = defineEndpoint({
    path: '/async-rejection',
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

export const incorrectlyHasResponseDataEndpoint = defineEndpoint({
    path: '/incorrectly-has-response-data',
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

export const missingStatusCodeEndpoint = defineEndpoint({
    path: '/missing-status-code',
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

export const emptyStringResponseEndpoint = defineEndpoint({
    path: '/empty-string-response',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: exactShape(''),
                },
            },
        },
    },
});

export const pathParamsEndpoint = defineEndpoint({
    path: '/with/:param1/:param2',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Accepted]: {
                    responseData: defineShape({
                        param1: '',
                        param2: '',
                    }),
                },
            },
        },
    },
});

export const noClientDataWebSocket = defineWebSocket({
    path: '/no-client-data',
    hostMessage: exactShape('ok'),
});

export const withAllListenersWebSocket = defineWebSocket({
    path: '/with-all-listeners',
    hostMessage: exactShape('ok'),
});

export const requiredProtocolsWebSocket = defineWebSocket({
    path: '/required-protocols',
    clientMessage: exactShape('hello'),
    hostMessage: exactShape('ok'),
    connectProtocol: exactShape('hi'),
});

export const sendsProtocolWebSocket = defineWebSocket({
    path: '/sends-protocol',
    hostMessage: defineShape(['']),
});

export const searchParamsWebSocket = defineWebSocket({
    path: '/with-search-params-ws',
    searchParams: {
        param1: tupleShape(''),
        param2: defineShape(['']),
    },
    hostMessage: defineShape({
        param1: tupleShape(''),
        param2: [''],
    }),
});

export const mockApi = defineApi({
    apiName: 'mock api',
    endpoints: [
        healthEndpoint,
        emptyEndpoint,
        plainEndpoint,
        testEndpoint,
        formDataEndpoint,
        requiresOriginEndpoint,
        withSearchParamsEndpoint,
        longRunningEndpoint,
        functionOriginEndpoint,
        arrayOriginEndpoint,
        returnsResponseErrorEndpoint,
        asyncRejectionEndpoint,
        incorrectlyHasResponseDataEndpoint,
        missingStatusCodeEndpoint,
        emptyStringResponseEndpoint,
        pathParamsEndpoint,
    ],
    webSockets: [
        noClientDataWebSocket,
        withAllListenersWebSocket,
        requiredProtocolsWebSocket,
        sendsProtocolWebSocket,
        searchParamsWebSocket,
    ],
});

const implementor = createApiImplementor<undefined>()(mockApi);

export const mockApiImplementation = implementApi<undefined>()(mockApi, {
    createHostContext({request}) {
        if (request.headers.authorization === 'reject') {
            throw new RejectRequestError(HttpStatus.Unauthorized);
        } else if (request.headers.authorization === 'error') {
            throw new Error('Context creation failed.');
        }
        return {
            context: undefined,
        };
    },
    clientOriginRequirement: {
        anyOrigin: true,
    },
    endpoints: [
        implementor.implementEndpoint(healthEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
        implementor.implementEndpoint(emptyEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Accepted]: {
                        responseData: undefined,
                    },
                };
            },
        }),
        implementor.implementEndpoint(plainEndpoint, {
            async [HttpMethod.Get]() {
                await wait({
                    milliseconds: 1,
                });
                return {
                    [HttpStatus.Ok]: {
                        responseData: {
                            fakeData: 'hi there',
                        },
                    },
                };
            },
            [HttpMethod.Post]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: {
                            fakeData: 'post',
                        },
                    },
                };
            },
        }),
        implementor.implementEndpoint(testEndpoint, {
            [HttpMethod.Post]({requestData}) {
                return {
                    [HttpStatus.Accepted]: {
                        responseData: {
                            requestData,
                            result: 4,
                        },
                    },
                };
            },
        }),
        implementor.implementEndpoint(formDataEndpoint, {
            [HttpMethod.Post]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: 'ok',
                    },
                };
            },
        }),
        implementor.implementEndpoint(requiresOriginEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
        implementor.implementEndpoint(withSearchParamsEndpoint, {
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
        implementor.implementEndpoint(longRunningEndpoint, {
            async [HttpMethod.Get]() {
                const count = await runLongLoop(5_000_000_000);
                return {
                    [HttpStatus.Ok]: {
                        responseData: {
                            result: count,
                        },
                    },
                };
            },
            async [HttpMethod.Post]({requestData}) {
                const count = await runLongLoop(requestData?.count ?? 5_000_000_000);
                return {
                    [HttpStatus.Ok]: {
                        responseData: {
                            result: count,
                        },
                    },
                };
            },
        }),
        implementor.implementEndpoint(functionOriginEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
        implementor.implementEndpoint(arrayOriginEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
        implementor.implementEndpoint(returnsResponseErrorEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.NotAcceptable]: {
                        responseData: 'INTENTIONAL ERROR',
                    },
                };
            },
        }),
        implementor.implementEndpoint(asyncRejectionEndpoint, {
            [HttpMethod.Get]() {
                async function delayedCrash() {
                    await wait({
                        milliseconds: 200,
                    });
                    throw new Error('ASYNC CRASH');
                }
                void delayedCrash();
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
        implementor.implementEndpoint(incorrectlyHasResponseDataEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        // sending data when the definition forbids it
                        responseData: 'should not be here',
                    },
                };
            },
        }),
        implementor.implementEndpoint(missingStatusCodeEndpoint, {
            // @ts-expect-error: intentionally wrong
            [HttpMethod.Get]() {
                return {};
            },
        }),
        implementor.implementEndpoint(emptyStringResponseEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: '',
                    },
                };
            },
        }),
        implementor.implementEndpoint(pathParamsEndpoint, {
            [HttpMethod.Get]({request}) {
                const url = new URL(request.url, 'http://localhost');
                const segments = url.pathname.split('/').filter(Boolean);
                return {
                    [HttpStatus.Accepted]: {
                        responseData: {
                            param1: segments[1] ?? '',
                            param2: segments[2] ?? '',
                        },
                    },
                };
            },
        }),
    ],
    webSockets: [
        implementor.implementWebSocket(noClientDataWebSocket, {
            open({webSocket}) {
                webSocket.send('ok');
            },
            message({webSocket}) {
                webSocket.send('ok');
            },
            close() {},
        }),
        implementor.implementWebSocket(withAllListenersWebSocket, {
            open() {
                log.faint('open called');
            },
            message() {
                log.faint('message called');
            },
            close() {
                log.faint('close called');
            },
        }),
        implementor.implementWebSocket(requiredProtocolsWebSocket, {
            message({webSocket}) {
                webSocket.send('ok');
            },
        }),
        implementor.implementWebSocket(sendsProtocolWebSocket, {
            message({protocols, webSocket}) {
                webSocket.send(protocols ?? []);
            },
        }),
        implementor.implementWebSocket(searchParamsWebSocket, {
            message({searchParams, webSocket}) {
                webSocket.send({
                    param1: searchParams.param1,
                    param2: searchParams.param2,
                });
            },
        }),
    ],
});
