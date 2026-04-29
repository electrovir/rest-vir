import {testEndpoint} from './test-endpoint.js';
import {condenseResponse} from './test-service.js';

describe(testEndpoint.name, () => {
    it('tests a basic endpoint', async () => {
        const response = await testEndpoint(mockServiceImplementation.endpoints['/empty']);

        assert.deepEquals(await condenseResponse(response), {
            headers: {
                'access-control-allow-origin': '*',
                'access-control-expose-headers': restVirServiceNameHeader,
            },
            status: HttpStatus.Accepted,
        });
    });
    it('tests a failed response', async () => {
        const response = await testEndpoint(
            mockServiceImplementation.endpoints['/test'],
            // @ts-expect-error: params are required for the request body
            {},
        );

        assert.deepEquals(await condenseResponse(response), {
            headers: {
                'access-control-allow-origin': '*',
                'content-type': 'text/plain; charset=utf-8',
                'access-control-expose-headers': restVirServiceNameHeader,
            },
            status: HttpStatus.BadRequest,
            body: 'Invalid body.',
        });
    });
    it('handles an internal error', async () => {
        const response = await testEndpoint(mockServiceImplementation.endpoints['/throws-error']);

        assert.deepEquals(await condenseResponse(response), {
            headers: {
                'access-control-allow-origin': '*',
                'access-control-expose-headers': restVirServiceNameHeader,
            },
            status: HttpStatus.InternalServerError,
        });
    });
    it('tests a post request', async () => {
        const response = await testEndpoint(mockServiceImplementation.endpoints['/test'], {
            requestData: {
                somethingHere: 'hi',
                testValue: -1,
            },
        });

        assert.deepEquals(await condenseResponse(response), {
            headers: {
                'access-control-allow-origin': '*',
                'content-type': 'application/json; charset=utf-8',
                'access-control-expose-headers': restVirServiceNameHeader,
            },
            status: HttpStatus.Accepted,
            body: JSON.stringify({
                requestData: {
                    somethingHere: 'hi',
                    testValue: -1,
                },
                result: 4,
            } satisfies (typeof mockServiceImplementation.endpoints)['/test']['ResponseType']),
        });
    });
    it('fails a wrong method', async () => {
        await assert.throws(
            () =>
                testEndpoint(mockServiceImplementation.endpoints['/test'], {
                    requestData: {
                        somethingHere: 'hi',
                        testValue: -1,
                    },
                    // @ts-expect-error: incorrect method
                    method: HttpMethod.Get,
                }),
            {
                matchMessage: "Given HTTP method 'GET' is not allowed for endpoint",
            },
        );
    });
    it('requires path params', async () => {
        await assert.throws(
            () =>
                // @ts-expect-error: this endpoint is missing its path params
                testEndpoint(mockServiceImplementation.endpoints['/with/:param1/:param2'], {
                    method: HttpMethod.Get,
                }),
            {
                matchMessage: 'Missing value for path param',
            },
        );
    });
    it('requires wildcard', async () => {
        await assert.throws(
            () =>
                // @ts-expect-error: this endpoint is missing its wildcard
                testEndpoint(mockServiceImplementation.endpoints['/with/:param1/:param2/*'], {
                    pathParams: {
                        param1: 'hi',
                        param2: 'bye',
                    },
                }),
            {
                matchMessage: 'Missing value for wildcard param',
            },
        );

        /** Accepts empty string wildcard. */
        await testEndpoint(mockServiceImplementation.endpoints['/with/:param1/:param2/*'], {
            pathParams: {
                param1: 'hi',
                param2: 'bye',
            },
            wildcard: '',
        });
    });
    it('handles wildcard', async () => {
        const response = await testEndpoint(
            mockServiceImplementation.endpoints['/with/:param1/:param2/*'],
            {
                pathParams: {
                    param1: 'hi',
                    param2: 'bye',
                },
                wildcard: 'yo',
            },
        );

        assert.deepEquals(await condenseResponse(response), {
            headers: {
                'access-control-allow-origin': '*',
                'content-type': 'application/json; charset=utf-8',
                'access-control-expose-headers': restVirServiceNameHeader,
            },
            status: HttpStatus.Ok,
            body: JSON.stringify({
                pathParams: {
                    param1: 'hi',
                    param2: 'bye',
                },
                wildcard: 'yo',
            }),
        });
    });
});
