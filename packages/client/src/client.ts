import {check} from '@augment-vir/assert';
import {addPrefix, mapObject, type HttpStatus, type Values} from '@augment-vir/common';
import {
    extractEndpointMethodDefinition,
    type ApiDefinition,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type NoParam,
    type RouteSearchParamsType,
} from '@rest-vir/api';
import {type OutgoingHttpHeaders} from 'node:http';
import {assertValidShape} from 'object-shape-tester';
import {buildUrl} from 'url-vir';
import {parseJsonWithUndefined} from './augments/json.js';
import {
    type EndpointParamObject,
    type EndpointParams,
    type SetNullishPropertiesAsOptional,
} from './endpoint-params.js';
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
        const Endpoint extends Extract<Values<ClientApi['endpoints']>, EndpointDefinition>,
        const Method extends Extract<keyof NoInfer<Endpoint>['requests'], DefinableHttpMethod>,
    >(
        endpoint: Endpoint,
        method: Method,
        ...restParams: EndpointParams<NoInfer<Endpoint>, NoInfer<Method>>
    ) {
        const params = restParams[0];

        if (!check.hasKey(this.api.endpoints, endpoint.path)) {
            throw new Error(`Cannot fetch: this api has no '${endpoint.path}' endpoint.`);
        }

        const endpointMethodDefinition = extractEndpointMethodDefinition(endpoint, method);

        const {requestInit, url} = this.buildEndpointRequestInit(endpoint.path, method, params);

        const response = await (params?.fetchOverride || this.fetchOverride || fetch)(
            url,
            requestInit,
        );

        const responseText = await response.clone().text();
        const responseDefinition =
            endpointMethodDefinition.responses?.[response.status as HttpStatus];

        const responseData = responseDefinition?.responseData
            ? parseJsonWithUndefined(responseText)
            : undefined;

        if (response.ok) {
            if (responseDefinition?.responseData) {
                assertValidShape(responseData, responseDefinition.responseData, {
                    allowExtraKeys: true,
                });
            }

            return {
                ok: true,
                data: responseData,
                response,
            };
        } else {
            if (responseDefinition?.responseData) {
                assertValidShape(responseData, responseDefinition.responseData, {
                    allowExtraKeys: true,
                });
            }

            return {
                ok: false,
                data: responseData || responseText || undefined,
                response,
            };
        }
    }

    /**
     * @throws Error if given searchParams or pathParams are invalid for the given endpoint or path
     *   (respectively).
     */
    public buildEndpointUrl<
        const Path extends keyof ClientApi['endpoints'],
        const Method extends keyof ClientApi['endpoints'][NoInfer<Path>],
    >(
        path: Path,
        method: Method,
        params: Readonly<
            SetNullishPropertiesAsOptional<{
                searchParams: RouteSearchParamsType<NoInfer<EndpointMethod>>;
                pathParams: ExtractPathParams<NoInfer<Path>>;
            }>
        >,
    ) {
        let pathParamsCount = 0;
        const genericParams: Readonly<
            SetNullishPropertiesAsOptional<{
                searchParams: RouteSearchParamsType<NoParam>;
                pathParams: ExtractPathParams;
            }>
        > = params;

        const searchParams = extractSearchParams(endpointMethod, genericParams);

        if (path.endsWith('/*') && genericParams.pathParams?.wildcard == undefined) {
            throw new Error('Missing value for wildcard param.');
        }

        const pathname = path
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
            throw new Error(`'${path}' in does not allow any path params but some where set.`);
        }

        return builtUrl;
    }

    /** @throws Error if the given params are invalid for the given endpoint. */
    public buildEndpointRequestInit<
        const Path extends keyof ClientApi['endpoints'],
        const Method extends keyof ClientApi['endpoints'][NoInfer<Path>],
    >(
        path: Path,
        method: Method,
        params:
            | EndpointParamObject<ClientApi['endpoints'][NoInfer<Path>][NoInfer<Method>]>
            | undefined,
    ) {
        const genericParams: EndpointParamObject | undefined = params;
        const endpointMethod = this.extractEndpointMethodDefinition(path, method);

        const requiredHeaders = extractRequiredHeaders(path, endpointMethod, genericParams || {});

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
            path,
            method,
            (genericParams || {}) satisfies Readonly<
                SetNullishPropertiesAsOptional<{
                    searchParams: RouteSearchParamsType<NoParam>;
                    pathParams: ExtractPathParams;
                }>
            > as Readonly<
                SetNullishPropertiesAsOptional<{
                    searchParams: RouteSearchParamsType<EndpointMethod>;
                    pathParams: ExtractPathParams<Path>;
                }>
            >,
        );

        const requestInit: RequestInit = {
            ...genericParams?.options,
            headers: allHeaders,
            method: endpoint.method,
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
