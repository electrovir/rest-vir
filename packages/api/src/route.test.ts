import {assert} from '@augment-vir/assert';
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
                GET: {
                    searchParams: {
                        regExp: /hi+/,
                        stringShape: defineShape(''),
                        tupleShape: tupleShape('', ''),
                    },
                },
            },
        });

        type TestTypes = RouteSearchParamsType<typeof endpoint.requests.GET>;

        assert.tsType<TestTypes>().equals<
            Readonly<
                Partial<{
                    regExp: AllowedSearchParamValue;
                    stringShape: string;
                    tupleShape: [string, string];
                }>
            > &
                BaseSearchParams
        >();
    });
    it('extracts default when no search params exist', () => {
        const endpoint = defineEndpoint({
            path: '/no-params',
            requests: {
                GET: {},
            },
        });

        type TestTypes = RouteSearchParamsType<typeof endpoint.requests.GET>;

        assert.tsType<TestTypes>().equals<BaseSearchParams | undefined>();
    });
});
