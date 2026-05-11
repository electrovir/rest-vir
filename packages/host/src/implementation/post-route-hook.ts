import {type BivariantFunction, type HttpStatus, type MaybePromise} from '@augment-vir/common';
import {type OutgoingHttpHeaders} from 'node:http';
import {type CreateHostContextParams} from './host-context.js';
import {type ServerLogger} from './server-logger.js';

export type PostRouteHook<HostContext = unknown> = BivariantFunction<
    [PostRouteHookParams<HostContext>],
    MaybePromise<PostRouteHookOutput>
>;

export type PostRouteHookParams<HostContext = unknown> = CreateHostContextParams & {
    context: HostContext;
    serverLogger: ServerLogger;
    originalResponseData: unknown;
    originalStatus: HttpStatus;
};

export type PostRouteHookOutput =
    | Partial<{
          responseData: unknown;
          statusCode: HttpStatus;
          headers: OutgoingHttpHeaders;
      }>
    | undefined
    | void;
