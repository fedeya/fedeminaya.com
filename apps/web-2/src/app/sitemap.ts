import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = 'https://fedeminaya.com';

  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${domain}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${domain}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
