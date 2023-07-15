import { getAPI } from '$lib/api';
import { redirect, type Action, fail } from '@sveltejs/kit';

export const POST: Action = async ({ locals, request }) => {
  const { tokenName } = Object.fromEntries(await request.formData());
  const jwt = locals.user?.token;

  if (!jwt) {
    throw redirect(302, '/');
  }

  try {
    const response = await getAPI(jwt).post('/api/tokens', {
      name: tokenName,
    });
    const accessToken: string | undefined = response.data.accessToken;

    if (!accessToken) {
      return fail(400, {
        error: 'Failed to generate access token',
      });
    }

    return {
      accessToken,
    };
  } catch (error) {
    return fail(400, {
      error: 'Failed to generate access token',
    });
  }
};
