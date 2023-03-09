import { Link } from '@remix-run/react';
import type { FC } from 'react';

type ExperienceProps = {
  title: string;
  technologies: string[];
  current?: boolean;
  image?: string;
  url: string;
  time?: string;
  children: React.ReactNode;
};

const Experience: FC<ExperienceProps> = ({
  title,
  technologies,
  current,
  children,
  image,
  url,
  time
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-2">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-8 object-cover h-8 rounded-md"
            />
          )}
          <Link
            to={url}
            rel="noopener noreferrer"
            target="_blank"
            className="text-xl font-medium underline"
          >
            {title}
          </Link>
        </div>

        {(current || time) && (
          <p className="text-sm font-medium">{time ?? 'Current'}</p>
        )}
      </div>

      <p className="my-2">{children}</p>

      <p>Technologies: {technologies.join(', ')}</p>
    </div>
  );
};

export default function ExperienceSection() {
  return (
    <div className="pt-10">
      <h3 className="text-2xl font-semibold">Experience</h3>

      <div className="flex flex-col gap-6 mt-4">
        <Experience
          current
          title="Aerolab"
          image="/images/aerolab-logo.png"
          url="https://aerolab.us"
          technologies={[
            'TypeScript',
            'React',
            'Next.js',
            'Contentful',
            'Vercel',
            'Docker',
            'CSS in JS'
          ]}
        >
          Aerolab is a digital product agency helping startups and big companies
          deliver meaningful experiences to users all over the world. I'm
          currently working as a{' '}
          <span className="font-medium">Frontend Engineer</span>, where i work
          in excited projects .
        </Experience>

        <Experience
          title="Diseño Group"
          image="/images/dg-logo.png"
          time="1y"
          url="https://www.dgroupsa.com.ar"
          technologies={[
            'TypeScript',
            'React',
            'Next.js',
            'Firebase',
            'Vercel',
            'Tailwind'
          ]}
        >
          Diseño Group is a company that offers a marketing solutions. I worked
          as a <span className="font-medium">Tech Lead</span>, where i went
          responsible for the development of the company's web platform.
        </Experience>
      </div>
    </div>
  );
}
