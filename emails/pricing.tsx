import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { createIntl } from 'react-intl';

interface PricingProps {
  locale: 'pt' | 'en';
}

const enMessages = {
  'Exclusive Offer Just For You: Unlock Premium Features at $12/month':
    'Exclusive Offer Just For You: Unlock Premium Features at $12/month',
  'Exclusive Offer': 'Exclusive Offer',
  '/ month': '/ month',
  "We've handcrafted the perfect plan tailored specifically for your needs. Unlock premium features at an unbeatable value.":
    "We've handcrafted the perfect plan tailored specifically for your needs. Unlock premium features at an unbeatable value.",
  'Manage up to 25 premium products': 'Manage up to 25 premium products',
  'Grow your audience with 10,000 subscribers':
    'Grow your audience with 10,000 subscribers',
  'Make data-driven decisions with advanced analytics':
    'Make data-driven decisions with advanced analytics',
  'Priority support with 24-hour response time':
    'Priority support with 24-hour response time',
  'Seamless integration with your favorite tools':
    'Seamless integration with your favorite tools',
  'Claim Your Special Offer': 'Claim Your Special Offer',
  'Limited time offer - Upgrade now and save 20%':
    'Limited time offer - Upgrade now and save 20%',
  'No credit card required. 14-day free trial available.':
    'No credit card required. 14-day free trial available.',
};

const ptMessages = {
  'Exclusive Offer Just For You: Unlock Premium Features at $12/month':
    'Oferta Exclusiva Só Para Você: Desbloqueie Funcionalidades com $12/mês',
  'Exclusive Offer': 'Oferta Exclusiva',
  '/ month': '/ mês',
  "We've handcrafted the perfect plan tailored specifically for your needs. Unlock premium features at an unbeatable value.":
    'Criamos o plano perfeito especialmente adaptado às suas necessidades. Desbloqueie recursos premium com um valor imbatível.',
  'Manage up to 25 premium products': 'Gerencie até 25 produtos premium',
  'Grow your audience with 10,000 subscribers':
    'Aumente seu público com 10.000 assinantes',
  'Make data-driven decisions with advanced analytics':
    'Tome decisões baseadas em dados com análises avançadas',
  'Priority support with 24-hour response time':
    'Suporte prioritário com tempo de resposta de 24 horas',
  'Seamless integration with your favorite tools':
    'Integração perfeita com suas ferramentas favoritas',
  'Claim Your Special Offer': 'Reivindique Sua Oferta Especial',
  'Limited time offer - Upgrade now and save 20%':
    'Oferta por tempo limitado - Atualize agora e economize 20%',
  'No credit card required. 14-day free trial available.':
    'Não é necessário cartão de crédito. Teste gratuito de 14 dias disponível.',
};

export function Pricing({ locale }: PricingProps) {
  const messages = locale === 'pt' ? ptMessages : enMessages;
  const { formatMessage } = createIntl({
    locale,
    messages,
  });

  return (
    <Tailwind>
      <Html>
        <Head />
        <Body>
          <Preview>
            {formatMessage({
              id: 'Exclusive Offer Just For You: Unlock Premium Features at $12/month',
            })}
          </Preview>
          <Container className="bg-white rounded-[12px] mx-auto max-w-[500px] p-[24px]">
            <Section className="bg-white border border-solid border-gray-300 rounded-[12px] text-gray-600 p-[28px] w-full text-left mb-0">
              <Text className="text-indigo-600 text-[12px] leading-[20px] font-semibold tracking-wide mb-[16px] mt-[16px] uppercase">
                {formatMessage({ id: 'Exclusive Offer' })}
              </Text>
              <Text className="text-[30px] font-bold leading-[36px] mb-[12px] mt-0">
                <span className="text-[rgb(16,24,40)]">$12</span>{' '}
                <span className="text-[16px] font-medium leading-[20px]">
                  {formatMessage({ id: '/ month' })}
                </span>
              </Text>
              <Text className="text-gray-700 text-[14px] leading-[20px] mt-[16px] mb-[24px]">
                {formatMessage({
                  id: "We've handcrafted the perfect plan tailored specifically for your needs. Unlock premium features at an unbeatable value.",
                })}
              </Text>
              <ul className="text-gray-500 text-[14px] leading-[24px] mb-[32px] pl-[14px]">
                {[
                  'Manage up to 25 premium products',
                  'Grow your audience with 10,000 subscribers',
                  'Make data-driven decisions with advanced analytics',
                  'Priority support with 24-hour response time',
                  'Seamless integration with your favorite tools',
                ].map((feature) => (
                  <li key={feature} className="mb-[12px]">
                    {formatMessage({ id: feature })}
                  </li>
                ))}
              </ul>
              <Button
                href="#"
                className="bg-indigo-600 rounded-[8px] box-border text-white inline-block text-[16px] leading-[24px] font-bold tracking-wide mb-[24px] max-w-full p-[14px] text-center w-full"
              >
                {formatMessage({ id: 'Claim Your Special Offer' })}
              </Button>
              <Hr />
              <Text className="text-gray-500 text-[12px] leading-[16px] italic mt-[24px] mb-[6px] text-center">
                {formatMessage({
                  id: 'Limited time offer - Upgrade now and save 20%',
                })}
              </Text>
              <Text className="text-gray-500 text-[12px] m-0 leading-[16px] text-center">
                {formatMessage({
                  id: 'No credit card required. 14-day free trial available.',
                })}
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}

export default Pricing;

Pricing.PreviewProps = {
  locale: 'en',
} satisfies PricingProps;
