// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteComment } from "./types/blog/tx";
import { MsgCreatePost } from "./types/blog/tx";
import { MsgCreateComment } from "./types/blog/tx";
const types = [
    ["/example.blog.blog.MsgDeleteComment", MsgDeleteComment],
    ["/example.blog.blog.MsgCreatePost", MsgCreatePost],
    ["/example.blog.blog.MsgCreateComment", MsgCreateComment],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeleteComment: (data) => ({ typeUrl: "/example.blog.blog.MsgDeleteComment", value: MsgDeleteComment.fromPartial(data) }),
        msgCreatePost: (data) => ({ typeUrl: "/example.blog.blog.MsgCreatePost", value: MsgCreatePost.fromPartial(data) }),
        msgCreateComment: (data) => ({ typeUrl: "/example.blog.blog.MsgCreateComment", value: MsgCreateComment.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
