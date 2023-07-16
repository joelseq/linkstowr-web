<script>
  import extScreenshot from '$lib/assets/linkshelf-chrome.png';
  import pluginVideo from '$lib/assets/linkshelf-obsidian.webm';
  import PromoRow from '$lib/components/PromoRow.svelte';

  const textClasses = 'text-xl md:text-2xl text-gray-600';
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container max-w-4xl mx-auto flex p-8">
  <div class="my-16 text-start flex flex-col">
    <h1 class="h1 hero-text mb-12">Effortlessly save and organize your web links in Obsidian.</h1>
    <h3 class="h3 sub-hero-text mb-10">
      LinkShelf is a free, open source and privacy-friendly set of tools designed to make it
      extremely easy to capture and store your valuable online resources in a structured and
      meaningful way.
    </h3>
    <a class="btn btn-xl variant-filled w-[240px]" href="/signup"> Sign Up </a>
  </div>
</div>
<div class="container max-w-6xl mx-auto mb-16">
  <PromoRow direction="left-to-right">
    <img
      slot="image"
      alt="Screenshot of the LinkShelf Chrome extension for saving a link"
      src={extScreenshot}
    />
    <p slot="text" class={textClasses}>
      Use the Chrome extension to save a link along with a helpful note. LinkShelf will only store
      the links until they get synced to Obsidian.
    </p>
  </PromoRow>
  <div class="my-8 h-1" />
  <PromoRow direction="right-to-left">
    <video slot="image" autoplay loop muted>
      <source src={pluginVideo} type="video/webm" />
    </video>
    <p slot="text" class={textClasses}>
      Use the Obsidian plugin to sync to your vault. Once the sync is complete, LinkShelf will clear
      all the links ensuring that your vault is the only long term home for your links!
    </p>
  </PromoRow>
</div>

<style>
  /* figure {
		@apply flex relative flex-col;
	} */
  .hero-text {
    line-height: 3.5rem;
  }

  .sub-hero-text {
    line-height: 2rem;
  }
</style>
