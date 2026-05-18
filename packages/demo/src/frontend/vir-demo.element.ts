import {assert} from '@augment-vir/assert';
import {
    ensureError,
    extractErrorMessage,
    getObjectTypedEntries,
    type JsonCompatibleValue,
    log,
    safeJsonStringify,
} from '@augment-vir/common';
import {findDevServerPort, RestVirClient} from '@rest-vir/client';
import {asyncProp, defineElement, html, type HtmlInterpolation, listen, nothing} from 'element-vir';
import {type RequireExactlyOne} from 'type-fest';
import {LoaderAnimated24Icon, ViraButton, ViraColorVariant, ViraError, ViraIcon} from 'vira';
import {apiServerStartPort, demoApi} from '../demo-api.js';
import {demoFetchesByEndpoint} from './demo-fetches.js';

type FetchResult = RequireExactlyOne<{
    isLoading: true;
    error: Error;
    response: JsonCompatibleValue;
}>;

export const VirDemo = defineElement()({
    tagName: 'vir-demo',
    state() {
        return {
            demoApiClient: asyncProp({
                defaultValue: findDevServerPort(demoApi, {
                    startOrigin: `http://localhost:${apiServerStartPort}`,
                }).then((result) => {
                    if (result) {
                        return new RestVirClient(demoApi, result.origin);
                    } else {
                        throw new Error('Failed to find demo api server port.');
                    }
                }),
            }),
            results: {} as {[FetchKey in string]: Readonly<FetchResult>},
        };
    },
    render({state, updateState}) {
        const fetchTemplates = getObjectTypedEntries(demoFetchesByEndpoint).map(
            ([
                endpointPath,
                demoFetches,
            ]) => {
                const demoFetchTemplates = demoFetches.map((demoFetch) => {
                    const fetchKey = [
                        endpointPath,
                        demoFetch.demoName,
                    ].join(' ');

                    const resultTemplate = createFetchResultTemplate(state.results[fetchKey]);

                    return html`
                        <${ViraButton.assign({
                            color: ViraColorVariant.Neutral,
                            text: demoFetch.demoName,
                        })}
                            ${listen('click', async () => {
                                try {
                                    updateState({
                                        results: {
                                            ...state.results,
                                            [fetchKey]: {
                                                isLoading: true,
                                            },
                                        },
                                    });

                                    const demoApiClient = await state.demoApiClient.value;

                                    if (demoApiClient instanceof Error) {
                                        throw demoApiClient;
                                    }

                                    const result = await demoFetch.callback({
                                        client: demoApiClient,
                                    });

                                    updateState({
                                        results: {
                                            ...state.results,
                                            [fetchKey]: {
                                                response: result,
                                            },
                                        },
                                    });
                                } catch (error) {
                                    updateState({
                                        results: {
                                            ...state.results,
                                            [fetchKey]: {
                                                error: ensureError(error),
                                            },
                                        },
                                    });
                                }
                            })}
                        ></${ViraButton}>
                        ${resultTemplate}
                    `;
                });

                return html`
                    <section>
                        <code>${endpointPath}</code>
                        <ul>
                            ${demoFetchTemplates}
                        </ul>
                    </section>
                `;
            },
        );

        return html`
            <h1>Rest Vir Demo</h1>
            ${fetchTemplates}
        `;
    },
});

function createFetchResultTemplate(
    fetchResult: Readonly<FetchResult> | undefined,
): HtmlInterpolation {
    if (!fetchResult) {
        return nothing;
    } else if (fetchResult.isLoading) {
        return html`
            <${ViraIcon.assign({
                icon: LoaderAnimated24Icon,
            })}></${ViraIcon}>
        `;
    } else if (fetchResult.error) {
        return html`
            <${ViraError}>${extractErrorMessage(fetchResult.error)}</${ViraError}>
        `;
    } else if ('response' in fetchResult) {
        return html`
            <pre>${safeJsonStringify(fetchResult.response, null, 4)}</pre>
        `;
    } else {
        assert.tsType(fetchResult).equals<never>();
        const errorMessage = 'Unsupported fetch result.';

        log.error(errorMessage, fetchResult);
        return html`
            <${ViraError}>Failed to render result: ${errorMessage}</${ViraError}>
        `;
    }
}
