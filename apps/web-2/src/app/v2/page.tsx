import Link from 'next/link';

export default function V2Home() {
  return (
    <div className="h-screen min-h-screen text-white px-8 py-6 bg-[#383838]">
      <div className="overlay"></div>
      <div className="scanline"></div>

      <div className="bg-black mb-[200px] mx-auto relative w-[400px] h-[400px]">
        <div className="absolute rounded-md -right-[200px] -bottom-[100px] p-4 w-[400px] bg-stone-600 h-[200px]">
          <div className="size-5 rotate-45 z-0 pb-4 bg-stone-600 absolute -top-2 left-1"></div>

          <p className="text-xl relative">
            Hello, I'm Fefai. I'm a Full Stack Developer based in Buenos Aires,
          </p>
        </div>
      </div>

      <div className="flex mx-auto items-center justify-center flex-wrap gap-8">
        <Link href="/projects" className="p-2 bg-stone-600 text-lg">
          View Projects
        </Link>

        <Link href="/about" className="p-2 bg-stone-600 text-lg">
          About Me
        </Link>
        <Link href="/cv" className="p-2 bg-stone-600 text-lg">
          Curriculum Vitae
        </Link>
      </div>
    </div>
  );
}
