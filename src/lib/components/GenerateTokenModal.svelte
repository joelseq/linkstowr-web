<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

{#if $modalStore[0]}
	<div class={cBase}>
		<header class={cHeader}>Generate Access Token</header>
		<form class="modal-form {cForm}">
			<input type="text" placeholder="Token Name" />
			<button class="btn variant-filled">Generate</button>
		</form>
	</div>
{/if}

<style>
</style>
