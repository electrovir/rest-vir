## touch-ups

-   make sure all shape validation uses "allowExtraKeys: true"

## Rewrite

-   define endpoints with a `defineEndpoint` function
-   make sure the define service function does not map over given types, it just collects them (to prevent TS cache busting)
-   rename service to api
-   rename the generated API to generated client
-   implement endpoints by calling a `.implement` method on a defined endpoint
-   call endpoints in a client by passing in the endpoint object
-   support different request data for each HTTP method
-   support different response data for each HTTP status
-   support different origin config for each HTTP method
-   don't require endpoint type safety when passing implementations into the implement service (api) function: just require path name matching.
