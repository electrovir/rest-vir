import {assert} from '@augment-vir/assert';
import {describe, it, itCases} from '@augment-vir/test';
import {assertValidShape, defineShape} from 'object-shape-tester';
import {
    AllOrigins,
    AnyOrigin,
    checkOriginRequirement,
    isAllOrigins,
    isAnyOrigin,
    matchesOriginRequirement,
    originRequirementShape,
} from './origin.js';

describe(isAnyOrigin.name, () => {
    itCases(isAnyOrigin, [
        {
            it: 'works with AnyOrigin',
            input: AnyOrigin,
            expect: true,
        },
        {
            it: 'works with a separate object',
            input: {
                anyOrigin: true,
            },
            expect: true,
        },
        {
            it: 'rejects a string',
            input: 'AnyOrigin',
            expect: false,
        },
    ]);
});

describe(isAllOrigins.name, () => {
    itCases(isAllOrigins, [
        {
            it: 'works with a AllOrigins',
            input: AllOrigins,
            expect: true,
        },
        {
            it: 'works with a separate object',
            input: {
                allOrigins: true,
            },
            expect: true,
        },
        {
            it: 'rejects a string',
            input: 'AllOrigins',
            expect: false,
        },
    ]);
});

describe('originRequirementShape', () => {
    it('works on AnyOrigin', () => {
        assertValidShape(AnyOrigin, defineShape(originRequirementShape), {
            allowExtraKeys: true,
        });
    });
    it('blocks a random object', () => {
        assert.throws(() =>
            assertValidShape(
                {
                    hello: 'there',
                },
                defineShape(originRequirementShape),
                {
                    allowExtraKeys: true,
                },
            ),
        );
    });
});

describe(checkOriginRequirement.name, () => {
    itCases(checkOriginRequirement, [
        {
            it: 'handles an undefined requirement',
            inputs: [
                'my-origin',
                undefined,
            ],
            expect: undefined,
        },
        {
            it: 'handles AnyOrigin',
            inputs: [
                undefined,
                AnyOrigin,
            ],
            expect: AnyOrigin,
        },
        {
            it: 'handles AllOrigins',
            inputs: [
                undefined,
                AllOrigins,
            ],
            expect: true,
        },
        {
            it: 'handles a missing origin',
            inputs: [
                undefined,
                'my-origin',
            ],
            expect: false,
        },
        {
            it: 'handles a matched string requirement',
            inputs: [
                'my-origin',
                'my-origin',
            ],
            expect: true,
        },
        {
            it: 'handles a mismatched string requirement',
            inputs: [
                'my-origin2',
                'my-origin',
            ],
            expect: false,
        },
        {
            it: 'handles a matched RegExp requirement',
            inputs: [
                'my-origin',
                /my/,
            ],
            expect: true,
        },
        {
            it: 'handles a mismatched RegExp requirement',
            inputs: [
                'my-origin',
                /boat/,
            ],
            expect: false,
        },
        {
            it: 'handles a matched array requirement',
            inputs: [
                'my-origin',
                [
                    'boat',
                    /my/,
                ],
            ],
            expect: true,
        },
        {
            it: 'handles a mismatched array requirement',
            inputs: [
                'my-origin',
                [
                    /boat/,
                    'boat',
                ],
            ],
            expect: false,
        },
        {
            it: 'handles a matched function requirement',
            inputs: [
                'my-origin',
                [
                    'boat',
                    () => true,
                ],
            ],
            expect: true,
        },
        {
            it: 'handles a mismatched function requirement',
            inputs: [
                'my-origin',
                [
                    /boat/,
                    () => false,
                ],
            ],
            expect: false,
        },
        {
            it: 'allows a function to return true even on undefined origin',
            inputs: [
                undefined,
                () => true,
            ],
            expect: true,
        },
    ]);
});

describe(matchesOriginRequirement.name, () => {
    itCases(matchesOriginRequirement, [
        {
            it: 'accepts match',
            inputs: [
                'my-origin',
                'my-origin',
            ],
            expect: true,
        },
        {
            it: 'rejects mismatch',
            inputs: [
                'my-origin',
                'my-origin2',
            ],
            expect: false,
        },
    ]);
});
