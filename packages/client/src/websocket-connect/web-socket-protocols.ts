import {ensureErrorAndPrependMessage} from '@augment-vir/common';
import {parseSecWebSocketProtocolHeader, type WebSocketDefinition} from '@rest-vir/api';
import {assertValidShape} from 'object-shape-tester';

/**
 * Verifies that no WebSocket protocols in the given list are invalid. This doesn't have anything to
 * do with a `WebsocketDefinition` instance, it's just checking if the given protocols can even be
 * sent.
 *
 * @category Internal
 * @category Package : @rest-vir/client
 * @package [`@rest-vir/client`](https://www.npmjs.com/package/@rest-vir/client)
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
            assertValidShape(
                protocol,
                protocolRequirement,
                {
                    allowExtraKeys: true,
                },
                `WebSocket protocol '${protocol}' failed protocol requirement in WebSocket '${webSocket.path}'.`,
            );
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
