import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
  return {
    user: locals.user
      ? {
          id: locals.user.id,
          username: locals.user.username,
        }
      : undefined,
  };
};
