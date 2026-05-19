# Migration guide: `define-service` / `implement-service` / `run-service` => `client` / `host`

This guide walks through migrating from the previously-published rest-vir packages:

-   `@rest-vir/define-service`
-   `@rest-vir/implement-service`
-   `@rest-vir/run-service`

to the rewritten replacements:

-   `@rest-vir/api`
-   `@rest-vir/host`

## Package mapping

| Old                           | New                | Notes                                                                                            |
| ----------------------------- | ------------------ | ------------------------------------------------------------------------------------------------ |
| `@rest-vir/define-service`    | `@rest-vir/api` | Definitions, client fetch, WebSocket connect, and frontend mock helpers all live in one package. |
| `@rest-vir/implement-service` | `@rest-vir/host`   | Implementations now live in the same package as the server runtime.                              |
| `@rest-vir/run-service`       | `@rest-vir/host`   | `startService` => `startApiServer`; `attachService` => `attachApi`.                              |

## Conceptual changes at a glance

1. **`defineService` => `defineApi`.** Endpoint and WebSocket lists are arrays, not records keyed by path.
2. **Per-endpoint method definitions are nested under `requests`.** `methods: {POST: true}` plus a flat `requestDataShape`/`responseDataShape` becomes `requests: {POST: {requestData, responses: {[status]: {responseData}}}}`.
3. **Responses are declared per status code.** Every status the implementation may return must appear in the definition. There is no more flat `{statusCode, responseErrorMessage}` envelope.
4. **`serviceOrigin` is gone from the definition.** The client takes a `baseUrl` when constructed; the host reads `externalOrigin` from its options.
5. **CORS settings moved.** `requiredClientOrigin` at the service level => `clientOriginRequirement` on the api implementation (or per-method definition). `AnyOrigin` still exists.
6. **`ServiceLogger` => `ServerLogger`**, `defaultServiceLogger` => `defaultServerLogger`, etc.
7. **Frontend usage flipped.** `apiClient.endpoints['/x'].fetch({...})` => `client.fetch(endpoint).METHOD({...})`. The frontend imports the endpoint definitions directly.
8. **`condenseResponse`, `testEndpoint`, `testWebSocket`, `describeApi`** still exist, but signatures changed.
9. **`MockWebSocket`** is now a first-class export on `@rest-vir/api` instead of being a copy-paste test helper.

## Phased migration plan

Treat the migration as **five sequential phases**. Each phase must compile and tests should stay green before moving on. The frontend and tests can lag the backend if you stub the new packages behind an adapter, but the simpler path is to migrate the whole stack in one branch and ship it together.

### Phase 0: spike

Pick a small representative endpoint, ideally a `GET /health` plus one `POST` with a body shape. In a feature branch:

1. Install the new packages alongside the old ones.
    ```sh
    npm i @rest-vir/api @rest-vir/host
    ```
2. Rewrite that single endpoint's definition, implementation, frontend caller, and tests using the new packages.

If anything fundamental is missing for your use case (see "Removed features" below), stop and design a workaround before phase 1.

### Phase 1: definitions

Rewrite every `defineService` call into `defineApi` + `defineEndpoint` + `defineWebSocket`.

**Old**

```ts
import {defineService, HttpMethod, AnyOrigin} from '@rest-vir/define-service';

export const myService = defineService({
    serviceName: 'my-service',
    serviceOrigin: isDev ? 'http://localhost:3000' : 'https://api.example.com',
    requiredClientOrigin: AnyOrigin,
    endpoints: {
        '/users/:userId': {
            methods: {[HttpMethod.Get]: true},
            requestDataShape: undefined,
            responseDataShape: {id: '', name: ''},
        },
    },
    webSockets: {
        '/chat': {
            messageFromClientShape: '',
            messageFromHostShape: '',
        },
    },
});
```

**New**

```ts
import {
    AnyOrigin,
    defineApi,
    defineEndpoint,
    defineWebSocket,
    HttpMethod,
    HttpStatus,
} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';

export const userEndpoint = defineEndpoint({
    path: '/users/:userId',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({id: '', name: ''}),
                },
                [HttpStatus.NotFound]: {
                    responseData: defineShape({missingId: ''}),
                },
            },
        },
    },
});

export const chatWebSocket = defineWebSocket({
    path: '/chat',
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

export const myApi = defineApi({
    apiName: 'my-api',
    endpoints: [userEndpoint],
    webSockets: [chatWebSocket],
});
```

