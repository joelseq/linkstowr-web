<script lang="ts">
  import type { ActionData } from './$types';
  import { enhance } from '$app/forms';
  let loading = false;

  export let form: ActionData;
</script>

<div class="flex flex-wrap justify-center items-center px-4">
  <form class="space-y-2 max-w-md mt-4" method="POST" use:enhance>
    <h2 class="h2 my-8">Create an account</h2>
    <label class="label">
      <span>Username</span>
      <input type="text" name="username" class="input" placeholder="username" required />
    </label>
    <label class="label">
      <span>Password</span>
      <input type="password" name="password" class="input" required />
    </label>
    <label class="label">
      <span>Confirm Password</span>
      <input type="password" name="passwordConfirm" class="input" required />
    </label>
    <button type="submit" class="btn variant-filled w-full" disabled={loading}> Sign Up </button>
    {#if form?.error}
      <div>
        <aside class="alert variant-filled-error">
          <div class="alert-message">
            {form.error}
          </div>
        </aside>
      </div>
    {/if}
  </form>
</div>

<style lang="postcss">
  input {
    @apply p-2;
  }
</style>
