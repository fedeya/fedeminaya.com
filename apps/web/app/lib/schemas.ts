import { z } from 'zod';

export const SkillSchema = z.object({
  _id: z.string(),
  name: z.string(),
  includes: z.array(z.string()).nullable()
});

export type Skill = z.infer<typeof SkillSchema>;

export const SkillCategorySchema = z.object({
  _id: z.string(),
  name: z.string(),
  skills: z.array(SkillSchema)
});

export type SkillCategory = z.infer<typeof SkillCategorySchema>;

export const ExperienceSchema = z.object({
  _id: z.string(),
  name: z.string(),
  logo: z
    .object({
      asset: z.object({
        _ref: z.string()
      })
    })
    .optional()
    .nullable(),
  pageUrl: z.string(),
  description: z.string().nullable(),
  start: z.string(),
  end: z.string().nullable(),
  skills: z.array(
    z.object({
      _id: z.string(),
      name: z.string()
    })
  )
});

export type Experience = z.infer<typeof ExperienceSchema>;
