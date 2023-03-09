import { z } from 'zod';
import { userPrefs } from './cookies.server';

const themeEnum = z.enum(['light', 'dark']);

export const getTheme = async (headers: Headers) => {
  const cookieHeader = headers.get('Cookie');

  const cookie = (await userPrefs.parse(cookieHeader)) || {};

  return themeEnum.parse(cookie?.theme ?? 'light');
};

export const toggleTheme = async (headers: Headers) => {
  const cookieHeader = headers.get('Cookie');

  const cookie = (await userPrefs.parse(cookieHeader)) || {};

  const theme = themeEnum.parse(cookie?.theme ?? 'light');

  const newTheme = theme === 'light' ? 'dark' : 'light';

  cookie.theme = newTheme;

  return userPrefs.serialize(cookie);
};
