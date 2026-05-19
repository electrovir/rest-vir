import {defineApi, defineEndpoint, HttpMethod, HttpStatus, RestVirClient} from '@rest-vir/api';
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

const client = new RestVirClient(myApi, 'https://api.example.com');

const result = await client.fetch(healthEndpoint).GET();

if (result.Ok) {
    console.info(result.Ok.responseData);
}
