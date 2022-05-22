<script>
  import { ethers, providers } from "ethers";

  let provider;
  $: walletAddress = "No wallet connected";
  let signer;
  let darkTheme = true;
  function changeTheme() {
    darkTheme = !darkTheme;
  }

  async function connectWalletMetamask() {
    try {
      const provider = new providers.Web3Provider(window.ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      (async function () {
        walletAddress = await signer.getAddress();
      })();
    } catch {
      alert(
        "Error connecting with metamask. Please try clearing cache or refreshing the page"
      );
    }
  }
  async function connectWalletWalletConnect() {
    // try {
    //   const provider = new providers.Web3Provider(window.ethereum, "any");
    //   await provider.send("eth_requestAccounts", []);
    //   const signer = provider.getSigner();
    //   (async function () {
    //     walletAddress = await signer.getAddress();
    //   })();
    // } catch {
    //   alert(
    //     "Error connecting with WalletConnect. Please try clearing cache or refreshing the page"
    //   );
    // }
  }
</script>

<main
  class="h-screen w-screen"
  data-theme={darkTheme === true ? "coffee" : "fantasy"}
>
  <div class="absolute top-3 right-1 flex">
    <div class="px-1">☀</div>
    <input
      bind:checked={darkTheme}
      on:click={changeTheme}
      type="checkbox"
      class="toggle"
    />
    <div class="px-1">🌑</div>
  </div>
  <div class="py-12">
    <button class="btn btn-primary" on:click={connectWalletMetamask}
      >Connect with Metamask</button
    >
    <!-- <button class="btn btn-primary" on:click={connectWalletWalletConnect}
      >Connect with WalletConnect</button
    > -->
  </div>
  <p>{walletAddress}</p>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
