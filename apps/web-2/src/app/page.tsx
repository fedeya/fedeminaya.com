import { DonateMessage } from '@/components/donate';
import { OSSProject } from '@/components/oss-project';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://fedeminaya.com',
  },
};

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="border-b border-gray-200 pb-8">
        <h1 className="text-2xl mb-4 text-purple-800 font-mono font-bold">
          Federico Minaya
        </h1>

        <p className="text-lg font-mono font-medium">
          Full Stack Developer{' '}
          <span className="text-gray-400">
            based in Buenos Aires, Argentina
          </span>
        </p>

        <div className="mt-6 -ml-3 font-mono font-medium flex flex-wrap gap-4">
          <a
            href="mailto:hello@fedeminaya.com"
            className="text-lg underline px-3 rounded-md py-1 hover:bg-gray-100 transition ease-in"
          >
            Contact me
          </a>

          <a
            href="https://github.com/fedeya"
            target="_blank"
            rel="noreferrer noopener"
            className="text-lg underline px-3 rounded-md py-1 hover:bg-gray-100 transition ease-in"
          >
            Github
          </a>

          <a
            href="https://linkedin.com/in/federico-minaya"
            target="_blank"
            rel="noreferrer noopener"
            className="text-lg underline px-3 rounded-md py-1 hover:bg-gray-100 transition ease-in"
          >
            Linkedin
          </a>

          <a
            href="/cv"
            target="_blank"
            rel="noreferrer noopener"
            className="text-lg underline px-3 rounded-md py-1 hover:bg-gray-100 transition ease-in"
          >
            Curriculum
          </a>
        </div>
      </section>

      <section id="projects" className="py-8">
        <h2 className="text-2xl mb-2 font-bold font-mono">Built with ❤️</h2>

        {/* <h3 className="text-xl font-semibold font-mono">Featured Projects</h3> */}

        <OSSProject
          title="remix-sitemap"
          description="Sitemap generator for Remix applications"
          url="https://github.com/fedeya/remix-sitemap"
          stats={{ projects: 40, downloads: 50 }}
        />

        <OSSProject
          title="next-sanity-client"
          description="Sanity Client for Next.js Apps with App Dir Support "
          url="https://github.com/fedeya/next-sanity-client"
          stats={{ projects: 200, downloads: 100 }}
        />

        <OSSProject
          title="next-auth-sanity"
          description="NextAuth Adapter and Provider for Sanity"
          url="https://github.com/fedeya/next-auth-sanity"
          stats={{ projects: 700, downloads: 30 }}
        />

        <div className="mt-8">
          <DonateMessage />
        </div>
      </section>
    </div>
  );
}
