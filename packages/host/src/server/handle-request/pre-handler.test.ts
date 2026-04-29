import {preHandler} from './pre-handler.js';

describe(preHandler.name, () => {
    it('ignores a missing implementation', async () => {
        await preHandler({
            request: {
                originalUrl: '/missing',
            } as ServerRequest,
            response: {
                header() {},
            } as unknown as ServerResponse,
            service: {
                createContext: undefined,
                endpoints: {
                    '/missing': undefined as unknown as ImplementedEndpoint,
                },
                serviceName: 'derp',
                requiredClientOrigin: AnyOrigin,
                serviceOrigin: '',
                webSockets: {},
                logger: defaultServiceLogger,
            },
            server: {
                serviceOrigin: '',
            },
            attachId: '',
        });
    });
});
