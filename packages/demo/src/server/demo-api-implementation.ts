import {createApiImplementor, HttpMethod, HttpStatus, implementApi} from '@rest-vir/host';
import {demoApi, demoHealthEndpoint} from '../demo-api.js';

type ServerContext = {
    callCount: number;
};

const serverContext: ServerContext = {
    callCount: 0,
};

const {implementEndpoint, implementWebSocket} = createApiImplementor<ServerContext>()(demoApi);

const healthImplementation = implementEndpoint(demoHealthEndpoint, {
    [HttpMethod.Get]() {
        return {
            [HttpStatus.Ok]: {
                responseData: 'ok',
            },
        };
    },
});

export const demoApiImplementation = implementApi<ServerContext>()(demoApi, {
    createHostContext() {
        return {
            context: serverContext,
        };
    },
    endpoints: {
        '/health': healthImplementation,
    },
});
