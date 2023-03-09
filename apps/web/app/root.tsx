import type {
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
import isbot from 'isbot';
import Layout from './components/Layout';
import { getTheme } from './lib/theme.server';

export const meta: MetaFunction<typeof loader> = ({ data }) => ({
  charset: 'utf-8',
  title: 'Federico Minaya',
  keywords: 'federico, minaya, fedeminaya, developer, web, full stack, fedeya',
  'theme-color': data.theme === 'dark' ? '#18181b' : '#e5e7eb',
  description:
    'Federico Minaya is a full stack developer with a passion for building web applications.',
  'og:type': 'website',
  'X-UA-Compatible': 'IE=edge,chrome=1',
  'og:site_name': 'Federico Minaya',
  'og:title': 'Federico Minaya',
  'og:image:type': 'image/jpg',
  'og:image:width': '1200',
  'og:image:height': '630',
  'og:description':
    'Federico Minaya is a full stack developer with a passion for building web applications.',
  'twitter:card': 'summary_large_image',
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
    rel: 'stylesheet',
    href: styles
  },
  {
    rel: 'stylesheet',
    href: appStyles
  }
];

export const loader = async ({ request }: LoaderArgs) => {
  return json({
    theme: await getTheme(request.headers),
    isBot: isbot(request.headers.get('User-Agent') ?? '')
  });
};

export default function App() {
  const { theme, isBot } = useLoaderData<typeof loader>();

  return (
    <html lang="en" data-theme={theme} className={`scroll-smooth ${theme}`}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="from-indigo-50 dark:from-zinc-900 dark:to-gray-900 dark:via-gray-900 bg-gradient-to-br to-gray-200 min-h-screen via-white">
        <Layout />
        <ScrollRestoration />
        {!isBot && <Scripts />}
        <LiveReload />
      </body>
    </html>
  );
}
