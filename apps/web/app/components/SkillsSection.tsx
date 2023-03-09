import { useLoaderData } from '@remix-run/react';
import type { loader } from '~/routes/cv';

export default function SkillsSection() {
  const { skillsCategories } = useLoaderData<typeof loader>();

  return (
    <div className="pt-10">
      <h3 className="text-2xl font-semibold">Technical Skills</h3>

      <div className="pt-2 flex flex-col gap-4">
        {skillsCategories.map(category => (
          <div key={category._id}>
            <h4 className="text-lg font-semibold">{category.name}</h4>

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
