import { DonateMessage } from '@/components/donate';
import { OSSProject } from '@/components/oss-project';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects I have worked on',
  openGraph: {
    images: [
      {
        type: 'image/jpeg',
        url: 'https://fedeminaya.com/og?page=Projects',
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold font-mono mb-10">Personal Projects</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold font-mono mb-4">Apps</h2>

          <OSSProject
            title="Pollemic"
            allowReferrer
            description="Slack Polls that get people talking"
            url="https://pollemic.fedeya.sh"
          />
        </section>

        <section>
          <h2 className="text-xl font-bold font-mono mb-4">Libraries</h2>

          <OSSProject
            title="remix-sitemap"
            description="Sitemap generator for Remix applications"
            url="https://github.com/fedeya/remix-sitemap"
          />

          <OSSProject
            title="next-sanity-client"
            description="Sanity Client for Next.js Apps with App Dir Support "
            url="https://github.com/fedeya/next-sanity-client"
          />

          <OSSProject
            title="next-auth-sanity"
            description="NextAuth Adapter and Provider for Sanity"
            url="https://github.com/fedeya/next-auth-sanity"
          />

          <div className="mt-4 flex items-center text-sm gap-2 font-mono">
            <span>&gt;</span>
            <Link
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/fedeya"
              className="underline font-mono text-purple-800"
            >
              More projects on Github
            </Link>
          </div>
        </section>

        <DonateMessage />
      </div>
    </div>
  );
}
