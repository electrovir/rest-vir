import {mergeDefinedProperties, type PartialWithUndefined} from '@augment-vir/common';
import {cpus} from 'node:os';
import {assertValidShape, defineShape, nullableShape, unionShape} from 'object-shape-tester';
import {parseUrl} from 'url-vir';

/**
 * Shape definition for `runApi` options.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
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
     * The host name that the server should listen to. Defaults to `'localhost'` (loopback only) so
     * accidentally exposing a dev server is not the default. Set to `'0.0.0.0'` for containers
     * (Docker, k8s) that need the server reachable on all interfaces.
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
     * Maximum size, in bytes, of incoming request bodies. Requests over this size are rejected with
     * HTTP 413. Forwarded to Fastify's `bodyLimit`. Default matches Fastify's default.
     *
     * @default 1048576 // 1 MiB
     */
    bodyLimit: 1024 * 1024,
    /**
     * Max time, in milliseconds, the server will wait between TCP `connect` and the first request
     * byte. Slowloris and idle-connection attackers consume socket slots without this. Forwarded to
     * Fastify's `connectionTimeout`.
     *
     * @default 0 // no timeout. Set this in production
     */
    connectionTimeout: 0,
    /**
     * Max time, in milliseconds, between keep-alive requests. Forwarded to Fastify's
     * `keepAliveTimeout`.
     *
     * @default 72000 // matches Fastify's default
     */
    keepAliveTimeout: 72_000,
    /**
     * Max time, in milliseconds, between the start of a request and when the response is sent. `0`
     * disables the timeout. Forwarded to Fastify's `requestTimeout`.
     *
     * @default 0
     */
    requestTimeout: 0,
    /**
     * Maximum size, in bytes, of an inbound WebSocket message frame. Larger payloads close the
     * connection with `1009` (message too big). Passed through to `@fastify/websocket`'s
     * `options.maxPayload`.
     *
     * @default 1048576 // 1 MiB
     */
    webSocketMaxPayload: 1024 * 1024,
    /**
     * Trust proxy headers (`X-Forwarded-For`, `X-Forwarded-Proto`, etc.). Required when running
     * behind a reverse proxy / load balancer / CDN so `request.ip` reflects the actual client.
     * Forwarded to Fastify's `trustProxy`.
     *
     * - `true`: trust headers from any hop.
     * - `false`: trust nothing (default).
     * - A string or list of strings: trust the listed CIDR ranges or IPs.
     * - A number: trust that many hops.
     *
     * @default false
     */
    trustProxy: nullableShape(
        unionShape(
            false,
            '',
            [
                '',
            ],
            0,
        ),
    ),
});

/**
 * Full options type for `startApiServer`.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type RunApiOptions = typeof runApiOptionsShape.runtimeType;

/**
 * User-provided options type for `startApiServer`.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 * @see {@link runApiOptionsShape} for option explanations.
 */
export type RunApiUserOptions = PartialWithUndefined<RunApiOptions>;

/**
 * Combines user defined options with default options to create a full options type for
 * `startApiServer`.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
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

    assertValidShape(options, runApiOptionsShape, {
        allowExtraKeys: true,
    });

    return options;
}
