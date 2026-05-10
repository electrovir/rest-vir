import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {defineApi, defineEndpoint} from '@rest-vir/api';
import {implementApi} from '../../../implementation/implement-api.js';
import {createApiImplementor} from '../../../implementation/implementor.js';

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

export const mockApi = defineApi({
    apiName: 'mock api',
    endpoints: [healthEndpoint],
    webSockets: [],
});

const implementor = createApiImplementor<undefined>()(mockApi);

export const mockApiImplementation = implementApi<undefined>()(mockApi, {
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
