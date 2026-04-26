import {check} from '@augment-vir/assert';
import {
    type ErrorHttpStatusCategories,
    type ExtractKeysWithMatchingValues,
    type HttpMethod,
    type HttpStatusByCategory,
    type MaybePromise,
    type SuccessHttpStatusCategories,
    getObjectTypedEntries,
} from '@augment-vir/common';
import {
    type BaseSearchParams,
    type BaseServiceEndpointsInit,
    type ConstructPathParams,
    type EndpointDefinition,
    type EndpointInit,
    type EndpointPathBase,
    type GenericPathParams,
    type MinimalService,
    type NoParam,
    type ServiceDefinition,
    ServiceDefinitionError,
    type WithFinalEndpointProps,
} from '@rest-vir/define-service';
import {type IncomingHttpHeaders, type OutgoingHttpHeaders} from 'node:http';
import {type IsEqual, type IsNever} from 'type-fest';
import {type ServerRequest, type ServerResponse} from '../util/data.js';
import {type ServiceLogger} from '../util/service-logger.js';
import {type ReplaceUndefined} from '../util/types.js';

/**
 * The part of {@link EndpointImplementationOutput} allowed for error responses.
 *
 * @category Internal
 * @category Package : @rest-vir/implement-service
 * @package [`@rest-vir/implement-service`](https://www.npmjs.com/package/@rest-vir/implement-service)
 */
