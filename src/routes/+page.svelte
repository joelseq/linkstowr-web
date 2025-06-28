<script>
  import { faGear } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
</script>

<!-- Main Content -->
<main class="max-w-6xl mx-auto px-6 py-16 pt-24">
  <!-- Hero Section -->
  <div class="text-center max-w-4xl mx-auto mb-20">
    <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
      Effortlessly save and organize your web links in Obsidian.
    </h1>

    <p class="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
      LinkStowr is a free, open source and privacy-friendly set of tools designed to make it
      extremely easy to capture and store your valuable online resources in a structured and
      meaningful way.
    </p>

    <a href="/signup">
      <button
        class="bg-gray-800 text-white px-8 py-4 text-lg font-medium hover:bg-gray-700 transition-colors"
      >
        Sign Up
      </button>
    </a>
  </div>

  <!-- Demo Section -->
  <div class="grid lg:grid-cols-2 gap-12 items-center">
    <!-- Screenshot mockup -->
    <div class="relative">
      <div class="bg-gray-900 rounded-lg p-4 shadow-2xl">
        <!-- Browser chrome -->
        <div class="flex items-center gap-2 mb-4">
          <div class="flex gap-1">
            <div class="w-3 h-3 bg-red-500 rounded-full" />
            <div class="w-3 h-3 bg-yellow-500 rounded-full" />
            <div class="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <div class="flex-1 bg-gray-700 rounded px-3 py-1 text-sm text-gray-300 ml-4">
            obsidian.md
          </div>
        </div>

        <!-- Obsidian interface mockup -->
        <div class="bg-gray-800 rounded p-6 min-h-[400px] relative">
          <div class="text-white mb-4">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-4 h-4 bg-purple-500 rounded" />
              <span class="text-sm">Obsidian</span>
            </div>
            <h2 class="text-2xl font-bold mb-4">Sharpen your thinking.</h2>
            <p class="text-gray-300 text-sm mb-6">
              The free and flexible app<br />
              for your private thoughts.
            </p>
          </div>

          <!-- LinkStowr popup overlay -->
          <div class="absolute top-20 right-6 bg-white rounded-lg shadow-xl p-4 w-64">
            <div class="flex items-center justify-between mb-3">
              <span class="font-semibold text-gray-800">LinkStowr</span>
              <Fa icon={faGear} />
            </div>
            <div class="space-y-3">
              <div>
                <label for="title" class="block text-xs text-gray-600 mb-1">Title</label>
                <input
                  type="text"
                  id="title"
                  value="Obsidian - Sharpen your thinking"
                  class="w-full text-sm border border-gray-300 rounded px-2 py-1"
                  readonly
                />
              </div>
              <div>
                <label for="note" class="block text-xs text-gray-600 mb-1">Note</label>
                <textarea
                  id="note"
                  class="w-full text-sm border border-gray-300 rounded px-2 py-1 h-16 resize-none"
                  placeholder="The local note taking app I want"
                />
              </div>
              <button
                class="w-full bg-gray-800 text-white py-2 text-sm rounded hover:bg-gray-700 transition-colors"
              >
                Save Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Description -->
    <div class="space-y-6">
      <h3 class="text-2xl font-bold text-gray-800">
        Use the Chrome extension to save a link along with a helpful note. LinkStowr will only store
        the links until they get synced to Obsidian.
      </h3>
      <p class="text-gray-600 leading-relaxed">
        The browser extension makes it incredibly easy to capture any webpage with context and
        notes. Your links are temporarily stored and then seamlessly synced to your Obsidian vault,
        keeping your knowledge base organized and accessible.
      </p>
      <div class="flex gap-4">
        <a
          href="https://chrome.google.com/webstore/detail/linkstowr/aabkobajeambdejghgegicnhcndhcjpk"
          target="_blank"
          class="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors"
        >
          Get Chrome Extension
        </a>
        <a
          href="https://github.com/joelseq/obsidian-linkstowr"
          target="_blank"
          class="border border-gray-300 text-gray-700 px-6 py-3 hover:bg-gray-200 transition-colors"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <div class="mt-24 grid md:grid-cols-3 gap-8">
    <div class="text-center p-6">
      <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
        <div class="w-6 h-6 bg-green-600 rounded" />
      </div>
      <h4 class="text-lg font-semibold text-gray-800 mb-2">Privacy-Friendly</h4>
      <p class="text-gray-600 text-sm">
        Your data stays with you. No tracking, no data mining, just a simple tool that respects your
        privacy.
      </p>
    </div>

    <div class="text-center p-6">
      <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
        <div class="w-6 h-6 bg-blue-600 rounded" />
      </div>
      <h4 class="text-lg font-semibold text-gray-800 mb-2">Open Source</h4>
      <p class="text-gray-600 text-sm">
        Built in the open with transparency. Contribute, modify, or audit the code as you see fit.
      </p>
    </div>

    <div class="text-center p-6">
      <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
        <div class="w-6 h-6 bg-purple-600 rounded" />
      </div>
      <h4 class="text-lg font-semibold text-gray-800 mb-2">Obsidian Integration</h4>
      <p class="text-gray-600 text-sm">
        Seamlessly sync your saved links directly into your Obsidian vault for organized knowledge
        management.
      </p>
    </div>
  </div>
</main>

<!-- Footer -->
<footer class="bg-white border-t border-gray-200 mt-24 py-12">
  <div class="max-w-6xl mx-auto px-6 text-center">
    <div class="flex items-center justify-center gap-2 mb-4">
      <img src="/logo.svg" alt="LinkStowr Logo" class="w-6 h-6" />
      <span class="text-lg font-semibold text-gray-800">LinkStowr</span>
    </div>
    <p class="text-gray-600 text-sm">Made with ❤️ for the Obsidian community</p>
  </div>
</footer>
