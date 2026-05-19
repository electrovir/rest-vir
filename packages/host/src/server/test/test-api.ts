import {assert, assertWrap, check} from '@augment-vir/assert';
import {
    type AnyObject,
    mergeDefinedProperties,
    omitObjectKeys,
    type Overwrite,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {describe} from '@augment-vir/test';
import {
    type ClientWebSocket,
    type CommonWebSocket,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type EndpointFetchParams,
    finalizeClientWebSocket,
    type NoParam,
    restVirApiNameHeader,
    RestVirClient,
    type WebSocketConnectParamObject,
    type WebSocketConnectParams,
    type WebSocketDefinition,
} from '@rest-vir/api';
import fastify, {type FastifyInstance} from 'fastify';
import {type InjectOptions} from 'light-my-request';
import {type OutgoingHttpHeaders} from 'node:http';
import {after} from 'node:test';
import {buildUrl, parseUrl} from 'url-vir';
import type WsSocket from 'ws';
import {type ApiImplementation} from '../../implementation/implement-api.js';
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
 * Used for each individual endpoint's fetcher in {@link ApiTestSuite}.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type FetchTestEndpoint<Api extends Readonly<ApiImplementation>> = <
    const Endpoint extends EndpointDefinition & {path: keyof Api['definition']['endpoints']},
    const Method extends Extract<keyof NoInfer<Endpoint>['requests'], DefinableHttpMethod>,
>(
    endpoint: Endpoint,
    method: Method,
    ...args: EndpointFetchParams<NoInfer<Endpoint>, NoInfer<Method>>
) => Promise<Response>;

/**
 * Used to connect to an individual web socket from {@link ApiTestSuite}.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type ConnectTestWebSocket<Api extends Readonly<ApiImplementation>> = <
    const ThisWebSocket extends WebSocketDefinition & {path: keyof Api['definition']['webSockets']},
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
 * Suite for testing an api as a live, running server.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type ApiTestSuite<Api extends Readonly<ApiImplementation>> = {
    fetchEndpoint: FetchTestEndpoint<Api>;
    connectWebSocket: ConnectTestWebSocket<Api>;
    server: Readonly<FastifyInstance>;
};

/**
 * Test your api with actual Request and Response objects! The returned object includes utilities
 * for sending fetch requests and WebSocket connections to the api.
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
 * import {testApi} from '@rest-vir/host';
 *
 * const {connectWebSocket, kill, fetchEndpoint} = await testApi(myApiImplementation);
 *
 * // run tests
 *
 * await kill();
 * ```
 *
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export async function testApi<const Api extends Readonly<ApiImplementation>>(
    api: Readonly<Api>,
    testApiOptions: Readonly<
        Omit<PartialWithUndefined<RunApiUserOptions>, 'workerCount' | 'preventWorkerRespawn'>
    > = {},
) {
    const {host = 'localhost', port} = mergeDefinedProperties<TestApiOptions>(
        {
            port: false,
        },
        testApiOptions,
        {
            workerCount: 1,
            preventWorkerRespawn: true,
        },
    );

    const server = fastify();

    assert.isDefined(server, 'Api server was not started.');

    const output = {
        ...(await testExistingServer(server, api, {
            port: port || undefined,
            host,
            throwErrorsForExternalHandling: false,
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
 * The returned object includes a function to send fetches directly to the running api.
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
    const fetchOrigin =
        options.port == undefined
            ? 'http://localhost'
            : buildUrl({
                  protocol: 'http',
                  hostname: options.host,
                  port: options.port,
              }).origin;

    await attachApi(server, api, {
        ...options,
        externalOrigin: fetchOrigin,
    });

    const restVirClient = new RestVirClient(api.definition, fetchOrigin);

    const fetchEndpoint: FetchTestEndpoint<Api> = async (
        endpoint,
        method,
        ...args
    ): Promise<Response> => {
        const {url, requestInit} = restVirClient.buildEndpointRequestInit(
            endpoint,
            method,
            args[0],
        );

        const {href, fullPath} = parseUrl(url);

        if (options.port == undefined) {
            const innerResponse = await server.inject({
                remoteAddress: href,
                headers: requestInit.headers as Record<string, string>,
                method: requestInit.method as NonNullable<InjectOptions['method']>,
                url: fullPath,
                ...(requestInit.body
                    ? {
                          body: requestInit.body as Exclude<InjectOptions['body'], undefined>,
                      }
                    : {}),
            });

            return new Response(innerResponse.rawPayload as BodyInit, {
                status: innerResponse.statusCode,
                headers: innerResponse.headers as Record<string, string>,
                statusText: innerResponse.statusMessage,
            });
        } else {
            return globalThis.fetch(href, requestInit);
        }
    };

    const connectWebSocket: ConnectTestWebSocket<Api> = async (webSocketDefinition, ...args) => {
        const params: WebSocketConnectParamObject | undefined = args[0];
        const protocols = params?.protocols ?? [];

        const webSocketUrl = restVirClient.buildWebSocketUrl(
            webSocketDefinition as unknown as NoParam,
            params,
        );

        const webSocket: globalThis.WebSocket =
            options.port == undefined
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

        if (options.port == undefined) {
            /**
             * `injectWS` creates a `ws` WebSocket with `_closeTimeout = undefined`. `setTimeout(fn,
             * undefined)` fires immediately (0ms), which destroys the socket before the close frame
             * can be sent, preventing the server-side close event from firing. Set a reasonable
             * fallback timeout.
             *
             * Additionally, `injectWS` uses `Duplexify` streams which don't emit `'close'` after
             * `end()` like real TCP sockets do. The `ws` library relies on the socket `'close'`
             * event to complete the close handshake. Destroying the socket when it finishes writing
             * triggers `'close'` promptly instead of waiting for the full close timeout.
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

        const finalized = await finalizeClientWebSocket(
            webSocketDefinition,
            webSocket,
            params?.listeners,
        );

        if (options.port == undefined) {
            /**
             * `injectWS` gives us a WebSocket from the `ws` package with a slightly different
             * interface.
             */
            webSocket.dispatchEvent = (event: Event) => {
                return (webSocket as AnyObject as WsSocket).emit(event.type, event);
            };
            /** `injectWS` fires the `'open'` event before we have a chance to listen to it. */
            webSocket.dispatchEvent(new Event('open'));
        }

        return finalized as ClientWebSocket<any, any>;
    };

    await server.ready();

    return {
        fetchEndpoint,
        connectWebSocket,
        server,
    };
}

