import {assertWrap, check} from '@augment-vir/assert';
import {
    copyThroughJson,
    HttpStatus,
    isErrorHttpStatus,
    type Overwrite,
    type PartialWithUndefined,
} from '@augment-vir/common';
import {
    mergeHeaders,
    type BaseRequiredResponseHeaders,
    type DefinableHttpMethod,
    type EndpointDefinition,
    type EndpointMethodDefinition,
    type EndpointResponseHeadersType,
    type ResponseStatusDefinition,
} from '@rest-vir/api';
import {type Shape} from 'object-shape-tester';

/**
 * Options for {@link createMockEndpointResponse} and {@link createMockEndpointFetch}.
 *
 * @category Internal
 * @category Package : @rest-vir/define-service
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export type MockEndpointResponseOptions<
    Endpoint extends EndpointDefinition,
    Method extends DefinableHttpMethod,
    Status extends HttpStatus,
> = Overwrite<
    Omit<MockResponseParams, 'status'>,
    Extract<
        Endpoint['requests'][Method],
        EndpointMethodDefinition
    >['responses'][Status] extends infer StatusDefinition extends ResponseStatusDefinition
        ? (StatusDefinition['responseData'] extends Shape
              ? {
                    body: StatusDefinition['responseData']['runtimeType'];
                }
              : {
                    body?: undefined;
                }) &
              (StatusDefinition['requiredResponseHeaders'] extends BaseRequiredResponseHeaders
                  ? {
                        headers: EndpointResponseHeadersType<Endpoint, Method, Status>;
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
    const Endpoint extends EndpointDefinition,
    const Method extends keyof NoInfer<Endpoint>['requests'],
    const Status extends keyof Extract<
        NoInfer<Endpoint>['requests'][NoInfer<Method>],
        EndpointMethodDefinition
    >['responses'],
>(
    endpoint: Endpoint,
    method: Method,
    status: Status,
    params: Readonly<
        MockEndpointResponseOptions<
            NoInfer<Endpoint>,
            NoInfer<Extract<Method, DefinableHttpMethod>>,
            NoInfer<Extract<Status, HttpStatus>>
        >
    >,
) {
    return createMockResponse({
        ...params,
        status: assertWrap.isEnumValue(
            status,
            HttpStatus,
            `Received invalid status: '${String(status)}'`,
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
        headers: mergeHeaders(
            {
                'content-type': 'application/json',
            },
            headers,
        ),
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
            return Promise.resolve(JSON.stringify(body));
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
    const Endpoint extends EndpointDefinition,
    const Method extends keyof NoInfer<Endpoint>['requests'],
    const Status extends keyof Extract<
        NoInfer<Endpoint>['requests'][NoInfer<Method>],
        EndpointMethodDefinition
    >['responses'],
>(
    endpoint: Endpoint,
    method: Method,
    status: Status,
    params: Readonly<
        Omit<
            MockEndpointResponseOptions<
                NoInfer<Endpoint>,
                NoInfer<Extract<Method, DefinableHttpMethod>>,
                NoInfer<Extract<Status, HttpStatus>>
            >,
            'url'
        >
    >,
): typeof globalThis.fetch {
    return createMockFetch({
        ...params,
        status: assertWrap.isEnumValue(
            status,
            HttpStatus,
            `Received invalid status: '${String(status)}'`,
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
