import {
    type AnyObject,
    type BivariantFunction,
    type ErrorHttpStatus,
    type HttpStatus,
    type MaybePromise,
} from '@augment-vir/common';
import {type RequireExactlyOne} from 'type-fest';
import {
    type DefaultErrorResponseType,
    type DefaultOutgoingResponseHeadersType,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type EndpointMethodDefinition,
    type EndpointRequestType,
    type EndpointResponseOutgoingHeadersType,
    type EndpointResponseType,
    type ExtractEndpointMethodDefinitionWithNoParam,
} from '../api/endpoint.js';
import {type ExtractPathParams} from '../api/path-params.js';
import {type BaseRoutePath, type RouteSearchParamsType} from '../api/route.js';
import {type SetNullishPropertiesAsOptional} from '../augments/object.js';
import {type NoParam} from '../util/no-param.js';

/**
 * The portion of an endpoint method implementation's parameters that is independent of the runtime
 * environment. Both host (server) implementations and client (mock) implementations include these
 * fields; each side adds its own environment-specific extras on top via
 * {@link EndpointMethodImplementationsBase}.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type BaseEndpointMethodImplementationParams<
    Endpoint extends Readonly<EndpointDefinition> | NoParam = NoParam,
    Method extends Readonly<DefinableHttpMethod> | NoParam = NoParam,
    Context = unknown,
> = {
    context: Context;
    method: Method extends DefinableHttpMethod ? Method : DefinableHttpMethod;
    endpointDefinition: Endpoint extends EndpointDefinition
        ? Readonly<Exclude<Endpoint, NoParam>>
        : Readonly<EndpointDefinition>;
    requestHeaders: Readonly<Record<string, string | string[] | undefined>>;
    requestData: EndpointRequestType<Endpoint, Method>;
    searchParams: RouteSearchParamsType<
        ExtractEndpointMethodDefinitionWithNoParam<Endpoint, Method>
    >;
    pathParams: Endpoint extends EndpointDefinition
        ? ExtractPathParams<Endpoint['path']>
        : ExtractPathParams;
};

/**
 * Output for a single defined status response on an endpoint method.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type EndpointImplementationStatusOutput<
    Endpoint extends EndpointDefinition | NoParam = NoParam,
    Method extends DefinableHttpMethod | NoParam = NoParam,
    Status extends HttpStatus | NoParam = NoParam,
> = SetNullishPropertiesAsOptional<{
    responseData: EndpointResponseType<Endpoint, Method, Status>;
    headers?: EndpointResponseOutgoingHeadersType<Endpoint, Method, Status> | undefined;
}>;

/**
 * Mapping of declared statuses to their {@link EndpointImplementationStatusOutput}s for a given
 * endpoint method.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type EndpointMethodDefinedStatusOutputs<
    Endpoint extends EndpointDefinition | NoParam = NoParam,
    Method extends DefinableHttpMethod | NoParam = NoParam,
> = Endpoint extends EndpointDefinition
    ? Method extends DefinableHttpMethod
        ? {
              [Status in keyof Extract<
                  Endpoint['requests'][Method],
                  EndpointMethodDefinition
              >['responses']]: Status extends HttpStatus
                  ? EndpointImplementationStatusOutput<Endpoint, Method, Status>
                  : never;
          }
        : DefaultEndpointMethodStatusOutputs
    : DefaultEndpointMethodStatusOutputs;

/**
 * Fallback for an endpoint method's status outputs when the endpoint definition isn't narrowed.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type DefaultEndpointMethodStatusOutputs = Partial<
    Record<HttpStatus, EndpointImplementationStatusOutput>
>;

/**
 * The output an endpoint method implementation must return. Either:
 *
 * - Exactly one declared success/error status (with its response data and optional headers),
 * - Exactly one undeclared error status (string body),
 * - Or `{responseHandled: true}` to indicate the implementation already wrote the response (e.g. SSE
 *   streaming or a hijacked raw response).
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @example
 *
 * ```ts
 * // Server-Sent Events: hijack the response, write the stream directly, return
 * // {responseHandled: true} so rest-vir leaves it alone.
 * [HttpMethod.Get]({response}) {
 *     response.hijack();
 *     response.raw.writeHead(HttpStatus.Ok, {
 *         'content-type': 'text/event-stream',
 *         'cache-control': 'no-cache',
 *         'x-no-compression': 'true',
 *     });
 *     response.raw.write(`data: hello\n\n`);
 *     response.raw.end();
 *     return {responseHandled: true};
 * }
 * ```
 *
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type EndpointMethodImplementationOutput<
    Endpoint extends EndpointDefinition | NoParam = NoParam,
    Method extends DefinableHttpMethod | NoParam = NoParam,
> =
    EndpointMethodDefinedStatusOutputs<Endpoint, Method> extends infer DefinedStatuses extends
        AnyObject
        ? RequireExactlyOne<
              DefinedStatuses &
                  Record<
                      Exclude<ErrorHttpStatus, keyof DefinedStatuses>,
                      {
                          responseData: DefaultErrorResponseType;
                          headers?: DefaultOutgoingResponseHeadersType | undefined;
                      }
                  > & {
                      [Status in Exclude<
                          ErrorHttpStatus,
                          keyof DefinedStatuses
                      >]: SetNullishPropertiesAsOptional<{
                          responseData: EndpointResponseType<Endpoint, Method, Status>;
                          headers?:
                              | EndpointResponseOutgoingHeadersType<Endpoint, Method, Status>
                              | undefined;
                      }>;
                  } & {responseHandled: true}
          >
        : never;

/**
 * A generic type just for error responses.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @example
 *
 * ```ts
 * function unauthorized(): EndpointMethodImplementationErrorOutput<
 *     typeof myEndpoint,
 *     HttpMethod.Get
 * > {
 *     return {[HttpStatus.Unauthorized]: {responseData: undefined}};
 * }
 * ```
 *
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type EndpointMethodImplementationErrorOutput = RequireExactlyOne<{
    [Status in ErrorHttpStatus]: {
        responseData: DefaultErrorResponseType;
        headers?: DefaultOutgoingResponseHeadersType | undefined;
    };
}>;

/**
 * Generic implementation record for an endpoint's methods. Both host and client (mock) reuse this
 * by supplying their own `ExtraParams` (the environment-specific parameters layered onto the shared
 * {@link BaseEndpointMethodImplementationParams}).
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type EndpointMethodImplementationsBase<
    Endpoint extends EndpointDefinition | NoParam = NoParam,
    Context = unknown,
    ExtraParams = unknown,
> = Endpoint extends EndpointDefinition
    ? {
          [Method in keyof Endpoint['requests'] as Method extends DefinableHttpMethod
              ? Method
              : never]: Method extends DefinableHttpMethod
              ? BivariantFunction<
                    [
                        BaseEndpointMethodImplementationParams<Endpoint, Method, Context> &
                            ExtraParams,
                    ],
                    MaybePromise<EndpointMethodImplementationOutput<Endpoint, Method>>
                >
              : never;
      }
    : Partial<
          Record<
              DefinableHttpMethod,
              BivariantFunction<
                  [BaseEndpointMethodImplementationParams & ExtraParams],
                  MaybePromise<EndpointMethodImplementationOutput>
              >
          >
      >;

/**
 * Generic implementation envelope for a single endpoint. Host and client (mock) reuse this by
 * supplying their own `ExtraParams`.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type EndpointImplementationBase<
    Endpoint extends Readonly<EndpointDefinition> | NoParam = NoParam,
    Context = unknown,
    ExtraParams = unknown,
> = {
    path: Endpoint extends EndpointDefinition ? Endpoint['path'] : BaseRoutePath;
    implementation: Readonly<EndpointMethodImplementationsBase<Endpoint, Context, ExtraParams>>;
    definition: Endpoint extends EndpointDefinition
        ? Readonly<Endpoint>
        : Readonly<EndpointDefinition>;
    isWebSocket: false;
    isEndpoint: true;
};
