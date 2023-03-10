import {
  Outlet,
  Link,
  useLoaderData,
  useFetcher,
  NavLink as RemixNavLink
} from '@remix-run/react';
import { FaHeart, FaMoon, FaSun } from 'react-icons/fa';
import type { loader } from '~/root';
import clsx from 'clsx';

const navigation = [
  {
    name: 'Home',
    to: '/'
  },
  // {
  // name: 'Blog',
  // to: '/blog'
  // },
  {
    name: 'CV',
    to: '/cv'
  }
];

export default function Layout() {
  const { theme } = useLoaderData<typeof loader>();

  const fetcher = useFetcher();

  return (
    <div className="font-sans z-10 relative text-gray-900 dark:text-gray-200 mx-auto sm:px-10 py-4 px-4 max-w-4xl">
      <header className="mb-4">
        <nav className="flex gap-2 justify-between items-center py-2">
          <ul className="flex items-center gap-3">
            {navigation.map(nav => (
              <li key={nav.name}>
                <RemixNavLink
                  prefetch="intent"
                  to={nav.to}
                  className={({ isActive }) =>
                    clsx('underline', isActive && 'font-medium')
                  }
                >
                  {nav.name}
                </RemixNavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="https://github.com/sponsors/fedeya"
              target="_blank"
              className="rounded-md flex dark:border-gray-500 items-center gap-2 text-xs border-stone-500 p-2 shadow border"
            >
              <FaHeart />
              <span>Sponsor</span>
            </Link>

            <fetcher.Form action="/theme" method="post">
              <button
                className="rounded-md flex dark:border-gray-500 items-center gap-2 border-stone-500 p-2 shadow border"
                type="submit"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </fetcher.Form>
          </div>
        </nav>
      </header>

      <main className="mt-6">
        <Outlet />
      </main>
    </div>
  );
}
