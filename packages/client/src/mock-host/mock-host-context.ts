import {type BaseCreateHostContextParams, type CreateHostContextBase} from '@rest-vir/api';

/**
 * Environment-specific extras that the mock-host adds on top of {@link BaseCreateHostContextParams}
 * for its `createHostContext` callback.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type MockCreateHostContextParamsExtras = {
    /** The URL the client requested, exactly as it was passed to the mocked `fetch` function. */
    url: string;
};

/**
 * The `createHostContext` callback shape on the mock-host side. Returns either a resolved context
 * (`{context}`) or a rejection (`{reject}`), exactly mirroring the host package's callback so the
 * same implementation can be reused on both sides.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
 */
export type MockCreateHostContext<HostContext> = CreateHostContextBase<
    HostContext,
    MockCreateHostContextParamsExtras
>;
