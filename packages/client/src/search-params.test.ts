import {describe, itCases} from '@augment-vir/test';
import {defineShape, exactShape, nullableShape} from 'object-shape-tester';
import {extractSearchParams} from './search-params.js';

describe(extractSearchParams.name, () => {
    describe('no requirements declared', () => {
        itCases(extractSearchParams, [
            {
                it: 'returns empty object when neither side has search params',
                inputs: [
                    undefined,
                    undefined,
                ],
                expect: {},
            },
            {
                it: 'passes a single-value supplied param through as a single string',
                inputs: [
                    undefined,
                    {
                        query: 'hello',
                    },
                ],
                expect: {
                    query: 'hello',
                },
            },
            {
                it: 'passes a supplied array through as an array of strings',
                inputs: [
                    undefined,
                    {
                        tags: [
                            'a',
                            'b',
                        ],
                    },
                ],
                expect: {
                    tags: [
                        'a',
                        'b',
                    ],
                },
            },
            {
                it: 'stringifies non-string primitives in the supplied value',
                inputs: [
                    undefined,
                    {
                        count: 42,
                        flag: true,
                    },
                ],
                expect: {
                    count: '42',
                    flag: 'true',
                },
            },
            {
                it: 'drops undefined values',
                inputs: [
                    undefined,
                    {
                        kept: 'hello',
                        removed: undefined as unknown as string,
                    },
                ],
                expect: {
                    kept: 'hello',
                },
            },
        ]);
    });

    describe('single Shape requirement', () => {
        itCases(extractSearchParams, [
            {
                it: 'passes a single string value',
                inputs: [
                    {
                        query: defineShape(''),
                    },
                    {
                        query: 'hello',
                    },
                ],
                expect: {
                    query: 'hello',
                },
            },
            {
                it: 'unwraps a one-element array to satisfy a single-value shape',
                inputs: [
                    {
                        query: defineShape(''),
                    },
                    {
                        query: ['hello'],
                    },
                ],
                expect: {
                    query: 'hello',
                },
            },
            {
                it: 'rejects a multi-element array against a single-value shape',
                inputs: [
                    {
                        query: defineShape(''),
                    },
                    {
                        query: [
                            'a',
                            'b',
                        ],
                    },
                ],
                throws: {
                    matchMessage: 'query',
                },
            },
            {
                it: 'rejects a value that fails the shape',
                inputs: [
                    {
                        code: exactShape('expected-only'),
                    },
                    {
                        code: 'something-else',
                    },
                ],
                throws: {
                    matchMessage: 'code',
                },
            },
            {
                it: 'coerces a number to a string before validating',
                inputs: [
                    {
                        page: defineShape(''),
                    },
                    {
                        page: 2,
                    },
                ],
                expect: {
                    page: '2',
                },
            },
        ]);
    });

    describe('array Shape requirement', () => {
        itCases(extractSearchParams, [
            {
                it: 'passes an array of strings',
                inputs: [
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
                ],
                expect: {
                    tags: [
                        'a',
                        'b',
                        'c',
                    ],
                },
            },
            {
                it: 'wraps a single string into a one-element array to satisfy an array shape',
                inputs: [
                    {
                        tags: defineShape(['']),
                    },
                    {
                        tags: 'a',
                    },
                ],
                expect: {
                    tags: ['a'],
                },
            },
            {
                it: 'rejects an array value that fails the shape',
                inputs: [
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
                ],
                throws: {
                    matchMessage: 'codes',
                },
            },
            {
                it: 'accepts an empty string in a string-array shape',
                inputs: [
                    {
                        values: defineShape(['']),
                    },
                    {
                        values: [
                            'abc',
                            '',
                        ],
                    },
                ],
                expect: {
                    values: [
                        'abc',
                        '',
                    ],
                },
            },
        ]);
    });

    describe('single RegExp requirement', () => {
        itCases(extractSearchParams, [
            {
                it: 'passes a single matching value',
                inputs: [
                    {
                        id: /^\d+$/,
                    },
                    {
                        id: '123',
                    },
                ],
                expect: {
                    id: '123',
                },
            },
            {
                it: 'throws when the value does not match the regex',
                inputs: [
                    {
                        id: /^\d+$/,
                    },
                    {
                        id: 'abc',
                    },
                ],
                throws: {
                    matchMessage: 'id',
                },
            },
            {
                it: 'throws when the value is missing',
                inputs: [
                    {
                        id: /^\d+$/,
                    },
                    undefined,
                ],
                throws: {
                    matchMessage: 'id',
                },
            },
            {
                it: 'throws when the value is multi-element',
                inputs: [
                    {
                        id: /^\d+$/,
                    },
                    {
                        id: [
                            '1',
                            '2',
                        ],
                    },
                ],
                throws: {
                    matchMessage: 'id',
                },
            },
            {
                it: 'unwraps a one-element array to satisfy a single-regex requirement',
                inputs: [
                    {
                        id: /^\d+$/,
                    },
                    {
                        id: ['123'],
                    },
                ],
                expect: {
                    id: '123',
                },
            },
            {
                it: 'coerces non-string primitive to a string before validating',
                inputs: [
                    {
                        count: /^\d+$/,
                    },
                    {
                        count: 42,
                    },
                ],
                expect: {
                    count: '42',
                },
            },
        ]);
    });

    describe('RegExp array requirement', () => {
        itCases(extractSearchParams, [
            {
                it: 'passes when every value matches at least one regex',
                inputs: [
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
                ],
                expect: {
                    values: [
                        '123',
                        'abc',
                        '456',
                    ],
                },
            },
            {
                it: 'accepts any number of values, not just the regex count',
                inputs: [
                    {
                        values: [
                            /^\d+$/,
                            /^[a-z]+$/,
                        ],
                    },
                    {
                        values: ['123'],
                    },
                ],
                expect: {
                    values: ['123'],
                },
            },
            {
                it: 'wraps a single supplied value into a one-element array',
                inputs: [
                    {
                        values: [
                            /^\d+$/,
                            /^[a-z]+$/,
                        ],
                    },
                    {
                        values: 'abc',
                    },
                ],
                expect: {
                    values: ['abc'],
                },
            },
            {
                it: 'throws when an element matches none of the supplied regexes',
                inputs: [
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
                ],
                throws: {
                    matchMessage: 'values',
                },
            },
            {
                it: 'throws when no value is provided',
                inputs: [
                    {
                        values: [
                            /^\d+$/,
                            /^[a-z]+$/,
                        ],
                    },
                    undefined,
                ],
                throws: {
                    matchMessage: 'values',
                },
            },
            {
                it: 'throws when an element is an empty string',
                inputs: [
                    {
                        values: [
                            /^\d+$/,
                            /^[a-z]+$/,
                        ],
                    },
                    {
                        values: [
                            'abc',
                            '',
                        ],
                    },
                ],
                throws: {
                    matchMessage: 'is empty',
                },
            },
        ]);
    });

    describe('required vs optional shapes', () => {
        itCases(extractSearchParams, [
            {
                it: 'throws when a non-nullable shape is omitted',
                inputs: [
                    {
                        query: defineShape(''),
                    },
                    undefined,
                ],
                throws: {
                    matchMessage: 'query',
                },
            },
            {
                it: 'throws when a non-nullable shape value is undefined',
                inputs: [
                    {
                        query: defineShape(''),
                    },
                    {
                        query: undefined as unknown as string,
                    },
                ],
                throws: {
                    matchMessage: 'query',
                },
            },
            {
                it: 'passes when an optional (nullableShape) is omitted',
                inputs: [
                    {
                        query: nullableShape(''),
                    },
                    undefined,
                ],
                expect: {},
            },
            {
                it: 'passes when an optional (nullableShape) value is undefined',
                inputs: [
                    {
                        query: nullableShape(''),
                    },
                    {
                        query: undefined as unknown as string,
                    },
                ],
                expect: {},
            },
            {
                it: 'throws when an optional shape value is present but invalid',
                inputs: [
                    {
                        code: nullableShape(exactShape('expected-only')),
                    },
                    {
                        code: 'wrong',
                    },
                ],
                throws: {
                    matchMessage: 'code',
                },
            },
        ]);
    });

    describe('mixed requirements and extra keys', () => {
        itCases(extractSearchParams, [
            {
                it: 'passes through keys not declared in the route',
                inputs: [
                    {
                        query: defineShape(''),
                    },
                    {
                        query: 'hello',
                        extra: 'untouched',
                    },
                ],
                expect: {
                    query: 'hello',
                    extra: 'untouched',
                },
            },
            {
                it: 'drops an undeclared array key when every entry is undefined',
                inputs: [
                    {
                        query: defineShape(''),
                    },
                    {
                        query: 'hello',
                        extra: [
                            undefined,
                            undefined,
                        ],
                    },
                ],
                expect: {
                    query: 'hello',
                },
            },
            {
                it: 'validates each declared requirement independently',
                inputs: [
                    {
                        name: defineShape(''),
                        code: /^[A-Z]+$/,
                    },
                    {
                        name: 'hello',
                        code: 'ABC',
                    },
                ],
                expect: {
                    name: 'hello',
                    code: 'ABC',
                },
            },
            {
                it: 'throws on the first failing requirement',
                inputs: [
                    {
                        name: defineShape(''),
                        code: /^[A-Z]+$/,
                    },
                    {
                        name: 'hello',
                        code: 'lowercase',
                    },
                ],
                throws: {
                    matchMessage: 'code',
                },
            },
        ]);
    });
});
