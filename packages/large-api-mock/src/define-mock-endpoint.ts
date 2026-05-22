import {type EndpointDefinition, type WebSocketDefinition} from '@rest-vir/api';

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
 * Wrapper around the upstream `defineEndpoint` that narrows the endpoint's `customProps` shape to
 * {@link MockCustomProps}. Used by the mock api so every endpoint definition is required to declare
 * its custom props with the project-specific shape.
 */
export function defineMockEndpoint<const Endpoint extends EndpointDefinition<MockCustomProps>>(
    endpoint: Readonly<Endpoint>,
): Readonly<Endpoint> {
    return endpoint;
}

/**
 * Wrapper around the upstream `defineWebSocket` that narrows the web socket's `customProps` shape
 * to {@link MockCustomProps}. Used by the mock api so every web socket definition is required to
 * declare its custom props with the project-specific shape.
 */
export function defineMockWebSocket<
    const ThisWebSocket extends WebSocketDefinition<MockCustomProps>,
>(webSocket: Readonly<ThisWebSocket>): Readonly<ThisWebSocket> {
    return webSocket;
}
