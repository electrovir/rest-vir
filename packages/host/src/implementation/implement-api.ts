import {
    type ApiDefinition,
    type OriginRequirement,
    type SetNullishPropertiesAsOptional,
} from '@rest-vir/api';
import {type CreateHostContext} from './host-context.js';
import {type EndpointImplementation} from './implement-endpoint.js';
import {type WebSocketImplementation} from './implement-websocket.js';
import {type PostRouteHook} from './post-route-hook.js';
import {type UserServerLogger} from './server-logger.js';

export function implementApi<HostContext = unknown>() {
    return <const Api extends Readonly<ApiDefinition>>(
        api: Readonly<Api>,
        implementation: Readonly<ApiRouteImplementations<NoInfer<Api>, NoInfer<HostContext>>>,
    ): Readonly<ApiImplementation<Api, HostContext>> => {
        return {
            definition: api,
            implementation,
        };
    };
}

export type ApiImplementation<
    Api extends Readonly<ApiDefinition> = ApiDefinition,
    HostContext = unknown,
> = {
    definition: Readonly<Api>;
    implementation: Readonly<ApiRouteImplementations<Api, HostContext>>;
};

export type ApiRouteImplementations<
    Api extends ApiDefinition = ApiDefinition,
    HostContext = any,
> = SetNullishPropertiesAsOptional<{
    /** Set all custom headers that you'll be using here so that CORS will allow them. */
    customHeaders: string[] | undefined;
    createHostContext: CreateHostContext<HostContext>;
    serverLogger: UserServerLogger | undefined;
    /**
     * Fired after every request resolves, before it is sent. This hooks into Fastify with the
     * `onSend` hook.
     */
    postRouteHook: PostRouteHook<HostContext> | undefined;
    clientOriginRequirement: OriginRequirement | undefined;
}> & {
    endpoints: Record<keyof Api['endpoints'], EndpointImplementation>;
    webSockets: Record<keyof Api['webSockets'], WebSocketImplementation>;
};
