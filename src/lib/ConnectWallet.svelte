<script>
	import { providers } from "ethers";
	import {
		signer,
		provider,
		connectedWalletAddress,
		connectionError,
	} from "../stores.js";

	async function connectWalletMetamask() {
		try {
			$provider = new providers.Web3Provider(window.ethereum, "any");
			await $provider.send("eth_requestAccounts", []);
			$signer = $provider.getSigner();
			(async function () {
				$connectedWalletAddress = await $signer.getAddress();
			})();
		} catch {
			$connectionError = true;
		}
	}
</script>

<main>
	<div class="py-12">
		<button class="btn btn-primary" on:click={connectWalletMetamask}
			>Connect with Metamask</button
		>
	</div>
</main>
