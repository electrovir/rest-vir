import {assert} from '@augment-vir/assert';
import {HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {RejectRequestError} from './reject-request.error.js';

describe(RejectRequestError.name, () => {
    it('requires an error HTTP status', () => {
        // @ts-expect-error: http status intentionally not an error one
        assert.throws(() => new RejectRequestError(HttpStatus.Accepted));

        assert.strictEquals(
            new RejectRequestError(HttpStatus.NotFound).httpStatus,
            HttpStatus.NotFound,
        );
    });
});
