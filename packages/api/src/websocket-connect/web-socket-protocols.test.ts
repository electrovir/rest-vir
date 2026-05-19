import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineWebSocket} from '@rest-vir/api';
import {defineShape, exactShape} from 'object-shape-tester';
import {assertValidWebSocketProtocols} from './web-socket-protocols.js';

const noProtocolWebSocket = defineWebSocket({
    path: '/ws/no-protocol',
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

const exactProtocolWebSocket = defineWebSocket({
    path: '/ws/exact-protocol',
    connectProtocol: exactShape('graphql-ws'),
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

describe(assertValidWebSocketProtocols.name, () => {
    it('passes when protocols is undefined', () => {
        assertValidWebSocketProtocols(undefined, noProtocolWebSocket);
    });

    it('passes when protocols is an empty array', () => {
        assertValidWebSocketProtocols([], noProtocolWebSocket);
    });

    it('passes when no connectProtocol requirement is declared on the WebSocket', () => {
        assertValidWebSocketProtocols(
            [
                'soap',
                'mqtt',
            ],
            noProtocolWebSocket,
        );
    });

    it('passes when every protocol satisfies the connectProtocol shape', () => {
        assertValidWebSocketProtocols(['graphql-ws'], exactProtocolWebSocket);
    });

    it('throws when a protocol does not satisfy the connectProtocol shape', () => {
        assert.throws(() => assertValidWebSocketProtocols(['mqtt'], exactProtocolWebSocket), {
            matchMessage: 'failed protocol requirement',
        });
    });

    it('throws when any one protocol in a list fails the shape requirement', () => {
        assert.throws(
            () =>
                assertValidWebSocketProtocols(
                    [
                        'graphql-ws',
                        'mqtt',
                    ],
                    exactProtocolWebSocket,
                ),
            {
                matchMessage: 'failed protocol requirement',
            },
        );
    });

    it('throws on an empty-string protocol', () => {
        assert.throws(
            () =>
                assertValidWebSocketProtocols(
                    [
                        '',
                        'b',
                    ],
                    noProtocolWebSocket,
                ),
            {
                matchMessage: 'Invalid protocols given',
            },
        );
    });

    it('throws on a protocol containing an illegal token character', () => {
        assert.throws(
            () =>
                assertValidWebSocketProtocols(
                    [
                        'a/b',
                    ],
                    noProtocolWebSocket,
                ),
            {
                matchMessage: 'Invalid protocols given',
            },
        );
    });

    it('throws on duplicate protocols', () => {
        assert.throws(
            () =>
                assertValidWebSocketProtocols(
                    [
                        'a',
                        'a',
                    ],
                    noProtocolWebSocket,
                ),
            {
                matchMessage: 'Invalid protocols given',
            },
        );
    });

    it('throws on whitespace-only protocols', () => {
        assert.throws(
            () =>
                assertValidWebSocketProtocols(
                    [
                        ' ',
                        'b',
                    ],
                    noProtocolWebSocket,
                ),
            {
                matchMessage: 'Invalid protocols given',
            },
        );
    });

    it('mentions the WebSocket path in the invalid-protocols error', () => {
        assert.throws(() => assertValidWebSocketProtocols(['a/b'], noProtocolWebSocket), {
            matchMessage: '/ws/no-protocol',
        });
    });
});
