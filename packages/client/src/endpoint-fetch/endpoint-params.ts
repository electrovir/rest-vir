import {type MaybePromise} from '@augment-vir/common';
import {
    type DefinableHttpMethod,
    type EndpointDefinition,
    type EndpointRequestHeadersType,
    type EndpointRequestType,
    type ExtractEndpointMethodDefinition,
    type ExtractEndpointMethodDefinitionWithNoParam,
    type NoParam,
    type RouteSearchParamsType,
    type SetNullishPropertiesAsOptional,
} from '@rest-vir/api';
import {type HasRequiredKeys} from 'type-fest';
import {type ExtractPathParams} from '../path-params.js';

/**
 * Used to define a function's rest params. The params object is only required if it has any
 * required keys.
 *
 * @category Internal
 */
export type EndpointFetchParams<
    Endpoint extends EndpointDefinition,
    Method extends DefinableHttpMethod,
> =
    HasRequiredKeys<EndpointFetchParamObject<Endpoint, Method>> extends true
        ? [EndpointFetchParamObject<Endpoint, Method>]
        : [EndpointFetchParamObject<Endpoint, Method>?];

/**
 * An client params object for calling an endpoint. Only the params that have required options to
 * set are required, the rest are optional. Pass `NoParam` for a completely generic param object
 * that all param objects should be assignable to, with all properties being optional.
 *
 * @category Internal
 */
export type EndpointFetchParamObject<
    Endpoint extends EndpointDefinition | NoParam = NoParam,
    Method extends DefinableHttpMethod | NoParam = NoParam,
> = SetNullishPropertiesAsOptional<{
    /** Set the endpoint fetch's request data, if allowed by the endpoint. */
    requestData: EndpointRequestType<Endpoint, Method>;
    /** Set search params on the endpoint's URL. */
    searchParams: RouteSearchParamsType<ExtractEndpointMethodDefinition<Endpoint, Method>>;
    /** Set the standard request init options that `fetch` allows. */
    options: Omit<RequestInit, 'body' | 'method'> | undefined;
    /**
     * Override the `fetch` function that is used when fetching the endpoint.
     *
     * @default fetch // the global fetch
     */
    fetchOverride: ClientFetch | undefined;
    /** If `true`, automatic request data `'Content-Type'` header assignment will be skipped. */
    skipAutomaticContentTypeHeader: boolean | undefined;
    /**
     * Set headers that are _required_ by this route's definition, if any. Note that additional
     * headers can be supplied in the `options` property, but any headers provided in both will
     * instead use the values from here here (in `requiredHeaders`).
     */
    requiredHeaders: EndpointRequestHeadersType<
        ExtractEndpointMethodDefinitionWithNoParam<Endpoint, Method>
    >;
    /**
     * Set the required path params, if any. These are only allowed if the endpoint's path has param
     * or wildcard strings.
     */
    pathParams: ExtractPathParams<Endpoint extends {path: string} ? Endpoint['path'] : NoParam>;
}>;

export type ClientFetch = (
    url: string,
    requestInit: RequestInit,
    endpoint: EndpointDefinition,
) => MaybePromise<Response>;
