import {createRouteDefiners} from '@rest-vir/api';

export enum AuthLevel {
    Required = 'required',
    Any = 'any',
    Blocked = 'blocked',
    Admin = 'admin',
}

export type MockCustomProps = {
    requiredAuth: AuthLevel;
};

export const customProps: MockCustomProps = {
    requiredAuth: AuthLevel.Any,
};

/**
 * Project-specific definers built from `createRouteDefiners<MockCustomProps>`. Re-exported under
 * the names the mock files already use (`defineMockEndpoint` / `defineMockWebSocket`).
 */
export const {
    defineCustomEndpoint: defineMockEndpoint,
    defineCustomWebSocket: defineMockWebSocket,
} = createRouteDefiners<MockCustomProps>();
