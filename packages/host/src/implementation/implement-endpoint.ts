import {
    type AnyObject,
    type ErrorHttpStatus,
    type HttpStatus,
    type MaybePromise,
} from '@augment-vir/common';
import {
    type DefaultErrorResponseType,
    type DefaultResponseHeadersType,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type EndpointMethodDefinition,
    type EndpointRequestType,
    type EndpointResponseHeadersType,
    type EndpointResponseType,
    type ExtractEndpointMethodDefinitionWithNoParam,
    type MakeBivariantFunction,
    type NoParam,
    type RouteSearchParamsType,
    type SetNullishPropertiesAsOptional,
} from '@rest-vir/api';
import {type IncomingHttpHeaders} from 'node:http';
import {type RequireExactlyOne} from 'type-fest';
import {type RunningServerInfo, type ServerRequest, type ServerResponse} from './raw-route-data.js';
import {type ServerLogger} from './server-logger.js';

export type EndpointImplementation<Path extends PropertyKey = PropertyKey> = {
    path: Path;
    implementation: EndpointMethodImplementations;
    definition: EndpointDefinition & {
        path: Path;
    };
    isWebSocket: false;
    isEndpoint: true;
};

export type EndpointMethodImplementationParams<
    Endpoint extends Readonly<EndpointDefinition> | NoParam = NoParam,
    Method extends Readonly<DefinableHttpMethod> | NoParam = NoParam,
    HostContext = any,
> = {
    serverLogger: ServerLogger;
    context: HostContext;
    method: Method extends DefinableHttpMethod ? Method : DefinableHttpMethod;
    endpointDefinition: Endpoint extends EndpointDefinition
        ? Readonly<Exclude<Endpoint, NoParam>>
        : Readonly<EndpointDefinition>;
    requestHeaders: IncomingHttpHeaders;
    request: ServerRequest;
    response: ServerResponse;
    requestData: EndpointRequestType<Endpoint, Method>;
    searchParams: RouteSearchParamsType<
        ExtractEndpointMethodDefinitionWithNoParam<Endpoint, Method>
    >;
    server: RunningServerInfo;
};

export type EndpointMethodImplementations<
    Endpoint extends EndpointDefinition | NoParam = NoParam,
    HostContext = unknown,
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
    : Partial<
          Record<
              DefinableHttpMethod,
              MakeBivariantFunction<
                  EndpointMethodImplementationParams,
                  MaybePromise<EndpointMethodImplementationOutput>
              >
          >
      >;

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

export type EndpointImplementationStatusOutput<
    Endpoint extends EndpointDefinition | NoParam = NoParam,
    Method extends DefinableHttpMethod | NoParam = NoParam,
    Status extends HttpStatus | NoParam = NoParam,
> = SetNullishPropertiesAsOptional<{
    responseData: EndpointResponseType<Endpoint, Method, Status>;
    headers?: EndpointResponseHeadersType<Endpoint, Method, Status> | undefined;
}>;

export type DefaultEndpointMethodStatusOutputs = Partial<
    Record<HttpStatus, EndpointImplementationStatusOutput>
>;

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
                          headers?: DefaultResponseHeadersType | undefined;
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
                      }>;
                  } & {responseHandled: true}
          >
        : never;
