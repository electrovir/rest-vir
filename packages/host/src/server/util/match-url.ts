import {getObjectTypedKeys} from '@augment-vir/common';
import {type ApiDefinition, type BaseRoutePath} from '@rest-vir/api';
import {type RequireAtLeastOne} from 'type-fest';
import {parseUrl} from 'url-vir';
import {match} from './path-to-regexp.js';

/**
 * Given a raw path or URL, finds an endpoint or WebSocket path that will match in the given
 * service. If no match is found, this returns `undefined`.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export function matchUrlToRoute(
    this: void,
    api: ApiDefinition,
    /** The URL or path to match against. */
    url: string,
): MatchedServicePath | undefined {
    const {pathname} = parseUrl(url);

    const endpointPath = getObjectTypedKeys(api.endpoints).find((endpointPath) => {
        return match(endpointPath)(pathname);
    });
    const webSocketPath = getObjectTypedKeys(api.webSockets).find((webSocketPath) => {
        return match(webSocketPath)(pathname);
    });

    if (!endpointPath && !webSocketPath) {
        return undefined;
    }
    /**
     * Both endpoint and websocket can be registered at the same path (e.g. `/chat` with a GET
     * endpoint and a websocket upgrade on the same URL). Return whichever side matched so callers
     * can decide based on `request.ws` whether to dispatch the websocket implementation or the
     * endpoint implementation.
     */
    return {
        ...(endpointPath
            ? {
                  endpointPath,
              }
            : {}),
        ...(webSocketPath
            ? {
                  webSocketPath,
              }
            : {}),
    };
}

/**
 * Output for {@link matchUrlToRoute}.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type MatchedServicePath = RequireAtLeastOne<{
    webSocketPath: BaseRoutePath;
    endpointPath: BaseRoutePath;
}>;
