import {startApiServer} from '../start-api-server.js';
import {mockApiImplementation} from './mock-api-implementation.mock.js';

const {worker, kill} = await startApiServer(mockApiImplementation, {
    port: 3803,
    workerCount: 3,
    preventWorkerRespawn: true,
    externalOrigin: 'http://localhost:3803',
});

if (worker) {
    setTimeout(async () => {
        await kill();
    }, 3000);
}
