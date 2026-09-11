import {assert} from '@augment-vir/assert';
import {describe, it, itCases} from '@augment-vir/test';
import {checkValidShape} from 'object-shape-tester';
import {finalizeOptions, runApiOptionsShape} from './run-api-options.js';

const operationalDefaults = {
    bodyLimit: runApiOptionsShape.default.bodyLimit,
    connectionTimeout: runApiOptionsShape.default.connectionTimeout,
    keepAliveTimeout: runApiOptionsShape.default.keepAliveTimeout,
    requestTimeout: runApiOptionsShape.default.requestTimeout,
    webSocketMaxPayload: runApiOptionsShape.default.webSocketMaxPayload,
    trustProxy: undefined,
    excludedErrorSearchParams: undefined,
};

describe(finalizeOptions.name, () => {
    itCases(finalizeOptions, [
        {
            it: 'uses a service origin',
            inputs: [
                'http://localhost:4000',
                {
                    workerCount: 1,
                },
            ],
            expect: {
                host: 'localhost',
                port: 4000,
                lockPort: false,
                preventWorkerRespawn: false,
                workerCount: 1,
                ...operationalDefaults,
            },
        },
        {
            it: 'ignores a service origin without a port',
            inputs: [
                'https://example.com',
                {
                    workerCount: 1,
                },
            ],
            expect: {
                host: 'localhost',
                port: 3000,
                lockPort: false,
                preventWorkerRespawn: false,
                workerCount: 1,
                ...operationalDefaults,
            },
        },
        {
            it: 'ignores a missing hostname',
            inputs: [
                ':4000',
                {
                    workerCount: 1,
                },
            ],
            expect: {
                host: 'localhost',
                port: 4000,
                lockPort: false,
                preventWorkerRespawn: false,
                workerCount: 1,
                ...operationalDefaults,
            },
        },
    ]);
});

describe('runApiOptionsShape', () => {
    it('rejects numeric proxy trust', () => {
        assert.isFalse(
            checkValidShape(
                {
                    ...runApiOptionsShape.default,
                    trustProxy: 1,
                },
                runApiOptionsShape,
            ),
        );
    });
});
