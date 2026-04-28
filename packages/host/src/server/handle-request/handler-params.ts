import {filterObject} from '@augment-vir/common';
import {
    type RunningServerInfo,
    type ServerRequest,
    type ServerResponse,
} from '@rest-vir/implement-service';

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
    return {
        pathParams: filterObject(request.params as Record<string, string>, (key) => {
            return !String(key).startsWith('*');
        }) as Record<string, string>,
        wildcard: (request.params as Record<string, string>)['*'],
        request,
        requestData,
        requestHeaders: request.headers,
        response,
        server,
    };
}
