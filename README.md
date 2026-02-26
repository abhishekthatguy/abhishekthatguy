<div align="center">

  <!-- Banner: add your image at assets/readme-banner.png (e.g. 1200x320) -->
  <img src="./assets/readme-banner.png" alt="Abhishek Singh — Portfolio" width="100%" style="max-width: 900px; border-radius: 12px;" />

  <br />

  # **Abhishek Singh**

  ### AI Systems Engineer & Full-Stack Architect

  *Building intelligent automation, RAG, multi-agent systems & high-performance UIs*

  <br />

  <!-- Profile & repo -->
  [![GitHub](https://img.shields.io/badge/GitHub-abhishekthatguy-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/abhishekthatguy)
  [![Portfolio](https://img.shields.io/badge/Portfolio-Live-FF6B35?style=for-the-badge&logo=google-chrome&logoColor=white)](https://abhishekthatguy.in)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/abhishekthatguy)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

  <br />

  <!-- Stack: AI & backend -->
  [![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org)
  [![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io)
  [![Celery](https://img.shields.io/badge/Celery-46A346?style=for-the-badge&logo=celery&logoColor=white)](https://docs.celeryq.dev/)
  [![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com)

  <!-- Stack: Frontend & deploy -->
  [![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
  [![Jest](https://img.shields.io/badge/Jest-29-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)

</div>

---

## About

This repo is my **portfolio and brand site** — a performant, theme-aware single-page experience showcasing my work as an **AI Systems Engineer & Full-Stack Architect**. It highlights applied AI (multi-agent, RAG, LLM orchestration), backend systems (FastAPI, Celery, Redis, pgvector), and frontend architecture (Next.js, React, 90+ Lighthouse).

- **Live site:** [abhishekthatguy.in](https://abhishekthatguy.in)
- **More code:** [github.com/abhishekthatguy](https://github.com/abhishekthatguy) — this repo and other projects live on the same GitHub profile.

---

## Skills & Expertise

| Area | Focus |
|------|--------|
| **AI & automation** | Multi-agent systems, RAG, vector search (pgvector), prompt engineering, multi-LLM routing (Ollama, OpenAI, Gemini), Celery + Redis |
| **Backend** | FastAPI, PostgreSQL, pgvector, async Python, REST/GraphQL |
| **Frontend** | Next.js, React, TypeScript, performance (Core Web Vitals, 90+ Lighthouse), responsive UI |
| **DevOps & infra** | Docker, CI/CD, AWS, Vercel |

---

## Featured Projects

| Project | Description | Stack |
|---------|-------------|--------|
| **Zaytri** | Production AI automation platform — multi-agent orchestration, RAG (pgvector), Celery/Redis, multi-LLM routing | Next.js, FastAPI, Celery, Redis, PostgreSQL, pgvector, Ollama, OpenAI, Gemini |
| **Portfolio (this site)** | High-performance portfolio with theme-aware UI, contact webhook, Nodemailer fallback | Next.js 14, React, Tailwind, Framer Motion, Vercel |
| **Policy Advisor** | Insurance platform — Vue.js, GraphQL, 30–90% perf gains, 20+ broker channels | Vue, Vuex, Strapi, Ruby on Rails |
| **Accredo & Express Scripts** | Healthcare UI refactor — React, 85%+ test coverage, HIPAA, zero downtime | React, Jest, Context API, LaunchDarkly |

*Full project list and metrics are on the [live portfolio](https://abhishekthatguy.in#projects).*

---

## Repository

- **This codebase:** [github.com/abhishekthatguy/portfolio-2025](https://github.com/abhishekthatguy/portfolio-2025)
- **Other work:** [github.com/abhishekthatguy](https://github.com/abhishekthatguy) — all other repos (AI, full-stack, tools) are on the same GitHub profile.

---

## Architecture

Contact form flow (Portfolio → webhook → your backend):

```mermaid
flowchart LR
  subgraph Client
    A[Portfolio Form]
  end
  subgraph "This repo"
    B[POST to Webhook]
    C[Fallback: /api/send-mail]
  end
  subgraph "Your stack"
    D[n8n Webhook]
    E[Postgres]
    F[Email / WhatsApp / CRM]
  end
  A --> B
  B --> D
  D --> E
  D --> F
  B -.->|on failure| C
```

Tech and role at a glance:

```mermaid
mindmap
  root((Abhishek Singh))
    AI & Automation
      Multi-agent
      RAG & pgvector
      Multi-LLM routing
      Celery + Redis
    Backend
      FastAPI
      PostgreSQL
      Async Python
    Frontend
      Next.js
      React
      Performance
    DevOps
      Docker
      CI/CD
      AWS / Vercel
```

---

## Features

| Feature | Description |
|--------|-------------|
| **Animated UI** | Dual-tone headings, Framer Motion, dark/light theme |
| **Sections** | Hero, About, Achievements, Skills, Experience, Projects, Education, Contact |
| **Contact** | Form POSTs to n8n webhook; Nodemailer fallback if webhook fails |
| **Responsive** | Mobile-first, scales across devices |
| **Deploy** | Vercel one-command deploy, Git-triggered builds |
| **Tests** | Jest + React Testing Library |

---

## Quick Start

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

## Tech Stack (this repo)

| Layer | Technologies |
|-------|--------------|
| **Frontend** | Next.js 14, React 18, Tailwind CSS 3, Framer Motion 12, PostCSS |
| **Contact** | n8n webhook (URL in `.env`) → Postgres / Email / WhatsApp / CRM; fallback: Nodemailer |
| **Testing** | Jest 29, React Testing Library |
| **Lint** | ESLint, eslint-config-next |
| **Hosting** | Vercel |

---

## Environment Variables

Configure in `.env` (see [.env.example](./.env.example)). Do not commit `.env`.

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_WEBHOOK_URL` | n8n webhook URL; contact form POSTs here first |
| `MAIL_SERVER`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD` | SMTP for fallback when webhook fails (Nodemailer) |
| `RECIPIENT_EMAIL` | Inbox for fallback emails (defaults to `MAIL_USERNAME`) |

Flow details: [Architecture](./docs/ARCHITECTURE.md).

---

## Project Structure

```
├── assets/                 # README banner and static assets
│   └── readme-banner.png
├── docs/
│   └── ARCHITECTURE.md     # Contact flow (webhook → n8n → Postgres)
├── src/
│   ├── app/                # Next.js App Router (pages, layout)
│   ├── components/         # Hero, About, Skills, Projects, Contact, etc.
│   ├── data/               # projects, skills
│   ├── hooks/              # useTheme, useThemeStyles
│   ├── constants/          # techStack
│   └── styles/             # theme, animations
├── scripts/
├── vercel.json
└── package.json
```

---

## Documentation

| Guide | Description |
|-------|-------------|
| [Quick Start](./QUICK_START.md) | Get deployed in 15 minutes |
| [Vercel Deployment](./VERCEL_DEPLOYMENT_GUIDE.md) | Full setup and env vars |
| [Architecture](./docs/ARCHITECTURE.md) | Contact flow: Portfolio → Webhook (n8n) → Postgres → Email/WhatsApp/CRM |

---

## Links

- [Portfolio](https://abhishekthatguy.in)
- [GitHub profile](https://github.com/abhishekthatguy)
- [LinkedIn](https://linkedin.com/in/abhishekthatguy)
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)

---

<div align="center">

**© 2026 Abhishek Singh. All rights reserved.**

</div>
