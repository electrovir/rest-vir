import {assert} from '@augment-vir/assert';
import {HttpMethod, HttpStatus} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineShape} from 'object-shape-tester';
import {createRouteDefiners} from './create-route-definers.js';

type RequiredCustomProps = {
    requiresAuth: boolean;
};

const {defineCustomEndpoint, defineCustomWebSocket} = createRouteDefiners<RequiredCustomProps>();

describe(createRouteDefiners.name, () => {
    describe('defineCustomEndpoint', () => {
        it('accepts matching customProps', () => {
            const result = defineCustomEndpoint({
                path: '/admin',
                requests: {
                    [HttpMethod.Get]: {
                        customProps: {
                            requiresAuth: true,
                        },
                        responses: {
                            [HttpStatus.Ok]: {
                                responseData: defineShape(''),
                            },
                        },
                    },
                },
            });

            assert.tsType(result.requests[HttpMethod.Get].customProps).equals<{
                readonly requiresAuth: true;
            }>();
        });

        it('returns the same object', () => {
            const input = {
                path: '/admin',
                requests: {
                    [HttpMethod.Get]: {
                        customProps: {
                            requiresAuth: false,
                        },
                        responses: {
                            [HttpStatus.Ok]: {
                                responseData: defineShape(''),
                            },
                        },
                    },
                },
            } as const;

            const result = defineCustomEndpoint(input);
            assert.strictEquals(result, input);
        });

        it('rejects a wrong customProps value type', () => {
            defineCustomEndpoint({
                path: '/admin',
                requests: {
                    [HttpMethod.Get]: {
                        customProps: {
                            // @ts-expect-error: requiresAuth must be a boolean, not a string.
                            requiresAuth: 'yes',
                        },
                        responses: {
                            [HttpStatus.Ok]: {
                                responseData: defineShape(''),
                            },
                        },
                    },
                },
            });
        });

        it('rejects an unknown customProps key', () => {
            defineCustomEndpoint({
                path: '/admin',
                requests: {
                    [HttpMethod.Get]: {
                        customProps: {
                            requiresAuth: true,
                            // @ts-expect-error: unknown key not allowed by the narrowed customProps.
                            unknownKey: 'oops',
                        },
                        responses: {
                            [HttpStatus.Ok]: {
                                responseData: defineShape(''),
                            },
                        },
                    },
                },
            });
        });

        it('preserves the path literal type', () => {
            const result = defineCustomEndpoint({
                path: '/admin',
                requests: {
                    [HttpMethod.Get]: {
                        customProps: {
                            requiresAuth: true,
                        },
                        responses: {
                            [HttpStatus.Ok]: {
                                responseData: defineShape(''),
                            },
                        },
                    },
                },
            });

            assert.tsType(result.path).equals<'/admin'>();
        });
    });

    describe('defineCustomWebSocket', () => {
        it('accepts matching customProps', () => {
            const result = defineCustomWebSocket({
                path: '/ws',
                customProps: {
                    requiresAuth: true,
                },
            });

            assert.tsType(result.customProps).equals<{
                readonly requiresAuth: true;
            }>();
        });

        it('returns the same object', () => {
            const input = {
                path: '/ws',
                customProps: {
                    requiresAuth: false,
                },
            } as const;

            const result = defineCustomWebSocket(input);
            assert.strictEquals(result, input);
        });

        it('rejects a wrong customProps value type', () => {
            defineCustomWebSocket({
                path: '/ws',
                customProps: {
                    // @ts-expect-error: requiresAuth must be a boolean, not a string.
                    requiresAuth: 'yes',
                },
            });
        });

        it('rejects an unknown customProps key', () => {
            defineCustomWebSocket({
                path: '/ws',
                customProps: {
                    requiresAuth: true,
                    // @ts-expect-error: unknown key not allowed by the narrowed customProps.
                    unknownKey: 'oops',
                },
            });
        });

        it('preserves the path literal type', () => {
            const result = defineCustomWebSocket({
                path: '/ws/chat',
                customProps: {
                    requiresAuth: true,
                },
            });

            assert.tsType(result.path).equals<'/ws/chat'>();
        });
    });

    it('requires customProps on every endpoint method and on each web socket', () => {
        defineCustomEndpoint({
            path: '/no-auth',
            requests: {
                // @ts-expect-error: customProps is required on every method definition.
                [HttpMethod.Get]: {
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
                },
            },
        });

        // @ts-expect-error: customProps is required on the web socket definition.
        defineCustomWebSocket({
            path: '/ws/no-auth',
        });
    });

    it('produces independent definers for different CustomProps types', () => {
        type OtherCustomProps = {
            tenantId: string;
        };

        const {defineCustomEndpoint: defineOtherEndpoint} = createRouteDefiners<OtherCustomProps>();

        defineOtherEndpoint({
            path: '/other',
            requests: {
                [HttpMethod.Get]: {
                    customProps: {
                        tenantId: 'abc',
                    },
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
                },
            },
        });

        defineOtherEndpoint({
            path: '/other',
            requests: {
                [HttpMethod.Get]: {
                    customProps: {
                        // @ts-expect-error: this definer requires tenantId, not requiresAuth.
                        requiresAuth: true,
                    },
                    responses: {
                        [HttpStatus.Ok]: {
                            responseData: defineShape(''),
                        },
                    },
                },
            },
        });
    });
});
