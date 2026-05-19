import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineShape, exactShape} from 'object-shape-tester';
import {defineWebSocket} from '../api/web-socket.js';
import {
    assertValidWebSocketProtocols,
    matchesWebSocketProtocolRequirement,
} from './web-socket-protocols.js';

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

describe(matchesWebSocketProtocolRequirement.name, () => {
    it('matches against a RegExp requirement', () => {
        assert.isTrue(matchesWebSocketProtocolRequirement('graphql-ws', /^graphql-/));
        assert.isFalse(matchesWebSocketProtocolRequirement('mqtt', /^graphql-/));
    });

    it('matches against an array-of-alternatives requirement', () => {
        const requirement = [
            exactShape('graphql-ws'),
            /^v\d+$/,
        ];
        assert.isTrue(matchesWebSocketProtocolRequirement('graphql-ws', requirement));
        assert.isTrue(matchesWebSocketProtocolRequirement('v1', requirement));
        assert.isFalse(matchesWebSocketProtocolRequirement('mqtt', requirement));
    });

    it('returns false for an unrecognized requirement form', () => {
        /**
         * The public `WebSocketConnectProtocolRequirement` type narrows requirements to Shape /
         * RegExp / array-of-either. The fallback `return false` exists as a runtime guard for
         * consumers who cast through `as any` or otherwise bypass the type. Exercise it here.
         */
        assert.isFalse(matchesWebSocketProtocolRequirement('anything', {} as never));
    });
});
