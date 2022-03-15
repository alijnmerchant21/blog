/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../blog/params";
import { Comment } from "../blog/comment";
import { Post } from "../blog/post";
export const protobufPackage = "example.blog.blog";
const baseGenesisState = { commentCount: 0, postCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.commentList) {
            Comment.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.commentCount !== 0) {
            writer.uint32(24).uint64(message.commentCount);
        }
        for (const v of message.postList) {
            Post.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.postCount !== 0) {
            writer.uint32(40).uint64(message.postCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.commentList = [];
        message.postList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commentList.push(Comment.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.commentCount = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.postList.push(Post.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.postCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.commentList = [];
        message.postList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.commentList !== undefined && object.commentList !== null) {
            for (const e of object.commentList) {
                message.commentList.push(Comment.fromJSON(e));
            }
        }
        if (object.commentCount !== undefined && object.commentCount !== null) {
            message.commentCount = Number(object.commentCount);
        }
        else {
            message.commentCount = 0;
        }
        if (object.postList !== undefined && object.postList !== null) {
            for (const e of object.postList) {
                message.postList.push(Post.fromJSON(e));
            }
        }
        if (object.postCount !== undefined && object.postCount !== null) {
            message.postCount = Number(object.postCount);
        }
        else {
            message.postCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.commentList) {
            obj.commentList = message.commentList.map((e) => e ? Comment.toJSON(e) : undefined);
        }
        else {
            obj.commentList = [];
        }
        message.commentCount !== undefined &&
            (obj.commentCount = message.commentCount);
        if (message.postList) {
            obj.postList = message.postList.map((e) => e ? Post.toJSON(e) : undefined);
        }
        else {
            obj.postList = [];
        }
        message.postCount !== undefined && (obj.postCount = message.postCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.commentList = [];
        message.postList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.commentList !== undefined && object.commentList !== null) {
            for (const e of object.commentList) {
                message.commentList.push(Comment.fromPartial(e));
            }
        }
        if (object.commentCount !== undefined && object.commentCount !== null) {
            message.commentCount = object.commentCount;
        }
        else {
            message.commentCount = 0;
        }
        if (object.postList !== undefined && object.postList !== null) {
            for (const e of object.postList) {
                message.postList.push(Post.fromPartial(e));
            }
        }
        if (object.postCount !== undefined && object.postCount !== null) {
            message.postCount = object.postCount;
        }
        else {
            message.postCount = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
