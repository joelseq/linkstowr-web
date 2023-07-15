<script>
  import Step from '$lib/components/Step.svelte';
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container max-w-3xl h-full mx-auto flex p-8">
  <div class="my-16 space-y-5 text-start flex flex-col">
    <h2 class="h2 hero-text">
      LinkShelf is a free and open source tool to easily save links from your browser and import it
      into <a href="https://obsidian.md/" target="_blank">Obsidian.</a>
    </h2>
    <h3 class="h3">To get started:</h3>
    <Step>
      <p class="text-xl">
        1. <a class="underline" href="/signup">Create an account</a> and generate an access token.
      </p>
    </Step>
    <Step>
      <p class="text-xl">2. Install the LinkShelf Chrome Extension.</p>
    </Step>
    <Step>
      <p class="text-xl">3. Insert the access token you generated.</p>
    </Step>
    <Step>
      <p class="text-xl">4. Save your first link.</p>
    </Step>
    <Step>
      <p class="text-xl">5. Install the LinkShelf Obsidian plugin.</p>
    </Step>
    <Step>
      <p class="text-xl">6. In the plugin settings, add your access token.</p>
    </Step>
    <Step>
      <p class="text-xl">
        7. From the command palette or the sidebar ribbon, run the Sync command.
      </p>
    </Step>
    <a class="btn btn-xl variant-filled w-[240px]" href="/signup"> Sign Up </a>
  </div>
</div>

<style>
  /* figure {
		@apply flex relative flex-col;
	} */
  .hero-text {
    line-height: 3rem;
  }
</style>
