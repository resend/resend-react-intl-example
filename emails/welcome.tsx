import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { createIntl } from 'react-intl';

interface WelcomeProps {
  locale: 'pt' | 'es' | 'en';
  name: string;
}

export default async function WelcomeEmail({ locale, name }: WelcomeProps) {
  const { formatMessage } = createIntl({
    locale,
    messages: await import(`../messages/${locale}/welcome-email.json`),
  });

  return (
    <Html>
      <Head />
      <Preview>{formatMessage({ id: 'header' })}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto py-10 px-5">
            <Section className="bg-white rounded-lg p-8">
              <Heading className="text-2xl font-bold text-gray-900 m-0 mb-6">
                {formatMessage({ id: 'header' })}
              </Heading>
              <Text className="text-base leading-6 text-gray-600 m-0 mb-4">
                {formatMessage({ id: 'hi' })} {name}
              </Text>
              <Text className="text-base leading-6 text-gray-600 m-0 mb-4">
                {formatMessage({ id: 'thanks' })}
              </Text>
              <Button
                href="https://example.com/dashboard"
                className="bg-indigo-600 rounded-md text-white text-base font-semibold no-underline text-center block py-3 px-6 my-6"
              >
                {formatMessage({ id: 'get-started' })}
              </Button>
              <Hr className="border-gray-200 my-6" />
              <Text className="text-sm text-gray-400 m-0">
                {formatMessage({ id: 'questions' })}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

WelcomeEmail.PreviewProps = {
  locale: 'en',
  name: 'John Lennon',
};
