import {assertWrap, check} from '@augment-vir/assert';
import {
    ensureErrorAndPrependMessage,
    extractErrorMessage,
    filterMap,
    HttpStatus,
} from '@augment-vir/common';
import {parseUrl} from 'url-vir';
import {type ApiDefinition} from '../api/api.js';
import {
    extractEndpointMethodDefinition,
    extractHttpMethod,
    type DefaultResponseHeadersType,
    type EndpointDefinition,
} from '../api/endpoint.js';
import {readResponseBodyAsJsonOrText} from '../client.js';
import {type ClientFetch} from '../endpoint-fetch/endpoint-params.js';
import {createMockResponse} from '../endpoint-fetch/mock-fetch.js';
import {type EndpointMethodImplementationOutput} from '../implementation/endpoint-implementation.js';
import {extractSearchParams} from '../search-params.js';
import {consolidateHeaders, headersToObject} from '../util/header-util.js';
import {type MockEndpointMethodImplementations} from './mock-endpoint-implementation.js';
import {type MockCreateHostContext} from './mock-host-context.js';
import {resolveMockHostContext} from './mock-host-resolve-context.js';
import {type MockHostEndpointMap} from './mock-host-route-map.js';

/**
 * Options for {@link createMockHostFetch}.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type MockHostFetchOptions<Api extends Readonly<ApiDefinition>, Context> = {
    endpointImplementations: Readonly<MockHostEndpointMap<Api, Context>>;
    /**
     * Raw mock-host `createHostContext` callback. The fetch wrapper handles the missing-callback
     * case (treats it as `{context: undefined}`) and forwards the per-request params for you.
     */
    createHostContext: MockCreateHostContext<Context> | undefined;
};

/**
 * Builds the `ClientFetch` function used by the mock host. The returned function intercepts every
 * endpoint request, runs the supplied `resolveContext`, dispatches to the matching mock
 * implementation, and packages the result into a real `Response`.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function createMockHostFetch<
    const Api extends Readonly<ApiDefinition>,
    const Context = unknown,
>({endpointImplementations, createHostContext}: MockHostFetchOptions<Api, Context>): ClientFetch {
    return async function mockFetch(
        ...[
            url,
            requestInit,
            endpoint,
        ]: Parameters<ClientFetch>
    ): Promise<Response> {
        try {
            const rawMethod = assertWrap.isDefined(
                requestInit.method,
                `Missing request init in mock fetch to endpoint '${endpoint.path}'.`,
            );
            /**
             * RestVirClient validates the method against the endpoint before calling this fetch
             * override, so there's no point in throwing specific errors here.
             */
            const method = assertWrap.isDefined(
                extractHttpMethod(rawMethod),
                `Invalid method received: '${rawMethod}'.`,
            );
            const methodDefinition = assertWrap.isDefined(
                extractEndpointMethodDefinition(endpoint, method),
                `Missing method definition for '${method}' on endpoint '${endpoint.path}'.`,
            );
            const methodImplementations: MockEndpointMethodImplementations | undefined =
                endpointImplementations[endpoint.path];
            const implementation = methodImplementations?.[method];

            if (!implementation) {
                return createMockResponse({
                    status: HttpStatus.NotImplemented,
                    body: `No mock '${method}' implementation provided for endpoint '${endpoint.path}'.`,
                });
            }

            const parsedUrl = parseUrl(url);
            const searchParams = extractSearchParams(
                methodDefinition.searchParams,
                parsedUrl.searchParams,
            );
            const pathParams = extractPathParamsFromUrl(endpoint, parsedUrl.paths);
            const requestHeaders = headersToObject(requestInit.headers);
            const requestData = await readRequestData(requestInit, requestHeaders);

            const contextOutput = await resolveMockHostContext(createHostContext, {
                searchParams,
                requestHeaders,
                method,
                requestData,
                endpointDefinition: endpoint,
                webSocketDefinition: undefined,
                url,
            });

            if (contextOutput.reject) {
                return createMockResponse({
                    status: contextOutput.reject.statusCode,
                    body: contextOutput.reject.responseData,
                    headers: consolidateHeaders(contextOutput.reject.headers || {}),
                });
            }

            const result: EndpointMethodImplementationOutput = await implementation({
                context: contextOutput.context,
                method,
                endpointDefinition: endpoint,
                requestHeaders,
                requestData,
                searchParams,
                pathParams,
                url,
            });

            return buildMockResponseFromResult(result);
        } catch (error) {
            return createMockResponse({
                status: HttpStatus.InternalServerError,
                body: extractErrorMessage(
                    ensureErrorAndPrependMessage(error, 'Mock endpoint implementation crashed.'),
                ),
            });
        }
    };
}

