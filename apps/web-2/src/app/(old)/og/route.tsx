import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const GET = async (req: Request) => {
  const url = new URL(req.url);

  const page = url.searchParams.get('page');

  const fontRegular = fetch(
    new URL('../../assets/fonts/JetBrainsMonoNL-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontBold = fetch(
    new URL('../../assets/fonts/JetBrainsMonoNL-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{ width: '100%', height: '100%', display: 'flex' }}
        tw="justify-center flex-col gap-10 bg-white items-center"
      >
        <h1 tw="text-7xl font-bold">Federico Minaya</h1>

        <div
          // style={{ borderWidth: 4, borderStyle: 'solid' }}
          tw="flex flex-col"
        >
          <h2 tw="text-4xl mb-2 font-normal text-purple-800">
            {page ?? 'Full Stack Developer'}
          </h2>

          <div tw="h-1 bg-purple-800"></div>
        </div>
      </div>
    ),
    {
      width: 1200,
      fonts: [
        {
          name: 'JetBrains Mono',
          data: await fontRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'JetBrains Mono',
          data: await fontBold,
          style: 'normal',
          weight: 700,
        },
      ],
      height: 630,
    }
  );
};
