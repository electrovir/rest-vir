import {startService} from '../start-service.js';

await startService(mockServiceImplementation, {
    port: 3001,
    workerCount: 3,
});
