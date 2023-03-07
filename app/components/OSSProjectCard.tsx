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
    <div className="border py-2 px-3 flex flex-col justify-between gap-1 rounded-md shadow border-stone-500">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>

        <p className="text-sm">{description}</p>
      </div>

      <div>
        <p className="text-xs">{metrics}</p>

        <Link
          to={link}
          target="_blank"
          className="text-sm font-medium underline flex gap-1 mt-2 items-center"
        >
          See more <HiOutlineArrowUpRight aria-label="External Link" />
        </Link>
      </div>
    </div>
  );
};

export default OSSProjectCard;
