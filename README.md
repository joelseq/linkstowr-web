# LinkStowr Web App

Web App for creating an account and generating an access token which can be used to save links from a Chromium based browser directly into Obsidian.

The other repos:

[LinkStowr API](https://github.com/joelseq/linkstowr-api)

[LinkStowr Chrome Extension](https://github.com/joelseq/linkstowr-extension)

[LinkStowr Obsidian Plugin](https://github.com/joelseq/obsidian-linkstowr)

## Developing

In order to run the local development setup for the web app, you will also need to run the server locally. You can follow the
instructions in the [API repo's README](https://github.com/joelseq/linkstowr-api) for how to do that.

After you've got the server setup and running, install the dependencies for this repo with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
