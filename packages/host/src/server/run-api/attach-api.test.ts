import {assert, waitUntil} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it, itCases} from '@augment-vir/test';
import {defineApi, defineEndpoint, defineWebSocket} from '@rest-vir/api';
import fastify from 'fastify';
import {type AddressInfo} from 'node:net';
import {implementApi} from '../../implementation/implement-api.js';
import {createApiImplementor} from '../../implementation/implementor.js';
import {attachApi, extractRunningServerInfo} from './attach-api.js';

describe(extractRunningServerInfo.name, () => {
    itCases(extractRunningServerInfo, [
        {
            it: 'handles a missing address',
            inputs: [
                {
                    externalOrigin: 'http://localhost:4321',
                },
                {
                    server: {
                        address() {
                            return null;
                        },
                    },
                },
            ],
            expect: {
                serviceOrigin: 'http://localhost:4321',
            },
        },
        {
            it: 'handles a string address',
            inputs: [
                {
                    externalOrigin: 'http://localhost:4321',
                },
                {
                    server: {
                        address() {
                            return 'something';
                        },
                    },
                },
            ],
            expect: {
                serviceOrigin: 'http://localhost:4321',
            },
        },
        {
            it: 'handles an address with a port',
            inputs: [
                {
                    externalOrigin: 'http://localhost:4321',
                },
                {
                    server: {
                        address() {
                            return {
                                address: '',
                                family: '',
                                port: 1234,
                            };
                        },
                    },
                },
            ],
            expect: {
                serviceOrigin: 'http://localhost:1234',
            },
        },
        {
            it: 'handles an service origin without a port',
            inputs: [
                {
                    externalOrigin: 'http://localhost',
                },
                {
                    server: {
                        address() {
                            return {
                                address: '',
                                family: '',
                                port: 1234,
                            };
                        },
                    },
                },
            ],
            expect: {
                serviceOrigin: 'http://localhost',
            },
        },
    ]);
});

/** Only ever appears in a request's query string. */
const secretSearchParamValue = 'super-secret-credential';

type ErrorRouteContext = {
    contextWasCreated: true;
};

