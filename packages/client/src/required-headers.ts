import {assert} from '@augment-vir/assert';
import {mapObject, stringify} from '@augment-vir/common';
import {assertValidShape, type Shape} from 'object-shape-tester';

export function extractRequiredHeaders(
    path: PropertyKey,
    requiredRequestHeaders: Record<string, Shape | RegExp> | undefined,
    headerValues: undefined | Record<string, string | undefined>,
): Record<string, string> {
    if (requiredRequestHeaders) {
        if (!headerValues) {
            throw new Error(`Endpoint '${String(path)}' has required headers but none were set.`);
        }

        return mapObject(requiredRequestHeaders, (headerName, headerRequirement) => {
            const headerValue = headerValues[headerName];

            if (headerRequirement instanceof RegExp) {
                if (!headerValue || !headerRequirement.test(headerValue)) {
                    throw new Error(
                        `Route '${String(path)}' required header '${headerName}' value does not match RegExp requirement: '${stringify(headerValue)}'`,
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
                    `Route '${String(path)}' required header '${headerName}' value does not match shape requirement: '${stringify(headerValue)}'`,
                );
            }

            /**
             * Omit the header from the result when its value is missing. This only happens when
             * the shape allows undefined; otherwise `assertValidShape` would have already thrown.
             */
            if (!headerValue) {
                return undefined;
            }
            return {
                key: headerName,
                value: headerValue,
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
