import {
  ExperienceSchema,
  OssProjectSchema,
  SkillCategorySchema,
  BlogSchema
} from '~/lib/schemas';
import { client } from '~/lib/sanity';
import * as queries from '~/lib/queries.server';
import readingTime from 'reading-time';
import type { Locale } from '~/lib/locale';
import type { Cache } from '~/lib/cache';

export class ApiService {
  constructor(private cache: Cache) {}

  async getSkillsCategories() {
    const cached = await this.cache.get('skills');

    if (cached) return SkillCategorySchema.array().parse(cached);

    const skills = await SkillCategorySchema.array()
      .promise()
      .parse(client.fetch(queries.getSkillCategories));

    await this.cache.set('skills', JSON.stringify(skills), {
      expirationTtl: 60 * 60 * 24
    });

    return skills;
  }

  async getExperiences() {
    const experiences = await this.getCachedExperiences();

    const { format } = Intl.DateTimeFormat('en-US', {
      month: '2-digit',
      year: 'numeric'
    });

    return experiences.map(experience => ({
      ...experience,
      start: format(new Date(experience.start)),
      end: experience.end ? format(new Date(experience.end)) : 'Present'
    }));
  }

  async getOssProjects() {
    const cached = await this.cache.get('oss');

    if (cached) return OssProjectSchema.array().parse(cached);

    const oss = await OssProjectSchema.array()
      .promise()
      .parse(client.fetch(queries.getOssProjectsQuery));

    await this.cache.set('oss', JSON.stringify(oss), {
      expirationTtl: 60 * 60 * 24
    });

    return oss;
  }

  async getBlogs(locale: Locale) {
    const blogs = await this.getCachedBlogs(locale);

    return blogs.map(blog => ({
      ...blog,
      createdAt: new Date(blog.createdAt).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      readingTime: readingTime(blog.contentText).text
    }));
  }

  async getBlogBySlug(slug: string, locale: Locale) {
    const blog = await this.getCachedBlogBySlug(slug, locale);

    return {
      ...blog,
      createdAt: new Date(blog.createdAt).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      readingTime: readingTime(blog.contentText).text
    };
  }

  private async getCachedBlogs(locale: Locale) {
    const cacheKey = `blogs-${locale}`;

    const cached = await this.cache.get(cacheKey);

    if (cached) return BlogSchema.omit({ content: true }).array().parse(cached);

    const blogs = await BlogSchema.omit({ content: true })
      .array()
      .promise()
      .parse(client.fetch(queries.getBlogsQuery, { lang: locale }));

    await this.cache.set(cacheKey, JSON.stringify(blogs), {
      expirationTtl: 3600
    });

    return blogs;
  }

  private async getCachedBlogBySlug(slug: string, locale: Locale) {
    const cacheKey = `blog-${locale}-${slug}`;

    const cached = await this.cache.get(cacheKey);

    if (cached) return BlogSchema.parse(cached);

    const blog = await BlogSchema.promise().parse(
      client.fetch(queries.getBlogBySlugQuery, { slug, lang: locale })
    );

    await this.cache.set(cacheKey, JSON.stringify(blog), {
      expirationTtl: 60 * 60 * 24
    });

    return blog;
  }

  private async getCachedExperiences() {
    const cached = await this.cache.get('experiences');

    if (cached) return ExperienceSchema.array().parse(cached);

    const experiences = await ExperienceSchema.array()
      .promise()
      .parse(client.fetch(queries.getExperiences));

    await this.cache.set('experiences', JSON.stringify(experiences), {
      expirationTtl: 60 * 60 * 24
    });

    return experiences;
  }
}