const contextFailureEndpoint = defineEndpoint({
    path: '/context-failure',
    requests: {
        [HttpMethod.Get]: {
            clientOriginRequirement: {
                anyOrigin: true,
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const openFailureWebSocket = defineWebSocket({
    path: '/open-failure',
    clientMessage: undefined,
    hostMessage: undefined,
});

const errorRouteApi = defineApi({
    apiName: 'attach api error test',
    endpoints: [
        contextFailureEndpoint,
    ],
    webSockets: [
        openFailureWebSocket,
    ],
});

/**
 * The endpoint fails in `createHostContext` (the `preValidation` catch-all) and the WebSocket fails
 * in `open` (`@fastify/websocket`'s `errorHandler`), covering both error paths in
 * {@link attachApi}.
 *
 * `startApiServer` can't be used here: it hardcodes `throwErrorsForExternalHandling: false`, which
 * keeps a WebSocket failure from ever reaching `errorHandler`.
 */
async function startErrorRouteServer(excludedErrorSearchParams?: ReadonlyArray<string>) {
    const loggedErrors: Error[] = [];

    const implementor = createApiImplementor<ErrorRouteContext>()(errorRouteApi);

    const implementation = implementApi<ErrorRouteContext>()(errorRouteApi, {
        clientOriginRequirement: {
            anyOrigin: true,
        },
        serverLogger: {
            error(error) {
                loggedErrors.push(error);
            },
            info: undefined,
        },
        createHostContext({endpointDefinition}) {
            if (endpointDefinition) {
                throw new Error('Context creation exploded.');
            }

            return {
                context: {
                    contextWasCreated: true,
                },
            };
        },
        endpoints: [
            implementor.implementEndpoint(contextFailureEndpoint, {
                [HttpMethod.Get]() {
                    return {
                        [HttpStatus.Ok]: {
                            responseData: undefined,
                        },
                    };
                },
            }),
        ],
        webSockets: [
            implementor.implementWebSocket(openFailureWebSocket, {
                open() {
                    throw new Error('WebSocket open exploded.');
                },
            }),
        ],
    });

    const server = fastify();

    await attachApi(server, implementation, {
        externalOrigin: 'http://localhost',
        throwErrorsForExternalHandling: true,
        excludedErrorSearchParams,
    });

    await server.listen({
        host: '127.0.0.1',
        port: 0,
    });

    const {port} = server.server.address() as AddressInfo;

    return {
        loggedErrors,
        port,
        async kill(this: void) {
            await server.close();
        },
    };
}

/** Includes each stack, since a leaked value can hide there as well as in the message. */
function extractLoggedErrorStrings(loggedErrors: ReadonlyArray<Error>) {
    assert.isAbove(loggedErrors.length, 0, 'expected at least one logged error');

    return loggedErrors.map((error) => {
        return [
            error.message,
            error.stack,
        ].join('\n');
    });
}

describe('logged request errors', () => {
    it('omits excluded search params from endpoint handler errors', async () => {
        const {loggedErrors, port, kill} = await startErrorRouteServer([
            'code',
        ]);

        try {
            const response = await fetch(
                `http://127.0.0.1:${port}${contextFailureEndpoint.path}?code=${secretSearchParamValue}&page=2`,
            );

            assert.strictEquals(response.status, HttpStatus.InternalServerError);

            const errorStrings = extractLoggedErrorStrings(loggedErrors);

            errorStrings.forEach((errorString) => {
                assert.isFalse(
                    errorString.includes(secretSearchParamValue),
                    `logged error leaked an excluded search param value: ${errorString}`,
                );
                assert.isFalse(
                    errorString.includes('code='),
                    `logged error named an excluded search param: ${errorString}`,
                );
            });

            assert.isTrue(
                errorStrings.some((errorString) => {
                    return errorString.includes(`'${contextFailureEndpoint.path}?page=2'`);
                }),
                `no logged error named the route path with its remaining search params: ${errorStrings.join('\n')}`,
            );
        } finally {
            await kill();
        }
    });

    it('omits excluded search params from WebSocket handler errors', async () => {
        const {loggedErrors, port, kill} = await startErrorRouteServer([
            'code',
        ]);

        try {
            const webSocket = new WebSocket(
                `ws://127.0.0.1:${port}${openFailureWebSocket.path}?code=${secretSearchParamValue}&page=2`,
            );

            try {
                await waitUntil.isTrue(() => loggedErrors.length > 0);

                const errorStrings = extractLoggedErrorStrings(loggedErrors);

                errorStrings.forEach((errorString) => {
                    assert.isFalse(
                        errorString.includes(secretSearchParamValue),
                        `logged error leaked an excluded search param value: ${errorString}`,
                    );
                });

                assert.isTrue(
                    errorStrings.some((errorString) => {
                        return errorString.includes(`'${openFailureWebSocket.path}?page=2'`);
                    }),
                    `no logged error named the route path with its remaining search params: ${errorStrings.join('\n')}`,
                );
            } finally {
                webSocket.close();
            }
        } finally {
            await kill();
        }
    });

    it('leaves CR/LF smuggled through a search param percent encoded', async () => {
        const {loggedErrors, port, kill} = await startErrorRouteServer();

        try {
            await fetch(`http://127.0.0.1:${port}${contextFailureEndpoint.path}?note=forged%0A%0D`);

            const errorStrings = extractLoggedErrorStrings(loggedErrors);

            assert.isTrue(
                errorStrings.some((errorString) => {
                    return errorString.includes('note=forged%0A%0D');
                }),
                `no logged error carried the encoded search param: ${errorStrings.join('\n')}`,
            );
        } finally {
            await kill();
        }
    });

    it('keeps every search param when none are excluded', async () => {
        const {loggedErrors, port, kill} = await startErrorRouteServer();

        try {
            await fetch(
                `http://127.0.0.1:${port}${contextFailureEndpoint.path}?code=${secretSearchParamValue}`,
            );

            /** Redaction is opt-in: with nothing configured, the whole query string gets through. */
            assert.isTrue(
                extractLoggedErrorStrings(loggedErrors).some((errorString) => {
                    return errorString.includes(
                        `'${contextFailureEndpoint.path}?code=${secretSearchParamValue}'`,
                    );
                }),
                'expected the search param that was not excluded in the logged error',
            );
        } finally {
            await kill();
        }
    });
});
