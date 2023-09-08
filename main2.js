import {
	EthereumClient,
	w3mConnectors,
	w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import {
	configureChains,
	connect,
	createConfig,
	prepareWriteContract,
} from "@wagmi/core";
import { mainnet, sepolia } from "@wagmi/core/chains";
import { getAccount } from "@wagmi/core";
import {
	writeContract,
	readContract,
	watchAccount,
	waitForTransaction,
} from "@wagmi/core";
import { contractAddress, contractAbi } from "./constants";
import { parseEther, parseUnits } from "viem";
import { alchemyProvider } from "@wagmi/core/providers/alchemy";

const bottomCoreBtn = document.querySelector("#bottomCoreeButton");
const mintBtn = document.querySelector("#mintButton");
const mintPhase = document.querySelector("#mintPhase");
const publicPrice = document.querySelector("#publicPrice");
const whitelistPrice = document.querySelector("#whitelistPrice");

const incrementBtn = document.querySelector("#incrementButton");
const decrementBtn = document.querySelector("#decrementButton");
let quantityValue = document.querySelector("#quantity");
const mintResult = document.querySelector("#mintResult");

const chains = [sepolia];
const projectId = "828de63c2147131ef8e41d8d4d286283";

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const { publicClient } = configureChains(chains, [
	alchemyProvider({ apiKey: "K0LMp6CLDTnzWoF-_uEIB-HuYU-7uR8B" }),
]);
const wagmiConfig = createConfig({
	connectors: w3mConnectors({ projectId, chains }),
	publicClient,
	autoConnect: true,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);
const web3Modal = new Web3Modal({ projectId }, ethereumClient, {
	themeMode: "dark",
	defaultChain: sepolia,
});

let actualMintPhase, actualPublicPrice, actualWhitelistPrice;

window.onload = async () => {
	actualMintPhase = await readContract({
		address: contractAddress,
		abi: contractAbi,
		functionName: "getMintPhase",
	});
	actualPublicPrice = await readContract({
		address: contractAddress,
		abi: contractAbi,
		functionName: "getPublicPrice",
	});
	actualWhitelistPrice = await readContract({
		address: contractAddress,
		abi: contractAbi,
		functionName: "getWhitelistPrice",
	});
	mintPhase.textContent = actualMintPhase;
	publicPrice.textContent = actualPublicPrice.toString() / 1e18 + " Ξ";
	whitelistPrice.textContent = actualWhitelistPrice.toString() / 1e18 + " Ξ";
};

incrementBtn.addEventListener("click", () => {
	quantityValue.stepUp();
});
decrementBtn.addEventListener("click", () => {
	quantityValue.stepDown();
});

let account = getAccount();
if (account.status == "connected") {
	bottomCoreBtn.style.display = "none";
	mintBtn.style.display = "";
} else if (account.status == "disconnected") {
	mintBtn.style.display = "none";
	bottomCoreBtn.style.display = "";
}
const unwatch = watchAccount((account) => {
	account = getAccount();
	console.log(account);
	if (account.status == "connected") {
		bottomCoreBtn.style.display = "none";
		mintBtn.style.display = "";
	} else if (account.status == "disconnected") {
		mintBtn.style.display = "none";
		bottomCoreBtn.style.display = "";
	}
});

mintBtn.addEventListener("click", async () => {
	if (actualMintPhase == "PUBLIC") {
		await mint("publicMint", actualPublicPrice);
	} else if (actualMintPhase == "ONLY_WHITELIST") {
		await mint("whitelistMint", actualWhitelistPrice);
	} else if (actualMintPhase == "CLOSED") {
		mintBtn.style.display = "none";
		mintResult.textContent = "Mint is Closed :(";
	}
});

async function mint(mintFunctionName, price) {
	const amount = quantityValue.value;
	const ethAmount = amount * (price.toString() / 1e18);
	try {
		mintResult.textContent = "Minting...";
		mintBtn.style.display = "none";

		const { request } = await prepareWriteContract({
			address: contractAddress,
			abi: contractAbi,
			functionName: mintFunctionName,
			args: [amount],
			chainId: 11155111,
			value: parseEther(ethAmount.toString()),
		});
		const { hash } = await writeContract(request);
		const data = await waitForTransaction({
			confirmations: 3,
			chainId: 11155111,
			hash,
		});

		console.log(data);
		mintResult.textContent =
			"Minted with success! \nClick here to view your transaction";
		mintResult.href = `https://sepolia.etherscan.io/tx/${data.transactionHash}`;
	} catch (error) {
		console.log(error);
		handleError(error);
	}
}

function handleError(error) {
	if (error.message.includes("InsufficientAmount")) {
		mintResult.textContent =
			"Couldn't mint your tokens, you need to send more ETH!";
	} else if (error.message.includes("TotalSupplyReached")) {
		mintResult.textContent = "Couldn't mint your tokens, max supply reached";
	} else if (error.message.includes("MaxMintableReached")) {
		mintResult.textContent =
			"Couldn't mint your tokens, quantity exceeds the mint limit!";
	} else if (error.message.includes("OnlyWhitelistMembersAllowed")) {
		mintResult.textContent =
			"Couldn't mint your tokens, you're not in the whitelist!";
	} else if (error.message.includes("NFT__BlackListMembersArentAllowed")) {
		mintResult.textContent =
			"Couldn't mint your tokens, your account is blacklisted!";
	} else if (error.message.includes("User denied transaction signature")) {
		mintResult.textContent = "User denied transaction signature";
	} else {
		mintResult.textContent = "Couldn't mint your tokens, something went wrong";
	}
}
