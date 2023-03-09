import type { AppLoadContext } from '@remix-run/cloudflare';

import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';
import * as build from '@remix-run/dev/server-build';
import { ApiService } from '~/services/ApiService';

import { envSchema } from './env';

const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext(context): AppLoadContext {
    const env = envSchema.parse(context.env);

    const services = {
      api: new ApiService()
    };

    return {
      env,
      services
    };
  }
});

export function onRequest(context: EventContext<any, any, any>) {
  return handleRequest(context);
}
