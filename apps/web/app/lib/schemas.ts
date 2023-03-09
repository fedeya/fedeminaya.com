import { z } from 'zod';

export const skillSchema = z.object({
  _id: z.string(),
  name: z.string(),
  includes: z.array(z.string()).nullable()
});

export const skillCategorySchema = z.object({
  _id: z.string(),
  name: z.string(),
  skills: z.array(skillSchema)
});

export const experienceSchema = z.object({
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

export type Skill = z.infer<typeof skillSchema>;

export type SkillCategory = z.infer<typeof skillCategorySchema>;

export type Experience = z.infer<typeof experienceSchema>;
