import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineEndpoint, defineWebSocket} from '@rest-vir/api';
import {implementApi} from '../../implementation/implement-api.js';
import {createApiImplementor} from '../../implementation/implementor.js';
import {silentServerLogger} from '../../implementation/server-logger.js';
import {startApiServer} from '../run-api/start-api-server.js';
import {matchUrlToRoute} from './match-url.js';

const staticEndpoint = defineEndpoint({
    path: '/static-route/stuff',
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

const parameterizedEndpoint = defineEndpoint({
    path: '/user/:userId',
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

const matchUrlApi = defineApi({
    apiName: 'match url test api',
    endpoints: [
        staticEndpoint,
        parameterizedEndpoint,
    ],
    webSockets: [],
});

const webSocketOnlyRoute = defineWebSocket({
    path: '/websocket-only',
});

const webSocketOnlyApi = defineApi({
    apiName: 'WebSocket-only route test api',
    webSockets: [webSocketOnlyRoute],
});

/**
 * Spellings where an independent matcher is likely to disagree with Fastify: a percent-encoded
 * character inside a static segment, an empty path parameter, a trailing slash, a duplicated slash,
 * an encoded path separator, and a case change.
 */
const probePaths = [
    '/static-route/stuff',
    '/static-route/%73tuff',
    '/user/some-id',
    '/user/',
    '/static-route/stuff/',
    '/static-route//stuff',
    // cspell:words fstuff
    '/static-route%2Fstuff',
    '/STATIC-ROUTE/stuff',
    '/user/some-id?extra=1',
    '/nope',
];

describe(matchUrlToRoute.name, () => {
    it('returns the WebSocket path for a WebSocket-only route', () => {
        assert.deepEquals(matchUrlToRoute(webSocketOnlyApi, webSocketOnlyRoute.path), {
            webSocketPath: webSocketOnlyRoute.path,
        });
    });

    it('agrees with what the server actually routes', async () => {
        const implementor = createApiImplementor()(matchUrlApi);

        const serverOutput = await startApiServer(
            implementApi()(matchUrlApi, {
                clientOriginRequirement: {
                    anyOrigin: true,
                },
                serverLogger: silentServerLogger,
                createHostContext() {
                    return {
                        context: undefined,
                    };
                },
                endpoints: [
                    staticEndpoint,
                    parameterizedEndpoint,
                ].map((endpoint) => {
                    return implementor.implementEndpoint(endpoint as typeof staticEndpoint, {
                        [HttpMethod.Get]() {
                            return {
                                [HttpStatus.Ok]: {
                                    responseData: undefined,
                                },
                            };
                        },
                    });
                }),
            }),
            {
                host: '127.0.0.1',
                port: 40_501,
                workerCount: 1,
                preventWorkerRespawn: true,
                externalOrigin: 'http://localhost',
            },
        );

        try {
            const comparisons = await Promise.all(
                probePaths.map(async (path) => {
                    const status = (await fetch(`http://localhost:${serverOutput.port}${path}`))
                        .status;

                    return {
                        path,
                        serverRouted: status !== HttpStatus.NotFound,
                        matcherRouted: !!matchUrlToRoute(matchUrlApi, path),
                    };
                }),
            );

            assert.deepEquals(
                comparisons.filter((comparison) => {
                    return comparison.serverRouted !== comparison.matcherRouted;
                }),
                [],
            );
        } finally {
            await serverOutput.kill();
        }
    });
});
