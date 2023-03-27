import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  EMAIL_SERVICE_ID: z.string(),
  EMAIL_PUBLIC_KEY: z.string(),
  EMAIL_PRIVATE_KEY: z.string(),
  EMAIL_CONTACT_TEMPLATE_ID: z.string()
});

export type Env = z.infer<typeof envSchema>;
