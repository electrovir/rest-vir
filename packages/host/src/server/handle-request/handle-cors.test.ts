import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {AnyOrigin, defineApi, defineEndpoint, type OriginRequirement} from '@rest-vir/api';
import {restVirApiNameHeader} from '@rest-vir/client';
import {implementApi} from '../../implementation/implement-api.js';
import {createApiImplementor} from '../../implementation/implementor.js';
import {silentServerLogger} from '../../implementation/server-logger.js';
import {handleCors} from './handle-cors.js';

function buildScenario({
    endpointOriginRequirement,
    apiOriginRequirement,
}: {
    endpointOriginRequirement?: OriginRequirement | undefined;
    apiOriginRequirement?: OriginRequirement | undefined;
} = {}) {
    const endpoint = defineEndpoint({
        path: '/example-path',
        requests: {
            [HttpMethod.Get]: {
                responses: {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                },
                ...(endpointOriginRequirement
                    ? {
                          clientOriginRequirement: endpointOriginRequirement,
                      }
                    : {}),
            },
        },
    });

    const api = defineApi({
        apiName: 'example api',
        endpoints: [endpoint],
        webSockets: [],
    });

    const implementor = createApiImplementor<undefined>()(api);

    const endpointImplementation = implementor.implementEndpoint(endpoint, {
        [HttpMethod.Get]() {
            return {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            };
        },
    });

    const apiImplementation = implementApi<undefined>()(api, {
        createHostContext() {
            return {
                context: undefined,
            };
        },
        ...(apiOriginRequirement
            ? {
                  clientOriginRequirement: apiOriginRequirement,
              }
            : {}),
        endpoints: {
            '/example-path': endpointImplementation,
        },
    });

    return {
        endpointImplementation,
        apiImplementation,
    };
}

function buildRequest(origin: string | undefined, method: HttpMethod = HttpMethod.Get) {
    return {
        headers: {
            origin,
        },
        method,
        originalUrl: '/example-path',
    } as never;
}

