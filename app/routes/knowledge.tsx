import type { MetaFunction } from '@remix-run/cloudflare';
import ExperienceSection from '~/components/ExperienceSection';
import SkillsSection from '~/components/SkillsSection';

export const meta: MetaFunction = () => ({
  title: 'Knowledge - Federico Minaya',
  description: 'Skills and experience of Federico Minaya',
  'og:title': 'Knowledge - Federico Minaya',
  'og:description': 'Skills and experience of Federico Minaya',
  'og:url': 'https://fedeminaya.com/knowledge'
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
