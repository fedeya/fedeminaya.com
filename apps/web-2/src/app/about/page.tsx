import { Metadata } from 'next';
import { FC } from 'react';

type ExperienceProps = {
  company: string;
  role: string;
  period: string;
  children: React.ReactNode;
};

const Experience: FC<ExperienceProps> = ({
  company,
  children,
  role,
  period,
}) => {
  return (
    <div>
      <div className="mb-2">
        <h3 className="text-xl inline font-semibold text-purple-800 font-mono">
          {company}
        </h3>

        <p className="inline ml-2">({period})</p>
      </div>

      <p className="mb-4 text-lg">{role}</p>

      {children}
    </div>
  );
};

export const metadata: Metadata = {
  title: 'About me',
  description: 'Software Engineer based in Buenos Aires, Argentina',
  alternates: {
    canonical: 'https://fedeminaya.com/about',
  },
  openGraph: {
    images: [
      {
        type: 'image/jpeg',
        url: 'https://fedeminaya.com/og?page=About',
      },
    ],
  },
};

export default function About() {
  return (
    <div>
      <section id="about" className="space-y-6 border-b border-gray-200 pb-8">
        <h1 className="text-2xl font-bold font-mono">About me</h1>

        <p className="text-lg">
          I'm a Software Engineer passionate about building scalable solutions that make a real impact. Currently, I'm working at Profound, where I help brands improve their positioning and visibility within AI chats.
        </p>

        <h2 className="text-xl font-semibold font-mono">
          My expertise lies in:
        </h2>

        <ul className="text-lg font-medium list-disc px-8">
          <li>Building performant web applications</li>
          <li>Developing cross-platform mobile solutions</li>
          <li>Architecting serverless infrastructures</li>
          <li>Creating developer tools used by hundreds of projects</li>
        </ul>
        <p className="text-lg">
          Currently focused on scaling digital products and contributing to the
          open-source community, where my tools help thousands of developers
          worldwide.
        </p>
      </section>

      <section className="py-8" id="experience">
        <h2 className="text-2xl mb-6 font-bold font-mono">Experience</h2>

        <div className="space-y-8">
          <Experience
            company="Profound"
            role="Software Engineer"
            period="2025 - Present"
          >
            <p>
              WIP
            </p>
          </Experience>

          <Experience
            company="Aerolab"
            role="Technical Lead"
            period="2022 - 2025"
          >
            <ul className="list-disc space-y-2 px-4">
              <li>
                <span className="font-medium">Cocos Capital</span>: Redesigned
                the Cocos Capital website with eye-candy animations using
                Next.js and Sanity.
              </li>

              <li>
                <span className="font-medium">Solid Starts</span>: Built mobile
                app and serverless backend for 2.5 million users with React
                Native and AWS.
              </li>

              <li>
                <span className="font-medium">Renxo</span>: Developed a video
                streaming platform for web and mobile using Next.js and React
                Native
              </li>

              <li>
                <span className="font-medium">Blinktrip</span>: Created an
                internal CRM using Next.js and DynamoDB.
              </li>
            </ul>
          </Experience>

          <Experience
            company="Diseño Group"
            role="Technical Lead on the main marketing product"
            period="2021 - 2022"
          >
            <ul className="list-disc space-y-2 px-4">
              <li>
                Developed a mobile app for report submissions using React Native
              </li>

              <li>Built an internal CRM and client dashboard with Next.js</li>

              <li>Designed and implemented the backend using Nest.js.</li>
            </ul>
          </Experience>

          <Experience
            company="Freelance"
            role="Software Engineer"
            period="2010 - 2022"
          >
            <ul className="list-disc space-y-2 px-4">
              <li>
                <span className="font-medium">Nerdearla</span>: Automated system
                for generating thumbnails for the conference, using Next.js,
                Puppeteer and Sanity
              </li>

              <li>
                <span className="font-medium">Multiple projects</span>:
                Developed mobile apps for service marketplaces and social media
                platforms.
              </li>
            </ul>
          </Experience>
        </div>
      </section>
    </div>
  );
}
