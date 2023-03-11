import { z } from 'zod';

export const defaultLocale: Locale = 'en';

export const localeSchema = z.enum(['en', 'es']);

export const locales = localeSchema.options;

export type Locale = z.infer<typeof localeSchema>;

export const getLocale = (request: Request, lang?: string) => {
  if (lang) {
    try {
      return localeSchema.parse(lang);
    } catch {
      throw new Response('Not found', { status: 404 });
    }
  }

  const acceptLanguage = request.headers.get('Accept-Language');

  const acceptLanguageLocale = acceptLanguage?.split('-')[0];

  const locale = acceptLanguageLocale
    ? locales.includes(acceptLanguageLocale as Locale)
      ? (acceptLanguageLocale as Locale)
      : defaultLocale
    : defaultLocale;

  return localeSchema.parse(locale);
};
