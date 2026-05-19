import {type ApiDefinition} from '../api/api.js';
import {type EndpointDefinition} from '../api/endpoint.js';
import {type WebSocketDefinition} from '../api/web-socket.js';
import {type MockEndpointMethodImplementations} from './mock-endpoint-implementation.js';
import {type MockWebSocketListenerImplementations} from './mock-web-socket-implementation.js';

/**
 * Map of endpoint path → mock implementations. Each key must exist in the api's `endpoints` record.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
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
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type MockHostWebSocketMap<Api extends Readonly<ApiDefinition>, Context> = {
    [Path in keyof Api['webSockets']]?: MockWebSocketListenerImplementations<
        Extract<Api['webSockets'][Path], WebSocketDefinition>,
        Context
    >;
};
