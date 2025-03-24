import type { Metadata, Viewport } from 'next';
// import localFont from 'next/font/local';
import { VT323 } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import PlausibleProvider from 'next-plausible';
import { NavLink } from '@/components/nav-link';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
//

const vt32 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-vt32',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Federico Minaya',
    default: 'Federico Minaya',
  },
  description: 'Full Stack Developer',
  openGraph: {
    title: 'Federico Minaya',
    description: 'Full Stack Developer',
    type: 'website',
    images: [
      {
        type: 'image/jpeg',
        url: 'https://fedeminaya.com/og',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fedeminaya',
    creator: '@fedeminaya',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider
          trackOutboundLinks
          hash
          customDomain="https://plausible.fedeminaya.com"
          domain="fedeminaya.com"
          selfHosted
        />
      </head>

      <body className={`${vt32.variable} font-inter`}>
        {/* <header className="max-w-4xl py-8 mx-auto"> */}
        {/*   <nav> */}
        {/*     <Link className="font-mono text-purple-800 font-bold" href="/"> */}
        {/*       FM */}
        {/*     </Link> */}
        {/**/}
        {/*     <ul className="flex items-center justify-center gap-8"> */}
        {/*       <li> */}
        {/*         <NavLink href="/">Home</NavLink> */}
        {/*       </li> */}
        {/**/}
        {/*       <li> */}
        {/*         <NavLink href="/about">About</NavLink> */}
        {/*       </li> */}
        {/**/}
        {/*       <li> */}
        {/*         <NavLink href="/projects">Projects</NavLink> */}
        {/*       </li> */}
        {/*     </ul> */}
        {/*   </nav> */}
        {/**/}
        {/*   <div className="max-w-4xl px-4 md:px-10 lg:px-0 font-inter mx-auto py-14"> */}
        {/*     {children} */}
        {/*   </div> */}
        {/* </header> */}
        {children}
      </body>
    </html>
  );
}
