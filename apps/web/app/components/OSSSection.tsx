import { Link, useLoaderData } from '@remix-run/react';
import { FaHeart } from 'react-icons/fa';
import type { loader } from '~/routes';
import OSSProjectCard from './OSSProjectCard';

export default function OSSSection() {
  const { ossProjects } = useLoaderData<typeof loader>();

  return (
    <div className="pt-8 mt-6" id="oss">
      <div className="flex gap-1 items-center">
        <span className="text-2xl">~</span>
        <h2 className="text-3xl font-semibold">OSS</h2>
      </div>
      <p className="mt-2 text-left font-medium">
        Here is the list of my most important open source projects
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {ossProjects.map(project => (
          <OSSProjectCard key={project._id} project={project} />
        ))}
      </div>

      <div className="mt-6 flex gap-2 text-center xs:text-left flex-col xs:flex-row items-center">
        <p>One of my projects was helpful?</p>

        <Link
          to="https://github.com/sponsors/fedeya"
          target="_blank"
          className="rounded-md dark:border-gray-500 w-fit flex items-center gap-2 text-xs border-stone-500 p-2 shadow border"
        >
          <FaHeart />
          <span>Sponsor Me</span>
        </Link>
      </div>
    </div>
  );
}
