import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineShape, nullableShape, tupleShape, unionShape} from 'object-shape-tester';
import {defineEndpoint} from './endpoint.js';
import {
    type AllowedSearchParamValue,
    type AllowedSingleSearchParamValue,
    type BaseRoutePath,
    type BaseSearchParams,
    type CommonRouteDefinition,
    type ExtractSearchParamValue,
    type RouteSearchParamsType,
    type SearchParamRequirement,
    type SearchParamShape,
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
            | (Readonly<{
                  regExp: string;
                  stringShape: string;
                  tupleShape: [
                      string,
                      string,
                  ];
              }> &
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

    it('returns string for a single RegExp requirement', () => {
        assert.tsType<ExtractSearchParamValue<RegExp>>().equals<string>();
    });

    it('returns string[] for a tuple of RegExp requirements', () => {
        assert.tsType<ExtractSearchParamValue<ReadonlyArray<RegExp>>>().equals<string[]>();
    });
});

describe('SearchParamShape', () => {
    it('accepts a single-string Shape', () => {
        const stringShape = defineShape('');
        const requirement: SearchParamShape = stringShape;
        assert.isDefined(requirement);
    });

    it('accepts a string[] Shape', () => {
        const arrayShape = defineShape(['']);
        const requirement: SearchParamShape = arrayShape;
        assert.isDefined(requirement);
    });

    it('accepts a tupleShape of strings', () => {
        const twoStrings = tupleShape('', '');
        const requirement: SearchParamShape = twoStrings;
        assert.isDefined(requirement);
    });

    it('accepts a nullable string Shape', () => {
        const nullableString = nullableShape('');
        const requirement: SearchParamShape = nullableString;
        assert.isDefined(requirement);
    });

    it('accepts a string | string[] union Shape', () => {
        const union = unionShape('', ['']);
        const requirement: SearchParamShape = union;
        assert.isDefined(requirement);
    });

    it('rejects a numeric Shape', () => {
        const numberShape = defineShape(0);
        // @ts-expect-error: a numeric Shape's runtime type is `number`, not `string | string[]`.
        const requirement: SearchParamShape = numberShape;
        assert.isDefined(requirement);
    });

    it('rejects a boolean Shape', () => {
        const boolShape = defineShape(true);
        // @ts-expect-error: a boolean Shape's runtime type is `boolean`, not `string | string[]`.
        const requirement: SearchParamShape = boolShape;
        assert.isDefined(requirement);
    });

    it('rejects an object Shape', () => {
        const objectShape = defineShape({
            field: '',
        });
        // @ts-expect-error: an object Shape's runtime type is an object, not `string | string[]`.
        const requirement: SearchParamShape = objectShape;
        assert.isDefined(requirement);
    });

    it('rejects an array-of-numbers Shape', () => {
        const numberArrayShape = defineShape([0]);
        // @ts-expect-error: a `number[]` runtime type doesn't fit `string | readonly string[]`.
        const requirement: SearchParamShape = numberArrayShape;
        assert.isDefined(requirement);
    });

    it('rejects a tupleShape of numbers', () => {
        const numericTuple = tupleShape(0, 0);
        // @ts-expect-error: a numeric tuple isn't assignable to `string | readonly string[]`.
        const requirement: SearchParamShape = numericTuple;
        assert.isDefined(requirement);
    });
});

describe('SearchParamRequirement', () => {
    it('accepts a Shape', () => {
        const stringShape = defineShape('');
        const requirement: SearchParamRequirement = stringShape;
        assert.isDefined(requirement);
    });

    it('accepts a RegExp', () => {
        const requirement: SearchParamRequirement = /^\d+$/;
        assert.isDefined(requirement);
    });

    it('accepts an array of RegExp', () => {
        const requirement: SearchParamRequirement = [
            /^\d+$/,
            /^[a-z]+$/,
        ];
        assert.isDefined(requirement);
    });

    it('rejects a non-string-typed Shape', () => {
        const numberShape = defineShape(0);
        // @ts-expect-error: numeric Shape isn't a SearchParamShape.
        const requirement: SearchParamRequirement = numberShape;
        assert.isDefined(requirement);
    });

    it('rejects an array of non-RegExp values', () => {
        // @ts-expect-error: array elements must be RegExp.
        const requirement: SearchParamRequirement = ['not-a-regex'];
        assert.isDefined(requirement);
    });

    it('rejects a raw string', () => {
        // @ts-expect-error: a plain string is not a valid requirement form.
        const requirement: SearchParamRequirement = 'plain';
        assert.isDefined(requirement);
    });

    it('rejects a plain object', () => {
        const requirement: SearchParamRequirement = {
            // @ts-expect-error: a plain object is not a valid requirement form.
            not: 'allowed',
        };
        assert.isDefined(requirement);
    });
});
