import {type AnyObject} from '@augment-vir/common';
import {
    type DefinableHttpMethod,
    type EndpointDefinition,
    type EndpointRequestType,
    type ExcludeNoParamWithFallback,
    type ExtractEndpointMethodDefinition,
    type ExtractRequestHeadersType,
    type NoParam,
    type RouteSearchParamsType,
} from '@rest-vir/api';
import {type HasRequiredKeys, type IsAny} from 'type-fest';
import {type ExtractPathParams} from './path-params.js';

/**
 * Used to define a function's rest params. The params object is only required if it has any
 * required keys.
 *
 * @category Internal
 */
export type EndpointParams<
    Endpoint extends EndpointDefinition,
    Method extends DefinableHttpMethod,
> =
    HasRequiredKeys<EndpointParamObject<Endpoint, Method>> extends true
        ? [EndpointParamObject<Endpoint, Method>]
        : [EndpointParamObject<Endpoint, Method>?];

/**
 * An client params object for calling an endpoint. Only the params that have required options to
 * set are required, the rest are optional. Pass `NoParam` for a completely generic param object
 * that all param objects should be assignable to, with all properties being optional.
 *
 * @category Internal
 */
export type EndpointParamObject<
    Endpoint extends EndpointDefinition | NoParam = NoParam,
    Method extends DefinableHttpMethod | NoParam = NoParam,
> = SetNullishPropertiesAsOptional<{
    /** Set the endpoint fetch's request data, if allowed by the endpoint. */
    requestData: EndpointRequestType<ExtractEndpointMethodDefinition<Endpoint, Method>>;
    /** Set search params on the endpoint's URL. */
    searchParams: RouteSearchParamsType<ExtractEndpointMethodDefinition<Endpoint, Method>>;
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
    requiredHeaders: ExtractRequestHeadersType<ExtractEndpointMethodDefinition<Endpoint, Method>>;
    /**
     * Set the required path params, if any. These are only allowed if the endpoint's path has param
     * or wildcard strings.
     */
    pathParams: ExtractPathParams<ExcludeNoParamWithFallback<Endpoint, EndpointDefinition>['path']>;
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
