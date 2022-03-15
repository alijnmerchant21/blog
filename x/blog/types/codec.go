package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateComment{}, "blog/CreateComment", nil)
	cdc.RegisterConcrete(&MsgCreatePost{}, "blog/CreatePost", nil)
	cdc.RegisterConcrete(&MsgDeleteComment{}, "blog/DeleteComment", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateComment{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePost{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDeleteComment{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
