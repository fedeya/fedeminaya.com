import type { Metadata, Viewport } from 'next';
// import localFont from 'next/font/local';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import PlausibleProvider from 'next-plausible';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
//
const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  weight: ['100', '300', '400', '500', '700'],
});

const inter = Inter({
  variable: '--font-inter',
  weight: ['100', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Federico Minaya',
  description: 'Full Stack Developer',
  openGraph: {
    title: 'Federico Minaya',
    description: 'Full Stack Developer',
    type: 'website',
    images: [
      {
        type: 'image/jpeg',
        url: 'https://fedeminaya.com/og-home.jpg',
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

      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <header className="max-w-4xl py-8 mx-auto">
          <nav>
            {/* <Link className="font-mono text-purple-800 font-bold" href="/"> */}
            {/*   FM */}
            {/* </Link> */}

            <ul className="flex underline font-mono items-center justify-center gap-8">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/#projects">Projects</Link>
              </li>
            </ul>
          </nav>

          <div className="max-w-4xl px-4 md:px-10 lg:px-0 font-inter mx-auto py-14">
            {children}
          </div>
        </header>
      </body>
    </html>
  );
}
