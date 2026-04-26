import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineShape} from 'object-shape-tester';
import {extractSearchParams} from './search-params.js';

describe(extractSearchParams.name, () => {
    it('returns empty object when no search params are defined', () => {
        const result = extractSearchParams('/test', {}, {});

        assert.deepEquals(result, {});
    });

    it('returns empty object when endpoint has no searchParams', () => {
        const result = extractSearchParams(
            '/test',
            {},
            {
                searchParams: {
                    query: 'hello',
                },
            },
        );

        assert.deepEquals(result, {
            query: ['hello'],
        });
    });

    it('passes valid string search params through', () => {
        const result = extractSearchParams(
            '/test',
            {
                searchParams: {
                    query: defineShape(''),
                },
            },
            {
                searchParams: {
                    query: 'hello',
                },
            },
        );

        assert.deepEquals(result, {
            query: ['hello'],
        });
    });

    it('passes valid string array search params through', () => {
        const result = extractSearchParams(
            '/test',
            {
                searchParams: {
                    tags: defineShape(''),
                },
            },
            {
                searchParams: {
                    tags: 'a',
                },
            },
        );

        assert.deepEquals(result, {
            tags: ['a'],
        });
    });

    it('blocks array string when string is required', () => {
        assert.throws(() =>
            extractSearchParams(
                '/test',
                {
                    searchParams: {
                        tags: defineShape(''),
                    },
                },
                {
                    searchParams: {
                        tags: [
                            'a',
                            'b',
                        ],
                    },
                },
            ),
        );
    });

    it('passes when search params are not provided', () => {
        const result = extractSearchParams(
            '/test',
            {
                searchParams: {
                    query: defineShape(''),
                },
            },
            {},
        );

        assert.deepEquals(result, {});
    });

    it('omits undefined values with RegExp requirement', () => {
        assert.deepEquals(
            extractSearchParams(
                '/test',
                {
                    searchParams: {
                        id: /^\d+$/,
                    },
                },
                {
                    searchParams: {
                        id: undefined,
                    },
                },
            ),
            {},
        );
    });

    it('passes valid regex search params', () => {
        const result = extractSearchParams(
            '/test',
            {
                searchParams: {
                    id: /^\d+$/,
                },
            },
            {
                searchParams: {
                    id: '123',
                },
            },
        );

        assert.deepEquals(result, {
            id: ['123'],
        });
    });

    it('throws for regex search param that does not match', () => {
        assert.throws(() => {
            extractSearchParams(
                '/test',
                {
                    searchParams: {
                        id: /^\d+$/,
                    },
                },
                {
                    searchParams: {
                        id: 'abc',
                    },
                },
            );
        });
    });

    it('validates multiple search params independently', () => {
        const result = extractSearchParams(
            '/test',
            {
                searchParams: {
                    query: defineShape(''),
                    page: defineShape(''),
                },
            },
            {
                searchParams: {
                    query: 'hello',
                    page: '1',
                },
            },
        );

        assert.deepEquals(result, {
            query: ['hello'],
            page: ['1'],
        });
    });

    it('ignores search params not defined in the endpoint', () => {
        const result = extractSearchParams(
            '/test',
            {
                searchParams: {
                    query: defineShape(''),
                },
            },
            {
                searchParams: {
                    query: 'hello',
                    extra: 'ignored-by-validation',
                },
            },
        );

        assert.deepEquals(result, {
            query: ['hello'],
            extra: ['ignored-by-validation'],
        });
    });

    it('validates regex against each value in an array', () => {
        assert.throws(() => {
            extractSearchParams(
                '/test',
                {
                    searchParams: {
                        ids: /^\d+$/,
                    },
                },
                {
                    searchParams: {
                        ids: [
                            '123',
                            'abc',
                        ],
                    },
                },
            );
        });
    });

    it('passes regex validation for all array values', () => {
        const result = extractSearchParams(
            '/test',
            {
                searchParams: {
                    ids: /^\d+$/,
                },
            },
            {
                searchParams: {
                    ids: [
                        '123',
                        '456',
                    ],
                },
            },
        );

        assert.deepEquals(result, {
            ids: [
                '123',
                '456',
            ],
        });
    });

    it('returns the params object when endpoint has no searchParams definition', () => {
        const result = extractSearchParams(
            '/test',
            {
                searchParams: undefined,
            },
            {
                searchParams: {
                    anything: 'goes',
                },
            },
        );

        assert.deepEquals(result, {
            anything: ['goes'],
        });
    });

    it('returns empty object when neither endpoint nor params have searchParams', () => {
        const result = extractSearchParams('/test', {}, {});

        assert.deepEquals(result, {});
    });

    it('skips validation for a defined key that is absent from params', () => {
        const result = extractSearchParams(
            '/test',
            {
                searchParams: {
                    required: defineShape(''),
                    optional: defineShape(''),
                },
            },
            {
                searchParams: {
                    required: 'value',
                },
            },
        );

        assert.deepEquals(result, {
            required: ['value'],
        });
    });

    it('skips validation when endpoint has requirements but params has no searchParams', () => {
        const result = extractSearchParams(
            '/test',
            {
                searchParams: {
                    query: defineShape(''),
                },
            },
            {
                searchParams: undefined,
            },
        );

        assert.deepEquals(result, {});
    });

    it('removes undefined values from the result', () => {
        const result = extractSearchParams(
            '/test',
            {
                searchParams: {
                    kept: defineShape(''),
                },
            },
            {
                searchParams: {
                    kept: 'hello',
                    removed: undefined as unknown as string,
                },
            },
        );

        assert.deepEquals(result, {
            kept: ['hello'],
        });
        assert.isFalse('removed' in result);
    });

    it('skips validation for an undefined param value with a shape requirement', () => {
        const result = extractSearchParams(
            '/test',
            {
                searchParams: {
                    query: defineShape(''),
                },
            },
            {
                searchParams: {
                    query: undefined as unknown as string,
                },
            },
        );

        assert.deepEquals(result, {});
    });

    it('skips validation for an undefined param value with a regex requirement', () => {
        const result = extractSearchParams(
            '/test',
            {
                searchParams: {
                    id: /^\d+$/,
                },
            },
            {
                searchParams: {
                    id: undefined as unknown as string,
                },
            },
        );

        assert.deepEquals(result, {});
    });

    it('throws for shape validation failure on a string value', () => {
        assert.throws(() => {
            extractSearchParams(
                '/test',
                {
                    searchParams: {
                        count: defineShape(0),
                    },
                },
                {
                    searchParams: {
                        count: 'not-a-number' as unknown as number,
                    },
                },
            );
        });
    });

    it('throws for regex failure on one element in an array', () => {
        assert.throws(
            () => {
                extractSearchParams(
                    '/test',
                    {
                        searchParams: {
                            codes: /^[A-Z]{3}$/,
                        },
                    },
                    {
                        searchParams: {
                            codes: [
                                'ABC',
                                'ab',
                            ],
                        },
                    },
                );
            },
            {
                matchMessage: 'codes',
            },
        );
    });

    it('includes the search key name in regex error messages', () => {
        assert.throws(
            () => {
                extractSearchParams(
                    '/test',
                    {
                        searchParams: {
                            myParam: /^valid$/,
                        },
                    },
                    {
                        searchParams: {
                            myParam: 'invalid',
                        },
                    },
                );
            },
            {
                matchMessage: 'myParam',
            },
        );
    });

    it('includes the search key name in shape error messages', () => {
        assert.throws(
            () => {
                extractSearchParams(
                    '/test',
                    {
                        searchParams: {
                            myField: defineShape(0),
                        },
                    },
                    {
                        searchParams: {
                            myField: 'wrong' as unknown as number,
                        },
                    },
                );
            },
            {
                matchMessage: 'myField',
            },
        );
    });

    it('validates mixed shape and regex requirements independently', () => {
        const result = extractSearchParams(
            '/test',
            {
                searchParams: {
                    name: defineShape(''),
                    code: /^[A-Z]+$/,
                },
            },
            {
                searchParams: {
                    name: 'hello',
                    code: 'ABC',
                },
            },
        );

        assert.deepEquals(result, {
            name: ['hello'],
            code: ['ABC'],
        });
    });

    it('throws on shape requirement when mixed with passing regex', () => {
        assert.throws(() => {
            extractSearchParams(
                '/test',
                {
                    searchParams: {
                        name: defineShape(0),
                        code: /^[A-Z]+$/,
                    },
                },
                {
                    searchParams: {
                        name: 'bad' as unknown as number,
                        code: 'ABC',
                    },
                },
            );
        });
    });

    it('throws on regex requirement when mixed with passing shape', () => {
        assert.throws(() => {
            extractSearchParams(
                '/test',
                {
                    searchParams: {
                        name: defineShape(''),
                        code: /^[A-Z]+$/,
                    },
                },
                {
                    searchParams: {
                        name: 'good',
                        code: 'bad-lowercase',
                    },
                },
            );
        });
    });

    it('allows non-string value for regexp search param', () => {
        assert.deepEquals(
            extractSearchParams(
                '/test',
                {
                    searchParams: {
                        count: /^\d+$/,
                    },
                },
                {
                    searchParams: {
                        count: 42,
                    },
                },
            ),
            {
                count: ['42'],
            },
        );
    });
});
