import {check} from '@augment-vir/assert';
import {
    combineErrorMessages,
    HttpStatus,
    stringify,
    wrapInTry,
    type ErrorHttpStatus,
    type SelectFrom,
} from '@augment-vir/common';
import {
    type ApiDefinition,
    type BaseSearchParams,
    type CommonRouteDefinition,
    type RouteSearchParamsType,
} from '@rest-vir/api';
import {extractSearchParams} from '@rest-vir/api';
import {type EndpointImplementation} from '../../implementation/implement-endpoint.js';
import {type WebSocketImplementation} from '../../implementation/implement-websocket.js';
import {type ServerRequest} from '../../implementation/raw-route-data.js';
import {type ServerLogger} from '../../implementation/server-logger.js';
import {RestVirHandlerError} from '../util/handler.error.js';

/**
 * Handles a request's search params and compares it against the route's required search params
 * shape, if it has any.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export function handleSearchParams({
    request,
    route,
    serverLogger,
    api,
}: Readonly<{
    request: Readonly<
        SelectFrom<
            ServerRequest,
            {
                originalUrl: true;
                method: true;
                query: true;
            }
        >
    >;
    route: Readonly<EndpointImplementation | WebSocketImplementation>;
    serverLogger: Readonly<ServerLogger>;
    api: Readonly<ApiDefinition>;
}>):
    | {
          body?: string;
          /**
           * If this is set, then the response is sent with this status code and the given body (if
           * any).
           */
          statusCode: ErrorHttpStatus;
      }
    | {
          searchParams: BaseSearchParams;
      } {
    const method = request.method.toUpperCase();
    const searchParamRequirement: CommonRouteDefinition['searchParams'] = route.isWebSocket
        ? route.definition.searchParams
        : check.isKeyOf(method, route.definition.requests)
          ? route.definition.requests[method]?.searchParams
          : undefined;
    const rawQuery = (request.query || {}) as RouteSearchParamsType;

    const searchParams = wrapInTry(() => extractSearchParams(searchParamRequirement, rawQuery));

    if (searchParams instanceof Error) {
        serverLogger.error(
            new RestVirHandlerError(
                {
                    apiName: api.apiName,
                    ...route,
                },
                combineErrorMessages(
                    `Search params failed for ${stringify(rawQuery)}.`,
                    searchParams,
                ),
                HttpStatus.BadRequest,
            ),
        );
        return {
            body: 'Invalid search params.',
            statusCode: HttpStatus.BadRequest,
        };
    }

    return {
        searchParams,
    };
}
