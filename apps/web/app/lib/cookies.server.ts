import { createCookie } from '@remix-run/cloudflare';

export const userPrefs = createCookie('user-prefs', {
  httpOnly: true,
  maxAge: 2147483647
});
