import {
    type ErrorHttpStatusCategories,
    type HttpStatus,
    type HttpStatusByCategory,
    type MaybePromise,
    type Values,
} from '@augment-vir/common';
import {
    EndpointResponseHeadersType,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type EndpointMethodDefinition,
    type EndpointRequestType,
    type EndpointResponseType,
    type ExtractEndpointMethodDefinitionWithNoParam,
    type NoParam,
    type RouteSearchParamsType,
} from '@rest-vir/api';
import {type SetNullishPropertiesAsOptional} from '@rest-vir/client';
import {type IncomingHttpHeaders, type OutgoingHttpHeaders, type ServerResponse} from 'node:http';
import {type ServerRequest} from './raw-route-data.js';

export function createEndpointImplementor<HostContext>() {
    return <const Endpoint extends Readonly<EndpointDefinition>>(
        endpoint: Readonly<Endpoint>,
        implementation: Readonly<EndpointImplementation<NoInfer<Endpoint>, HostContext>>,
    ): ImplementedEndpoint<Endpoint['path']> => {
        return {
            path: endpoint.path,
            implementation,
        };
    };
}

export type ImplementedEndpoint<Path extends PropertyKey> = {
    path: Path;
    implementation: EndpointImplementation;
};

/**
 * Information passed to an endpoint or WebSocket about the currently running server.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type RunningServerInfo = {
    serviceOrigin: string;
};

export type EndpointMethodImplementationParams<
    Endpoint extends Readonly<EndpointDefinition> | NoParam,
    Method extends Readonly<DefinableHttpMethod> | NoParam,
    HostContext = any,
> = {
    context: HostContext;
    method: Method;
    endpoint: Endpoint extends NoParam
        ? Readonly<EndpointDefinition>
        : Readonly<Exclude<Endpoint, NoParam>>;
    requestHeaders: IncomingHttpHeaders;
    request: ServerRequest;
    response: ServerResponse;
    requestData: EndpointRequestType<Endpoint, Method>;
    searchParams: RouteSearchParamsType<
        ExtractEndpointMethodDefinitionWithNoParam<Endpoint, Method>
    >;
    server: RunningServerInfo;
};

export type EndpointImplementation<
    Endpoint extends EndpointDefinition | NoParam = NoParam,
    HostContext = undefined,
> = Endpoint extends EndpointDefinition
    ? {
          [Method in keyof Endpoint['requests'] as Method extends DefinableHttpMethod
              ? Method
              : never]: Method extends DefinableHttpMethod
              ? (
                    params: EndpointMethodImplementationParams<Endpoint, Method, HostContext>,
                ) => MaybePromise<EndpointMethodImplementationOutput<Endpoint, Method>>
              : never;
      }
    : // todo: implement the generic version later
      any;

/**
 * The part of {@link EndpointImplementationOutput} allowed for error responses.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type EndpointImplementationErrorOutput = {
    statusCode: HttpStatusByCategory<ErrorHttpStatusCategories>;
    /**
     * An error message which will get sent to the frontend.
     *
     * DO NOT INCLUDE SENSITIVE INFORMATION IN HERE, it will be shown to the user.
     */
    responseErrorMessage?: string | undefined;
    responseData?: undefined;
    headers?: OutgoingHttpHeaders | undefined;
    dataType?: undefined;
    responseHandled?: never;
};

/**
 * Returned by an endpoint implementation that has taken full control of the response (e.g. SSE
 * streaming via `response.hijack()`). When the framework receives this, it skips response
 * validation, the post-hook, and the final `response.send()`.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type EndpointImplementationHandledOutput = {
    /** The response has been fully handled by the endpoint implementation. */
    responseHandled: true;
    statusCode?: never;
    responseData?: never;
    dataType?: never;
    headers?: never;
};

export type EndpointMethodImplementationOutput<
    Endpoint extends EndpointDefinition,
    Method extends DefinableHttpMethod,
> =
    | EndpointImplementationHandledOutput
    | Values<{
          [Status in keyof Extract<
              Endpoint['requests'][Method],
              EndpointMethodDefinition
          >['responses']]: Status extends HttpStatus
              ? SetNullishPropertiesAsOptional<{
                    statusCode: Status;
                    responseData: EndpointResponseType<Endpoint, Method, Status>;
                    headers?: EndpointResponseHeadersType<> | undefined;
                    responseHandled?: never;
                }>
              : never;
      }>;
