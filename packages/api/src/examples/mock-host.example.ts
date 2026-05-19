import {createMockHost, defineApi, defineEndpoint, HttpMethod, HttpStatus} from '@rest-vir/api';
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

export const mockClient = createMockHost(myApi, {
    endpoints: {
        '/health': {
            [HttpMethod.Get]: () => ({
                [HttpStatus.Ok]: {
                    responseData: {
                        status: 'ok',
                    },
                },
            }),
        },
    },
});
