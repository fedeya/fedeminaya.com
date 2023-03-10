import type { LoaderArgs, MetaFunction } from '@remix-run/cloudflare';
import { jsonHash } from 'remix-utils';
import ExperienceSection from '~/components/ExperienceSection';
import SkillsSection from '~/components/SkillsSection';

export const meta: MetaFunction = () => ({
  title: 'CV - Federico Minaya',
  keywords:
    'federico, minaya, fedeminaya, developer, web, full stack, cv, curriculum, skills, experience, fedeya',
  description: 'Skills and experience of Federico Minaya',
  'og:title': 'CV - Federico Minaya',
  'og:description': 'Skills and experience of Federico Minaya',
  'og:image:alt': 'CV',
  'og:image:url': 'https://fedeminaya.com/images/og-knowledge.jpg'
});

export const loader = async ({ context }: LoaderArgs) => {
  const headers = new Headers();

  headers.set(
    'Cache-Control',
    'max-age=10, s-maxage=10, stale-while-revalidate'
  );

  return jsonHash(
    {
      skillsCategories: context.services.api.getSkillsCategories(),
      experiences: context.services.api.getExperiences()
    },
    {
      headers
    }
  );
};

export const shouldRevalidate = () => false;

export default function CV() {
  return (
    <div>
      <h1 className="font-semibold text-3xl">Curriculum</h1>

      <ExperienceSection />

      <SkillsSection />
    </div>
  );
}
