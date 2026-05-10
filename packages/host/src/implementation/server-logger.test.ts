import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {createServerLogger, defaultServerLogger, silentServerLogger} from './server-logger.js';

describe(createServerLogger.name, () => {
    it('returns the default logger when no option is provided', () => {
        const logger = createServerLogger();
        assert.strictEquals(logger.error, defaultServerLogger.error);
        assert.strictEquals(logger.info, defaultServerLogger.info);
    });

    it('uses a user-provided logger function', () => {
        const errors: Error[] = [];
        const logger = createServerLogger({
            error(error) {
                errors.push(error);
            },
        });
        const sample = new Error('hi');
        logger.error(sample);
        assert.deepEquals(errors, [
            sample,
        ]);
        assert.strictEquals(logger.info, defaultServerLogger.info);
    });

    it('silences a logger when the user sets it to undefined', () => {
        const logger = createServerLogger({
            error: undefined,
            info: undefined,
        });
        assert.strictEquals(logger.error, silentServerLogger.error);
        assert.strictEquals(logger.info, silentServerLogger.info);
    });
});
