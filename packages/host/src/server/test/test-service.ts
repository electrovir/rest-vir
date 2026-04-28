import {assert, assertWrap, check} from '@augment-vir/assert';
import {
    type AnyObject,
    ensureErrorAndPrependMessage,
    log,
    mapObjectValues,
    mergeDeep,
    mergeDefinedProperties,
    omitObjectKeys,
    type Overwrite,
    type PartialWithUndefined,
    type SelectFrom,
} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {
    assertValidWebSocketProtocols,
    buildEndpointRequestInit,
    buildWebSocketUrl,
    type ClientWebSocket,
    type CollapsedConnectWebSocketParams,
    type CollapsedFetchEndpointParams,
    type EndpointDefinition,
    finalizeWebSocket,
    type GenericEndpointDefinition,
    type GenericWebSocketDefinition,
    type NoParam,
    restVirServiceNameHeader,
    type WebSocketDefinition,
    WebSocketLocation,
} from '@rest-vir/define-service';
import {type GenericServiceImplementation} from '@rest-vir/implement-service';
import fastify, {type FastifyInstance} from 'fastify';
import {type InjectOptions} from 'light-my-request';
import {type OutgoingHttpHeaders} from 'node:http';
import {buildUrl, parseUrl} from 'url-vir';
import type WsSocket from 'ws';
import {type HandleRouteOptions} from '../handle-request/endpoint-handler.js';
import {attachService} from '../start-service/attach-service.js';
import {
    type StartServiceOptions,
    type StartServiceUserOptions,
} from '../start-service/start-service-options.js';
import {applyDebugLogger} from '../util/debug.js';

/**
 * Options for {@link condenseResponse}.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
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
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
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
                  restVirServiceNameHeader,
              ]),
    };
}

/**
 * Used for each individual endpoint's fetcher in {@link FetchTestService}.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type FetchTestEndpoint<EndpointToTest extends EndpointDefinition> = (
    ...params: CollapsedFetchEndpointParams<EndpointToTest, false>
) => Promise<Response>;

/**
 * Used for each individual endpoint's fetcher in {@link FetchTestService}.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type ConnectTestWebSocket<WebSocketToTest extends WebSocketDefinition> = (
    ...params: CollapsedConnectWebSocketParams<WebSocketToTest, false>
) => Promise<ClientWebSocket<WebSocketToTest>>;

/**
 * Type for the `fetchEndpoint` function provided by {@link testService} and {@link describeService}.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type FetchTestService<
    Service extends SelectFrom<
        GenericServiceImplementation,
        {
            endpoints: true;
        }
    >,
> = {
    [EndpointPath in keyof Service['endpoints']]: Service['endpoints'][EndpointPath] extends GenericEndpointDefinition
        ? FetchTestEndpoint<Service['endpoints'][EndpointPath]>
        : never;
};

/**
 * Type for the `connectWebSocket` function provided by {@link testService} and
 * {@link describeService}.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type ConnectTestServiceWebSocket<
    Service extends SelectFrom<
        GenericServiceImplementation,
        {
            webSockets: true;
        }
    >,
> = {
    [WebSocketPath in keyof Service['webSockets']]: Service['webSockets'][WebSocketPath] extends GenericWebSocketDefinition
        ? ConnectTestWebSocket<Service['webSockets'][WebSocketPath]>
        : never;
};

/**
 * Options for {@link testService}.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type TestServiceOptions = Overwrite<
    StartServiceUserOptions,
    {
        port?: number | undefined | false;
    }
>;

/**
 * Suite for testing a service as a live, running server.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type ServiceTestSuite<
    Service extends Readonly<
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
> = {
    fetchEndpoint: FetchTestService<Service>;
    connectWebSocket: ConnectTestServiceWebSocket<Service>;
    server: Readonly<FastifyInstance>;
};

/**
 * Test your service with actual Request and Response objects! The returned object includes
 * utilities for sending fetch requests and WebSocket connections to the service.
 *
 * Make sure to use the `kill` output after your tests are finished. To automatically kill the
 * server, use {@link describeService} instead.
 *
 * By default, this uses Fastify's request injection strategy to avoid using up real system ports.
 * To instead use an actual port, set `port` in the options parameter.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @example
 *
 * ```ts
 * import {testService} from '@rest-vir/run-service';
 *
 * const {connectWebsocket, kill, fetchEndpoint} = await testService(myServiceImplementation);
 *
 * // run tests
 *
 * await kill();
 * ```
 *
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export async function testService<
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
    service: Readonly<Service>,
    testServiceOptions: Readonly<
        Omit<
            PartialWithUndefined<StartServiceUserOptions>,
            'workerCount' | 'preventWorkerRespawn' | ''
        >
    > = {},
) {
    const {
        host = 'localhost',
        port,
        debug,
    } = mergeDefinedProperties<TestServiceOptions>(
        {
            port: false,
            debug: true,
        },
        testServiceOptions,
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
        ...(await testExistingServer(server, service, {
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
 * Similar to {@link testService} but used to test against a Fastify server that you've already
 * started elsewhere. This will merely attach all route listeners to it and return test callbacks.
 *
 * The returned object includes a function to send fetches to directly to the running service.
 *
 * By default, this uses Fastify's request injection strategy to avoid using up real system ports.
 * To instead listen to an actual port, set `port` in the options parameter.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export async function testExistingServer<
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
    server: Readonly<FastifyInstance>,
    service: Readonly<Service>,
    options: Readonly<
        HandleRouteOptions &
            Omit<PartialWithUndefined<StartServiceOptions>, 'workerCount' | 'preventWorkerRespawn'>
    > = {},
): Promise<ServiceTestSuite<Service>> {
    applyDebugLogger(options.debug, service);
    await attachService(server, service, options);

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
    ) as AnyObject as FetchTestService<Service>;

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
    ) as AnyObject as ConnectTestServiceWebSocket<Service>;

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
 * See {@link testService} for more control over how tests are run (but without automatic server
 * shutdown).
 *
 * @category Testing : Backend
 * @category Package : @rest-vir/run-service
 * @example
 *
 * ```ts
 * import {describeService} from '@rest-vir/run-service';
 * import {it} from '@augment-vir/test';
 *
 * describeService({service: myService}, ({fetchEndpoint}) => {
 *     it('responds', async () => {
 *         const response = await fetchEndpoint['/my-endpoint']();
 *     });
 * });
 * ```
 *
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export function describeService<
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
        options?: PartialWithUndefined<StartServiceUserOptions>;
    },
    describeCallback: (params: {
        /** Send a request to the service. */
        fetchEndpoint: FetchTestService<Service>;
        getServer: () => Promise<Readonly<FastifyInstance>>;
        service: Readonly<Service>;
    }) => void | undefined,
) {
    const servicePromise = testService(service, options);

    const fetchServiceObject = mapObjectValues(service.endpoints, (endpointPath) => {
        return async (...args: any[]) => {
            const {fetchEndpoint} = await servicePromise;
            return await fetchEndpoint[endpointPath](...(args as any));
        };
    }) as FetchTestService<Service>;

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
