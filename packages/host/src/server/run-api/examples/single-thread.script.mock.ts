import multipart from '@fastify/multipart';
import {startService} from '../start-service.js';
import {mockApiImplementation} from './mock-api-implementation.mock.js';

await startService(
    mockApiImplementation,
    {
        port: 3700,
        workerCount: 1,
        externalOrigin: 'http://localhost:3700',
    },
    [
        [
            multipart,
            {
                limits: {
                    fileSize: 1_000_000, // 1MB
                },
            },
        ],
    ],
);
