import type { LoaderFunction } from '@remix-run/cloudflare';

export const loader: LoaderFunction = async () => {
  const { ImageResponse } = await import('@vercel/og');

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '1200px',
          height: '630px'
        }}
      >
        <h1>My Image</h1>
      </div>
    )
  );
};
