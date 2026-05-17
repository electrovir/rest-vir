import {check} from '@augment-vir/assert';
import {filterMap, getObjectTypedEntries, getObjectTypedKeys, stringify} from '@augment-vir/common';
import {
    type AllowedSearchParamValue,
    type AllowedSingleSearchParamValue,
    type BaseSearchParams,
    type RouteSearchParamsType,
    type SearchParamRequirement,
} from '@rest-vir/api';
import {assertValidShape, checkValidShape, type Shape} from 'object-shape-tester';

/**
 * Walk the supplied search params, validate each one against its requirement (if any), and produce
 * a record suitable for both URL building (client) and request validation (server).
 *
 * The form of each output value matches its requirement:
 *
 * - `Shape` whose `runtimeType` is a single string: output is a single string.
 * - `Shape` whose `runtimeType` is `string[]`: output is an array of strings.
 * - `Shape` with a union runtime type: output preserves the form that satisfies the shape.
 * - `RegExp`: output is a single string.
 * - `RegExp[]`: output is an array of strings. Each value must match at least one of the supplied
 *   regexes.
 * - No requirement: output preserves the supplied form (single or array), stringified.
 *
 * Non-string primitives are coerced with `String(...)` so that URL builders can accept numbers and
 * booleans even when the shape is `string`-typed.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export function extractSearchParams(
    requirements: Readonly<Record<string, SearchParamRequirement>> | undefined,
    suppliedSearchParams: RouteSearchParamsType | undefined,
): BaseSearchParams {
    const supplied: Readonly<Record<string, unknown>> =
        (suppliedSearchParams as Readonly<Record<string, unknown>> | undefined) ?? {};

    const result: Record<string, AllowedSearchParamValue> = {};

    getObjectTypedEntries(requirements || {}).forEach(
        ([
            key,
            requirement,
        ]) => {
            const rawValue = supplied[key];

            const validatedValue = validateSearchParam(key, rawValue, requirement);

            if (validatedValue != undefined) {
                result[key] = validatedValue;
            }
        },
    );

    getObjectTypedKeys(supplied).forEach((key) => {
        if (!(requirements && key in requirements)) {
            const rawValue = supplied[key];
            const passThrough = passThroughValue(rawValue);
            if (passThrough !== undefined) {
                result[key] = passThrough;
            }
        }
    });

    return result;
}

/**
 * Validate (and reshape) a single search param value against its requirement. Returns `undefined`
 * if the param should be omitted from the output (e.g. shape allows undefined and no value was
 * supplied); throws if the value can't be made to satisfy the requirement.
 */
function validateSearchParam(
    key: string,
    rawValue: unknown,
    requirement: SearchParamRequirement,
): AllowedSearchParamValue | undefined {
    if (requirement instanceof RegExp) {
        return validateSingleRegExp(key, rawValue, requirement);
    } else if (check.isArray(requirement)) {
        return validateRegExpTuple(key, rawValue, requirement);
    } else {
        return validateShape(key, rawValue, requirement);
    }
}

/**
 * For a `Shape` requirement, accept the supplied value in whichever form the shape will accept.
 *
 * Tries:
 *
 * 1. The value as-is.
 * 2. A wrapped version `[rawValue]` if the value is a single primitive (lets a single URL occurrence
 *    satisfy an array shape).
 * 3. An unwrapped version `rawValue[0]` if the value is a single-element array (lets a one-element URL
 *    array satisfy a single-value shape).
 *
 * If none match, the original value is re-run through `assertValidShape` to surface a real error.
 * Returns the matched form, stringified.
 */
