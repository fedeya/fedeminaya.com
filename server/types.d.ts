import type { Env } from './env';

declare module '@remix-run/server-runtime' {
  export interface AppLoadContext {
    env: Env;
  }
}
