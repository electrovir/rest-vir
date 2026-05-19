import {filterObject} from '@augment-vir/common';
import {
    type RunningServerInfo,
    type ServerRequest,
    type ServerResponse,
} from '../../implementation/raw-route-data.js';

export function buildHandlerParams({
    request,
    response,
    requestData,
    server,
}: {
    server: Readonly<RunningServerInfo>;
    request: ServerRequest;
    response: ServerResponse;
    requestData: any;
}) {
    const rawParams = (request.params || {}) as Record<string, string | undefined>;
    const wildcard = rawParams['*'];
    /**
     * Merge wildcard into a single `pathParams` object under the `wildcard` key so server-side
     * implementations consume path params the same way the client builds them. Drop the raw `*` key
     * . Consumers should read `pathParams.wildcard`.
     */
    const namedParams = filterObject(rawParams, (key) => !String(key).startsWith('*')) as Record<
        string,
        string
    >;
    const pathParams: Record<string, string | undefined> = {
        ...namedParams,
        ...(wildcard == undefined
            ? {}
            : {
                  wildcard,
              }),
    };
    return {
        pathParams,
        request,
        requestData,
        requestHeaders: request.headers,
        response,
        server,
    };
}
