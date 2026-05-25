import {check} from '@augment-vir/assert';
import {
    HttpMethod,
    type AnyObject,
    type ArrayElement,
    type ErrorHttpStatus,
    type HttpStatus,
    type UnknownObject,
} from '@augment-vir/common';
import {type Shape} from 'object-shape-tester';
import {type IsNever, type RequireAtLeastOne} from 'type-fest';
import {type NoParam} from '../util/no-param.js';
import {
    type BaseRoutePath,
    type CommonRouteDefinition,
    type CommonRouteDefinitionWithRequiredCustomProps,
} from './route.js';

/**
 * Define a single Endpoint.
 *
 * @category Define API
 * @category Package : @rest-vir/api
 * @example
 *
 * ```ts
 * import {defineEndpoint, HttpMethod, HttpStatus} from '@rest-vir/api';
 * import {defineShape} from 'object-shape-tester';
 *
 * const usersEndpoint = defineEndpoint({
 *     path: '/users',
 *     requests: {
 *         [HttpMethod.Get]: {
 *             responses: {
 *                 [HttpStatus.Ok]: {
 *                     responseData: defineShape({
 *                         users: [''],
 *                     }),
 *                 },
 *             },
 *         },
 *     },
 * });
 * ```
 *
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function defineEndpoint<const Endpoint extends EndpointDefinition>(
    endpoint: Readonly<Endpoint>,
): Readonly<Endpoint> {
    return endpoint;
}

/**
 * An individual Endpoint definition. `customProps` (inherited from {@link CommonRouteDefinition} via
 * {@link EndpointMethodDefinition}) is optional and untyped. Use
 * {@link EndpointDefinitionWithRequiredCustomProps} when a wrapper needs to both narrow
 * `customProps`'s type and require its presence on every method.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type EndpointDefinition = {
    path: BaseRoutePath;
    requests: RequireAtLeastOne<{
        [Method in DefinableHttpMethod]: EndpointMethodDefinition<Method>;
    }>;
};

/**
 * Variant of {@link EndpointDefinition} whose every method requires a `customProps` field narrowed
 * to the supplied `CustomProps` generic. Use this from wrapper signatures like `defineMyEndpoint<E
 * extends EndpointDefinitionWithRequiredCustomProps<MyCustomProps>>(...)` to force every caller to
 * specify `customProps` with the expected shape.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type EndpointDefinitionWithRequiredCustomProps<CustomProps extends UnknownObject> = {
    path: BaseRoutePath;
    requests: RequireAtLeastOne<{
        [Method in DefinableHttpMethod]: EndpointMethodDefinitionWithRequiredCustomProps<
            Method,
            CustomProps
        >;
    }>;
};

/**
 * Extract an Endpoint definition's method definition.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type ExtractEndpointMethodDefinition<
    Endpoint extends EndpointDefinition | NoParam,
    Method extends DefinableHttpMethod | NoParam,
> = Endpoint extends EndpointDefinition
    ? Method extends DefinableHttpMethod
        ? Extract<Endpoint['requests'][Method], EndpointMethodDefinition>
        : EndpointMethodDefinition
    : EndpointMethodDefinition;

/**
 * Like {@link ExtractEndpointMethodDefinition} but instead of falling back to the generic
 * {@link EndpointMethodDefinition}, it falls back to {@link NoParam}.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type ExtractEndpointMethodDefinitionWithNoParam<
    Endpoint extends EndpointDefinition | NoParam,
    Method extends DefinableHttpMethod | NoParam,
> = Endpoint extends EndpointDefinition
    ? Method extends DefinableHttpMethod
        ? Extract<Endpoint['requests'][Method], EndpointMethodDefinition>
        : NoParam
    : NoParam;

/**
 * Extract an Endpoint definition's method definition.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function extractEndpointMethodDefinition<
    Endpoint extends EndpointDefinition,
    Method extends DefinableHttpMethod,
>(
    endpoint: Endpoint,
    method: Method,
): ExtractEndpointMethodDefinition<Endpoint, Method> | undefined {
    return endpoint.requests[method] satisfies EndpointMethodDefinition | undefined as
        | ExtractEndpointMethodDefinition<Endpoint, Method>
        | undefined;
}

/**
 * All HttpMethods that we can define requests for.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export const definableHttpMethods = [
    HttpMethod.Get,
    HttpMethod.Put,
    HttpMethod.Post,
    HttpMethod.Delete,
    HttpMethod.Patch,
    HttpMethod.Trace,
] as const;

export function extractHttpMethod(rawValue: string): DefinableHttpMethod | undefined {
    const upperCase = rawValue.toUpperCase();

    if (check.isIn(upperCase, definableHttpMethods)) {
        return upperCase;
    } else {
        return undefined;
    }
}

/**
 * A union of all HttpMethods that we can define requests for.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type DefinableHttpMethod = ArrayElement<typeof definableHttpMethods>;

/**
 * All HttpMethods that allow request bodies.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export const httpMethodsWithBodies = [
    HttpMethod.Post,
    HttpMethod.Put,
    HttpMethod.Patch,
    HttpMethod.Delete,
] as const;

/**
 * A union of all HttpMethods that allow request bodies.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type HttpMethodsWithBodies = ArrayElement<typeof httpMethodsWithBodies>;

/**
 * The definition of a single HTTP method on an Endpoint, including its request and response
 * expectations plus the shared route properties from {@link CommonRouteDefinition}.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type EndpointMethodDefinition<Method extends DefinableHttpMethod = DefinableHttpMethod> =
    BaseEndpointMethodDefinition<Method> & CommonRouteDefinition;

export type BaseEndpointMethodDefinition<Method extends DefinableHttpMethod = DefinableHttpMethod> =
    {
        /**
         * - Omit to disable checking entirely.
         * - Set to `undefined` to require no request data.
         * - Set to a shape to enforce JSON shape validation.
         *
         * This is ignored entirely for http methods that do not allow request bodies.
         */
        requestData?: Method extends HttpMethodsWithBodies ? Shape | undefined : never;
        responses: ResponseDefinitions;
        /**
         * Headers that are required to be sent with requests to this endpoint.
         *
         * - Omit or set to `undefined` to disable required headers (assigning arbitrary headers is
         *   still allowed).
         * - Set to an object to enforce headers for the given keys.
         *
         *   - Set a key's value to a shape shape to enforce shape validation on that header's value.
         *   - Set a key's value to a `RegExp` to require each stringified value to match the given
         *       `RegExp`.
         *
         * Note that header values are always converted to strings.
         */
        requiredRequestHeaders?: Record<string, Shape | RegExp> | undefined;
    };

