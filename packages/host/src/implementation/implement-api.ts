import {
    type ApiDefinition,
    type EndpointDefinition,
    type NoParam,
    type OriginRequirement,
    type SetNullishPropertiesAsOptional,
    type WebSocketDefinition,
} from '@rest-vir/api';
import {type IsEqual, type IsNever} from 'type-fest';
import {type CreateHostContext} from './host-context.js';
import {type EndpointImplementation} from './implement-endpoint.js';
import {type WebSocketImplementation} from './implement-websocket.js';
import {type PostRouteHook} from './post-route-hook.js';
import {type UserServerLogger} from './server-logger.js';

export function implementApi<HostContext = unknown>() {
    return <const Api extends Readonly<ApiDefinition>>(
        api: Readonly<Api>,
        implementations: Readonly<ApiRouteImplementations<NoInfer<Api>, NoInfer<HostContext>>>,
    ): Readonly<ApiImplementation<Api, HostContext>> => {
        return {
            definition: api,
            implementation: implementations,
        };
    };
}

export type ApiImplementation<
    Api extends Readonly<ApiDefinition> | NoParam = NoParam,
    HostContext = unknown,
> = {
    definition: IsEqual<Api, NoParam> extends true ? Readonly<ApiDefinition> : Readonly<Api>;
    implementation: Readonly<ApiRouteImplementations<Api, HostContext>>;
};

export type ApiRouteImplementations<
    Api extends ApiDefinition | NoParam = NoParam,
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
    postRouteHook: PostRouteHook<NoInfer<HostContext>> | undefined;
    clientOriginRequirement: OriginRequirement | undefined;
}> &
    (Api extends ApiDefinition
        ? IsNever<keyof Extract<Api, ApiDefinition>['endpoints']> extends true
            ? {
                  endpoints?: undefined;
              }
            : {
                  endpoints: {
                      [Path in keyof Api['endpoints']]: EndpointImplementation<
                          EndpointDefinition & {
                              path: Path;
                          },
                          NoInfer<HostContext>
                      >;
                  };
              }
        : {endpoints?: undefined | Record<string, EndpointImplementation>}) &
    (Api extends ApiDefinition
        ? IsNever<keyof Api['webSockets']> extends true
            ? {webSockets?: undefined}
            : {
                  webSockets: {
                      [Path in keyof Api['webSockets']]: WebSocketImplementation<
                          WebSocketDefinition & {path: Path},
                          NoInfer<HostContext>
                      >;
                  };
              }
        : {
              webSockets?: undefined | Record<string, WebSocketImplementation>;
          });
