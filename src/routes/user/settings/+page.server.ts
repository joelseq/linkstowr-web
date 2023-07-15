import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { getAPI } from '$lib/api';

type Token = {
  id: string;
  name: string;
  short_token: string;
};

export const load: PageServerLoad = async (event) => {
  if (!event.locals.user) {
    throw redirect(302, '/');
  }

  const response = await getAPI(event.locals.user.token).get('/api/tokens');

  const tokens: Token[] = response.data ?? [];

  return { tokens };
};

export const actions: Actions = {
  generate: async ({ locals, request }) => {
    const { tokenName } = Object.fromEntries(await request.formData());
    const jwt = locals.user?.token;

    if (!jwt) {
      throw redirect(302, '/');
    }

    try {
      const response = await getAPI(jwt).post('/api/tokens', {
        name: tokenName,
      });
      const token: string | undefined = response.data.token;

      if (!token) {
        return fail(400, {
          generateError: 'Failed to generate access token',
        });
      }

      return {
        accessToken: token,
      };
    } catch (error) {
      return fail(400, {
        generateError: 'Failed to generate access token',
      });
    }
  },
  delete: async ({ locals, request }) => {
    const { id } = Object.fromEntries(await request.formData());
    const jwt = locals.user?.token;

    if (!jwt) {
      throw redirect(302, '/');
    }

    try {
      const response = await getAPI(jwt).delete(`/api/tokens/${id}`);

      if (response.status !== 200) {
        return fail(400, {
          deleteError: 'Failed to generate access token',
        });
      }

      return {
        deleteSuccess: true,
      };
    } catch (error) {
      return fail(400, {
        deleteError: 'Failed to generate access token',
      });
    }
  },
};
