import {
    type AnyObject,
    type ErrorHttpStatus,
    type HttpStatus,
    type MaybePromise,
} from '@augment-vir/common';
import {
    type DefaultErrorResponseType,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type EndpointMethodDefinition,
    type EndpointRequestType,
    type EndpointResponseHeadersType,
    type EndpointResponseType,
    type ExtractEndpointMethodDefinitionWithNoParam,
    type NoParam,
    type RouteSearchParamsType,
} from '@rest-vir/api';
import {type SetNullishPropertiesAsOptional} from '@rest-vir/client';
import {type IncomingHttpHeaders, type ServerResponse} from 'node:http';
import {type RequireExactlyOne} from 'type-fest';
import {type DefaultResponseHeadersType} from '../../../api/src/endpoint.js';
import {type ServerRequest} from './raw-route-data.js';

export function createEndpointImplementor<HostContext>(this: void) {
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

export type EndpointMethodDefinedStatusOutputs<
    Endpoint extends EndpointDefinition,
    Method extends DefinableHttpMethod,
> = {
    [Status in keyof Extract<
        Endpoint['requests'][Method],
        EndpointMethodDefinition
    >['responses']]: Status extends HttpStatus
        ? SetNullishPropertiesAsOptional<{
              responseData: EndpointResponseType<Endpoint, Method, Status>;
              headers?: EndpointResponseHeadersType<Endpoint, Method, Status> | undefined;
              responseHandled?: never;
          }>
        : never;
};

export type EndpointMethodImplementationOutput<
    Endpoint extends EndpointDefinition,
    Method extends DefinableHttpMethod,
> =
    EndpointMethodDefinedStatusOutputs<Endpoint, Method> extends infer DefinedStatuses extends
        AnyObject
        ? RequireExactlyOne<
              DefinedStatuses &
                  Record<
                      Exclude<ErrorHttpStatus, keyof DefinedStatuses>,
                      {
                          responseData: DefaultErrorResponseType;
                          headers?: DefaultResponseHeadersType | undefined;
                          responseHandled?: never;
                      }
                  > & {
                      [Status in Exclude<
                          ErrorHttpStatus,
                          keyof DefinedStatuses
                      >]: SetNullishPropertiesAsOptional<{
                          responseData: EndpointResponseType<Endpoint, Method, Status>;
                          headers?:
                              | EndpointResponseHeadersType<Endpoint, Method, Status>
                              | undefined;
                          responseHandled?: never;
                      }>;
                  } & {responseHandled: true}
          >
        : never;
