/* eslint-disable @typescript-eslint/no-empty-object-type */

import {
    getObjectTypedEntries,
    HttpStatus,
    typedObjectFromEntries,
    type AnyObject,
    type ErrorHttpStatus,
    type ExtractKeysWithMatchingValues,
} from '@augment-vir/common';
import {type Shape} from 'object-shape-tester';
import {type RequireExactlyOne} from 'type-fest';
import {
    type DefaultErrorResponseType,
    type DefaultResponseHeadersType,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type EndpointMethodDefinition,
    type EndpointResponseHeadersType,
} from '../api/endpoint.js';

export type DefinedEndpointFetchOutputs<
    Endpoint extends EndpointDefinition,
    Method extends DefinableHttpMethod,
> = Endpoint['requests'][Method] extends infer EndpointMethod extends EndpointMethodDefinition
    ? EndpointMethod['responses'] extends AnyObject
        ? {
              [Status in Extract<
                  keyof EndpointMethod['responses'],
                  HttpStatus
              > as HttpStatusByKey<Status>]: {
                  status: Status;
                  responseData:
                      | ResolveShapeType<
                            NonNullable<EndpointMethod['responses'][Status]>['responseData']
                        >
                      | (Status extends ErrorHttpStatus ? string | undefined : never);
                  headers: EndpointResponseHeadersType<
                      Endpoint,
                      Method,
                      Extract<Status, HttpStatus>
                  >;
                  response: Response;
              };
          }
        : {}
    : {};

export type EndpointFetchOutput<
    Endpoint extends EndpointDefinition,
    Method extends DefinableHttpMethod,
> = RequireExactlyOne<
    DefinedEndpointFetchOutputs<Endpoint, Method> & {
        unexpectedError: UnknownFetchOutput;
    }
>;

export type UnknownFetchOutput = {
    status: HttpStatus;
    responseData: DefaultErrorResponseType;
    headers: DefaultResponseHeadersType;
    response: Response;
};

export type ResolveShapeType<InnerShape extends Shape | undefined> = InnerShape extends Shape
    ? InnerShape['runtimeType']
    : undefined;

export function readResponseHeaders(headers: Headers) {
    return Object.fromEntries(headers.entries());
}

export type HttpStatusByKey<Status extends HttpStatus> = ExtractKeysWithMatchingValues<
    typeof HttpStatus,
    Status
>;

export const httpStatusToKey = typedObjectFromEntries(
    getObjectTypedEntries(HttpStatus).map(
        ([
            key,
            status,
        ]) => [
            status,
            key,
        ],
    ),
) satisfies Record<HttpStatus, keyof typeof HttpStatus> as {
    [Status in HttpStatus]: ExtractKeysWithMatchingValues<typeof HttpStatus, Status>;
};

export type DefinedEndpointFetchStreamOutputs<
    Endpoint extends EndpointDefinition,
    Method extends DefinableHttpMethod,
> = Endpoint['requests'][Method] extends infer EndpointMethod extends EndpointMethodDefinition
    ? EndpointMethod['responses'] extends AnyObject
        ? {
              [Status in Extract<
                  keyof EndpointMethod['responses'],
                  HttpStatus
              > as HttpStatusByKey<Status>]: {
                  status: Status;
                  responseData:
                      | ReadableStream<Uint8Array>
                      | (Status extends ErrorHttpStatus ? string | undefined : never);
                  headers: EndpointResponseHeadersType<
                      Endpoint,
                      Method,
                      Extract<Status, HttpStatus>
                  >;
                  response: Response;
              };
          }
        : {}
    : {};

export type EndpointFetchStreamOutput<
    Endpoint extends EndpointDefinition,
    Method extends DefinableHttpMethod,
> = RequireExactlyOne<
    DefinedEndpointFetchStreamOutputs<Endpoint, Method> & {
        unexpectedError: UnknownFetchOutput;
    }
>;
