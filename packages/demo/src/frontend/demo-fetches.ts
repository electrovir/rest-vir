import {assert} from '@augment-vir/assert';
import {
    extractDuplicates,
    getObjectTypedEntries,
    groupArrayBy,
    type JsonCompatibleValue,
    type MaybePromise,
} from '@augment-vir/common';
import {HttpMethod} from '@rest-vir/api';
import {type RestVirClient} from '@rest-vir/client';
import {demoHealthEndpoint, type demoApi} from '../demo-api.js';

export type DemoFetch = {
    demoName: string;
    endpointPath: keyof typeof demoApi.endpoints;
    callback: (
        params: Readonly<{
            client: RestVirClient<typeof demoApi>;
        }>,
    ) => MaybePromise<JsonCompatibleValue>;
};

const rawDemoFetches: ReadonlyArray<Readonly<DemoFetch>> = [
    {
        demoName: 'health get',
        endpointPath: demoHealthEndpoint.path,
        async callback({client}) {
            const response = await client.fetch(demoHealthEndpoint, HttpMethod.Get);

            if (response.Ok) {
                return response.Ok.responseData;
            } else {
                return response.unexpectedError.responseData;
            }
        },
    },
];

export const demoFetchesByEndpoint = groupArrayBy(rawDemoFetches, ({endpointPath}) => endpointPath);

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
