/**
 * Build the 405 Method Not Allowed message used when either the request's HTTP method is
 * unrecognized or the resolved method isn't defined on the matched route. Shared between the
 * mock-host fetch wrapper and the host package's pre-handler so both paths surface the same
 * string.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function buildMethodNotAllowedMessage({
    method,
    url,
}: Readonly<{
    method: string | undefined;
    url: string;
}>): string {
    return `Method '${(method || '').toUpperCase()}' rejected: '${url}'`;
}
