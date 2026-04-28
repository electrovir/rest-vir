import {assert, checkWrap} from '@augment-vir/assert';
import {type HttpStatus, type SelectFrom} from '@augment-vir/common';
import {matchUrlToService} from '@rest-vir/define-service';
import {
    HttpMethod,
    type GenericServiceImplementation,
    type PostHook,
    type PostHookParams,
    type RunningServerInfo,
} from '@rest-vir/implement-service';
import {type EndpointHandlerParams, type HandledOutput} from './endpoint-handler.js';
import {buildHandlerParams} from './handler-params.js';

export async function runPostHook(
    this: void,
    {
        request,
        response,
        attachId,
        server,
        postHook,
        service,
        originalBody,
        originalStatus,
    }: Readonly<
        Omit<EndpointHandlerParams, 'route'> & {
            attachId: string;
            server: Readonly<RunningServerInfo>;
            postHook: PostHook;
            originalBody: unknown;
            originalStatus: HttpStatus;
            service: Readonly<
                SelectFrom<
                    GenericServiceImplementation,
                    {
                        webSockets: true;
                        endpoints: true;
                        serviceName: true;
                        serviceOrigin: true;
                        requiredClientOrigin: true;
                    }
                >
            >;
        }
    >,
): Promise<HandledOutput> {
    const method = checkWrap.isEnumValue(request.method.toUpperCase(), HttpMethod);
    if (!method) {
        return undefined;
    }
    const restVirContext = request.restVirContext?.[attachId];
    assert.isDefined(restVirContext, 'restVirContext is not defined');

    const context = restVirContext.context;
    const requestData = restVirContext.requestData;
    const searchParams = restVirContext.searchParams;

    const pathMatch = matchUrlToService(service, request.originalUrl);

    /* node:coverage ignore next 10 */
    if (!pathMatch) {
        return undefined;
    }
    const endpointDefinition = pathMatch.endpointPath
        ? service.endpoints[pathMatch.endpointPath]
        : undefined;
    const webSocketDefinition =
        request.ws && pathMatch.webSocketPath
            ? service.webSockets[pathMatch.webSocketPath]
            : undefined;

    const postHookParams: PostHookParams = {
        ...buildHandlerParams({
            request,
            requestData,
            response,
            server,
        }),

        method,
        service,
        endpointDefinition,
        webSocketDefinition,
        context,
        searchParams,
        originalResponseData: originalBody,
        originalStatus,
    };

    const result = await postHook(postHookParams);

    if (result) {
        return {
            body:
                'responseErrorMessage' in result
                    ? result.responseErrorMessage
                    : 'responseData' in result
                      ? result.responseData
                      : originalBody,
            statusCode: 'statusCode' in result ? result.statusCode : originalStatus,
            headers: {
                ...result.headers,
                ...(result.dataType
                    ? {
                          'content-type': result.dataType,
                      }
                    : {}),
            },
        };
    } else {
        return undefined;
    }
}
