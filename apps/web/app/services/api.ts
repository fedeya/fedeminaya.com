import {
  ExperienceSchema,
  OssProjectSchema,
  SkillCategorySchema,
  BlogSchema
} from '~/lib/schemas';
import { client } from '~/lib/sanity';
import * as queries from '~/lib/queries.server';
import readingTime from 'reading-time';

export class ApiService {
  constructor(private kv: KVNamespace) {}

  async getSkillsCategories() {
    const cached = await this.kv.get('skills', 'json');

    if (cached) return SkillCategorySchema.array().parse(cached);

    const skills = await SkillCategorySchema.array()
      .promise()
      .parse(client.fetch(queries.getSkillCategories));

    await this.kv.put('skills', JSON.stringify(skills), {
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
    const cached = await this.kv.get('oss', 'json');

    if (cached) return OssProjectSchema.array().parse(cached);

    const oss = await OssProjectSchema.array()
      .promise()
      .parse(client.fetch(queries.getOssProjectsQuery));

    await this.kv.put('oss', JSON.stringify(oss), {
      expirationTtl: 60 * 60 * 24
    });

    return oss;
  }

  async getBlogs() {
    const blogs = await this.getCachedBlogs();

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

  async getBlogBySlug(slug: string) {
    const blog = await this.getCachedBlogBySlug(slug);

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

  private async getCachedBlogs() {
    const cached = await this.kv.get('blogs', 'json');

    if (cached) return BlogSchema.omit({ content: true }).array().parse(cached);

    const blogs = await BlogSchema.omit({ content: true })
      .array()
      .promise()
      .parse(client.fetch(queries.getBlogsQuery));

    await this.kv.put('blogs', JSON.stringify(blogs), {
      expirationTtl: 3600
    });

    return blogs;
  }

  private async getCachedBlogBySlug(slug: string) {
    const cached = await this.kv.get(`blog-${slug}`, 'json');

    if (cached) return BlogSchema.parse(cached);

    const blog = await BlogSchema.promise().parse(
      client.fetch(queries.getBlogBySlugQuery, { slug })
    );

    await this.kv.put(`blog-${slug}`, JSON.stringify(blog), {
      expirationTtl: 60 * 60 * 24
    });

    return blog;
  }

  private async getCachedExperiences() {
    const cached = await this.kv.get('experiences', 'json');

    if (cached) return ExperienceSchema.array().parse(cached);

    const experiences = await ExperienceSchema.array()
      .promise()
      .parse(client.fetch(queries.getExperiences));

    await this.kv.put('experiences', JSON.stringify(experiences), {
      expirationTtl: 60 * 60 * 24
    });

    return experiences;
  }
}
