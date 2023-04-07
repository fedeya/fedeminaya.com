import type { LoaderArgs } from '@remix-run/cloudflare';
import { jsonHash } from 'remix-utils';
import AboutSection from '~/components/AboutSection';
import ContactSection from '~/components/ContactSection';
import Hero from '~/components/Hero';
import OSSSection from '~/components/OSSSection';
import { mergeMeta } from '~/utils/merge-meta';

export const loader = ({ context }: LoaderArgs) => {
  const headers = new Headers();

  headers.set(
    'Cache-Control',
    'max-age=10, s-maxage=10, stale-while-revalidate'
  );

  return jsonHash(
    {
      ossProjects: context.services.api.getOssProjects()
    },
    { headers }
  );
};

export const meta = mergeMeta(
  () => [{ title: 'Federico Minaya' }],
  () => [
    {
      property: 'og:image:url',
      content: 'https://fedeminaya.com/images/og-home.jpg'
    },
    {
      property: 'og:image:alt',
      content: 'Home'
    }
  ]
);

export const shouldRevalidate = () => false;

export default function Index() {
  return (
    <>
      <Hero />

      <AboutSection />

      <OSSSection />

      <ContactSection />
    </>
  );
}
