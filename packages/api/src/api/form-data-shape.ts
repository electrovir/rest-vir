import {createCustomShape, isSchema, isShape, Kind} from 'object-shape-tester';

const formDataShapeKind = 'FormData' as string;

/**
 * A custom shape definition for requests that require `FormData` as the body.
 *
 * @category Shape
 * @category Package : @rest-vir/api
 * @example
 *
 * ```ts
 * import {defineEndpoint, formDataShape, HttpMethod, HttpStatus} from '@rest-vir/api';
 *
 * const uploadEndpoint = defineEndpoint({
 *     path: '/upload',
 *     requests: {
 *         [HttpMethod.Post]: {
 *             requestData: formDataShape(),
 *             responses: {
 *                 [HttpStatus.Ok]: {
 *                     responseData: undefined,
 *                 },
 *             },
 *         },
 *     },
 * });
 * ```
 *
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export const formDataShape = createCustomShape<FormData>({
    name: formDataShapeKind,
    checkValue(value): value is FormData {
        return value instanceof FormData;
    },
    default: new FormData(),
});

/**
 * Check if the input is a shape definition for {@link formDataShape}.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function isFormDataShape(shape: unknown): boolean {
    if (isShape(shape)) {
        return isFormDataShape(shape.$_schema);
    } else if (isSchema(shape)) {
        return shape[Kind] === formDataShapeKind;
    } else {
        return false;
    }
}
