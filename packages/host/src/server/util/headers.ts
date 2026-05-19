import {getObjectTypedEntries} from '@augment-vir/common';
import {type ServerResponse as NodeServerResponse, type OutgoingHttpHeaders} from 'node:http';
import {type ServerResponse} from '../../implementation/raw-route-data.js';

/**
 * Easily apply an object of headers to a Response object. Setting a header to `undefined` removes
 * it.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export function setResponseHeaders(
    response: /**
     * This is a subset of the fastify response type, but without a return type that makes ESLint think
     * that these methods are async (by default it returns the original Fastify reply object which
     * matches PromiseLike and thus confuses ESLint.
     */
    Readonly<Pick<ServerResponse, 'removeHeader' | 'header'>>,
    headers: Readonly<OutgoingHttpHeaders>,
): void {
    getObjectTypedEntries(headers).forEach(
        ([
            name,
            value,
        ]) => {
            if (value == undefined) {
                response.removeHeader(String(name));
            } else {
                response.header(String(name), value);
            }
        },
    );
}

/**
 * Sets headers directly on the raw Node.js `http.ServerResponse`. Unlike headers set via Fastify's
 * `response.header()`, these survive `response.hijack()` because they are written to the underlying
 * Node response. When an endpoint later calls `writeHead()`, these headers are merged in, with
 * `writeHead()` headers taking precedence.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export function setRawResponseHeaders(
    rawResponse: Readonly<Pick<NodeServerResponse, 'setHeader' | 'removeHeader'>>,
    headers: Readonly<OutgoingHttpHeaders>,
): void {
    getObjectTypedEntries(headers).forEach(
        ([
            name,
            value,
        ]) => {
            if (value == undefined) {
                rawResponse.removeHeader(String(name));
            } else {
                rawResponse.setHeader(String(name), value);
            }
        },
    );
}
