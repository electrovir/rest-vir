import {combineErrorMessages, type HttpStatus} from '@augment-vir/common';

/**
 * An error thrown internally from rest-vir while handling an request. This will not include errors
 * thrown by an endpoint or WebSocket implementation itself.
 *
 * The default service logger will only log the message of these errors, not the whole stack track
 * (so logs are easier to read).
 *
 * @category Internal
 * @category Package : @rest-vir/implement-service
 * @package [`@rest-vir/implement-service`](https://www.npmjs.com/package/@rest-vir/implement-service)
 */
export class RestVirHandlerError extends Error {
    public override readonly name = 'RestVirHandlerError';

    constructor(
        params: Parameters<typeof createRestVirHandlerErrorPrefix>[0],
        message: string,
        public readonly status: HttpStatus,
    ) {
        super(combineErrorMessages(createRestVirHandlerErrorPrefix(params), message));
    }
}

/**
 * Creates the handler error string used by {@link RestVirHandlerError}.
 *
 * @category Internal
 * @category Package : @rest-vir/implement-service
 * @package [`@rest-vir/implement-service`](https://www.npmjs.com/package/@rest-vir/implement-service)
 */
export function createRestVirHandlerErrorPrefix(
    params: Readonly<{
        path: PropertyKey;
        apiName: string;
        isWebSocket: boolean | undefined;
        isEndpoint: boolean | undefined;
    }>,
) {
    const routeNoun = params.isWebSocket ? 'WebSocket ' : params.isEndpoint ? 'Endpoint ' : '';

    return `${routeNoun}'${String(params.path)}' failed in service '${params.apiName}'`;
}
