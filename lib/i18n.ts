export const validLocales = ['en', 'pt'] as const;
export type Locale = (typeof validLocales)[number];

export const messagesPerLocale: Record<Locale, Record<string, string>> = {
  pt: {
    'Submit in English': 'Enviar em Português',
    'Go to other translation': 'Ir para outra tradução',
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
  },
  en: {
    'Submit in English': 'Submit in English',
    'Go to other translation': 'Go to other translation',
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
  },
};
