import { notFound } from 'next/navigation';
import { createIntl } from 'react-intl';
import { sendEmail } from '@/actions/send-email';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: 'pt' | 'en' | 'es' }>;
}) {
  const { locale } = await params;
  if (!['pt', 'en', 'es'].includes(locale)) {
    notFound();
  }

  const { formatMessage } = createIntl({
    locale,
    messages: await import(`../../messages/${locale}/home.json`),
  });

  return (
    <>
      <form
        action={async () => {
          'use server';
          await sendEmail(locale);
        }}
      >
        <button type="submit">{formatMessage({ id: 'submit' })}</button>
      </form>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a href="/en">
          {formatMessage({ id: 'switch-to-en' })}
        </a>
        <a href="/es">
          {formatMessage({ id: 'switch-to-es' })}
        </a>
        <a href="/pt">
          {formatMessage({ id: 'switch-to-pt' })}
        </a>
      </div>
    </>
  );
}
