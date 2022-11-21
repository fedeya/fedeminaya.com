import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Index() {
  return (
    <div className="bg-primary flex text-center text-alt flex-col gap-6 md:gap-10 px-2 items-center justify-center min-h-screen w-screen">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl text-alt font-serif">
          <span>Hi 👋🏾 i&apos;am </span>
          <span className="font-medium block md:inline-block">
            Federico Minaya{' '}
          </span>
        </h1>

        <h2 className="text-3xl font-medium font-serif">
          Full Stack Developer
        </h2>
      </div>

      <div className="text-3xl flex gap-4">
        👉🏾
        <a
          aria-label="Github"
          href="https://github.com/Fedeya"
          target="_blank"
          className="font-medium underline"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          aria-label="Twitter"
          href="https://linkedin.com/in/federico-minaya"
          target="_blank"
          className="font-medium underline"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          aria-label="Linkedin"
          href="https://twitter.com/fedeminaya"
          target="_blank"
          className="font-medium underline"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        👈🏾
      </div>
    </div>
  );
}
