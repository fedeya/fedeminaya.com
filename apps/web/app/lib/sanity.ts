import PicoSanity from 'picosanity';
import imageBuilder from '@sanity/image-url';

export const client = new PicoSanity({
  dataset: 'production',
  projectId: '50q1ng6a',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-01-01'
});

export const builder = imageBuilder(client);
