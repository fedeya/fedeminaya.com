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
    </div>
  );
}
