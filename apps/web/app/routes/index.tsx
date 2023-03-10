import type { LoaderArgs, MetaFunction } from '@remix-run/cloudflare';
import { jsonHash } from 'remix-utils';
import AboutSection from '~/components/AboutSection';
import Hero from '~/components/Hero';
import OSSSection from '~/components/OSSSection';

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

export const meta: MetaFunction = () => ({
  'og:image:url': 'https://fedeminaya.com/images/og-home.jpg',
  keywords: 'federico, minaya, fedeminaya, developer, web, full stack, home',
  'og:image:alt': 'Home'
});

export const shouldRevalidate = () => false;

export default function Index() {
  return (
    <>
      <Hero />

      <AboutSection />

      <OSSSection />
    </>
  );
}
