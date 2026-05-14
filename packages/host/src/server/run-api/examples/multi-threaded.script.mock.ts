import {startApiServer} from '../start-api-server.js';
import {mockApiImplementation} from './mock-api-implementation.mock.js';

await startApiServer(mockApiImplementation, {
    port: 3801,
    workerCount: 3,
    externalOrigin: 'http://localhost:3801',
});
