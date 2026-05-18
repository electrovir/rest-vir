import {assert, waitUntil} from '@augment-vir/assert';
import {
    extractDuplicates,
    getObjectTypedEntries,
    groupArrayBy,
    type JsonCompatibleValue,
    type MaybePromise,
} from '@augment-vir/common';
import {CommonWebSocketState, type RestVirClient} from '@rest-vir/client';
import {
    demoClockWebSocket,
    demoEchoEndpoint,
    demoEchoWebSocket,
    demoFilesEndpoint,
    demoHealthEndpoint,
    demoItemsEndpoint,
    demoRoomWebSocket,
    demoSearchEndpoint,
    demoSecretEndpoint,
    demoTeapotEndpoint,
    demoUploadEndpoint,
    demoUserEndpoint,
    type demoApi,
} from '../demo-api.js';

export type DemoClient = RestVirClient<typeof demoApi>;

export type DemoRouteResult = {
    responseData: JsonCompatibleValue;
    /** HTTP status for endpoint demos; {@link CommonWebSocketState} for WebSocket demos. */
    status: number;
};

export type BaseDemoRoute = {
    demoName: string;
    callback: (
        params: Readonly<{
            client: DemoClient;
        }>,
    ) => MaybePromise<DemoRouteResult>;
};

export type DemoFetch = BaseDemoRoute & {
    endpointPath: keyof typeof demoApi.endpoints;
};

export type DemoWebSocket = BaseDemoRoute & {
    webSocketPath: keyof typeof demoApi.webSockets;
};

const rawDemoFetches: ReadonlyArray<Readonly<DemoFetch>> = [
    {
        demoName: 'health get',
        endpointPath: demoHealthEndpoint.path,
        async callback({client}) {
            const response = await client.fetch(demoHealthEndpoint).GET();
            if (response.Ok) {
                return {
                    responseData: response.Ok.responseData,
                    status: response.Ok.status,
                };
            } else {
                return {
                    responseData: response.unexpectedError.responseData,
                    status: response.unexpectedError.status,
                };
            }
        },
    },
    {
        demoName: 'echo post with request body',
        endpointPath: demoEchoEndpoint.path,
        async callback({client}) {
            const response = await client.fetch(demoEchoEndpoint).POST({
                requestData: {
                    message: 'hi ',
                    count: 3,
                },
            });
            if (response.Accepted) {
                return {
                    responseData: response.Accepted.responseData,
                    status: response.Accepted.status,
                };
            } else {
                return {
                    responseData: response.unexpectedError.responseData,
                    status: response.unexpectedError.status,
                };
            }
        },
    },
    {
        demoName: 'user get by id (found)',
        endpointPath: demoUserEndpoint.path,
        async callback({client}) {
            const response = await client.fetch(demoUserEndpoint).GET({
                pathParams: {
                    userId: '1',
                },
            });
            if (response.Ok) {
                return {
                    responseData: response.Ok.responseData,
                    status: response.Ok.status,
                };
            } else if (response.NotFound) {
                return {
                    responseData: response.NotFound.responseData,
                    status: response.NotFound.status,
                };
            } else {
                return {
                    responseData: response.unexpectedError.responseData,
                    status: response.unexpectedError.status,
                };
            }
        },
    },
    {
        demoName: 'user get by id (missing)',
        endpointPath: demoUserEndpoint.path,
        async callback({client}) {
            const response = await client.fetch(demoUserEndpoint).GET({
                pathParams: {
                    userId: '999',
                },
            });
            if (response.Ok) {
                return {
                    responseData: response.Ok.responseData,
                    status: response.Ok.status,
                };
            } else if (response.NotFound) {
                return {
                    responseData: response.NotFound.responseData,
                    status: response.NotFound.status,
                };
            } else {
                return {
                    responseData: response.unexpectedError.responseData,
                    status: response.unexpectedError.status,
                };
            }
        },
    },
    {
        demoName: 'search with all param shapes',
        endpointPath: demoSearchEndpoint.path,
        async callback({client}) {
            const response = await client.fetch(demoSearchEndpoint).GET({
                searchParams: {
                    query: 'hello',
                    tags: [
                        'one',
                        'two',
                    ],
                    code: 'ABC',
                },
            });
            if (response.PartialContent) {
                return {
                    responseData: response.PartialContent.responseData,
                    status: response.PartialContent.status,
                };
            } else {
                return {
                    responseData: response.unexpectedError.responseData,
                    status: response.unexpectedError.status,
                };
            }
        },
    },
    {
        demoName: 'files with wildcard path param',
        endpointPath: demoFilesEndpoint.path,
        async callback({client}) {
            const response = await client.fetch(demoFilesEndpoint).GET({
                pathParams: {
                    wildcard: 'pictures/cat.png',
                },
            });
            if (response.Ok) {
                return {
                    responseData: response.Ok.responseData,
                    status: response.Ok.status,
                };
            } else {
                return {
                    responseData: response.unexpectedError.responseData,
                    status: response.unexpectedError.status,
                };
            }
        },
    },
    {
        demoName: 'upload form data',
        endpointPath: demoUploadEndpoint.path,
        async callback({client}) {
            const formData = new FormData();
            formData.append('file', new Blob(['hello']), 'hello.txt');
            formData.append('note', 'a note');
            const response = await client.fetch(demoUploadEndpoint).POST({
                requestData: formData,
            });
            if (response.Created) {
                return {
                    responseData: response.Created.responseData,
                    status: response.Created.status,
                };
            } else {
                return {
                    responseData: response.unexpectedError.responseData,
                    status: response.unexpectedError.status,
                };
            }
        },
    },
    {
        demoName: 'secret with required header',
        endpointPath: demoSecretEndpoint.path,
        async callback({client}) {
            const response = await client.fetch(demoSecretEndpoint).GET({
                requiredHeaders: {
                    'x-demo-token': 'demo-token-1',
                },
            });
            if (response.Ok) {
                return {
                    responseData: response.Ok.responseData,
                    status: response.Ok.status,
                };
            } else {
                return {
                    responseData: response.unexpectedError.responseData,
                    status: response.unexpectedError.status,
                };
            }
        },
    },
    {
        demoName: 'items put',
        endpointPath: demoItemsEndpoint.path,
        async callback({client}) {
            const response = await client.fetch(demoItemsEndpoint).PUT({
                pathParams: {
                    itemId: 'abc',
                },
                requestData: {
                    value: 'replaced-value',
                },
            });
            if (response.Created) {
                return {
                    responseData: response.Created.responseData,
                    status: response.Created.status,
                };
            } else {
                return {
                    responseData: response.unexpectedError.responseData,
                    status: response.unexpectedError.status,
                };
            }
        },
    },
    {
        demoName: 'items patch',
        endpointPath: demoItemsEndpoint.path,
        async callback({client}) {
            const response = await client.fetch(demoItemsEndpoint).PATCH({
                pathParams: {
                    itemId: 'abc',
                },
                requestData: {
                    value: 'patched-value',
                },
            });
            if (response.Ok) {
                return {
                    responseData: response.Ok.responseData,
                    status: response.Ok.status,
                };
            } else {
                return {
                    responseData: response.unexpectedError.responseData,
                    status: response.unexpectedError.status,
                };
            }
        },
    },
    {
        demoName: 'items delete',
        endpointPath: demoItemsEndpoint.path,
        async callback({client}) {
            const response = await client.fetch(demoItemsEndpoint).DELETE({
                pathParams: {
                    itemId: 'abc',
                },
            });
            if (response.NoContent) {
                return {
                    responseData: 'deleted',
                    status: response.NoContent.status,
                };
            } else {
                return {
                    responseData: response.unexpectedError.responseData,
                    status: response.unexpectedError.status,
                };
            }
        },
    },
    {
        demoName: 'teapot (declared 418 response)',
        endpointPath: demoTeapotEndpoint.path,
        async callback({client}) {
            const response = await client.fetch(demoTeapotEndpoint).GET();
            if (response.ImATeapot) {
                return {
                    responseData: response.ImATeapot.responseData,
                    status: response.ImATeapot.status,
                };
            } else {
                return {
                    responseData: response.unexpectedError.responseData,
                    status: response.unexpectedError.status,
                };
            }
        },
    },
];

