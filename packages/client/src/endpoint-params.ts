import {type AnyObject} from '@augment-vir/common';
import {
    ApiInit,
    type EndpointMethodDefinition,
    type EndpointRequestType,
    type ExtractRequiredRequestHeadersType,
    type NoParam,
    type RouteSearchParamsType,
    type HttpMethod,
} from '@rest-vir/api';
import {type HasRequiredKeys, type IsAny} from 'type-fest';
import {type ExtractPathParams} from './path-params.js';

export type ExtractEndpointMethodDefinition<Path extends PropertyKey, Method extends HttpMethod, Api extends ApiInit> = Path extends keyof Api['endpoints'] ? 

/**
 * Used to define a function's rest params. The params object is only required if it has any
 * required keys.
 *
 * @category Internal
 */
export type EndpointParams<
    Path extends PropertyKey,
    EndpointMethod extends EndpointMethodDefinition,
> =
    HasRequiredKeys<EndpointParamObject<Path, EndpointMethod>> extends true
        ? [EndpointParamObject<Path, EndpointMethod>]
        : [EndpointParamObject<Path, EndpointMethod>?];

/**
 * An client params object for calling an endpoint. Only the params that have required options to
 * set are required, the rest are optional. Pass `NoParam` for a completely generic param object
 * that all param objects should be assignable to, with all properties being optional.
 *
 * @category Internal
 */
export type EndpointParamObject<
    Path extends PropertyKey | NoParam = NoParam,
    EndpointMethod extends EndpointMethodDefinition | NoParam = NoParam,
> = SetNullishPropertiesAsOptional<{
    /** Set the endpoint fetch's request data, if allowed by the endpoint. */
    requestData: EndpointRequestType<EndpointMethod>;
    /** Set search params on the endpoint's URL. */
    searchParams: RouteSearchParamsType<EndpointMethod>;
    /** Set the standard request init options that `fetch` allows. */
    options: Omit<RequestInit, 'body' | 'method'> | undefined;
    /**
     * Override the `fetch` function that is used when fetching the endpoint.
     *
     * @default fetch // the global fetch
     */
    fetchOverride: typeof fetch | undefined;
    /** If `true`, automatic request data `'Content-Type'` header assignment will be skipped. */
    skipAutomaticContentTypeHeader: boolean | undefined;
    /**
     * Set headers that are _required_ by this route's definition, if any. Note that additional
     * headers can be supplied in the `options` property, but any headers provided in both will
     * instead use the values from here here (in `requiredHeaders`).
     */
    requiredHeaders: ExtractRequiredRequestHeadersType<EndpointMethod>;
    /**
     * Set the required path params, if any. These are only allowed if the endpoint's path has param
     * or wildcard strings.
     */
    pathParams: ExtractPathParams<Path>;
}>;

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
