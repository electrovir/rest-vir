import {assert} from '@augment-vir/assert';
import {
    ensureError,
    extractErrorMessage,
    getObjectTypedEntries,
    type JsonCompatibleValue,
    log,
    safeJsonStringify,
} from '@augment-vir/common';
import {findDevServerPort, RestVirClient} from '@rest-vir/api';
import {
    asyncProp,
    css,
    defineElement,
    html,
    type HtmlInterpolation,
    listen,
    nothing,
} from 'element-vir';
import {type RequireExactlyOne} from 'type-fest';
import {
    LoaderAnimated24Icon,
    noNativeSpacing,
    ViraButton,
    ViraColorVariant,
    ViraError,
    ViraIcon,
} from 'vira';
import {apiServerStartPort, demoApi} from '../demo-api.js';
import {type BaseDemoRoute, demoFetchesByEndpoint, demoWebSocketsByPath} from './demo-routes.js';

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
    styles: css`
        :host {
            display: flex;
            font-family: sans-serif;
            flex-direction: column;
            padding: 32px;
            gap: 32px;
        }

        h1,
        h2,
        h3,
        ul {
            ${noNativeSpacing}
        }

        h3 {
            font-weight: normal;
        }

        .routes,
        ul,
        section {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        li {
            list-style: none;
            margin-left: 1em;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
        }
    `,
    render({state, updateState}) {
        const renderDemoButton = (sectionKey: string, demoRoute: Readonly<BaseDemoRoute>) => {
            const fetchKey = [
                sectionKey,
                demoRoute.demoName,
            ].join(' ');
            const resultTemplate = createFetchResultTemplate(state.results[fetchKey]);
            return html`
                <li>
                    <${ViraButton.assign({
                        color: ViraColorVariant.Neutral,
                        text: demoRoute.demoName,
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

                                const result = await demoRoute.callback({
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
                </li>
            `;
        };

        const fetchTemplates = getObjectTypedEntries(demoFetchesByEndpoint).map(
            ([
                endpointPath,
                demoFetches,
            ]) => {
                const demoFetchTemplates = demoFetches.map((demoRoute) =>
                    renderDemoButton(endpointPath, demoRoute),
                );

                return html`
                    <div class="routes">
                        <h3><code>${endpointPath}</code></h3>
                        <ul>
                            ${demoFetchTemplates}
                        </ul>
                    </div>
                `;
            },
        );

        const webSocketTemplates = getObjectTypedEntries(demoWebSocketsByPath).map(
            ([
                webSocketPath,
                demoWebSockets,
            ]) => {
                const demoWebSocketTemplates = demoWebSockets.map((demoRoute) =>
                    renderDemoButton(webSocketPath, demoRoute),
                );

                return html`
                    <div class="routes">
                        <h3><code>${webSocketPath}</code></h3>
                        <ul>
                            ${demoWebSocketTemplates}
                        </ul>
                    </div>
                `;
            },
        );

        return html`
            <h1>Rest Vir Demo</h1>
            <section>
                <h2>Endpoints</h2>
                ${fetchTemplates}
            </section>
            <section>
                <h2>WebSockets</h2>
                ${webSocketTemplates}
            </section>
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
