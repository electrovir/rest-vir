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
 * Properties shared between all route definitions (Endpoints and WebSockets). `customProps` is
 * optional and untyped. Use {@link CommonRouteDefinitionWithRequiredCustomProps} (and its
 * `EndpointDefinitionWithRequiredCustomProps` / `WebSocketDefinitionWithRequiredCustomProps`
 * descendants) when a wrapper needs to both narrow `customProps`'s type and require its presence.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type CommonRouteDefinition = {
    /** Custom props that can be attached to this route. */
    customProps?: UnknownObject | undefined;
} & BaseCommonRouteDefinition;

export type BaseCommonRouteDefinition = {
    /**
     * Search params that this route supports.
     *
     * - Omit or set to `undefined` to disable search params checking (the route will then accept
     *   arbitrary search params on the URL without validation).
     * - Set to an object to declare the search params this route expects. Each key's value picks how
     *   the search param value is parsed and validated:
     *
     *   - A `Shape` whose runtime type is a single string (e.g. `defineShape('')`): the URL must carry
     *       exactly one occurrence of the key.
     *   - A `Shape` whose runtime type is `string[]` (e.g. `defineShape([''])`): the URL must carry one
     *       or more occurrences. A single occurrence is auto-wrapped into a one-element array.
     *   - A `Shape` whose runtime type is `string | string[]`: both URL forms are accepted. The value
     *       is passed through as-is.
     *   - A single `RegExp`: the URL must carry exactly one occurrence. The value is tested against the
     *       regex.
     *   - An array of `RegExp` (e.g. `[/^\d+$/, /^[a-z]+$/]`): the URL must carry one or more
     *       occurrences. Each value must match at least one of the supplied regexes (any regex in
     *       the array may match. The position of the regex in the array is not significant).
     *
     * Whether a key is required is driven by its shape: a non-nullable shape is required, a
     * nullable shape (e.g. `nullableShape(...)`) is optional. RegExp requirements are always
     * required. See {@link RouteSearchParamsType} for the derived TypeScript type.
     */
    searchParams?: Readonly<Record<string, SearchParamRequirement>> | undefined;
    /**
     * The client origin requirement for this route. If this is `undefined` or omitted, the api's
     * overall client origin requirement is fallen back to.
     */
    clientOriginRequirement?: OriginRequirement | undefined;
};

/**
 * Variant of {@link CommonRouteDefinition} that narrows the type of `customProps` to the supplied
 * `CustomProps` generic and requires its presence. Use this from wrapper signatures that want to
 * require callers to specify a particular `customProps` shape on every method or route.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type CommonRouteDefinitionWithRequiredCustomProps<CustomProps extends UnknownObject> = {
    /** Required, narrowly-typed custom props attached to this route. */
    customProps: CustomProps;
} & BaseCommonRouteDefinition;

/**
 * Allowed runtime types for a search param. URL params are always serialized as strings on the
 * wire, so a search param shape must describe either a single string or an array of strings (or a
 * union of those for shapes that accept either form).
 *
 * `null` and `undefined` are also allowed so that `nullableShape(...)` (and other
 * undefined-permitting shapes) can be used to mark a search param as optional.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type SearchParamShapeRuntimeType = string | ReadonlyArray<string> | null | undefined;

/**
 * A `Shape` that can be assigned as a search param requirement. The shape's `runtimeType` must
 * describe either a single string, an array of strings, or a union of those.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type SearchParamShape = Shape & {runtimeType: SearchParamShapeRuntimeType};

/**
 * A single search param requirement. See {@link CommonRouteDefinition.searchParams} for the meaning
 * of each form.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type SearchParamRequirement = SearchParamShape | RegExp | ReadonlyArray<RegExp>;

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
 * Possible runtime forms for a single search param value. A param may be a single primitive, an
 * array of primitives, or `undefined`. The actual form for a declared param is chosen by its
 * {@link SearchParamRequirement}; this type is the broadest container.
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
 * Primitive values that can be supplied for a single search param occurrence. URL-builders coerce
 * these to strings before writing them into the URL; `null` and `undefined` are dropped.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type AllowedSingleSearchParamValue = Exclude<Primitive, symbol>;

/**
 * Extracts the parsed search params object type from a route's definition. Required when the search
 * param's shape is non-nullable; optional when the shape allows `undefined`.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type RouteSearchParamsType<RouteDefinition extends AnyObject | NoParam = NoParam> =
    'searchParams' extends keyof RouteDefinition
        ? IsNever<keyof RouteDefinition['searchParams']> extends true
            ? BaseSearchParams | undefined
            :
                  | (Readonly<
                        SearchParamsObjectType<Extract<RouteDefinition['searchParams'], AnyObject>>
                    > &
                        BaseSearchParams)
                  | undefined
        : BaseSearchParams | undefined;

/**
 * Builds the params object's TypeScript type from a `searchParams` requirement record. Splits the
 * keys into required (shape rejects `undefined`) and optional (shape accepts `undefined`).
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type SearchParamsObjectType<Requirements extends AnyObject> = {
    [Key in keyof Requirements as IsOptionalSearchParamRequirement<Requirements[Key]> extends true
        ? never
        : Key]: ExtractSearchParamValue<Requirements[Key]>;
} & {
    [Key in keyof Requirements as IsOptionalSearchParamRequirement<Requirements[Key]> extends true
        ? Key
        : never]?: ExtractSearchParamValue<Requirements[Key]>;
};

/**
 * `true` when a search param requirement permits `undefined` (and therefore the key may be omitted
 * from the params object), `false` otherwise.
 *
 * RegExp and RegExp-tuple requirements are always required. Shape requirements are optional only
 * when their `runtimeType` includes `undefined`.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type IsOptionalSearchParamRequirement<T> = T extends SearchParamShape
    ? undefined extends T['runtimeType']
        ? true
        : false
    : false;

/**
 * Extract the value type for a single declared search param, based on its requirement form. See
 * {@link CommonRouteDefinition.searchParams} for the meaning of each form.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type ExtractSearchParamValue<T> = T extends SearchParamShape
    ? T['runtimeType']
    : T extends RegExp
      ? string
      : T extends ReadonlyArray<RegExp>
        ? string[]
        : AllowedSearchParamValue;
