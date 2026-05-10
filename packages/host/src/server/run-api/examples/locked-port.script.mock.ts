import {startService} from '../start-service.js';
import {mockApiImplementation} from './mock-api-implementation.mock.js';

await startService(mockApiImplementation, {
    port: 3789,
    workerCount: 1,
    lockPort: true,
    externalOrigin: 'http://localhost:3789',
});
