import {assertWrap, check} from '@augment-vir/assert';
import {
    addPrefix,
    HttpMethod,
    HttpStatus,
    isErrorHttpStatus,
    mapObject,
    typedObjectFromEntries,
    type MaybePromise,
    type RequiredAndNotNull,
} from '@augment-vir/common';
import {
    extractEndpointMethodDefinition,
    type ApiDefinition,
    type DefaultResponseHeadersType,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type ExtractEndpointMethodDefinition,
    type ResponseStatusDefinition,
    type RouteSearchParamsType,
    type WebSocketDefinition,
} from '@rest-vir/api';
import {parseJsonWithUndefined} from '@rest-vir/api/src/augments/json.js';
import {type SetNullishPropertiesAsOptional} from '@rest-vir/api/src/augments/object.js';
import {type OutgoingHttpHeaders} from 'node:http';
import {assertValidShape} from 'object-shape-tester';
import {type Constructor} from 'type-fest';
import {buildUrl} from 'url-vir';
import {
    type ClientFetch,
    type EndpointFetchParamObject,
    type EndpointFetchParams,
} from './endpoint-fetch/endpoint-params.js';
import {
    httpStatusToKey,
    readResponseHeaders,
    type EndpointFetchOutput,
    type EndpointFetchStreamOutput,
    type UnknownFetchOutput,
} from './endpoint-fetch/endpoint-response.js';
import {type ExtractPathParams} from './path-params.js';
import {extractRequiredHeaders} from './required-headers.js';
import {extractSearchParams} from './search-params.js';
import {type CommonWebSocket} from './websocket-connect/common-web-socket.js';
import {
    type OverwriteWebSocketMethods,
    type WebSocketLocation,
} from './websocket-connect/overwrite-web-socket-types.js';
import {finalizeClientWebSocket} from './websocket-connect/overwrite-web-socket.js';
import {assertValidWebSocketProtocols} from './websocket-connect/web-socket-protocols.js';
import {
    type WebSocketConnectParamObject,
    type WebSocketConnectParams,
    type WebSocketConnectWebSocketConstructor,
} from './websocket-connect/websocket-params.js';

export class RestVirClient<const ClientApi extends ApiDefinition> {
    constructor(
        public readonly api: Readonly<ClientApi>,
        /** All route paths are joined to this URL. */
        public baseUrl: string,
        /** Optional fetch override to wrap or reimplement the native `fetch` function. */
        public fetchOverride?: ClientFetch | undefined,
        /**
         * Optional WebSocket constructor used as the fallback when
         * {@link RestVirClient.connectWebSocket} is called without an explicit
         * `webSocketConstructor` param.
         */
        public webSocketConstructor?: WebSocketConnectWebSocketConstructor | undefined,
    ) {}

    public async fetch<
        const Endpoint extends EndpointDefinition & {path: keyof ClientApi['endpoints']},
        const Method extends Extract<keyof NoInfer<Endpoint>['requests'], DefinableHttpMethod>,
    >(
        endpoint: Endpoint,
        method: Method,
        ...restParams: EndpointFetchParams<NoInfer<Endpoint>, NoInfer<Method>>
    ): Promise<EndpointFetchOutput<Endpoint, Method>> {
        return (await this.runEndpointRequest(
            endpoint,
            method,
            restParams,
            async ({response, headers, responseDefinition}) => {
                const responseData = await readResponseBodyAsJsonOrText(response, headers);

                if (responseDefinition.responseData) {
                    assertValidShape(
                        responseData,
                        responseDefinition.responseData,
                        {
                            allowExtraKeys: true,
                        },
                        `Response from endpoint '${endpoint.path}' has invalid data.`,
                    );
                } else if (responseData) {
                    throw new Error(
                        `Response from endpoint '${endpoint.path}' has unexpectedly present data.`,
                    );
                }

                return responseData;
            },
        )) as EndpointFetchOutput<Endpoint, Method>;
    }

