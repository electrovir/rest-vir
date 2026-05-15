import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {
    type AllowedHeaders,
    consolidateHeaders,
    headersToObject,
    mergeHeaders,
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
    it('converts plain object headers into a record', () => {
        const result = headersToObject({
            'x-one': 'one',
            'x-two': 'two',
        });
        assert.deepEquals(result, {
            'x-one': 'one',
            'x-two': 'two',
        });
    });

    it('returns an empty object for empty input', () => {
        const result = headersToObject({});
        assert.deepEquals(result, {});
    });

    it('coerces array values into a single comma-joined string when normalized', () => {
        const result = headersToObject({
            'x-multi': [
                'one',
                'two',
            ],
        });
        // Headers normalizes multi-values into a single comma-joined string
        assert.strictEquals(result['x-multi'], 'one, two');
    });

    it('accepts a Headers instance and yields a plain object', () => {
        const result = headersToObject(
            new Headers({
                'x-one': 'one',
            }),
        );
        assert.deepEquals(result, {
            'x-one': 'one',
        });
    });

    it('accepts an entries-array input and yields a plain object', () => {
        const result = headersToObject([
            [
                'x-one',
                'one',
            ],
            [
                'x-two',
                'two',
            ],
        ]);
        assert.deepEquals(result, {
            'x-one': 'one',
            'x-two': 'two',
        });
    });
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
