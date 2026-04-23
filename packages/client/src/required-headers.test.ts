import {describe, it, itCases} from '@augment-vir/test';
import {defineShape} from 'object-shape-tester';
import {extractRequiredHeaders} from './required-headers.js';

describe(extractRequiredHeaders.name, () => {
    it('accepts matching header values for shape requirements', () => {
        extractRequiredHeaders(
            {
                path: '/test',
                requiredHeaders: {
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
            {
                path: '/test',
                requiredHeaders: {
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
        extractRequiredHeaders(
            {
                path: '/test',
            },
            {},
        );
    });

    it('allows omitting requiredHeaders in params when endpoint has no requirements', () => {
        extractRequiredHeaders(
            {
                path: '/test',
            },
            {
                requiredHeaders: undefined,
            },
        );
    });

    it('rejects a non-string value for a shape header at the type level', () => {
        if (false as boolean) {
            extractRequiredHeaders(
                {
                    path: '/test',
                    requiredHeaders: {
                        authorization: defineShape(''),
                    },
                },
                {
                    requiredHeaders: {
                        // @ts-expect-error: number is not assignable to string header value
                        authorization: 123,
                    },
                },
            );
        }
    });

    it('rejects a non-string value for a regex header at the type level', () => {
        if (false as boolean) {
            extractRequiredHeaders(
                {
                    path: '/test',
                    requiredHeaders: {
                        'x-api-key': /^key-.+$/,
                    },
                },
                {
                    requiredHeaders: {
                        // @ts-expect-error: number is not assignable to string header value
                        'x-api-key': 123,
                    },
                },
            );
        }
    });

    it('rejects an unknown header key at the type level', () => {
        if (false as boolean) {
            extractRequiredHeaders(
                {
                    path: '/test',
                    requiredHeaders: {
                        authorization: defineShape(''),
                    },
                },
                {
                    requiredHeaders: {
                        authorization: 'Bearer token',
                        // @ts-expect-error: unknown-header is not a defined required header
                        'unknown-header': 'value',
                    },
                },
            );
        }
    });

    it('requires the requiredHeaders param key to match the endpoint definition keys', () => {
        extractRequiredHeaders(
            {
                path: '/test',
                requiredHeaders: {
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

    it('accepts partial header values at the type level', () => {
        if (false as boolean) {
            extractRequiredHeaders(
                {
                    path: '/test',
                    requiredHeaders: {
                        authorization: defineShape(''),
                        'x-request-id': defineShape(''),
                    },
                },
                {
                    requiredHeaders: {
                        authorization: 'Bearer token',
                    },
                },
            );
        }
    });

    itCases(extractRequiredHeaders<any>, [
        {
            it: 'returns empty object when no headers are required',
            inputs: [
                {
                    path: '/test',
                },
                {},
            ],
            expect: {},
        },
        {
            it: 'returns empty object when requiredHeaders is undefined on both',
            inputs: [
                {
                    path: '/test',
                    requiredHeaders: undefined,
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
                {
                    path: '/test',
                    requiredHeaders: {
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
                {
                    path: '/test',
                    requiredHeaders: {
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
                {
                    path: '/test',
                    requiredHeaders: {
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
                {
                    path: '/protected',
                    requiredHeaders: {
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
                {
                    path: '/protected',
                    requiredHeaders: {
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
                {
                    path: '/public',
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
            it: 'throws when headers are set but endpoint requiredHeaders is undefined',
            inputs: [
                {
                    path: '/public',
                    requiredHeaders: undefined,
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
                {
                    path: '/test',
                    requiredHeaders: {
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
                {
                    path: '/test',
                    requiredHeaders: {
                        'x-api-key': /^key-.+$/,
                    },
                },
                {
                    requiredHeaders: {
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
                {
                    path: '/test',
                    requiredHeaders: {
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
                {
                    path: '/test',
                    requiredHeaders: {
                        'content-type': defineShape(0),
                    },
                },
                {
                    requiredHeaders: {
                        'content-type': 'text/plain' as unknown as number,
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
                {
                    path: '/test',
                    requiredHeaders: {
                        'x-required': defineShape(''),
                    },
                },
                {
                    requiredHeaders: {
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
                {
                    path: '/open',
                    requiredHeaders: undefined,
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
                {
                    path: '/my/special/route',
                    requiredHeaders: {
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
                {
                    path: '/test',
                    requiredHeaders: {
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
                {
                    path: '/test',
                    requiredHeaders: {
                        'x-typed-header': defineShape(0),
                    },
                },
                {
                    requiredHeaders: {
                        'x-typed-header': 'wrong' as unknown as number,
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
                {
                    path: '/test',
                    requiredHeaders: {
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
                {
                    path: '/test',
                    requiredHeaders: {
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
