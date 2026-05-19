import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import type {
    ExtractPathParams,
    HasWildcardParam,
    NamedPathParams,
    PathParams,
    ResolveNamedParams,
    ResolveWildcard,
} from './path-params.js';

describe('NamedPathParams', () => {
    it('extracts a single named param', () => {
        assert.tsType<NamedPathParams<'/users/:id'>>().equals<'id'>();
    });

    it('extracts multiple named params', () => {
        assert
            .tsType<NamedPathParams<'/users/:userId/posts/:postId'>>()
            .equals<'userId' | 'postId'>();
    });

    it('extracts three named params', () => {
        assert
            .tsType<NamedPathParams<'/a/:first/b/:second/c/:third'>>()
            .equals<'first' | 'second' | 'third'>();
    });

    it('returns never for a path with no params', () => {
        assert.tsType<NamedPathParams<'/users'>>().equals<never>();
    });

    it('returns never for root path', () => {
        assert.tsType<NamedPathParams<'/'>>().equals<never>();
    });

    it('extracts named params before a wildcard', () => {
        assert.tsType<NamedPathParams<'/files/:id/*'>>().equals<'id'>();
    });

    it('returns never for wildcard-only path', () => {
        assert.tsType<NamedPathParams<'/files/*'>>().equals<never>();
    });

    it('returns string for unresolvable string type', () => {
        assert.tsType<NamedPathParams<string>>().equals<string>();
    });

    it('returns string for BaseRoutePath pattern', () => {
        assert.tsType<NamedPathParams<`/${string}`>>().equals<string>();
    });

    it('extracts param at the start of the path', () => {
        assert.tsType<NamedPathParams<'/:id'>>().equals<'id'>();
    });

    it('extracts param followed by more segments', () => {
        assert.tsType<NamedPathParams<'/:id/details'>>().equals<'id'>();
    });

    it('extracts adjacent params', () => {
        assert.tsType<NamedPathParams<'/:a/:b'>>().equals<'a' | 'b'>();
    });
});

describe('HasWildcardParam', () => {
    it('returns true for path ending with /*', () => {
        assert.tsType<HasWildcardParam<'/files/*'>>().equals<true>();
    });

    it('returns true for path with params and wildcard', () => {
        assert.tsType<HasWildcardParam<'/files/:id/*'>>().equals<true>();
    });

    it('returns false for path without wildcard', () => {
        assert.tsType<HasWildcardParam<'/users'>>().equals<false>();
    });

    it('returns false for root path', () => {
        assert.tsType<HasWildcardParam<'/'>>().equals<false>();
    });

    it('returns false for path with named param only', () => {
        assert.tsType<HasWildcardParam<'/users/:id'>>().equals<false>();
    });

    it('returns boolean for unresolvable string type', () => {
        assert.tsType<HasWildcardParam<string>>().equals<boolean>();
    });

    it('returns boolean for BaseRoutePath pattern', () => {
        assert.tsType<HasWildcardParam<`/${string}`>>().equals<boolean>();
    });

    it('returns false for path with * not at the end', () => {
        assert.tsType<HasWildcardParam<'/files/*/other'>>().equals<false>();
    });
});

describe('PathParams', () => {
    it('extracts named params and no wildcard', () => {
        assert.tsType<PathParams<'/users/:id'>>().equals<{
            namedParams: 'id';
            hasWildcard: false;
        }>();
    });

    it('extracts named params and wildcard', () => {
        assert.tsType<PathParams<'/files/:id/*'>>().equals<{
            namedParams: 'id';
            hasWildcard: true;
        }>();
    });

    it('extracts wildcard only', () => {
        assert.tsType<PathParams<'/files/*'>>().equals<{
            namedParams: never;
            hasWildcard: true;
        }>();
    });

    it('extracts no params from simple path', () => {
        assert.tsType<PathParams<'/users'>>().equals<{
            namedParams: never;
            hasWildcard: false;
        }>();
    });

    it('extracts multiple named params', () => {
        assert.tsType<PathParams<'/a/:x/b/:y'>>().equals<{
            namedParams: 'x' | 'y';
            hasWildcard: false;
        }>();
    });

    it('extracts multiple named params with wildcard', () => {
        assert.tsType<PathParams<'/a/:x/b/:y/*'>>().equals<{
            namedParams: 'x' | 'y';
            hasWildcard: true;
        }>();
    });

    it('handles unresolvable string', () => {
        assert.tsType<PathParams<string>>().equals<{
            namedParams: string;
            hasWildcard: boolean;
        }>();
    });
});

