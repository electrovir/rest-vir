import {describe, itCases} from '@augment-vir/test';
import {parseSecWebSocketProtocolHeader} from './web-socket-protocol-parse.js';

describe(parseSecWebSocketProtocolHeader.name, () => {
    itCases(parseSecWebSocketProtocolHeader, [
        {
            it: 'parses a single protocol token',
            input: 'graphql-ws',
            expect: new Set([
                'graphql-ws',
            ]),
        },
        {
            it: 'parses multiple comma-separated protocols',
            input: 'a,b,c',
            expect: new Set([
                'a',
                'b',
                'c',
            ]),
        },
        {
            it: 'allows whitespace after a comma',
            input: 'a, b, c',
            expect: new Set([
                'a',
                'b',
                'c',
            ]),
        },
        {
            it: 'allows tab whitespace after a comma',
            input: 'a,\tb,\tc',
            expect: new Set([
                'a',
                'b',
                'c',
            ]),
        },
        {
            it: 'allows mixed comma + space + tab separators',
            input: 'first, second,\tthird',
            expect: new Set([
                'first',
                'second',
                'third',
            ]),
        },
        {
            it: 'allows tokens with all valid token characters',
            input: "!#$%&'*+-.^_`|~0123456789AZaz",
            expect: new Set([
                "!#$%&'*+-.^_`|~0123456789AZaz",
            ]),
        },
        {
            it: 'parses real-world subprotocol names',
            input: 'soap, mqtt',
            expect: new Set([
                'soap',
                'mqtt',
            ]),
        },
        {
            it: 'throws on an empty header',
            input: '',
            throws: {
                matchConstructor: SyntaxError,
            },
        },
        {
            it: 'throws on a duplicate protocol in the middle',
            input: 'a,b,a',
            throws: {
                matchConstructor: SyntaxError,
                matchMessage: 'duplicated',
            },
        },
        {
            it: 'throws on a duplicate protocol at the end',
            input: 'a,a',
            throws: {
                matchConstructor: SyntaxError,
                matchMessage: 'duplicated',
            },
        },
        {
            it: 'throws on a duplicate protocol followed by another protocol',
            input: 'a,a,b',
            throws: {
                matchConstructor: SyntaxError,
                matchMessage: 'duplicated',
            },
        },
        {
            it: 'throws on whitespace at the start of the header',
            input: ' a,b',
            throws: {
                matchConstructor: SyntaxError,
                matchMessage: 'Unexpected character at index 0',
            },
        },
        {
            it: 'throws on a leading comma',
            input: ',a',
            throws: {
                matchConstructor: SyntaxError,
                matchMessage: 'Unexpected character at index 0',
            },
        },
        {
            it: 'throws on a quote character (not a token char)',
            input: '"a"',
            throws: {
                matchConstructor: SyntaxError,
                matchMessage: 'Unexpected character at index 0',
            },
        },
        {
            it: 'throws on a parenthesis (not a token char)',
            input: 'a(b',
            throws: {
                matchConstructor: SyntaxError,
                matchMessage: 'Unexpected character at index 1',
            },
        },
        {
            it: 'throws on a slash (not a token char)',
            input: 'a/b',
            throws: {
                matchConstructor: SyntaxError,
                matchMessage: 'Unexpected character at index 1',
            },
        },
        {
            it: 'throws on a non-ASCII character',
            input: 'café',
            throws: {
                matchConstructor: SyntaxError,
            },
        },
        {
            it: 'throws on an internal space within a token',
            input: 'a b',
            throws: {
                matchConstructor: SyntaxError,
            },
        },
        {
            it: 'throws on a trailing comma',
            input: 'a,',
            throws: {
                matchConstructor: SyntaxError,
            },
        },
        {
            it: 'throws on a trailing comma with trailing whitespace',
            input: 'a, ',
            throws: {
                matchConstructor: SyntaxError,
            },
        },
        {
            it: 'throws on consecutive commas',
            input: 'a,,b',
            throws: {
                matchConstructor: SyntaxError,
            },
        },
    ]);
});
