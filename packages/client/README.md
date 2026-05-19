# @rest-vir/client

Typed HTTP + WebSocket client for an API defined with [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api). Use it from the browser or Node. Also ships an in-memory mock host for tests.

See the full docs at https://electrovir.github.io/rest-vir

## Installation

```sh
npm i @rest-vir/client @rest-vir/api object-shape-tester
```

## Usage

<!-- example-link: src/examples/fetch-endpoint.example.ts -->

```TypeScript
import {RestVirClient} from '@rest-vir/client';
import {myApi, healthEndpoint} from './my-api.js';

const client = new RestVirClient(myApi, 'https://api.example.com');

const result = await client.fetch(healthEndpoint).GET();

if (result.Ok) {
    console.info(result.Ok.responseData);
}
```

### Mocking a host in tests

<!-- example-link: src/examples/mock-host.example.ts -->

```TypeScript
import {createMockHost} from '@rest-vir/client';
import {HttpMethod, HttpStatus} from '@rest-vir/api';
import {myApi, healthEndpoint} from './my-api.js';

const client = createMockHost(myApi, {
    endpoints: {
        '/health': {
            [HttpMethod.Get]: () => ({
                [HttpStatus.Ok]: {responseData: {status: 'ok'}},
            }),
        },
    },
});
```
