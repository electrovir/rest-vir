import {assert} from '@augment-vir/assert';
import {type AnyObject} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineWebSocket} from '@rest-vir/api';
import {
    type adminWebSocket,
    type chatWebSocket,
    type emptyWebSocket,
    type fullRouteWebSocket,
    type partnerWebSocket,
    type roomsWebSocket,
    type secureWebSocket,
    type versionedWebSocket,
} from '@rest-vir/api/src/api/api.mock.js';
import {exactShape} from 'object-shape-tester';
import {type CommonWebSocket} from './common-web-socket.js';
import {type WebSocketConnectParamObject, type WebSocketConnectParams} from './websocket-params.js';

describe('WebSocketConnectParamObject', () => {
    it('can be assigned to from specific implementations', () => {
        const fromEmpty: WebSocketConnectParamObject = {} as any as WebSocketConnectParamObject<
            typeof emptyWebSocket,
            CommonWebSocket
        >;
        const fromChat: WebSocketConnectParamObject = {} as any as WebSocketConnectParamObject<
            typeof chatWebSocket,
            CommonWebSocket
        >;
        const fromVersioned: WebSocketConnectParamObject = {} as any as WebSocketConnectParamObject<
            typeof versionedWebSocket,
            CommonWebSocket
        >;
        const fromRooms: WebSocketConnectParamObject = {} as any as WebSocketConnectParamObject<
            typeof roomsWebSocket,
            CommonWebSocket
        >;
        const fromAdmin: WebSocketConnectParamObject = {} as any as WebSocketConnectParamObject<
            typeof adminWebSocket,
            CommonWebSocket
        >;
        const fromSecure: WebSocketConnectParamObject = {} as any as WebSocketConnectParamObject<
            typeof secureWebSocket,
            CommonWebSocket
        >;
        const fromPartner: WebSocketConnectParamObject = {} as any as WebSocketConnectParamObject<
            typeof partnerWebSocket,
            CommonWebSocket
        >;
        const fromFullRoute: WebSocketConnectParamObject = {} as any as WebSocketConnectParamObject<
            typeof fullRouteWebSocket,
            CommonWebSocket
        >;
        const fromPathParams: WebSocketConnectParamObject =
            {} as any as WebSocketConnectParamObject<
                {
                    path: '/ws/rooms/:roomId';
                },
                CommonWebSocket
            >;
        const fromMultiplePathParams: WebSocketConnectParamObject =
            {} as any as WebSocketConnectParamObject<
                {
                    path: '/ws/users/:userId/rooms/:roomId';
                },
                CommonWebSocket
            >;
        const fromWildcardPath: WebSocketConnectParamObject =
            {} as any as WebSocketConnectParamObject<
                {
                    path: '/ws/files/*';
                },
                CommonWebSocket
            >;
        const fromNamedAndWildcard: WebSocketConnectParamObject =
            {} as any as WebSocketConnectParamObject<
                {
                    path: '/ws/files/:category/*';
                },
                CommonWebSocket
            >;
        const fromGlobalWebSocket: WebSocketConnectParamObject =
            {} as any as WebSocketConnectParamObject<typeof chatWebSocket, globalThis.WebSocket>;
    });

    it('requires protocol', () => {
        const requiredProtocolsWebSocket = defineWebSocket({
            path: '/required-protocols',
            clientMessage: exactShape('hello'),
            hostMessage: exactShape('ok'),
            connectProtocol: exactShape('hi'),
        });

        type Result = WebSocketConnectParamObject<typeof requiredProtocolsWebSocket>;

        assert.tsType<Pick<Result, 'protocols'>>().equals<{protocols: 'hi'[]}>();

        type Result2 = WebSocketConnectParams<typeof requiredProtocolsWebSocket, CommonWebSocket>;

        assert.tsType<Result2>().matches<[AnyObject]>();
    });

    it('listeners are optional', () => {
        const webSocket = defineWebSocket({
            path: '/required-protocols',
        });

        type Result = WebSocketConnectParamObject<typeof webSocket>;

        assert.tsType<Pick<Result, 'listeners'>>().matches<{listeners?: AnyObject | undefined}>();

        const noListeners = {} as Omit<WebSocketConnectParamObject, 'listeners'>;
        const standard: WebSocketConnectParamObject = noListeners;
    });
});
