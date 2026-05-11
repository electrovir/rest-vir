import {type BivariantFunction, type ErrorHttpStatus, type MaybePromise} from '@augment-vir/common';
import {
    type BaseSearchParams,
    type DefaultErrorResponseType,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type WebSocketDefinition,
} from '@rest-vir/api';
import {type IncomingHttpHeaders, type OutgoingHttpHeaders} from 'node:http';
import {type IsAny, type IsUnknown, type RequireExactlyOne} from 'type-fest';
import {type ApiImplementation} from './implement-api.js';
import {type RunningServerInfo, type ServerRequest, type ServerResponse} from './raw-route-data.js';

export type CreateHostContext<HostContext> =
    IsOptionalHostContext<HostContext> extends true
        ? undefined | CreateHostContextCallback<HostContext>
        : CreateHostContextCallback<HostContext>;

export type IsOptionalHostContext<HostContext> = HostContext extends undefined
    ? true
    : IsAny<HostContext> extends true
      ? true
      : IsUnknown<HostContext> extends true
        ? true
        : false;

export type CreateHostContextCallback<HostContext> = BivariantFunction<
    [CreateHostContextParams],
    MaybePromise<CreateHostContextOutput<HostContext>>
>;

export type CreateHostContextParams = {
    searchParams: BaseSearchParams;
    requestHeaders: IncomingHttpHeaders;
    method: DefinableHttpMethod;
    api: ApiImplementation;
    requestData: unknown;
    request: ServerRequest;
    response: ServerResponse;
    server: RunningServerInfo;
    endpointDefinition: Readonly<EndpointDefinition> | undefined;
    webSocketDefinition: Readonly<WebSocketDefinition> | undefined;
};

export type CreateHostContextOutput<HostContext> = RequireExactlyOne<{
    /** The context created for this request. */
    context: HostContext;
    /** Instead of creating a context object for the current request, instead, reject the request. */
    reject: {
        statusCode: ErrorHttpStatus;
        responseData?: DefaultErrorResponseType;
        headers?: OutgoingHttpHeaders | undefined;
    };
}>;
