import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineEndpoint, HttpMethod, HttpStatus} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';
import {createEndpointImplementor} from './implement-endpoint.js';

describe(createEndpointImplementor.name, () => {
    const mockEndpoint = defineEndpoint({
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

    const implementMockEndpoint = createEndpointImplementor<MockContext>();

    it('implements an endpoint', () => {
        implementMockEndpoint(mockEndpoint, {
            [HttpMethod.Get]({context, method, endpoint}) {
                assert.tsType(context).equals<MockContext>();

                assert.tsType(endpoint).equals(mockEndpoint);
                assert.strictEquals(endpoint, mockEndpoint);

                assert.tsType(method).equals(HttpMethod.Get);
                assert.strictEquals(method, HttpMethod.Get);

                return {
                    '200': {
                        responseData: {
                            hello: 'hi',
                        },
                    },
                };
            },
        });
    });
    it('prevents more than one return property', () => {
        implementMockEndpoint(mockEndpoint, {
            // @ts-expect-error: cannot define responseHandled and a status
            [HttpMethod.Get]() {
                return {
                    responseHandled: true,
                    '200': {
                        responseData: {
                            hello: 'hi',
                        },
                    },
                };
            },
        });
    });
});
