import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "example.blog.blog";
export interface MsgCreateComment {
    creator: string;
    postID: number;
    title: string;
    body: string;
    id: number;
}
export interface MsgCreateCommentResponse {
    id: number;
}
export interface MsgCreatePost {
    creator: string;
    title: string;
    body: string;
    id: number;
}
export interface MsgCreatePostResponse {
    id: number;
}
export interface MsgDeleteComment {
    creator: string;
    commentID: number;
    postID: number;
    id: number;
}
export interface MsgDeleteCommentResponse {
    id: number;
}
export declare const MsgCreateComment: {
    encode(message: MsgCreateComment, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateComment;
    fromJSON(object: any): MsgCreateComment;
    toJSON(message: MsgCreateComment): unknown;
    fromPartial(object: DeepPartial<MsgCreateComment>): MsgCreateComment;
};
export declare const MsgCreateCommentResponse: {
    encode(message: MsgCreateCommentResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCommentResponse;
    fromJSON(object: any): MsgCreateCommentResponse;
    toJSON(message: MsgCreateCommentResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateCommentResponse>): MsgCreateCommentResponse;
};
export declare const MsgCreatePost: {
    encode(message: MsgCreatePost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePost;
    fromJSON(object: any): MsgCreatePost;
    toJSON(message: MsgCreatePost): unknown;
    fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost;
};
export declare const MsgCreatePostResponse: {
    encode(message: MsgCreatePostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePostResponse;
    fromJSON(object: any): MsgCreatePostResponse;
    toJSON(message: MsgCreatePostResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePostResponse>): MsgCreatePostResponse;
};
export declare const MsgDeleteComment: {
    encode(message: MsgDeleteComment, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteComment;
    fromJSON(object: any): MsgDeleteComment;
    toJSON(message: MsgDeleteComment): unknown;
    fromPartial(object: DeepPartial<MsgDeleteComment>): MsgDeleteComment;
};
export declare const MsgDeleteCommentResponse: {
    encode(message: MsgDeleteCommentResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCommentResponse;
    fromJSON(object: any): MsgDeleteCommentResponse;
    toJSON(message: MsgDeleteCommentResponse): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCommentResponse>): MsgDeleteCommentResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateComment(request: MsgCreateComment): Promise<MsgCreateCommentResponse>;
    CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteComment(request: MsgDeleteComment): Promise<MsgDeleteCommentResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateComment(request: MsgCreateComment): Promise<MsgCreateCommentResponse>;
    CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
    DeleteComment(request: MsgDeleteComment): Promise<MsgDeleteCommentResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
