import {describe, it, itCases} from '@augment-vir/test';
import {defineShape} from 'object-shape-tester';
import {extractRequiredHeaders} from './required-headers.js';

describe(extractRequiredHeaders.name, () => {
    it('accepts matching header values for shape requirements', () => {
        extractRequiredHeaders(
            '/test',
            {
                requiredRequestHeaders: {
                    authorization: defineShape(''),
                },
            },
            {
                requiredHeaders: {
                    authorization: 'Bearer token',
                },
            },
        );
    });

    it('accepts matching header values for regex requirements', () => {
        extractRequiredHeaders(
            '/test',
            {
                requiredRequestHeaders: {
                    'x-api-key': /^key-.+$/,
                },
            },
            {
                requiredHeaders: {
                    'x-api-key': 'key-abc',
                },
            },
        );
    });

    it('allows omitting params when endpoint has no required headers', () => {
        extractRequiredHeaders('/test', {}, {});
    });

    it('allows omitting requiredHeaders in params when endpoint has no requirements', () => {
        extractRequiredHeaders(
            '/test',
            {},
            {
                requiredHeaders: undefined,
            },
        );
    });

    it('requires the requiredHeaders param key to match the endpoint definition keys', () => {
        extractRequiredHeaders(
            '/test',
            {
                requiredRequestHeaders: {
                    authorization: defineShape(''),
                    'x-request-id': /^[a-f0-9-]+$/,
                },
            },
            {
                requiredHeaders: {
                    authorization: 'Bearer token',
                    'x-request-id': 'abc-123',
                },
            },
        );
    });

    itCases(extractRequiredHeaders, [
        {
            it: 'returns empty object when no headers are required',
            inputs: [
                '/test',
                {},
                {},
            ],
            expect: {},
        },
        {
            it: 'returns empty object when requiredRequestHeaders is undefined on both',
            inputs: [
                '/test',
                {
                    requiredRequestHeaders: undefined,
                },
                {
                    requiredHeaders: undefined,
                },
            ],
            expect: {},
        },
        {
            it: 'returns header values matching shape requirements',
            inputs: [
                '/test',
                {
                    requiredRequestHeaders: {
                        authorization: defineShape(''),
                    },
                },
                {
                    requiredHeaders: {
                        authorization: 'Bearer token123',
                    },
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
                    requiredRequestHeaders: {
                        'x-api-key': /^key-[a-z0-9]+$/,
                    },
                },
                {
                    requiredHeaders: {
                        'x-api-key': 'key-abc123',
                    },
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
                    requiredRequestHeaders: {
                        authorization: defineShape(''),
                        'x-request-id': /^[0-9a-f-]+$/,
                    },
                },
                {
                    requiredHeaders: {
                        authorization: 'Bearer abc',
                        'x-request-id': 'abc-123-def',
                    },
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
                    requiredRequestHeaders: {
                        authorization: defineShape(''),
                    },
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
                    requiredRequestHeaders: {
                        authorization: defineShape(''),
                    },
                },
                {
                    requiredHeaders: undefined,
                },
            ],
            throws: {
                matchMessage: '/protected',
            },
        },
        {
            it: 'throws when headers are set but endpoint has no requirements',
            inputs: [
                '/public',
                {},
                {
                    requiredHeaders: {
                        authorization: 'Bearer sneaky',
                    },
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
                {
                    requiredRequestHeaders: undefined,
                },
                {
                    requiredHeaders: {
                        authorization: 'Bearer sneaky',
                    },
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
                    requiredRequestHeaders: {
                        'x-api-key': /^key-[a-z0-9]+$/,
                    },
                },
                {
                    requiredHeaders: {
                        'x-api-key': 'INVALID',
                    },
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
                    requiredRequestHeaders: {
                        'x-api-key': /^key-.+$/,
                    },
                },
                {
                    requiredHeaders: {
                        // @ts-expect-error: cannot assign `undefined` to a required header
                        'x-api-key': undefined,
                    },
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
                    requiredRequestHeaders: {
                        'x-api-key': /^key-.+$/,
                    },
                },
                {
                    requiredHeaders: {
                        'x-api-key': '',
                    },
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
                    requiredRequestHeaders: {
                        'content-type': defineShape(0),
                    },
                },
                {
                    requiredHeaders: {
                        'content-type': 'text/plain',
                    },
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
                    requiredRequestHeaders: {
                        'x-required': defineShape(''),
                    },
                },
                {
                    requiredHeaders: {
                        // @ts-expect-error: cannot assign `undefined` to a required header
                        'x-required': undefined,
                    },
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
                {
                    requiredRequestHeaders: undefined,
                },
                {
                    requiredHeaders: {},
                },
            ],
            expect: {},
        },
        {
            it: 'includes endpoint path in error when headers are missing',
            inputs: [
                '/my/special/route',
                {
                    requiredRequestHeaders: {
                        token: defineShape(''),
                    },
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
                    requiredRequestHeaders: {
                        'x-custom-header': /^valid$/,
                    },
                },
                {
                    requiredHeaders: {
                        'x-custom-header': 'nope',
                    },
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
                    requiredRequestHeaders: {
                        'x-typed-header': defineShape(0),
                    },
                },
                {
                    requiredHeaders: {
                        'x-typed-header': 'wrong',
                    },
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
                    requiredRequestHeaders: {
                        authorization: defineShape(''),
                        'x-request-id': /^[a-f0-9-]+$/,
                        'x-api-version': defineShape(''),
                    },
                },
                {
                    requiredHeaders: {
                        authorization: 'Bearer xyz',
                        'x-request-id': 'abc-def-123',
                        'x-api-version': 'v2',
                    },
                },
            ],
            expect: {
                authorization: 'Bearer xyz',
                'x-request-id': 'abc-def-123',
                'x-api-version': 'v2',
            },
        },
        {
            it: 'throws on first failing header among multiple',
            inputs: [
                '/test',
                {
                    requiredRequestHeaders: {
                        good: defineShape(''),
                        bad: /^must-match$/,
                    },
                },
                {
                    requiredHeaders: {
                        good: 'fine',
                        bad: 'does-not-match',
                    },
                },
            ],
            throws: {
                matchMessage: 'bad',
            },
        },
    ]);
});