Things to do mechanically:

-   Every endpoint becomes a top-level `export const xxxEndpoint = defineEndpoint(...)`. Same for websockets.
-   `methods: {[HttpMethod.X]: true}` => `requests: {[HttpMethod.X]: {...}}`.
-   `requestDataShape: shape` => `requests[Method].requestData: shape`.
-   `responseDataShape: shape` => `requests[Method].responses[HttpStatus.Ok].responseData: shape`. **You must explicitly enumerate every status the implementation will return.** A success path means declaring `HttpStatus.Ok` (or whatever); a `NotFound` error path means declaring `HttpStatus.NotFound`.
-   `searchParamsShape: {...}` => `requests[Method].searchParams: {...}`. Same shape rules.
-   `messageFromClientShape` / `messageFromHostShape` => `clientMessage` / `hostMessage`.
-   `protocolsShape` => `connectProtocol` (semantics changed; see "Behavioral diffs" below).
-   `serviceOrigin` is **dropped**. Plumb origins via the client's `baseUrl` and the host's `externalOrigin` option.
-   `requiredClientOrigin` is **dropped from the definition**. Move it to the api implementation (`clientOriginRequirement`) or to each route's `requests[Method].clientOriginRequirement`.
-   `customProps` survives but moves under each method definition.

### Phase 2: backend implementations

Every endpoint handler must be rewritten to return the new status-keyed envelope and live inside an `implementApi(...)` block.

**Old**

```ts
import {HttpStatus, implementService} from '@rest-vir/implement-service';

export const myServiceImplementation = implementService(
    {service: myService},
    {
        endpoints: {
            async '/users/:userId'({pathParams}) {
                const user = await db.users.find(pathParams.userId);
                if (!user) {
                    return {
                        statusCode: HttpStatus.NotFound,
                        responseErrorMessage: `Unknown user ${pathParams.userId}`,
                    };
                }
                return {
                    statusCode: HttpStatus.Ok,
                    responseData: user,
                };
            },
        },
        webSockets: {
            '/chat': {
                message({webSocket, message}) {
                    webSocket.send(`echo: ${message}`);
                },
            },
        },
    },
);
```

**New**

```ts
import {HttpMethod, HttpStatus} from '@rest-vir/api';
import {createApiImplementor, implementApi} from '@rest-vir/host';
import {myApi, userEndpoint, chatWebSocket} from './my-api.js';

type BackendContext = {db: Database};

const implementor = createApiImplementor<BackendContext>()(myApi);

const userImpl = implementor.implementEndpoint(userEndpoint, {
    async [HttpMethod.Get]({context, pathParams}) {
        const user = await context.db.users.find(pathParams.userId);
        if (!user) {
            return {
                [HttpStatus.NotFound]: {
                    responseData: {missingId: pathParams.userId},
                },
            };
        }
        return {
            [HttpStatus.Ok]: {responseData: user},
        };
    },
});

const chatImpl = implementor.implementWebSocket(chatWebSocket, {
    message({webSocket, message}) {
        webSocket.send(`echo: ${message}`);
    },
});

export const myApiImplementation = implementApi<BackendContext>()(myApi, {
    createHostContext: ({request}) => ({context: {db: openDb(request)}}),
    endpoints: {'/users/:userId': userImpl},
    webSockets: {'/chat': chatImpl},
});
```

Things to do mechanically:

-   `{statusCode, responseData}` => `{[HttpStatus.X]: {responseData}}`.
-   `{statusCode, responseErrorMessage: 'msg'}` => enumerate the error status in the definition's `responses`, then return `{[HttpStatus.NotFound]: {responseData: 'msg'}}` (the response shape can be a string).
-   `{statusCode, headers}` => `{[HttpStatus.X]: {responseData, headers}}`.
-   `responseHandled: true` (for SSE / `response.hijack()`) is unchanged.
-   `customHeaders` moves from `implementService` options to `implementApi(...)` options.
-   `postHook` => `postRouteHook` (same shape).
-   `createContext` => `createHostContext`. Return shape: `{context}` for success, `{reject: {statusCode, responseData?, headers?}}` to short-circuit.
-   `pathParams` is now typed against the path string. `pathParams.userId` is `string`, no `as` cast needed.
-   `wildcard` for `/*` paths is now `pathParams.wildcard` (string), not a separate `wildcard` property on the params object.

