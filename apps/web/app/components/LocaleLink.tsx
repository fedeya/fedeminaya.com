import {
  Link as RemixLink,
  useRouteLoaderData,
  type LinkProps,
  useLocation
} from '@remix-run/react';
import type { FC } from 'react';
import type { Locale } from '~/lib/locale';

const LocaleLink: FC<LinkProps> = ({ to, ...props }) => {
  const { locale } = useRouteLoaderData('routes/($lang)') as { locale: Locale };
  const { pathname } = useLocation();

  if (pathname.startsWith(`/${locale}`)) {
    return <RemixLink to={`/${locale}${to}`} {...props} />;
  }

  return <RemixLink {...props} to={to} />;
};

export default LocaleLink;
