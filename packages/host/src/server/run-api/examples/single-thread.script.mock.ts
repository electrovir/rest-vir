import multipart from '@fastify/multipart';
import {startApiServer} from '../start-api-server.js';
import {mockApiImplementation} from './mock-api-implementation.mock.js';

await startApiServer(
    mockApiImplementation,
    {
        port: 3800,
        workerCount: 1,
        externalOrigin: 'http://localhost:3800',
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
