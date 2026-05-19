import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {defineApi, defineEndpoint} from '@rest-vir/api';
import {startApiServer} from '@rest-vir/host';
import {implementApi} from '../../implementation/implement-api.js';
import {createApiImplementor} from '../../implementation/implementor.js';

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

type MyContext = {
    databaseConnector: unknown;
};

const implementor = createApiImplementor<MyContext>()(myApi);

const healthEndpointImplementation = implementor.implementEndpoint(healthEndpoint, {
    [HttpMethod.Get]() {
        return {
            [HttpStatus.Ok]: {
                responseData: undefined,
            },
        };
    },
});

const myApiImplementation = implementApi<MyContext>()(myApi, {
    createHostContext() {
        const context: MyContext = {
            databaseConnector: {},
        };

        return {
            context,
        };
    },
    clientOriginRequirement: {
        anyOrigin: true,
    },
    endpoints: {
        '/health': healthEndpointImplementation,
    },
});

await startApiServer(myApiImplementation, {
    port: 3000,
    externalOrigin: 'http://localhost:3000',
});
