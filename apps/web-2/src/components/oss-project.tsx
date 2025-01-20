import { FC } from 'react';

type OSSProjectProps = {
  title: string;
  description: string;
  url: string;
  allowReferrer?: boolean;
  stats?: {
    projects: number;
    downloads: number;
  };
};

export const OSSProject: FC<OSSProjectProps> = ({
  title,
  description,
  stats,
  url,
  allowReferrer = false,
}) => {
  return (
    <div className="border-gray-200 pt-4 pb-6 border-b">
      <h4 className="text-lg underline text-purple-800 font-medium mb-2 font-mono">
        <a
          href={url}
          rel={allowReferrer ? '' : 'noreferrer noopener'}
          className="px-2 -ml-2 py-1 hover:bg-gray-100 transition ease-in rounded-md"
          target="_blank"
        >
          {title}
        </a>
      </h4>

      <p>{description}</p>

      {stats && (
        <ul className="list-disc px-4 mt-3 font-mono space-y-2">
          <li>
            Used in{' '}
            <span className="font-medium">{stats.projects}+ projects</span>
          </li>
          <li className="font-medium">{stats.downloads}k+ Downloads</li>
        </ul>
      )}
    </div>
  );
};
