import { useEffect } from 'react';
import type {
  LinksFunction,
  LoaderArgs,
  V2_MetaFunction
} from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useNavigation,
  useRouteError
} from '@remix-run/react';
import styles from '~/styles/tailwind.css';
import appStyles from '~/styles/app.css';
import isbot from 'isbot';
import Layout from './components/Layout';
import { getTheme } from './lib/theme.server';
import Analytics from './components/Analytics';
import NProgress from 'nprogress';

NProgress.configure({
  showSpinner: false
});

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => [
  {
    charset: 'utf-8'
  },
  {
    title: 'Federico Minaya'
  },
  {
    name: 'X-UA-Compatible',
    content: 'IE=edge,chrome=1'
  },
  {
    name: 'viewport',
    content: 'width=device-width,initial-scale=1'
  },
  {
    name: 'theme-color',
    content: data.theme === 'dark' ? '#18181b' : '#e5e7eb'
  },
  {
    property: 'og:type',
    content: 'website'
  },
  {
    property: 'og:title',
    content: 'Federico Minaya'
  },
  {
    property: 'og:site_name',
    content: 'Federico Minaya'
  },
  {
    name: 'description',
    content:
      'Federico Minaya is a full stack developer with a passion for building web applications.'
  },
  {
    property: 'og:description',
    content:
      'Federico Minaya is a full stack developer with a passion for building web applications.'
  },
  {
    name: 'twitter:card',
    content: 'summary_large_image'
  },
  {
    name: 'twitter:site',
    content: '@fedeminaya'
  },
  {
    name: 'twitter:creator',
    content: '@fedeminaya'
  }
];

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
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === 'idle') NProgress.done();
    else NProgress.start();
  }, [navigation.state]);

  return (
    <html lang="en" data-theme={theme} className="scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={theme}>
        <div className="from-indigo-50 dark:from-zinc-900 dark:to-gray-900 dark:via-gray-900 bg-gradient-to-br to-gray-200 min-h-screen via-white fixed left-0 top-0 h-full w-full" />
        <Layout />
        <Analytics />
        <ScrollRestoration />
        {!isBot && <Scripts />}
        <LiveReload />
      </body>
    </html>
  );
}
