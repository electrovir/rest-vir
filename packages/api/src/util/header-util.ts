import {check} from '@augment-vir/assert';
import {type IncomingHttpHeaders, type OutgoingHttpHeaders} from 'node:http';

/**
 * Allowed header types for header manipulation utilities:
 *
 * - {@link mergeHeaders}
 * - {@link consolidateHeaders}
 * - {@link headersToObject}
 *
 * @category Internal
 * @category Package : @rest-vir/define-service
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export type AllowedHeaders =
    | HeadersInit
    | Record<string, string | string[]>
    | [
          string,
          string | string[],
      ][]
    | IncomingHttpHeaders
    | OutgoingHttpHeaders;

/**
 * Merges multiple headers containers into a single `Headers` instance.
 *
 * @category Internal
 * @category Package : @rest-vir/define-service
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export function mergeHeaders(...headers: AllowedHeaders[]): Headers {
    const finalHeaders = new Headers();
    headers.forEach((headersInit) => {
        const consolidatedHeadersInit = consolidateHeaders(headersInit);

        Array.from(consolidatedHeadersInit.entries()).forEach(
            ([
                key,
                value,
            ]) => {
                finalHeaders.append(key, value);
            },
        );
    });
    return finalHeaders;
}

/**
 * Consolidate the headers input of whatever valid headers container into a `Headers` instance.
 *
 * @category Internal
 * @category Package : @rest-vir/define-service
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export function consolidateHeaders(headers: AllowedHeaders): Headers {
    const newHeaders = new Headers();

    const headersArray: [
        string,
        string | number | undefined | string[],
    ][] =
        headers instanceof Headers
            ? Array.from(headers.entries())
            : check.isArray(headers)
              ? headers
              : Object.entries(headers);

    headersArray.forEach(
        ([
            key,
            value,
        ]) => {
            if (value == undefined) {
                return;
            }

            if (check.isArray(value)) {
                value.forEach((innerValue) => newHeaders.append(key, innerValue));
            } else {
                newHeaders.append(key, String(value satisfies string | number));
            }
        },
    );

    return newHeaders;
}

/**
 * Consolidate the headers input of whatever valid headers container into an object of header
 * values.
 *
 * @category Internal
 * @category Package : @rest-vir/define-service
 * @package [`@rest-vir/define-service`](https://www.npmjs.com/package/@rest-vir/define-service)
 */
export function headersToObject(headers: AllowedHeaders): Record<string, string> {
    /**
     * `consolidateHeaders` returns a `Headers` instance whose `.entries()` iterator yields each
     * key at most once (multi-value headers are joined into a comma-separated string per the
     * Fetch standard), so the resulting object's values are always strings. There's no need to
     * handle a duplicate-key branch here.
     */
    return Object.fromEntries(consolidateHeaders(headers).entries());
}
