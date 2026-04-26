import {assertWrap, check} from '@augment-vir/assert';
import {
    addPrefix,
    HttpStatus,
    isErrorHttpStatus,
    mapObject,
    type RequiredAndNotNull,
} from '@augment-vir/common';
import {
    extractEndpointMethodDefinition,
    type ApiDefinition,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type ExtractEndpointMethodDefinition,
    type RouteSearchParamsType,
} from '@rest-vir/api';
import {parseJsonWithUndefined} from '@rest-vir/api/src/augments/json.js';
import {type SetNullishPropertiesAsOptional} from '@rest-vir/api/src/augments/object.js';
import {type OutgoingHttpHeaders} from 'node:http';
import {assertValidShape} from 'object-shape-tester';
import {buildUrl} from 'url-vir';
import {type EndpointParamObject, type EndpointParams} from './endpoint-fetch/endpoint-params.js';
import {
    httpStatusToKey,
    readResponseHeaders,
    type EndpointFetchOutput,
    type UnknownFetchOutput,
} from './endpoint-fetch/endpoint-response.js';
import {type ExtractPathParams} from './path-params.js';
import {extractRequiredHeaders} from './required-headers.js';
import {extractSearchParams} from './search-params.js';

export class RestVirClient<const ClientApi extends ApiDefinition> {
    constructor(
        public readonly api: Readonly<ClientApi>,
        /** All route paths are joined to this URL. */
        public baseUrl: string,
        /** Optional fetch override to wrap or reimplement the native `fetch` function. */
        public fetchOverride?: typeof fetch | undefined,
    ) {}

    public async fetch<
        const Endpoint extends EndpointDefinition & {path: keyof ClientApi['endpoints']},
        const Method extends Extract<keyof NoInfer<Endpoint>['requests'], DefinableHttpMethod>,
    >(
        endpoint: Endpoint,
        method: Method,
        ...restParams: EndpointParams<NoInfer<Endpoint>, NoInfer<Method>>
    ): Promise<EndpointFetchOutput<Endpoint, Method>> {
        const params: EndpointParamObject | undefined = restParams[0];

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
            params satisfies EndpointParamObject | undefined as
                | EndpointParamObject<NoInfer<Endpoint>, NoInfer<Method>>
                | undefined,
        );

        const response = await (params?.fetchOverride || this.fetchOverride || fetch)(
            url,
            requestInit,
        );

        const responseText = (await response.clone().text()) || undefined;

        console.log({
            responseText,
        });

        const responseDefinition =
            endpointMethodDefinition.responses[response.status as HttpStatus];
        const headers = readResponseHeaders(response.headers);
        const status = assertWrap.isEnumValue(
            response.status,
            HttpStatus,
            `Received unexpected HTTP status from '${endpoint.path}': ${response.status}`,
        );
        

        const responseData: unknown =
            headers['content-type']?.includes('json') &&
            responseText
                ? parseJsonWithUndefined(responseText)
                : undefined;

        if (!responseDefinition) {
            if (isErrorHttpStatus(status)) {
                return {
                    unexpectedError: {
                        status,
                        responseData: responseData || responseText,
                        headers,
                        response,
                    },
                } satisfies Pick<
                    RequiredAndNotNull<EndpointFetchOutput<Endpoint, Method>>,
                    'unexpectedError'
                > as EndpointFetchOutput<Endpoint, Method>;
            } else {
                throw new Error(
                    `Received unexpected successful response status from '${endpoint.path}': ${response.status}`,
                );
            }
        }

        console.log({
            responseData,
        });

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

        const fetchOutput: UnknownFetchOutput = {
            status,
            headers,
            response,
            responseData: responseData as any,
        };

        const statusKey = httpStatusToKey[status];

        return {
            [statusKey]: fetchOutput,
        } as EndpointFetchOutput<Endpoint, Method>;
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

        const searchParams = extractSearchParams(endpoint.path, endpointMethod, genericParams);

        if (endpoint.path.endsWith('/*') && genericParams.pathParams?.wildcard == undefined) {
            throw new Error('Missing value for wildcard param.');
        }

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
            .replace(
                /\/\*$/,
                addPrefix({
                    value: genericParams.pathParams?.wildcard || '',
                    prefix: '/',
                }),
            );

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
        params: EndpointParamObject<NoInfer<Endpoint>, NoInfer<Method>> | undefined,
    ) {
        const genericParams: EndpointParamObject | undefined = params;
        const endpointMethod = extractEndpointMethodDefinition(endpoint, method);

        if (!endpointMethod) {
            throw new Error(`Method '${method}' does not exist on endpoint '${endpoint.path}'.`);
        }

        const requiredHeaders = extractRequiredHeaders(
            endpoint.path,
            endpointMethod,
            genericParams || {},
        );

        const optionsHeaders: OutgoingHttpHeaders & Record<string, string> = mapObject(
            genericParams?.options?.headers instanceof Headers
                ? Object.fromEntries(genericParams.options.headers.entries())
                : check.isArray(genericParams?.options?.headers)
                  ? Object.fromEntries(genericParams.options.headers)
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
}
