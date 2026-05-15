import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineShape, tupleShape} from 'object-shape-tester';
import {defineEndpoint} from './endpoint.js';
import {
    type AllowedSearchParamValue,
    type AllowedSingleSearchParamValue,
    type BaseRoutePath,
    type BaseSearchParams,
    type CommonRouteDefinition,
    type ExtractSearchParamValue,
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
                      tupleShape: [
                          string,
                          string,
                      ];
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

    it('falls back to BaseSearchParams when the input has no searchParams property at all', () => {
        type Result = RouteSearchParamsType<{
            other: 'thing';
        }>;

        assert.tsType<Result>().equals<BaseSearchParams | undefined>();
    });

    it('returns BaseSearchParams when given NoParam', () => {
        assert.tsType<RouteSearchParamsType>().equals<BaseSearchParams | undefined>();
    });
});

describe('BaseRoutePath', () => {
    it('accepts the root path', () => {
        const path: BaseRoutePath = '/';
        assert.strictEquals(path, '/');
    });

    it('accepts a single-segment path', () => {
        const path: BaseRoutePath = '/users';
        assert.strictEquals(path, '/users');
    });

    it('accepts a deep path', () => {
        const path: BaseRoutePath = '/a/b/c';
        assert.strictEquals(path, '/a/b/c');
    });

    it('accepts a path with named params', () => {
        const path: BaseRoutePath = '/users/:id';
        assert.strictEquals(path, '/users/:id');
    });

    it('accepts a wildcard path', () => {
        const path: BaseRoutePath = '/files/*';
        assert.strictEquals(path, '/files/*');
    });

    it('rejects a path without a leading slash', () => {
        // @ts-expect-error: BaseRoutePath requires a leading slash.
        const path: BaseRoutePath = 'users';
        assert.isDefined(path);
    });

    it('rejects an empty string', () => {
        // @ts-expect-error: BaseRoutePath cannot be empty.
        const path: BaseRoutePath = '';
        assert.isDefined(path);
    });
});

describe('CommonRouteDefinition', () => {
    it('makes every field optional', () => {
        const empty: CommonRouteDefinition = {};
        assert.deepEquals(empty, {});
    });

    it('accepts a searchParams record of shape | RegExp', () => {
        const definition: CommonRouteDefinition = {
            searchParams: {
                shapeParam: defineShape(''),
                regexpParam: /^v\d+$/,
            },
        };
        assert.isDefined(definition.searchParams);
    });

    it('accepts customProps as an unknown object', () => {
        const definition: CommonRouteDefinition = {
            customProps: {
                anything: 'goes',
                count: 5,
            },
        };
        assert.deepEquals(definition.customProps, {
            anything: 'goes',
            count: 5,
        });
    });

    it('accepts a clientOriginRequirement', () => {
        const definition: CommonRouteDefinition = {
            clientOriginRequirement: 'https://example.com',
        };
        assert.strictEquals(definition.clientOriginRequirement, 'https://example.com');
    });

    it('accepts undefined for every optional field', () => {
        const definition: CommonRouteDefinition = {
            searchParams: undefined,
            customProps: undefined,
            clientOriginRequirement: undefined,
        };
        assert.isDefined(definition);
    });
});

describe('AllowedSingleSearchParamValue', () => {
    it('accepts every JS primitive except symbol', () => {
        const aString: AllowedSingleSearchParamValue = 'hi';
        const aNumber: AllowedSingleSearchParamValue = 42;
        const aBigint: AllowedSingleSearchParamValue = 9_007_199_254_740_992n;
        const aBoolean: AllowedSingleSearchParamValue = true;
        const aNull: AllowedSingleSearchParamValue = null;
        const anUndefined: AllowedSingleSearchParamValue = undefined;

        assert.deepEquals(
            [
                aString,
                aNumber,
                aBigint,
                aBoolean,
                aNull,
                anUndefined,
            ],
            [
                'hi',
                42,
                9_007_199_254_740_992n,
                true,
                null,
                undefined,
            ],
        );
    });

    it('rejects a symbol', () => {
        // @ts-expect-error: symbols are excluded from AllowedSingleSearchParamValue.
        const aSymbol: AllowedSingleSearchParamValue = Symbol('nope');
        assert.strictEquals(typeof aSymbol, 'symbol');
    });

    it('rejects an object', () => {
        // @ts-expect-error: objects are not primitives, so they are not allowed.
        const anObject: AllowedSingleSearchParamValue = {
            x: 1,
        };
        assert.isDefined(anObject);
    });
});

describe('AllowedSearchParamValue', () => {
    it('accepts a single primitive', () => {
        const value: AllowedSearchParamValue = 'hi';
        assert.strictEquals(value, 'hi');
    });

    it('accepts an array of primitives', () => {
        const value: AllowedSearchParamValue = [
            'a',
            'b',
        ];
        assert.deepEquals(value, [
            'a',
            'b',
        ]);
    });

    it('accepts a readonly array of primitives', () => {
        const value: AllowedSearchParamValue = [
            'a',
            'b',
        ] as const;
        assert.deepEquals(value, [
            'a',
            'b',
        ]);
    });
});

describe('BaseSearchParams', () => {
    it('is a readonly record of string keys to allowed values', () => {
        const params: BaseSearchParams = {
            x: 'one',
            y: [
                'two',
                'three',
            ],
            absent: undefined,
        };
        assert.strictEquals(params.x, 'one');
    });
});

describe('ExtractSearchParamValue', () => {
    it('extracts the runtime type of a Shape', () => {
        type StringValue = ExtractSearchParamValue<ReturnType<typeof defineShape<string>>>;
        assert.tsType<StringValue>().equals<string>();
    });

    it('extracts the runtime type of a tuple Shape', () => {
        type TupleValue = ExtractSearchParamValue<
            ReturnType<
                typeof tupleShape<
                    [
                        string,
                        string,
                    ]
                >
            >
        >;
        assert.tsType<TupleValue>().equals<
            [
                string,
                string,
            ]
        >();
    });

    it('falls back to AllowedSearchParamValue for a RegExp requirement', () => {
        assert.tsType<ExtractSearchParamValue<RegExp>>().equals<AllowedSearchParamValue>();
    });
});
