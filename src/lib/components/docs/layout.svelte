<script context="module">
  import { h1, h2, p } from './components';
  import { PlausibleAnalytics } from '@accuser/svelte-plausible-analytics';

  export { h1, h2, p };
</script>

<PlausibleAnalytics domain="linkstowr.com" apiHost="https://plausible.joelseq.app" />

<slot />
