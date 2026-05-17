import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineShape, exactShape, nullableShape} from 'object-shape-tester';
import {extractSearchParams} from './search-params.js';

describe(extractSearchParams.name, () => {
    describe('no requirements declared', () => {
        it('returns empty object when neither side has search params', () => {
            assert.deepEquals(extractSearchParams(undefined, undefined), {});
        });

        it('passes a single-value supplied param through as a single string', () => {
            assert.deepEquals(
                extractSearchParams(undefined, {
                    query: 'hello',
                }),
                {
                    query: 'hello',
                },
            );
        });

        it('passes a supplied array through as an array of strings', () => {
            assert.deepEquals(
                extractSearchParams(undefined, {
                    tags: [
                        'a',
                        'b',
                    ],
                }),
                {
                    tags: [
                        'a',
                        'b',
                    ],
                },
            );
        });

        it('stringifies non-string primitives in the supplied value', () => {
            assert.deepEquals(
                extractSearchParams(undefined, {
                    count: 42,
                    flag: true,
                }),
                {
                    count: '42',
                    flag: 'true',
                },
            );
        });

        it('drops undefined values', () => {
            assert.deepEquals(
                extractSearchParams(undefined, {
                    kept: 'hello',
                    removed: undefined as unknown as string,
                }),
                {
                    kept: 'hello',
                },
            );
        });
    });

    describe('single Shape requirement', () => {
        it('passes a single string value', () => {
            assert.deepEquals(
                extractSearchParams(
                    {
                        query: defineShape(''),
                    },
                    {
                        query: 'hello',
                    },
                ),
                {
                    query: 'hello',
                },
            );
        });

        it('unwraps a one-element array to satisfy a single-value shape', () => {
            assert.deepEquals(
                extractSearchParams(
                    {
                        query: defineShape(''),
                    },
                    {
                        query: ['hello'],
                    },
                ),
                {
                    query: 'hello',
                },
            );
        });

        it('rejects a multi-element array against a single-value shape', () => {
            assert.throws(
                () =>
                    extractSearchParams(
                        {
                            query: defineShape(''),
                        },
                        {
                            query: [
                                'a',
                                'b',
                            ],
                        },
                    ),
                {
                    matchMessage: 'query',
                },
            );
        });

        it('rejects a value that fails the shape', () => {
            assert.throws(
                () =>
                    extractSearchParams(
                        {
                            code: exactShape('expected-only'),
                        },
                        {
                            code: 'something-else',
                        },
                    ),
                {
                    matchMessage: 'code',
                },
            );
        });

        it('coerces a number to a string before validating', () => {
            assert.deepEquals(
                extractSearchParams(
                    {
                        page: defineShape(''),
                    },
                    {
                        page: 2,
                    },
                ),
                {
                    page: '2',
                },
            );
        });
    });

    describe('array Shape requirement', () => {
        it('passes an array of strings', () => {
            assert.deepEquals(
                extractSearchParams(
                    {
                        tags: defineShape(['']),
                    },
                    {
                        tags: [
                            'a',
                            'b',
                            'c',
                        ],
                    },
                ),
                {
                    tags: [
                        'a',
                        'b',
                        'c',
                    ],
                },
            );
        });

        it('wraps a single string into a one-element array to satisfy an array shape', () => {
            assert.deepEquals(
                extractSearchParams(
                    {
                        tags: defineShape(['']),
                    },
                    {
                        tags: 'a',
                    },
                ),
                {
                    tags: ['a'],
                },
            );
        });

        it('rejects an array value that fails the shape', () => {
            assert.throws(
                () =>
                    extractSearchParams(
                        {
                            codes: exactShape([
                                'a',
                                'b',
                            ]),
                        },
                        {
                            codes: [
                                'a',
                                'b',
                                'extra',
                            ],
                        },
                    ),
                {
                    matchMessage: 'codes',
                },
            );
        });
    });

    describe('single RegExp requirement', () => {
        it('passes a single matching value', () => {
            assert.deepEquals(
                extractSearchParams(
                    {
                        id: /^\d+$/,
                    },
                    {
                        id: '123',
                    },
                ),
                {
                    id: '123',
                },
            );
        });

        it('throws when the value does not match the regex', () => {
            assert.throws(
                () =>
                    extractSearchParams(
                        {
                            id: /^\d+$/,
                        },
                        {
                            id: 'abc',
                        },
                    ),
                {
                    matchMessage: 'id',
                },
            );
        });

        it('throws when the value is missing', () => {
            assert.throws(
                () =>
                    extractSearchParams(
                        {
                            id: /^\d+$/,
                        },
                        undefined,
                    ),
                {
                    matchMessage: 'id',
                },
            );
        });

        it('throws when the value is multi-element', () => {
            assert.throws(
                () =>
                    extractSearchParams(
                        {
                            id: /^\d+$/,
                        },
                        {
                            id: [
                                '1',
                                '2',
                            ],
                        },
                    ),
                {
                    matchMessage: 'id',
                },
            );
        });

        it('coerces non-string primitive to a string before validating', () => {
            assert.deepEquals(
                extractSearchParams(
                    {
                        count: /^\d+$/,
                    },
                    {
                        count: 42,
                    },
                ),
                {
                    count: '42',
                },
            );
        });
    });

    describe('RegExp array requirement', () => {
        it('passes when every value matches at least one regex', () => {
            assert.deepEquals(
                extractSearchParams(
                    {
                        values: [
                            /^\d+$/,
                            /^[a-z]+$/,
                        ],
                    },
                    {
                        values: [
                            '123',
                            'abc',
                            '456',
                        ],
                    },
                ),
                {
                    values: [
                        '123',
                        'abc',
                        '456',
                    ],
                },
            );
        });

        it('accepts any number of values, not just the regex count', () => {
            assert.deepEquals(
                extractSearchParams(
                    {
                        values: [
                            /^\d+$/,
                            /^[a-z]+$/,
                        ],
                    },
                    {
                        values: ['123'],
                    },
                ),
                {
                    values: ['123'],
                },
            );
        });

        it('wraps a single supplied value into a one-element array', () => {
            assert.deepEquals(
                extractSearchParams(
                    {
                        values: [
                            /^\d+$/,
                            /^[a-z]+$/,
                        ],
                    },
                    {
                        values: 'abc',
                    },
                ),
                {
                    values: ['abc'],
                },
            );
        });

        it('throws when an element matches none of the supplied regexes', () => {
            assert.throws(
                () =>
                    extractSearchParams(
                        {
                            values: [
                                /^\d+$/,
                                /^[a-z]+$/,
                            ],
                        },
                        {
                            values: [
                                '123',
                                'ABC',
                            ],
                        },
                    ),
                {
                    matchMessage: 'values',
                },
            );
        });

        it('throws when no value is provided', () => {
            assert.throws(
                () =>
                    extractSearchParams(
                        {
                            values: [
                                /^\d+$/,
                                /^[a-z]+$/,
                            ],
                        },
                        undefined,
                    ),
                {
                    matchMessage: 'values',
                },
            );
        });
    });

    describe('required vs optional shapes', () => {
        it('throws when a non-nullable shape is omitted', () => {
            assert.throws(
                () =>
                    extractSearchParams(
                        {
                            query: defineShape(''),
                        },
                        undefined,
                    ),
                {
                    matchMessage: 'query',
                },
            );
        });

        it('throws when a non-nullable shape value is undefined', () => {
            assert.throws(
                () =>
                    extractSearchParams(
                        {
                            query: defineShape(''),
                        },
                        {
                            query: undefined as unknown as string,
                        },
                    ),
                {
                    matchMessage: 'query',
                },
            );
        });

        it('passes when an optional (nullableShape) is omitted', () => {
            assert.deepEquals(
                extractSearchParams(
                    {
                        query: nullableShape(''),
                    },
                    undefined,
                ),
                {},
            );
        });

        it('passes when an optional (nullableShape) value is undefined', () => {
            assert.deepEquals(
                extractSearchParams(
                    {
                        query: nullableShape(''),
                    },
                    {
                        query: undefined as unknown as string,
                    },
                ),
                {},
            );
        });

        it('throws when an optional shape value is present but invalid', () => {
            assert.throws(
                () =>
                    extractSearchParams(
                        {
                            code: nullableShape(exactShape('expected-only')),
                        },
                        {
                            code: 'wrong',
                        },
                    ),
                {
                    matchMessage: 'code',
                },
            );
        });
    });

    describe('mixed requirements and extra keys', () => {
        it('passes through keys not declared in the route', () => {
            assert.deepEquals(
                extractSearchParams(
                    {
                        query: defineShape(''),
                    },
                    {
                        query: 'hello',
                        extra: 'untouched',
                    },
                ),
                {
                    query: 'hello',
                    extra: 'untouched',
                },
            );
        });

        it('validates each declared requirement independently', () => {
            assert.deepEquals(
                extractSearchParams(
                    {
                        name: defineShape(''),
                        code: /^[A-Z]+$/,
                    },
                    {
                        name: 'hello',
                        code: 'ABC',
                    },
                ),
                {
                    name: 'hello',
                    code: 'ABC',
                },
            );
        });

        it('throws on the first failing requirement', () => {
            assert.throws(
                () =>
                    extractSearchParams(
                        {
                            name: defineShape(''),
                            code: /^[A-Z]+$/,
                        },
                        {
                            name: 'hello',
                            code: 'lowercase',
                        },
                    ),
                {
                    matchMessage: 'code',
                },
            );
        });
    });
});
