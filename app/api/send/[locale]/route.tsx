import { Resend } from 'resend';
import Pricing from '@/emails/pricing';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(ctx: RouteContext<'/api/send/[locale]'>) {
  const { locale } = await ctx.params;
  const response = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Pricing discount',
    react: <Pricing locale={locale as 'pt' | 'en'} />,
  });

  return Response.json(response, {
    status: response.error ? 500 : 200,
  });
}
