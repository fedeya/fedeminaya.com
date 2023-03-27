import type { Env } from './env';
import type { ApiService } from '~/services/api';
import type { EmailService } from '~/services/email';

declare module '@remix-run/cloudflare' {
  export interface AppLoadContext {
    env: Env;
    services: {
      api: ApiService;
      email: EmailService;
    };
  }
}
