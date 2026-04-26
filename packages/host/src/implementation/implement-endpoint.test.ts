import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineEndpoint, HttpMethod, HttpStatus} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';
import {createEndpointImplementor} from './implement-endpoint.js';

describe(createEndpointImplementor.name, () => {
    it('implements an endpoint', () => {
        const endpointDefinition = defineEndpoint({
            path: '/test',
            requests: {
                [HttpMethod.Get]: {
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape({
                                hello: '',
                            }),
                        },
                    },
                },
            },
        });

        type MockContext = {
            database: any;
        };

        const implementation = createEndpointImplementor<MockContext>()(endpointDefinition, {
            [HttpMethod.Get]({context, method, endpoint}) {
                assert.tsType(context).equals<MockContext>();

                assert.tsType(endpoint).equals(endpointDefinition);
                assert.strictEquals(endpoint, endpointDefinition);

                assert.tsType(method).equals(HttpMethod.Get);
                assert.strictEquals(method, HttpMethod.Get);

                return {};
            },
        });
    });
});
