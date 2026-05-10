import {type DefinableHttpMethod} from '@rest-vir/api';
import {type EndpointFetchParams} from '@rest-vir/client';
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
 *
 * const response = await testEndpoint(
 *     myApiImplementation.implementation.endpoints['/my-endpoint'],
 *     HttpMethod.Get,
 * );
 * ```
 *
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export async function testEndpoint<
    const Endpoint extends Readonly<EndpointImplementation>,
    const Method extends Extract<
        keyof NoInfer<Endpoint>['definition']['requests'],
        DefinableHttpMethod
    >,
>(
    endpoint: Readonly<Endpoint>,
    method: Method,
    ...restParams: EndpointFetchParams<NoInfer<Endpoint>['definition'], NoInfer<Method>>
) {
    const {fetchEndpoint, kill} = await testApi({
        definition: {
            apiName: 'testEndpoint',
            endpoints: {
                [endpoint.path]: endpoint.definition,
            },
            webSockets: {},
        },
        implementation: {
            endpoints: {
                [endpoint.path]: endpoint,
            },
            webSockets: {},
        },
    });

    try {
        return await fetchEndpoint(endpoint.definition, method, ...restParams);
    } finally {
        await kill();
    }
}
