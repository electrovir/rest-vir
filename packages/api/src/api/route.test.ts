import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineShape, tupleShape} from 'object-shape-tester';
import {defineEndpoint} from './endpoint.js';
import {
    type AllowedSearchParamValue,
    type BaseSearchParams,
    type RouteSearchParamsType,
} from './route.js';

describe('RouteSearchParamsType', () => {
    it('extracts defined search params', () => {
        const endpoint = defineEndpoint({
            path: '/search',
            requests: {
                [HttpMethod.Get]: {
                    searchParams: {
                        regExp: /hi+/,
                        stringShape: defineShape(''),
                        tupleShape: tupleShape('', ''),
                    },
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: undefined,
                        },
                    },
                },
            },
        });

        type TestTypes = RouteSearchParamsType<typeof endpoint.requests.GET>;

        assert.tsType<TestTypes>().equals<
            | (Readonly<
                  Partial<{
                      regExp: AllowedSearchParamValue;
                      stringShape: string;
                      tupleShape: [string, string];
                  }>
              > &
                  BaseSearchParams)
            | undefined
        >();
    });
    it('extracts default when no search params exist', () => {
        const endpoint = defineEndpoint({
            path: '/no-params',
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

        type TestTypes = RouteSearchParamsType<typeof endpoint.requests.GET>;

        assert.tsType<TestTypes>().equals<BaseSearchParams | undefined>();
    });
});
