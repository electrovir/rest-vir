import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import type {SetNullishPropertiesAsOptional} from './object.js';

describe('SetNullishPropertiesAsOptional', () => {
    it('leaves required properties unchanged', () => {
        type Result = SetNullishPropertiesAsOptional<{
            name: string;
            age: number;
        }>;

        assert.tsType<Result>().equals<{
            name: string;
            age: number;
        }>();
    });

    it('makes properties with undefined optional', () => {
        type Result = SetNullishPropertiesAsOptional<{
            value: number | undefined;
        }>;

        assert.tsType<Result>().equals<{
            value?: number | undefined;
        }>();
    });

    it('makes properties with null optional', () => {
        type Result = SetNullishPropertiesAsOptional<{
            value: string | null;
        }>;

        assert.tsType<Result>().equals<{
            value?: string | null;
        }>();
    });

    it('mixes required and nullish properties', () => {
        type Result = SetNullishPropertiesAsOptional<{
            name: string;
            age: number | undefined;
            label: string | null;
        }>;

        assert.tsType<Result>().equals<{
            name: string;
            age?: number | undefined;
            label?: string | null;
        }>();
    });

    it('handles an empty object', () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-object-type
        type Result = SetNullishPropertiesAsOptional<{}>;

        // eslint-disable-next-line @typescript-eslint/no-empty-object-type
        assert.tsType<Result>().equals<{}>();
    });

    it('strips readonly modifiers from required properties', () => {
        type Result = SetNullishPropertiesAsOptional<{
            readonly name: string;
        }>;

        assert.tsType<Result>().equals<{
            name: string;
        }>();
    });

    it('strips readonly modifiers from optional properties', () => {
        type Result = SetNullishPropertiesAsOptional<{
            readonly value: string | undefined;
        }>;

        assert.tsType<Result>().equals<{
            value?: string | undefined;
        }>();
    });

    it('treats any-typed properties as optional', () => {
        type Result = SetNullishPropertiesAsOptional<{
            anything: any;
        }>;

        assert.tsType<Result>().equals<{
            anything?: any;
        }>();
    });

    it('treats unknown-typed properties as optional', () => {
        type Result = SetNullishPropertiesAsOptional<{
            anything: unknown;
        }>;

        assert.tsType<Result>().equals<{
            anything?: unknown;
        }>();
    });

    it('makes properties with both null and undefined optional', () => {
        type Result = SetNullishPropertiesAsOptional<{
            value: string | null | undefined;
        }>;

        assert.tsType<Result>().equals<{
            value?: string | null | undefined;
        }>();
    });

    it('preserves nested object types without recursing', () => {
        type Result = SetNullishPropertiesAsOptional<{
            nested: {
                inner: string | undefined;
            };
        }>;

        assert.tsType<Result>().equals<{
            nested: {
                inner: string | undefined;
            };
        }>();
    });

    it('handles array property types', () => {
        type Result = SetNullishPropertiesAsOptional<{
            items: string[];
            optionalItems: string[] | undefined;
        }>;

        assert.tsType<Result>().equals<{
            items: string[];
            optionalItems?: string[] | undefined;
        }>();
    });

    it('handles function property types', () => {
        type Result = SetNullishPropertiesAsOptional<{
            handler: () => void;
            optionalHandler: (() => void) | undefined;
        }>;

        assert.tsType<Result>().equals<{
            handler: () => void;
            optionalHandler?: (() => void) | undefined;
        }>();
    });

    it('makes a never-typed property required', () => {
        type Result = SetNullishPropertiesAsOptional<{
            impossible: never;
            value: string;
        }>;

        assert.tsType<Result>().equals<{
            impossible: never;
            value: string;
        }>();
    });

    it('handles string and number index-like keys', () => {
        type Result = SetNullishPropertiesAsOptional<{
            'string-key': string;
            42: number | undefined;
        }>;

        assert.tsType<Result>().equals<{
            'string-key': string;
            42?: number | undefined;
        }>();
    });

    it('handles symbol-keyed properties', () => {
        const symbolKey: unique symbol = Symbol('marker');
        type Result = SetNullishPropertiesAsOptional<{
            [symbolKey]: string | undefined;
            present: number;
        }>;

        assert.tsType<Result>().equals<{
            [symbolKey]?: string | undefined;
            present: number;
        }>();
    });

    it('handles a mixed null + undefined union typed as optional', () => {
        type Result = SetNullishPropertiesAsOptional<{
            value: string | null | undefined;
            required: number;
        }>;

        assert.tsType<Result>().equals<{
            required: number;
            value?: string | null | undefined;
        }>();
    });
});
