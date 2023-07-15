// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    user: UserInfo | undefined;
  }
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}

type UserInfo = {
  id: string;
  username: string;
  token: string;
};
