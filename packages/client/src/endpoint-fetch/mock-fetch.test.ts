/* eslint-disable @virmator/prefer-parse-url */

import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineEndpoint} from '@rest-vir/api';
import {defineShape} from 'object-shape-tester';
import {
    createMockEndpointFetch,
    createMockEndpointResponse,
    createMockFetch,
    createMockResponse,
    MockResponseBodyStream,
} from './mock-fetch.js';

const testEndpoint = defineEndpoint({
    path: '/test',
    requests: {
        [HttpMethod.Post]: {
            requestData: defineShape({
                somethingHere: '',
                testValue: 0,
            }),
            responses: {
                [HttpStatus.Ok]: {
                    responseData: defineShape({
                        requestData: {
                            somethingHere: '',
                            testValue: 0,
                        },
                        result: 0,
                    }),
                },
            },
        },
    },
});

const mockResponseData = {
    requestData: {
        somethingHere: 'hi',
        testValue: 4,
    },
    result: -1,
};

describe(createMockEndpointResponse.name, () => {
    it('creates a mock response', async () => {
        const response = createMockEndpointResponse(testEndpoint, HttpMethod.Post, HttpStatus.Ok, {
            body: mockResponseData,
        });

        assert.deepEquals(await response.json(), mockResponseData);
    });
});

describe(createMockEndpointFetch.name, () => {
    it('creates a mock fetch', async () => {
        const mockFetch = createMockEndpointFetch(testEndpoint, HttpMethod.Post, HttpStatus.Ok, {
            body: mockResponseData,
        });

        const response = await mockFetch('some-url');

        assert.deepEquals(await response.json(), mockResponseData);
        assert.strictEquals(response.url, 'some-url');
    });
    it('handles a URL object input', async () => {
        assert.strictEquals(
            (
                await createMockEndpointFetch(testEndpoint, HttpMethod.Post, HttpStatus.Ok, {
                    body: mockResponseData,
                })(new URL('https://example.com/some-url2'))
            ).url,
            'https://example.com/some-url2',
        );
    });
    it('handles a Request input', async () => {
        assert.strictEquals(
            (
                await createMockEndpointFetch(testEndpoint, HttpMethod.Post, HttpStatus.Ok, {
                    body: mockResponseData,
                })(new Request('https://example.com/some-url3'))
            ).url,
            'https://example.com/some-url3',
        );
    });
});

describe(createMockFetch.name, () => {
    it('handles a string URL', async () => {
        const response = await createMockFetch()('localhost:0');
        assert.strictEquals(response.url, 'localhost:0');
    });
    it('handles a URL instance', async () => {
        const response = await createMockFetch()(new URL('localhost:0'));
        assert.strictEquals(response.url, 'localhost:0');
    });
    it('handles a request init', async () => {
        const response = await createMockFetch()(new Request('localhost:0'));
        assert.strictEquals(response.url, 'localhost:0');
    });
});

async function readBodyStream(response: Response): Promise<unknown> {
    assert.isDefined(response.body);

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while (true) {
        const {done, value} = await reader.read();
        if (done) {
            break;
        }
        result += decoder.decode(value, {
            stream: true,
        });
    }

    result += decoder.decode();

    return result;
}

describe('MockResponseBodyStream', () => {
    it('is a ReadableStream subclass', () => {
        const stream = new MockResponseBodyStream('hi', () => {});
        assert.instanceOf(stream, ReadableStream);
    });

    it('invokes the getReader callback exactly once per getReader call', () => {
        let getReaderCalls = 0;
        const stream = new MockResponseBodyStream('hi', () => {
            getReaderCalls++;
        });
        stream.getReader();
        assert.strictEquals(getReaderCalls, 1);
    });

    it('streams a Uint8Array body verbatim', async () => {
        const body = new TextEncoder().encode('payload');
        const stream = new MockResponseBodyStream(body, () => {});
        const reader = stream.getReader();
        const {value} = await reader.read();
        assert.strictEquals(new TextDecoder().decode(value), 'payload');
    });

    it('JSON-encodes a non-string, non-Uint8Array body', async () => {
        const stream = new MockResponseBodyStream(
            {
                hi: 'bye',
            },
            () => {},
        );
        const reader = stream.getReader();
        const {value} = await reader.read();
        assert.strictEquals(new TextDecoder().decode(value), '{"hi":"bye"}');
    });

    it('closes immediately when given no body', async () => {
        const stream = new MockResponseBodyStream(undefined, () => {});
        const reader = stream.getReader();
        const {done} = await reader.read();
        assert.isTrue(done);
    });
});

