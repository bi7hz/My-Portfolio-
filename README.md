# Bilal Haider Portfolio

Bilal Haider's personal portfolio showcases his services, experience, technical skills, and selected web development work. It includes a responsive, animated interface and a contact form that sends inquiries through Resend.

## Live portfolio

[https://my-portfolio-fawn-kappa-16.vercel.app](https://my-portfolio-fawn-kappa-16.vercel.app)

## Technology

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Resend for contact-form email delivery

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Environment variables

Copy `.env.example` to `.env.local` and configure:

```bash
RESEND_API_KEY=
CONTACT_FROM_EMAIL=
```

`CONTACT_FROM_EMAIL` must be a sender address authorized by the configured Resend account in production.

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
