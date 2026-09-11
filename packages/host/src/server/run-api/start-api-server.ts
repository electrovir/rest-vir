import {check} from '@augment-vir/assert';
import {awaitedForEach, ensureErrorAndPrependMessage, type MaybePromise} from '@augment-vir/common';
import {ClusterManager, runInCluster, type WorkerRunner} from 'cluster-vir';
import fastify, {type FastifyInstance, type FastifyPluginCallback} from 'fastify';
import {getPortPromise} from 'portfinder';
import {type ApiImplementation} from '../../implementation/implement-api.js';
import {createServerLogger} from '../../implementation/server-logger.js';
import {type ApiServerOptions, attachApi} from './attach-api.js';
import {finalizeOptions, type RunApiOptions, type RunApiUserOptions} from './run-api-options.js';

/**
 * Tracks whether the process-wide `unhandledRejection` listener has already been installed by
 * `startApiServer`. Repeated calls in the same process (tests, hot reload, in-process restarts)
 * would otherwise accumulate listeners and trigger `MaxListenersExceededWarning`.
 */
let hasInstalledUnhandledRejectionListener = false;

/**
 * Output of {@link startApiServer}.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type StartApiServerOutput = {
    /**
     * The port that the server actually started on. This depends on the options given to
     * {@link startApiServer}.
     */
    port: number;
    /**
     * The host that the server was attached to. (This is simply passed directly from the user
     * options, merged with the default.)
     */
    host: string;
    /**
     * The instantiated and running [`fastify`](https://www.npmjs.com/package/fastify) instance.
     * This is populated when the server is run on only a single thread (when `options.workerCount`
     * is 1).
     */
    server?: FastifyInstance;
    /**
     * The `ClusterManager` for all the spawned server workers. This is populated when the server is
     * run with a multiple threads (when `options.workerCount` > 1). It will only be populated for
     * the primary thread.
     */
    cluster?: ClusterManager;
    /**
     * The `WorkerRunner` for the current worker. This is populated when the server is run with a
     * multiple threads (when `options.workerCount` > 1). It will only be populated for non-primary
     * threads.
     */
    worker?: WorkerRunner;
    /**
     * Kill the service even if it's using multiple workers. Returns a promise that resolves once
     * Fastify (and its registered plugins) finish their `onClose` hooks. Including
     * `@fastify/websocket`'s teardown. So in-flight requests and WebSocket connections drain
     * cleanly. Always `await` this in production shutdown paths.
     */
    kill: (this: void) => MaybePromise<void>;
};

/**
 * A list of plugins and their options that will be registered on the internal fastify instance
 * created by {@link startApiServer}.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type FastifyPlugins = [
    plugin: FastifyPluginCallback,
    options?: any,
][];

/**
 * Starts the given {@link ApiImplementation} inside of a backend [Fastify
 * server](https://www.npmjs.com/package/fastify).
 *
 * To attach the service endpoint handlers to an existing Fastify server, use {@link attachApi}.
 *
 * @category Host Server
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export async function startApiServer(
    api: Readonly<ApiImplementation>,
    options: Readonly<RunApiUserOptions & ApiServerOptions>,
    fastifyPlugins: Readonly<FastifyPlugins> = [],
): Promise<StartApiServerOutput> {
    const serverLogger = createServerLogger(api.implementation.serverLogger);

    if (!hasInstalledUnhandledRejectionListener) {
        hasInstalledUnhandledRejectionListener = true;
        process.on('unhandledRejection', (reason) => {
            serverLogger.error(
                ensureErrorAndPrependMessage(
                    reason,
                    `Unhandled async rejection in ${api.definition.apiName}:`,
                ),
            );
        });
    }

    const finalOptions = finalizeOptions(options.externalOrigin, options);

    const port: number | boolean =
        finalOptions.lockPort || check.isFalse(finalOptions.port)
            ? finalOptions.port
            : await getPortPromise({
                  port: finalOptions.port,
              });
    finalOptions.port = port;

    if (finalOptions.workerCount === 1 || !check.isNumber(port)) {
        /** Only run a single server. */
        const result = await startServer({
            ...finalOptions,
            api,
            fastifyPlugins,
            serverOrigin: options.externalOrigin,
        });

        if (finalOptions.port) {
            serverLogger.info(
                `${api.definition.apiName} started on http://${result.host}:${result.port}`,
            );
        }

        return result;
    } else {
        /** Run in a cluster. */
        const manager = runInCluster(
            async () => {
                const {kill} = await startServer({
                    ...finalOptions,
                    api,
                    fastifyPlugins,
                    serverOrigin: options.externalOrigin,
                });

                return () => {
                    void kill();
                };
            },
            {
                startWorkersImmediately: false,
                respawnWorkers: !finalOptions.preventWorkerRespawn,
                workerCount: finalOptions.workerCount,
            },
        );

        if (check.instanceOf(manager, ClusterManager)) {
            await manager.startWorkers();
            if (finalOptions.port) {
                serverLogger.info(
                    `${api.definition.apiName} started on http://${finalOptions.host}:${finalOptions.port}`,
                );
            }

            return {
                host: finalOptions.host,
                port,
                cluster: manager,
                kill() {
                    manager.destroy();
                },
            };
        } else {
            return {
                host: finalOptions.host,
                port,
                worker: manager,
                kill() {
                    manager.destroy();
                },
            };
        }
    }
}

