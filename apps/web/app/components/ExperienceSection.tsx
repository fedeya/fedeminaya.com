import { Link, useLoaderData } from '@remix-run/react';
import type { FC } from 'react';
import { type Experience as IExperience } from '~/lib/schemas';
import type { loader } from '~/routes/knowledge';
import { builder } from '~/lib/sanity';

type ExperienceProps = {
  experience: IExperience;
};

const Experience: FC<ExperienceProps> = ({ experience }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-2">
          {experience.logo && (
            <img
              src={builder.image(experience.logo).width(32).height(32).url()}
              alt={experience.name}
              className="w-8 object-cover h-8 rounded-md"
            />
          )}
          <Link
            to={experience.pageUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="text-xl font-medium underline"
          >
            {experience.name}
          </Link>
        </div>

        <p className="text-sm font-medium">
          {experience.start}
          {' - '}
          {experience.end}
        </p>
      </div>

      <p className="my-2">{experience.description}</p>

      <p>
        Technologies: {experience.skills.map(skill => skill.name).join(', ')}
      </p>
    </div>
  );
};

export default function ExperienceSection() {
  const { experiences } = useLoaderData<typeof loader>();

  return (
    <div className="pt-10">
      <h3 className="text-2xl font-semibold">Experience</h3>

      <div className="flex flex-col gap-6 mt-4">
        {experiences.map(experience => (
          <Experience experience={experience} key={experience._id} />
        ))}
      </div>
    </div>
  );
}