function validateShape(
    key: string,
    rawValue: unknown,
    shape: Shape,
): AllowedSearchParamValue | undefined {
    const coercedAsIs = coerceRawValue(rawValue);
    const wrappedInArray = !rawValue || check.isArray(rawValue) ? undefined : [stringify(rawValue)];
    const unwrappedFromArray =
        !check.isArray(rawValue) || rawValue.length !== 1 ? undefined : String(rawValue[0]);

    if (
        checkValidShape(coercedAsIs, shape, {
            allowExtraKeys: true,
        })
    ) {
        return coercedAsIs;
    } else if (
        wrappedInArray &&
        checkValidShape(wrappedInArray, shape, {
            allowExtraKeys: true,
        })
    ) {
        return wrappedInArray;
    } else if (
        unwrappedFromArray &&
        checkValidShape(unwrappedFromArray, shape, {
            allowExtraKeys: true,
        })
    ) {
        return unwrappedFromArray;
    } else {
        /** None of the forms passed; surface a real shape-mismatch error via assertValidShape. */
        assertValidShape(
            rawValue,
            shape,
            {
                allowExtraKeys: true,
            },
            `Search param '${key}' value does not match shape requirement: '${stringify(rawValue)}'`,
        );
        /* node:coverage ignore next 2: unreachable — assertValidShape always throws on a failed shape */
        return undefined;
    }
}

function validateSingleRegExp(key: string, rawValue: unknown, regExp: RegExp): string | undefined {
    /** Accept a single primitive directly, or a one-element array that we can unwrap. */
    const single = check.isArray(rawValue) && rawValue.length === 1 ? rawValue[0] : rawValue;
    if (single == undefined) {
        throw new Error(`Search param '${key}' is required but was not provided.`);
    } else if (check.isArray(single)) {
        throw new TypeError(
            `Search param '${key}' expects a single value but got multiple: '${stringify(rawValue)}'`,
        );
    }
    const stringValue = stringify(single);
    if (!stringValue || !regExp.test(stringValue)) {
        throw new Error(
            `Search param '${key}' value does not match RegExp requirement: '${stringify(stringValue)}'`,
        );
    }
    return stringValue;
}

function validateRegExpTuple(
    key: string,
    rawValue: unknown,
    regExpTuple: ReadonlyArray<RegExp>,
): string[] {
    /** Wrap a single primitive into a one-element array so a single URL occurrence is acceptable. */
    const rawArray = check.isArray(rawValue) ? rawValue : rawValue == undefined ? [] : [rawValue];

    if (!rawArray.length) {
        throw new Error(`Search param '${key}' is required but was not provided.`);
    }

    return rawArray.map((value, index) => {
        const stringValue = String(value);
        if (!stringValue) {
            throw new Error(
                `Search param '${key}' value at index ${index} is empty: '${stringify(stringValue)}'`,
            );
        }
        const anyMatch = regExpTuple.some((regExp) => regExp.test(stringValue));
        if (!anyMatch) {
            throw new Error(
                `Search param '${key}' value at index ${index} does not match any RegExp requirement: '${stringify(stringValue)}'`,
            );
        }
        return stringValue;
    });
}

/**
 * Coerce a supplied value to a shape-compatible form: arrays become arrays of strings, single
 * primitives become single strings. `null`/`undefined` are propagated so a shape that explicitly
 * accepts them can pass.
 */
function coerceRawValue(rawValue: unknown): unknown {
    if (rawValue == undefined) {
        return rawValue;
    } else if (check.isArray(rawValue)) {
        return filterMap(rawValue, (value) => String(value), check.isTruthy);
    } else {
        return stringify(rawValue);
    }
}

/**
 * Format a value that wasn't declared on the route. Preserves the supplied form (single primitive
 * stays single, arrays stay arrays) but stringifies each entry.
 */
function passThroughValue(rawValue: unknown): AllowedSearchParamValue | undefined {
    if (rawValue == undefined) {
        return undefined;
    } else if (check.isArray(rawValue)) {
        const stringValues = (rawValue as ReadonlyArray<unknown>)
            .filter(check.isDefined)
            .map((value) =>
                String(value),
            ) satisfies ReadonlyArray<string> as AllowedSingleSearchParamValue[];
        if (!stringValues.length) {
            return undefined;
        }
        return stringValues;
    }
    return stringify(rawValue);
}
