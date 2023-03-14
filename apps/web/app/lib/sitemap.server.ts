import { createSitemapGenerator } from 'remix-sitemap';

export const { isSitemapUrl, sitemap } = createSitemapGenerator({
  siteUrl: 'https://fedeminaya.com'
});
