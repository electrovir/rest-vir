import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineEndpoint} from '@rest-vir/api';
import {implementApi} from '../../implementation/implement-api.js';
import {createApiImplementor} from '../../implementation/implementor.js';
import type {ServerRequest, ServerResponse} from '../../implementation/raw-route-data.js';
import {silentServerLogger} from '../../implementation/server-logger.js';
import {preHandler} from './pre-handler.js';

const healthEndpoint = defineEndpoint({
    path: '/health',
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
    apiName: 'pre-handler test api',
    endpoints: [healthEndpoint],
    webSockets: [],
});

const implementor = createApiImplementor<undefined>()(api);

const apiImplementation = implementApi<undefined>()(api, {
    createHostContext() {
        return {
            context: undefined,
        };
    },
    clientOriginRequirement: {
        anyOrigin: true,
    },
    endpoints: {
        '/health': implementor.implementEndpoint(healthEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
    },
    webSockets: {},
});

describe(preHandler.name, () => {
    it('ignores a missing implementation', async () => {
        await preHandler({
            request: {
                originalUrl: '/missing',
                headers: {},
            } as unknown as ServerRequest,
            response: {
                header() {},
            } as unknown as ServerResponse,
            api: apiImplementation,
            server: {
                serviceOrigin: '',
            },
            attachId: '',
            serverLogger: silentServerLogger,
        });
    });
});
