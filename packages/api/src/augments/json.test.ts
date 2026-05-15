import {describe, itCases} from '@augment-vir/test';
import {parseJsonWithUndefined} from './json.js';

describe(parseJsonWithUndefined.name, () => {
    itCases(parseJsonWithUndefined, [
        {
            it: 'handles stringified undefined',
            input: 'undefined',
            expect: undefined,
        },
        {
            it: 'handles empty string',
            input: '',
            expect: undefined,
        },
        {
            it: 'handles normal JSON',
            input: JSON.stringify({
                a: 'hi',
                b: 'bye',
            }),
            expect: {
                a: 'hi',
                b: 'bye',
            },
        },
        {
            it: 'returns the origin input if JSON parsing fails',
            input: 'this is not [ valid } JSON',
            expect: 'this is not [ valid } JSON',
        },
        {
            it: 'parses JSON null',
            input: 'null',
            expect: null,
        },
        {
            it: 'parses JSON number primitives',
            input: '42',
            expect: 42,
        },
        {
            it: 'parses JSON boolean primitives',
            input: 'true',
            expect: true,
        },
        {
            it: 'parses JSON string primitives',
            input: '"hello"',
            expect: 'hello',
        },
        {
            it: 'parses JSON arrays',
            input: '[1,2,3]',
            expect: [
                1,
                2,
                3,
            ],
        },
        {
            it: 'parses nested JSON',
            input: JSON.stringify({
                outer: {
                    inner: [
                        1,
                        2,
                    ],
                },
            }),
            expect: {
                outer: {
                    inner: [
                        1,
                        2,
                    ],
                },
            },
        },
    ]);
});
