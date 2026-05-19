import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus, wait} from '@augment-vir/common';
import {describe, it, itCases} from '@augment-vir/test';
import {defineEndpoint} from '@rest-vir/api';
import type {AnyDuration} from 'date-vir';
import {parseUrl} from 'url-vir';
import {createMockResponse} from '../endpoint-fetch/mock-fetch.js';
import {
    findDevServerPort,
    findLivePort,
    restVirApiNameHeader,
    type FindPortOptions,
} from './find-dev-port.js';

const testEndpoint = defineEndpoint({
    path: '/test',
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

describe(findDevServerPort.name, () => {
    async function testFindDevServicePort({
        origin,
        workingPort,
        maxScanDistance,
    }: {
        origin: string;
        workingPort: number;
        maxScanDistance?: number | undefined;
    }) {
        const fetchedPorts: number[] = [];

        await findDevServerPort(
            {
                apiName: 'test service',
                endpoints: {
                    '/test': testEndpoint,
                },
                webSockets: {},
            },
            {
                startOrigin: origin,
                fetchOverride(url) {
                    const {port} = parseUrl(url);
                    const fetchPort = Number(port);
                    fetchedPorts.push(fetchPort);

                    return createMockResponse({
                        headers: {
                            [restVirApiNameHeader]: 'test service',
                        },
                        status:
                            fetchPort === workingPort
                                ? HttpStatus.Ok
                                : HttpStatus.InternalServerError,
                    });
                },
                maxScanDistance,
            },
        );

        return fetchedPorts;
    }

    itCases(testFindDevServicePort, [
        {
            it: 'finds the first port',
            input: {
                origin: 'localhost:3000',
                workingPort: 3000,
            },
            expect: [
                3000,
            ],
        },
        {
            it: 'finds a different port',
            input: {
                origin: 'localhost:3000',
                workingPort: 3003,
            },
            expect: [
                3000,
                3001,
                3002,
                3003,
            ],
        },
        {
            it: 'does not exceed max scan distance',
            input: {
                origin: 'localhost:3000',
                workingPort: 3003,
                maxScanDistance: 1,
            },
            throws: {
                matchMessage: 'Last scanned port: 3001',
            },
        },
        {
            it: 'ignores an origin without a port',
            input: {
                origin: 'localhost',
                workingPort: 3003,
                maxScanDistance: 1,
            },
            expect: [],
        },
        {
            it: 'rejects an invalid port',
            input: {
                origin: 'localhost:blah',
                workingPort: 3003,
                maxScanDistance: 1,
            },
            throws: {
                matchMessage: "doesn't have a valid port",
            },
        },
    ]);

    it('rejects a service without endpoints', async () => {
        await assert.throws(
            () =>
                findDevServerPort(
                    {
                        apiName: '',
                        endpoints: {},
                        webSockets: {},
                    },
                    {
                        startOrigin: '',
                    },
                ),
            {
                matchMessage: 'Api has no endpoints',
            },
        );
    });
});

describe(findLivePort.name, () => {
    it('does not require a isValidResponse option', async () => {
        assert.strictEquals(
            await findLivePort('localhost:3000', testEndpoint, {
                fetchOverride(url) {
                    const {port} = parseUrl(url);
                    const fetchPort = Number(port);

                    return createMockResponse({
                        status: fetchPort === 3002 ? HttpStatus.Ok : HttpStatus.InternalServerError,
                    });
                },
                maxScanDistance: 10,
            }),
            3002,
        );
    });
    it('rejects an invalid (non-numeric) port', async () => {
        await assert.throws(
            () =>
                findLivePort('localhost:not-a-number', testEndpoint, {
                    fetchOverride() {
                        return createMockResponse({
                            status: HttpStatus.InternalServerError,
                        });
                    },
                    maxScanDistance: 1,
                }),
            {
                matchMessage: "doesn't have a valid port",
            },
        );
    });

    it('uses the global fetch when fetchOverride is omitted', async () => {
        await assert.throws(
            () =>
                findLivePort('http://127.0.0.1:1', testEndpoint, {
                    maxScanDistance: 0,
                    timeout: {
                        milliseconds: 500,
                    },
                }),
            {
                matchMessage: /Max port scan distance|timeout/i,
            },
        );
    });

    it('returns undefined when origin has no port', async () => {
        const result = await findLivePort('localhost', testEndpoint, {
            fetchOverride() {
                return createMockResponse();
            },
            maxScanDistance: 1,
        });
        assert.isUndefined(result);
    });
    it('times out', async () => {
        await assert.throws(
            () =>
                findLivePort('localhost:3000', testEndpoint, {
                    async fetchOverride() {
                        await wait({
                            milliseconds: 10,
                        });

                        return createMockResponse({
                            status: HttpStatus.InternalServerError,
                        });
                    },
                    maxScanDistance: 10_000,
                    timeout: {
                        milliseconds: 100,
                    },
                }),
            {
                matchMessage: 'Port scan timeout reached',
            },
        );
    });

    it('skips ports whose isValidResponse callback returns false', async () => {
        let calls = 0;
        const port = await findLivePort('localhost:3000', testEndpoint, {
            fetchOverride() {
                calls++;
                return createMockResponse();
            },
            isValidResponse(response) {
                return response.ok && calls >= 2;
            },
            maxScanDistance: 5,
        });
        assert.strictEquals(port, 3001);
    });

    it('throws Max port scan distance when nothing valid is found', async () => {
        await assert.throws(
            () =>
                findLivePort('localhost:3000', testEndpoint, {
                    fetchOverride() {
                        return createMockResponse({
                            status: HttpStatus.InternalServerError,
                        });
                    },
                    maxScanDistance: 2,
                }),
            {
                matchMessage: 'Max port scan distance reached',
            },
        );
    });

    it('treats a thrown fetchOverride as a non-match and keeps scanning', async () => {
        let attempt = 0;
        const port = await findLivePort('localhost:3000', testEndpoint, {
            fetchOverride() {
                attempt++;
                if (attempt < 3) {
                    throw new Error('boom');
                }
                return createMockResponse();
            },
            maxScanDistance: 5,
        });
        assert.strictEquals(port, 3002);
    });
});

describe('restVirApiNameHeader', () => {
    it('has the canonical rest-vir-api header name', () => {
        assert.strictEquals(restVirApiNameHeader, 'rest-vir-api');
    });

    it('uses the value set on the rest-vir-api header to match the apiName', async () => {
        const apiWithName = {
            apiName: 'special-api-name',
            endpoints: {
                '/test': testEndpoint,
            },
            webSockets: {},
        };

        const result = await findDevServerPort(apiWithName, {
            startOrigin: 'localhost:3000',
            fetchOverride() {
                return createMockResponse({
                    headers: {
                        [restVirApiNameHeader]: 'special-api-name',
                    },
                });
            },
            maxScanDistance: 0,
        });
        assert.deepEquals(result, {
            port: 3000,
            origin: 'localhost:3000',
        });
    });

    it('rejects a port whose rest-vir-api header does not match the apiName', async () => {
        const apiWithName = {
            apiName: 'special-api-name',
            endpoints: {
                '/test': testEndpoint,
            },
            webSockets: {},
        };

        await assert.throws(
            () =>
                findDevServerPort(apiWithName, {
                    startOrigin: 'localhost:3000',
                    fetchOverride() {
                        return createMockResponse({
                            headers: {
                                [restVirApiNameHeader]: 'a-different-api',
                            },
                        });
                    },
                    maxScanDistance: 0,
                    timeout: {
                        milliseconds: 250,
                    },
                }),
            {
                matchMessage: 'special-api-name',
            },
        );
    });
});

describe('FindPortOptions', () => {
    it('requires startOrigin', () => {
        const options: FindPortOptions = {
            startOrigin: 'localhost:3000',
        };
        assert.strictEquals(options.startOrigin, 'localhost:3000');
    });

    it('accepts a maxScanDistance, isValidResponse, timeout, and fetchOverride', () => {
        const options: FindPortOptions = {
            startOrigin: 'localhost:3000',
            maxScanDistance: 25,
            isValidResponse: () => true,
            timeout: {
                seconds: 3,
            } satisfies AnyDuration,
            fetchOverride: () => createMockResponse(),
        };
        assert.strictEquals(options.maxScanDistance, 25);
    });

    it('makes everything but startOrigin optional', () => {
        assert
            .tsType<keyof FindPortOptions>()
            .equals<
                'startOrigin' | 'fetchOverride' | 'maxScanDistance' | 'isValidResponse' | 'timeout'
            >();
    });
});
