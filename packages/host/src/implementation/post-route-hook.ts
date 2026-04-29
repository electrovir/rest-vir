import {type HttpStatus, type MaybePromise} from '@augment-vir/common';
import {type MakeBivariantFunction} from '@rest-vir/api';
import {type OutgoingHttpHeaders} from 'node:http';
import {type CreateHostContextParams} from './host-context.js';
import {type ServerLogger} from './server-logger.js';

export type PostRouteHook<HostContext = unknown> = MakeBivariantFunction<
    PostRouteHookParams<HostContext>,
    MaybePromise<PostRouteHookOutput>
>;

export type PostRouteHookParams<HostContext = unknown> = CreateHostContextParams & {
    context: HostContext;
    serverLogger: ServerLogger;
    // todo: fill this in
    originalResponseData: unknown;
    originalStatus: HttpStatus;
};
// todo: implement
export type PostRouteHookOutput =
    | Partial<{
          responseData: unknown;
          statusCode: HttpStatus;
          headers: OutgoingHttpHeaders;
      }>
    | undefined
    | void;
