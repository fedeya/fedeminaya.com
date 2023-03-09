import { generateRobotsTxt } from '@balavishnuvj/remix-seo';

export const loader = () =>
  generateRobotsTxt([
    {
      type: 'sitemap',
      value: 'https://fedeminaya.com/sitemap.xml'
    }
  ]);
