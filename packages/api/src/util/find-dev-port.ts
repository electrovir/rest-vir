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
 * This header is set on all responses handled by rest-vir so we know what api a response came from.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export const restVirApiNameHeader = 'rest-vir-api';

/**
 * Options for {@link findDevServerPort} and {@link findLivePort}.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
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
 * Use this to find an api's port number when its server was started without a locked-in port. The
 * client (usually a website frontend) scans upward from the port in `startOrigin`, sending an
 * `OPTIONS` request to the api's first endpoint until one responds with a matching
 * {@link restVirApiNameHeader}.
 *
 * Note that the api given must have at least one endpoint defined for this function to work.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @example
 *
 * ```ts
 * import {HttpMethod, HttpStatus, defineApi, defineEndpoint} from '@rest-vir/api';
 * import {findDevServerPort} from '@rest-vir/api';
 *
 * const myApi = defineApi({
 *     apiName: 'my-api',
 *     endpoints: [
 *         defineEndpoint({
 *             path: '/my-path',
 *             requests: {
 *                 [HttpMethod.Get]: {
 *                     responses: {
 *                         [HttpStatus.Ok]: {
 *                             responseData: undefined,
 *                         },
 *                     },
 *                 },
 *             },
 *         }),
 *     ],
 *     webSockets: [],
 * });
 *
 * const {origin} = await findDevServerPort(myApi, {
 *     startOrigin: 'https://localhost:3000',
 * });
 * ```
 *
 * @returns `undefined` if `startOrigin` has no port to start scanning from.
 * @throws Error If the max scan distance or timeout is reached without finding a valid port.
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export async function findDevServerPort(
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
            throw new Error('Api has no endpoints.');
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
 * @category Package : @rest-vir/api
 * @returns `undefined` if the given origin has no port number to start with.
 * @throws Error if the max scan distance or timeout is reached without finding a valid port.
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
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
