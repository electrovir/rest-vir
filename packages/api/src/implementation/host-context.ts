import {type BivariantFunction, type ErrorHttpStatus, type MaybePromise} from '@augment-vir/common';
import {type RequireExactlyOne} from 'type-fest';
import {
    type DefaultErrorResponseType,
    type DefinableHttpMethod,
    type EndpointDefinition,
} from '../api/endpoint.js';
import {type BaseSearchParams} from '../api/route.js';
import {type WebSocketDefinition} from '../api/web-socket.js';

/**
 * The portion of {@link CreateHostContextBase}'s parameters that's independent of the runtime
 * environment. Both host (server) `createHostContext` and client (mock-host) `createHostContext`
 * callbacks receive these fields; each side layers its own extras on top.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type BaseCreateHostContextParams = {
    searchParams: BaseSearchParams;
    requestHeaders: Readonly<Record<string, string | string[] | undefined>>;
    method: DefinableHttpMethod;
    requestData: unknown;
    endpointDefinition: Readonly<EndpointDefinition> | undefined;
    webSocketDefinition: Readonly<WebSocketDefinition> | undefined;
};

/**
 * The shape a `createHostContext` callback must return: either a resolved `context` value (the
 * request proceeds) or a `reject` instruction (the request short-circuits with the given status).
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type CreateHostContextOutput<HostContext> = RequireExactlyOne<{
    /** The context created for this request. */
    context: HostContext;
    /** Instead of creating a context object for the current request, reject the request. */
    reject: {
        statusCode: ErrorHttpStatus;
        responseData?: DefaultErrorResponseType;
        headers?: Readonly<Record<string, string | string[] | undefined>> | undefined;
    };
}>;

/**
 * Generic `createHostContext` callback shape. Both host and client (mock-host) reuse this by
 * supplying their own `ExtraParams` (the environment-specific parameters layered onto the shared
 * {@link BaseCreateHostContextParams}).
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type CreateHostContextBase<HostContext, ExtraParams = unknown> = BivariantFunction<
    [BaseCreateHostContextParams & ExtraParams],
    MaybePromise<CreateHostContextOutput<HostContext>>
>;
