import {check, waitUntil} from '@augment-vir/assert';
import {
    ensureErrorAndPrependMessage,
    HttpMethod,
    wrapInTry,
    type MaybePromise,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {type ApiDefinition, type EndpointDefinition} from '@rest-vir/api';
import {convertDuration, type AnyDuration} from 'date-vir';
import {buildUrl, parseUrl} from 'url-vir';
import {type EndpointFetchParamObject} from '../endpoint-fetch/endpoint-params.js';

/**
 * This header is set on all responses handled by rest-vir so we know what service a response came
 * from.
 *
 * @category Internal
 * @category Package : @rest-vir/define-service
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export const restVirApiNameHeader = 'rest-vir-api';

/**
 * Options for {@link findDevServicePort} and {@link findLivePort}.
 *
 * @category Internal
 * @category Package : @rest-vir/define-service
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export type FindPortOptions = {
    /**
     * The origin to start finding with. If this does not include a port number, the port find will
     * immediately abort. See, if needed, MDN to determine which part is the origin:
     * https://developer.mozilla.org/docs/Web/API/Location
     */
    startOrigin: string;
} & Pick<EndpointFetchParamObject, 'fetchOverride'> &
    PartialWithUndefined<{
        /**
         * The maximum number of ports that are scanned before giving up.
         *
         * @default 100
         */
        maxScanDistance: number;
        /**
         * A callback that is used to determine if a port's response is valid.
         *
         * If this is not provided, the check is simply `!!response.ok`.
         *
         * If this is provided, returning `true` determines that a port response is valid. This will
         * only be called if `response.ok` is already `true`.
         */
        isValidResponse: (response: Readonly<Response>) => MaybePromise<boolean>;
        /**
         * Max duration that port finding is allowed to go on for.
         *
         * @default {seconds: 10}
         */
        timeout: AnyDuration;
    }>;

/**
 * Use this to find a service's port number when started without a locked-in port. This allows a
 * client (usually a website frontend) to find which port the server started on by scanning ports
 * starting with the port defined in the service's `serviceOrigin` property.
 *
 * If the service has no port in its `serviceOrigin` property, this function throws an error.
 *
 * Note that the service given must have at least one endpoint defined for this function to work.
 *
 * This is used in `defineService` if the `findActiveDevPort` option is set to true.
 *
 * @category Internal
 * @category Package : @rest-vir/define-service
 * @example
 *
 * ```ts
 * import {findDevServicePort, defineService, AnyOrigin} from '@rest-vir/define-service';
 *
 * const myService = defineService({
 *     serviceName: 'my-service',
 *     serviceOrigin: 'https://localhost:3000',
 *     requiredClientOrigin: AnyOrigin,
 *     endpoints: {
 *         '/my-path': {
 *             methods: {
 *                 [HttpMethod.Get]: true,
 *             },
 *             requestDataShape: undefined,
 *             responseDataShape: undefined,
 *         },
 *     },
 * });
 *
 * const {origin} = await findDevServicePort(myService);
 * ```
 *
 * @returns `undefined` if the given service has no port in its service origin.
 * @throws Error If the max scan distance has been reached without finding a valid port.
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export async function findDevServicePort(
    api: Readonly<ApiDefinition>,
    {startOrigin, ...options}: Readonly<FindPortOptions>,
): Promise<
    | {
          port: number;
          origin: string;
      }
    | undefined
> {
    try {
        const endpoint = Object.values(api.endpoints)[0];
        if (!endpoint) {
            throw new Error('Service has no endpoints.');
        }

        const {port} = await waitUntil.isDefined(
            async () => {
                return {
                    port: await findLivePort(startOrigin, endpoint, {
                        ...options,
                        isValidResponse(response) {
                            return response.headers.get(restVirApiNameHeader) === api.apiName;
                        },
                    }),
                };
            },
            {
                timeout: options.timeout,
            },
        );

        if (!port) {
            return undefined;
        }

        const {origin} = buildUrl(startOrigin, {
            port,
        });

        return {
            port,
            origin,
        };
    } catch (error) {
        throw ensureErrorAndPrependMessage(
            error,
            `Cannot find dev origin for service '${api.apiName}'`,
        );
    }
}

/**
 * Find the first port, starting with the port in the given origin, that, with the given path, is
 * alive and matches, if provided, `isValidResponse`.
 *
 * @category Internal
 * @category Package : @rest-vir/define-service
 * @returns `undefined` if the given origin has no port number to start with
 * @throws Error if the max scan distance has been reached without finding a valid port.
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export async function findLivePort(
    originWithStartingPort: string,
    /** The endpoint to send fetches to for detecting a live port. */
    endpoint: EndpointDefinition,
    {
        fetchOverride,
        maxScanDistance = 100,
        isValidResponse,
        timeout = {
            seconds: 10,
        },
    }: Readonly<Omit<FindPortOptions, 'startOrigin'>>,
): Promise<number | undefined> {
    const {port: originalPort} = parseUrl(originWithStartingPort);
    if (!originalPort) {
        return undefined;
    }

    const startingPort = Number(originalPort);

    if (!check.isNumber(startingPort)) {
        throw new TypeError(
            `Origin '${originWithStartingPort}' doesn't have a valid port: '${originalPort}'.`,
        );
    }

    let findDistance: number = 0;

    let foundValidPort = false;

    const timeoutMs = convertDuration(timeout, {
        milliseconds: true,
    }).milliseconds;

    const startTime = Date.now();

    while (!foundValidPort) {
        const port = findDistance + startingPort;
        if (Date.now() - startTime >= timeoutMs) {
            throw new Error(`Port scan timeout reached. Last scanned port: ${port - 1}`);
        }

        const newUrl = buildUrl(originWithStartingPort, {
            pathname: endpoint.path,
            port,
        }).href;

        const response = await wrapInTry(() =>
            (fetchOverride || fetch)(
                newUrl,
                {
                    method: HttpMethod.Options,
                },
                endpoint,
            ),
        );

        if (
            !check.instanceOf(response, Error) &&
            response.ok &&
            (isValidResponse ? isValidResponse(response) : true)
        ) {
            foundValidPort = true;
        } else if (findDistance >= maxScanDistance) {
            throw new Error(`Max port scan distance reached. Last scanned port: ${port}`);
        } else {
            findDistance++;
        }
    }

    return findDistance + startingPort;
}
