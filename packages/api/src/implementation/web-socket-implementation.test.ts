import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineShape} from 'object-shape-tester';
import {defineWebSocket} from '../api/web-socket.js';
import {type BaseWebSocketImplementationParams} from './web-socket-implementation.js';

const noSearchParamsWebSocket = defineWebSocket({
    path: '/no-search',
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

const withSearchParamsWebSocket = defineWebSocket({
    path: '/with-search',
    searchParams: {
        token: defineShape(''),
    },
    clientMessage: defineShape(''),
    hostMessage: defineShape(''),
});

describe('BaseWebSocketImplementationParams', () => {
    it('never types searchParams as undefined for a webSocket with no declared searchParams', () => {
        type Params = BaseWebSocketImplementationParams<typeof noSearchParamsWebSocket>;

        assert.tsType<undefined>().notMatches<Params['searchParams']>();
    });

    it('never types searchParams as undefined for a webSocket with declared searchParams', () => {
        type Params = BaseWebSocketImplementationParams<typeof withSearchParamsWebSocket>;

        assert.tsType<undefined>().notMatches<Params['searchParams']>();
    });

    it('never types searchParams as undefined when the generic falls back to NoParam', () => {
        type Params = BaseWebSocketImplementationParams;

        assert.tsType<undefined>().notMatches<Params['searchParams']>();
    });
});
