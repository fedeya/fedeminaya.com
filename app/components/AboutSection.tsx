import { FaStar } from 'react-icons/fa';

function Skills() {
  return (
    <div className="pt-10">
      <h3 className="text-2xl font-semibold">Skills</h3>

      <div className="pt-2 grid gap-2 grid-cols-1 sm:grid-cols-3">
        <div className="text-left">
          <div className="flex gap-1 items-center">
            <h4 className="text-lg font-semibold">Frontend</h4>
            <FaStar aria-label="Most Specialized" />
          </div>

          <ul className="flex flex-col gap-1 mt-2">
            <li>
              <span className="font-medium">JavaScript/TypeScript</span>
            </li>
            <li>
              <span className="font-medium">React Native</span>
            </li>
            <li>
              <span className="font-medium">React</span> (Next.js, Gatsby,
              Remix)
            </li>
            <li>
              <span className="font-medium">CSS in JS</span> (Stitches, Emotion)
            </li>
            <li>
              <span className="font-medium">Tailwind</span>
            </li>
          </ul>
        </div>

        <div className="sm:text-center">
          <p className="text-lg font-semibold">Backend</p>

          <ul className="flex flex-col sm:justify-center sm:items-center mt-2 gap-1">
            <li>
              <span className="font-medium">Node.js</span>
            </li>
            <li>
              <span className="font-medium">Nest.js</span>
            </li>
            <li>
              <span className="font-medium">SQL/NoSQL</span>
            </li>
            <li>
              <span className="font-medium">GraphQL</span>
            </li>
          </ul>
        </div>

        <div className="sm:text-right">
          <p className="text-lg font-semibold">Other</p>

          <ul className="flex flex-col mt-2 gap-1">
            <li>
              <span className="font-medium">Docker</span>
            </li>
            <li>
              <span className="font-medium">Vercel</span>
            </li>
            <li>
              <span className="font-medium">AWS</span>
            </li>
            <li>
              <span className="font-medium">CI</span> (Gitlab, Github)
            </li>
            <li>
              <span className="font-medium">CMS</span> (Sanity, Contentful)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <div className="pt-8 mt-6" id="about">
      <div className="flex gap-1 items-center">
        <span className="text-2xl">~</span>
        <h2 className="text-3xl font-semibold">About Me</h2>
      </div>

      <p className="mt-4 flex gap-2 flex-col">
        <span className="block">
          Welcome to my personal website! My name is Fede, a{' '}
          <span className="font-medium">Web Developer at Aerolab</span> who is
          passionate about web perfomance and new technologies.
        </span>
        <span className="block">
          I enjoy trying new things, gaming and helping other people, and I'm
          always looking for new ways to learn and grow personally and
          professionally.
        </span>
      </p>

      <Skills />
    </div>
  );
}
