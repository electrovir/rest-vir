import {type CreateHostContextOutput} from '@rest-vir/api';
import {type MockCreateHostContext} from './mock-host-context.js';

/**
 * Run a mock-host `createHostContext` callback (if supplied) and return its output. When the caller
 * hasn't provided a callback, falls back to a `{context: undefined}` output so downstream code can
 * treat the absence the same as the success case.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export async function resolveMockHostContext<Context>(
    createHostContext: MockCreateHostContext<Context> | undefined,
    contextParams: Parameters<MockCreateHostContext<Context>>[0],
): Promise<CreateHostContextOutput<Context>> {
    if (!createHostContext) {
        return {
            context: undefined as Context,
        } as CreateHostContextOutput<Context>;
    }
    return await createHostContext(contextParams);
}
