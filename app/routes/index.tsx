import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Index() {
  return (
    <div className="bg-primary flex text-center text-alt flex-col gap-4 md:gap-10 px-2 items-center justify-center min-h-screen w-screen">
      <h1 className="text-5xl text-alt font-serif">
        <span>Hi 👋🏾 i'am </span>
        <span className="font-medium">Federico Minaya </span>
      </h1>

      <div className="text-3xl flex gap-4">
        👉🏾
        <a
          href="https://github.com/Fedeya"
          target="_blank"
          className="font-medium underline"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/federico-minaya"
          target="_blank"
          className="font-medium underline"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
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
