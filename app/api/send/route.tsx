import Pricing from '@/emails/pricing';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json() as {
    locale: 'pt' | 'en'
  };
  const response = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Pricing discount',
    react: <Pricing locale={body.locale}/>
  });

  return Response.json(response, {
    status: response.error ? 500 : 200,
  })
}
