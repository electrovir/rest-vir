import {assert} from '@augment-vir/assert';
import {type AnyObject, HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineEndpoint} from '@rest-vir/api';
import {type EndpointImplementation} from '../../implementation/implement-endpoint.js';
import {
    type RunningServerInfo,
    type ServerRequest,
    type ServerResponse,
} from '../../implementation/raw-route-data.js';
import {silentServerLogger} from '../../implementation/server-logger.js';
import {handleEndpointRequest} from './handle-endpoint.js';

const endpointDefinition = defineEndpoint({
    path: '/example',
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

const api = defineApi({
    apiName: 'handle-endpoint test api',
    endpoints: [endpointDefinition],
    webSockets: [],
});

describe(handleEndpointRequest.name, () => {
    it('throws when the api implementation is missing a definition for the dispatched method', async () => {
        /**
         * Forge an implementation that has POST but the definition only declares GET. The api type
         * system pairs methods between implementation and definition, so this case can only happen
         * when something bypasses those types. Verifying the runtime guard fires anyway.
         */
        const forgedImplementation: EndpointImplementation = {
            path: endpointDefinition.path,
            isEndpoint: true,
            isWebSocket: false,
            definition: endpointDefinition,
            implementation: {
                [HttpMethod.Post]: () => ({
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                }),
            },
        };

        await assert.throws(
            async () =>
                await handleEndpointRequest({
                    endpoint: forgedImplementation,
                    request: {
                        method: HttpMethod.Post,
                        originalUrl: '/example',
                        params: {},
                        headers: {},
                        restVirContext: {
                            attach: {
                                context: undefined,
                                requestData: undefined,
                                searchParams: {},
                                protocols: [],
                            },
                        },
                    } as AnyObject as ServerRequest,
                    response: {} as ServerResponse,
                    attachId: 'attach',
                    server: {} as RunningServerInfo,
                    serverLogger: silentServerLogger,
                    api,
                }),
            {
                matchMessage: `No definition found for method '${HttpMethod.Post}'`,
            },
        );
    });
});
