import {
    type EndpointDefinition,
    type EndpointImplementationBase,
    type EndpointMethodImplementationsBase,
    type NoParam,
} from '@rest-vir/api';

/**
 * Extras that mock endpoint implementations receive on top of the shared base params.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type MockEndpointParamsExtras = {
    /** The URL the client requested, exactly as it was passed to the mocked `fetch` function. */
    url: string;
};

/**
 * Implementation record for an endpoint's methods on the client (mock) side. Every method is
 * optional. A mock host may implement only the subset of methods it cares about. Requests for an
 * unimplemented method return HTTP 501 Not Implemented.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type MockEndpointMethodImplementations<
    Endpoint extends EndpointDefinition | NoParam = NoParam,
    Context = unknown,
> = Partial<EndpointMethodImplementationsBase<Endpoint, Context, MockEndpointParamsExtras>>;

/**
 * Implementation envelope for a single endpoint on the client (mock) side.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type MockEndpointImplementation<
    Endpoint extends Readonly<EndpointDefinition> | NoParam = NoParam,
    Context = unknown,
> = EndpointImplementationBase<Endpoint, Context, MockEndpointParamsExtras>;
