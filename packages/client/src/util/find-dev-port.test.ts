import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus, wait} from '@augment-vir/common';
import {describe, it, itCases} from '@augment-vir/test';
import {defineEndpoint} from '@rest-vir/api';
import {parseUrl} from 'url-vir';
import {findDevServicePort, findLivePort} from './find-dev-port.js';

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

describe(findDevServicePort.name, () => {
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

        await findDevServicePort(
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

                    if (fetchPort === workingPort) {
                        return Promise.resolve({
                            headers: {
                                get() {
                                    return 'test service';
                                },
                            },
                            ok: true,
                        } as unknown as Response);
                    } else {
                        return Promise.resolve({
                            headers: {
                                get() {
                                    return 'test service';
                                },
                            },
                            ok: false,
                        } as unknown as Response);
                    }
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
                findDevServicePort(
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
                matchMessage: 'Service has no endpoints',
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

                    if (fetchPort === 3002) {
                        return Promise.resolve({
                            ok: true,
                        } as unknown as Response);
                    } else {
                        return Promise.resolve({
                            ok: false,
                        } as unknown as Response);
                    }
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
                        return Promise.resolve({
                            ok: false,
                        } as unknown as Response);
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
                return Promise.resolve({
                    ok: true,
                } as unknown as Response);
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

                        return {
                            ok: false,
                        } as unknown as Response;
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
});
