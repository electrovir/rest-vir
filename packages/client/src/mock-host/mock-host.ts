import {type PartialWithUndefined} from '@augment-vir/common';
import {type ApiDefinition} from '@rest-vir/api';
import {RestVirClient} from '../client.js';
import {type MockCreateHostContext} from './mock-host-context.js';
import {createMockHostFetch} from './mock-host-fetch.js';
import {type MockHostEndpointMap, type MockHostWebSocketMap} from './mock-host-route-map.js';
import {createMockHostWebSocketConstructor} from './mock-host-web-socket-constructor.js';

/**
 * Options for {@link createMockHost}.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type MockHostParams<Api extends Readonly<ApiDefinition>, Context> = PartialWithUndefined<{
    createHostContext: MockCreateHostContext<Context>;
    endpoints: Readonly<MockHostEndpointMap<Api, Context>>;
    webSockets: Readonly<MockHostWebSocketMap<Api, Context>>;
}>;

/**
 * Build a frontend-side mock of an API and return a fully wired {@link RestVirClient} that talks to
 * it. Drop-in replacement for constructing a real `RestVirClient` against a backend: the same
 * `.fetch()`/`.connectWebSocket()` calls work, but every request is served by your declared mock
 * implementations in-process.
 *
 * @category Testing
 * @category Package : @rest-vir/client
 * @example
 *
 * ```ts
 * import {createMockHost} from '@rest-vir/client';
 *
 * const mockClient = createMockHost(myApi, {
 *     endpoints: {
 *         '/users': {
 *             GET: () => ({[HttpStatus.Ok]: {responseData: {users: []}}}),
 *         },
 *     },
 *     webSockets: {
 *         '/chat': {
 *             message: ({message, webSocket}) => {
 *                 webSocket.send(`echo: ${message}`);
 *             },
 *         },
 *     },
 * });
 *
 * const usersResponse = await mockClient.fetch(myApi.endpoints['/users'], HttpMethod.Get);
 * const chat = await mockClient.connectWebSocket(myApi.webSockets['/chat']);
 * ```
 *
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export function createMockHost<const Api extends Readonly<ApiDefinition>, const Context = unknown>(
    api: Readonly<Api>,
    params: Readonly<MockHostParams<Api, Context>> = {},
): RestVirClient<Api> {
    const endpointImplementations: MockHostEndpointMap<Api, Context> = params.endpoints ?? {};
    const webSocketImplementations: MockHostWebSocketMap<Api, Context> = params.webSockets ?? {};

    const mockFetch = createMockHostFetch<Api, Context>({
        endpointImplementations,
        createHostContext: params.createHostContext,
    });

    const webSocketConstructor = createMockHostWebSocketConstructor<Context>({
        webSocketImplementations,
        createHostContext: params.createHostContext,
    });

    return new RestVirClient(api, '', mockFetch, webSocketConstructor);
}
