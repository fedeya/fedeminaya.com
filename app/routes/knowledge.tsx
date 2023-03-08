import type { MetaFunction } from '@remix-run/cloudflare';
import ExperienceSection from '~/components/ExperienceSection';
import SkillsSection from '~/components/SkillsSection';

export const meta: MetaFunction = () => ({
  title: 'Knowledge - Federico Minaya',
  description: 'Skills and experience of Federico Minaya',
  'og:title': 'Knowledge - Federico Minaya',
  'og:description': 'Skills and experience of Federico Minaya',
  'og:url': 'https://fedeminaya.com/knowledge',
  'og:image:alt': 'Knowledge',
  'og:image:url': 'https://fedeminaya.com/images/og-knowledge.jpg'
});

export default function Knowledge() {
  return (
    <div>
      <h1 className="font-semibold text-3xl">Knowledge</h1>

      <SkillsSection />

      <ExperienceSection />
    </div>
  );
}
