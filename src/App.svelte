<script>
  let chainId = -1;
  let walletAddress = -1;
  let darkTheme = false;
  function changeTheme() {
    darkTheme = !darkTheme;
  }
  function connectWallet() {
    walletAddress = walletAddress * -1;
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
    <button class="btn btn-secondary" on:click={connectWallet}
      >Connect with Metamask</button
    >
  </div>

  <p>Wallet Connected = {walletAddress}</p>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
