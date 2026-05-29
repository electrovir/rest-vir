import {check} from '@augment-vir/assert';
import {addPrefix, type PartialWithUndefined} from '@augment-vir/common';
import {type HasRequiredKeys, type IsEqual, type IsNever} from 'type-fest';
import {type NoParam} from '../util/no-param.js';
import {type BaseRoutePath} from './route.js';

export type RoutePathDefinition<Path extends BaseRoutePath = BaseRoutePath> = Readonly<{
    path: Path;
}>;

/**
 * Extracts all named path parameters from an endpoint path.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
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
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
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
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
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
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
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
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
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

export type BuildRoutePathOptions<Path extends BaseRoutePath = BaseRoutePath> = (
    undefined extends ExtractPathParams<NoInfer<Path>>
        ? Readonly<{
              pathParams?: ExtractPathParams<NoInfer<Path>> | undefined;
          }>
        : Readonly<{
              pathParams: ExtractPathParams<NoInfer<Path>>;
          }>
) extends infer Merged
    ? {
          readonly [Key in keyof Merged]: Merged[Key];
      }
    : never;

export type BuildRoutePathParams<Path extends BaseRoutePath = BaseRoutePath> =
    HasRequiredKeys<BuildRoutePathOptions<Path>> extends true
        ? [Readonly<BuildRoutePathOptions<Path>>]
        : [Readonly<BuildRoutePathOptions<Path>>?];

/**
 * Converts an endpoint path into the fetch params needed for its to operate.
 *
 * Fast-paths simple paths (no `:` or `/*`) to avoid recursive template literal parsing.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type ExtractPathParams<Path extends PropertyKey | NoParam = NoParam> =
    Path extends BaseRoutePath
        ? Path extends `${string}:${string}` | `${string}/*`
            ? ResolveWildcard<HasWildcardParam<Path>> & ResolveNamedParams<NamedPathParams<Path>>
            : /**
               * The generic-pattern fallback for `Path = `/${string}`` (i.e. the wide `BaseRoutePath` form, used
               * when the api definition is type-erased into `EndpointDefinition`). Unions in `undefined` so that
               * narrow forms with no params (which resolve to bare `undefined`) remain structurally assignable
               * into the wide form. Without this `| undefined`, every narrow `EndpointImplementation` would fail
               * the variance check when assigned into a wide `EndpointImplementation<EndpointDefinition>` slot.
               * Concrete narrow forms keep their strict object types so consumers reading `pathParams.userId` on
               * a `/users/:userId` route do not have to null-check.
               */
              IsEqual<`/${string}`, Path> extends true
              ?
                    | (ResolveWildcard<HasWildcardParam<Path>> &
                          ResolveNamedParams<NamedPathParams<Path>>)
                    | undefined
              : /** Fast path: concrete literal with no `:param` or `/*` segments. */
                undefined
        : GenericPathParams;

/**
 * Builds the path portion of an endpoint or WebSocket URL by interpolating `:named` path params and
 * trailing wildcard params.
 *
 * @category Client
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function buildRoutePath<const Path extends BaseRoutePath>(
    route: RoutePathDefinition<Path>,
    ...restOptions: BuildRoutePathParams<NoInfer<Path>>
): string;
export function buildRoutePath(
    route: RoutePathDefinition,
    ...restOptions: [
        Readonly<{
            pathParams?: unknown;
        }>?,
    ]
) {
    const genericPathParams: GenericPathParams = restOptions[0]?.pathParams as GenericPathParams;
    let pathParamsCount = 0;

    const pathname = route.path
        .replaceAll(/\/:([^/]+)/g, (wholeMatch: string, paramName: string): string => {
            pathParamsCount++;
            if (
                genericPathParams &&
                check.hasKey(genericPathParams, paramName) &&
                genericPathParams[paramName]
            ) {
                return addPrefix({
                    value: genericPathParams[paramName],
                    prefix: '/',
                });
            } else {
                throw new Error(`Missing value for path param '${paramName}'.`);
            }
        })
        .replace(/\/\*$/, () => {
            pathParamsCount++;
            if (genericPathParams?.wildcard == undefined) {
                throw new Error('Missing value for wildcard param.');
            }
            return addPrefix({
                value: genericPathParams.wildcard,
                prefix: '/',
            });
        });

    if (!pathParamsCount && genericPathParams) {
        throw new Error(`Route '${route.path}' does not allow any path params but some were set.`);
    }

    return pathname;
}
