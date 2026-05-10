import {type ApiDefinition, type EndpointDefinition, type WebSocketDefinition} from '@rest-vir/api';
import {
    type EndpointImplementation,
    type EndpointMethodImplementations,
} from './implement-endpoint.js';
import {
    type WebSocketImplementation,
    type WebSocketListenerImplementations,
} from './implement-websocket.js';

export function createApiImplementor<HostContext>(this: void) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return <Api extends Readonly<ApiDefinition>>(api: Api) => {
        return {
            implementEndpoint: <
                const Endpoint extends Readonly<EndpointDefinition> & {
                    path: keyof Api['endpoints'];
                },
            >(
                endpoint: Readonly<Endpoint>,
                implementation: Readonly<
                    EndpointMethodImplementations<NoInfer<Endpoint>, HostContext>
                >,
            ): EndpointImplementation<Endpoint> => {
                return {
                    path: endpoint.path,
                    implementation,
                    definition: endpoint,
                    isEndpoint: true,
                    isWebSocket: false,
                };
            },
            implementWebSocket: <
                const ThisWebSocket extends Readonly<WebSocketDefinition> & {
                    path: keyof Api['webSockets'];
                },
            >(
                webSocket: Readonly<ThisWebSocket>,
                implementation: Readonly<
                    WebSocketListenerImplementations<NoInfer<ThisWebSocket>, HostContext>
                >,
            ): WebSocketImplementation<ThisWebSocket['path']> => {
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
