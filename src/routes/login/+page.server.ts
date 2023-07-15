import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { getAPI } from '$lib/api';
import { AUTH_COOKIE } from '$lib/consts';

export const load: PageServerLoad = (event) => {
  const user = event.locals.user;

  if (user) {
    throw redirect(302, '/user/settings');
  }
};

export const actions: Actions = {
  default: async ({ cookies, request }) => {
    const { username, password } = Object.fromEntries(await request.formData());

    if (!username || !password) {
      return fail(400, {
        error: 'Please provide all required fields',
      });
    }

    try {
      const api = getAPI();
      const response = await api.post('/signin', {
        username,
        password,
      });

      if (!response.data.token) {
        return fail(400, {
          error: 'Login failed',
        });
      }

      cookies.set(AUTH_COOKIE, response.data.token, {
        httpOnly: true,
        path: '/',
        secure: import.meta.env.PROD,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
      });
    } catch (error) {
      console.log('Error: ', error);
      return fail(401, {
        error: 'Request was unsuccessful',
      });
    }

    throw redirect(302, '/user/settings');
  },
};
