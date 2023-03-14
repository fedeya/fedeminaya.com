import { createSitemapGenerator } from 'remix-sitemap';

export const { isSitemapUrl, sitemap } = createSitemapGenerator({
  siteUrl: 'https://fedeminaya.com',
  headers: {
    'Cache-Control': 'public, max-age=600, s-maxage=86400'
  }
});
