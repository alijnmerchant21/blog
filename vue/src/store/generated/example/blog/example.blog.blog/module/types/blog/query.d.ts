import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../blog/params";
import { Comment } from "../blog/comment";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Post } from "../blog/post";
export declare const protobufPackage = "example.blog.blog";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetCommentRequest {
    id: number;
}
export interface QueryGetCommentResponse {
    Comment: Comment | undefined;
}
export interface QueryAllCommentRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCommentResponse {
    Comment: Comment[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPostRequest {
    id: number;
}
export interface QueryGetPostResponse {
    Post: Post | undefined;
}
export interface QueryAllPostRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPostResponse {
    Post: Post[];
    pagination: PageResponse | undefined;
}
export interface QueryCommentsRequest {
    id: number;
    /** Adding pagination to request */
    pagination: PageRequest | undefined;
}
/** ... */
export interface QueryCommentsResponse {
    Post: Post | undefined;
    /** Returning a list of comments */
    Comment: Comment[];
    /** Adding pagination to response */
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetCommentRequest: {
    encode(message: QueryGetCommentRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCommentRequest;
    fromJSON(object: any): QueryGetCommentRequest;
    toJSON(message: QueryGetCommentRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCommentRequest>): QueryGetCommentRequest;
};
export declare const QueryGetCommentResponse: {
    encode(message: QueryGetCommentResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCommentResponse;
    fromJSON(object: any): QueryGetCommentResponse;
    toJSON(message: QueryGetCommentResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCommentResponse>): QueryGetCommentResponse;
};
export declare const QueryAllCommentRequest: {
    encode(message: QueryAllCommentRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCommentRequest;
    fromJSON(object: any): QueryAllCommentRequest;
    toJSON(message: QueryAllCommentRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCommentRequest>): QueryAllCommentRequest;
};
export declare const QueryAllCommentResponse: {
    encode(message: QueryAllCommentResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCommentResponse;
    fromJSON(object: any): QueryAllCommentResponse;
    toJSON(message: QueryAllCommentResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCommentResponse>): QueryAllCommentResponse;
};
export declare const QueryGetPostRequest: {
    encode(message: QueryGetPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPostRequest;
    fromJSON(object: any): QueryGetPostRequest;
    toJSON(message: QueryGetPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPostRequest>): QueryGetPostRequest;
};
export declare const QueryGetPostResponse: {
    encode(message: QueryGetPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPostResponse;
    fromJSON(object: any): QueryGetPostResponse;
    toJSON(message: QueryGetPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPostResponse>): QueryGetPostResponse;
};
export declare const QueryAllPostRequest: {
    encode(message: QueryAllPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPostRequest;
    fromJSON(object: any): QueryAllPostRequest;
    toJSON(message: QueryAllPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPostRequest>): QueryAllPostRequest;
};
export declare const QueryAllPostResponse: {
    encode(message: QueryAllPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPostResponse;
    fromJSON(object: any): QueryAllPostResponse;
    toJSON(message: QueryAllPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPostResponse>): QueryAllPostResponse;
};
export declare const QueryCommentsRequest: {
    encode(message: QueryCommentsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCommentsRequest;
    fromJSON(object: any): QueryCommentsRequest;
    toJSON(message: QueryCommentsRequest): unknown;
    fromPartial(object: DeepPartial<QueryCommentsRequest>): QueryCommentsRequest;
};
export declare const QueryCommentsResponse: {
    encode(message: QueryCommentsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCommentsResponse;
    fromJSON(object: any): QueryCommentsResponse;
    toJSON(message: QueryCommentsResponse): unknown;
    fromPartial(object: DeepPartial<QueryCommentsResponse>): QueryCommentsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Comment by id. */
    Comment(request: QueryGetCommentRequest): Promise<QueryGetCommentResponse>;
    /** Queries a list of Comment items. */
    CommentAll(request: QueryAllCommentRequest): Promise<QueryAllCommentResponse>;
    /** Queries a Post by id. */
    Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
    /** Queries a list of Post items. */
    PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
    /** Queries a list of Comments items. */
    Comments(request: QueryCommentsRequest): Promise<QueryCommentsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Comment(request: QueryGetCommentRequest): Promise<QueryGetCommentResponse>;
    CommentAll(request: QueryAllCommentRequest): Promise<QueryAllCommentResponse>;
    Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
    PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
    Comments(request: QueryCommentsRequest): Promise<QueryCommentsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
