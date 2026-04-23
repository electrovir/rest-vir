import {describe, it} from '@augment-vir/test';
import {defineApi} from '@rest-vir/api';
import {mockApi} from '@rest-vir/api/src/api.mock.js';
import {RestVirClient} from './client.js';
import {createMockResponse} from './mock-fetch.js';

describe(RestVirClient.name, () => {
    const mockClient = new RestVirClient(mockApi, '', () => {
        return Promise.resolve(createMockResponse());
    });

    const differentApi = defineApi({
        clientOrigin: '',
        endpoints: {
            '/derp': {},
        },
    });

    it('rejects a path from outside of the api', async () => {
        await mockClient.fetch(differentApi.endpoints['/derp']);
    });
});
