<script lang="ts">
  export let direction: 'left-to-right' | 'right-to-left';
</script>

<div class="w-full grid md:grid-cols-3 sm:grid-cols-2 my-24">
  {#if direction === 'left-to-right'}
    <div class="col-span-2">
      <slot name="image" />
    </div>
    <div class="col-span-1 self-center justify-center px-8">
      <slot name="text" />
    </div>
  {:else}
    <div class="col-span-1 self-center justify-center px-8 md:order-first order-last">
      <slot name="text" />
    </div>
    <div class="col-span-2">
      <slot name="image" />
    </div>
  {/if}
</div>

<style>
</style>
