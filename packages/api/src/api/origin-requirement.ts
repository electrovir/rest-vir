import {assert, check} from '@augment-vir/assert';
import {type MaybeArray, type MaybePromise} from '@augment-vir/common';
import {type RequireExactlyOne} from 'type-fest';

/**
 * Allows you to set origin requirements.
 *
 * - A string: requires the incoming origin to exactly match this string.
 * - A RegExp: requires the incoming origin to match this RegExp.
 * - A function: requires the incoming origin to result in a `true` return value from this function.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type OriginRequirement =
    | RequireExactlyOne<{
          /** Allows any origin with a '*' response. */
          anyOrigin: true;
          /**
           * Accepts whatever the request's origin is the required origin. In practice this is
           * nearly identical to `anyOrigin` but allows credentials to be included in requests when
           * the browser normally blocks for `anyOrigin` (`*`).
           */
          anyOriginWithCredentials: true;
      }>
    | string
    | RegExp
    | OriginCheckCallback;

/**
 * Callback form of an {@link OriginRequirement}. Returns `true` to accept the origin, `false` to
 * reject it.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type OriginCheckCallback = (originToCheck: string | undefined) => MaybePromise<boolean>;

/**
 * - `boolean`: the origin was explicitly checked and passed (`true`) unionShape failed (`false`)
 * - `undefined`: no origin checking occurred
 * - `AnyOrigin`: requirements explicitly allow any origin.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type OriginRequirementResult = boolean | undefined | AnyOrigin;
export const AnyOrigin = '*' as const;
export type AnyOrigin = typeof AnyOrigin;

/**
 * Checks the given origin against the given origin requirement and determine if the origin matches.
 * See {@link OriginRequirementResult} for details on what each possible return value means.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export async function checkOriginRequirement(
    origin: string | undefined,
    originRequirement: MaybeArray<OriginRequirement | undefined>,
): Promise<OriginRequirementResult> {
    if (originRequirement == undefined) {
        /** No checking occurred. */
        return undefined;
    } else if (check.isArray(originRequirement)) {
        for (const requirement of originRequirement) {
            if (await checkOriginRequirement(origin, requirement)) {
                return true;
            }
        }
        return false;
    } else if (check.isString(originRequirement)) {
        if (originRequirement === AnyOrigin) {
            return AnyOrigin;
        }
        return origin === originRequirement;
    } else if (check.instanceOf(originRequirement, RegExp)) {
        return !!origin && !!originRequirement.exec(origin);
    } else if (check.isFunction(originRequirement)) {
        return await originRequirement(origin);
    } else if (originRequirement.anyOrigin) {
        /** Any origin has been explicitly allowed. */
        return '*';
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    } else if (originRequirement.anyOriginWithCredentials) {
        return true;
    } else {
        assert.tsType(originRequirement).equals<never>();
        /** Nothing to match. */
        return false;
    }
}

/**
 * Narrower version of {@link checkOriginRequirement} that simply returns `true` if the origin
 * matched unionShape `false` otherwise.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export async function matchesOriginRequirement(
    origin: string | undefined,
    originRequirement: NonNullable<OriginRequirement>,
): Promise<boolean> {
    return !!(await checkOriginRequirement(origin, originRequirement));
}
