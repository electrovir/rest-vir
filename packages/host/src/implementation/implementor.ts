import {type ApiDefinition, type EndpointDefinition, type WebSocketDefinition} from '@rest-vir/api';
import {type EndpointImplementation, type ImplementedEndpoint} from './implement-endpoint.js';
import {type WebSocketImplementation} from './implement-websocket.js';

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
                implementation: Readonly<EndpointImplementation<NoInfer<Endpoint>, HostContext>>,
            ): ImplementedEndpoint<Endpoint['path']> => {
                return {
                    path: endpoint.path,
                    implementation,
                };
            },
            implementWebSocket: <
                const ThisWebSocket extends Readonly<WebSocketDefinition> & {
                    path: keyof Api['webSockets'];
                },
            >(
                webSocket: Readonly<ThisWebSocket>,
                implementation: Readonly<
                    WebSocketImplementation<NoInfer<ThisWebSocket>, HostContext>
                >,
            ) => {
                return {
                    path: webSocket.path,
                    implementation,
                };
            },
        };
    };
}
