# @rest-vir/api

Define a declarative, type-safe REST + WebSocket API once. Pair with [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host) to serve it and [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client) to call it.

See the full docs at https://electrovir.github.io/rest-vir

## Installation

```sh
npm i @rest-vir/api object-shape-tester
```

## Usage

<!-- example-link: src/examples/define-api.example.ts -->

```TypeScript
import {defineApi, defineEndpoint, HttpMethod, HttpStatus} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';

export const healthEndpoint = defineEndpoint({
    path: '/health',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({status: ''}),
                },
            },
        },
    },
});

export const myApi = defineApi({
    apiName: 'my-api',
    endpoints: [healthEndpoint],
    webSockets: [],
});
```

The same `myApi` value is consumed by both server (`@rest-vir/host`) and client (`@rest-vir/client`).