describe(createMockResponse.name, () => {
    it('supports Response.body for a string body', async () => {
        const response = createMockResponse({
            body: 'hi',
        });

        const result = await readBodyStream(response);

        assert.strictEquals(result, 'hi');
        assert.isTrue(response.bodyUsed);
        assert.throws(() => response.body?.getReader());
    });
    it('supports Response.body for an object body', async () => {
        const response = createMockResponse({
            body: {
                hi: 'hi',
            },
        });

        const result = await readBodyStream(response);

        assert.strictEquals(
            result,
            JSON.stringify({
                hi: 'hi',
            }),
        );
        assert.isTrue(response.bodyUsed);
        assert.throws(() => response.body?.getReader());
    });
    it('supports Response.body for a Uint8Array body', async () => {
        const body: Uint8Array = new TextEncoder().encode('bye');
        const response = createMockResponse({
            body,
        });

        const result = await readBodyStream(response);

        assert.strictEquals(result, 'bye');
        assert.isTrue(response.bodyUsed);
        assert.throws(() => response.body?.getReader());
    });
    it('supports Response.arrayBuffer()', async () => {
        const response = createMockResponse({
            body: 'hi',
        });

        assert.strictEquals(new TextDecoder().decode(await response.arrayBuffer()), 'hi');
        assert.isTrue(response.bodyUsed);
        await assert.throws(() => response.arrayBuffer());
    });
    it('supports Response.arrayBuffer() for an ArrayBuffer body', async () => {
        const body = new TextEncoder().encode('hello').buffer;
        const response = createMockResponse({
            body,
        });

        assert.strictEquals(new TextDecoder().decode(await response.arrayBuffer()), 'hello');
        assert.isTrue(response.bodyUsed);
        await assert.throws(() => response.arrayBuffer());
    });
    it('supports Response.blob()', async () => {
        const response = createMockResponse({
            body: 'hi',
        });

        assert.strictEquals(await (await response.blob()).text(), 'hi');
        assert.isTrue(response.bodyUsed);
        await assert.throws(() => response.blob());
    });
    it('supports Response.bytes()', async () => {
        const response = createMockResponse({
            body: 'hi',
        });

        assert.strictEquals(new TextDecoder().decode(await response.bytes()), 'hi');
        assert.isTrue(response.bodyUsed);
        await assert.throws(() => response.bytes());
    });
    it('supports Response.text() returning a string body unchanged', async () => {
        const response = createMockResponse({
            body: 'hi',
        });

        assert.strictEquals(await response.text(), 'hi');
        assert.isTrue(response.bodyUsed);
        await assert.throws(() => response.text());
    });

    it('supports Response.text() JSON-stringify a non-string body', async () => {
        const response = createMockResponse({
            body: {
                hi: 'bye',
            },
        });

        assert.strictEquals(await response.text(), '{"hi":"bye"}');
    });
    it('supports Response.formData()', async () => {
        const response = createMockResponse({
            body: {
                hi: 'bye',
                hi2: {
                    not: 'a string',
                },
                hi3: new Blob(['something'], {
                    type: 'text/plain',
                }),
            },
        });

        const formData = await response.formData();
        const formEntries = Array.from(formData.entries());

        assert.deepEquals(formEntries.slice(0, 2), [
            [
                'hi',
                'bye',
            ],
            [
                'hi2',
                JSON.stringify({
                    not: 'a string',
                }),
            ],
        ]);

        assert.instanceOf(formEntries[2]?.[1], Blob);
        assert.strictEquals(formEntries[2][0], 'hi3');

        assert.isTrue(response.bodyUsed);
        await assert.throws(() => response.formData());
    });
    it('supports Response.json()', async () => {
        const response = createMockResponse({
            body: {
                hi: 'bye',
            },
        });

        assert.deepEquals(await response.json(), {
            hi: 'bye',
        });
        assert.isTrue(response.bodyUsed);
        await assert.throws(() => response.json());
    });
    it('defaults to Ok status and an ok:true response', () => {
        const response = createMockResponse();
        assert.strictEquals(response.status, HttpStatus.Ok);
        assert.isTrue(response.ok);
    });

    it('sets ok:false for an error status', () => {
        const response = createMockResponse({
            status: HttpStatus.InternalServerError,
        });
        assert.isFalse(response.ok);
        assert.strictEquals(response.status, HttpStatus.InternalServerError);
    });

    it('sets ok:false for a client error status', () => {
        const response = createMockResponse({
            status: HttpStatus.NotFound,
        });
        assert.isFalse(response.ok);
    });

    it('omits the content-type header when there is no body', () => {
        const response = createMockResponse();
        assert.strictEquals(response.headers.get('content-type'), null);
    });

    it('defaults the content-type header to text/plain for a string body', () => {
        const response = createMockResponse({
            body: 'hi',
        });
        assert.strictEquals(response.headers.get('content-type'), 'text/plain');
    });

    it('defaults the content-type header to application/json for a non-string body', () => {
        const response = createMockResponse({
            body: {
                hi: 'bye',
            },
        });
        assert.strictEquals(response.headers.get('content-type'), 'application/json');
    });

    it('merges caller-provided headers with the default content-type', () => {
        const response = createMockResponse({
            body: {
                hi: 'bye',
            },
            headers: {
                'x-custom': 'value',
            },
        });
        assert.strictEquals(response.headers.get('content-type'), 'application/json');
        assert.strictEquals(response.headers.get('x-custom'), 'value');
    });

    it('appends caller-provided content-type to the default rather than replacing it', () => {
        const response = createMockResponse({
            body: {
                hi: 'bye',
            },
            headers: {
                'content-type': 'text/plain',
            },
        });
        assert.strictEquals(response.headers.get('content-type'), 'application/json, text/plain');
    });

    it('coerces a URL instance into a string url', () => {
        const response = createMockResponse({
            url: new URL('https://example.com/path'),
        });
        assert.strictEquals(response.url, 'https://example.com/path');
    });

    it('exposes statusText, redirected, and type passthroughs', () => {
        const response = createMockResponse({
            statusText: 'OK!',
            redirected: true,
            type: 'cors',
        });
        assert.strictEquals(response.statusText, 'OK!');
        assert.isTrue(response.redirected);
        assert.strictEquals(response.type, 'cors');
    });

    it('defaults redirected to false', () => {
        const response = createMockResponse();
        assert.isFalse(response.redirected);
    });

    it('supports Response.clone()', async () => {
        const response = createMockResponse({
            body: {
                hi: 'bye',
            },
        });
        const response2 = response.clone();

        assert.deepEquals(await response.json(), {
            hi: 'bye',
        });
        assert.isTrue(response.bodyUsed);
        await assert.throws(() => response.json());

        assert.deepEquals(await response2.json(), {
            hi: 'bye',
        });
        assert.isTrue(response2.bodyUsed);
        await assert.throws(() => response2.json());
    });
});