export type EndpointImplementationErrorOutput = {
    statusCode: HttpStatusByCategory<ErrorHttpStatusCategories>;
    /**
     * An error message which will get sent to the frontend.
     *
     * DO NOT INCLUDE SENSITIVE INFORMATION IN HERE.
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
 * @category Package : @rest-vir/implement-service
 * @package [`@rest-vir/implement-service`](https://www.npmjs.com/package/@rest-vir/implement-service)
 */
export type EndpointImplementationHandledOutput = {
    /** The response has been fully handled by the endpoint implementation. */
    responseHandled: true;
    statusCode?: never;
    responseData?: never;
    responseErrorMessage?: never;
    dataType?: never;
    headers?: never;
};

/**
 * The object that all endpoint implementations should return.
 *
 * @category Internal
 * @category Package : @rest-vir/implement-service
 * @package [`@rest-vir/implement-service`](https://www.npmjs.com/package/@rest-vir/implement-service)
 */
export type EndpointImplementationOutput<ResponseDataType = unknown> =
    | EndpointImplementationErrorOutput
    | EndpointImplementationHandledOutput
    | ({
          statusCode: HttpStatusByCategory<SuccessHttpStatusCategories>;

          responseErrorMessage?: never;

          /**
           * Set the response data type. If any response data is included, the default is
           * `application/json`.
           */
          dataType?: string | undefined;
          headers?: OutgoingHttpHeaders | undefined;
          responseHandled?: never;
      } & (ResponseDataType extends undefined
          ? {
                responseData?: ResponseDataType;
            }
          : {
                responseData: ResponseDataType;
            }));

/**
 * The object that all endpoint implementations receive as an input.
 *
 * @category Internal
 * @category Package : @rest-vir/implement-service
 * @package [`@rest-vir/implement-service`](https://www.npmjs.com/package/@rest-vir/implement-service)
 */
export type EndpointImplementationParams<
    Context = any,
    SpecificEndpoint extends EndpointDefinition | NoParam = NoParam,
    ServiceName extends string = any,
> = (SpecificEndpoint extends NoParam
    ? GenericPathParams
    : ConstructPathParams<Exclude<SpecificEndpoint, NoParam>['path']>) & {
    context: NoInfer<Context>;
    method: IsEqual<Extract<SpecificEndpoint, NoParam>, NoParam> extends true
        ? HttpMethod
        : ExtractKeysWithMatchingValues<
                Exclude<SpecificEndpoint, NoParam>['methods'],
                true
            > extends infer AvailableMethod
          ? IsNever<AvailableMethod> extends true
              ? HttpMethod
              : AvailableMethod
          : never;
    endpoint: IsEqual<Extract<SpecificEndpoint, NoParam>, NoParam> extends true
        ? EndpointDefinition
        : SpecificEndpoint;
    service: MinimalService<ServiceName>;
    requestHeaders: IncomingHttpHeaders;

    requestData: IsEqual<Extract<SpecificEndpoint, NoParam>, NoParam> extends true
        ? any
        : WithFinalEndpointProps<Exclude<SpecificEndpoint, NoParam>, any>['RequestType'];
    request: ServerRequest;
    response: ServerResponse;
    log: Readonly<ServiceLogger>;
    searchParams: ReplaceUndefined<
        SpecificEndpoint extends NoParam
            ? BaseSearchParams
            : Exclude<SpecificEndpoint, NoParam>['SearchParamsType'],
        BaseSearchParams
    >;
    /** The actual running server info. */
    server: RunningServerInfo;
};

/**
 * Information passed to an endpoint or WebSocket about the currently running server.
 *
 * @category Internal
 * @category Package : @rest-vir/implement-service
 * @package [`@rest-vir/implement-service`](https://www.npmjs.com/package/@rest-vir/implement-service)
 */
export type RunningServerInfo = {
    serviceOrigin: string;
};

/**
 * Generic parameters for {@link EndpointImplementation} that should be compatible with _any_
 * endpoint implementation.
 *
 * @category Internal
 * @category Package : @rest-vir/implement-service
 * @package [`@rest-vir/implement-service`](https://www.npmjs.com/package/@rest-vir/implement-service)
 */
export type GenericEndpointImplementationParams = {
    context: any;
    method: any;
    endpoint: any;
    service: MinimalService;
    requestHeaders: IncomingHttpHeaders;
    searchParams: BaseSearchParams;

    requestData: any;
    request: ServerRequest;
    response: ServerResponse;
    log: Readonly<ServiceLogger>;
    /** The actual running server info. */
    server: RunningServerInfo;
} & GenericPathParams;

/**
 * A full, type-safe endpoint implementation type.
 *
 * @category Internal
 * @category Package : @rest-vir/implement-service
 * @package [`@rest-vir/implement-service`](https://www.npmjs.com/package/@rest-vir/implement-service)
 */
export type EndpointImplementation<
    Context = any,
    SpecificEndpoint extends EndpointDefinition | NoParam = NoParam,
    ServiceName extends string = any,
> =
    IsEqual<Extract<SpecificEndpoint, NoParam>, NoParam> extends true
        ? (params: GenericEndpointImplementationParams) => any
        : (
              params: Readonly<
                  EndpointImplementationParams<NoInfer<Context>, SpecificEndpoint, ServiceName>
              >,
          ) => MaybePromise<
              EndpointImplementationOutput<
                  WithFinalEndpointProps<SpecificEndpoint, any>['ResponseType']
              >
          >;

/**
 * All endpoint implementations to match the service definition's endpoints.
 *
 * @category Internal
 * @category Package : @rest-vir/implement-service
 * @package [`@rest-vir/implement-service`](https://www.npmjs.com/package/@rest-vir/implement-service)
 */
export type EndpointImplementations<
    Context = any,
    EndpointsInit extends BaseServiceEndpointsInit | NoParam = NoParam,
    ServiceName extends string = any,
> = EndpointsInit extends NoParam
    ? Record<EndpointPathBase, EndpointImplementation>
    : {
          [EndpointPath in keyof EndpointsInit]: EndpointsInit[EndpointPath] extends EndpointInit
              ? EndpointPath extends EndpointPathBase
                  ? EndpointImplementation<
                        NoInfer<Context>,
                        WithFinalEndpointProps<EndpointsInit[EndpointPath], EndpointPath>,
                        ServiceName
                    >
                  : never
              : never;
      };

/**
 * Asserts that all endpoint implementations are valid.
 *
 * @category Internal
 * @category Package : @rest-vir/implement-service
 * @package [`@rest-vir/implement-service`](https://www.npmjs.com/package/@rest-vir/implement-service)
 */
export function assertValidEndpointImplementations(
    service: Readonly<Pick<ServiceDefinition, 'endpoints' | 'serviceName'>>,
    endpointImplementations: EndpointImplementations,
): asserts endpointImplementations is Record<EndpointPathBase, EndpointImplementation> {
    const nonFunctionImplementations = getObjectTypedEntries(endpointImplementations).filter(
        ([
            ,
            implementation,
        ]) => {
            return check.isNotFunction(implementation);
        },
    );

    if (nonFunctionImplementations.length) {
        throw new ServiceDefinitionError({
            path: undefined,
            errorMessage: `Endpoint implementations are not functions for endpoints: '${nonFunctionImplementations
                .map(([endpointPath]) => endpointPath)
                .join(',')}'`,
            serviceName: service.serviceName,
            isEndpoint: undefined,
            isWebSocket: undefined,
        });
    }

    const missingEndpointImplementationPaths: string[] = [];
    const extraEndpointImplementationPaths: string[] = [];

    Object.keys(service.endpoints).forEach((key) => {
        if (!(key in endpointImplementations)) {
            missingEndpointImplementationPaths.push(key);
        }
    });

    Object.keys(endpointImplementations).forEach((key) => {
        if (!(key in service.endpoints)) {
            extraEndpointImplementationPaths.push(key);
        }
    });

    if (missingEndpointImplementationPaths.length) {
        throw new ServiceDefinitionError({
            path: undefined,
            errorMessage: `Endpoints are missing implementations: '${missingEndpointImplementationPaths.join(
                ',',
            )}'`,
            serviceName: service.serviceName,
            isEndpoint: undefined,
            isWebSocket: undefined,
        });
    } else if (extraEndpointImplementationPaths.length) {
        throw new ServiceDefinitionError({
            path: undefined,
            errorMessage: `Endpoint implementations have extra endpoints: '${extraEndpointImplementationPaths.join(
                ',',
            )}'`,
            serviceName: service.serviceName,
            isEndpoint: undefined,
            isWebSocket: undefined,
        });
    }
}
