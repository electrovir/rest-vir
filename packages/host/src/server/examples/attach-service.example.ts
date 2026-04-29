import fastify from 'fastify';
import {attachApi} from '../index.js';

const server = fastify();

await attachApi(server, myServiceImplementation);

await server.listen({
    port: 3000,
});
