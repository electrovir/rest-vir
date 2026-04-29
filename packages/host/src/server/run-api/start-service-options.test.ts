import {describe, itCases} from '@augment-vir/test';
import {finalizeOptions} from './run-api-options.js';

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
                debug: false,
                host: 'localhost',
                port: 4000,
                lockPort: false,
                preventWorkerRespawn: false,
                workerCount: 1,
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
                debug: false,
                host: 'localhost',
                port: 3000,
                lockPort: false,
                preventWorkerRespawn: false,
                workerCount: 1,
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
                debug: false,
                host: 'localhost',
                port: 4000,
                lockPort: false,
                preventWorkerRespawn: false,
                workerCount: 1,
            },
        },
    ]);
});
