import { useLoaderData } from '@remix-run/react';
import type { loader } from '~/routes/knowledge';
import clsx from 'clsx';

export default function SkillsSection() {
  const { skillsCategories } = useLoaderData<typeof loader>();

  return (
    <div className="pt-10">
      <h3 className="text-2xl font-semibold">Skills</h3>

      <div className="pt-2 grid gap-4 sm:gap-2 grid-cols-1 sm:grid-cols-3">
        {skillsCategories.map((category, index) => (
          <div
            className={clsx({
              'sm:text-left': index === 0,
              'sm:text-center': index === 1,
              'sm:text-right': index === 2
            })}
            key={category._id}
          >
            <h4 className="text-lg font-semibold">{category.name}</h4>

            <ul
              className={clsx('flex flex-col gap-1 mt-2', {
                'sm:justify-center sm:items-center': index === 1
              })}
            >
              {category.skills.map(skill => (
                <li key={skill._id}>
                  <span className="font-medium">{skill.name}</span>{' '}
                  {skill.includes && <span>({skill.includes.join(', ')})</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
