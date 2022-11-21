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
    rel: 'dns-prefetch',
    href: 'https://fonts.googleapis.com'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'use-credentials'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&display=swap'
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
