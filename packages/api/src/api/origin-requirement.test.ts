import {assert} from '@augment-vir/assert';
import {describe, it, itCases} from '@augment-vir/test';
import {
    AnyOrigin,
    checkOriginRequirement,
    matchesOriginRequirement,
    type OriginCheckCallback,
    type OriginRequirement,
} from './origin-requirement.js';

describe(checkOriginRequirement.name, () => {
    describe('undefined requirement', () => {
        itCases(checkOriginRequirement, [
            {
                it: 'returns undefined when requirement is undefined',
                inputs: [
                    'https://example.com',
                    undefined,
                ],
                expect: undefined,
            },
            {
                it: 'returns undefined when requirement is undefined and origin is undefined',
                inputs: [
                    undefined,
                    undefined,
                ],
                expect: undefined,
            },
        ]);
    });

    describe('anyOrigin', () => {
        const anyOriginRequirement: OriginRequirement = {
            anyOrigin: true,
        };

        itCases(checkOriginRequirement, [
            {
                it: 'returns * for anyOrigin with a defined origin',
                inputs: [
                    'https://example.com',
                    anyOriginRequirement,
                ],
                expect: '*',
            },
            {
                it: 'returns * for anyOrigin with undefined origin',
                inputs: [
                    undefined,
                    anyOriginRequirement,
                ],
                expect: '*',
            },
        ]);
    });

    describe('anyOriginWithCredentials', () => {
        const anyOriginWithCredentialsRequirement: OriginRequirement = {
            anyOriginWithCredentials: true,
        };

        itCases(checkOriginRequirement, [
            {
                it: 'returns true for anyOriginWithCredentials with a defined origin',
                inputs: [
                    'https://example.com',
                    anyOriginWithCredentialsRequirement,
                ],
                expect: true,
            },
            {
                it: 'returns true for anyOriginWithCredentials with undefined origin',
                inputs: [
                    undefined,
                    anyOriginWithCredentialsRequirement,
                ],
                expect: true,
            },
        ]);
    });

    describe('string origin', () => {
        const stringRequirement: OriginRequirement = 'https://example.com';

        itCases(checkOriginRequirement, [
            {
                it: 'returns true when origin exactly matches',
                inputs: [
                    'https://example.com',
                    stringRequirement,
                ],
                expect: true,
            },
            {
                it: 'returns false when origin does not match',
                inputs: [
                    'https://other.com',
                    stringRequirement,
                ],
                expect: false,
            },
            {
                it: 'returns false when origin is undefined',
                inputs: [
                    undefined,
                    stringRequirement,
                ],
                expect: false,
            },
            {
                it: 'returns false for a partial match',
                inputs: [
                    'https://example.com/path',
                    stringRequirement,
                ],
                expect: false,
            },
            {
                it: 'returns false for a case mismatch',
                inputs: [
                    'https://Example.com',
                    stringRequirement,
                ],
                expect: false,
            },
            {
                it: 'returns false for an empty string origin',
                inputs: [
                    '',
                    stringRequirement,
                ],
                expect: false,
            },
        ]);
    });

    describe('AnyOrigin string', () => {
        itCases(checkOriginRequirement, [
            {
                it: 'returns * when AnyOrigin is supplied as a string requirement',
                inputs: [
                    'https://example.com',
                    AnyOrigin,
                ],
                expect: AnyOrigin,
            },
            {
                it: 'returns * for AnyOrigin with undefined origin',
                inputs: [
                    undefined,
                    AnyOrigin,
                ],
                expect: AnyOrigin,
            },
        ]);
    });

    describe('RegExp origin', () => {
        const regexpRequirement: OriginRequirement = /^https:\/\/.*\.example\.com$/;

        itCases(checkOriginRequirement, [
            {
                it: 'returns true when origin matches the regex',
                inputs: [
                    'https://sub.example.com',
                    regexpRequirement,
                ],
                expect: true,
            },
            {
                it: 'returns true for another matching subdomain',
                inputs: [
                    'https://api.example.com',
                    regexpRequirement,
                ],
                expect: true,
            },
            {
                it: 'returns false when origin does not match the regex',
                inputs: [
                    'https://example.com',
                    regexpRequirement,
                ],
                expect: false,
            },
            {
                it: 'returns false for http instead of https',
                inputs: [
                    'http://sub.example.com',
                    regexpRequirement,
                ],
                expect: false,
            },
            {
                it: 'returns false when origin is undefined',
                inputs: [
                    undefined,
                    regexpRequirement,
                ],
                expect: false,
            },
            {
                it: 'returns false for an empty string origin',
                inputs: [
                    '',
                    regexpRequirement,
                ],
                expect: false,
            },
        ]);
    });

    describe('callback origin', () => {
        const syncCallbackRequirement: OriginRequirement = (originToCheck) =>
            originToCheck === 'https://allowed.com';

        const asyncCallbackRequirement: OriginCheckCallback = async (originToCheck) => {
            return Promise.resolve(originToCheck === 'https://async-allowed.com');
        };

        itCases(checkOriginRequirement, [
            {
                it: 'returns true when sync callback returns true',
                inputs: [
                    'https://allowed.com',
                    syncCallbackRequirement,
                ],
                expect: true,
            },
            {
                it: 'returns false when sync callback returns false',
                inputs: [
                    'https://denied.com',
                    syncCallbackRequirement,
                ],
                expect: false,
            },
            {
                it: 'returns true when async callback returns true',
                inputs: [
                    'https://async-allowed.com',
                    asyncCallbackRequirement,
                ],
                expect: true,
            },
            {
                it: 'returns false when async callback returns false',
                inputs: [
                    'https://denied.com',
                    asyncCallbackRequirement,
                ],
                expect: false,
            },
        ]);

        it('passes undefined origin to the callback', async () => {
            let receivedOrigin: string | undefined = 'not-called';

            const callbackRequirement: OriginCheckCallback = (originToCheck) => {
                receivedOrigin = originToCheck;
                return false;
            };

            await checkOriginRequirement(undefined, callbackRequirement);
            assert.isUndefined(receivedOrigin);
        });
    });

    describe('array of requirements', () => {
        const requirements: OriginRequirement[] = [
            'https://first.com',
            'https://second.com',
            /^https:\/\/.*\.wildcard\.com$/,
        ];

        itCases(checkOriginRequirement, [
            {
                it: 'returns true when origin matches the first requirement',
                inputs: [
                    'https://first.com',
                    requirements,
                ],
                expect: true,
            },
            {
                it: 'returns true when origin matches the second requirement',
                inputs: [
                    'https://second.com',
                    requirements,
                ],
                expect: true,
            },
            {
                it: 'returns true when origin matches the regex requirement',
                inputs: [
                    'https://sub.wildcard.com',
                    requirements,
                ],
                expect: true,
            },
            {
                it: 'returns false when origin matches none',
                inputs: [
                    'https://unknown.com',
                    requirements,
                ],
                expect: false,
            },
            {
                it: 'returns false for an empty array',
                inputs: [
                    'https://example.com',
                    [],
                ],
                expect: false,
            },
        ]);

        it('short-circuits on the first matching requirement', async () => {
            let callCount = 0;

            const callbackRequirements: OriginRequirement[] = [
                () => {
                    callCount++;
                    return true;
                },
                () => {
                    callCount++;
                    return true;
                },
            ];

            await checkOriginRequirement('https://example.com', callbackRequirements);
            assert.strictEquals(callCount, 1);
        });
    });

    describe('array with undefined entries', () => {
        itCases(checkOriginRequirement, [
            {
                it: 'skips undefined entries and matches a valid one',
                inputs: [
                    'https://example.com',
                    [
                        undefined,
                        'https://example.com',
                    ],
                ],
                expect: true,
            },
            {
                it: 'returns false when all entries are undefined',
                inputs: [
                    'https://example.com',
                    [
                        undefined,
                        undefined,
                    ],
                ],
                expect: false,
            },
        ]);
    });

    it('returns true (not *) when anyOrigin is in an array', async () => {
        const result = await checkOriginRequirement('https://example.com', [
            {
                anyOrigin: true,
            },
        ]);
        assert.isTrue(result);
    });

    it('returns false for an object that matches no known requirement shape', async () => {
        const result = await checkOriginRequirement('https://example.com', {} as OriginRequirement);
        assert.isFalse(result);
    });
});

