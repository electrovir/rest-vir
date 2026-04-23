import {type PartialWithUndefined} from '@augment-vir/common';
import {type EndpointDefinition} from './endpoint.js';
import {type BaseRoutePath} from './route.js';
import {type WebSocketDefinition} from './web-socket.js';

export class DefineApiError extends Error {
    public override readonly name = 'ApiDefinitionError';
}

export function defineApi(apiInit: Readonly<ApiInit>): Readonly<ApiDefinition> {
    return {
        endpoints: apiInit.endpoints ? mapRouteByPath('endpoints', apiInit.endpoints) : {},
        webSockets: apiInit.webSockets ? mapRouteByPath('webSockets', apiInit.webSockets) : {},
    };
}

/**
 * Widens a list of endpoints so the array's element type collapses to {@link EndpointDefinition}
 * rather than a union of each endpoint's literal type. Use this at large endpoint counts to keep
 * TypeScript from forming a huge element union on the {@link defineApi} call.
 */
export function endpointsList(
    ...endpoints: ReadonlyArray<EndpointDefinition>
): ReadonlyArray<EndpointDefinition> {
    return endpoints;
}

/** Widens a list of web sockets in the same way as {@link endpointsList}. */
export function webSocketsList(
    ...webSockets: ReadonlyArray<WebSocketDefinition>
): ReadonlyArray<WebSocketDefinition> {
    return webSockets;
}

export type ApiInit = PartialWithUndefined<{
    webSockets: ReadonlyArray<Readonly<WebSocketDefinition>>;
    endpoints: ReadonlyArray<Readonly<EndpointDefinition>>;
}>;

export type ApiDefinition = {
    endpoints: Readonly<Record<BaseRoutePath, Readonly<EndpointDefinition>>>;
    webSockets: Readonly<Record<BaseRoutePath, Readonly<WebSocketDefinition>>>;
};

function mapRouteByPath<Route extends Readonly<{path: BaseRoutePath}>>(
    routeType: keyof ApiInit,
    routes: ReadonlyArray<Readonly<Route>>,
): Readonly<Record<BaseRoutePath, Route>> {
    const duplicatePaths = new Set<string>();

    const keyedRoutes = routes.reduce(
        (accum, route) => {
            if (route.path in accum) {
                duplicatePaths.add(route.path);
            } else {
                accum[route.path] = route;
            }

            return accum;
        },
        {} as Record<BaseRoutePath, Route>,
    );

    if (duplicatePaths.size) {
        throw new DefineApiError(
            `Duplicate API ${routeType} paths: ${Array.from(duplicatePaths).join(',')}`,
        );
    }

    return keyedRoutes;
}
