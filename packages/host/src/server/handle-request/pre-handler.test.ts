import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineEndpoint} from '@rest-vir/api';
import {implementApi} from '../../implementation/implement-api.js';
import {createApiImplementor} from '../../implementation/implementor.js';
import type {ServerRequest, ServerResponse} from '../../implementation/raw-route-data.js';
import {silentServerLogger} from '../../implementation/server-logger.js';
import {preHandler} from './pre-handler.js';

const healthEndpoint = defineEndpoint({
    path: '/health',
    requests: {
        [HttpMethod.Get]: {
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const noRequestBodyEndpoint = defineEndpoint({
    path: '/no-request-body',
    requests: {
        [HttpMethod.Post]: {
            requestData: undefined,
            responses: {
                [HttpStatus.Ok]: {
                    responseData: undefined,
                },
            },
        },
    },
});

const api = defineApi({
    apiName: 'pre-handler test api',
    endpoints: [
        healthEndpoint,
        noRequestBodyEndpoint,
    ],
    webSockets: [],
});

const implementor = createApiImplementor<undefined>()(api);

const apiImplementation = implementApi<undefined>()(api, {
    createHostContext() {
        return {
            context: undefined,
        };
    },
    clientOriginRequirement: {
        anyOrigin: true,
    },
    endpoints: [
        implementor.implementEndpoint(healthEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
        implementor.implementEndpoint(noRequestBodyEndpoint, {
            [HttpMethod.Post]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
    ],
});

type MockServerResponse = {
    raw: {
        removeHeader: () => void;
        setHeader: () => void;
    };
    header: () => void;
};

describe(preHandler.name, () => {
    it('ignores a missing implementation', async () => {
        await assert.doesNotThrow(async () => {
            return preHandler({
                request: {
                    originalUrl: '/missing',
                    headers: {},
                    /** Fastify's not-found route carries no rest-vir route config. */
                    routeOptions: {
                        config: {},
                    },
                } as unknown as ServerRequest,
                response: {
                    header() {},
                } as unknown as ServerResponse,
                api: apiImplementation,
                server: {
                    serviceOrigin: '',
                },
                attachId: '',
                serverLogger: silentServerLogger,
            });
        });
    });

    it('accepts an omitted body when requestData is explicitly undefined', async () => {
        const attachId = 'test';
        const request = {
            originalUrl: '/no-request-body',
            method: HttpMethod.Post,
            headers: {},
            body: undefined,
            params: {},
            /**
             * What `attachApi` records on the route Fastify matched. Only the fields the code under
             * test reads are present, so the real `routeOptions` shape is asserted rather than
             * filled in.
             */
            routeOptions: {
                url: noRequestBodyEndpoint.path,
                config: {
                    restVirRoute: {
                        attachId,
                        routePath: noRequestBodyEndpoint.path,
                    },
                },
            } as unknown as ServerRequest['routeOptions'],
        } satisfies Partial<ServerRequest> as unknown as ServerRequest;

        const result = await preHandler({
            request,
            response: {
                raw: {
                    removeHeader() {},
                    setHeader() {},
                },
                header() {},
            } satisfies MockServerResponse as unknown as ServerResponse,
            api: apiImplementation,
            server: {
                serviceOrigin: '',
            },
            attachId,
            serverLogger: silentServerLogger,
        });

        assert.isUndefined(result);
        assert.isUndefined(request.restVirContext?.[attachId]?.requestData);
    });
});

/** Only ever appears in a request's query string. */
const secretSearchParamValue = 'super-secret-credential';

const rejectingApi = defineApi({
    apiName: 'pre-handler rejection api',
    endpoints: [
        healthEndpoint,
    ],
    webSockets: [],
});

const rejectingImplementor = createApiImplementor<undefined>()(rejectingApi);

const rejectingApiImplementation = implementApi<undefined>()(rejectingApi, {
    createHostContext() {
        return {
            reject: {
                statusCode: HttpStatus.InternalServerError,
            },
        };
    },
    clientOriginRequirement: {
        anyOrigin: true,
    },
    endpoints: [
        rejectingImplementor.implementEndpoint(healthEndpoint, {
            [HttpMethod.Get]() {
                return {
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                };
            },
        }),
    ],
});

function buildRejectionRequest(method: HttpMethod) {
    const attachId = 'test';

    return {
        originalUrl: `${healthEndpoint.path}?code=${secretSearchParamValue}&page=2`,
        method,
        headers: {},
        body: undefined,
        params: {},
        query: {
            code: secretSearchParamValue,
            page: '2',
        },
        routeOptions: {
            url: healthEndpoint.path,
            config: {
                restVirRoute: {
                    attachId,
                    routePath: healthEndpoint.path,
                },
            },
        } as unknown as ServerRequest['routeOptions'],
    } satisfies Partial<ServerRequest> as unknown as ServerRequest;
}

async function runRejection(method: HttpMethod) {
    const loggedErrors: Error[] = [];

    const result = await preHandler({
        request: buildRejectionRequest(method),
        response: {
            raw: {
                removeHeader() {},
                setHeader() {},
            },
            header() {},
        } as unknown as ServerResponse,
        api: rejectingApiImplementation,
        server: {
            serviceOrigin: '',
        },
        attachId: 'test',
        serverLogger: {
            ...silentServerLogger,
            error(error) {
                loggedErrors.push(error);
            },
        },
        excludedErrorSearchParams: [
            'code',
        ],
    });

    assert.strictEquals(loggedErrors.length, 1);

    const [loggedError] = loggedErrors;
    assert.isDefined(loggedError);

    return {
        result,
        message: loggedError.message,
    };
}

describe('excluded search params', () => {
    it('omits excluded params from a rejected context message', async () => {
        const {result, message} = await runRejection(HttpMethod.Get);

        assert.strictEquals(result?.statusCode, HttpStatus.InternalServerError);
        assert.isTrue(
            message.includes(`Context creation rejected: '${healthEndpoint.path}?page=2'`),
            message,
        );
        assert.isFalse(message.includes(secretSearchParamValue), message);
    });

    it('omits excluded params from a method not allowed message', async () => {
        const {result, message} = await runRejection(HttpMethod.Delete);

        assert.strictEquals(result?.statusCode, HttpStatus.MethodNotAllowed);
        assert.isTrue(message.includes(`rejected: '${healthEndpoint.path}?page=2'`), message);
        assert.isFalse(message.includes(secretSearchParamValue), message);
    });
});
