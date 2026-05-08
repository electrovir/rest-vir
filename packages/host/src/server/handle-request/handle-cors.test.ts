import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {AnyOrigin} from '@rest-vir/api';
import {handleCors} from './handle-cors.js';

describe(handleCors.name, () => {
    it('rejects an undefined service origin', async () => {
        await assert.throws(
            () =>
                handleCors({
                    request: {
                        headers: {
                            origin: 'http://example.com',
                        },
                        method: HttpMethod.Get,
                        originalUrl: 'some path',
                    },
                    route: {
                        path: '/example-path',
                        isEndpoint: true,
                        isWebSocket: false,
                        methods: {
                            [HttpMethod.Get]: true,
                        },
                        service: {
                            // @ts-expect-error: this cannot be `undefined` in the service
                            requiredClientOrigin: undefined,
                            serviceName: 'example service',
                        },
                    },
                }),
            {
                matchMessage: 'failed to get checked for endpoint',
            },
        );
    });
    it('rejects a mismatched service origin', async () => {
        assert.deepEquals(
            await handleCors({
                request: {
                    headers: {
                        origin: 'http://example.com',
                    },
                    method: HttpMethod.Get,
                    originalUrl: 'some path',
                },
                route: {
                    path: '/example-path',
                    isEndpoint: true,
                    isWebSocket: false,
                    methods: {
                        [HttpMethod.Get]: true,
                    },
                    service: {
                        requiredClientOrigin: 'https://example.com',
                        serviceName: 'example service',
                        logger: defaultServiceLogger,
                        customHeaders: [],
                    },
                },
            }),
            {
                statusCode: HttpStatus.Forbidden,
            },
        );
    });
    it('matches a service origin', async () => {
        assert.deepEquals(
            await handleCors({
                request: {
                    headers: {
                        origin: 'http://example.com',
                    },
                    method: HttpMethod.Get,
                    originalUrl: 'some path',
                },
                route: {
                    path: '/example-path',
                    isEndpoint: true,
                    isWebSocket: false,
                    methods: {
                        [HttpMethod.Get]: true,
                    },
                    service: {
                        requiredClientOrigin: 'http://example.com',
                        serviceName: 'example service',
                        logger: defaultServiceLogger,
                        customHeaders: [],
                    },
                },
            }),
            {
                headers: {
                    'Access-Control-Allow-Origin': 'http://example.com',
                    'Access-Control-Allow-Credentials': 'true',
                    Vary: 'Origin',
                    'Access-Control-Expose-Headers': restVirServiceNameHeader,
                },
            },
        );
    });
    it('allows any origin override in endpoint', async () => {
        assert.deepEquals(
            await handleCors({
                request: {
                    headers: {
                        origin: 'http://example.com',
                    },
                    method: HttpMethod.Get,
                    originalUrl: 'some path',
                },
                route: {
                    path: '/example-path',
                    isEndpoint: true,
                    isWebSocket: false,
                    methods: {
                        [HttpMethod.Get]: true,
                    },
                    service: {
                        requiredClientOrigin: 'https://example.com',
                        serviceName: 'example service',
                        logger: defaultServiceLogger,
                        customHeaders: [],
                    },
                    requiredClientOrigin: AnyOrigin,
                },
            }),
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Expose-Headers': restVirServiceNameHeader,
                },
            },
        );
    });
});
