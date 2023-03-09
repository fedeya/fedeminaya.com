import { ExperienceSchema, SkillCategorySchema } from '~/lib/schemas';
import { client } from '~/lib/sanity';
import * as queries from '~/lib/queries.server';

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
