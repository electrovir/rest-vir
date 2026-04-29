import {type ApiDefinition, type EndpointDefinition, type WebSocketDefinition} from '@rest-vir/api';
import {
    type EndpointMethodImplementations,
    type ImplementedEndpoint,
} from './implement-endpoint.js';
import {
    type ImplementedWebSocket,
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
            ): ImplementedEndpoint<Endpoint['path']> => {
                return {
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
            ): ImplementedWebSocket<ThisWebSocket['path']> => {
                return {
                    implementation,
                    definition: webSocket,
                    isEndpoint: false,
                    isWebSocket: true,
                };
            },
        };
    };
}
