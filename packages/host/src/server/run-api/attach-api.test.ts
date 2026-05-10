import {describe, itCases} from '@augment-vir/test';
import {extractRunningServerInfo} from './attach-api.js';

describe(extractRunningServerInfo.name, () => {
    itCases(extractRunningServerInfo, [
        {
            it: 'handles a missing address',
            inputs: [
                {
                    externalOrigin: 'http://localhost:4321',
                },
                {
                    server: {
                        address() {
                            return null;
                        },
                    },
                },
            ],
            expect: {
                serviceOrigin: 'http://localhost:4321',
            },
        },
        {
            it: 'handles a string address',
            inputs: [
                {
                    externalOrigin: 'http://localhost:4321',
                },
                {
                    server: {
                        address() {
                            return 'something';
                        },
                    },
                },
            ],
            expect: {
                serviceOrigin: 'http://localhost:4321',
            },
        },
        {
            it: 'handles an address with a port',
            inputs: [
                {
                    externalOrigin: 'http://localhost:4321',
                },
                {
                    server: {
                        address() {
                            return {
                                address: '',
                                family: '',
                                port: 1234,
                            };
                        },
                    },
                },
            ],
            expect: {
                serviceOrigin: 'http://localhost:1234',
            },
        },
        {
            it: 'handles an service origin without a port',
            inputs: [
                {
                    externalOrigin: 'http://localhost',
                },
                {
                    server: {
                        address() {
                            return {
                                address: '',
                                family: '',
                                port: 1234,
                            };
                        },
                    },
                },
            ],
            expect: {
                serviceOrigin: 'http://localhost',
            },
        },
    ]);
});
