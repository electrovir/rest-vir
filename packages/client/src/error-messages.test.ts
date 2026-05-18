import {describe, itCases} from '@augment-vir/test';
import {buildMethodNotAllowedMessage} from './error-messages.js';

describe(buildMethodNotAllowedMessage.name, () => {
    itCases(buildMethodNotAllowedMessage, [
        {
            it: 'formats a known method by upper-casing it',
            input: {
                method: 'get',
                url: '/users',
            },
            expect: "Method 'GET' rejected: '/users'",
        },
        {
            it: 'leaves an already upper-cased method unchanged',
            input: {
                method: 'POST',
                url: '/users',
            },
            expect: "Method 'POST' rejected: '/users'",
        },
        {
            it: 'treats an undefined method as an empty quoted value',
            input: {
                method: undefined,
                url: '/users',
            },
            expect: "Method '' rejected: '/users'",
        },
        {
            it: 'treats an empty method as an empty quoted value',
            input: {
                method: '',
                url: '/users',
            },
            expect: "Method '' rejected: '/users'",
        },
        {
            it: 'preserves the url verbatim, including search params',
            input: {
                method: 'patch',
                url: '/users/42?include=posts',
            },
            expect: "Method 'PATCH' rejected: '/users/42?include=posts'",
        },
        {
            it: 'passes the url through without normalization for absolute URLs',
            input: {
                method: 'delete',
                url: 'https://api.example.com/users/42',
            },
            expect: "Method 'DELETE' rejected: 'https://api.example.com/users/42'",
        },
        {
            it: 'preserves an empty url',
            input: {
                method: 'get',
                url: '',
            },
            expect: "Method 'GET' rejected: ''",
        },
    ]);
});
