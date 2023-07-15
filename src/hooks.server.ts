import { AUTH_COOKIE } from '$lib/consts';
import { getTokenPayload, isTokenExpired } from '$lib/utils/jwt';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const authToken = event.cookies.get(AUTH_COOKIE);

  if (authToken && !isTokenExpired(authToken)) {
    const tokenPayload = getTokenPayload(authToken);

    if (tokenPayload != null) {
      event.locals.user = {
        id: tokenPayload.sub,
        username: tokenPayload.username,
        token: authToken,
      };
    }
  }

  return await resolve(event);
};
