import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, itCases} from '@augment-vir/test';
import {defineApi, defineEndpoint, defineWebSocket} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';
import {type EndpointImplementation} from '../../implementation/implement-endpoint.js';
import {createApiImplementor} from '../../implementation/implementor.js';
import {silentServerLogger} from '../../implementation/server-logger.js';
import {handleSearchParams} from './handle-search-params.js';

const searchEndpoint = defineEndpoint({
    path: '/search',
    requests: {
        [HttpMethod.Get]: {
            searchParams: {
                query: defineShape(''),
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const noSearchEndpoint = defineEndpoint({
    path: '/no-search',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const searchWebSocket = defineWebSocket({
    path: '/ws',
    searchParams: {
        room: defineShape(''),
    },
});

const api = defineApi({
    apiName: 'search-params test api',
    endpoints: [searchEndpoint],
    webSockets: [searchWebSocket],
});

const implementor = createApiImplementor<undefined>()(api);

const endpointImplementation = implementor.implementEndpoint(searchEndpoint, {
    [HttpMethod.Get]() {
        return {
            [HttpStatus.Ok]: {
                responseData: undefined,
            },
        };
    },
});

const webSocketImplementation = implementor.implementWebSocket(searchWebSocket, {});

const noSearchImplementation: EndpointImplementation = {
    path: noSearchEndpoint.path,
    isEndpoint: true,
    isWebSocket: false,
    definition: noSearchEndpoint,
    implementation: {
        [HttpMethod.Get]() {
            return {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            };
        },
    },
};

function buildRequest(
    query: Readonly<Record<string, unknown>> | undefined,
    method: HttpMethod = HttpMethod.Get,
) {
    return {
        method,
        originalUrl: '/search',
        query,
    };
}

describe(handleSearchParams.name, () => {
    itCases(handleSearchParams, [
        {
            it: 'falls back to {} when the request has no query property',
            input: {
                request: buildRequest(undefined),
                route: noSearchImplementation,
                serverLogger: silentServerLogger,
                api,
            },
            expect: {
                searchParams: {},
            },
        },
        {
            it: 'uses the WebSocket route definition for the search param requirement',
            input: {
                request: buildRequest({
                    room: 'lobby',
                }),
                route: webSocketImplementation,
                serverLogger: silentServerLogger,
                api,
            },
            expect: {
                searchParams: {
                    room: 'lobby',
                },
            },
        },
        {
            it: 'falls back to no requirement when the method is not in the endpoint definition',
            input: {
                request: buildRequest(
                    {
                        untouched: 'value',
                    },
                    HttpMethod.Patch,
                ),
                route: endpointImplementation,
                serverLogger: silentServerLogger,
                api,
            },
            expect: {
                searchParams: {
                    untouched: 'value',
                },
            },
        },
        {
            it: 'returns a 400 when search param validation fails',
            input: {
                request: buildRequest({}),
                route: endpointImplementation,
                serverLogger: silentServerLogger,
                api,
            },
            expect: {
                body: 'Invalid search params.',
                statusCode: HttpStatus.BadRequest,
            },
        },
        {
            it: 'returns the validated search params for a valid endpoint request',
            input: {
                request: buildRequest({
                    query: 'hello',
                }),
                route: endpointImplementation,
                serverLogger: silentServerLogger,
                api,
            },
            expect: {
                searchParams: {
                    query: 'hello',
                },
            },
        },
    ]);
});
