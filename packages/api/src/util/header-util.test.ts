import {assert} from '@augment-vir/assert';
import {describe, it, itCases} from '@augment-vir/test';
import {
    type AllowedHeaders,
    consolidateHeaders,
    headersToObject,
    mergeHeaders,
    readHeaderValue,
} from './header-util.js';

describe(mergeHeaders.name, () => {
    it('merges multiple plain object headers into a single Headers instance', () => {
        const result = mergeHeaders(
            {
                'x-one': 'one',
            },
            {
                'x-two': 'two',
            },
        );
        assert.instanceOf(result, Headers);
        assert.strictEquals(result.get('x-one'), 'one');
        assert.strictEquals(result.get('x-two'), 'two');
    });

    it('merges array-form header containers', () => {
        const result = mergeHeaders([
            [
                'x-one',
                'one',
            ],
            [
                'x-two',
                'two',
            ],
        ]);
        assert.strictEquals(result.get('x-one'), 'one');
        assert.strictEquals(result.get('x-two'), 'two');
    });

    it('merges existing Headers instances', () => {
        const headersInstance = new Headers({
            'x-existing': 'value',
        });
        const result = mergeHeaders(headersInstance, {
            'x-new': 'new',
        });
        assert.strictEquals(result.get('x-existing'), 'value');
        assert.strictEquals(result.get('x-new'), 'new');
    });

    it('appends duplicate keys instead of overwriting', () => {
        const result = mergeHeaders(
            {
                'x-multi': 'first',
            },
            {
                'x-multi': 'second',
            },
        );
        assert.strictEquals(result.get('x-multi'), 'first, second');
    });

    it('returns an empty Headers when called with no arguments', () => {
        const result = mergeHeaders();
        assert.instanceOf(result, Headers);
        assert.deepEquals(Array.from(result.entries()), []);
    });

    it('merges across different container shapes in a single call', () => {
        const headersInstance = new Headers({
            'x-headers-instance': 'h',
        });
        const result = mergeHeaders(
            headersInstance,
            {
                'x-plain': 'p',
            },
            [
                [
                    'x-array',
                    'a',
                ],
            ],
            {
                'x-multi': [
                    'one',
                    'two',
                ],
            },
        );
        assert.strictEquals(result.get('x-headers-instance'), 'h');
        assert.strictEquals(result.get('x-plain'), 'p');
        assert.strictEquals(result.get('x-array'), 'a');
        assert.strictEquals(result.get('x-multi'), 'one, two');
    });
});

describe(consolidateHeaders.name, () => {
    it('handles array values by appending each entry', () => {
        const result = consolidateHeaders({
            'x-multi': [
                'one',
                'two',
            ],
        });
        assert.strictEquals(result.get('x-multi'), 'one, two');
    });

    it('skips undefined values', () => {
        const result = consolidateHeaders({
            'x-defined': 'present',
            'x-undefined': undefined,
        });
        assert.strictEquals(result.get('x-defined'), 'present');
        assert.isNull(result.get('x-undefined'));
    });

    it('coerces numeric values to strings', () => {
        const result = consolidateHeaders({
            'x-num': 42,
        });
        assert.strictEquals(result.get('x-num'), '42');
    });

    it('handles entries-array form', () => {
        const result = consolidateHeaders([
            [
                'x-one',
                'one',
            ],
        ]);
        assert.strictEquals(result.get('x-one'), 'one');
    });

    it('handles a Headers instance input', () => {
        const input = new Headers({
            'x-existing': 'value',
        });
        const result = consolidateHeaders(input);
        assert.strictEquals(result.get('x-existing'), 'value');
    });
});

describe(headersToObject.name, () => {
    itCases(headersToObject, [
        {
            it: 'converts plain object headers into a record',
            input: {
                'x-one': 'one',
                'x-two': 'two',
            },
            expect: {
                'x-one': 'one',
                'x-two': 'two',
            },
        },
        {
            it: 'returns an empty object for empty input',
            input: {},
            expect: {},
        },
        {
            it: 'handles undefined',
            input: undefined,
            expect: {},
        },
        {
            it: 'coerces array values into a single comma-joined string when normalized',
            input: {
                'x-multi': [
                    'one',
                    'two',
                ],
            },
            expect: {
                'x-multi': 'one, two',
            },
        },
        {
            it: 'accepts a Headers instance and yields a plain object',
            input: new Headers({
                'x-one': 'one',
            }),
            expect: {
                'x-one': 'one',
            },
        },
        {
            it: 'accepts an entries-array input and yields a plain object',
            input: [
                [
                    'x-one',
                    'one',
                ],
                [
                    'x-two',
                    'two',
                ],
            ],
            expect: {
                'x-one': 'one',
                'x-two': 'two',
            },
        },
    ]);
});

describe('AllowedHeaders', () => {
    it('accepts every supported input shape', () => {
        const headersInstance: AllowedHeaders = new Headers();
        const plainRecord: AllowedHeaders = {
            'x-one': 'one',
        };
        const stringArrayRecord: AllowedHeaders = {
            'x-multi': [
                'one',
                'two',
            ],
        };
        const entriesArray: AllowedHeaders = [
            [
                'x-one',
                'one',
            ],
        ];
        const outgoingNumberRecord: AllowedHeaders = {
            'x-num': 42,
        };
        const incomingHttpHeaders: AllowedHeaders = {
            'content-type': 'application/json',
            cookie: [
                'a=1',
                'b=2',
            ],
        };

        /** Each declared value is structurally assignable; the assertions just keep them live. */
        assert.isDefined(headersInstance);
        assert.isDefined(plainRecord);
        assert.isDefined(stringArrayRecord);
        assert.isDefined(entriesArray);
        assert.isDefined(outgoingNumberRecord);
        assert.isDefined(incomingHttpHeaders);
    });
});

describe(readHeaderValue.name, () => {
    itCases(readHeaderValue, [
        {
            it: 'wraps a single string value in a one-element array',
            inputs: [
                {
                    'content-type': 'application/json',
                },
                'content-type',
            ],
            expect: ['application/json'],
        },
        {
            it: 'finds a header with a different case',
            inputs: [
                {
                    'X-Request-Id': 'abc',
                },
                'x-request-id',
            ],
            expect: ['abc'],
        },
        {
            it: 'matches case-insensitively in both directions',
            inputs: [
                {
                    authorization: 'Bearer token',
                },
                'AUTHORIZATION',
            ],
            expect: ['Bearer token'],
        },
        {
            it: 'returns an empty array when no match is found',
            inputs: [
                {
                    'x-other': 'value',
                },
                'x-missing',
            ],
            expect: [],
        },
        {
            it: 'returns an empty array for empty headers',
            inputs: [
                {},
                'any',
            ],
            expect: [],
        },
        {
            it: 'returns the full array when the header has multiple values',
            inputs: [
                {
                    'set-cookie': [
                        'first=1',
                        'second=2',
                    ],
                },
                'set-cookie',
            ],
            expect: [
                'first=1',
                'second=2',
            ],
        },
        {
            it: 'returns an empty array when the header value is explicitly undefined',
            inputs: [
                {
                    'x-maybe': undefined,
                },
                'x-maybe',
            ],
            expect: [],
        },
    ]);
});
