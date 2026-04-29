import {startService} from '../start-service.js';

const {worker, kill} = await startService(mockServiceImplementation, {
    port: 3000,
    workerCount: 3,
    preventWorkerRespawn: true,
});

if (worker) {
    setTimeout(() => {
        kill();
    }, 3000);
}
