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
    const experiences = await client.fetch(getExperiences);

    return experienceSchema.array().parse(experiences);
  }
}
