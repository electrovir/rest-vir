import {describe, it, itCases} from '@augment-vir/test';
import {defineShape, nullableShape} from 'object-shape-tester';
import {extractRequiredHeaders} from './required-headers.js';

describe(extractRequiredHeaders.name, () => {
    it('accepts matching header values for shape requirements', () => {
        extractRequiredHeaders(
            '/test',
            {
                authorization: defineShape(''),
            },
            {
                authorization: 'Bearer token',
            },
        );
    });

    it('accepts matching header values for regex requirements', () => {
        extractRequiredHeaders(
            '/test',
            {
                'x-api-key': /^key-.+$/,
            },
            {
                'x-api-key': 'key-abc',
            },
        );
    });

    it('allows omitting params when endpoint has no required headers', () => {
        extractRequiredHeaders('/test', undefined, {});
    });

    it('allows omitting requiredHeaders in params when endpoint has no requirements', () => {
        extractRequiredHeaders('/test', undefined, undefined);
    });

    it('accepts a requiredRequestHeaders record with multiple keys', () => {
        extractRequiredHeaders(
            '/test',
            {
                authorization: defineShape(''),
                'x-request-id': /^[a-f0-9-]+$/,
            },
            {
                authorization: 'Bearer token',
                'x-request-id': 'abc-123',
            },
        );
    });

    itCases(extractRequiredHeaders, [
        {
            it: 'returns empty object when no headers are required',
            inputs: [
                '/test',
                undefined,
                {},
            ],
            expect: {},
        },
        {
            it: 'returns empty object when requiredRequestHeaders is undefined on both',
            inputs: [
                '/test',
                undefined,
                undefined,
            ],
            expect: {},
        },
        {
            it: 'returns header values matching shape requirements',
            inputs: [
                '/test',
                {
                    authorization: defineShape(''),
                },
                {
                    authorization: 'Bearer token123',
                },
            ],
            expect: {
                authorization: 'Bearer token123',
            },
        },
        {
            it: 'returns header values matching regex requirements',
            inputs: [
                '/test',
                {
                    'x-api-key': /^key-[a-z0-9]+$/,
                },
                {
                    'x-api-key': 'key-abc123',
                },
            ],
            expect: {
                'x-api-key': 'key-abc123',
            },
        },
        {
            it: 'returns multiple headers with mixed shape and regex requirements',
            inputs: [
                '/test',
                {
                    authorization: defineShape(''),
                    'x-request-id': /^[0-9a-f-]+$/,
                },
                {
                    authorization: 'Bearer abc',
                    'x-request-id': 'abc-123-def',
                },
            ],
            expect: {
                authorization: 'Bearer abc',
                'x-request-id': 'abc-123-def',
            },
        },
        {
            it: 'throws when endpoint requires headers but none are provided',
            inputs: [
                '/protected',
                {
                    authorization: defineShape(''),
                },
                {},
            ],
            throws: {
                matchMessage: '/protected',
            },
        },
        {
            it: 'throws when endpoint requires headers but requiredHeaders is undefined',
            inputs: [
                '/protected',
                {
                    authorization: defineShape(''),
                },
                undefined,
            ],
            throws: {
                matchMessage: '/protected',
            },
        },
        {
            it: 'throws when headers are set but endpoint has no requirements',
            inputs: [
                '/public',
                undefined,
                {
                    authorization: 'Bearer sneaky',
                },
            ],
            throws: {
                matchMessage: '/public',
            },
        },
        {
            it: 'throws when headers are set but endpoint requiredRequestHeaders is undefined',
            inputs: [
                '/public',
                undefined,
                {
                    authorization: 'Bearer sneaky',
                },
            ],
            throws: {
                matchMessage: '/public',
            },
        },
        {
            it: 'throws when regex header value does not match',
            inputs: [
                '/test',
                {
                    'x-api-key': /^key-[a-z0-9]+$/,
                },
                {
                    'x-api-key': 'INVALID',
                },
            ],
            throws: {
                matchMessage: 'x-api-key',
            },
        },
        {
            it: 'throws when regex header value is undefined',
            inputs: [
                '/test',
                {
                    'x-api-key': /^key-.+$/,
                },
                {
                    'x-api-key': undefined,
                },
            ],
            throws: {
                matchMessage: 'x-api-key',
            },
        },
        {
            it: 'throws when regex header value is empty string',
            inputs: [
                '/test',
                {
                    'x-api-key': /^key-.+$/,
                },
                {
                    'x-api-key': '',
                },
            ],
            throws: {
                matchMessage: 'x-api-key',
            },
        },
        {
            it: 'throws when shape header value does not match',
            inputs: [
                '/test',
                {
                    'content-type': defineShape(0),
                },
                {
                    'content-type': 'text/plain',
                },
            ],
            throws: {
                matchMessage: 'content-type',
            },
        },
        {
            it: 'throws when shape header value is undefined',
            inputs: [
                '/test',
                {
                    'x-required': defineShape(''),
                },
                {
                    'x-required': undefined,
                },
            ],
            throws: {
                matchMessage: 'x-required',
            },
        },
        {
            it: 'does not throw for empty params object when endpoint has no requirements',
            inputs: [
                '/open',
                undefined,
                {},
            ],
            expect: {},
        },
        {
            it: 'includes endpoint path in error when headers are missing',
            inputs: [
                '/my/special/route',
                {
                    token: defineShape(''),
                },
                {},
            ],
            throws: {
                matchMessage: '/my/special/route',
            },
        },
        {
            it: 'includes header name in regex error',
            inputs: [
                '/test',
                {
                    'x-custom-header': /^valid$/,
                },
                {
                    'x-custom-header': 'nope',
                },
            ],
            throws: {
                matchMessage: 'x-custom-header',
            },
        },
        {
            it: 'includes header name in shape error',
            inputs: [
                '/test',
                {
                    'x-typed-header': defineShape(0),
                },
                {
                    'x-typed-header': 'wrong',
                },
            ],
            throws: {
                matchMessage: 'x-typed-header',
            },
        },
        {
            it: 'validates all headers and passes when all match',
            inputs: [
                '/test',
                {
                    authorization: defineShape(''),
                    'x-request-id': /^[a-f0-9-]+$/,
                    'x-api-version': defineShape(''),
                },
                {
                    authorization: 'Bearer xyz',
                    'x-request-id': 'abc-def-123',
                    'x-api-version': 'v2',
                },
            ],
            expect: {
                authorization: 'Bearer xyz',
                'x-request-id': 'abc-def-123',
                'x-api-version': 'v2',
            },
        },
        {
            it: 'omits header when shape allows undefined and header value is undefined',
            inputs: [
                '/test',
                {
                    'x-optional': nullableShape(''),
                },
                {
                    'x-optional': undefined,
                },
            ],
            expect: {},
        },
        {
            it: 'throws on first failing header among multiple',
            inputs: [
                '/test',
                {
                    good: defineShape(''),
                    bad: /^must-match$/,
                },
                {
                    good: 'fine',
                    bad: 'does-not-match',
                },
            ],
            throws: {
                matchMessage: 'bad',
            },
        },
    ]);
});
