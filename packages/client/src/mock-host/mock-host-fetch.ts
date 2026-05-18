import {assertWrap, check} from '@augment-vir/assert';
import {ensureErrorAndPrependMessage, extractErrorMessage, HttpStatus} from '@augment-vir/common';
import {
    consolidateHeaders,
    extractEndpointMethodDefinition,
    extractHttpMethod,
    headersToObject,
    type ApiDefinition,
    type DefaultResponseHeadersType,
    type EndpointMethodImplementationOutput,
} from '@rest-vir/api';
import {parseUrl} from 'url-vir';
import {readResponseBodyAsJsonOrText} from '../client.js';
import {type ClientFetch} from '../endpoint-fetch/endpoint-params.js';
import {createMockResponse} from '../endpoint-fetch/mock-fetch.js';
import {extractSearchParams} from '../search-params.js';
import {type MockEndpointMethodImplementations} from './mock-endpoint-implementation.js';
import {type MockCreateHostContext} from './mock-host-context.js';
import {resolveMockHostContext} from './mock-host-resolve-context.js';
import {type MockHostEndpointMap} from './mock-host-route-map.js';

/**
 * Options for {@link createMockHostFetch}.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
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
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
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

            const searchParams = extractSearchParams(
                methodDefinition.searchParams,
                parseUrl(url).searchParams,
            );
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

    if (!check.isLengthAtLeast(entries, 1)) {
        return createMockResponse({
            status: HttpStatus.InternalServerError,
            body: `Mock endpoint implementation must return exactly one status entry; got ${entries.length}.`,
        });
    }
    const [
        status,
        statusValue,
    ] = entries[0];

    if (status === 'responseHandled' || statusValue === true) {
        return createMockResponse({
            status: HttpStatus.NoContent,
        });
    }
    const numericStatus = Number(status);
    if (!check.isEnumValue(numericStatus, HttpStatus)) {
        throw new Error(`Invalid status returned by mock implementation: ${status}`);
    }

    return createMockResponse({
        status: numericStatus,
        body: statusValue.responseData,
        headers: statusValue.headers,
    });
}
