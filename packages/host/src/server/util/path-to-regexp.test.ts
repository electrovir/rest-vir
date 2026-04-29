import {describe, itCases} from '@augment-vir/test';
import {match} from './path-to-regexp.js';

describe(match.name, () => {
    function testMatch(path: string, matchAgainst: string) {
        return !!match(path)(matchAgainst);
    }

    itCases(testMatch, [
        {
            it: 'matches a plain path',
            inputs: [
                '/hi/bye',
                '/hi/bye',
            ],
            expect: true,
        },
        {
            it: 'rejects a plain path mismatch',
            inputs: [
                '/hi/bye',
                '/hi/bye2',
            ],
            expect: false,
        },
        {
            it: 'matches a parameterized path',
            inputs: [
                '/hi/:param1/:param2',
                '/hi/bye/see',
            ],
            expect: true,
        },
        {
            it: 'matches an unnamed wildcard path',
            inputs: [
                '/hi/*',
                '/hi/bye/see',
            ],
            expect: true,
        },
        {
            /**
             * While this works, the server will fail to start with such an endpoint definition
             * with:
             *
             * > Wildcard must be the last character in the route
             */
            it: 'matches an unnamed wildcard in the middle',
            inputs: [
                '/hi/*/again',
                '/hi/bye/again',
            ],
            expect: true,
        },
        {
            it: 'rejects an invalid parameterized path',
            inputs: [
                '/hi/:param1/:param2',
                '/hi/bye/see/you',
            ],
            expect: false,
        },
    ]);
});
