# @rest-vir/host

Fastify-based server runtime for an API defined with [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api). Wires endpoint and WebSocket implementations, runs CORS, validates shapes, and starts/attaches a server.

See the full docs at https://electrovir.github.io/rest-vir

## Installation

```sh
npm i @rest-vir/host @rest-vir/api object-shape-tester
```

## Usage

<!-- example-link: src/examples/start-api-server.example.ts -->

```TypeScript
import {createApiImplementor, implementApi, startApiServer} from '@rest-vir/host';
import {HttpMethod, HttpStatus} from '@rest-vir/api';
import {myApi, healthEndpoint} from './my-api.js';

const {implementEndpoint} = createApiImplementor<undefined>()(myApi);

const healthImplementation = implementEndpoint(healthEndpoint, {
    [HttpMethod.Get]() {
        return {
            [HttpStatus.Ok]: {responseData: {status: 'ok'}},
        };
    },
});

const apiImplementation = implementApi<undefined>()(myApi, {
    createHostContext: () => ({context: undefined}),
    endpoints: {
        '/health': healthImplementation,
    },
});

const {kill} = await startApiServer(apiImplementation, {
    port: 3000,
    externalOrigin: 'http://localhost:3000',
});

// later, to shut down:
// await kill();
```

### CORS

The default `clientOriginRequirement` is unset, which means **any origin is allowed**. Set `clientOriginRequirement` on each route (or at the api level) for production deployments. See `OriginRequirement` in `@rest-vir/api`.

### TLS

`startApiServer` is plaintext HTTP. Terminate TLS in a reverse proxy (nginx, AWS ALB, Caddy, etc.) or use `attachApi` to register routes on a Fastify instance you've configured with `https`.
