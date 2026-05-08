import {assertWrap, check} from '@augment-vir/assert';
import {
    mapObjectValues,
    mergeDeep,
    mergeDefinedProperties,
    omitObjectKeys,
    type Overwrite,
    type PartialWithUndefined,
    type SelectFrom,
} from '@augment-vir/common';
import {
    type ApiDefinition,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type NoParam,
    type WebSocketDefinition,
} from '@rest-vir/api';
import {
    restVirApiNameHeader,
    type ClientWebSocket,
    type EndpointFetchParams,
} from '@rest-vir/client';
import fastify, {type FastifyInstance} from 'fastify';
import {type InjectOptions} from 'light-my-request';
import {type OutgoingHttpHeaders} from 'node:http';
import {buildUrl, parseUrl} from 'url-vir';
import type WsSocket from 'ws';
import {type CommonWebSocket} from '../../../../client/src/websocket-connect/common-web-socket.js';
import {type WebSocketConnectParams} from '../../../../client/src/websocket-connect/websocket-params.js';
import {
    type ApiImplementation,
    type ApiRouteImplementations,
} from '../../implementation/implement-api.js';
import {type HandleRouteOptions} from '../handle-request/endpoint-handler.js';
import {attachApi} from '../run-api/attach-api.js';
import {type RunApiOptions, type RunApiUserOptions} from '../run-api/run-api-options.js';

/**
 * Options for {@link condenseResponse}.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type CondenseResponseOptions = {
    /**
     * Include all headers that fastify and rest-vir automatically append.
     *
     * @default false
     */
    includeDefaultHeaders: boolean;
};

/**
 * Condense a response into just the interesting properties for easier testing comparisons.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export async function condenseResponse(
    response: Response,
    options: PartialWithUndefined<CondenseResponseOptions> = {},
) {
    const bodyText = await response.text();
    const bodyObject = bodyText
        ? {
              body: bodyText,
          }
        : {};

    const headers: OutgoingHttpHeaders = Object.fromEntries(response.headers.entries());

    return {
        status: assertWrap.isHttpStatus(response.status),
        ...bodyObject,
        headers: options.includeDefaultHeaders
            ? headers
            : omitObjectKeys(headers, [
                  /**
                   * These headers are automatically set by fastify so we don't care about
                   * inspecting them in tests.
                   */
                  'connection',
                  'content-length',
                  'date',
                  'keep-alive',
                  restVirApiNameHeader,
              ]),
    };
}

/**
 * Used for each individual endpoint's fetcher in {@link FetchTestApi}.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type FetchTestEndpoint<Api extends Readonly<ApiDefinition>> = <
    const Endpoint extends EndpointDefinition & {path: keyof Api['endpoints']},
    const Method extends Extract<keyof NoInfer<Endpoint>['requests'], DefinableHttpMethod>,
>(
    endpoint: EndpointDefinition,
    method: Method,
    ...args: EndpointFetchParams<NoInfer<Endpoint>, NoInfer<Method>>
) => Promise<Response>;

/**
 * Used for each individual endpoint's fetcher in {@link ConnectTestApiWebSocket}.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type ConnectTestWebSocket<Api extends Readonly<ApiDefinition>> = <
    const ThisWebSocket extends WebSocketDefinition & {path: keyof Api['webSockets']},
    WebSocketClass extends CommonWebSocket,
>(
    webSocket: ThisWebSocket,
    ...params: WebSocketConnectParams<NoInfer<ThisWebSocket>, WebSocketClass>
) => Promise<ClientWebSocket<NoInfer<ThisWebSocket>, NoInfer<WebSocketClass>>>;

/**
 * Options for {@link testApi}.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type TestApiOptions = Overwrite<
    RunApiUserOptions,
    {
        port?: number | undefined | false;
    }
>;

/**
 * Suite for testing a service as a live, running server.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type ApiTestSuite<Api extends Readonly<ApiImplementation>> = {
    fetchEndpoint: FetchTestEndpoint<Api['definition']>;
    connectWebSocket: ConnectTestWebSocket<Api['definition']>;
    server: Readonly<FastifyInstance>;
};

/**
 * Test your service with actual Request and Response objects! The returned object includes
 * utilities for sending fetch requests and WebSocket connections to the service.
 *
 * Make sure to use the `kill` method on the output after your tests are finished. To automatically
 * kill the server, use {@link describeApi} instead.
 *
 * By default, this uses Fastify's request injection strategy to avoid using up real system ports.
 * To instead use an actual port, set `port` in the options parameter.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @example
 *
 * ```ts
 * import {testService} from '@rest-vir/host';
 *
 * const {connectWebsocket, kill, fetchEndpoint} = await testService(myServiceImplementation);
 *
 * // run tests
 *
 * await kill();
 * ```
 *
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export async function testApi<const Api extends Readonly<ApiRouteImplementations>>(
    api: Readonly<Api>,
    testApiOptions: Readonly<
        Omit<PartialWithUndefined<RunApiUserOptions>, 'workerCount' | 'preventWorkerRespawn' | ''>
    > = {},
) {
    const {
        host = 'localhost',
        port,
        debug,
    } = mergeDefinedProperties<TestApiOptions>(
        {
            port: false,
            debug: true,
        },
        testApiOptions,
        {
            workerCount: 1,
            preventWorkerRespawn: true,
        },
    );

    const server = fastify();
    /* node:coverage ignore next 5: this is just here to cover edge cases */
    if (debug) {
        server.setErrorHandler((error) => {
            log.error(ensureErrorAndPrependMessage(error, 'Fastify error handler caught:'));
        });
    }

    assert.isDefined(server, 'Service server was not started.');

    const output = {
        ...(await testExistingServer(server, api, {
            port: port || undefined,
            host,
            throwErrorsForExternalHandling: false,
            debug,
        })),
        /** Kill the server being tested. This should always be called after your tests are finished. */
        async kill(this: void) {
            await server.close();
        },
    };

    if (check.isNumber(port)) {
        await server.listen({
            port,
            host,
        });
    }

    return output;
}

