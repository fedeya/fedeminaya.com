import type { LoaderArgs } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { toggleTheme } from '~/lib/theme.server';

export const action = async ({ request }: LoaderArgs) => {
  return json(
    {},
    {
      headers: {
        'Set-Cookie': await toggleTheme(request.headers)
      }
    }
  );
};
