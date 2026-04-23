import {assertWrap, check} from '@augment-vir/assert';
import {
    copyThroughJson,
    HttpStatus,
    isErrorHttpStatus,
    type Overwrite,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {type EndpointMethodDefinition} from '@rest-vir/api';
import {type Shape} from 'object-shape-tester';
import {
    type BaseRequiredResponseHeaders,
    type ExtractResponseHeadersType,
    type ResponseStatusDefinition,
} from '../../api/src/endpoint.js';

/**
 * Options for {@link createMockEndpointResponse} and {@link createMockEndpointFetch}.
 *
 * @category Internal
 * @category Package : @rest-vir/define-service
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export type MockEndpointResponseOptions<
    EndpointMethodToMock extends EndpointMethodDefinition,
    ResponseStatus extends keyof NoInfer<EndpointMethodToMock>['responses'],
> = Overwrite<
    Omit<MockResponseParams, 'status'>,
    EndpointMethodToMock['responses'][ResponseStatus] extends ResponseStatusDefinition
        ? (EndpointMethodToMock['responses'][ResponseStatus]['responseData'] extends Shape
              ? {
                    body: EndpointMethodToMock['responses'][ResponseStatus]['responseData']['runtimeType'];
                }
              : {
                    body?: undefined;
                }) &
              (EndpointMethodToMock['responses'][ResponseStatus]['requiredResponseHeaders'] extends BaseRequiredResponseHeaders
                  ? {
                        headers: ExtractResponseHeadersType<
                            EndpointMethodToMock['responses'][ResponseStatus]['requiredResponseHeaders']
                        >;
                    }
                  : unknown)
        : unknown
>;

/**
 * Creates a mocked fetch `Response` object for the given endpoint (requiring a type safe body). For
 * more generic response mocking, see {@link createMockResponse}.
 *
 * @category Testing : Client (Frontend)
 * @category Package : @rest-vir/define-service
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export function createMockEndpointResponse<
    const EndpointMethodToMock extends EndpointMethodDefinition,
    const ResponseStatus extends keyof NoInfer<EndpointMethodToMock>['responses'],
>(
    endpoint: EndpointMethodToMock,
    responseStatus: ResponseStatus,
    params: Readonly<
        MockEndpointResponseOptions<NoInfer<EndpointMethodToMock>, NoInfer<ResponseStatus>>
    >,
) {
    return createMockResponse({
        ...params,
        status: assertWrap.isEnumValue(
            responseStatus,
            HttpStatus,
            `Received invalid status: '${String(responseStatus)}'`,
        ),
    });
}

/**
 * Parameters for {@link createMockResponse}.
 *
 * @category Internal
 * @category Package : @rest-vir/define-service
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export type MockResponseParams = Overwrite<
    Partial<Pick<Response, 'redirected' | 'statusText' | 'type'>>,
    PartialWithUndefined<{
        status: HttpStatus;
        url: string | URL;
        headers: HeadersInit;
        body: unknown;
    }>
>;

/**
 * A `ReadableStream` implementation used by {@link createMockResponse} to create its streamed `body`
 * property.
 *
 * @category Internal
 * @category Package : @rest-vir/define-service
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export class MockResponseBodyStream extends ReadableStream<Uint8Array<ArrayBuffer>> {
    constructor(
        body: unknown,
        private getReaderCalled: () => void,
    ) {
        super({
            start(controller) {
                if (body instanceof Uint8Array) {
                    controller.enqueue(body as Uint8Array<ArrayBuffer>);
                } else if (check.isString(body)) {
                    controller.enqueue(new TextEncoder().encode(body));
                } else if (body) {
                    controller.enqueue(new TextEncoder().encode(JSON.stringify(body)));
                }
                controller.close();
            },
        });
    }

    public override getReader(...args: any): any {
        this.getReaderCalled();
        return super.getReader(...args);
    }
}

/**
 * Creates a mocked, but realistic, `Response` object. Use this when mocking `fetch`. See
 * {@link createMockEndpointResponse} for a more type safe version, specific to individual
 * endpoints.
 *
 * @category Internal
 * @category Package : @rest-vir/define-service
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export function createMockResponse(params: Readonly<MockResponseParams> = {}): Response {
    const {
        headers = [],
        status = HttpStatus.Ok,
        url = '',
        redirected,
        statusText = '',
        type = 'basic',
        body,
    } = params;

    function createArrayBuffer(this: void) {
        return check.instanceOf(body, ArrayBuffer)
            ? body
            : new TextEncoder().encode(typeof body === 'string' ? body : JSON.stringify(body))
                  .buffer;
    }

    let bodyUsed = false;

    return {
        headers: new Headers(headers),
        ok: !isErrorHttpStatus(status),
        body: new MockResponseBodyStream(body, () => {
            if (bodyUsed) {
                throw new TypeError('Body is disturbed or locked.');
            }
            bodyUsed = true;
        }),
        get bodyUsed() {
            return bodyUsed;
        },
        status,
        arrayBuffer() {
            if (bodyUsed) {
                throw new TypeError('Body is disturbed or locked.');
            }
            bodyUsed = true;
            return Promise.resolve(createArrayBuffer());
        },
        blob() {
            if (bodyUsed) {
                throw new TypeError('Body is disturbed or locked.');
            }
            bodyUsed = true;
            return Promise.resolve(new Blob([createArrayBuffer()]));
        },
        bytes() {
            if (bodyUsed) {
                throw new TypeError('Body is disturbed or locked.');
            }
            bodyUsed = true;
            return Promise.resolve(
                check.instanceOf(body, Uint8Array) ? body : new Uint8Array(createArrayBuffer()),
            );
        },
        formData() {
            if (bodyUsed) {
                throw new TypeError('Body is disturbed or locked.');
            }
            bodyUsed = true;
            const formData = new FormData();
            if (check.isObject(body)) {
                Object.entries(body).forEach(
                    ([
                        key,
                        value,
                    ]) => {
                        formData.append(
                            key,
                            check.isString(value)
                                ? value
                                : check.instanceOf(value, Blob)
                                  ? value
                                  : JSON.stringify(value),
                        );
                    },
                );
            }
            return Promise.resolve(formData);
        },
        text() {
            if (bodyUsed) {
                throw new TypeError('Body is disturbed or locked.');
            }
            bodyUsed = true;
            return Promise.resolve(check.isString(body) ? body : JSON.stringify(body));
        },
        json() {
            if (bodyUsed) {
                throw new TypeError('Body is disturbed or locked.');
            }
            bodyUsed = true;
            return Promise.resolve(check.isString(body) ? JSON.parse(body) : copyThroughJson(body));
        },
        url: String(url),
        redirected: !!redirected,
        statusText,
        type,
        clone() {
            return createMockResponse(params);
        },
    };
}

/**
 * Creates a mock `fetch` function that returns a mock `Response` object that matches the
 * expectations of the given endpoint. For more generic `fetch` mocking, see
 * {@link createMockFetch}.
 *
 * @category Testing : Client (Frontend)
 * @category Package : @rest-vir/define-service
 * @example
 *
 * ```ts
 * import {createMockEndpointFetch, fetchEndpoint} from '@rest-vir/define-service';
 *
 * fetchEndpoint(myService.endpoints['/my-path'], {
 *     fetch: createMockEndpointFetch(myService.endpoints['/my-path'], {
 *         body: 'some body',
 *         // there are other properties that can be mocked as well, see the types for more details
 *     }),
 * });
 * ```
 *
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export function createMockEndpointFetch<
    const EndpointMethodToMock extends EndpointMethodDefinition,
    const ResponseStatus extends keyof NoInfer<EndpointMethodToMock>['responses'],
>(
    endpoint: EndpointMethodToMock,
    responseStatus: ResponseStatus,
    params: Readonly<
        Omit<
            MockEndpointResponseOptions<NoInfer<EndpointMethodToMock>, NoInfer<ResponseStatus>>,
            'url'
        >
    >,
): typeof globalThis.fetch {
    return createMockFetch({
        ...params,
        status: assertWrap.isEnumValue(
            responseStatus,
            HttpStatus,
            `Received invalid status: '${String(responseStatus)}'`,
        ),
    });
}

/**
 * Creates a mock `fetch` function that always returns a mock `Response` object based on the given
 * response parameters. For more control over a mocked `fetch`, use {@link createMockResponse}
 * directly. See {@link createMockEndpointFetch} for a more type safe version, specific to individual
 * endpoints.
 *
 * @category Internal
 * @category Package : @rest-vir/define-service
 * @example
 *
 * ```ts
 * import {createMockFetch, fetchEndpoint} from '@rest-vir/define-service';
 *
 * fetchEndpoint(myService.endpoints['/my-path'], {
 *     fetch: createMockFetch({
 *         body: 'some body',
 *         // there are other properties that can be mocked as well, see the types for more details
 *     }),
 * });
 * ```
 *
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export function createMockFetch(
    params: Readonly<Omit<MockResponseParams, 'url'>> = {},
): typeof globalThis.fetch {
    return (...args: Parameters<(typeof globalThis)['fetch']>) => {
        const url: string = check.instanceOf(args[0], URL)
            ? args[0].toString()
            : check.isString(args[0])
              ? args[0]
              : args[0].url;

        const mockResponse = createMockResponse({
            ...params,
            url,
        });
        return Promise.resolve(mockResponse);
    };
}
