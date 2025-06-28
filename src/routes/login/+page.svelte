<script lang="ts">
  import type { ActionData } from './$types';
  import { enhance } from '$app/forms';
  let loading = false;

  export let form: ActionData;
</script>

<main class="pt-24 pb-16 px-6">
  <div class="max-w-md mx-auto">
    <div class="bg-white rounded-lg shadow-lg p-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Login</h1>
      </div>

      <form class="space-y-6" method="POST" use:enhance>
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            class="w-full px-4 py-3 border border-gray-300 bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="w-full px-4 py-3 border border-gray-300 bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-gray-800 text-white py-3 px-4 font-medium hover:bg-gray-700 transition-colors"
          disabled={loading}
        >
          Login
        </button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-gray-600">
          {"Don't have an account? "}
          <a href="/signup" class="text-gray-800 hover:underline font-medium"> Sign up </a>
        </p>
      </div>
      {#if form?.error}
        <div class="mt-4">
          <aside class="alert variant-filled-error">
            <div class="alert-message">
              {form.error}
            </div>
          </aside>
        </div>
      {/if}
    </div>
  </div>
</main>

<style lang="postcss">
  input {
    @apply p-2;
  }
</style>
