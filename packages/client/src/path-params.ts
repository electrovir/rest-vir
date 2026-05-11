import {type PartialWithUndefined} from '@augment-vir/common';
import {type BaseRoutePath, type NoParam} from '@rest-vir/api';
import {type IsEqual, type IsNever} from 'type-fest';

/**
 * Extracts all named path parameters from an endpoint path.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type NamedPathParams<EndpointPath extends string> = string extends EndpointPath
    ? string
    : EndpointPath extends `${string}:${infer Param}/${infer Rest}`
      ? Param | NamedPathParams<`/${Rest}`>
      : EndpointPath extends `${string}:${infer Param}`
        ? Param
        : IsEqual<`/${string}`, EndpointPath> extends true
          ? string
          : never;

/**
 * Determines if the given endpoint path has a trailing wildcard.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type HasWildcardParam<EndpointPath extends string> = string extends EndpointPath
    ? boolean
    : EndpointPath extends `${string}/*`
      ? true
      : IsEqual<`/${string}`, EndpointPath> extends true
        ? boolean
        : false;

/**
 * Extracts named and wildcard path params.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type PathParams<EndpointPath extends string> = {
    namedParams: NamedPathParams<EndpointPath>;
    hasWildcard: HasWildcardParam<EndpointPath>;
};

/**
 * Resolves the wildcard portion of path params. Extracted to avoid re-evaluating `HasWildcardParam`
 * multiple times inside {@link ExtractPathParams}.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type ResolveWildcard<HasWildcard extends boolean> = [HasWildcard] extends [true]
    ? Readonly<{
          wildcard: string;
      }>
    : [HasWildcard] extends [false]
      ? Readonly<{
            wildcard?: undefined;
        }>
      : Readonly<{
            wildcard?: string | undefined;
        }>;

/**
 * Resolves the named-param portion of path params as a flat record of `{name: string}` entries.
 * Extracted to avoid re-evaluating `NamedPathParams` multiple times inside
 * {@link ExtractPathParams}.
 *
 * Tuple wrapping (`[Named] extends [string]`) prevents distributive conditional behavior so that a
 * union like `'a' | 'b'` produces a single `Record<'a' | 'b', string>` instead of `Record<'a',
 * string> | Record<'b', string>`.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type ResolveNamedParams<Named extends string> =
    IsNever<Named> extends true
        ? unknown
        : [Named] extends [string]
          ? Readonly<Record<Named, string>>
          : unknown;

/**
 * Generic path params.
 *
 * @category Internal
 */
export type GenericPathParams =
    | (PartialWithUndefined<{
          wildcard: string;
      }> &
          Record<string, string | undefined>)
    | undefined;

/**
 * Converts an endpoint path into the fetch params needed for its to operate.
 *
 * Fast-paths simple paths (no `:` or `/*`) to avoid recursive template literal parsing.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type ExtractPathParams<Path extends PropertyKey | NoParam = NoParam> =
    Path extends BaseRoutePath
        ? Path extends `${string}:${string}` | `${string}/*`
            ? ResolveWildcard<HasWildcardParam<Path>> & ResolveNamedParams<NamedPathParams<Path>>
            : /**
               * Guard against generic pattern types like `/${string}` which don't match the literal param
               * patterns above but still need full evaluation.
               */
              IsEqual<`/${string}`, Path> extends true
              ? ResolveWildcard<HasWildcardParam<Path>> & ResolveNamedParams<NamedPathParams<Path>>
              : /** Fast path: concrete literal with no `:param` or `/*` segments. */
                undefined
        : GenericPathParams;
