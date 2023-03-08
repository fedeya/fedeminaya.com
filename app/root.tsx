import type {
  ActionFunction,
  LinksFunction,
  LoaderArgs,
  MetaFunction
} from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react';
import styles from '~/styles/tailwind.css';
import appStyles from '~/styles/app.css';
import Layout from './components/Layout';
import { commitSession, getSession } from './lib/session.server';

export const meta: MetaFunction<typeof loader> = ({ data }) => ({
  charset: 'utf-8',
  title: 'Federico Minaya',
  'theme-color': data.theme === 'dark' ? '#18181b' : '#e5e7eb',
  description:
    'Federico Minaya is a full stack developer with a passion for building web applications.',
  'og:type': 'website',
  'og:site_name': 'Federico Minaya',
  'og:title': 'Federico Minaya',
  'og:description':
    'Federico Minaya is a full stack developer with a passion for building web applications.',
  'og:url': 'https://fedeminaya.com',
  'twitter:card': 'summary',
  'twitter:site': '@fedeminaya',
  'twitter:creator': '@fedeminaya',
  viewport: 'width=device-width,initial-scale=1'
});

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/inter-v12-latin-regular.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/inter-v12-latin-500.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/inter-v12-latin-600.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/favicon.png'
  },
  {
    rel: 'canonical',
    href: 'https://fedeminaya.com'
  },
  {
    rel: 'stylesheet',
    href: styles
  },
  {
    rel: 'stylesheet',
    href: appStyles
  }
];

export const loader = async ({ request }: LoaderArgs) => {
  const session = await getSession(request.headers.get('Cookie'));

  return json({
    theme: session.get('theme') ?? 'light'
  });
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));

  const theme = session.get('theme');

  if (theme) {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    session.set('theme', newTheme);

    return json(
      {},
      { headers: { 'Set-Cookie': await commitSession(session) } }
    );
  }

  session.set('theme', 'dark');

  return json(
    {},
    {
      headers: {
        'Set-Cookie': await commitSession(session)
      }
    }
  );
};

export default function App() {
  const { theme } = useLoaderData<typeof loader>();

  return (
    <html lang="en" data-theme={theme} className={`scroll-smooth ${theme}`}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="from-indigo-50 dark:from-zinc-900 dark:to-gray-900 dark:via-gray-900 bg-gradient-to-br to-gray-200 min-h-screen via-white">
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
