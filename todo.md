## Rewrite

-   make sure all shape validation uses "allowExtraKeys: true"
-   fix all `as never` instances
-   manually run "does not get blocked" test
-   fill out the demo package
-   I don't like how the method argument to RestVirClient.fetch() cannot be auto completed. Maybe fetch should return an object, where each property key is the supported methods for that endpoint and the value is a function that wraps the final fetch.
