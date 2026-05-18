import {defineApi, defineEndpoint, HttpMethod, HttpStatus} from '@rest-vir/api';
import {exactShape} from 'object-shape-tester';

export const demoHealthEndpoint = defineEndpoint({
    path: '/health',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: exactShape('ok'),
                },
            },
        },
    },
});

export const apiServerStartPort = 6734;

export const demoApi = defineApi({
    apiName: 'rest-vir-demo',
    endpoints: [
        demoHealthEndpoint,
    ],
});
