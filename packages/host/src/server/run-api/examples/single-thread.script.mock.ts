import {startService} from '../start-service.js';

await startService(
    mockServiceImplementation,
    {
        port: 3700,
        workerCount: 1,
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
