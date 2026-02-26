<div align="center">
  <img src="./assets/readme-banner.png" alt="Abhishek Singh - Portfolio" width="100%"/>
</div>

<br />

<div align="center">

# Abhishek Singh — Portfolio 2026

**Senior Frontend Architect & Full-Stack Developer**

A modern, animated portfolio and brand hub — Next.js frontend, n8n webhook, Postgres, and CRM.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Jest](https://img.shields.io/badge/Jest-29-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

</div>

---

## About

This repository is the **main portfolio and brand site** — a single-page experience with a dynamic Hero, project timeline, and contact form that posts to an n8n webhook (→ Postgres, Email/WhatsApp/CRM). Built for performance and SEO.

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| ⚡ **Animated UI** | Dual-tone headings, Framer Motion, dark/light theme |
| 🎨 **Timeline** | Snake-ladder layout for Experience & Selected Projects |
| 📧 **Contact** | Form POSTs to n8n webhook (→ Postgres, Email/WhatsApp/CRM) |
| 📱 **Responsive** | Mobile-first, wraps and scales by screen size |
| 🚀 **Deploy** | One-command Vercel deploy, Git-triggered builds |
| 🧪 **Tests** | Jest (frontend) |

---

## 🚀 Quick Start

### Development

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown).

### Build & run

```bash
yarn build
yarn start
```

### Deploy to Vercel

```bash
yarn deploy          # Automated (recommended)
yarn deploy:quick    # Quick prod deploy
yarn deploy:local    # Local Vercel preview
```

---

## 📚 Documentation

| Guide | Description |
|-------|-------------|
| [Quick Start](./QUICK_START.md) | Get deployed in 15 minutes |
| [Vercel Deployment](./VERCEL_DEPLOYMENT_GUIDE.md) | Full setup and env vars |
| [Architecture](./docs/ARCHITECTURE.md) | Contact flow: Portfolio → Webhook (n8n) → Postgres → Email/WhatsApp/CRM |

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | Next.js 14, React 18, Tailwind CSS 3, Framer Motion 12, PostCSS |
| **Contact** | n8n webhook (URL in `.env`) → your Postgres / Email / WhatsApp / CRM |
| **Testing** | Jest 29, React Testing Library |
| **Lint** | ESLint, eslint-config-next |
| **Hosting** | Vercel |

---

## 📦 Project Structure

```
├── assets/                 # README and static assets
│   └── readme-banner.png
├── docs/
│   └── ARCHITECTURE.md     # Contact flow (webhook → n8n)
├── src/
│   ├── app/                # Next.js App Router
│   ├── components/
│   └── data/
├── scripts/
├── vercel.json
└── package.json
```

---

## 🔧 Environment Variables

All URLs live in `.env` (see [.env.example](./.env.example)). Never commit `.env`.

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_WEBHOOK_URL` | n8n webhook URL; contact form POSTs here first |
| `MAIL_SERVER`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD` | SMTP for **fallback**: if webhook fails, we send you an email via Nodemailer |
| `RECIPIENT_EMAIL` | Inbox for fallback emails (defaults to `MAIL_USERNAME`) |

Flow: [Portfolio → Webhook (n8n) → …](./docs/ARCHITECTURE.md). If webhook fails, form falls back to `/api/send-mail` (Nodemailer).

---

## 📖 Links

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">

**© 2026 Abhishek Singh. All rights reserved.**

</div>
