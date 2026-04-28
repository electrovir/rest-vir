import {type NoParam, type WebSocketDefinition} from '@rest-vir/api';
import {type OverwriteWebSocketMethods, type WebSocketLocation} from '@rest-vir/client';
import {type FastifyReply, type FastifyRequest} from 'fastify';
import {type WebSocket as WsWebSocket} from 'ws';

/**
 * A type alias for the request objects used by rest-vir. Currently this is the `FastifyRequest`
 * object from Fastify.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type ServerRequest = FastifyRequest;

/**
 * A type alias for the response objects used by rest-vir. Currently this is the `FastifyReply`
 * object from Fastify.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type ServerResponse = FastifyReply;

/**
 * A type alias for the WebSocket objects used by rest-vir. Currently this is the `WebSocket` object
 * from the ws package.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type ServerWebSocket<ThisWebSocket extends WebSocketDefinition | NoParam = NoParam> =
    OverwriteWebSocketMethods<WsWebSocket, WebSocketLocation.OnHost, ThisWebSocket>;

/**
 * Information passed to an endpoint or WebSocket about the currently running server.
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export type RunningServerInfo = {
    serviceOrigin: string;
};
