import {assert} from '@augment-vir/assert';
import {HttpMethod} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {largeApi} from './large-api.mock.js';

describe('large API definition', () => {
    it('defines 1600 endpoints keyed by path', () => {
        assert.strictEquals(Object.keys(largeApi.endpoints).length, 1600);
    });

    it('defines 400 web sockets keyed by path', () => {
        assert.strictEquals(Object.keys(largeApi.webSockets).length, 400);
    });

    it('exposes endpoints under their declared paths', () => {
        assert.isDefined(largeApi.endpoints['/reports/item-0']);
        assert.isDefined(largeApi.endpoints['/reports/item-1']);
        assert.isDefined(largeApi.endpoints['/reports/item-800']);
        assert.isDefined(largeApi.endpoints['/reports/item-1599']);
    });

    it('exposes web sockets under their declared paths', () => {
        assert.isDefined(largeApi.webSockets['/ws/stream-0']);
        assert.isDefined(largeApi.webSockets['/ws/stream-200']);
        assert.isDefined(largeApi.webSockets['/ws/stream-399']);
    });

    it('preserves path on each stored endpoint', () => {
        const endpoint = largeApi.endpoints['/reports/item-0'];
        assert.isDefined(endpoint);
        assert.strictEquals(endpoint.path, '/reports/item-0');
    });

    it('preserves path on each stored web socket', () => {
        const socket = largeApi.webSockets['/ws/stream-0'];
        assert.isDefined(socket);
        assert.strictEquals(socket.path, '/ws/stream-0');
    });

    it('preserves request method definitions on stored endpoints', () => {
        const endpoint = largeApi.endpoints['/reports/item-0'];
        assert.isDefined(endpoint);
        assert.isDefined(endpoint.requests[HttpMethod.Post]);
    });

    it('preserves client and host messages on stored web sockets', () => {
        const socket = largeApi.webSockets['/ws/stream-0'];
        assert.isDefined(socket);
        assert.isDefined(socket.clientMessage);
        assert.isDefined(socket.hostMessage);
    });
});
