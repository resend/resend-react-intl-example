# Resend and React Email with React Intl

This example shows how to use Resend and React Email with [React Intl](https://formatjs.github.io/docs/react-intl).

## Prerequisites

To get the most out of this guide, you’ll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## Instructions

1. Install dependencies

  ```sh
npm install
  ```

2. Run Next.js app locally:

  ```sh
npm run dev
  ```

3. Send email in English:

  ```sh
curl -X POST http://localhost:3000/api/send \
  -H "Content-Type: application/json" \
  -d '{"locale": "en"}'
  ```

4. Send email in Portuguese:

  ```sh
curl -X POST http://localhost:3000/api/send \
  -H "Content-Type: application/json" \
  -d '{"locale": "pt"}'
  ```

## License

MIT License
