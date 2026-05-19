# rest-vir

`rest-vir` is a collection of packages that allows you to define your own REST api with round-trip type safe endpoints and WebSockets. It also includes the following features:

-   a single source of truth for shipped API documentation and types
-   browser-friendly API exports _without any build steps_
-   type safe endpoint fetching and WebSocket messaging both in clients (browsers) and hosts (servers)
-   separate server implementations to keep browser code and server code separate
-   automatic API entry point that can be shipped to internal and external users
-   extensive testing utilities for both frontend and backend unit and integration testing

See the full reference docs at https://electrovir.github.io/rest-vir

> Migrating from the previously-published `@rest-vir/define-service` / `@rest-vir/implement-service` / `@rest-vir/run-service`? See [`MIGRATION.md`](./MIGRATION.md).

## Usage

1. [Define an api](#api-definition)
2. [Implement an api](#api-implementation)
3. [Run an api](#start-api)
4. [Connect to the api in your client (frontend)](#client-frontend-connection)

### API Definition

In code shared between your frontend and backend, install `npm i @rest-vir/api object-shape-tester` and then define your api:

```TypeScript
import {
    AnyOrigin,
    defineApi,
    defineEndpoint,
    defineWebSocket,
    HttpMethod,
    HttpStatus,
} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';

export const myEndpoint = defineEndpoint({
    path: '/my-endpoint',
    requests: {
        [HttpMethod.Post]: {
            /** This endpoint requires all requests to contain a string body. */
            requestData: defineShape(''),
            responses: {
                /** This endpoint's success response has no body. */
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

/** Express-style path params are allowed. */
export const userEndpoint = defineEndpoint({
    path: '/my-endpoint/:userId',
    /** Each route may override the api's origin requirement. */
    clientOriginRequirement: 'https://example.com',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        username: '',
                        firstName: '',
                        lastName: '',
                    }),
                },
                [HttpStatus.NotFound]: {
                    responseData: defineShape({missingId: ''}),
                },
            },
        },
    },
});

export const myWebSocket = defineWebSocket({
    path: '/my-web-socket',
    /** This WebSocket requires all messages from the client to be a string. */
    clientMessage: defineShape(''),
    /** Same for messages from the host. */
    hostMessage: defineShape(''),
});

export const myApi = defineApi({
    /** The name of your api. This will be visible to all consumers of this api definition. */
    apiName: 'my-api',
    endpoints: [
        myEndpoint,
        userEndpoint,
    ],
    webSockets: [
        myWebSocket,
    ],
});
```

### API Implementation

In your backend code, install `npm i @rest-vir/host` and implement your api endpoints and WebSockets:

```TypeScript
import {HttpMethod, HttpStatus, AnyOrigin} from '@rest-vir/api';
import {createApiImplementor, implementApi} from '@rest-vir/host';
import {myApi, myEndpoint, userEndpoint, myWebSocket} from './my-api.js';

const implementor = createApiImplementor<undefined>()(myApi);

const myEndpointImpl = implementor.implementEndpoint(myEndpoint, {
    [HttpMethod.Post]() {
        return {
            [HttpStatus.Ok]: {
                responseData: undefined,
            },
        };
    },
});

const userEndpointImpl = implementor.implementEndpoint(userEndpoint, {
    async [HttpMethod.Get]({pathParams}) {
        const user = await readUserFromDatabase(pathParams.userId);
        return {
            [HttpStatus.Ok]: {
                responseData: user,
            },
        };
    },
});

const myWebSocketImpl = implementor.implementWebSocket(myWebSocket, {
    message({webSocket}) {
        webSocket.send('hi!');
    },
});

export const myApiImplementation = implementApi<undefined>()(myApi, {
    createHostContext: () => ({context: undefined}),
    /**
     * The api's `origin` requirement for all endpoint requests and WebSocket connections. This is
     * used for CORS handshakes. Routes may override this on their own definitions.
     *
     * Set this to `AnyOrigin` (imported from `'@rest-vir/api'`) to allow any origins. Make sure
     * that you're okay with the security impact this may have on your users of doing so.
     */
    clientOriginRequirement: AnyOrigin,
    endpoints: {
        '/my-endpoint': myEndpointImpl,
        '/my-endpoint/:userId': userEndpointImpl,
    },
    webSockets: {
        '/my-web-socket': myWebSocketImpl,
    },
});
```

### Start api

In your backend code's startup script, run the api:

```TypeScript
import {startApiServer} from '@rest-vir/host';
import {myApiImplementation} from './my-api-implementation.js';

const {kill} = await startApiServer(myApiImplementation, {
    port: 3000,
    externalOrigin: 'http://localhost:3000',
});
```

You can also attach your api to an existing server:

```TypeScript
import {attachApi} from '@rest-vir/host';
import fastify from 'fastify';
import {myApiImplementation} from './my-api-implementation.js';

const server = fastify();

await attachApi(server, myApiImplementation, {
    externalOrigin: 'http://localhost:3000',
});

await server.listen({port: 3000});
```

### Client (frontend) connection

In your frontend code, install `npm i @rest-vir/api` and use the typed client to send fetch requests and open WebSocket connections:

```TypeScript
import {RestVirClient} from '@rest-vir/api';
import {myApi, myEndpoint, myWebSocket} from './my-api.js';

const client = new RestVirClient(myApi, 'https://example.com');

const result = await client.fetch(myEndpoint).POST({
    /** `requestData` is enforced by `myEndpoint`'s types. */
    requestData: 'hello there',
});

if (result.Ok) {
    /** `result.Ok.responseData` is type safe. */
}

const webSocket = await client.connectWebSocket(myWebSocket, {
    listeners: {
        message({
            /** This `message` is type safe. */
            message,
        }) {
            console.info('message received from server:', message);
        },
    },
});

/** `.send()`'s input is enforced by `myWebSocket`'s types. */
webSocket.send('hello there');
```

### Testing

`@rest-vir/host` exports `testApi`, `testEndpoint`, `testWebSocket`, `describeApi`, and `condenseResponse` for backend integration tests. `@rest-vir/api` exports `createMockHost` to spin up a fully-wired client backed by in-memory mock implementations (great for frontend tests), plus `MockWebSocket` for scripted client-side WebSocket unit tests.
