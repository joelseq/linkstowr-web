<script lang="ts">
  export let direction: 'left-to-right' | 'right-to-left';
</script>

<div class="w-full md:w-5/6 grid md:grid-cols-3 sm:grid-cols-2 my-24">
  {#if direction === 'left-to-right'}
    <div class="col-span-2">
      <slot name="image" />
    </div>
    <div
      class="col-span-2 md:col-span-1 self-center justify-center ml-8 md:ml-16 lg:ml-32 mt-4 md:mt-0"
    >
      <slot name="text" />
    </div>
  {:else}
    <div
      class="col-span-2 md:col-span-1 self-center justify-center mr-8 md:mr-16 lg:mr-32 mt-4 md:mt-0 md:order-first order-last"
    >
      <slot name="text" />
    </div>
    <div class="col-span-2">
      <slot name="image" />
    </div>
  {/if}
</div>

<style>
</style>
