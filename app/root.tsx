import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';
import styles from '~/styles/tailwind.css';
import appStyles from '~/styles/app.css';
import { inject } from '@vercel/analytics';

inject();

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Federico Minaya',
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
    href: '/fonts/roboto-slab-500.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/roboto-slab-regular.woff2',
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

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
