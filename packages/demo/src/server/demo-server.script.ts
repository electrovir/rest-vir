import multipart from '@fastify/multipart';
import {startApiServer} from '@rest-vir/host';
import {apiServerStartPort} from '../demo-api.js';
import {demoApiImplementation} from './demo-api-implementation.js';

await startApiServer(
    demoApiImplementation,
    {
        externalOrigin: '',
        workerCount: 1,
        port: apiServerStartPort,
    },
    [
        [
            multipart,
            {
                limits: {
                    fileSize: 1_000_000,
                },
            },
        ],
    ],
);
