import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: '/blog',
        destination: '/',
        permanent: false,
      },
      {
        source: '/blog/:slug',
        destination: '/',
        permanent: false,
      },
    ];
  },
  rewrites: async () => {
    return [
      {
        source: '/cv',
        destination: '/cv.pdf',
      },
    ];
  },
};

export default nextConfig;
