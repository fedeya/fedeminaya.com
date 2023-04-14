import type { ActionArgs } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { ContactSchema } from '~/lib/schemas';

export const action = async ({ request, context }: ActionArgs) => {
  const formData = Object.fromEntries(await request.formData());

  const data = ContactSchema.parse(formData);

  let ok = true;

  await context.services.email.contact(data).catch(() => {
    ok = false;
  });

  return json({ ok });
};
