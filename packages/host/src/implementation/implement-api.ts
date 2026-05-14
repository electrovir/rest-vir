import {
    type ApiDefinition,
    type NoParam,
    type OriginRequirement,
    type SetNullishPropertiesAsOptional,
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
                  /**
                   * Per-key mapped type that narrows each slot's `path` field via `Pick` from the
                   * uniform endpoint definition. Only the `path` field is recomputed per key — the
                   * rest of the implementation type is computed once and shared, so the per-slot
                   * cost is constant. This rejects an implementation whose `path` doesn't match the
                   * slot it's being assigned to.
                   *
                   * A naive `EndpointImplementation<EndpointDefinition & {path: Path}, ...>` form
                   * recomputes the entire implementation type per key (all HTTP method shapes,
                   * search params, request data, etc.) and exceeded TypeScript's recursion budget
                   * at ~1,600 endpoints.
                   */
                  endpoints: {
                      [Path in keyof Api['endpoints']]: NarrowRoutePath<
                          EndpointImplementation<any, NoInfer<HostContext>>,
                          Path
                      >;
                  };
              }
        : {endpoints?: undefined | Record<string, EndpointImplementation>}) &
    (Api extends ApiDefinition
        ? IsNever<keyof Api['webSockets']> extends true
            ? {webSockets?: undefined}
            : {
                  webSockets: {
                      [Path in keyof Api['webSockets']]: NarrowRoutePath<
                          WebSocketImplementation<any, NoInfer<HostContext>>,
                          Path
                      >;
                  };
              }
        : {
              webSockets?: undefined | Record<string, WebSocketImplementation>;
          });

/**
 * Replaces just the `path` field on a route implementation slot type with the literal `Path`. Using
 * `Omit` + intersection keeps the rest of the implementation type computed-once at the call site
 * while still enforcing per-slot path narrowing on the small `path` field.
 */
type NarrowRoutePath<Impl, Path> = Omit<Impl, 'path'> & {path: Path};
