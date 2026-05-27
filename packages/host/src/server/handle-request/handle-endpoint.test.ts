import {assert} from '@augment-vir/assert';
import {type AnyObject, HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineApi, defineEndpoint} from '@rest-vir/api';
import {type EndpointImplementation} from '../../implementation/implement-endpoint.js';
import {
    type RunningServerInfo,
    type ServerRequest,
    type ServerResponse,
} from '../../implementation/raw-route-data.js';
import {silentServerLogger} from '../../implementation/server-logger.js';
import {handleEndpointRequest} from './handle-endpoint.js';

const endpointDefinition = defineEndpoint({
    path: '/example',
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

const api = defineApi({
    apiName: 'handle-endpoint test api',
    endpoints: [endpointDefinition],
    webSockets: [],
});

describe(handleEndpointRequest.name, () => {
    it('throws when the api implementation is missing a definition for the dispatched method', async () => {
        /**
         * Forge an implementation that has POST but the definition only declares GET. The api type
         * system pairs methods between implementation and definition, so this case can only happen
         * when something bypasses those types. Verifying the runtime guard fires anyway.
         */
        const forgedImplementation: EndpointImplementation = {
            path: endpointDefinition.path,
            isEndpoint: true,
            isWebSocket: false,
            definition: endpointDefinition,
            implementation: {
                [HttpMethod.Post]: () => ({
                    [HttpStatus.Ok]: {
                        responseData: undefined,
                    },
                }),
            },
        };

        await assert.throws(
            async () =>
                await handleEndpointRequest({
                    endpoint: forgedImplementation,
                    request: {
                        method: HttpMethod.Post,
                        originalUrl: '/example',
                        params: {},
                        headers: {},
                        restVirContext: {
                            attach: {
                                context: undefined,
                                requestData: undefined,
                                searchParams: {},
                                protocols: [],
                            },
                        },
                    } as AnyObject as ServerRequest,
                    response: {} as ServerResponse,
                    attachId: 'attach',
                    server: {} as RunningServerInfo,
                    serverLogger: silentServerLogger,
                    api,
                }),
            {
                matchMessage: `No definition found for method '${HttpMethod.Post}'`,
            },
        );
    });

    it('accepts a string body on an undeclared error status', async () => {
        /**
         * `DefaultErrorResponseType` (`undefined | string`) is the contract for error statuses that
         * the endpoint definition did not explicitly declare a `responses[Status]` entry for. The
         * type system allows it, so the runtime must too.
         */
        const undeclaredErrorImpl: EndpointImplementation = {
            path: endpointDefinition.path,
            isEndpoint: true,
            isWebSocket: false,
            definition: endpointDefinition,
            implementation: {
                [HttpMethod.Get]: () => ({
                    [HttpStatus.BadRequest]: {
                        responseData: 'Please enter a question.',
                    },
                }),
            },
        };

        const handled = await handleEndpointRequest({
            endpoint: undeclaredErrorImpl,
            request: {
                method: HttpMethod.Get,
                originalUrl: '/example',
                params: {},
                headers: {},
                restVirContext: {
                    attach: {
                        context: undefined,
                        requestData: undefined,
                        searchParams: {},
                        protocols: [],
                    },
                },
            } as AnyObject as ServerRequest,
            response: {} as ServerResponse,
            attachId: 'attach',
            server: {} as RunningServerInfo,
            serverLogger: silentServerLogger,
            api,
        });

        assert.deepEquals(handled, {
            statusCode: HttpStatus.BadRequest,
            body: 'Please enter a question.',
            headers: {
                'content-type': 'application/json',
            },
        });
    });

    it('accepts an undefined body on an undeclared error status', async () => {
        /**
         * `DefaultErrorResponseType` is `undefined | string`. The undefined half of the union must
         * round-trip the same way the string half does — an undeclared 4xx status with
         * `responseData: undefined` should produce the corresponding status code with an empty
         * body, not throw.
         */
        const undefinedErrorImpl: EndpointImplementation = {
            path: endpointDefinition.path,
            isEndpoint: true,
            isWebSocket: false,
            definition: endpointDefinition,
            implementation: {
                [HttpMethod.Get]: () => ({
                    [HttpStatus.BadRequest]: {
                        responseData: undefined,
                    },
                }),
            },
        };

        const handled = await handleEndpointRequest({
            endpoint: undefinedErrorImpl,
            request: {
                method: HttpMethod.Get,
                originalUrl: '/example',
                params: {},
                headers: {},
                restVirContext: {
                    attach: {
                        context: undefined,
                        requestData: undefined,
                        searchParams: {},
                        protocols: [],
                    },
                },
            } as AnyObject as ServerRequest,
            response: {} as ServerResponse,
            attachId: 'attach',
            server: {} as RunningServerInfo,
            serverLogger: silentServerLogger,
            api,
        });

        assert.deepEquals(handled, {
            statusCode: HttpStatus.BadRequest,
            body: undefined,
            headers: {
                'content-type': 'application/json',
            },
        });
    });

    it('rejects a non-string body on an undeclared error status', async () => {
        /**
         * `DefaultErrorResponseType` only allows `undefined | string`. An object body for an
         * undeclared error status violates the contract and must still throw.
         */
        const nonStringErrorImpl: EndpointImplementation = {
            path: endpointDefinition.path,
            isEndpoint: true,
            isWebSocket: false,
            definition: endpointDefinition,
            implementation: {
                [HttpMethod.Get]: () =>
                    ({
                        [HttpStatus.BadRequest]: {
                            responseData: {
                                error: 'object body is not allowed for undeclared error statuses',
                            },
                        },
                    }) as never,
            },
        };

        await assert.throws(
            async () =>
                await handleEndpointRequest({
                    endpoint: nonStringErrorImpl,
                    request: {
                        method: HttpMethod.Get,
                        originalUrl: '/example',
                        params: {},
                        headers: {},
                        restVirContext: {
                            attach: {
                                context: undefined,
                                requestData: undefined,
                                searchParams: {},
                                protocols: [],
                            },
                        },
                    } as AnyObject as ServerRequest,
                    response: {} as ServerResponse,
                    attachId: 'attach',
                    server: {} as RunningServerInfo,
                    serverLogger: silentServerLogger,
                    api,
                }),
            {
                matchMessage: 'Got response data but none was expected.',
            },
        );
    });

    it('rejects a body on an undeclared success status', async () => {
        /**
         * `undefined | string` is the default only for `ErrorHttpStatus`. A success status (e.g.
         * 202 Accepted) that wasn't declared must still reject any `responseData`, since success
         * statuses have no default response type.
         */
        const undeclaredSuccessImpl: EndpointImplementation = {
            path: endpointDefinition.path,
            isEndpoint: true,
            isWebSocket: false,
            definition: endpointDefinition,
            implementation: {
                [HttpMethod.Get]: () =>
                    ({
                        [HttpStatus.Accepted]: {
                            responseData: 'string body is not allowed for undeclared success',
                        },
                    }) as never,
            },
        };

        await assert.throws(
            async () =>
                await handleEndpointRequest({
                    endpoint: undeclaredSuccessImpl,
                    request: {
                        method: HttpMethod.Get,
                        originalUrl: '/example',
                        params: {},
                        headers: {},
                        restVirContext: {
                            attach: {
                                context: undefined,
                                requestData: undefined,
                                searchParams: {},
                                protocols: [],
                            },
                        },
                    } as AnyObject as ServerRequest,
                    response: {} as ServerResponse,
                    attachId: 'attach',
                    server: {} as RunningServerInfo,
                    serverLogger: silentServerLogger,
                    api,
                }),
            {
                matchMessage: 'Got response data but none was expected.',
            },
        );
    });

    it('throws when the implementation returns multiple status entries', async () => {
        /**
         * Forge an implementation that returns two status keys at once. The framework's
         * `RequireExactlyOne` type prevents this in user code; we bypass it to hit the runtime
         * guard.
         */
        const multiStatusImplementation: EndpointImplementation = {
            path: endpointDefinition.path,
            isEndpoint: true,
            isWebSocket: false,
            definition: endpointDefinition,
            implementation: {
                [HttpMethod.Get]: () =>
                    ({
                        [HttpStatus.Ok]: {
                            responseData: undefined,
                        },
                        [HttpStatus.Accepted]: {
                            responseData: undefined,
                        },
                    }) as never,
            },
        };

        await assert.throws(
            async () =>
                await handleEndpointRequest({
                    endpoint: multiStatusImplementation,
                    request: {
                        method: HttpMethod.Get,
                        originalUrl: '/example',
                        params: {},
                        headers: {},
                        restVirContext: {
                            attach: {
                                context: undefined,
                                requestData: undefined,
                                searchParams: {},
                                protocols: [],
                            },
                        },
                    } as AnyObject as ServerRequest,
                    response: {} as ServerResponse,
                    attachId: 'attach',
                    server: {} as RunningServerInfo,
                    serverLogger: silentServerLogger,
                    api,
                }),
            {
                matchMessage: 'Expected exactly one status code response key',
            },
        );
    });
});
