<script lang="ts">
  import { Github } from 'lucide-svelte';
  // The ordering of these imports is critical to your app working properly
  import '@skeletonlabs/skeleton/themes/theme-crimson.css';
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import '../preflight.css';
  // Most of your app wide CSS should be put in this file
  import '../app.postcss';
  import { Modal, Toast } from '@skeletonlabs/skeleton';
  import { PlausibleAnalytics } from '@accuser/svelte-plausible-analytics';

  inject({ mode: dev ? 'development' : 'production' });

  export let data;
</script>

<svelte:head>
  <!-- HTML Meta Tags -->
  <title>LinkStowr — Save links to Obsidian</title>
  <meta name="description" content="Effortlessly save and organize your web links in Obsidian" />
  <meta name="keywords" content="linkstowr, obsidian, bookmarks, links, open source" />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://linkstowr.com" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="LinkStowr" />
  <meta
    property="og:description"
    content="Effortlessly save and organize your web links in Obsidian"
  />
  <meta property="og:image" content="/og-banner.png" />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="linkstowr.com" />
  <meta property="twitter:url" content="https://linkstowr.com" />
  <meta name="twitter:title" content="LinkStowr" />
  <meta
    name="twitter:description"
    content="Effortlessly save and organize your web links in Obsidian"
  />
  <meta name="twitter:image" content="/og-banner.png" />

  <!-- Meta Tags Generated via https://www.opengraph.xyz -->
</svelte:head>

<PlausibleAnalytics domain="linkstowr.com" apiHost="https://plausible.joelseq.app" />

<Modal />
<Toast position="tr" />

<div class="min-h-screen bg-gray-100">
  <!-- Header -->
  <header
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-200"
  >
    <div class="flex items-center gap-3">
      <!-- Logo recreation -->
      <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <img src="/logo.svg" alt="LinkStowr Logo" class="w-8 h-8" />
        <span class="text-xl font-semibold text-gray-800">LinkStowr</span>
      </a>
    </div>

    <nav class="flex items-center gap-6">
      {#if !data.user}
        <a href="/login" class="text-gray-600 hover:text-gray-800 transition-colors"> Login </a>
        <a href="/signup" class="text-gray-600 hover:text-gray-800 transition-colors"> Sign Up </a>
      {:else}
        <a href="/user/settings" class="text-gray-600 hover:text-gray-800 transition-colors">
          Settings
        </a>
        <form action="/logout" method="POST">
          <button
            type="submit"
            class="logout-button text-gray-600 hover:text-gray-800 transition-colors"
          >
            Logout
          </button>
        </form>
      {/if}
      <a
        href="https://github.com/joelseq/linkstowr-web"
        target="_blank"
        class="text-gray-600 hover:text-gray-800 transition-colors"
      >
        <Github size={20} />
      </a>
    </nav>
  </header>

  <slot />
</div>

<style>
  .logout-button {
    background: none;
  }
</style>
