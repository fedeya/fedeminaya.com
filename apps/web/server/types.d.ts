import type { ApiService } from '~/services/api';
import type { Env } from './env';

declare module '@remix-run/cloudflare' {
  export interface AppLoadContext {
    env: Env;
    services: {
      api: ApiService;
    };
  }
}