/**
 * Similar to {@link testApi} but used to test against a Fastify server that you've already started
 * elsewhere. This will merely attach all route listeners to it and return test callbacks.
 *
 * The returned object includes a function to send fetches to directly to the running service.
 *
 * By default, this uses Fastify's request injection strategy to avoid using up real system ports.
 * To instead listen to an actual port, set `port` in the options parameter.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export async function testExistingServer<const Api extends Readonly<ApiImplementation>>(
    server: Readonly<FastifyInstance>,
    api: Readonly<Api>,
    options: Readonly<
        HandleRouteOptions &
            Omit<PartialWithUndefined<RunApiOptions>, 'workerCount' | 'preventWorkerRespawn'>
    > = {},
): Promise<ApiTestSuite<Api>> {
    await attachApi(server, api, options);

    const fetchOrigin =
        options.port == undefined
            ? undefined
            : buildUrl({
                  protocol: 'http',
                  hostname: options.host,
                  port: options.port,
              }).origin;

    const fetchEndpoint = mapObjectValues(
        service.endpoints as GenericServiceImplementation['endpoints'],
        (endpointPath, endpoint) => {
            return async (
                ...args: CollapsedFetchEndpointParams<NoParam, false>
            ): Promise<Response> => {
                const overwrittenOriginEndpoint = mergeDeep(
                    endpoint as EndpointDefinition,
                    fetchOrigin
                        ? {
                              service: {
                                  serviceOrigin: fetchOrigin,
                              },
                          }
                        : {},
                );

                const {url, requestInit} = buildEndpointRequestInit<NoParam>(
                    overwrittenOriginEndpoint,
                    ...args,
                );

                const {href, fullPath} = parseUrl(url);

                if (fetchOrigin == undefined) {
                    const withPayload: Pick<InjectOptions, 'body'> = requestInit.body
                        ? {
                              body: requestInit.body,
                          }
                        : {};

                    const innerResponse = await server.inject({
                        remoteAddress: href,
                        headers: requestInit.headers as Record<string, string>,
                        method: requestInit.method as NonNullable<InjectOptions['method']>,
                        url: fullPath,
                        ...withPayload,
                    });

                    const response = new Response(innerResponse.rawPayload as BodyInit, {
                        status: innerResponse.statusCode,
                        headers: innerResponse.headers as Record<string, string>,
                        statusText: innerResponse.statusMessage,
                    });

                    return response;
                } else {
                    return globalThis.fetch(href, requestInit);
                }
            };
        },
    ) as AnyObject as FetchTestApi<Service>;

    const webSocketOrigin =
        options.port == undefined
            ? undefined
            : buildUrl({
                  protocol: 'ws',
                  hostname: options.host,
                  port: options.port,
              }).origin;

    const connectWebSocket = mapObjectValues(
        service.webSockets as GenericServiceImplementation['webSockets'],
        (webSocketPath, webSocketDefinition) => {
            return async (
                ...args: CollapsedConnectWebSocketParams<NoParam, false>
            ): Promise<ClientWebSocket<WebSocketDefinition>> => {
                const [{protocols = [], listeners} = {}] = args;

                const overwrittenOriginWebSocket = mergeDeep(
                    webSocketDefinition as WebSocketDefinition,
                    webSocketOrigin
                        ? {
                              service: {
                                  serviceOrigin: webSocketOrigin,
                              },
                          }
                        : {},
                );

                const webSocketUrl = buildWebSocketUrl(overwrittenOriginWebSocket, ...args);

                assertValidWebSocketProtocols(protocols);

                const webSocket: globalThis.WebSocket =
                    webSocketOrigin == undefined
                        ? ((await server.injectWS(
                              parseUrl(webSocketUrl).fullPath,
                              protocols.length
                                  ? {
                                        headers: {
                                            'sec-websocket-protocol': protocols.join(', '),
                                        },
                                    }
                                  : {},
                          )) as unknown as globalThis.WebSocket)
                        : new WebSocket(webSocketUrl, protocols);

                if (webSocketOrigin == undefined) {
                    /**
                     * `injectWS` creates a `ws` WebSocket with `_closeTimeout = undefined`.
                     * `setTimeout(fn, undefined)` fires immediately (0ms), which destroys the
                     * socket before the close frame can be sent, preventing the server-side close
                     * event from firing. Set a reasonable fallback timeout.
                     *
                     * Additionally, `injectWS` uses `Duplexify` streams which don't emit `'close'`
                     * after `end()` like real TCP sockets do. The `ws` library relies on the socket
                     * `'close'` event to complete the close handshake. Destroying the socket when
                     * it finishes writing triggers `'close'` promptly instead of waiting for the
                     * full close timeout.
                     */
                    const wsInternal = webSocket as unknown as {
                        _closeTimeout: number;
                        _socket?: {
                            on: (event: string, listener: () => void) => void;
                            destroyed?: boolean;
                            destroy: () => void;
                        };
                    };
                    wsInternal._closeTimeout = 5000;
                    wsInternal._socket?.on('finish', () => {
                        if (!wsInternal._socket?.destroyed) {
                            wsInternal._socket?.destroy();
                        }
                    });
                }

                const finalized = await finalizeWebSocket(
                    webSocketDefinition,
                    webSocket,
                    listeners,
                    WebSocketLocation.OnClient,
                );

                if (webSocketOrigin == undefined) {
                    /**
                     * `injectWS` gives us a WebSocket from the `ws` package with a slightly
                     * different interface.
                     */
                    webSocket.dispatchEvent = (event: Event) => {
                        return (webSocket as any as WsSocket).emit(event.type, event);
                    };
                    /** `injectWS` fires the `'open'` event before we have a chance to listen to it. */
                    webSocket.dispatchEvent(new Event('open'));
                }

                return finalized;
            };
        },
    ) as AnyObject as ConnectTestApiWebSocket<Service>;

    await server.ready();

    return {
        /** Send a request to the service. */
        fetchEndpoint,
        /** Connect to a service WebSocket. */
        connectWebSocket,
        server,
    };
}

