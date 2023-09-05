export const contractAddress = "0x0aCD6c79D074Cd0Bf50ca34bD59FFC449950A0f7";
export const contractAbi = [
	{
		inputs: [
			{ internalType: "uint8", name: "_whitelistMintsLimit", type: "uint8" },
			{ internalType: "uint8", name: "_publicMintsLimit", type: "uint8" },
			{ internalType: "uint8", name: "_devFee", type: "uint8" },
			{ internalType: "uint72", name: "_whitelistPrice", type: "uint72" },
			{ internalType: "uint80", name: "_publicPrice", type: "uint80" },
			{ internalType: "uint88", name: "_totalSupply", type: "uint88" },
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{ inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
	{ inputs: [], name: "ApprovalQueryForNonexistentToken", type: "error" },
	{ inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
	{ inputs: [], name: "MintERC2309QuantityExceedsLimit", type: "error" },
	{ inputs: [], name: "MintToZeroAddress", type: "error" },
	{ inputs: [], name: "MintZeroQuantity", type: "error" },
	{ inputs: [], name: "NFT__AlreadyInThisPhase", type: "error" },
	{ inputs: [], name: "NFT__BlackListMembersArentAllowed", type: "error" },
	{ inputs: [], name: "NFT__CantWithdrawZero", type: "error" },
	{ inputs: [], name: "NFT__DevCantBeBlacklisted", type: "error" },
	{ inputs: [], name: "NFT__InsufficientAmount", type: "error" },
	{ inputs: [], name: "NFT__MaxMintableReached", type: "error" },
	{ inputs: [], name: "NFT__NotAllowedToMint", type: "error" },
	{ inputs: [], name: "NFT__OnlyWhitelistMembersAllowed", type: "error" },
	{ inputs: [], name: "NFT__TotalSupplyReached", type: "error" },
	{ inputs: [], name: "NFT__WithdrawalFailed", type: "error" },
	{ inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
	{ inputs: [], name: "OwnershipNotInitializedForExtraData", type: "error" },
	{ inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
	{ inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
	{ inputs: [], name: "TransferToNonERC721ReceiverImplementer", type: "error" },
	{ inputs: [], name: "TransferToZeroAddress", type: "error" },
	{ inputs: [], name: "URIQueryForNonexistentToken", type: "error" },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "to", type: "address" },
			{
				indexed: false,
				internalType: "uint256",
				name: "quantity",
				type: "uint256",
			},
		],
		name: "AirdropSuccessfull",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{ indexed: false, internalType: "bool", name: "approved", type: "bool" },
		],
		name: "ApprovalForAll",
		type: "event",
	},
	{ anonymous: false, inputs: [], name: "BaseURIChanged", type: "event" },
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "fromTokenId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "toTokenId",
				type: "uint256",
			},
			{ indexed: true, internalType: "address", name: "from", type: "address" },
			{ indexed: true, internalType: "address", name: "to", type: "address" },
		],
		name: "ConsecutiveTransfer",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "to", type: "address" },
			{
				indexed: false,
				internalType: "uint256",
				name: "quantity",
				type: "uint256",
			},
		],
		name: "MintedSuccessfully",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "mintPhase",
				type: "string",
			},
		],
		name: "PhaseChanged",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint80",
				name: "newPrice",
				type: "uint80",
			},
		],
		name: "PublicPrice_Changed",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint88",
				name: "newTotalSupply",
				type: "uint88",
			},
		],
		name: "TotalSupply_Chaned",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "from", type: "address" },
			{ indexed: true, internalType: "address", name: "to", type: "address" },
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "to", type: "address" },
			{
				indexed: false,
				internalType: "uint256",
				name: "quantity",
				type: "uint256",
			},
		],
		name: "WhitelistMintSuccessfull",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint72",
				name: "newPrice",
				type: "uint72",
			},
		],
		name: "WhitelistPrice_Changed",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "to", type: "address" },
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "WithdrawnSucessful",
		type: "event",
	},
	{
		inputs: [{ internalType: "address", name: "_member", type: "address" }],
		name: "addToBLACKLIST",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address[]", name: "members", type: "address[]" }],
		name: "addToWHITELIST",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "receiver", type: "address" },
			{ internalType: "uint256", name: "quantity", type: "uint256" },
		],
		name: "airDrop",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "approve",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "balanceOf",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "getApproved",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getMintPhase",
		outputs: [{ internalType: "string", name: "mintPhase", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getPublicMintsLimit",
		outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getPublicPrice",
		outputs: [{ internalType: "uint80", name: "", type: "uint80" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getTotalSupply",
		outputs: [{ internalType: "uint88", name: "", type: "uint88" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getWhitelistMintsLimit",
		outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getWhitelistPrice",
		outputs: [{ internalType: "uint72", name: "", type: "uint72" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "address", name: "operator", type: "address" },
		],
		name: "isApprovedForAll",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "account", type: "address" }],
		name: "isInTheBlacklist",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "account", type: "address" }],
		name: "isWhitelistMember",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "ownerOf",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "quantity", type: "uint256" }],
		name: "publicMint",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "_member", type: "address" }],
		name: "removeFromBLACKLIST",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address[]", name: "members", type: "address[]" }],
		name: "removeFromWHITELIST",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "s_mintInfo",
		outputs: [
			{
				internalType: "enum NFTCollection.MintPhase",
				name: "mintPhase",
				type: "uint8",
			},
			{ internalType: "uint8", name: "whitelistMintsLimit", type: "uint8" },
			{ internalType: "uint8", name: "publicMintsLimit", type: "uint8" },
			{ internalType: "uint72", name: "whitelistPrice", type: "uint72" },
			{ internalType: "uint80", name: "publicPrice", type: "uint80" },
			{ internalType: "uint88", name: "totalSupply", type: "uint88" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
			{ internalType: "bytes", name: "_data", type: "bytes" },
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "operator", type: "address" },
			{ internalType: "bool", name: "approved", type: "bool" },
		],
		name: "setApprovalForAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "string", name: "_newBaseURI", type: "string" }],
		name: "setBaseURI",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "enum NFTCollection.MintPhase",
				name: "_newMintPhase",
				type: "uint8",
			},
		],
		name: "setMintPhase",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint8", name: "_newLimit", type: "uint8" }],
		name: "setPublicMintsLimit",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint80", name: "_newPrice", type: "uint80" }],
		name: "setPublicPrice",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint88", name: "_newTotalSupply", type: "uint88" },
		],
		name: "setTotalSupply",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint8", name: "_newLimit", type: "uint8" }],
		name: "setWhitelistMintsLimit",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint72", name: "_newPrice", type: "uint72" }],
		name: "setWhitelistPrice",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
		name: "supportsInterface",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "tokenURI",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "transferFrom",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "quantity", type: "uint256" }],
		name: "whitelistMint",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "_to", type: "address" }],
		name: "withdrawTo",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