describe(matchesOriginRequirement.name, () => {
    itCases(matchesOriginRequirement, [
        {
            it: 'returns true for anyOrigin',
            inputs: [
                'https://example.com',
                {
                    anyOrigin: true,
                },
            ],
            expect: true,
        },
        {
            it: 'returns true for anyOriginWithCredentials',
            inputs: [
                'https://example.com',
                {
                    anyOriginWithCredentials: true,
                },
            ],
            expect: true,
        },
        {
            it: 'returns true for matching string origin',
            inputs: [
                'https://example.com',
                'https://example.com',
            ],
            expect: true,
        },
        {
            it: 'returns false for non-matching string origin',
            inputs: [
                'https://other.com',
                'https://example.com',
            ],
            expect: false,
        },
        {
            it: 'returns true for matching regex origin',
            inputs: [
                'https://sub.example.com',
                /\.example\.com$/,
            ],
            expect: true,
        },
        {
            it: 'returns false for non-matching regex origin',
            inputs: [
                'https://other.com',
                /\.example\.com$/,
            ],
            expect: false,
        },
        {
            it: 'returns true for callback returning true',
            inputs: [
                'https://example.com',
                () => true,
            ],
            expect: true,
        },
        {
            it: 'returns false for callback returning false',
            inputs: [
                'https://example.com',
                () => false,
            ],
            expect: false,
        },
        {
            it: 'returns true for anyOrigin with undefined origin',
            inputs: [
                undefined,
                {
                    anyOrigin: true,
                },
            ],
            expect: true,
        },
        {
            it: 'returns false for string origin with undefined origin',
            inputs: [
                undefined,
                'https://example.com',
            ],
            expect: false,
        },
    ]);
});
