import {type BaseCreateHostContextParams, type CreateHostContextBase} from '@rest-vir/api';
import {type ApiImplementation} from './implement-api.js';
import {type RunningServerInfo, type ServerRequest, type ServerResponse} from './raw-route-data.js';

/**
 * Environment-specific extras that the fastify-backed host adds on top of
 * {@link BaseCreateHostContextParams} for its `createHostContext` callback.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type HostCreateContextParamsExtras = {
    api: ApiImplementation;
    request: ServerRequest;
    response: ServerResponse;
    server: RunningServerInfo;
};

export type CreateHostContext<HostContext> = CreateHostContextBase<
    HostContext,
    HostCreateContextParamsExtras
>;

export type CreateHostContextParams = BaseCreateHostContextParams & HostCreateContextParamsExtras;
