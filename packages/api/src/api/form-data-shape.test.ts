import {assert} from '@augment-vir/assert';
import {describe, it, itCases} from '@augment-vir/test';
import {checkValidShape, defineShape, nonEmptyStringShape} from 'object-shape-tester';
import {formDataShape, isFormDataShape} from './form-data-shape.js';

describe(isFormDataShape.name, () => {
    itCases(isFormDataShape, [
        {
            it: 'passes on a shape definition',
            input: defineShape(formDataShape()),
            expect: true,
        },
        {
            it: 'passes on form data shape',
            input: formDataShape(),
            expect: true,
        },
        {
            it: 'rejects a different custom shape',
            input: nonEmptyStringShape,
            expect: false,
        },
        {
            it: 'rejects a wrapped different custom shape',
            input: defineShape(nonEmptyStringShape),
            expect: false,
        },
        {
            it: 'rejects a different shape',
            input: defineShape({}),
            expect: false,
        },
        {
            it: 'rejects a plain object',
            input: {},
            expect: false,
        },
        {
            it: 'rejects a string',
            input: 'not-a-shape',
            expect: false,
        },
        {
            it: 'rejects undefined',
            input: undefined,
            expect: false,
        },
        {
            it: 'rejects null',
            input: null,
            expect: false,
        },
    ]);
});

describe(formDataShape.name, () => {
    it('accepts a FormData instance via checkValidShape', () => {
        const shape = formDataShape();
        assert.isTrue(
            checkValidShape(new FormData(), shape, {
                allowExtraKeys: true,
            }),
        );
    });

    it('rejects a non-FormData value via checkValidShape', () => {
        const shape = formDataShape();
        assert.isFalse(
            checkValidShape({}, shape, {
                allowExtraKeys: true,
            }),
        );
        assert.isFalse(
            checkValidShape('not form data', shape, {
                allowExtraKeys: true,
            }),
        );
        assert.isFalse(
            checkValidShape(undefined, shape, {
                allowExtraKeys: true,
            }),
        );
    });

    it("exposes a FormData runtime type on the shape's `runtimeType`", () => {
        const shape = formDataShape();
        assert.tsType<typeof shape.runtimeType>().equals<FormData>();
    });

    it('defaults its runtime value to an empty FormData instance', () => {
        const shape = formDataShape();
        assert.instanceOf(shape.default, FormData);
    });
});