/**
 * Use this in conjunction with
 * [`@augment-vir/test`](https://www.npmjs.com/package/@augment-vir/test) or the Node.js built-in
 * test runner to run tests for a service and automatically kill the service when all tests have
 * finished. The describe callback is passed a params object which includes a fetch function.
 *
 * See {@link testApi} for more control over how tests are run (but without automatic server
 * shutdown).
 *
 * @category Testing : Backend
 * @category Package : @rest-vir/host
 * @example
 *
 * ```ts
 * import {describeApi} from '@rest-vir/host';
 * import {it} from '@augment-vir/test';
 *
 * describeApi({service: myService}, ({fetchEndpoint}) => {
 *     it('responds', async () => {
 *         const response = await fetchEndpoint['/my-endpoint']();
 *     });
 * });
 * ```
 *
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export function describeApi<
    const Service extends Readonly<
        SelectFrom<
            GenericServiceImplementation,
            {
                webSockets: true;
                endpoints: true;
                serviceName: true;
                createContext: true;
                serviceOrigin: true;
                requiredClientOrigin: true;
                logger: true;
                postHook: true;
            }
        >
    >,
>(
    {
        service,
        options,
    }: {
        /** The service to startup and send requests to. */
        service: Readonly<Service>;
        /** Options for starting the service. */
        options?: PartialWithUndefined<RunApiUserOptions>;
    },
    describeCallback: (params: {
        /** Send a request to the service. */
        fetchEndpoint: FetchTestApi<Service>;
        getServer: () => Promise<Readonly<FastifyInstance>>;
        service: Readonly<Service>;
    }) => void | undefined,
) {
    const servicePromise = testApi(service, options);

    const fetchServiceObject = mapObjectValues(service.endpoints, (endpointPath) => {
        return async (...args: any[]) => {
            const {fetchEndpoint} = await servicePromise;
            return await fetchEndpoint[endpointPath](...(args as any));
        };
    }) as FetchTestApi<Service>;

    describe(service.serviceName, () => {
        describeCallback({
            fetchEndpoint: fetchServiceObject,
            async getServer() {
                return (await servicePromise).server;
            },
            service,
        });

        /**
         * The built-in Node.js test runner runs `it` calls sequentially so this will always be
         * called last.
         */
        it('can be killed', async () => {
            const {kill} = await servicePromise;
            await kill();
        });
    });
}
