/* node:coverage disable: this file is just types */

import {type HttpStatus, type MaybePromise, type PartialWithUndefined} from '@augment-vir/common';
import {type FastifyReply} from 'fastify';
import {type OutgoingHttpHeaders} from 'node:http';
import {type ImplementedEndpoint} from '../../implementation/implement-endpoint.js';
import {type ImplementedWebSocket} from '../../implementation/implement-websocket.js';
import {type ServerRequest, type ServerResponse} from '../../implementation/raw-route-data.js';
import {setRawResponseHeaders, setResponseHeaders} from '../util/headers.js';

/**
 * Options for `handleRoute`.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type HandleRouteOptions = PartialWithUndefined<{
    /**
     * If set to `true`, all service endpoint handlers will throw their errors, allowing your
     * existing server setup to catch them and handle them as you wish.
     *
     * If set to `false`, all service endpoint handlers will handle the errors internally to prevent
     * accidentally leaking error messages to the frontend.
     *
     * @default false
     */
    throwErrorsForExternalHandling: boolean;
}>;

/**
 * Output from {@link RouteHandler}.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type HandledOutput =
    | {
          body?: never;
          statusCode?: never;
          headers?: Readonly<OutgoingHttpHeaders> | undefined;
          error?: Error | undefined;
      }
    | {
          body?: unknown;
          /**
           * If this is set, then the response is sent with this status code and the given body (if
           * any).
           */
          statusCode: HttpStatus;
          headers?: Readonly<OutgoingHttpHeaders> | undefined;
          error?: Error | undefined;
      }
    /** A value of `undefined` indicates that the response should not be sent yet. */
    | undefined;

/**
 * Params for {@link RouteHandler}.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type RouteHandlerParams = {
    request: ServerRequest;
    response: ServerResponse;
    // todo: why accept both?
    route: Readonly<ImplementedEndpoint | ImplementedWebSocket>;
};

/**
 * An individual endpoint handler. The complete endpoint handler is made up of multiple of these.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export type RouteHandler = (params: Readonly<RouteHandlerParams>) => MaybePromise<HandledOutput>;

/**
 * Handle the output of a handler without sending the response. Similar to
 * {@link handleHandlerOutput} but this one does not send the response.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export function handleHandlerOutputWithoutSending(
    result: Readonly<HandledOutput>,
    response: ServerResponse,
): undefined | HandledOutput {
    if (result?.headers) {
        setResponseHeaders(response, result.headers);
        /**
         * Also set headers on the raw Node response so they survive `response.hijack()`. Fastify
         * headers set via `response.header()` are lost when the response is hijacked.
         */
        setRawResponseHeaders(response.raw, result.headers);
    }

    if (result?.statusCode) {
        response.statusCode = result.statusCode;

        return {
            body: result.body,
            statusCode: result.statusCode,
        };
    }

    return undefined;
}

/**
 * Handle the output of a handler. Setting headers, sending the response, etc.
 *
 * @category Internal
 * @category Package : @rest-vir/run-service
 * @package [`@rest-vir/run-service`](https://www.npmjs.com/package/@rest-vir/run-service)
 */
export function handleHandlerOutput(
    result: Readonly<HandledOutput>,
    response: ServerResponse,
): undefined | FastifyReply {
    if (result?.headers) {
        setResponseHeaders(response, result.headers);
        /**
         * Also set headers on the raw Node response so they survive `response.hijack()`. Fastify
         * headers set via `response.header()` are lost when the response is hijacked.
         */
        setRawResponseHeaders(response.raw, result.headers);
    }

    if (result?.statusCode) {
        response.statusCode = result.statusCode;

        if (result.body) {
            return response.send(result.body);
        } else {
            return response.send();
        }
    }

    return undefined;
}
