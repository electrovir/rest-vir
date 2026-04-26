import {type AnyObject, type HttpStatus} from '@augment-vir/common';
import {type EndpointMethodDefinition, type EndpointResponseHeadersType} from '@rest-vir/api';
import {type Shape} from 'object-shape-tester';
import {type RequireExactlyOne} from 'type-fest';

export type EndpointFetchOutput<EndpointMethod extends EndpointMethodDefinition> =
    EndpointMethod['responses'] extends AnyObject
        ? RequireExactlyOne<
              {
                  [Status in keyof EndpointMethod['responses']]: {
                      status: Status;
                      data: ResolveShapeType<EndpointMethod['responses'][Status]['responseData']>;
                      headers: EndpointResponseHeadersType<EndpointMethod['responses'][Status]>;
                  };
              } & {
                  other: {
                      status: HttpStatus;
                      data: unknown;
                      headers: Record<string, string>;
                  };
              }
          >
        : {
              other: {
                  status: HttpStatus;
                  data: unknown;
                  headers: Record<string, string>;
              };
          };

export type ResolveShapeType<InnerShape extends Shape | undefined> = InnerShape extends Shape
    ? InnerShape['runtimeType']
    : undefined;
