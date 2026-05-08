import {assert} from '@augment-vir/assert';
import {type MaybePromise} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {
    type BaseRoutePath,
    defineApi,
    defineEndpoint,
    HttpMethod,
    HttpStatus,
    type MakeBivariantFunction,
} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';
import {
    type EndpointImplementation,
    type EndpointMethodImplementationOutput,
    type EndpointMethodImplementationParams,
    type EndpointMethodImplementations,
} from './implement-endpoint.js';
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
    apiName: 'mock-api',
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

        assert.tsType(implemented.definition.path).equals<'/test'>();
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
    it('has implementation methods', () => {
        const endpointImplementation = {} as EndpointImplementation;

        const methodImplementation = endpointImplementation.implementation[HttpMethod.Get];

        assert
            .tsType(methodImplementation)
            .equals<
                | undefined
                | MakeBivariantFunction<
                      EndpointMethodImplementationParams,
                      MaybePromise<EndpointMethodImplementationOutput>
                  >
            >();
    });

    it('can be assigned to from a specific instance', () => {
        const testAssignment: EndpointImplementation = implementMockEndpoint(mockEndpoint, {
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

        assert
            .tsType<keyof typeof testAssignment>()
            .equals<'implementation' | 'definition' | 'path' | 'isEndpoint' | 'isWebSocket'>();
        assert.tsType(testAssignment.implementation).equals<EndpointMethodImplementations>();
        assert.tsType(testAssignment.definition.path).equals<BaseRoutePath>();
    });
});
