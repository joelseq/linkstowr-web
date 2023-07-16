<script lang="ts">
  import { onMount } from 'svelte';
  import type { ActionData, PageData } from './$types';
  import { toastStore, type ToastSettings, clipboard } from '@skeletonlabs/skeleton';
  import Fa from 'svelte-fa';
  import { faCopy } from '@fortawesome/free-solid-svg-icons';

  export let form: ActionData;
  export let data: PageData;

  const accessToken = form?.accessToken;

  let isFormShowing = accessToken != null || form?.generateError != null;

  onMount(() => {
    if (form?.deleteError != null) {
      const t: ToastSettings = {
        message: 'Token Deletion failed',
        background: 'variant-ghost',
      };
      toastStore.trigger(t);
    }
  });

  const showForm = () => {
    isFormShowing = true;
  };
  const hideForm = () => {
    isFormShowing = false;
  };
  const formDone = () => {
    form = null;
    isFormShowing = false;
  };
</script>

<div class="container mx-auto max-w-2xl pt-8">
  <div class="card p-4">
    <header class="card-header">
      <div class="flex justify-between">
        <h3 class="h3 pt-2">Access Tokens</h3>
        {#if !isFormShowing}
          <button type="submit" class="btn variant-filled" on:click={showForm}> New </button>
        {/if}
      </div>
    </header>
    <section class="p-4">
      {#if isFormShowing}
        <div class="bg-slate-400 p-4 my-4 rounded-sm">
          <div class="p-2">
            {#if !accessToken}
              <form method="POST" action="?/generate">
                <label class="label">
                  <span>Token Name</span>
                  <input class="input p-2" type="text" placeholder="Token Name" name="tokenName" />
                </label>
                <div class="flex flex-wrap justify-end space-x-2 mt-4">
                  <button type="button" class="btn variant-filled-surface" on:click={hideForm}
                    >Cancel</button
                  >
                  <button type="submit" class="btn variant-filled">Generate</button>
                </div>
              </form>
            {:else}
              <p>
                Here's your new Access Token. Keep it safe as you will not see the full token here
                again.
              </p>
              <div class="bg-slate-200 rounded-sm p-6 relative my-2">
                <button
                  use:clipboard={accessToken}
                  class="btn bg-transparent absolute top-1 right-1"
                  aria-label="Copy to clipboard"
                >
                  <Fa icon={faCopy} />
                </button>
                {accessToken}
              </div>
              <p />
              <div class="flex flex-wrap justify-end">
                <button class="btn variant-filled" on:click={formDone}>Done</button>
              </div>
            {/if}

            {#if form?.generateError}
              <aside class="alert variant-ghost">
                <div class="alert-message">
                  <h3 class="h3">Error</h3>
                  <p>{form.generateError}</p>
                </div>
              </aside>
            {/if}
          </div>
        </div>
      {/if}
      {#if data.tokens.length < 1 && !isFormShowing}
        <p>Create an access token by clicking the "New" button.</p>
      {/if}
    </section>

    {#if data.tokens.length > 0}
      <div class="table-container p-4">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Prefix</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {#each data.tokens as token}
              <tr>
                <td>{token.name}</td>
                <td>lshelf_{token.short_token}</td>
                <td class="flex justify-end">
                  <form method="POST" action="?/delete">
                    <input type="hidden" name="id" value={token.id} />
                    <button class="btn btn-sm variant-filled-primary">Delete</button>
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
