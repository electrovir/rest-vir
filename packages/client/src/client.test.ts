import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {
    defineApi,
    defineEndpoint,
    defineLargeApi,
    endpointsList,
    HttpMethod,
    HttpStatus,
} from '@rest-vir/api';
import {exactShape} from 'object-shape-tester';
import {RestVirClient} from './client.js';
import {createMockResponse} from './mock-fetch.js';

describe(RestVirClient.name, () => {
    it('restricts endpoint paths from defineApi', async () => {
        const simpleEndpoint = defineEndpoint({
            path: '/simple',
            requests: {
                [HttpMethod.Get]: {
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: exactShape('hi'),
                        },
                    },
                },
            },
        });
        const invalidEndpoint = defineEndpoint({
            path: '/different-path',
            requests: {
                [HttpMethod.Get]: {
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: exactShape('hi'),
                        },
                    },
                },
            },
        });

        const simpleApi = defineApi({
            endpoints: [simpleEndpoint],
        });

        const simpleApiClient = new RestVirClient(simpleApi, '', () => {
            return Promise.resolve(createMockResponse());
        });

        await simpleApiClient.fetch(simpleEndpoint, HttpMethod.Get);
        await simpleApiClient.fetch(simpleApi.endpoints['/simple'], HttpMethod.Get);

        await assert.throws(async () => {
            // @ts-expect-error: `invalidEndpoint` is not in `simpleApi`.
            return await simpleApiClient.fetch(invalidEndpoint, HttpMethod.Get);
        });
    });

    it('does not restrict endpoint paths from defineLargeApi', async () => {
        const simpleEndpoint = defineEndpoint({
            path: '/simple',
            requests: {
                [HttpMethod.Get]: {
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: exactShape('hi'),
                        },
                    },
                },
            },
        });
        const invalidEndpoint = defineEndpoint({
            path: '/different-path',
            requests: {
                [HttpMethod.Get]: {
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: exactShape('hi'),
                        },
                    },
                },
            },
        });

        const simpleApi = defineLargeApi({
            endpoints: endpointsList(simpleEndpoint),
        });

        const simpleApiClient = new RestVirClient(simpleApi, '', () => {
            return Promise.resolve(createMockResponse());
        });

        await simpleApiClient.fetch(simpleEndpoint, HttpMethod.Get);
        // @ts-expect-error: `/simple` may or may not exist, according to the types.
        await simpleApiClient.fetch(simpleApi.endpoints['/simple'], HttpMethod.Get);

        await assert.throws(async () => {
            return await simpleApiClient.fetch(invalidEndpoint, HttpMethod.Get);
        });
    });
});
