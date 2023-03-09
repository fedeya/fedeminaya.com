import { experienceSchema, skillCategorySchema } from '~/lib/schemas';
import { client } from '~/lib/sanity';
import * as queries from '~/lib/queries';
import { getExperiences } from '../lib/queries';

export class ApiService {
  // constructor(private kv: KVNamespace) {}

  async getSkillsCategories() {
    const skills = await client.fetch(queries.getSkillCategories);

    return skillCategorySchema.array().parse(skills);
  }

  async getExperiences() {
    const { format } = Intl.DateTimeFormat('en-US', {
      month: '2-digit',
      year: 'numeric'
    });

    const response = await client.fetch(getExperiences);

    const experiences = experienceSchema.array().parse(response);

    return experiences.map(experience => ({
      ...experience,
      start: format(new Date(experience.start)),
      end: experience.end ? format(new Date(experience.end)) : 'Present'
    }));
  }
}