    /**
     * Send a request to an endpoint definition and return a `ReadableStream` instead of parsing the
     * response body. Useful for consuming SSE (Server-Sent Events) endpoints from the frontend.
     *
     * Uses the same request-building flow as `.fetch()`, but skips response body and JSON
     * validation.
     */
    public async fetchStream<
        const Endpoint extends EndpointDefinition & {path: keyof ClientApi['endpoints']},
        const Method extends Extract<keyof NoInfer<Endpoint>['requests'], DefinableHttpMethod>,
    >(
        endpoint: Endpoint,
        method: Method,
        ...restParams: EndpointFetchParams<NoInfer<Endpoint>, NoInfer<Method>>
    ): Promise<EndpointFetchStreamOutput<Endpoint, Method>> {
        return (await this.runEndpointRequest(endpoint, method, restParams, ({response}) => {
            if (!response.body) {
                throw new Error(
                    `Endpoint '${endpoint.path}' returned an ok response with no body to stream.`,
                );
            }

            return response.body;
        })) as EndpointFetchStreamOutput<Endpoint, Method>;
    }

    /**
     * Validate that the endpoint is registered, build its request init, send the request, and shape
     * the response into the status-keyed output. The body of {@link RestVirClient.fetch} and
     * {@link RestVirClient.fetchStream}; their only divergent step is how they read `responseData`
     * out of the response.
     */
    protected async runEndpointRequest<
        const Endpoint extends EndpointDefinition & {path: keyof ClientApi['endpoints']},
        const Method extends Extract<keyof NoInfer<Endpoint>['requests'], DefinableHttpMethod>,
    >(
        endpoint: Endpoint,
        method: Method,
        restParams: EndpointFetchParams<NoInfer<Endpoint>, NoInfer<Method>>,
        getResponseData: (params: {
            response: Response;
            status: HttpStatus;
            headers: DefaultResponseHeadersType;
            responseDefinition: ResponseStatusDefinition;
        }) => MaybePromise<unknown>,
    ): Promise<Record<string, UnknownFetchOutput>> {
        const params: EndpointFetchParamObject | undefined = restParams[0];

        if (!check.hasKey(this.api.endpoints, endpoint.path)) {
            throw new Error(`Cannot fetch: this api has no '${endpoint.path}' endpoint.`);
        }

        const endpointMethodDefinition = extractEndpointMethodDefinition(endpoint, method);

        if (!endpointMethodDefinition) {
            throw new Error(`Endpoint '${endpoint.path}' does not support method '${method}'.`);
        }

        const {requestInit, url} = this.buildEndpointRequestInit(
            endpoint,
            method,
            params satisfies EndpointFetchParamObject | undefined as
                | EndpointFetchParamObject<NoInfer<Endpoint>, NoInfer<Method>>
                | undefined,
        );

        const response = await (params?.fetchOverride || this.fetchOverride || fetch)(
            url,
            requestInit,
            endpoint,
        );

        const status = assertWrap.isEnumValue(
            response.status,
            HttpStatus,
            `Received unexpected HTTP status from '${endpoint.path}': ${response.status}`,
        );
        const responseDefinition = endpointMethodDefinition.responses[status];
        const headers = readResponseHeaders(response.headers);

        if (!responseDefinition) {
            if (isErrorHttpStatus(status)) {
                const errorResponseData = await readResponseBodyAsJsonOrText(response, headers);

                return {
                    unexpectedError: {
                        status,
                        responseData: errorResponseData,
                        headers,
                        response,
                    },
                } satisfies Pick<
                    RequiredAndNotNull<EndpointFetchOutput<Endpoint, Method>>,
                    'unexpectedError'
                > as EndpointFetchOutput<Endpoint, Method>;
            } else {
                throw new Error(
                    `Received unexpected successful response status from '${endpoint.path}': ${status}`,
                );
            }
        }

        const responseData = await getResponseData({
            response,
            status,
            headers,
            responseDefinition,
        });

        const outputKey = httpStatusToKey[status];

        return {
            [outputKey]: {
                status,
                headers,
                response,
                responseData: responseData as any,
            },
        };
    }