### Phase 3: server startup

Trivial rename in most cases.

**Old**

```ts
import {startService} from '@rest-vir/run-service';

await startService(myServiceImplementation, {port: 3000});
```

**New**

```ts
import {startApiServer} from '@rest-vir/host';

const {kill} = await startApiServer(myApiImplementation, {
    port: 3000,
    externalOrigin: 'http://localhost:3000',
});
```

Things to do:

-   Add `externalOrigin` to the options object. This used to come from `serviceOrigin` on the definition; now it lives on the server's runtime config.
-   `attachService(server, impl, options)` => `attachApi(server, impl, {externalOrigin})`.
-   `kill()` is now `async` and runs Fastify's `onClose` hooks (drains websockets, etc.). Always `await` it.
-   SIGTERM / SIGINT graceful shutdown (Fastify `onClose` hook draining) is wired automatically by `startApiServer`; you do not need to install your own signal handler.
-   New options surfaced for production hardening: `bodyLimit`, `connectionTimeout`, `keepAliveTimeout`, `requestTimeout`, `webSocketMaxPayload`, `trustProxy`. Set the timeouts to non-zero values on any internet-facing deployment to defend against slowloris-style DoS attacks (where an attacker holds connections open by trickling bytes very slowly).

### Phase 4: frontend client

The biggest user-facing rewrite. Every call site that used `apiClient.endpoints['/x'].fetch({...})` becomes `client.fetch(endpoint).METHOD({...})` and the frontend now imports the endpoint definitions directly.

**Old**

```ts
import {generateApi} from '@rest-vir/define-service';
import {myService} from 'common';

export const apiClient = generateApi(myService, {
    endpointFetch: {
        fetch(url, init, endpoint) {
            return augmentedFetch(url, init);
        },
    },
});

const result = await apiClient.endpoints['/users/:userId'].fetch({
    pathParams: {userId: 'abc'},
});
```

**New**

```ts
import {RestVirClient} from '@rest-vir/api';
import {myApi, userEndpoint} from 'common';

export const client = new RestVirClient(myApi, 'https://api.example.com', augmentedFetch);

const result = await client.fetch(userEndpoint).GET({
    pathParams: {userId: 'abc'},
});

if (result.Ok) {
    use(result.Ok.responseData);
} else if (result.NotFound) {
    showError(result.NotFound.responseData.missingId);
} else if (result.unexpectedError) {
    showError(result.unexpectedError.responseData);
}
```

Things to do:

-   Replace `generateApi(...)` with `new RestVirClient(api, baseUrl, fetchOverride?, webSocketConstructor?)`.
-   Every call site: `apiClient.endpoints[path].fetch({...})` => `client.fetch(endpoint).METHOD({...})`.
-   Streaming: `apiClient.endpoints[path].fetchStream({...})` => `client.fetchStream(endpoint, method, params)`.
-   WebSockets: `apiClient.webSockets[path].connect(...)` => `client.connectWebSocket(websocketDefinition, ...)`.
-   Response handling: the return value is `RequireExactlyOne<{Ok: {...}, NotFound: {...}, ..., unexpectedError: {...}}>`. Branch on which key is present; you cannot `switch (result.status)`.
-   The custom `fetch` override still receives `(url, requestInit, endpoint)`, same as before. Use `endpoint.requests[method].customProps` to read per-method metadata (note: `customProps` is now per-method, not per-endpoint).

### Phase 5: tests (medium effort)

`testEndpoint`, `testWebSocket`, `describeApi`, and `testApi` all still exist on `@rest-vir/host`. The signatures changed: each helper now takes the endpoint _implementation_ (not the definition), the explicit method, and a `createHostContext` callback.

**Old**

```ts
import {testEndpoint, condenseResponse} from '@rest-vir/run-service';

const response = await testEndpoint(myServiceImplementation.endpoints['/health']);
```

**New**

```ts
import {condenseResponse, testEndpoint} from '@rest-vir/host';
import {HttpMethod} from '@rest-vir/api';

const response = await testEndpoint(healthImplementation, HttpMethod.Get, () => ({
    context: undefined,
}));
```

Things to do:

