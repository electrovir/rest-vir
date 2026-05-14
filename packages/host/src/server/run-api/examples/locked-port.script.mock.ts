import {startApiServer} from '../start-api-server.js';
import {mockApiImplementation} from './mock-api-implementation.mock.js';

await startApiServer(mockApiImplementation, {
    port: 3889,
    workerCount: 1,
    lockPort: true,
    externalOrigin: 'http://localhost:3889',
});
