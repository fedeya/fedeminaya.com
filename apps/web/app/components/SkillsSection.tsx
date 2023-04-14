import { useLoaderData } from '@remix-run/react';
import type { loader } from '~/routes/cv';

export default function SkillsSection() {
  const { skillsCategories } = useLoaderData<typeof loader>();

  return (
    <div className="pt-10">
      <h2 className="text-2xl font-semibold">Technical Skills</h2>

      <div className="pt-3 flex flex-col gap-4">
        {skillsCategories.map(category => (
          <div key={category._id}>
            <h3 className="text-lg font-semibold">{category.name}</h3>

            <p className="flex gap-1 mt-2">
              {category.skills
                .map(
                  skill =>
                    `${skill.name}${
                      skill.includes ? ` (${skill.includes?.join(', ')})` : ''
                    }`
                )
                .join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
