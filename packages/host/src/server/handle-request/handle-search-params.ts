import {assertValidShape, type Shape} from 'object-shape-tester';
import {parseUrl} from 'url-vir';

/**
 * Handles a request's search params and compares it against the route's required search params
 * shape, if it has any.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export function handleSearchParams({
    request,
    route,
}: Readonly<{
    request: Readonly<Pick<ServerRequest, 'originalUrl'>>;
    route: Readonly<
        SelectFrom<
            ImplementedEndpoint | ImplementedWebSocket,
            {
                searchParamsShape: true;
                service: {
                    logger: true;
                    serviceName: true;
                };
                path: true;
                isEndpoint: true;
                isWebSocket: true;
            }
        >
    >;
}>):
    | {
          body?: string;
          /**
           * If this is set, then the response is sent with this status code and the given body (if
           * any).
           */
          statusCode: HttpStatusByCategory<ErrorHttpStatusCategories>;
      }
    | {
          data: BaseSearchParams;
      } {
    const searchParams = parseUrl(request.originalUrl).searchParams;
    const shape = route.searchParamsShape as undefined | Shape;

    const validationError: undefined | Error = shape
        ? wrapInTry(() => {
              assertValidShape(searchParams, shape, {
                  allowExtraKeys: true,
              });
              return undefined;
          })
        : undefined;

    if (validationError) {
        route.service.logger.error(
            new RestVirHandlerError(
                route,
                `Search params failed for ${stringify(searchParams)}: ${validationError.message}`,
                HttpStatus.BadRequest,
            ),
        );
        return {
            body: 'Invalid search params.',
            statusCode: HttpStatus.BadRequest,
        };
    }

    return {
        data: searchParams,
    };
}
