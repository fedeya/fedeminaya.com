import { Link } from '@remix-run/react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import OSSProjectCard from '~/components/OSSProjectCard';

export default function Index() {
  return (
    <div className="font-sans mx-auto sm:px-10 py-2 px-4 max-w-4xl">
      <header className="mb-4">
        <nav className="flex justify-between items-center py-2">
          <ul className="flex items-center gap-2">
            <li>
              <Link to="/#about" className="underline">
                About
              </Link>
            </li>

            <li>
              <Link to="/#oss" className="underline">
                OSS
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="https://github.com/sponsors/fedeya"
              target="_blank"
              className="rounded-md flex items-center gap-2 text-xs border-stone-500 p-2 shadow border"
            >
              <FaHeart />
              <span>Sponsor</span>
            </Link>
          </div>
        </nav>
      </header>

      <div className="mb-8">
        <h1 className="text-3xl mb-2 from-black to-stone-500 bg-gradient-to-br bg-clip-text text-transparent">
          <span>Hi i&apos;m </span>
          <span className="font-semibold block md:inline-block">
            Federico Minaya{' '}
          </span>
        </h1>

        <h2 className="text-xl mb-4 font-medium from-black to-stone-500 bg-gradient-to-br bg-clip-text text-transparent">
          Web Developer at Aerolab
        </h2>

        <p>
          On this site, you'll find information about me, my work, and past and
          current projects.
          <br />
          <span className="font-medium">Thanks you for visiting!</span>
        </p>
      </div>

      <div className="text-xl flex-wrap flex gap-4">
        <a
          aria-label="Linkedin"
          href="https://linkedin.com/in/federico-minaya"
          target="_blank"
          className="border-stone-500 flex items-center gap-2 border py-2 px-3 shadow rounded-md"
          rel="noopener noreferrer"
        >
          <FaLinkedin />

          <span className="text-base font-medium">Linkedin</span>
        </a>

        <a
          aria-label="Twitter"
          href="https://twitter.com/fedeminaya"
          target="_blank"
          className="border-stone-500 flex hover:bg-gray-100 transition ease-in items-center gap-2 border py-2 px-3 shadow rounded-md"
          rel="noopener noreferrer"
        >
          <FaTwitter />

          <span className="text-base font-medium">Twitter</span>
        </a>

        <a
          aria-label="Github"
          href="https://github.com/fedeya"
          target="_blank"
          className="border-stone-500 flex items-center gap-2 border py-2 px-3 shadow rounded-md"
          rel="noopener noreferrer"
        >
          <FaGithub />

          <span className="text-base font-medium">GitHub</span>
        </a>
      </div>

      <div className="mt-20" id="about">
        <div className="flex gap-1 items-center">
          <span className="text-2xl">~</span>
          <h2 className="text-3xl font-semibold">About Me</h2>
        </div>

        <p className="mt-4 flex gap-2 flex-col">
          <span className="block">
            Welcome to my personal website! My name is Fede, a{' '}
            <span className="font-medium">
              Semi Senior Web Developer at Aerolab
            </span>{' '}
            who is passionate about web perfomance and new technologies.
          </span>
          <span className="block">
            I enjoy trying new things, gaming and helping other people, and I'm
            always looking for new ways to learn and grow personally and
            professionally.
          </span>
        </p>
      </div>

      <div className="mt-14" id="oss">
        <div className="flex gap-1 items-center">
          <span className="text-2xl">~</span>
          <h2 className="text-3xl font-semibold">OSS</h2>
        </div>
        <p className="mt-2 text-left font-medium">
          Here is the list of my most important open source projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <OSSProjectCard
            link="https://github.com/fedeya/next-auth-sanity"
            title="Next Auth Sanity"
            description="NextAuth Adapter and Provider for Sanity"
            metrics="8k+ downloads and used in 250+ projects"
          />

          <OSSProjectCard
            link="https://github.com/fedeya/next-sanity-client"
            title="Next Sanity Client"
            description="Sanity Client for Next.js Apps with App Dir Support"
            metrics="600+ downloads and used in 3+ projects"
          />
        </div>

        <div className="mt-6 flex gap-2 text-center xs:text-left flex-col xs:flex-row items-center">
          <p>One of my projects was helpful?</p>

          <Link
            to="https://github.com/sponsors/fedeya"
            target="_blank"
            className="rounded-md w-fit flex items-center gap-2 text-xs border-stone-500 p-2 shadow border"
          >
            <FaHeart />
            <span>Sponsor Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
