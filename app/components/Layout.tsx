import { Link, Outlet } from '@remix-run/react';
import { FaHeart } from 'react-icons/fa';

export default function Layout() {
  return (
    <div className="font-sans mx-auto sm:px-10 py-4 px-4 max-w-4xl">
      <header className="mb-4">
        <nav className="flex justify-between items-center py-2">
          <ul className="flex items-center gap-2">
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
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="https://github.com/sponsors/fedeya"
              target="_blank"
              className="rounded-md flex items-center gap-2 text-xs border-stone-500 p-2 shadow border"
            >
              <FaHeart />
              <span>Sponsor</span>
            </Link>
          </div>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}
