import {describe, itCases} from '@augment-vir/test';
import {rawMessageToString} from './handle-web-socket.js';

describe(rawMessageToString.name, () => {
    itCases(rawMessageToString, [
        {
            it: 'passes a string message through unchanged',
            input: 'hello',
            expect: 'hello',
        },
        {
            it: 'decodes a Buffer payload as utf-8',
            input: Buffer.from('hello'),
            expect: 'hello',
        },
        {
            it: 'concatenates a Buffer array payload before decoding',
            input: [
                Buffer.from('hel'),
                Buffer.from('lo'),
            ],
            expect: 'hello',
        },
        {
            it: 'decodes an ArrayBuffer payload as utf-8',
            input: new Uint8Array([
                0x68,
                0x65,
                0x6c,
                0x6c,
                0x6f,
            ]).buffer,
            expect: 'hello',
        },
    ]);
});
