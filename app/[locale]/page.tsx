import { createIntl } from 'react-intl';
import { notFound } from 'next/navigation';
import Pricing from '@/emails/pricing';
import { resend } from '@/lib/resend';

const validLocales = ['en', 'pt'] as const;
type Locale = (typeof validLocales)[number];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!validLocales.includes(locale as Locale)) {
    notFound();
  }

  const { formatMessage } = createIntl({
    messages:
      locale === 'pt'
        ? {
            'Submit in English': 'Enviar em Português',
          }
        : {
            'Submit in English': 'Submit in English',
          },
    locale,
  });

  return (
    <form
      action={async () => {
        'use server';
        const response = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: ['delivered@resend.dev'],
          subject: 'Pricing discount',
          react: <Pricing locale={locale as Locale} />,
        });

        if (response.error) {
          throw new Error('Could not send email', {
            cause: response.error,
          });
        }

        console.info(response.data);
      }}
    >
      <button type="submit">
        {formatMessage({ id: 'Submit in English' })}
      </button>
    </form>
  );
}
