import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineEndpoint, HttpMethod, HttpStatus} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';
import {type EndpointImplementation, type ImplementedEndpoint} from './implement-endpoint.js';
import {createApiImplementor} from './implementor.js';

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

const mockApi = defineApi({
    endpoints: [mockEndpoint],
});

type MockContext = {
    database: any;
};

const implementMockEndpoint = createApiImplementor<MockContext>()(mockApi).implementEndpoint;

describe('implementEndpoint', () => {
    it('implements an endpoint', () => {
        const implemented = implementMockEndpoint(mockEndpoint, {
            [HttpMethod.Get]({context, method, endpointDefinition: endpoint}) {
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

        implemented.path;
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

describe('EndpointImplementation', () => {
    it('can be assigned to from a specific instance', () => {
        const testAssignment: ImplementedEndpoint = implementMockEndpoint(mockEndpoint, {
            [HttpMethod.Get]({context, method, endpointDefinition: endpoint}) {
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

        assert.tsType<keyof typeof testAssignment>().equals<'implementation' | 'path'>();
        assert.tsType(testAssignment.implementation).equals<EndpointImplementation>();
        assert.tsType(testAssignment.path).equals<PropertyKey>();
    });
});
