<script>
  import Navbar from "./lib/Navbar.svelte";
  import ErrorConnecting from "./lib/ErrorConnecting.svelte";
  import ConnectWallet from "./lib/ConnectWallet.svelte";
  // import { providers } from "ethers";
  import { darkTheme, connectedWalletAddress } from "./stores.js";
</script>

<main
  class="h-screen w-screen"
  data-theme={$darkTheme === true ? "coffee" : "fantasy"}
>
  <Navbar />
  <ConnectWallet />
  <p>
    {$connectedWalletAddress === "-1"
      ? "No Wallet connected"
      : $connectedWalletAddress}
  </p>
</main>

<ErrorConnecting />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
