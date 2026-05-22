import {type UnknownObject} from '@augment-vir/common';
import {defineEndpoint, type EndpointDefinition} from './endpoint.js';
import {defineWebSocket, type WebSocketDefinition} from './web-socket.js';

/**
 * Factory that produces a pair of route definers (`defineCustomEndpoint`, `defineCustomWebSocket`)
 * with their input `customProps` constrained to the supplied `CustomProps` type. The returned
 * functions otherwise behave exactly like the standard {@link defineEndpoint} and
 * {@link defineWebSocket} functions.
 *
 * @category Define API
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
export function createRouteDefiners<CustomProps extends UnknownObject = UnknownObject>(): {
    defineCustomEndpoint: <const Endpoint extends EndpointDefinition<CustomProps>>(
        endpoint: Readonly<Endpoint>,
    ) => Readonly<Endpoint>;
    defineCustomWebSocket: <const ThisWebSocket extends WebSocketDefinition<CustomProps>>(
        webSocket: Readonly<ThisWebSocket>,
    ) => Readonly<ThisWebSocket>;
} {
    return {
        defineCustomEndpoint(endpoint) {
            return defineEndpoint(endpoint);
        },
        defineCustomWebSocket(webSocket) {
            return defineWebSocket(webSocket);
        },
    };
}
