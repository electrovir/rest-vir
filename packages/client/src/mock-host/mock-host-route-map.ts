import {
    type ApiDefinition,
    type EndpointDefinition,
    type WebSocketDefinition,
} from '@rest-vir/api';
import {type MockEndpointMethodImplementations} from './mock-endpoint-implementation.js';
import {type MockWebSocketListenerImplementations} from './mock-web-socket-implementation.js';

/**
 * Map of endpoint path → mock implementations. Each key must exist in the api's `endpoints` record.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type MockHostEndpointMap<Api extends Readonly<ApiDefinition>, Context> = {
    [Path in keyof Api['endpoints']]?: MockEndpointMethodImplementations<
        Extract<Api['endpoints'][Path], EndpointDefinition>,
        Context
    >;
};

/**
 * Map of WebSocket path → mock listener implementations. Each key must exist in the api's
 * `webSockets` record.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type MockHostWebSocketMap<Api extends Readonly<ApiDefinition>, Context> = {
    [Path in keyof Api['webSockets']]?: MockWebSocketListenerImplementations<
        Extract<Api['webSockets'][Path], WebSocketDefinition>,
        Context
    >;
};