describe('ResolveWildcard', () => {
    it('requires wildcard string when true', () => {
        assert.tsType<ResolveWildcard<true>>().equals<
            Readonly<{
                wildcard: string;
            }>
        >();
    });

    it('makes wildcard optional undefined when false', () => {
        assert.tsType<ResolveWildcard<false>>().equals<
            Readonly<{
                wildcard?: undefined;
            }>
        >();
    });

    it('makes wildcard optional string when boolean', () => {
        assert.tsType<ResolveWildcard<boolean>>().equals<
            Readonly<{
                wildcard?: string | undefined;
            }>
        >();
    });
});

describe('ResolveNamedParams', () => {
    it('returns a flat record for a single param', () => {
        assert.tsType<ResolveNamedParams<'id'>>().equals<Readonly<Record<'id', string>>>();
    });

    it('returns a flat record for a union of params', () => {
        assert
            .tsType<ResolveNamedParams<'a' | 'b'>>()
            .equals<Readonly<Record<'a' | 'b', string>>>();
    });

    it('contributes no keys for never', () => {
        assert.tsType<ResolveNamedParams<never>>().equals<unknown>();
    });

    it('returns a flat record for generic string', () => {
        assert.tsType<ResolveNamedParams<string>>().equals<Readonly<Record<string, string>>>();
    });
});

describe('ExtractPathParams', () => {
    it('handles a simple path', () => {
        assert.tsType<ExtractPathParams<'/users'>>().equals<undefined>();
    });

    it('handles params and wildcard', () => {
        type Result = ExtractPathParams<'/with/:param1/:param2/*'>;
        assert.tsType<Result>().equals<
            Readonly<{
                wildcard: string;
            }> &
                Readonly<Record<'param1' | 'param2', string>>
        >();

        const testAssignment: Result = {
            param1: 'hi',
            param2: 'hi1',
            wildcard: 'hi',
        };

        // @ts-expect-error: missing param1
        const testAssignment2: Result = {
            param2: 'hi1',
            wildcard: 'hi',
        };
    });

    it('handles root path', () => {
        assert.tsType<ExtractPathParams<'/'>>().equals<undefined>();
    });

    it('handles multi-segment simple path', () => {
        assert.tsType<ExtractPathParams<'/a/b/c'>>().equals<undefined>();
    });

    it('requires pathParams for a single named param', () => {
        assert.tsType<ExtractPathParams<'/users/:id'>>().equals<
            Readonly<{
                wildcard?: undefined;
            }> &
                Readonly<Record<'id', string>>
        >();
    });

    it('requires pathParams for multiple named params', () => {
        assert.tsType<ExtractPathParams<'/users/:userId/posts/:postId'>>().equals<
            Readonly<{
                wildcard?: undefined;
            }> &
                Readonly<Record<'userId' | 'postId', string>>
        >();
    });

    it('requires wildcard for wildcard-only path', () => {
        assert.tsType<ExtractPathParams<'/files/*'>>().equals<
            Readonly<{
                wildcard: string;
            }>
        >();
    });

    it('requires both wildcard and pathParams', () => {
        assert.tsType<ExtractPathParams<'/files/:id/*'>>().equals<
            Readonly<{
                wildcard: string;
            }> &
                Readonly<Record<'id', string>>
        >();
    });

    it('requires both wildcard and multiple pathParams', () => {
        assert.tsType<ExtractPathParams<'/a/:x/b/:y/*'>>().equals<
            Readonly<{
                wildcard: string;
            }> &
                Readonly<Record<'x' | 'y', string>>
        >();
    });

    it('handles BaseRoutePath pattern type', () => {
        assert.tsType<ExtractPathParams<`/${string}`>>().equals<
            Readonly<{
                wildcard?: string | undefined;
            }> &
                Readonly<Record<string, string>>
        >();
    });

    it('returns a loose union type for NoParam', () => {
        assert.tsType<ExtractPathParams>().equals<
            | ({
                  wildcard?: string;
              } & Record<string, string | undefined>)
            | undefined
        >();
    });

    it('extracts params from route with additional properties', () => {
        assert.tsType<ExtractPathParams<'/items/:itemId'>>().equals<
            Readonly<{
                wildcard?: undefined;
            }> &
                Readonly<Record<'itemId', string>>
        >();
    });

    it('returns no path params', () => {
        assert.tsType<ExtractPathParams<'/health'>>().equals<undefined>();
    });
});
