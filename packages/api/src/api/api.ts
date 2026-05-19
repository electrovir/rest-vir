import {type ArrayElement, type PartialWithUndefined} from '@augment-vir/common';
import {type EndpointDefinition} from './endpoint.js';
import {type BaseRoutePath} from './route.js';
import {type WebSocketDefinition} from './web-socket.js';

/**
 * Thrown from {@link defineApi} when a known runtime error is encountered while defining an API.
 *
 * @category Error
 * @category Package : @rest-vir/api
 * @example
 *
 * ```ts
 * import {defineApi, DefineApiError} from '@rest-vir/api';
 *
 * try {
 *     defineApi({
 *         endpoints: [
 *             {path: '/users', requests: {}},
 *             {path: '/users', requests: {}},
 *         ],
 *     });
 * } catch (error) {
 *     if (error instanceof DefineApiError) {
 *         console.error('API definition problem:', error.message);
 *     }
 * }
 * ```
 *
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export class DefineApiError extends Error {
    public override readonly name = 'DefineApiError';
}

/**
 * Define an API from arrays of Endpoints and WebSockets. Each array's path literals are captured
 * into the returned {@link ApiDefinition}'s record keys without also capturing each route's full
 * shape, which keeps TypeScript from getting overwhelmed on large APIs.
 *
 * @category Define Api
 * @category Package : @rest-vir/api
 * @example
 *
 * ```ts
 * import {defineEndpoint, defineApi, HttpMethod, HttpStatus} from '@rest-vir/api';
 * import {defineShape} from 'object-shape-tester';
 *
 * const usersEndpoint = defineEndpoint({
 *     path: '/users',
 *     requests: {
 *         [HttpMethod.Get]: {
 *             responses: {
 *                 [HttpStatus.Ok]: {
 *                     responseData: defineShape({users: ['']}),
 *                 },
 *             },
 *         },
 *     },
 * });
 * const itemsEndpoint = defineEndpoint({
 *     path: '/items',
 *     requests: {
 *         [HttpMethod.Get]: {
 *             responses: {
 *                 [HttpStatus.Ok]: {
 *                     responseData: defineShape({items: ['']}),
 *                 },
 *             },
 *         },
 *     },
 * });
 *
 * const result = defineApi({
 *     apiName: 'my-api',
 *     endpoints: [
 *         usersEndpoint,
 *         itemsEndpoint,
 *     ],
 *     webSockets: [],
 * });
 * ```
 *
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function defineApi<
    const EndpointPaths extends ReadonlyArray<BaseRoutePath> = [],
    const WebSocketPaths extends ReadonlyArray<BaseRoutePath> = [],
>(
    apiInit: Readonly<ApiInit<EndpointPaths, WebSocketPaths>>,
): ApiDefinition<ArrayElement<EndpointPaths>, ArrayElement<WebSocketPaths>> {
    return {
        apiName: apiInit.apiName,
        endpoints: apiInit.endpoints
            ? mapRouteByPath(
                  'endpoints',
                  apiInit.endpoints as ReadonlyArray<Readonly<EndpointDefinition>>,
              )
            : {},
        webSockets: apiInit.webSockets
            ? mapRouteByPath(
                  'webSockets',
                  apiInit.webSockets as ReadonlyArray<Readonly<WebSocketDefinition>>,
              )
            : {},
    };
}

/**
 * Input type for {@link defineApi}. Generic over each list's inferred path union so the returned
 * {@link ApiDefinition} can narrow its path keys accordingly.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type ApiInit<
    EndpointPaths extends ReadonlyArray<BaseRoutePath> = ReadonlyArray<BaseRoutePath>,
    WebSocketPaths extends ReadonlyArray<BaseRoutePath> = ReadonlyArray<BaseRoutePath>,
> = PartialWithUndefined<{
    endpoints: {
        readonly [K in keyof EndpointPaths]: Readonly<EndpointDefinition> &
            Readonly<{path: EndpointPaths[K]}>;
    };
    webSockets: {
        readonly [K in keyof WebSocketPaths]: Readonly<WebSocketDefinition> &
            Readonly<{path: WebSocketPaths[K]}>;
    };
}> & {
    apiName: string;
};

/**
 * Output of {@link defineApi}. Path-keyed records of Endpoints and WebSockets, narrowed to the path
 * literals found in the input arrays.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type ApiDefinition<
    EndpointPaths extends BaseRoutePath = BaseRoutePath,
    WebSocketPaths extends BaseRoutePath = BaseRoutePath,
> = {
    apiName: string;
    endpoints: Readonly<Record<EndpointPaths, Readonly<EndpointDefinition>>>;
    webSockets: Readonly<Record<WebSocketPaths, Readonly<WebSocketDefinition>>>;
};

function mapRouteByPath<Route extends Readonly<{path: BaseRoutePath}>>(
    routeType: keyof ApiInit,
    routes: ReadonlyArray<Readonly<Route>>,
): Readonly<Record<BaseRoutePath, Route>> {
    const duplicatePaths = new Set<string>();

    const keyedRoutes = routes.reduce(
        (accum, route) => {
            if (route.path in accum) {
                duplicatePaths.add(route.path);
            } else {
                accum[route.path] = route;
            }

            return accum;
        },
        {} as Record<BaseRoutePath, Route>,
    );

    if (duplicatePaths.size) {
        throw new DefineApiError(
            `Duplicate API ${routeType} paths: ${Array.from(duplicatePaths).join(',')}`,
        );
    }

    return keyedRoutes;
}
