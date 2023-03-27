import type { ActionArgs } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { ContactSchema } from '~/lib/schemas';

export const action = async ({ request, context }: ActionArgs) => {
  const formData = Object.fromEntries(await request.formData());

  const data = ContactSchema.parse(formData);

  try {
    await context.services.email.contact(data);

    return json({
      ok: true
    });
  } catch {
    return json({
      ok: false
    });
  }
};
