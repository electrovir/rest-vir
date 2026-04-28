import {describe, it} from '@augment-vir/test';
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
import {type CommonWebSocket} from './common-web-socket.js';
import {type WebSocketConnectParamObject} from './websocket-params.js';

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
});
