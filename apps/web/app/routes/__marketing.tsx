import { json, type LoaderArgs } from '@remix-run/cloudflare';
import { Link, Outlet, Form, useLoaderData } from '@remix-run/react';
import { FaHeart, FaMoon, FaSun } from 'react-icons/fa';
import { getSession } from '~/lib/session.server';

export const loader = async ({ request }: LoaderArgs) => {
  const session = await getSession(request.headers.get('Cookie'));

  return json({
    theme: session.get('theme') ?? 'light'
  });
};

export default function MarketingLayout() {
  const { theme } = useLoaderData<typeof loader>();

  return (
    <div className="font-sans dark:text-gray-200 mx-auto sm:px-10 py-4 px-4 max-w-4xl">
      <header className="mb-4">
        <nav className="flex gap-2 justify-between items-center py-2">
          <ul className="flex items-center gap-3">
            <li>
              <Link to="/#about" className="underline">
                About
              </Link>
            </li>

            <li>
              <Link to="/#oss" className="underline">
                OSS
              </Link>
            </li>

            <li>
              <Link to="/knowledge" className="underline">
                Knowledge
              </Link>
            </li>
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

            <Form method="post">
              <button
                className="rounded-md flex dark:border-gray-500 items-center gap-2 border-stone-500 p-2 shadow border"
                type="submit"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </Form>
          </div>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}
