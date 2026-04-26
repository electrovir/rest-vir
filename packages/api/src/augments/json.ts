import {wrapInTry} from '@augment-vir/common';

/**
 * Parses a JSON string and converts `'undefined'` to `undefined`.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function parseJsonWithUndefined(data: string): any {
    if (!data || data === 'undefined') {
        return undefined;
    }

    return wrapInTry(() => JSON.parse(data), {
        fallbackValue: data,
    });
}