    /**
     * @throws Error if given searchParams or pathParams are invalid for the given endpoint or path
     *   (respectively).
     */
    public buildEndpointUrl<
        const Endpoint extends EndpointDefinition & {path: keyof ClientApi['endpoints']},
        const Method extends Extract<keyof NoInfer<Endpoint>['requests'], DefinableHttpMethod>,
    >(
        endpoint: Endpoint,
        method: Method,
        params: Readonly<
            SetNullishPropertiesAsOptional<{
                searchParams: RouteSearchParamsType<
                    ExtractEndpointMethodDefinition<NoInfer<Endpoint>, NoInfer<Method>>
                >;
                pathParams: ExtractPathParams<NoInfer<Endpoint>['path']>;
            }>
        >,
    ) {
        let pathParamsCount = 0;
        const genericParams: Readonly<
            SetNullishPropertiesAsOptional<{
                searchParams: RouteSearchParamsType;
                pathParams: ExtractPathParams;
            }>
        > = params;

        const endpointMethod = extractEndpointMethodDefinition(endpoint, method);

        if (!endpointMethod) {
            throw new Error(`Method '${method}' does not exist on endpoint '${endpoint.path}'.`);
        }

        const searchParams = extractSearchParams(
            endpointMethod.searchParams,
            genericParams.searchParams,
        );

        const pathname = endpoint.path
            .replaceAll(/\/:([^/]+)/g, (wholeMatch, paramName: string): string => {
                pathParamsCount++;
                if (
                    genericParams.pathParams &&
                    check.hasKey(genericParams.pathParams, paramName) &&
                    genericParams.pathParams[paramName]
                ) {
                    return addPrefix({
                        value: genericParams.pathParams[paramName],
                        prefix: '/',
                    });
                } else {
                    throw new Error(`Missing value for path param '${paramName}'.`);
                }
            })
            .replace(/\/\*$/, () => {
                pathParamsCount++;
                if (genericParams.pathParams?.wildcard == undefined) {
                    throw new Error('Missing value for wildcard param.');
                }
                return addPrefix({
                    value: genericParams.pathParams.wildcard,
                    prefix: '/',
                });
            });

        const builtUrl = buildUrl(this.baseUrl, {
            search: searchParams,
            pathname,
        }).href;

        if (!pathParamsCount && genericParams.pathParams) {
            throw new Error(
                `Endpoint '${endpoint.path}' does not allow any path params but some where set.`,
            );
        }

        return builtUrl;
    }

