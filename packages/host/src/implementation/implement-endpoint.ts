import {
    type BaseEndpointMethodImplementationParams,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type EndpointImplementationBase,
    type EndpointMethodImplementationsBase,
    type NoParam,
} from '@rest-vir/api';
import {type RunningServerInfo, type ServerRequest, type ServerResponse} from './raw-route-data.js';
import {type ServerLogger} from './server-logger.js';

/**
 * Environment-specific extras that the fastify-backed host adds on top of
 * {@link BaseEndpointMethodImplementationParams} for every endpoint method implementation.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type HostEndpointParamsExtras = {
    serverLogger: ServerLogger;
    request: ServerRequest;
    response: ServerResponse;
    server: RunningServerInfo;
};

/**
 * Parameters passed into an endpoint method implementation on the host (fastify-backed) side.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type EndpointMethodImplementationParams<
    Endpoint extends Readonly<EndpointDefinition> | NoParam = NoParam,
    Method extends Readonly<DefinableHttpMethod> | NoParam = NoParam,
    HostContext = unknown,
> = BaseEndpointMethodImplementationParams<Endpoint, Method, HostContext> &
    HostEndpointParamsExtras;

/**
 * Implementation record for an endpoint's methods on the host (fastify-backed) side.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type EndpointMethodImplementations<
    Endpoint extends EndpointDefinition | NoParam = NoParam,
    HostContext = unknown,
> = EndpointMethodImplementationsBase<Endpoint, HostContext, HostEndpointParamsExtras>;

/**
 * Implementation envelope for a single endpoint on the host (fastify-backed) side.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type EndpointImplementation<
    Endpoint extends Readonly<EndpointDefinition> | NoParam = NoParam,
    HostContext = unknown,
> = EndpointImplementationBase<Endpoint, HostContext, HostEndpointParamsExtras>;
