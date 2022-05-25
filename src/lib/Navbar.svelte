<script>
	import { darkTheme } from "../stores.js";
	function changeTheme() {
		$darkTheme = !$darkTheme;
	}
</script>

<main>
	<div class="absolute top-3 right-1 flex">
		<div class="px-1">☀</div>
		<input
			bind:checked={$darkTheme}
			on:click={changeTheme}
			type="checkbox"
			class="toggle"
		/>
		<div class="px-1">🌑</div>
	</div>
</main>
