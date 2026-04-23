import {assert, check} from '@augment-vir/assert';
import {ensureArray, mapObject, type PartialWithUndefined, stringify} from '@augment-vir/common';
import {
    type AllowedSingleSearchParamValue,
    type BaseSearchParams,
    type EndpointMethodDefinition,
    type NoParam,
    type RouteSearchParamsType,
    type WithPath,
} from '@rest-vir/api';
import {assertValidShape, type Shape} from 'object-shape-tester';
import {type SetNullishPropertiesAsOptional} from './endpoint-params.js';

export function extractSearchParams<
    const EndpointMethod extends WithPath<EndpointMethodDefinition>,
>(
    endpoint: Readonly<EndpointMethod>,
    params: Readonly<
        PartialWithUndefined<{
            searchParams: RouteSearchParamsType<NoInfer<EndpointMethod>>;
        }>
    >,
): BaseSearchParams {
    const genericParams: Readonly<
        SetNullishPropertiesAsOptional<{
            searchParams: RouteSearchParamsType<NoParam>;
        }>
    > = params;
    const searchParamsRequirements: Record<string, Shape | RegExp> | undefined =
        endpoint.searchParams;

    if (genericParams.searchParams) {
        return mapObject(genericParams.searchParams, (searchKey, rawValue) => {
            const rawValues: NonNullable<AllowedSingleSearchParamValue>[] = ensureArray(rawValue)
                .flat()
                .filter(check.isDefined);

            if (!rawValues.length) {
                return undefined;
            }

            const stringValues: string[] = rawValues.map((innerValue) => String(innerValue));

            const searchRequirement = searchParamsRequirements?.[searchKey];
            if (searchRequirement) {
                if (searchRequirement instanceof RegExp) {
                    stringValues.forEach((stringValue) => {
                        if (!stringValue || !searchRequirement.test(stringValue)) {
                            throw new Error(
                                `Search param '${searchKey}' value does not match RegExp requirement: '${stringify(stringValue)}'`,
                            );
                        }
                    });
                } else {
                    assert.tsType(searchRequirement).equals<Shape>();

                    assertValidShape(
                        rawValue,
                        searchRequirement,
                        {
                            allowExtraKeys: true,
                        },
                        `Search param '${searchKey}' value does not match shape requirement: '${stringify(rawValue)}'`,
                    );
                }
            }

            return {
                key: searchKey,
                value: stringValues,
            };
        });
    } else {
        return {};
    }
}
