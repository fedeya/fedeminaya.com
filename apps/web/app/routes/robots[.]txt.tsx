import type { SitemapHandle } from 'remix-sitemap';
import { generateRobotsTxt } from '@balavishnuvj/remix-seo';

export const handle: SitemapHandle = {
  sitemap: {
    exclude: true
  }
};

export const loader = () =>
  generateRobotsTxt([
    {
      type: 'sitemap',
      value: 'https://fedeminaya.com/sitemap.xml'
    }
  ]);
