import type { FC } from 'react';
import { Link } from '@remix-run/react';
import type { OssProject } from '~/lib/schemas';

type OSSProjectCardProps = {
  project: OssProject;
};

const OSSProjectCard: FC<OSSProjectCardProps> = ({ project }) => {
  return (
    <div className="border py-3 px-4 flex dark:border-gray-600 flex-col justify-between gap-1 rounded-md shadow border-stone-500">
      <div>
        <Link
          to={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium underline"
        >
          {project.name}
        </Link>

        <p className="text-sm">{project.description}</p>
      </div>

      <div>
        <p className="text-xs">{project.metric}</p>
      </div>
    </div>
  );
};

export default OSSProjectCard;
