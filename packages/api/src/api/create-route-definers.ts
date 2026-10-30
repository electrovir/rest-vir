import {mapObjectValues, type UnknownObject} from '@augment-vir/common';
import {
    defineEndpoint,
    type EndpointDefinition,
    type EndpointDefinitionWithRequiredCustomProps,
} from './endpoint.js';
import {
    defineWebSocket,
    type WebSocketDefinition,
    type WebSocketDefinitionWithRequiredCustomProps,
} from './web-socket.js';

/**
 * Options for {@link createRouteDefiners}.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type RouteDefinersOptions<CustomProps extends UnknownObject> = {
    /**
     * Written over every route's `customProps` (every method of an endpoint, and each web socket),
     * replacing whatever the caller set for those keys. Callers must still provide these keys, so
     * narrow their types in `CustomProps` to the forced values: the definers return the caller's
     * own literal type, which would otherwise disagree with the forced runtime value.
     */
    forcedCustomProps?: Readonly<Partial<CustomProps>> | undefined;
};

/**
 * Factory that produces a pair of route definers (`defineCustomEndpoint`, `defineCustomWebSocket`)
 * whose inputs are constrained to require a `customProps` field of the supplied `CustomProps` shape
 * on every method definition. The returned functions otherwise behave exactly like the standard
 * {@link defineEndpoint} and {@link defineWebSocket} functions, except that `forcedCustomProps` (see
 * {@link RouteDefinersOptions}) makes them return a copy with those props written in.
 *
 * @category API
 * @category Package : @rest-vir/api
 * @example
 *
 * ```ts
 * import {createRouteDefiners, HttpMethod, HttpStatus} from '@rest-vir/api';
 *
 * type MyCustomProps = {
 *     requiresAuth: boolean;
 * };
 *
 * export const {defineCustomEndpoint, defineCustomWebSocket} =
 *     createRouteDefiners<MyCustomProps>();
 *
 * const usersEndpoint = defineCustomEndpoint({
 *     path: '/users',
 *     requests: {
 *         [HttpMethod.Get]: {
 *             customProps: {requiresAuth: true},
 *             responses: {[HttpStatus.Ok]: {responseData: undefined}},
 *         },
 *     },
 * });
 * ```
 *
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function createRouteDefiners<CustomProps extends UnknownObject>({
    forcedCustomProps,
}: Readonly<RouteDefinersOptions<CustomProps>> = {}): {
    defineCustomEndpoint: <
        const Endpoint extends EndpointDefinitionWithRequiredCustomProps<CustomProps>,
    >(
        endpoint: Readonly<Endpoint>,
    ) => Readonly<Endpoint>;
    defineCustomWebSocket: <
        const ThisWebSocket extends WebSocketDefinitionWithRequiredCustomProps<CustomProps>,
    >(
        webSocket: Readonly<ThisWebSocket>,
    ) => Readonly<ThisWebSocket>;
} {
    return {
        defineCustomEndpoint(endpoint) {
            if (!forcedCustomProps) {
                return defineEndpoint(endpoint);
            }

            return defineEndpoint({
                ...endpoint,
                requests: mapObjectValues(
                    (endpoint satisfies EndpointDefinition as EndpointDefinition).requests,
                    (httpMethod, request) => {
                        return {
                            ...request,
                            customProps: {
                                ...request.customProps,
                                ...forcedCustomProps,
                            },
                        };
                    },
                ),
            }) satisfies Readonly<EndpointDefinition> as typeof endpoint;
        },
        defineCustomWebSocket(webSocket) {
            if (!forcedCustomProps) {
                return defineWebSocket(webSocket);
            }

            return defineWebSocket({
                ...webSocket,
                customProps: {
                    ...webSocket.customProps,
                    ...forcedCustomProps,
                },
            }) satisfies Readonly<WebSocketDefinition> as typeof webSocket;
        },
    };
}
