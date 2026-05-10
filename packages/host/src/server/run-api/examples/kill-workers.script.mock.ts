import {startService} from '../start-service.js';
import {mockApiImplementation} from './mock-api-implementation.mock.js';

const {worker, kill} = await startService(mockApiImplementation, {
    port: 3000,
    workerCount: 3,
    preventWorkerRespawn: true,
    externalOrigin: 'http://localhost:3000',
});

if (worker) {
    setTimeout(() => {
        kill();
    }, 3000);
}
