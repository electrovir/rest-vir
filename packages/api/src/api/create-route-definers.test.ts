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

    describe('forcedCustomProps', () => {
        type AuthCustomProps = {
            requiredAuth: 'admin';
            note: string;
        };

        const {
            defineCustomEndpoint: defineAdminEndpoint,
            defineCustomWebSocket: defineAdminWebSocket,
        } = createRouteDefiners<AuthCustomProps>({
            forcedCustomProps: {
                requiredAuth: 'admin',
            },
        });

        it('writes forced props over every endpoint method', () => {
            const result = defineAdminEndpoint({
                path: '/admin',
                requests: {
                    [HttpMethod.Get]: {
                        customProps: {
                            requiredAuth: 'admin',
                            note: 'get',
                        },
                        responses: {
                            [HttpStatus.Ok]: {
                                responseData: defineShape(''),
                            },
                        },
                    },
                    [HttpMethod.Post]: {
                        customProps: {
                            /** Simulates a caller that bypassed the type check. */
                            requiredAuth: 'none' as 'admin',
                            note: 'post',
                        },
                        responses: {
                            [HttpStatus.Ok]: {
                                responseData: defineShape(''),
                            },
                        },
                    },
                },
            });

            assert.deepEquals(
                {
                    get: result.requests[HttpMethod.Get].customProps,
                    post: result.requests[HttpMethod.Post].customProps,
                },
                {
                    get: {
                        requiredAuth: 'admin',
                        note: 'get',
                    },
                    post: {
                        requiredAuth: 'admin',
                        note: 'post',
                    },
                },
            );
        });

        it('writes forced props over a web socket', () => {
            const result = defineAdminWebSocket({
                path: '/ws',
                customProps: {
                    requiredAuth: 'none' as 'admin',
                    note: 'ws',
                },
            });

            assert.deepEquals(result.customProps, {
                requiredAuth: 'admin',
                note: 'ws',
            });
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