/**
 * Use this in conjunction with
 * [`@augment-vir/test`](https://www.npmjs.com/package/@augment-vir/test) or the Node.js built-in
 * test runner to run tests for an api and automatically kill the server when all tests have
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
 * describeApi({api: myApi}, ({fetchEndpoint}) => {
 *     it('responds', async () => {
 *         const response = await fetchEndpoint(myEndpoint, HttpMethod.Get);
 *     });
 * });
 * ```
 *
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export function describeApi<const Api extends Readonly<ApiImplementation>>(
    {
        api,
        options,
    }: {
        /** The api to startup and send requests to. */
        api: Readonly<Api>;
        /** Options for starting the api. */
        options?: PartialWithUndefined<RunApiUserOptions>;
    },
    describeCallback: (params: {
        /** Send a request to the api. */
        fetchEndpoint: FetchTestEndpoint<Api>;
        /** Connect to a web socket on the api. */
        connectWebSocket: ConnectTestWebSocket<Api>;
        getServer: () => Promise<Readonly<FastifyInstance>>;
        api: Readonly<Api>;
    }) => void | undefined,
) {
    const apiPromise = testApi(api, options);

    describe(api.definition.apiName, () => {
        describeCallback({
            fetchEndpoint: (async (...args: unknown[]) => {
                const {fetchEndpoint} = await apiPromise;
                return await (fetchEndpoint as (...args: unknown[]) => Promise<Response>)(...args);
            }) as FetchTestEndpoint<Api>,
            connectWebSocket: (async (...args: unknown[]) => {
                const {connectWebSocket} = await apiPromise;
                return await (connectWebSocket as (...args: unknown[]) => Promise<unknown>)(
                    ...args,
                );
            }) as ConnectTestWebSocket<Api>,
            async getServer() {
                return (await apiPromise).server;
            },
            api,
        });

        after(async () => {
            const {kill} = await apiPromise;
            await kill();
        });
    });
}