async function startServer({
    api,
    host,
    port,
    bodyLimit,
    connectionTimeout,
    keepAliveTimeout,
    requestTimeout,
    trustProxy,
    webSocketMaxPayload,
    excludedErrorSearchParams,
    fastifyPlugins,
    serverOrigin,
}: Readonly<
    Pick<
        RunApiOptions,
        | 'host'
        | 'port'
        | 'bodyLimit'
        | 'connectionTimeout'
        | 'keepAliveTimeout'
        | 'requestTimeout'
        | 'trustProxy'
        | 'webSocketMaxPayload'
        | 'excludedErrorSearchParams'
    > & {
        api: Readonly<ApiImplementation>;
        fastifyPlugins: Readonly<FastifyPlugins>;
        serverOrigin: string;
    }
>): Promise<StartApiServerOutput> {
    const server = fastify({
        bodyLimit,
        connectionTimeout,
        keepAliveTimeout,
        requestTimeout,
        ...(trustProxy == undefined
            ? {}
            : {
                  trustProxy,
              }),
    });

    await awaitedForEach(
        fastifyPlugins,
        async ([
            plugin,
            options,
        ]) => {
            await server.register(plugin, options);
        },
    );

    await attachApi(server, api, {
        externalOrigin: serverOrigin,
        throwErrorsForExternalHandling: false,
        webSocketMaxPayload,
        excludedErrorSearchParams: excludedErrorSearchParams || undefined,
    });

    await server.listen({
        port,
        host,
    });

    async function kill(this: void) {
        /**
         * Use Fastify's `close()` (not the raw `server.server.close()`) so that `onClose` hooks
         * registered by plugins like `@fastify/websocket` run and drain open connections.
         */
        await server.close();
    }

    installGracefulShutdown(kill);

    return {
        host,
        port,
        server,
        kill,
    };
}

let hasInstalledGracefulShutdown = false;

/* node:coverage disable: hard to test */
function installGracefulShutdown(kill: () => Promise<void> | void): void {
    if (hasInstalledGracefulShutdown) {
        return;
    }
    hasInstalledGracefulShutdown = true;
    const handler = async (signal: string) => {
        try {
            await kill();
        } finally {
            /**
             * Restore the default behavior and re-raise the signal so the process actually exits.
             * This matches the conventional Node.js "graceful shutdown" recipe.
             */
            process.kill(process.pid, signal);
        }
    };
    process.once('SIGTERM', async () => {
        await handler('SIGTERM');
    });
    process.once('SIGINT', async () => {
        await handler('SIGINT');
    });
}
/* node:coverage enable */
