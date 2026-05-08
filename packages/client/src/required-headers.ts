import {assert} from '@augment-vir/assert';
import {mapObject, stringify} from '@augment-vir/common';
import {type EndpointMethodDefinition} from '@rest-vir/api';
import {assertValidShape, type Shape} from 'object-shape-tester';

export function extractRequiredHeaders(
    path: PropertyKey,
    endpointMethod: Readonly<EndpointMethodDefinition>,
    headerValues: undefined | Record<string, string>,
): Record<string, string> {
    const headerRequirements: Record<string, Shape | RegExp> | undefined =
        endpointMethod.requiredRequestHeaders;

    if (headerRequirements) {
        if (!headerValues) {
            throw new Error(`Endpoint '${String(path)}' has required headers but none were set.`);
        }

        return mapObject(headerRequirements, (headerName, headerRequirement) => {
            const headerValue = headerValues[headerName];

            if (headerRequirement instanceof RegExp) {
                if (!headerValue || !headerRequirement.test(headerValue)) {
                    throw new Error(
                        `Required header '${headerName}' value does not match RegExp requirement: '${stringify(headerValue)}'`,
                    );
                }
            } else {
                assert.tsType(headerRequirement).equals<Shape>();

                assertValidShape(
                    headerValue,
                    headerRequirement,
                    {
                        allowExtraKeys: true,
                    },
                    `Required header '${headerName}' value does not match shape requirement: '${stringify(headerValue)}'`,
                );
            }

            return {
                key: headerName,
                value: headerValue || '',
            };
        });
    } else {
        if (headerValues && Object.keys(headerValues).length) {
            throw new Error(
                `Endpoint '${String(path)}' has no required headers but some were set.`,
            );
        }
        return {};
    }
}
