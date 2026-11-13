import {check} from '@augment-vir/assert';
import {
    mapObject,
    typedObjectFromEntries,
    type AnyFunction,
    type BivariantFunction,
    type Constructor,
} from '@augment-vir/common';
import {type EndpointDefinitionMethods} from '@rest-vir/api';
import {type OutgoingHttpHeaders} from 'node:http';
import {buildUrl, joinUrlPaths, UrlEncoding} from 'url-vir';
import {type ApiDefinition} from './api/api.js';
import {
    extractEndpointMethodDefinition,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type ExtractEndpointMethodDefinition,
} from './api/endpoint.js';
import {
    buildRoutePath,
    type ExtractPathParams,
    type GenericPathParams,
    type RoutePathDefinition,
} from './api/path-params.js';
import {type BaseRoutePath, type RouteSearchParamsType} from './api/route.js';
import {type WebSocketDefinition} from './api/web-socket.js';
import {type SetNullishPropertiesAsOptional} from './augments/object.js';
import {
    type ClientFetch,
    type EndpointFetchParamObject,
    type EndpointFetchParams,
} from './endpoint-fetch/endpoint-params.js';
import {
    createEndpointResponseOutput,
    type EndpointFetchOutput,
    type EndpointFetchStreamOutput,
    type HandleDeclaredResponseStatusOverride,
    type UnknownFetchOutput,
} from './endpoint-fetch/endpoint-response.js';
import {extractRequiredHeaders} from './required-headers.js';
import {extractSearchParams} from './search-params.js';
import {type NoParam} from './util/no-param.js';
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

/**
 * @category Client
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
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

    /**
     * Return a method-keyed object for the given endpoint. Each property is a function that runs
     * the fetch for that specific HTTP method.
     *
     * @example
     *
     * ```ts
     * const response = await client.fetch(healthEndpoint).GET();
     * const created = await client.fetch(usersEndpoint).POST({requestData: ...});
     * ```
     */
    public fetch<const Endpoint extends EndpointDefinition & {path: keyof ClientApi['endpoints']}>(
        endpoint: Endpoint,
    ) {
        return mapObject(endpoint.requests, (method) => {
            return {
                key: method,
                value: async (
                    ...restParams: EndpointFetchParams<Endpoint, typeof method>
                ): Promise<EndpointFetchOutput<Endpoint, typeof method, true>> => {
                    return (await this.runEndpointRequest(
                        endpoint satisfies EndpointDefinition as EndpointDefinition,
                        method,
                        restParams[0],
                    )) as EndpointFetchOutput<Endpoint, typeof method, true>;
                },
            };
        }) satisfies Partial<Record<DefinableHttpMethod, AnyFunction>> as {
            [Method in Extract<
                keyof NoInfer<Endpoint>['requests'],
                DefinableHttpMethod
            >]: BivariantFunction<
                EndpointFetchParams<NoInfer<Endpoint>, Method>,
                Promise<EndpointFetchOutput<Endpoint, Method, true>>
            >;
        };
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
        const Method extends EndpointDefinitionMethods<NoInfer<Endpoint>>,
    >(
        endpoint: Endpoint,
        method: Method,
        ...restParams: EndpointFetchParams<NoInfer<Endpoint>, NoInfer<Method>>
    ): Promise<EndpointFetchStreamOutput<Endpoint, Method>> {
        return (await this.runEndpointRequest(endpoint, method, restParams[0], ({response}) => {
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
     * the response into the status-keyed output. The body of `RestVirClient.fetch` and
     * {@link RestVirClient.fetchStream}; their only divergent step is how they read `responseData`
     * out of the response.
     */
    // eslint-disable-next-line @virmator/prefer-params-object
    protected async runEndpointRequest<
        const Endpoint extends EndpointDefinition & {path: keyof ClientApi['endpoints']},
        const Method extends EndpointDefinitionMethods<NoInfer<Endpoint>>,
    >(
        endpoint: Endpoint,
        method: Method,
        params: EndpointFetchParamObject | undefined,
        getResponseDataOverride?: HandleDeclaredResponseStatusOverride | undefined,
    ): Promise<Record<string, UnknownFetchOutput>> {
        if (!check.hasKey(this.api.endpoints, endpoint.path)) {
            throw new Error(`Cannot fetch: this api has no '${endpoint.path}' endpoint.`);
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

        return (await createEndpointResponseOutput({
            endpoint,
            method,
            response,
            includeResponse: true,
            handleDeclaredResponseStatusOverride: getResponseDataOverride,
            shouldCondenseResponse: false,
        })) satisfies unknown as EndpointFetchOutput<Endpoint, Method, true>;
    }

    /**
     * @throws Error if given searchParams or pathParams are invalid for the given endpoint or path
     *   (respectively).
     */
    public buildEndpointUrl<
        const Endpoint extends EndpointDefinition & {path: keyof ClientApi['endpoints']},
        const Method extends EndpointDefinitionMethods<NoInfer<Endpoint>>,
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

        const pathname = buildRoutePath(
            endpoint satisfies RoutePathDefinition as RoutePathDefinition,
            {
                pathParams:
                    genericParams.pathParams satisfies GenericPathParams as ExtractPathParams<BaseRoutePath>,
            },
        );

        const builtUrl = buildUrl(
            this.baseUrl,
            {
                search: searchParams,
                pathname: joinUrlPaths(buildUrl(this.baseUrl).pathname, pathname),
            },
            /**
             * Percent-encode search param keys and values so caller-supplied values containing `&`,
             * `=`, or `#` cannot inject extra query parameters or truncate the URL.
             */
            {
                encoding: UrlEncoding.Encode,
            },
        ).href;

        return builtUrl;
    }

    /** @throws Error if the given params are invalid for the given endpoint. */
    public buildEndpointRequestInit<
        const Endpoint extends EndpointDefinition & {path: keyof ClientApi['endpoints']},
        const Method extends EndpointDefinitionMethods<NoInfer<Endpoint>>,
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
        const hasRequestData =
            !!genericParams &&
            'requestData' in genericParams &&
            genericParams.requestData !== undefined;

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
            } else if (hasRequestData) {
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
            ...(hasRequestData
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
        const ThisWebSocket extends
            | (WebSocketDefinition & {path: keyof ClientApi['webSockets']})
            | NoParam = NoParam,
        WebSocketClass extends CommonWebSocket | NoParam = NoParam,
    >(
        webSocket: ThisWebSocket,
        webSocketParams:
            | WebSocketConnectParamObject<NoInfer<ThisWebSocket>, WebSocketClass>
            | undefined,
    ) {
        const params: WebSocketConnectParamObject | undefined = webSocketParams;
        const genericWebSocket = webSocket as WebSocketDefinition;

        const searchParams = extractSearchParams(
            genericWebSocket.searchParams,
            params?.searchParams,
        );
        const pathname = buildRoutePath(genericWebSocket, {
            pathParams: params?.pathParams satisfies GenericPathParams as ExtractPathParams<
                typeof genericWebSocket.path
            >,
        });
        const httpUrl = buildUrl(
            this.baseUrl,
            {
                search: searchParams,
                pathname: joinUrlPaths(buildUrl(this.baseUrl).pathname, pathname),
            },
            /** Same query-parameter-injection protection as {@link RestVirClient.buildEndpointUrl}. */
            {
                encoding: UrlEncoding.Encode,
            },
        ).href;

        return buildUrl(httpUrl, {
            protocol: httpUrl.startsWith('https') ? 'wss' : 'ws',
        }).href;
    }
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
