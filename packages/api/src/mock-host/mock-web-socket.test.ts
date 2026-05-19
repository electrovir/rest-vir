import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineWebSocket} from '../api/web-socket.js';
import {MockWebSocket} from './mock-web-socket.js';

const testWebSocket = defineWebSocket({
    path: '/ws/test',
});

describe(MockWebSocket.name, () => {
    it('drops sendFromHost after the socket is closed', () => {
        const socket = new MockWebSocket('ws://localhost', undefined, testWebSocket, {
            preventImmediateOpen: true,
        });

        let messageCount = 0;
        socket.addEventListener('message', () => {
            messageCount += 1;
        });
        socket.close();

        /** No throw, no listener invocation. */
        socket.sendFromHost('after-close');
        assert.strictEquals(messageCount, 0);
    });

    it('drops outbound send after the socket is closed', () => {
        const socket = new MockWebSocket('ws://localhost', undefined, testWebSocket, {
            preventImmediateOpen: true,
        });
        let sendCount = 0;
        socket.sendCallback = () => {
            sendCount += 1;
        };
        socket.close();

        socket.send('after-close');
        assert.strictEquals(sendCount, 0);
    });
});