/**
 * Walk the endpoint's path template (e.g. `/users/:userId/items/*`) alongside the actual URL's path
 * segments (already produced by url-vir's `parseUrl(...).paths`), capturing each `:name` segment as
 * a named path param and any trailing `*` segments under the `wildcard` key. Returns `undefined`
 * for endpoints with no path params (matches the typed shape from `ExtractPathParams`).
 */
function extractPathParamsFromUrl(
    endpoint: Readonly<EndpointDefinition>,
    urlSegments: ReadonlyArray<string>,
): Record<string, string | undefined> | undefined {
    const templateSegments = parseUrl(endpoint.path).paths;
    const params: Record<string, string> = {};
    let hasAny = false;

    for (const [
        index,
        templateSegment,
    ] of templateSegments.entries()) {
        if (templateSegment === '*') {
            const wildcardValue = urlSegments.slice(index).join('/');
            if (wildcardValue) {
                params.wildcard = decodeURIComponent(wildcardValue);
                hasAny = true;
            }
            break;
        }
        if (templateSegment.startsWith(':')) {
            const value = urlSegments[index];
            if (value !== undefined) {
                params[templateSegment.slice(1)] = decodeURIComponent(value);
                hasAny = true;
            }
        }
    }

    return hasAny ? params : undefined;
}

async function readRequestData(
    requestInit: Readonly<RequestInit>,
    headers: Readonly<DefaultResponseHeadersType>,
): Promise<unknown> {
    const body = requestInit.body;
    if (body == undefined) {
        return undefined;
    } else if (body instanceof FormData) {
        return body;
    }
    return await readResponseBodyAsJsonOrText(new Response(body), headers);
}

function buildMockResponseFromResult(
    result: Readonly<EndpointMethodImplementationOutput>,
): Response {
    /** Do not use `getObjectTypedEntries` here as it will actually return the incorrect types. */
    const entries = Object.entries(result);

    if ('responseHandled' in result) {
        return createMockResponse({
            status: HttpStatus.NoContent,
        });
    }

    /**
     * Find the single entry whose key parses to a valid `HttpStatus`. Don't rely on
     * `Object.entries[0]` ordering for numeric-string keys (it varies by V8 internals).
     */
    const statusEntries = filterMap(
        entries,
        ([
            rawStatusKey,
            value,
        ]) => {
            const rawNumberStatusKey = Number(rawStatusKey);

            if (!check.isEnumValue(rawNumberStatusKey, HttpStatus)) {
                return undefined;
            }

            return {
                status: rawNumberStatusKey,
                value,
            };
        },
        check.isTruthy,
    );

    if (statusEntries.length !== 1 || !statusEntries[0]) {
        return createMockResponse({
            status: HttpStatus.InternalServerError,
            body:
                statusEntries.length === 0
                    ? 'Mock endpoint implementation must return exactly one status entry.'
                    : `Expected exactly one status code response key but got ${statusEntries.length}.`,
        });
    }

    const {status, value} = statusEntries[0];

    return createMockResponse({
        status,
        body: value.responseData,
        headers: value.headers,
    });
}
