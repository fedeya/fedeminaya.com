import type { LoaderArgs } from '@remix-run/cloudflare';
import { jsonHash } from 'remix-utils';
import ExperienceSection from '~/components/ExperienceSection';
import SkillsSection from '~/components/SkillsSection';
import { mergeMeta } from '~/utils/merge-meta';

export const meta = mergeMeta(
  () => [
    {
      title: 'CV - Federico Minaya'
    },
    {
      name: 'description',
      content: 'Skills and experience of Federico Minaya'
    },
    {
      property: 'og:title',
      content: 'CV - Federico Minaya'
    },
    {
      property: 'og:description',
      content: 'Skills and experience of Federico Minaya'
    }
  ],
  () => [
    {
      property: 'og:image:url',
      content: 'https://fedeminaya.com/images/og-knowledge.jpg'
    },
    {
      property: 'og:image:alt',
      content: 'CV'
    }
  ]
);

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
