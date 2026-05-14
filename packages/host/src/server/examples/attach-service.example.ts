import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {defineApi, defineEndpoint} from '@rest-vir/api';
import fastify from 'fastify';
import {implementApi} from '../../implementation/implement-api.js';
import {createApiImplementor} from '../../implementation/implementor.js';
import {attachApi} from '../../index.js';

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

const myApi = defineApi({
    apiName: 'example api',
    endpoints: [healthEndpoint],
    webSockets: [],
});

const implementor = createApiImplementor()(myApi);

const myApiImplementation = implementApi()(myApi, {
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
});

const server = fastify();

await attachApi(server, myApiImplementation, {
    externalOrigin: 'http://localhost:3000',
});

await server.listen({
    port: 3000,
});
