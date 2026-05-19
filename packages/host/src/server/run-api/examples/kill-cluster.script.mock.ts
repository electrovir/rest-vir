import {startApiServer} from '../start-api-server.js';
import {mockApiImplementation} from './mock-api-implementation.mock.js';

const {cluster, kill} = await startApiServer(mockApiImplementation, {
    port: 3802,
    workerCount: 3,
    preventWorkerRespawn: true,
    externalOrigin: 'http://localhost:3802',
});

if (cluster) {
    setTimeout(async () => {
        await kill();
    }, 3000);
}
