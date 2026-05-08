import {type DefinableHttpMethod} from '@rest-vir/api';
import {type EndpointFetchParams} from '@rest-vir/client';
import {type EndpointImplementation} from '../../implementation/implement-endpoint.js';
import {testApi} from './test-api.js';

/**
 * The type definition for {@link testEndpoint}.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type TestEndpoint = <
    Endpoint extends EndpointImplementation,
    Method extends Extract<keyof NoInfer<Endpoint>['definition']['requests'], DefinableHttpMethod>,
>(
    endpoint: Endpoint,
    method: Method,
    ...args: EndpointFetchParams<NoInfer<Endpoint['definition']>, NoInfer<Method>>
) => Promise<Response>;

/**
 * Test your endpoint with real Request and Response objects.
 *
 * @category Testing : Backend
 * @category Package : @rest-vir/run-service
 * @example
 *
 * ```ts
 * import {testEndpoint} from '@rest-vir/run-service';
 *
 * const response = await testEndpoint(myServiceImplementation.endpoints['/my-endpoint']);
 * ```
 *
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export const testEndpoint = async function testEndpoint<
    const Endpoint extends EndpointImplementation,
    const Method extends Extract<
        keyof NoInfer<Endpoint>['definition']['requests'],
        DefinableHttpMethod
    >,
>(
    endpoint: Endpoint,
    method: Method,
    ...args: EndpointFetchParams<NoInfer<Endpoint['definition']>, NoInfer<Method>>
) {
    const {fetchEndpoint, kill} = await testApi(
        {
            ...endpoint.service,
            endpoints: {
                [endpoint.path]: endpoint,
            },
            webSockets: {},
        },
        {
            debug: true,
        },
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const response = await fetchEndpoint[endpoint.path]!(...args);

    await kill();

    return response;
} as TestEndpoint;
