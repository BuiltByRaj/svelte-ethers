<script>
	import { darkTheme, connectionError } from "../stores.js";
</script>

<main data-theme={$darkTheme === true ? "coffee" : "fantasy"}>
	<!-- Put this part before </body> tag -->
	<input
		type="checkbox"
		bind:checked={$connectionError}
		id="my-modal-4"
		class="modal-toggle"
	/>
	<label for="my-modal-4" class="modal cursor-pointer">
		<label class="modal-box relative" for="">
			<h3 class="text-lg font-bold text-center">
				⚠Error connecting with wallet!⚠
			</h3>
			<p class="py-4 text-justify">
				We encountered an error connecting to wallet. Some solutions :
				1. Make sure you have a wallet extention installed.<br />2. Make
				sure you're logged in your Metamask/Web3 wallet.<br />3. Make
				sure there is no previous connection request pending in the
				wallet from this site.<br />4. Try clearing cache and refreshing
				the site.
			</p>
		</label>
	</label>
</main>
