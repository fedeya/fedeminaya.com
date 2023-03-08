import { FaStar } from 'react-icons/fa';

export default function SkillsSection() {
  return (
    <div className="pt-10">
      <h3 className="text-2xl font-semibold">Skills</h3>

      <div className="pt-2 grid gap-4 sm:gap-2 grid-cols-1 sm:grid-cols-3">
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
