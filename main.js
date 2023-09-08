import { EthereumClient, w3mConnectors } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import {
	configureChains,
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
	mintPhase.innerText = actualMintPhase;
	publicPrice.innerText = actualPublicPrice.toString() / 1e18 + " Ξ";
	whitelistPrice.innerText = actualWhitelistPrice.toString() / 1e18 + " Ξ";
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
		mintResult.innerText = "";
	} else if (account.status == "disconnected") {
		mintBtn.style.display = "none";
		bottomCoreBtn.style.display = "";
		mintResult.innerText = "";
	}
});

mintBtn.addEventListener("click", async () => {
	if (actualMintPhase == "PUBLIC") {
		await mint("publicMint", actualPublicPrice);
	} else if (actualMintPhase == "ONLY WHITELIST MEMBERS") {
		await mint("whitelistMint", actualWhitelistPrice);
	} else if (actualMintPhase == "CLOSED") {
		mintBtn.style.display = "none";
		mintResult.innerText = "Mint is Closed :(";
	}
});

async function mint(mintFunctionName, price) {
	const amount = quantityValue.value;
	const ethAmount = amount * (price.toString() / 1e18);
	try {
		mintResult.innerText = "Minting...";
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
		mintResult.innerText =
			"Minted with success!\n\nClick here to view your transaction";
		mintResult.href = `https://sepolia.etherscan.io/tx/${data.transactionHash}`;
	} catch (error) {
		console.log(error);
		handleError(error);
	}
}

function handleError(error) {
	if (error.message.includes("InsufficientAmount")) {
		mintResult.innerText =
			"Couldn't mint your tokens!\n\nYou need to send more ETH!";
	} else if (error.message.includes("TotalSupplyReached")) {
		mintResult.innerText = "Couldn't mint your tokens!\n\nMax supply reached";
	} else if (error.message.includes("MaxMintableReached")) {
		mintResult.innerText =
			"Couldn't mint your tokens!\n\nQuantity exceeds the mint limit!";
	} else if (error.message.includes("OnlyWhitelistMembersAllowed")) {
		mintResult.innerText =
			"Couldn't mint your tokens!\n\nYou're not in the whitelist!";
	} else if (error.message.includes("NFT__BlackListMembersArentAllowed")) {
		mintResult.innerText =
			"Couldn't mint your tokens, your account is blacklisted!";
	} else if (error.message.includes("User denied transaction signature")) {
		mintResult.innerText = "User denied transaction signature";
	} else if (error.message.includes("exceeds the balance of the account")) {
		mintResult.innerText =
			"Couldn't mint your tokens!\n\nYour account does not have enough funds to submit the transaction!";
	} else {
		mintResult.innerText = "Couldn't mint your tokens!\n\nSomething went wrong";
	}
}
