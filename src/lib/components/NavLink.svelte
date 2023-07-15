<script lang="ts">
	export let href: string | undefined = undefined;
	export let target: string | undefined = undefined;
	export let rel: string | undefined = undefined;
</script>

{#if href}
	<a class="btn rounded-sm" {href} {target} {rel}>
		<slot />
	</a>
{:else}
	<button class="btn hover:variant-soft-primary rounded-sm">
		<slot />
	</button>
{/if}

<style>
</style>