describe(handleCors.name, () => {
    it('rejects a mismatched api origin', async () => {
        const {endpointImplementation, apiImplementation} = buildScenario({
            apiOriginRequirement: 'https://example.com',
        });

        assert.deepEquals(
            await handleCors({
                api: apiImplementation,
                serverLogger: silentServerLogger,
                request: buildRequest('http://example.com'),
                route: endpointImplementation,
            }),
            {
                statusCode: HttpStatus.Forbidden,
            },
        );
    });

    it('matches an api origin', async () => {
        const {endpointImplementation, apiImplementation} = buildScenario({
            apiOriginRequirement: 'http://example.com',
        });

        assert.deepEquals(
            await handleCors({
                api: apiImplementation,
                serverLogger: silentServerLogger,
                request: buildRequest('http://example.com'),
                route: endpointImplementation,
            }),
            {
                headers: {
                    'Access-Control-Allow-Origin': 'http://example.com',
                    'Access-Control-Allow-Credentials': 'true',
                    Vary: 'Origin',
                    'Access-Control-Expose-Headers': restVirApiNameHeader,
                },
            },
        );
    });

    it('allows any origin override on the endpoint', async () => {
        const {endpointImplementation, apiImplementation} = buildScenario({
            endpointOriginRequirement: {
                anyOrigin: true,
            },
            apiOriginRequirement: 'https://example.com',
        });

        assert.deepEquals(
            await handleCors({
                api: apiImplementation,
                serverLogger: silentServerLogger,
                request: buildRequest('http://example.com'),
                route: endpointImplementation,
            }),
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Expose-Headers': restVirApiNameHeader,
                },
            },
        );
    });

    it('falls back to any origin when nothing is required', async () => {
        const {endpointImplementation, apiImplementation} = buildScenario();

        assert.deepEquals(
            await handleCors({
                api: apiImplementation,
                serverLogger: silentServerLogger,
                request: buildRequest('http://example.com'),
                route: endpointImplementation,
            }),
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Expose-Headers': restVirApiNameHeader,
                },
            },
        );
    });

    it('handles an OPTIONS preflight with matched origin', async () => {
        const {endpointImplementation, apiImplementation} = buildScenario({
            apiOriginRequirement: 'http://example.com',
        });

        const result = await handleCors({
            api: apiImplementation,
            serverLogger: silentServerLogger,
            request: buildRequest('http://example.com', HttpMethod.Options),
            route: endpointImplementation,
        });

        assert.strictEquals(result?.statusCode, HttpStatus.NoContent);
        assert.strictEquals(result.headers?.['Access-Control-Allow-Origin'], 'http://example.com');
        assert.strictEquals(result.headers['Access-Control-Allow-Methods'], 'GET,OPTIONS');
    });

    it('handles an OPTIONS preflight with mismatched origin', async () => {
        const {endpointImplementation, apiImplementation} = buildScenario({
            apiOriginRequirement: 'https://example.com',
        });

        const result = await handleCors({
            api: apiImplementation,
            serverLogger: silentServerLogger,
            request: buildRequest('http://example.com', HttpMethod.Options),
            route: endpointImplementation,
        });

        assert.strictEquals(result?.statusCode, HttpStatus.NoContent);
        /** No CORS-allow headers; just the content-length sentinel. */
        assert.strictEquals(result.headers?.['Content-Length'], '0');
        assert.isUndefined(result.headers['Access-Control-Allow-Origin']);
    });

    it('uses the AnyOrigin literal', () => {
        assert.strictEquals(AnyOrigin, '*');
    });

    it('rejects when the endpoint origin requirement returns false', async () => {
        const {endpointImplementation, apiImplementation} = buildScenario({
            endpointOriginRequirement: 'https://only-this.example.com',
        });

        assert.deepEquals(
            await handleCors({
                api: apiImplementation,
                serverLogger: silentServerLogger,
                request: buildRequest('http://example.com'),
                route: endpointImplementation,
            }),
            {
                statusCode: HttpStatus.Forbidden,
            },
        );
    });

    it('matches when the endpoint origin requirement callback returns true', async () => {
        const {endpointImplementation, apiImplementation} = buildScenario({
            endpointOriginRequirement: () => true,
        });

        assert.deepEquals(
            await handleCors({
                api: apiImplementation,
                serverLogger: silentServerLogger,
                request: buildRequest('http://example.com'),
                route: endpointImplementation,
            }),
            {
                headers: {
                    'Access-Control-Allow-Origin': 'http://example.com',
                    'Access-Control-Allow-Credentials': 'true',
                    Vary: 'Origin',
                    'Access-Control-Expose-Headers': restVirApiNameHeader,
                },
            },
        );
    });

    it('returns AnyOrigin when origin is undefined and the endpoint callback returns true', async () => {
        const {endpointImplementation, apiImplementation} = buildScenario({
            endpointOriginRequirement: () => true,
        });

        const result = await handleCors({
            api: apiImplementation,
            serverLogger: silentServerLogger,
            request: buildRequest(undefined),
            route: endpointImplementation,
        });

        assert.strictEquals(result?.headers?.['Access-Control-Allow-Origin'], '*');
    });

    it('returns AnyOrigin when origin is undefined and the api callback returns true', async () => {
        const {endpointImplementation, apiImplementation} = buildScenario({
            apiOriginRequirement: () => true,
        });

        const result = await handleCors({
            api: apiImplementation,
            serverLogger: silentServerLogger,
            request: buildRequest(undefined),
            route: endpointImplementation,
        });

        assert.strictEquals(result?.headers?.['Access-Control-Allow-Origin'], '*');
    });

    it('includes custom headers in the OPTIONS preflight response', async () => {
        const endpoint = defineEndpoint({
            path: '/example-path',
            requests: {
                [HttpMethod.Get]: {
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: undefined,
                        },
                    },
                },
            },
        });

        const api = defineApi({
            apiName: 'example api',
            endpoints: [endpoint],
            webSockets: [],
        });

        const implementor = createApiImplementor<undefined>()(api);

        const endpointImplementation = implementor.implementEndpoint(endpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        });

        const apiImplementation = implementApi<undefined>()(api, {
            createHostContext() {
                return {
                    context: undefined,
                };
            },
            customHeaders: [
                'X-Custom-One',
                'X-Custom-Two',
            ],
            clientOriginRequirement: {
                anyOrigin: true,
            },
            endpoints: {
                '/example-path': endpointImplementation,
            },
        });

        const result = await handleCors({
            api: apiImplementation,
            serverLogger: silentServerLogger,
            request: buildRequest('http://example.com', HttpMethod.Options),
            route: endpointImplementation,
        });

        const allowHeaders = String(result?.headers?.['Access-Control-Allow-Headers']);
        assert.isTrue(allowHeaders.includes('X-Custom-One'));
        assert.isTrue(allowHeaders.includes('X-Custom-Two'));
    });
});
