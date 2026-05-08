import {assert, check} from '@augment-vir/assert';
import {
    ensureArray,
    mapObject,
    type PartialWithUndefined,
    type SelectFrom,
    stringify,
} from '@augment-vir/common';
import {
    type AllowedSingleSearchParamValue,
    type BaseSearchParams,
    type CommonRouteDefinition,
    type RouteSearchParamsType,
} from '@rest-vir/api';
import {assertValidShape, type Shape} from 'object-shape-tester';

export function extractSearchParams(
    endpoint: Readonly<
        SelectFrom<
            CommonRouteDefinition,
            {
                searchParams: true;
            }
        >
    >,
    params: Readonly<
        PartialWithUndefined<{
            searchParams: RouteSearchParamsType;
        }>
    >,
): BaseSearchParams {
    const genericParams: Readonly<{
        searchParams?: RouteSearchParamsType;
    }> = params;
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