    /** @throws Error if the given params are invalid for the given endpoint. */
    public buildEndpointRequestInit<
        const Endpoint extends EndpointDefinition & {path: keyof ClientApi['endpoints']},
        const Method extends Extract<keyof NoInfer<Endpoint>['requests'], DefinableHttpMethod>,
    >(
        endpoint: Endpoint,
        method: Method,
        params: EndpointFetchParamObject<NoInfer<Endpoint>, NoInfer<Method>> | undefined,
    ) {
        const genericParams: EndpointFetchParamObject | undefined = params;
        const endpointMethod = extractEndpointMethodDefinition(endpoint, method);

        if (!endpointMethod) {
            throw new Error(`Method '${method}' does not exist on endpoint '${endpoint.path}'.`);
        }

        const requiredHeaders = extractRequiredHeaders(
            endpoint.path,
            endpointMethod.requiredRequestHeaders,
            genericParams?.requiredHeaders,
        );

        const optionsHeaders: OutgoingHttpHeaders & Record<string, string> = mapObject(
            genericParams?.options?.headers instanceof Headers
                ? typedObjectFromEntries(Array.from(genericParams.options.headers.entries()))
                : check.isArray(genericParams?.options?.headers)
                  ? typedObjectFromEntries(genericParams.options.headers)
                  : genericParams?.options?.headers || {},
            (key, value) => {
                return {
                    key: key.toLowerCase(),
                    value,
                };
            },
        );

        const allHeaders: OutgoingHttpHeaders & Record<string, string> = {
            ...optionsHeaders,
            ...requiredHeaders,
        };

        if (!allHeaders['content-type']) {
            if (
                genericParams?.requestData instanceof FormData ||
                genericParams?.skipAutomaticContentTypeHeader
            ) {
                /**
                 * Do not automatically set `content-type` when submitting form data because `fetch`
                 * will set it automatically _and_ include a boundary in the content type, which is
                 * needed for reading the form data properly.
                 */
            } else if (genericParams?.requestData) {
                /** By default, set content type as json. */
                allHeaders['content-type'] = 'application/json';
            }
        }

        const shouldStringify: boolean = !!allHeaders['content-type']?.match(/\bjson\b/i);

        const url = this.buildEndpointUrl(
            endpoint,
            method,
            (genericParams || {}) satisfies Readonly<
                SetNullishPropertiesAsOptional<{
                    searchParams: RouteSearchParamsType;
                    pathParams: ExtractPathParams;
                }>
            > as Readonly<
                SetNullishPropertiesAsOptional<{
                    searchParams: RouteSearchParamsType<
                        ExtractEndpointMethodDefinition<NoInfer<Endpoint>, NoInfer<Method>>
                    >;
                    pathParams: ExtractPathParams<NoInfer<Endpoint>['path']>;
                }>
            >,
        );

        const requestInit: RequestInit = {
            ...genericParams?.options,
            headers: allHeaders,
            method,
            ...(genericParams?.requestData
                ? shouldStringify
                    ? {
                          body: JSON.stringify(genericParams.requestData),
                      }
                    : {
                          body: genericParams.requestData,
                      }
                : {}),
        };

        return {
            url,
            requestInit,
        };
    }
    public async connectWebSocket<
        const ThisWebSocket extends WebSocketDefinition & {path: keyof ClientApi['webSockets']},
        WebSocketClass extends CommonWebSocket,
    >(
        webSocket: ThisWebSocket,
        ...restParams: WebSocketConnectParams<NoInfer<ThisWebSocket>, WebSocketClass>
    ) {
        const params: WebSocketConnectParamObject | undefined = restParams[0];

        assertValidWebSocketProtocols(params?.protocols, webSocket);

        const url = this.buildWebSocketUrl(
            webSocket,
            params satisfies WebSocketConnectParamObject | undefined as
                | WebSocketConnectParamObject<NoInfer<ThisWebSocket>, WebSocketClass>
                | undefined,
        );

        const webSocketConstructor: Constructor<WebSocketClass> = (params?.webSocketConstructor ||
            this.webSocketConstructor ||
            defaultWebSocket) as Constructor<WebSocketClass>;

        const clientWebSocket: OverwriteWebSocketMethods<
            WebSocketClass,
            WebSocketLocation.OnClient,
            ThisWebSocket
        > = await finalizeClientWebSocket<ThisWebSocket, WebSocketClass>(
            webSocket,
            new webSocketConstructor(url, params?.protocols, webSocket),
            params?.listeners,
        );

        return clientWebSocket;
    }

    public buildWebSocketUrl<
        const ThisWebSocket extends WebSocketDefinition & {path: keyof ClientApi['webSockets']},
        WebSocketClass extends CommonWebSocket,
    >(
        webSocket: ThisWebSocket,
        webSocketParams:
            | WebSocketConnectParamObject<NoInfer<ThisWebSocket>, WebSocketClass>
            | undefined,
    ) {
        const params: WebSocketConnectParamObject | undefined = webSocketParams;

        const httpUrl = this.buildEndpointUrl(
            {
                path: webSocket.path as any,
                requests: {
                    [HttpMethod.Get]: {
                        responses: {
                            [HttpStatus.Ok]: {
                                responseData: undefined,
                            },
                        },
                        searchParams: webSocket.searchParams,
                    },
                },
            },
            HttpMethod.Get,
            {
                pathParams: params?.pathParams,
                searchParams: params?.searchParams,
            },
        );

        return buildUrl(httpUrl, {
            protocol: httpUrl.startsWith('https') ? 'wss' : 'ws',
        }).href;
    }
}

/**
 * Read the response body as text, then JSON-parse it if the response advertises a JSON
 * `content-type`. Falls back to the raw text when JSON parsing yields nothing.
 */
export async function readResponseBodyAsJsonOrText(
    response: Readonly<Response>,
    headers: DefaultResponseHeadersType,
): Promise<unknown> {
    const responseText = (await response.clone().text()) || undefined;

    const parsed: unknown =
        headers['content-type']?.includes('json') && responseText
            ? parseJsonWithUndefined(responseText)
            : undefined;

    return parsed || responseText;
}

const defaultWebSocket = function (
    this: any,
    ...[
        url,
        protocols,
    ]: ConstructorParameters<WebSocketConnectWebSocketConstructor>
): WebSocket {
    return new globalThis.WebSocket(url, protocols);
} as unknown as WebSocketConnectWebSocketConstructor;
