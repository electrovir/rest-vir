import {type PartialWithUndefined} from '@augment-vir/common';
import {
    type ApiDefinition,
    type BaseRoutePath,
    type NoParam,
    type OriginRequirement,
} from '@rest-vir/api';
import {type IsEqual} from 'type-fest';
import {type CreateHostContext} from './host-context.js';
import {type EndpointImplementation} from './implement-endpoint.js';
import {type WebSocketImplementation} from './implement-websocket.js';
import {type PostRouteHook} from './post-route-hook.js';
import {type UserServerLogger} from './server-logger.js';

export function implementApi<HostContext = unknown>() {
    return <
        const Api extends Readonly<ApiDefinition>,
        const EndpointPaths extends ReadonlyArray<BaseRoutePath> = [],
        const WebSocketPaths extends ReadonlyArray<BaseRoutePath> = [],
    >(
        api: Readonly<Api>,
        implementations: Readonly<
            ApiRouteImplementations<EndpointPaths, WebSocketPaths, NoInfer<HostContext>>
        >,
    ): Readonly<ApiImplementation<Api, HostContext>> => {
        const {endpoints, webSockets, ...rest} = implementations;
        const endpointsResult = collectImplementationsByPath(
            'endpoints',
            endpoints as ReadonlyArray<Readonly<{path: BaseRoutePath}>> | undefined,
            Object.keys(api.endpoints),
        );
        const webSocketsResult = collectImplementationsByPath(
            'webSockets',
            webSockets as ReadonlyArray<Readonly<{path: BaseRoutePath}>> | undefined,
            Object.keys(api.webSockets),
        );

        /**
         * Collect validation errors from both implementation groups before throwing so the user
         * sees every missing/duplicate path in one message rather than only the endpoint group's
         * problems (which would otherwise short-circuit any webSocket diagnostics).
         */
        const allErrorParts = [
            ...endpointsResult.errorParts,
            ...webSocketsResult.errorParts,
        ];
        if (allErrorParts.length) {
            throw new ImplementApiError(
                `implementApi validation failed: ${allErrorParts.join('; ')}.`,
            );
        }

        return {
            definition: api,
            implementation: {
                ...rest,
                endpoints: endpointsResult.keyed,
                webSockets: webSocketsResult.keyed,
            },
        } as Readonly<ApiImplementation<Api, HostContext>>;
    };
}

/**
 * Stored shape of an `ApiImplementation`. `endpoints` and `webSockets` are records keyed by route
 * path so the runtime can dispatch incoming requests by path with a single object lookup. Keys are
 * `string` and the api definition's per-path key union is intentionally not propagated into this
 * type — that's what keeps TypeScript instantiation work flat at large route counts.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type ApiImplementation<
    Api extends Readonly<ApiDefinition> | NoParam = NoParam,
    HostContext = unknown,
> = {
    definition: IsEqual<Api, NoParam> extends true ? Readonly<ApiDefinition> : Readonly<Api>;
    implementation: ApiImplementationStored<HostContext>;
};

/**
 * The runtime-stored shape of `ApiImplementation.implementation`. Built from the arrays passed to
 * `implementApi` by keying each route implementation under its `path` field.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type ApiImplementationStored<HostContext = unknown> = PartialWithUndefined<{
    customHeaders: string[];
    serverLogger: UserServerLogger;
    postRouteHook: PostRouteHook<HostContext>;
    clientOriginRequirement: OriginRequirement;
}> & {
    createHostContext: CreateHostContext<HostContext>;
    endpoints: Readonly<Record<string, Readonly<EndpointImplementation<any, HostContext>>>>;
    webSockets: Readonly<Record<string, Readonly<WebSocketImplementation<any, HostContext>>>>;
};

/**
 * Input shape for `implementApi`. `endpoints` and `webSockets` are flat arrays of fully-typed
 * implementations. TypeScript verifies each element against a single uniform element type — no
 * per-element path narrowing, no tuple-of-paths generic. That mirrors how runtime dispatch works
 * (each implementation carries its own `path`) and keeps the type-check work flat regardless of
 * route count. Runtime coverage checks against the api definition catch missing or duplicate
 * paths.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type ApiRouteImplementations<
    EndpointPaths extends ReadonlyArray<BaseRoutePath> = ReadonlyArray<BaseRoutePath>,
    WebSocketPaths extends ReadonlyArray<BaseRoutePath> = ReadonlyArray<BaseRoutePath>,
    HostContext = any,
> = PartialWithUndefined<{
    /** Set all custom headers that you'll be using here so that CORS will allow them. */
    customHeaders: string[];
    serverLogger: UserServerLogger;
    /**
     * Fired after every request resolves, before it is sent. This hooks into Fastify with the
     * `onSend` hook.
     */
    postRouteHook: PostRouteHook<NoInfer<HostContext>>;
    clientOriginRequirement: OriginRequirement;
    /**
     * Per-index mapped type, mirroring how `defineApi`'s `ApiInit.endpoints` is shaped. The slot
     * type is intentionally shallow (`path` + `isEndpoint`) so TS only compares two fields per
     * element instead of the dozen nested-conditional fields on `EndpointImplementation`. That
     * shallowness is what lets `defineApi` scale to 10k+ routes; the same pattern works here. Each
     * element's `path` literal flows up into the `EndpointPaths` tuple via the `& {path:
     * EndpointPaths[K]}` intersection.
     */
    endpoints: {
        readonly [K in keyof EndpointPaths]: Readonly<{
            path: EndpointPaths[K];
            isEndpoint: true;
        }>;
    };
    webSockets: {
        readonly [K in keyof WebSocketPaths]: Readonly<{
            path: WebSocketPaths[K];
            isWebSocket: true;
        }>;
    };
}> & {
    createHostContext: CreateHostContext<HostContext>;
};

/**
 * Thrown when `implementApi` encounters duplicate route paths or finds that an api-declared path is
 * missing from the provided implementations.
 *
 * @category Error
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export class ImplementApiError extends Error {
    public override readonly name = 'ImplementApiError';
}

/**
 * Build the path-keyed record for one route group (endpoints or webSockets) and return any
 * missing/duplicate-path diagnostics as `errorParts`. The caller is responsible for combining
 * `errorParts` across both groups and throwing.
 */
function collectImplementationsByPath(
    label: 'endpoints' | 'webSockets',
    items: ReadonlyArray<Readonly<{path: BaseRoutePath}>> | undefined,
    requiredPaths: ReadonlyArray<string>,
): {
    keyed: Readonly<Record<string, Readonly<{path: BaseRoutePath}>>>;
    errorParts: ReadonlyArray<string>;
} {
    const keyed: Record<string, Readonly<{path: BaseRoutePath}>> = {};
    const duplicates = new Set<string>();
    (items ?? []).forEach((item) => {
        if (item.path in keyed) {
            duplicates.add(item.path);
        } else {
            keyed[item.path] = item;
        }
    });
    const missing = requiredPaths.filter((path) => !(path in keyed));

    const errorParts: string[] = [];
    if (missing.length) {
        errorParts.push(`missing ${label} paths: ${missing.join(', ')}`);
    }
    if (duplicates.size) {
        errorParts.push(`duplicate ${label} paths: ${Array.from(duplicates).join(', ')}`);
    }
    return {
        keyed,
        errorParts,
    };
}
