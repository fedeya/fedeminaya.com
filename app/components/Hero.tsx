import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Hero() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl mb-2 from-black dark:from-white dark:to-gray-400 to-stone-500 bg-gradient-to-br bg-clip-text text-transparent">
          <span>Hi i&apos;m </span>
          <span className="font-semibold block md:inline-block">
            Federico Minaya{' '}
          </span>
        </h1>

        <h2 className="text-xl mb-4 font-medium from-black to-stone-500 dark:from-white dark:to-gray-400 bg-gradient-to-br bg-clip-text text-transparent">
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
          className="border-stone-500 dark:hover:bg-gray-800 dark:border-gray-500 flex hover:bg-gray-100 transition ease-in items-center gap-2 border py-2 px-3 shadow rounded-md"
          rel="noopener noreferrer"
        >
          <FaLinkedin />

          <span className="text-base font-medium">Linkedin</span>
        </a>

        <a
          aria-label="Twitter"
          href="https://twitter.com/fedeminaya"
          target="_blank"
          className="border-stone-500 dark:border-gray-500 dark:hover:bg-gray-800 flex hover:bg-gray-100 transition ease-in items-center gap-2 border py-2 px-3 shadow rounded-md"
          rel="noopener noreferrer"
        >
          <FaTwitter />

          <span className="text-base font-medium">Twitter</span>
        </a>

        <a
          aria-label="Github"
          href="https://github.com/fedeya"
          target="_blank"
          className="border-stone-500 dark:border-gray-500 flex hover:bg-gray-100 dark:hover:bg-gray-800 transition ease-in items-center gap-2 border py-2 px-3 shadow rounded-md"
          rel="noopener noreferrer"
        >
          <FaGithub />

          <span className="text-base font-medium">GitHub</span>
        </a>
      </div>
    </>
  );
}
