import type { FC } from 'react';
import { Link } from '@remix-run/react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

type OSSProjectCardProps = {
  title: string;
  description: string;
  metrics: string;
  link: string;
};

const OSSProjectCard: FC<OSSProjectCardProps> = ({
  title,
  description,
  metrics,
  link
}) => {
  return (
    <div className="border py-3 px-4 flex dark:border-gray-600 flex-col justify-between gap-1 rounded-md shadow border-stone-500">
      <div>
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium underline"
        >
          {title}
        </Link>

        <p className="text-sm">{description}</p>
      </div>

      <div>
        <p className="text-xs">{metrics}</p>
      </div>
    </div>
  );
};

export default OSSProjectCard;
