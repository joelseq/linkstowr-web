<script lang="ts">
  import { onMount } from 'svelte';
  import type { ActionData, PageData } from './$types';
  import { toastStore, type ToastSettings, clipboard } from '@skeletonlabs/skeleton';
  import Fa from 'svelte-fa';
  import { faCopy } from '@fortawesome/free-solid-svg-icons';
  import { Plus, Trash2 } from 'lucide-svelte';

  export let form: ActionData;
  export let data: PageData;

  const accessToken = form?.accessToken;

  let showCreateModal = false;
  let showTokenModal = !!accessToken;

  onMount(() => {
    if (form?.deleteError != null) {
      const t: ToastSettings = {
        message: 'Token Deletion failed',
        background: 'variant-ghost',
      };
      toastStore.trigger(t);
    }
  });

  function openCreateModal() {
    showCreateModal = true;
  }

  function closeTokenModal() {
    showTokenModal = false;
  }
</script>

<main class="pt-24 pb-16 px-6">
  <div class="max-w-4xl mx-auto">
    <!-- Access Tokens Card -->
    <div class="bg-white rounded-lg shadow-lg p-8">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold text-gray-800">Access Tokens</h1>
        <button
          on:click={openCreateModal}
          class="bg-gray-800 text-white px-4 py-2 text-sm font-medium hover:bg-gray-700 transition-colors flex items-center gap-2"
        >
          <Plus size={16} />
          New
        </button>
      </div>

      {#if data.tokens.length === 0}
        <div class="text-center py-12">
          <p class="text-gray-600 mb-4">No access tokens created yet.</p>
          <p class="text-sm text-gray-500">Create an access token by clicking the "New" button.</p>
        </div>
      {:else}
        <!-- Tokens Table -->
        <div class="overflow-hidden border border-gray-200 rounded-lg">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >Name</th
                >
                <th
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >Prefix</th
                >
                <th
                  class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >Actions</th
                >
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {#each data.tokens as token (token.id)}
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >{token.name}</td
                  >
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono"
                    >lshelf_{token.short_token}</td
                  >
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <form method="POST" action="?/delete">
                      <input type="hidden" name="id" value={token.id} />
                      <button
                        type="submit"
                        class="bg-red-600 text-white px-3 py-1 text-xs font-medium hover:bg-red-700 transition-colors flex items-center gap-1 ml-auto"
                      >
                        <Trash2 size={12} />
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      {/if}
    </div>
  </div>
</main>

<!-- Create Token Modal -->
{#if showCreateModal}
  <div class="fixed inset-0 bg-black/10 bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Create Access Token</h2>
      <form method="POST" action="?/generate" class="space-y-4">
        <div>
          <label for="tokenName" class="block text-sm font-medium text-gray-700 mb-2">
            Token Name
          </label>
          <input
            type="text"
            id="tokenName"
            name="tokenName"
            placeholder="Enter token name"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            required
          />
        </div>

        <div class="flex gap-3 pt-4">
          <button
            type="button"
            on:click={() => (showCreateModal = false)}
            class="flex-1 bg-gray-200 text-gray-800 py-2 px-4 font-medium hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="flex-1 bg-gray-800 text-white py-2 px-4 font-medium hover:bg-gray-700 transition-colors"
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}

<!-- Token Display Modal -->
{#if showTokenModal}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Your New Access Token</h2>

      <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
        <p class="text-sm text-yellow-800 mb-3">
          <strong>Important:</strong> Keep this token safe as you will not see the full token here again.
        </p>

        <div class="flex items-center gap-2 bg-white border border-gray-300 rounded p-3">
          <code class="flex-1 text-sm font-mono text-gray-800 break-all">{accessToken}</code>
          <button
            use:clipboard={accessToken}
            class="text-gray-500 hover:text-gray-700 transition-colors"
            title="Copy token"
          >
            <Fa icon={faCopy} />
          </button>
        </div>
      </div>

      <div class="flex justify-end">
        <button
          on:click={closeTokenModal}
          class="bg-gray-800 text-white py-2 px-6 font-medium hover:bg-gray-700 transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  </div>
{/if}
