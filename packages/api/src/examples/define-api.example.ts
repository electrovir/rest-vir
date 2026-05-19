import {defineShape} from 'object-shape-tester';
import {defineApi, defineEndpoint, HttpMethod, HttpStatus} from '../index.js';

export const healthEndpoint = defineEndpoint({
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

export const myApi = defineApi({
    apiName: 'my-api',
    endpoints: [
        healthEndpoint,
    ],
    webSockets: [],
});