const rawDemoWebSockets: ReadonlyArray<Readonly<DemoWebSocket>> = [
    {
        demoName: 'echo round-trip',
        webSocketPath: demoEchoWebSocket.path,
        async callback({client}) {
            const socket = await client.connectWebSocket(demoEchoWebSocket);
            try {
                const reply = await socket.sendAndWaitForReply({
                    message: 'hello',
                });
                return {
                    responseData: reply,
                    status: socket.readyState,
                };
            } finally {
                await socket.close();
            }
        },
    },
    {
        demoName: 'clock receives ticks',
        webSocketPath: demoClockWebSocket.path,
        async callback({client}) {
            const ticks: number[] = [];
            const socket = await client.connectWebSocket(demoClockWebSocket, {
                listeners: {
                    message({message}) {
                        ticks.push(message.tick);
                    },
                },
            });
            try {
                await waitUntil.isTrue(
                    () => ticks.length >= 2,
                    {
                        timeout: {
                            seconds: 5,
                        },
                    },
                    'Timed out waiting for clock ticks.',
                );
                return {
                    responseData: ticks,
                    status: socket.readyState,
                };
            } finally {
                await socket.close();
            }
        },
    },
    {
        demoName: 'room with path + search + protocol',
        webSocketPath: demoRoomWebSocket.path,
        async callback({client}) {
            const greetings: string[] = [];
            const socket = await client.connectWebSocket(demoRoomWebSocket, {
                pathParams: {
                    roomId: 'lobby',
                },
                searchParams: {
                    nickname: 'demo-user',
                },
                protocols: ['rest-vir-demo'],
                listeners: {
                    message({message}) {
                        greetings.push(message);
                    },
                },
            });
            try {
                await waitUntil.isTrue(
                    () => greetings.length >= 1,
                    {
                        timeout: {
                            seconds: 5,
                        },
                    },
                    'Timed out waiting for room greeting.',
                );
                const reply = await socket.sendAndWaitForReply({
                    message: 'hi room',
                });
                return {
                    responseData: [
                        ...greetings,
                        reply,
                    ],
                    status: socket.readyState,
                };
            } finally {
                await socket.close();
            }
        },
    },
];

export const demoFetchesByEndpoint = groupArrayBy(rawDemoFetches, ({endpointPath}) => endpointPath);

export const demoWebSocketsByPath = groupArrayBy(
    rawDemoWebSockets,
    ({webSocketPath}) => webSocketPath,
);

getObjectTypedEntries(demoFetchesByEndpoint).forEach(
    ([
        path,
        fetches,
    ]) => {
        const names = fetches.map((fetch) => fetch.demoName);

        const {duplicates} = extractDuplicates(names);

        assert.isEmpty(duplicates, `Demo fetches for endpoint '${path}' have duplicate names.`);
    },
);

getObjectTypedEntries(demoWebSocketsByPath).forEach(
    ([
        path,
        webSockets,
    ]) => {
        const names = webSockets.map((webSocket) => webSocket.demoName);

        const {duplicates} = extractDuplicates(names);

        assert.isEmpty(duplicates, `Demo web sockets for path '${path}' have duplicate names.`);
    },
);
