import {assert} from '@augment-vir/assert';
import {isErrorHttpStatus, type ErrorHttpStatus} from '@augment-vir/common';

/**
 * An error that, when thrown, indicates that the endpoint that threw this error should return a
 * failed status (rather than an internal server error).
 *
 * @category Internal
 * @category Package : @rest-vir/host
 * @package [`@rest-vir/host`](https://www.npmjs.com/package/@rest-vir/host)
 */
export class RejectRequestError extends Error {
    public override readonly name = 'RejectRequestError';

    constructor(
        public readonly httpStatus: ErrorHttpStatus,
        public readonly responseErrorMessage?: string | undefined,
    ) {
        assert.isTrue(isErrorHttpStatus(httpStatus), `Not an error http status: ${httpStatus}.`);
        super(`Request rejected with status ${httpStatus}.`);
    }
}