/**
 * Variant of {@link EndpointMethodDefinition} whose `customProps` field is required and narrowed to
 * the supplied `CustomProps` generic. Composes with
 * {@link EndpointDefinitionWithRequiredCustomProps} to enforce `customProps` presence at every
 * method slot.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type EndpointMethodDefinitionWithRequiredCustomProps<
    Method extends DefinableHttpMethod,
    CustomProps extends UnknownObject,
> = BaseEndpointMethodDefinition<Method> &
    CommonRouteDefinitionWithRequiredCustomProps<CustomProps>;

/**
 * Optionally provide explicit response body data for specific response status. Any HttpStatus
 * response not defined has a default body type depending on its status class:
 *
 * - Error HTTP statuses: string (allowing error messages) | undefined (no body)
 * - Success HTTP statuses: undefined (no body)
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type ResponseDefinitions = RequireAtLeastOne<Record<HttpStatus, ResponseStatusDefinition>>;

/**
 * The definition of an individual response status's output information.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type ResponseStatusDefinition = {
    responseData: Shape | undefined;
    requiredResponseHeaders?: BaseRequiredResponseHeaders | undefined;
};

/**
 * Base, not undefined, required headers type.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type BaseRequiredResponseHeaders = Record<string, Shape | RegExp>;

/**
 * Extracts an endpoint's request type.
 *
 * @category Define API
 * @category Package : @rest-vir/api
 * @example
 *
 * ```ts
 * import {defineEndpoint, HttpMethod, type EndpointRequestType} from '@rest-vir/api';
 * import {defineShape} from 'object-shape-tester';
 *
 * const usersEndpoint = defineEndpoint({
 *     path: '/users',
 *     requests: {
 *         [HttpMethod.Post]: {
 *             requestData: defineShape({name: ''}),
 *             responses: {},
 *         },
 *     },
 * });
 *
 * type CreateUserRequest = EndpointRequestType<typeof usersEndpoint.requests, HttpMethod.Post>;
 * ```
 *
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type EndpointRequestType<
    Endpoint extends EndpointDefinition | NoParam,
    Method extends DefinableHttpMethod | NoParam,
> = Endpoint extends EndpointDefinition
    ? Method extends keyof Endpoint['requests']
        ? Endpoint['requests'][Method] extends EndpointMethodDefinition
            ? Endpoint['requests'][Method]['requestData'] extends Shape
                ? Endpoint['requests'][Method]['requestData']['runtimeType']
                : undefined
            : any
        : any
    : any;
/**
 * Extracts an endpoint's response type.
 *
 * @category Define API
 * @category Package : @rest-vir/api
 * @example
 *
 * ```ts
 * import {
 *     defineEndpoint,
 *     HttpMethod,
 *     HttpStatus,
 *     type EndpointResponseType,
 * } from '@rest-vir/api';
 * import {defineShape} from 'object-shape-tester';
 *
 * const usersEndpoint = defineEndpoint({
 *     path: '/users',
 *     requests: {
 *         [HttpMethod.Get]: {
 *             responses: {
 *                 [HttpStatus.Ok]: {
 *                     responseData: defineShape({users: [{id: ''}]}),
 *                 },
 *             },
 *         },
 *     },
 * });
 *
 * type OkResponse = EndpointResponseType<
 *     (typeof usersEndpoint.requests)[HttpMethod.Get],
 *     HttpStatus.Ok
 * >;
 * ```
 *
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type EndpointResponseType<
    Endpoint extends EndpointDefinition | NoParam,
    Method extends DefinableHttpMethod | NoParam,
    Status extends HttpStatus | NoParam,
> = Endpoint extends EndpointDefinition
    ? Method extends DefinableHttpMethod
        ? Status extends HttpStatus
            ? NonNullable<
                  NonNullable<
                      Extract<Endpoint['requests'][Method], EndpointMethodDefinition>['responses']
                  >[Status]
              >['responseData'] extends infer ResponseDataShape extends Shape
                ? ResponseDataShape['runtimeType']
                : DefaultResponseType<Status>
            : unknown
        : unknown
    : unknown;

/**
 * The default response type for any status, used when a status response is not explicitly defined
 * for the endpoint.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type DefaultResponseType<Status extends HttpStatus> = Status extends ErrorHttpStatus
    ? DefaultErrorResponseType
    : unknown;

/**
 * The default response type for any error status.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type DefaultErrorResponseType = undefined | string;

/**
 * Extract an endpoint's response headers type, including required response headers (if any).
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type EndpointResponseHeadersType<
    Endpoint extends EndpointDefinition | NoParam = NoParam,
    Method extends DefinableHttpMethod | NoParam = NoParam,
    Status extends HttpStatus | NoParam = NoParam,
> = NonNullable<
    NonNullable<
        Extract<
            Extract<Endpoint, EndpointDefinition>['requests'][Extract<Method, DefinableHttpMethod>],
            EndpointMethodDefinition
        >['responses']
    >[Extract<Status, HttpStatus>]
>['requiredResponseHeaders'] extends infer RequiredHeaders extends BaseRequiredResponseHeaders
    ? IsNever<RequiredHeaders> extends true
        ? DefaultResponseHeadersType
        : {
              [HeaderKey in keyof RequiredHeaders]: ExtractRequiredHeaderValue<
                  RequiredHeaders[HeaderKey]
              >;
          } & DefaultResponseHeadersType
    : DefaultResponseHeadersType;

/**
 * Like {@link EndpointResponseHeadersType} but for the write side: any non-required header may be
 * either a single string or an array of strings. Used in implementation-output positions so
 * endpoints can emit multi-valued headers (most notably `Set-Cookie`).
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type EndpointResponseOutgoingHeadersType<
    Endpoint extends EndpointDefinition | NoParam = NoParam,
    Method extends DefinableHttpMethod | NoParam = NoParam,
    Status extends HttpStatus | NoParam = NoParam,
> = NonNullable<
    NonNullable<
        Extract<
            Extract<Endpoint, EndpointDefinition>['requests'][Extract<Method, DefinableHttpMethod>],
            EndpointMethodDefinition
        >['responses']
    >[Extract<Status, HttpStatus>]
>['requiredResponseHeaders'] extends infer RequiredHeaders extends BaseRequiredResponseHeaders
    ? IsNever<RequiredHeaders> extends true
        ? DefaultOutgoingResponseHeadersType
        : {
              [HeaderKey in keyof RequiredHeaders]: ExtractRequiredHeaderValue<
                  RequiredHeaders[HeaderKey]
              >;
          } & DefaultOutgoingResponseHeadersType
    : DefaultOutgoingResponseHeadersType;

/**
 * Default response headers type for the read side (fetched response). Header values are always
 * strings here because browser/Node fetch APIs join multi-valued headers when read via
 * `Headers.get()` / `Headers.entries()`.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type DefaultResponseHeadersType = Record<string, string>;

/**
 * Default response headers type for the write side (the value returned from an endpoint
 * implementation). Allows array values so endpoints can emit multi-valued headers (most notably
 * `Set-Cookie`), which must be written as separate header lines on the wire rather than
 * comma-joined.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type DefaultOutgoingResponseHeadersType = Record<
    string,
    string | number | ReadonlyArray<string> | undefined
>;

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
export type EndpointRequestHeadersType<
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
