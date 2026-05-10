import {check} from '@augment-vir/assert';
import {awaitedForEach, ensureErrorAndPrependMessage} from '@augment-vir/common';
import {ClusterManager, runInCluster, type WorkerRunner} from 'cluster-vir';
import fastify, {type FastifyInstance, type FastifyPluginCallback} from 'fastify';
import {getPortPromise} from 'portfinder';
import {type ApiImplementation} from '../../implementation/implement-api.js';
import {createServerLogger} from '../../implementation/server-logger.js';
import {type ApiServerOptions, attachApi} from './attach-api.js';
import {finalizeOptions, type RunApiOptions, type RunApiUserOptions} from './run-api-options.js';

/**
 * Output of {@link startService}.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type StartServiceOutput = {
    /**
     * The port that the server actually started on. This depends on the options given to
     * {@link startService}.
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
    /** A function that will kill the service even if it's using multiple workers. */
    kill: () => void;
};

/**
 * A list of plugins and their options that will be registered on the internal fastify instance
 * created by {@link startService}.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type FastifyPlugins = [plugin: FastifyPluginCallback, options?: any][];

/**
 * Starts the given {@link ServiceImplementation} inside of a backend [Fastify
 * server](https://www.npmjs.com/package/fastify).
 *
 * To attach the service endpoint handlers to an existing Fastify server, use {@link attachApi}.
 *
 * @category Run Service
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export async function startService(
    api: Readonly<ApiImplementation>,
    options: Readonly<RunApiUserOptions & ApiServerOptions>,
    fastifyPlugins: Readonly<FastifyPlugins> = [],
): Promise<StartServiceOutput> {
    const serverLogger = createServerLogger(api.implementation.serverLogger);

    process.on('unhandledRejection', (reason) => {
        serverLogger.error(
            ensureErrorAndPrependMessage(
                reason,
                `Unhandled async rejection in ${api.definition.apiName}:`,
            ),
        );
    });

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
        const result = await startServer(api, finalOptions, fastifyPlugins, options.externalOrigin);

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
                const {kill} = await startServer(
                    api,
                    finalOptions,
                    fastifyPlugins,
                    options.externalOrigin,
                );

                return () => {
                    kill();
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

async function startServer(
    api: Readonly<ApiImplementation>,
    {host, port}: Readonly<Pick<RunApiOptions, 'host' | 'port'>>,
    fastifyPlugins: Readonly<FastifyPlugins>,
    serverOrigin: string,
): Promise<StartServiceOutput> {
    const server = fastify();

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
    });

    await server.listen({
        port,
        host,
    });

    return {
        host,
        port,
        server,
        kill() {
            server.server.close();
        },
    };
}
