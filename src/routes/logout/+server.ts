import { AUTH_COOKIE } from '$lib/consts';
import { redirect, type Action } from '@sveltejs/kit';

export const POST: Action = async ({ cookies, locals }) => {
  cookies.delete(AUTH_COOKIE);

  locals.user = undefined;

  throw redirect(303, '/');
};
