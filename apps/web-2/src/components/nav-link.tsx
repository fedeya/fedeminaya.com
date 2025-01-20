'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

export const NavLink: FC<NavLinkProps> = ({ children, href }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`underline font-mono ${
        pathname === href ? 'text-purple-800' : ''
      }`}
    >
      {children}
    </Link>
  );
};
