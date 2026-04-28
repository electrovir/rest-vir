import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {setRawResponseHeaders, setResponseHeaders} from './headers.js';

describe(setResponseHeaders.name, () => {
    it('removes headers', () => {
        const headers: Record<string, string> = {
            'pre-existing': 'exists',
        };

        setResponseHeaders(
            {
                header(key, value) {
                    headers[key] = value;
                    return this as any;
                },
                removeHeader(key) {
                    delete headers[key];
                    return this as any;
                },
            },
            {
                'pre-existing': undefined,
                'new-header': 'value',
            },
        );

        assert.deepEquals(headers, {
            'new-header': 'value',
        });
    });
});

describe(setRawResponseHeaders.name, () => {
    it('sets and removes headers on the raw response', () => {
        const headers: Record<string, string | number | readonly string[]> = {
            'pre-existing': 'exists',
        };

        setRawResponseHeaders(
            {
                setHeader(key, value) {
                    headers[key] = value;
                    return this as any;
                },
                removeHeader(key) {
                    delete headers[key];
                    return this as any;
                },
            },
            {
                'pre-existing': undefined,
                'new-header': 'value',
            },
        );

        assert.deepEquals(headers, {
            'new-header': 'value',
        });
    });
});
