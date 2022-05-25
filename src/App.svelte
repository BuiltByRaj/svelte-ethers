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
  <div
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
  >
    {#if $connectedWalletAddress === "-1"}
      <ConnectWallet />
      <p>No Wallet Connected</p>
    {:else}
      <p>Wallet Connected : {$connectedWalletAddress}</p>
    {/if}
  </div>
</main>

<ErrorConnecting />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
