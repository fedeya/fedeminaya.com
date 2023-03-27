import type { Env } from '~/../server/env';
import type { Contact } from '~/lib/schemas';

export class EmailService {
  constructor(public env: Env) {}

  async send(templateId: string, params: Record<string, string>) {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.env.EMAIL_PUBLIC_KEY,
        accessToken: this.env.EMAIL_PRIVATE_KEY,
        service_id: this.env.EMAIL_SERVICE_ID,
        template_id: templateId,
        template_params: params
      })
    });

    if (!res.ok) throw new Error(res.statusText);

    const text = await res.text();

    return text;
  }

  async contact(data: Contact) {
    this.send(this.env.EMAIL_CONTACT_TEMPLATE_ID, data);
  }
}
