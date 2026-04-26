import {type AnyObject} from '@augment-vir/common';
import {type IsAny} from 'type-fest';

/**
 * Converts any properties whose type includes `undefined` or `null` into optional properties typed
 * as `T[K] | undefined`. Properties whose type does not include `undefined` or `null` are left
 * unchanged.
 *
 * @category Internal
 * @example
 *
 * ```ts
 * // {name: string; age?: number | undefined; label?: string | null};
 * type Result = SetNullishPropertiesAsOptional<{
 *     name: string;
 *     age: number | undefined;
 *     label: string | null;
 * }>;
 * ```
 */
export type SetNullishPropertiesAsOptional<T extends AnyObject> = {
    -readonly [Key in keyof T as IsNullish<T[Key]> extends true ? never : Key]: T[Key];
} & {
    -readonly [Key in keyof T as IsNullish<T[Key]> extends true ? Key : never]?: T[Key];
} extends infer Merged
    ? {[Key in keyof Merged]: Merged[Key]}
    : never;

type IsNullish<T> = IsAny<T> extends true ? true : [T] extends [NonNullable<T>] ? false : true;
