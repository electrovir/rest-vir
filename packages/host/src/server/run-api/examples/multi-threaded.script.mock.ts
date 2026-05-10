import {startService} from '../start-service.js';
import {mockApiImplementation} from './mock-api-implementation.mock.js';

await startService(mockApiImplementation, {
    port: 3001,
    workerCount: 3,
    externalOrigin: 'http://localhost:3001',
});
