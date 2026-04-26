import {type AnyObject, type UnknownObject} from '@augment-vir/common';
import {type Shape} from 'object-shape-tester';
import {type IsNever, type Primitive} from 'type-fest';
import {type NoParam} from '../util/no-param.js';
import {type OriginRequirement} from './origin-requirement.js';

/**
 * Base requirement for endpoint paths.
 *
 * Note that this whole thing should be lowercase. Technically, we should use `Lowercase<string>`
 * because of that. However, that makes the type requirements way too strict and hard to deal with.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type BaseRoutePath = `/${string}` | '/';

/**
 * Properties shared between all route definitions (Endpoints and WebSockets).
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type CommonRouteDefinition = {
    /**
     * Search params that this route supports.
     *
     * - Omit or set to `undefined` to disable search params checking (assigning arbitrary search
     *   params is still allowed).
     * - Set to an object to enforce search param value checking for the given keys.
     *
     *   - Set a key's value to a shape shape to enforce shape validation on that search param's value.
     *   - Set a key's value to a `RegExp` to allow only string values that must match the given
     *       `RegExp`.
     *
     * Note that search params are always read as strings (or arrays of strings), so only string
     * values can be assigned and read from each search param. Each search param key is always
     * optional.
     */
    searchParams?: Record<string, Shape | RegExp> | undefined;
    /** Custom props that can be attached to this route. */
    customProps?: UnknownObject | undefined;
    /**
     * Headers that are required to be sent with this route.
     *
     * - Omit or set to `undefined` to disable required headers (assigning arbitrary headers is still
     *   allowed).
     * - Set to an object to enforce headers for the given keys.
     *
     *   - Set a key's value to a shape shape to enforce shape validation on that header's value.
     *   - Set a key's value to a `RegExp` to require each stringified value to match the given
     *       `RegExp`.
     *
     * Note that headers are always converted to strings.
     */
    requiredRequestHeaders?: Record<string, Shape | RegExp> | undefined;
    /**
     * The client origin requirement for this route. If this is `undefined` or omitted, the api's
     * overall client origin requirement is fallen back to.
     */
    clientOrigin?: OriginRequirement | undefined;
};

/**
 * The base, generic type for a parsed search params object, extracted from a request URL. If there
 * are no search params, this will be an empty object.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type BaseSearchParams = Readonly<Record<string, AllowedSearchParamValue>>;

/**
 * Set to `undefined` to omit the search param.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type AllowedSearchParamValue =
    | AllowedSingleSearchParamValue
    | AllowedSingleSearchParamValue[]
    | ReadonlyArray<AllowedSingleSearchParamValue>;

/**
 * Allowed single value types for search param values. `null` and `undefined` values will be
 * removed.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type AllowedSingleSearchParamValue = Exclude<Primitive, symbol>;

/**
 * Extracts the parsed search params object type from a route's definition.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type RouteSearchParamsType<RouteDefinition extends AnyObject | NoParam = NoParam> =
    'searchParams' extends keyof RouteDefinition
        ? IsNever<keyof RouteDefinition['searchParams']> extends true
            ? BaseSearchParams | undefined
            : Partial<{
                  [SearchParamKey in keyof RouteDefinition['searchParams']]: ExtractSearchParamValue<
                      Extract<RouteDefinition['searchParams'], AnyObject>[SearchParamKey]
                  >;
              }> &
                  BaseSearchParams
        : BaseSearchParams | undefined;

/**
 * Extract an expected search param value.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type ExtractSearchParamValue<T extends Shape | RegExp> = T extends Shape
    ? Extract<T['runtimeType'], AllowedSearchParamValue>
    : AllowedSearchParamValue;

/**
 * Extract an expected required header value.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type ExtractRequiredHeaderValue<T extends Shape | RegExp> = T extends Shape
    ? Extract<T['runtimeType'], string>
    : string;

/**
 * Extract a route's request headers type, including required request headers (if any).
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type ExtractRequestHeadersType<
    RouteDefinition extends CommonRouteDefinition | NoParam = NoParam,
> = RouteDefinition extends NoParam
    ? Record<string, string> | undefined
    : 'requiredRequestHeaders' extends keyof RouteDefinition
      ? IsNever<keyof RouteDefinition['requiredRequestHeaders']> extends true
          ? undefined
          : Partial<{
                [HeaderKey in keyof RouteDefinition['requiredRequestHeaders']]: ExtractRequiredHeaderValue<
                    Extract<RouteDefinition['requiredRequestHeaders'], AnyObject>[HeaderKey]
                >;
            }>
      : undefined;
