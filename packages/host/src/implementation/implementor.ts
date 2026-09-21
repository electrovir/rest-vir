import {type ApiDefinition, type EndpointDefinition, type WebSocketDefinition} from '@rest-vir/api';
import {
    type EndpointImplementation,
    type EndpointMethodImplementations,
} from './implement-endpoint.js';
import {
    type WebSocketImplementation,
    type WebSocketListenerImplementations,
} from './implement-websocket.js';

/**
 * @category Host
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export function createApiImplementor<HostContext>(this: void) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return <Api extends Readonly<ApiDefinition>>(api: Api) => {
        return {
            implementEndpoint<
                const Endpoint extends Readonly<EndpointDefinition> & {
                    path: keyof Api['endpoints'];
                },
            >(
                this: void,
                endpoint: Readonly<Endpoint>,
                implementation: Readonly<
                    EndpointMethodImplementations<NoInfer<Endpoint>, HostContext>
                >,
            ): EndpointImplementation<Endpoint, HostContext> {
                return {
                    path: endpoint.path,
                    implementation,
                    definition: endpoint,
                    isEndpoint: true,
                    isWebSocket: false,
                } satisfies EndpointImplementation as EndpointImplementation<Endpoint, HostContext>;
            },
            implementWebSocket<
                const ThisWebSocket extends Readonly<WebSocketDefinition> & {
                    path: keyof Api['webSockets'];
                },
            >(
                this: void,
                webSocket: Readonly<ThisWebSocket>,
                implementation: Readonly<
                    WebSocketListenerImplementations<NoInfer<ThisWebSocket>, HostContext>
                >,
            ): WebSocketImplementation<ThisWebSocket, HostContext> {
                return {
                    path: webSocket.path,
                    implementation,
                    definition: webSocket,
                    isEndpoint: false,
                    isWebSocket: true,
                };
            },
        };
    };
}
