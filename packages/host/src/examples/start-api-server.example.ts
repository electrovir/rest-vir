import {defineApi, defineEndpoint, HttpMethod, HttpStatus} from '@rest-vir/api';
import {createApiImplementor, implementApi, startApiServer} from '@rest-vir/host';
import {defineShape} from 'object-shape-tester';

const healthEndpoint = defineEndpoint({
    path: '/health',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        status: '',
                    }),
                },
            },
        },
    },
});

const myApi = defineApi({
    apiName: 'my-api',
    endpoints: [
        healthEndpoint,
    ],
    webSockets: [],
});

const {implementEndpoint} = createApiImplementor<undefined>()(myApi);

const healthImplementation = implementEndpoint(healthEndpoint, {
    [HttpMethod.Get]() {
        return {
            [HttpStatus.Ok]: {
                responseData: {
                    status: 'ok',
                },
            },
        };
    },
});

const apiImplementation = implementApi<undefined>()(myApi, {
    createHostContext: () => ({
        context: undefined,
    }),
    endpoints: [healthImplementation],
});

const {kill} = await startApiServer(apiImplementation, {
    port: 3000,
    externalOrigin: 'http://localhost:3000',
});

// later, to shut down:
await kill();
