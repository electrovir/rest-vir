import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {setupService} from './test-start-api-server.mock.js';

describe(setupService.name, () => {
    it('rejects when the spawned script fails to import a missing module (stderr branch)', async () => {
        await assert.throws(setupService('throws-on-import'), {
            matchMessage: 'failed to start',
        });
    });

    it('rejects when the spawned script exits before printing a startup line', async () => {
        await assert.throws(setupService('exits-before-start'), {
            matchMessage: 'before startup',
        });
    });
});
