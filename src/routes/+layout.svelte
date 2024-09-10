<script lang="ts">
  // The ordering of these imports is critical to your app working properly
  import '@skeletonlabs/skeleton/themes/theme-crimson.css';
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import '../preflight.css';
  // Most of your app wide CSS should be put in this file
  import '../app.postcss';
  import {
    AppShell,
    AppBar,
    Modal,
    Toast,
    Drawer,
    drawerStore,
    type DrawerSettings,
  } from '@skeletonlabs/skeleton';
  import Fa from 'svelte-fa/src/fa.svelte';
  import NavLink from '$lib/components/NavLink.svelte';
  import { PlausibleAnalytics } from '@accuser/svelte-plausible-analytics';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faBars } from '@fortawesome/free-solid-svg-icons';

  inject({ mode: dev ? 'development' : 'production' });

  export let data;

  function drawerOpen(): void {
    const s: DrawerSettings = { id: 'sidenav', width: 'max-w-xs' };
    drawerStore.open(s);
  }
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
<Drawer>
  <section class="p-4 space-y-4 overflow-y-auto min-w-[250px]">
    <nav class="text-center">
      <ul>
        {#if !data.user}
          <li on:keypress on:click={drawerStore.close}>
            <NavLink href="/login">Login</NavLink>
          </li>
          <li on:keypress on:click={drawerStore.close}>
            <NavLink href="/signup">Sign Up</NavLink>
          </li>
        {:else}
          <li on:keypress on:click={drawerStore.close}>
            <NavLink href="/user/settings">Settings</NavLink>
          </li>
          <li on:keypress on:click={drawerStore.close}>
            <form action="/logout" method="POST">
              <NavLink>Logout</NavLink>
            </form>
          </li>
        {/if}
        <li on:keypress on:click={drawerStore.close}>
          <NavLink href="https://github.com/joelseq/linkstowr-web" target="_blank" rel="noreferrer">
            <Fa size="2x" icon={faGithub} />
          </NavLink>
        </li>
      </ul>
    </nav>
  </section>
</Drawer>

<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar padding="p-1">
      <svelte:fragment slot="lead">
        <button on:click={drawerOpen} class="btn-icon btn-icon-sm bg-transparent lg:!hidden">
          <Fa icon={faBars} />
        </button>
        <NavLink href="/">
          <svg
            width="174"
            height="63"
            viewBox="0 0 1739 630"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M595 395V239H617.4V376.2H691V395H595ZM714.2 395V275H735.8V395H714.2ZM725 258.2C720.867 258.2 717.6 257 715.2 254.6C712.933 252.2 711.8 249 711.8 245C711.8 241 712.933 237.8 715.2 235.4C717.6 233 720.867 231.8 725 231.8C729.267 231.8 732.533 233 734.8 235.4C737.067 237.8 738.2 241 738.2 245C738.2 249 737.067 252.2 734.8 254.6C732.533 257 729.267 258.2 725 258.2ZM770.216 395V275H789.416V293H794.216C796.482 286.333 800.416 281.2 806.016 277.6C811.616 273.867 818.749 272 827.416 272C841.416 272 851.549 276.333 857.816 285C864.216 293.533 867.416 304.533 867.416 318V395H845.816V322.6C845.816 312.2 843.949 304.267 840.216 298.8C836.482 293.2 830.682 290.4 822.816 290.4C813.082 290.4 805.482 294.267 800.016 302C794.549 309.6 791.816 319.067 791.816 330.4V395H770.216ZM900.694 395V235H921.894V324H931.494L970.694 275H994.694V276.2L949.094 331.4L999.494 393.8V395H973.094L931.494 342H921.894V395H900.694ZM1074.49 398C1064.36 398 1055.43 396.6 1047.69 393.8C1040.09 391 1033.63 387.133 1028.29 382.2C1023.09 377.133 1019.03 371.267 1016.09 364.6C1013.29 357.933 1011.63 350.733 1011.09 343H1032.69C1033.09 349.133 1034.89 355.067 1038.09 360.8C1041.29 366.4 1045.96 371 1052.09 374.6C1058.36 378.2 1066.16 380 1075.49 380C1085.63 380 1093.56 377.8 1099.29 373.4C1105.03 368.867 1107.89 362.733 1107.89 355C1107.89 347.267 1105.09 341.333 1099.49 337.2C1094.03 333.067 1087.09 329.6 1078.69 326.8L1063.69 321.8C1056.09 319.267 1048.83 316.333 1041.89 313C1034.96 309.533 1029.29 305 1024.89 299.4C1020.49 293.8 1018.29 286.467 1018.29 277.4C1018.29 268.6 1020.43 261.133 1024.69 255C1028.96 248.867 1034.89 244.2 1042.49 241C1050.09 237.667 1058.89 236 1068.89 236C1081.03 236 1091.03 238.2 1098.89 242.6C1106.76 246.867 1112.69 252.533 1116.69 259.6C1120.69 266.667 1122.96 274.467 1123.49 283H1101.89C1101.49 278.067 1100.09 273.4 1097.69 269C1095.43 264.6 1091.89 261 1087.09 258.2C1082.29 255.4 1075.96 254 1068.09 254C1059.56 254 1052.69 255.933 1047.49 259.8C1042.43 263.533 1039.89 268.733 1039.89 275.4C1039.89 282.867 1042.83 288.6 1048.69 292.6C1054.69 296.6 1061.83 299.933 1070.09 302.6L1085.29 307.6C1092.89 310 1100.03 312.933 1106.69 316.4C1113.49 319.867 1118.96 324.467 1123.09 330.2C1127.36 335.8 1129.49 343.333 1129.49 352.8C1129.49 367.2 1124.49 378.333 1114.49 386.2C1104.49 394.067 1091.16 398 1074.49 398ZM1171.23 395C1168.3 391.4 1165.9 387.067 1164.03 382C1162.3 376.933 1161.43 369.333 1161.43 359.2V291.8H1145.03V275H1161.83V245H1182.63V275H1203.03V291.8H1183.03V355.8C1183.03 366.733 1184.16 374.933 1186.43 380.4C1188.83 385.733 1191.7 390.2 1195.03 393.8V395H1171.23ZM1272.11 398C1253.84 398 1240.24 392.333 1231.31 381C1222.51 369.533 1218.11 354.2 1218.11 335C1218.11 315.8 1222.51 300.533 1231.31 289.2C1240.24 277.733 1253.84 272 1272.11 272C1290.38 272 1303.91 277.733 1312.71 289.2C1321.64 300.533 1326.11 315.8 1326.11 335C1326.11 354.2 1321.64 369.533 1312.71 381C1303.91 392.333 1290.38 398 1272.11 398ZM1272.11 380.4C1283.18 380.4 1291.24 376.333 1296.31 368.2C1301.51 360.067 1304.11 349 1304.11 335C1304.11 321 1301.51 309.933 1296.31 301.8C1291.24 293.667 1283.18 289.6 1272.11 289.6C1261.04 289.6 1252.91 293.667 1247.71 301.8C1242.64 309.933 1240.11 321 1240.11 335C1240.11 349 1242.64 360.067 1247.71 368.2C1252.91 376.333 1261.04 380.4 1272.11 380.4ZM1365.8 395L1343.6 276.2V275H1364L1383 377H1387L1408.4 275H1443.2L1464.8 377H1468.8L1487.6 275H1506.8V276.2L1484.6 395H1449.6L1428 292.2H1422.4L1400.8 395H1365.8ZM1532.8 395V275H1552V295.4H1556.8C1557.6 292.067 1559 288.733 1561 285.4C1563 282.067 1566.2 279.333 1570.6 277.2C1575 274.933 1581.2 273.8 1589.2 273.8H1593.2V294.2H1587.2C1575.2 294.2 1566.74 297.333 1561.8 303.6C1556.87 309.733 1554.4 319.4 1554.4 332.6V395H1532.8Z"
              fill="#15171F"
            />
            <ellipse cx="226.395" cy="281.974" rx="18.3954" ry="16.9737" fill="#15171F" />
            <ellipse cx="226.395" cy="338.974" rx="18.3954" ry="16.9737" fill="#15171F" />
            <rect x="141" y="132.791" width="28.7427" height="332.049" rx="4" fill="#15171F" />
            <rect
              width="26.5215"
              height="359.858"
              rx="13.2608"
              transform="matrix(-0.00548523 0.999985 -0.999989 -0.00467021 501 120.681)"
              fill="#15171F"
            />
            <rect x="472.116" y="133.852" width="28.7427" height="332.049" rx="4" fill="#15171F" />
            <rect
              width="26.5215"
              height="359.859"
              rx="13.2608"
              transform="matrix(-0.00466659 0.999989 -0.999992 -0.0039732 500.979 452.479)"
              fill="#15171F"
            />
            <rect
              width="20.3165"
              height="259.966"
              rx="8"
              transform="matrix(0.962958 0.269652 -0.335432 0.942064 344.201 174)"
              fill="#15171F"
            />
            <rect
              width="20.3165"
              height="259.966"
              rx="8"
              transform="matrix(0.962958 0.269652 -0.335432 0.942064 415.201 174)"
              fill="#15171F"
            />
          </svg>
        </NavLink>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <div class="relative hidden lg:flex align-top">
          {#if !data.user}
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/signup">Sign Up</NavLink>
          {:else}
            <NavLink href="/user/settings">Settings</NavLink>
            <form class="flex" action="/logout" method="POST">
              <NavLink>Logout</NavLink>
            </form>
          {/if}
          <NavLink href="https://github.com/joelseq/linkstowr-web" target="_blank" rel="noreferrer">
            <Fa size="2x" icon={faGithub} />
          </NavLink>
        </div>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
</AppShell>
