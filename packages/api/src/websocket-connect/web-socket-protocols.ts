import {check} from '@augment-vir/assert';
import {ensureErrorAndPrependMessage} from '@augment-vir/common';
import {
    parseSecWebSocketProtocolHeader,
    type WebSocketConnectProtocolRequirement,
    type WebSocketDefinition,
} from '@rest-vir/api';
import {checkValidShape, isShape} from 'object-shape-tester';

/**
 * Returns `true` when the given protocol string satisfies the requirement. The requirement can be a
 * single `Shape`, a `RegExp`, or a `ReadonlyArray` of either (any entry in the array may match).
 * See `WebSocketDefinition.connectProtocol`.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function matchesWebSocketProtocolRequirement(
    protocol: string,
    requirement: WebSocketConnectProtocolRequirement,
): boolean {
    if (check.isArray(requirement)) {
        return requirement.some((entry) => matchesWebSocketProtocolRequirement(protocol, entry));
    } else if (requirement instanceof RegExp) {
        return requirement.test(protocol);
    } else if (isShape(requirement)) {
        return checkValidShape(protocol, requirement, {
            allowExtraKeys: true,
        });
    }
    return false;
}

/**
 * Verifies that no WebSocket protocols in the given list are invalid. This doesn't have anything to
 * do with a `WebsocketDefinition` instance, it's just checking if the given protocols can even be
 * sent.
 *
 * @category Internal
 * @category Package : @rest-vir/api
 * @package [`@rest-vir/api`](https://www.npmjs.com/package/@rest-vir/api)
 */
export function assertValidWebSocketProtocols(
    protocols: ReadonlyArray<string> | undefined,
    webSocket: WebSocketDefinition,
) {
    if (!protocols || !protocols.length) {
        return;
    }
    const joinedProtocols = protocols.join(', ');
    const protocolRequirement = webSocket.connectProtocol;

    if (protocolRequirement) {
        protocols.forEach((protocol) => {
            if (!matchesWebSocketProtocolRequirement(protocol, protocolRequirement)) {
                throw new Error(
                    `WebSocket protocol '${protocol}' failed protocol requirement in WebSocket '${webSocket.path}'.`,
                );
            }
        });
    }

    try {
        parseSecWebSocketProtocolHeader(joinedProtocols);
    } catch (error) {
        throw ensureErrorAndPrependMessage(
            error,
            `Invalid protocols given to WebSocket '${webSocket.path}': [${joinedProtocols}]`,
        );
    }
}
