import {assert, assertWrap, check} from '@augment-vir/assert';
import {ensureErrorAndPrependMessage} from '@augment-vir/common';
import {type ApiDefinition, definableHttpMethods, HttpMethod, HttpStatus} from '@rest-vir/api';
import {readHeaderValue} from '@rest-vir/client';
import {assertValidShape} from 'object-shape-tester';
import {
    type EndpointImplementation,
    type EndpointMethodImplementationParams,
} from '../../implementation/implement-endpoint.js';
import {type RunningServerInfo} from '../../implementation/raw-route-data.js';
import {type ServerLogger} from '../../implementation/server-logger.js';
import {type RestVirRequestContext} from '../run-api/attach-api.js';
import {createRestVirHandlerErrorPrefix, RestVirHandlerError} from '../util/handler.error.js';
import {type HandledOutput, type RouteHandlerParams} from './endpoint-handler.js';
import {buildHandlerParams} from './handler-params.js';

/**
 * Handles an endpoint's implementation execution.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export async function handleEndpointRequest(
    this: void,
    {
        endpoint,
        request,
        response,
        attachId,
        server,
        serverLogger,
        api,
    }: Readonly<
        Omit<RouteHandlerParams, 'route'> & {
            attachId: string;
            endpoint: Readonly<EndpointImplementation>;
            server: Readonly<RunningServerInfo>;
            serverLogger: Readonly<ServerLogger>;
            api: ApiDefinition;
        }
    >,
): Promise<HandledOutput> {
    try {
        // by this point in the request lifecycle, we know that these properties have been set.
        const restVirContext = request.restVirContext?.[attachId] as
            | undefined
            | RestVirRequestContext;
        assert.isDefined(restVirContext, 'restVirContext is not defined');

        const context = restVirContext.context;
        const requestData = restVirContext.requestData;

        const searchParams = restVirContext.searchParams;
        const method = assertWrap.isIn(
            assertWrap.isEnumValue(request.method.toUpperCase(), HttpMethod),
            definableHttpMethods,
        );

        const endpointParams: EndpointMethodImplementationParams = {
            ...buildHandlerParams({
                request,
                requestData,
                response,
                server,
            }),
            method,
            context,
            searchParams,
            endpointDefinition: endpoint.definition,
            serverLogger,
        };

        const endpointMethodImplementation = endpoint.implementation[method];
        const endpointMethodDefinition = endpoint.definition.requests[method];

        if (!endpointMethodImplementation) {
            throw new RestVirHandlerError(
                {
                    apiName: api.apiName,
                    isEndpoint: true,
                    isWebSocket: false,
                    path: endpoint.path,
                },
                `No implementation found for method '${method}'.`,
                HttpStatus.NotFound,
            );
        } else if (!endpointMethodDefinition) {
            throw new RestVirHandlerError(
                {
                    apiName: api.apiName,
                    isEndpoint: true,
                    isWebSocket: false,
                    path: endpoint.path,
                },
                `No definition found for method '${method}'.`,
                HttpStatus.NotFound,
            );
        }

        const endpointResult = await endpointMethodImplementation(endpointParams);

        /** The implementation already handled the response (e.g. SSE streaming). */
        if ('responseHandled' in endpointResult) {
            return undefined;
            /** If the dev forgets to set a status code. */
        }

        const [
            rawStatusCode,
            statusResponse,
        ] = Object.entries(endpointResult)[0] || [];
        const statusCode = Number(rawStatusCode);

        if (!check.isEnumValue(statusCode, HttpStatus)) {
            throw new RestVirHandlerError(
                {
                    apiName: api.apiName,
                    isEndpoint: true,
                    isWebSocket: false,
                    path: endpoint.path,
                },
                `Invalid response status code: '${statusCode}'.`,
                HttpStatus.InternalServerError,
            );
        } else if (!statusResponse) {
            throw new RestVirHandlerError(
                {
                    apiName: api.apiName,
                    isEndpoint: true,
                    isWebSocket: false,
                    path: endpoint.path,
                },
                'Missing status code response.',
                HttpStatus.InternalServerError,
            );
        }

        const statusResponseDefinition =
            endpoint.definition.requests[method]?.responses[statusCode];

        if (statusResponseDefinition?.responseData) {
            assertValidShape(statusResponse.responseData, statusResponseDefinition.responseData);
        } else if (statusResponse.responseData) {
            throw new RestVirHandlerError(
                {
                    apiName: api.apiName,
                    isEndpoint: true,
                    isWebSocket: false,
                    path: endpoint.path,
                },
                'Got response data but none was expected.',
                HttpStatus.InternalServerError,
            );
        }

        return {
            statusCode,
            body: statusResponse.responseData,
            headers: {
                ...statusResponse.headers,
                'content-type':
                    readHeaderValue(statusResponse.headers || {}, 'content-type') ||
                    'application/json',
            },
        };
    } catch (error) {
        throw ensureErrorAndPrependMessage(
            error,
            createRestVirHandlerErrorPrefix({
                apiName: api.apiName,
                isEndpoint: true,
                isWebSocket: false,
                path: endpoint.path,
            }),
        );
    }
}
