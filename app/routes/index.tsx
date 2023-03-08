import type { MetaFunction } from '@remix-run/cloudflare';
import AboutSection from '~/components/AboutSection';
import Hero from '~/components/Hero';
import OSSSection from '~/components/OSSSection';

export const meta: MetaFunction = () => ({
  'og:image': 'https://fedeminaya.com/images/og-home.png'
});

export default function Index() {
  return (
    <>
      <Hero />

      <AboutSection />

      <OSSSection />
    </>
  );
}
