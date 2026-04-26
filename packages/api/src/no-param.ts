/**
 * Runtime value for {@link NoParam}.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export const NoParam = Symbol('no type parameter');
/**
 * Use to keep track of type parameters that are generic and haven't received a specific type yet
 * (or never will).
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export type NoParam = typeof NoParam;
