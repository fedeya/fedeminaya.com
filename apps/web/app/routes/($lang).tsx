import type { LoaderArgs } from '@remix-run/cloudflare';
import { Outlet, useLoaderData, useLocation } from '@remix-run/react';
import { Link } from '@remix-run/react';
import { jsonHash } from 'remix-utils';
import { getLocale, defaultLocale } from '~/lib/locale';
import { redirect } from '@remix-run/cloudflare';

export const loader = ({ request, params }: LoaderArgs) => {
  const locale = getLocale(request, params.lang);
  const url = new URL(request.url);

  if (locale !== defaultLocale && !url.pathname.startsWith(`/${locale}`)) {
    return redirect(`/${locale}${url.pathname}`, { status: 302 });
  }

  return jsonHash({ locale });
};

export default function LangLayout() {
  const { pathname } = useLocation();
  const { locale } = useLoaderData<typeof loader>();

  const pathnameWithoutLang = pathname.replace(/^\/(en|es)/, '');

  return (
    <>
      <Outlet />

      <footer className="mt-10">
        <p>
          Switch to{' '}
          <Link
            replace
            to={`/${locale === 'en' ? 'es' : 'en'}${pathnameWithoutLang}`}
            className="underline"
          >
            {locale === 'en' ? 'Spanish' : 'English'}
          </Link>
        </p>
      </footer>
    </>
  );
}
