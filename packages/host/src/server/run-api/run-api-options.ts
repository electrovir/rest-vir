import {mergeDefinedProperties, type PartialWithUndefined} from '@augment-vir/common';
import {cpus} from 'node:os';
import {assertValidShape, defineShape} from 'object-shape-tester';
import {parseUrl} from 'url-vir';

/**
 * Shape definition for `runApi` options.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export const runApiOptionsShape = defineShape({
    /**
     * Prevent automatically choosing an available port if the provided port is already in use. This
     * will cause `runApi` to simply crash if the given port is in use.
     *
     * @default false
     */
    lockPort: false,
    /**
     * The port that the service should listen to requests on. Note that if `lockPort` is not set,
     * `runApi` will try to find the first available port _starting_ with this given `port` property
     * (so the actual server may be listening to a different port).
     *
     * If this property is set to `false`, no port will be listened to (so you can manually do that
     * later if you wish).
     *
     * @default
     * // the service definition's port or
     * 3000
     */
    port: 3000,
    /**
     * The number of workers to split the server into (for parallel request handling).
     *
     * @default cpus().length - 1
     */
    workerCount: cpus().length - 1,
    /**
     * The host name that the server should listen to. In most cases this doesn't need to be set.
     *
     * @default 'localhost'
     */
    host: 'localhost',
    /**
     * If set to `true`, a multi-threaded service (`workerCount` > 1) will not automatically respawn
     * its workers. This has no effect on single-threaded services (`workerCount` == 1).
     *
     * @default false
     */
    preventWorkerRespawn: false,

    /**
     * Set this to true to enable temporary extra logging. This should only be used in dev as it
     * will fill up production log files if you have a decent amount of traffic.
     *
     * This works by overriding the given service's logger to ensure that it logs everything.
     *
     * @default false
     */
    debug: false,
});

/**
 * Full options type for `startService`.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type RunApiOptions = typeof runApiOptionsShape.runtimeType;

/**
 * User-provided options type for `startService`.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 * @see {@link runApiOptionsShape} for option explanations.
 */
export type RunApiUserOptions = PartialWithUndefined<RunApiOptions>;

/**
 * Combines user defined options with default options to create a full options type for
 * `startService`.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 * @see {@link runApiOptionsShape} for option explanations.
 */
export function finalizeOptions(
    serviceOrigin: string,
    userOptions: Readonly<RunApiUserOptions>,
): RunApiOptions {
    const {hostname, port} = parseUrl(serviceOrigin);

    const options = mergeDefinedProperties<RunApiOptions>(
        runApiOptionsShape.default,
        Number(port)
            ? {
                  host: hostname || undefined,
                  port: Number(port),
              }
            : {},
        userOptions,
    );
    options.workerCount = Math.max(1, options.workerCount);

    assertValidShape(options, runApiOptionsShape);

    return options;
}
