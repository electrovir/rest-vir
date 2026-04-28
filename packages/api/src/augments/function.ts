/**
 * Creates a function type in a single-method object so its parameter type is checked bivariantly
 * under `--strictFunctionTypes`. Method-syntax members are bivariant; bare function-typed
 * properties are contravariant.
 *
 * @category Internal
 */
export type MakeBivariantFunction<Params, Return> = {
    callback(params: Params): Return;
}['callback'];
