import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineShape} from 'object-shape-tester';
import {defineEndpoint} from '../api/endpoint.js';
import {type BaseEndpointMethodImplementationParams} from './endpoint-implementation.js';

const noSearchParamsEndpoint = defineEndpoint({
    path: '/no-search',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const withSearchParamsEndpoint = defineEndpoint({
    path: '/with-search',
    requests: {
        [HttpMethod.Get]: {
            searchParams: {
                query: defineShape(''),
            },
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

describe('BaseEndpointMethodImplementationParams', () => {
    it('never types searchParams as undefined for an endpoint with no declared searchParams', () => {
        type Params = BaseEndpointMethodImplementationParams<
            typeof noSearchParamsEndpoint,
            typeof HttpMethod.Get
        >;

        assert.tsType<undefined>().notMatches<Params['searchParams']>();
    });

    it('never types searchParams as undefined for an endpoint with declared searchParams', () => {
        type Params = BaseEndpointMethodImplementationParams<
            typeof withSearchParamsEndpoint,
            typeof HttpMethod.Get
        >;

        assert.tsType<undefined>().notMatches<Params['searchParams']>();
    });

    it('never types searchParams as undefined when the generic falls back to NoParam', () => {
        type Params = BaseEndpointMethodImplementationParams;

        assert.tsType<undefined>().notMatches<Params['searchParams']>();
    });
});
