import type { MetaFunction } from '@remix-run/cloudflare';
import AboutSection from '~/components/AboutSection';
import Hero from '~/components/Hero';
import OSSSection from '~/components/OSSSection';

export const meta: MetaFunction = () => ({
  'og:image:url': 'https://fedeminaya.com/images/og-home.jpg',
  keywords: 'federico, minaya, fedeminaya, developer, web, full stack, home',
  'og:image:alt': 'Home'
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
