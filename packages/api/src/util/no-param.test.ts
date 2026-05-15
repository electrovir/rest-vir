import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {NoParam} from './no-param.js';

describe('NoParam', () => {
    it('is a symbol at runtime', () => {
        assert.strictEquals(typeof NoParam, 'symbol');
    });

    it('has a descriptive symbol description', () => {
        assert.strictEquals(NoParam.description, 'no type parameter');
    });

    it('is referentially unique per import', () => {
        /**
         * `NoParam` is declared with `Symbol(...)` rather than `Symbol.for(...)` so it must not
         * collide with any symbol from the global registry that happens to share its description.
         */
        assert.notStrictEquals(NoParam, Symbol.for('no type parameter'));
        assert.notStrictEquals(NoParam, Symbol('no type parameter'));
    });

    it('exposes a `NoParam` type that is the symbol value type', () => {
        const value: NoParam = NoParam;
        assert.strictEquals(value, NoParam);
        assert.tsType<NoParam>().equals<typeof NoParam>();
    });
});
