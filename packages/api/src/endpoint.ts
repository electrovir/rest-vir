import {
    HttpMethod,
    type AnyObject,
    type ArrayElement,
    type ErrorHttpStatus,
    type HttpStatus,
} from '@augment-vir/common';
import {type Shape} from 'object-shape-tester';
import {type NoParam} from './no-param.js';
import {
    type BaseRoutePath,
    type CommonRouteDefinition,
    type ExtractRequiredHeaderValue,
} from './route.js';

/**
 * Define a single endpoint.
 *
 * @category Define API
 */
export function defineEndpoint<const Endpoint extends EndpointDefinition>(
    endpoint: Readonly<Endpoint>,
): Readonly<Endpoint> {
    return endpoint;
}

/**
 * An individual endpoint definition.
 *
 * @category Internal
 */
export type EndpointDefinition = {
    path: BaseRoutePath;
    requests: Partial<{
        [Method in DefinableHttpMethod]: EndpointMethodDefinition<Method>;
    }>;
};

/**
 * All HttpMethods that we can define requests for.
 *
 * @category Internal
 */
export const definableHttpMethods = [
    HttpMethod.Get,
    HttpMethod.Put,
    HttpMethod.Post,
    HttpMethod.Delete,
    HttpMethod.Patch,
    HttpMethod.Trace,
] as const;

/**
 * A union of all HttpMethods that we can define requests for.
 *
 * @category Internal
 */
export type DefinableHttpMethod = ArrayElement<typeof definableHttpMethods>;

/**
 * All HttpMethods that allow request bodies.
 *
 * @category Internal
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
 */
export type HttpMethodsWithBodies = ArrayElement<typeof httpMethodsWithBodies>;

export type EndpointMethodDefinition<Method extends DefinableHttpMethod = DefinableHttpMethod> = {
    /**
     * - Omit to disable checking entirely.
     * - Set to `undefined` to require no request data.
     * - Set to a shape to enforce JSON shape validation.
     *
     * This is ignored entirely for http methods that do not allow request bodies.
     */
    requestData?: Method extends HttpMethodsWithBodies ? Shape | undefined : never;
    responses?: ResponseDefinitions;
} & CommonRouteDefinition;

/**
 * Optionally provide explicit response body data for specific response status. Any HttpStatus
 * response not defined has a default body type depending on its status class:
 *
 * - Error HTTP statuses: string (allowing error messages) | undefined (no body)
 * - Success HTTP statuses: undefined (no body)
 *
 * @category Internal
 */
export type ResponseDefinitions = Partial<Record<HttpStatus, ResponseStatusDefinition>>;

export type ResponseStatusDefinition = {
    responseData?: Shape | undefined;
    requiredResponseHeaders?: BaseRequiredResponseHeaders | undefined;
};

export type BaseRequiredResponseHeaders = Record<string, Shape | RegExp>;

/**
 * Extracts an endpoint's request type.
 *
 * @category Define API
 */
export type EndpointRequestType<MethodDefinition extends EndpointMethodDefinition | NoParam> =
    MethodDefinition extends NoParam
        ? any
        : Exclude<MethodDefinition, NoParam>['requestData'] extends Shape
          ? NonNullable<Exclude<MethodDefinition, NoParam>['requestData']>['runtimeType']
          : undefined;

/**
 * Extracts an endpoint's response type.
 *
 * @category Define API
 */
export type EndpointResponseType<
    MethodDefinition extends EndpointMethodDefinition,
    Status extends HttpStatus,
> = NonNullable<
    NonNullable<MethodDefinition['responses']>[Status]
>['responseData'] extends infer ResponseDataShape extends Shape
    ? ResponseDataShape['runtimeType']
    : DefaultResponseType<Status>;

/**
 * The default response type for any status, used when a status response is not explicitly defined
 * for the endpoint.
 *
 * @category Internal
 */
export type DefaultResponseType<Status extends HttpStatus> = Status extends ErrorHttpStatus
    ? undefined | string
    : unknown;

export type ExtractResponseHeadersType<
    ResponseDefinition extends
        | undefined
        | {requiredResponseHeaders?: Record<string, Shape>}
        | NoParam,
> = Extract<
    ResponseDefinition,
    AnyObject
>['requiredResponseHeaders'] extends infer RequiredHeaders extends BaseRequiredResponseHeaders
    ? {
          [HeaderKey in keyof RequiredHeaders]: ExtractRequiredHeaderValue<
              RequiredHeaders[HeaderKey]
          >;
      } & Record<string, string>
    : Record<string, string>;
