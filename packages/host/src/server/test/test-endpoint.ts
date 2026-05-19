import {defineApi, type DefinableHttpMethod, type EndpointDefinition} from '@rest-vir/api';
import {type EndpointFetchParams} from '@rest-vir/client';
import {type CreateHostContext} from '../../implementation/host-context.js';
import {implementApi} from '../../implementation/implement-api.js';
import {type EndpointImplementation} from '../../implementation/implement-endpoint.js';
import {testApi} from './test-api.js';

/**
 * Test your endpoint with real Request and Response objects.
 *
 * @category Testing : Backend
 * @category Package : @rest-vir/host
 * @example
 *
 * ```ts
 * import {testEndpoint} from '@rest-vir/host';
 * import {HttpMethod} from '@rest-vir/api';
 *
 * const response = await testEndpoint(
 *     myApiImplementation.implementation.endpoints['/my-endpoint'],
 *     HttpMethod.Get,
 *     () => ({context: undefined}),
 * );
 * ```
 *
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export async function testEndpoint<
    const HostContext,
    const Endpoint extends Readonly<EndpointImplementation<EndpointDefinition, HostContext>>,
    const Method extends Extract<
        keyof NoInfer<Endpoint>['definition']['requests'],
        DefinableHttpMethod
    >,
>(
    endpoint: Readonly<Endpoint>,
    method: Method,
    createHostContext: CreateHostContext<HostContext>,
    ...restParams: EndpointFetchParams<NoInfer<Endpoint>['definition'], NoInfer<Method>>
) {
    const apiDefinition = defineApi({
        apiName: `endpoint-test-${endpoint.path}`,
        endpoints: [endpoint.definition],
    });
    const apiImplementation = implementApi<HostContext>()(apiDefinition, {
        createHostContext,
        endpoints: {
            [endpoint.path]: endpoint,
        },
    });

    const {fetchEndpoint, kill} = await testApi(apiImplementation);

    try {
        return await fetchEndpoint(endpoint.definition, method, ...restParams);
    } finally {
        await kill();
    }
}