-   `testEndpoint(endpoint, ...)` becomes `testEndpoint(impl, method, createHostContext, ...params)`.
-   Frontend tests that previously used `makeMockApi` / `createMockResponse` switch to `createMockHost(api, {endpoints: {...}, webSockets: {...}})`. The returned object is a fully wired `RestVirClient` with no real network. Endpoint implementations can be partial, omitted methods return HTTP 501.
-   For client-side WebSocket unit tests that need to script "the host sent message X right now", use the newly-exported `MockWebSocket` and `getLastMockWebSocket()` from `@rest-vir/api`. Plug it in via `client.connectWebSocket(ws, {webSocketConstructor: MockWebSocket})`.
-   `condenseResponse(response, options?)` still exists on `@rest-vir/host`.
-   `describeApi(api, options, callback)` is still the wrapper for running a real test server inside a `describe` block.

## Behavioral diffs to watch for

A handful of behaviors changed silently. Audit these explicitly.

### CORS default

If neither the api nor a route declares a `clientOriginRequirement`, the new framework returns `Access-Control-Allow-Origin: *`. The old code threw at startup. **Set `clientOriginRequirement` on every production api or you will ship an internet-accessible api by accident.**

### WebSocket protocol shape

`protocolsShape: defineShape([''])` (applied to the whole array) => `connectProtocol: defineShape('')` (applied to each protocol entry). The new shape also accepts `RegExp` and `ReadonlyArray<Shape | RegExp>` for any-of matching, similar to search-params.

### `headersToObject`

Used to return `Record<string, string | string[]>` (arrays for duplicated names). Now returns `Record<string, string>` with duplicates flattened into a comma-joined string. This is the standard WHATWG `Headers` API behavior.

### Mock fetch `.text()`

`createMockResponse({body: 'hi'}).text()` used to return `'"hi"'` (JSON-stringified). Now returns `'hi'` unchanged (matches real `Response.text()` behavior). The default `content-type` also depends on body type: strings get `text/plain`, objects get `application/json`, empty bodies get no content-type header.

### `endpoint.implementation[method]` return-key dispatch

The new host validates that the implementation returns **exactly one** valid `HttpStatus` key (plus optional `responseHandled: true`). Returning zero keys or multiple status keys throws a 500 server-side instead of silently picking the first one. Code that uses `as`/`as any` to bypass `RequireExactlyOne` may break.

### WebSocket malformed message

When a client sends a WebSocket message that fails shape validation, the connection is now closed with code `1008` ("policy violation"). The user `message` handler is **not** invoked. The old framework logged the error but called the handler anyway.

### `kill()` is async

Single-thread `kill()` now returns a promise that resolves once Fastify's `onClose` hooks finish. Always `await` it. Production shutdown code that fired `kill()` without awaiting will leak open connections.

## Removed features (no direct replacement)

-   **`bypassResponseValidation`** flag. Response shapes are always validated.
-   **`AllOrigins`** constant. Use `AnyOrigin` (still a string `'*'`) or `{anyOrigin: true}` / `{anyOriginWithCredentials: true}` object literals.
-   **`MockClientWebSocket`** (scripted "host pushes message X" mock). Reimplement using the new `MockWebSocket` from `@rest-vir/api` or `createMockHost`.
-   **`mapServiceDevPort`**. The new client doesn't auto-rewrite the api definition with the discovered dev port. `findDevServerPort` / `findLivePort` still exist; wire them into your own `baseUrl` plumbing.
-   **`generateApi`, `makeMockApi`, `createMockResponse`** (frontend test helpers). Use `createMockHost` for the high-level case, `MockWebSocket` for scripted client-side tests, and `createMockResponse` for raw `Response` mocks.

After all phases land, remove the old `@rest-vir/define-service`, `@rest-vir/implement-service`, and `@rest-vir/run-service` from `package.json` and `npm i`.

## Quick verification checklist

Before merging the migration branch:

-   [ ] Every endpoint definition declares every status its implementation returns.
-   [ ] Every endpoint implementation returns `{[status]: {...}}` (or `{responseHandled: true}`).
-   [ ] `clientOriginRequirement` is set somewhere (api-level or per-route) for every production environment.
-   [ ] `kill()` calls are awaited.
-   [ ] `bodyLimit`, `webSocketMaxPayload`, and `connectionTimeout` are set explicitly for any internet-facing deployment.
-   [ ] Frontend call sites no longer reference `apiClient.endpoints['/...']`.
-   [ ] All tests pass.

## Where to file confusion

Open an issue on https://github.com/electrovir/rest-vir/issues if a migration step is ambiguous or a removed feature lacks a documented replacement.
