<div align="center">

  <img src="./public/about_profile.png" alt="Abhishek Singh" width="280" style="max-width: 90%; border-radius: 50%; object-fit: cover; border: 4px solid rgba(255,255,255,0.2);" />

  <br />

  # Abhishek Singh

  ## Applied AI Engineer | Multi-Agent Systems | AI Automation Architect

  I build production-grade AI systems that orchestrate multi-agent workflows, RAG pipelines, and cost-optimized LLM infrastructure.

  🚀 **Zaytri** – a live AI automation platform using multi-agent orchestration, async task queues, vector search, and dynamic LLM routing.

  <br />

  [![GitHub](https://img.shields.io/badge/GitHub-abhishekthatguy-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/abhishekthatguy)
  [![Portfolio](https://img.shields.io/badge/Portfolio-Live-FF6B35?style=for-the-badge&logo=google-chrome&logoColor=white)](https://abhishekthatguy.in)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/abhishekthatguy)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)
  ![Profile Views](https://komarev.com/ghpvc/?username=abhishekthatguy&color=FF6B35&style=for-the-badge&label=Profile+Views)
  [![Followers](https://img.shields.io/github/followers/abhishekthatguy?style=for-the-badge&color=FF6B35&label=Followers)](https://github.com/abhishekthatguy?tab=followers)

</div>

---

## 🚀 Featured Project: Zaytri (Live AI Automation Platform)

**Architecture Highlights:**

- Master Agent Orchestrator (18+ intent actions)
- Multi-Agent Pipeline (Content, Review, Hashtag, Image, Engagement)
- Celery + Redis async task system
- Brand-aware RAG using PostgreSQL + pgvector
- Multi-LLM Router (Ollama, OpenAI, Gemini, Anthropic)
- Local-first inference for API cost optimization
- Observability dashboard & agent health tracking

🔗 **Live Demo:** [abhishekthatguy.in](https://abhishekthatguy.in)  
📄 Architecture Diagram Below

---

## 📐 Architecture Diagram

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

## 📈 Impact

- Orchestrated 18+ agent workflows in production AI system
- Achieved 90+ Lighthouse performance across major web platforms
- Reduced AI API costs using hybrid local inference architecture
- Led frontend migrations (Vue 2 → Vue 3)

---

## 🧠 Skills

### 🧠 AI & Automation

Multi-Agent Systems • RAG • Vector Search (pgvector) • Prompt Engineering • LLM Routing • Async AI Pipelines

### ⚙️ Backend Systems

FastAPI • Celery • Redis • PostgreSQL • JWT • GraphQL

### 🎨 Frontend Architecture

Next.js • React • Vue • Performance Optimization (90+ Lighthouse)

### 🚀 DevOps & Infra

Docker • CI/CD • Vercel • AWS • Nginx

---

## 📂 Other Projects

| Project | Description | Stack |
|---------|-------------|--------|
| **Portfolio (this site)** | High-performance portfolio with theme-aware UI, contact webhook, Nodemailer fallback | Next.js 14, React, Tailwind, Framer Motion, Vercel |
| **Policy Advisor** | Insurance platform — Vue.js, GraphQL, 30–90% perf gains, 20+ broker channels | Vue, Vuex, Strapi, Ruby on Rails |
| **Accredo & Express Scripts** | Healthcare UI refactor — React, 85%+ test coverage, HIPAA, zero downtime | React, Jest, Context API, LaunchDarkly |

*Full project list and metrics:* [abhishekthatguy.in#projects](https://abhishekthatguy.in#projects)

---

## 📌 Featured Repositories

<div align="center">
  <a href="https://github.com/abhishekthatguy/zaytri">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=abhishekthatguy&repo=zaytri&hide_border=true" alt="Zaytri" />
  </a>
  <a href="https://github.com/abhishekthatguy/luxflow-ai">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=abhishekthatguy&repo=luxflow-ai&hide_border=true" alt="LexFlow AI" />
  </a>
  <a href="https://github.com/abhishekthatguy/clawtbot">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=abhishekthatguy&repo=clawtbot&hide_border=true" alt="ClawtBot" />
  </a>
  <a href="https://github.com/abhishekthatguy/abhishekthatguy">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=abhishekthatguy&repo=abhishekthatguy&hide_border=true" alt="Portfolio Site" />
  </a>
</div>

---

## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=abhishekthatguy&show_icons=true&hide_border=true" alt="Abhishek's GitHub stats" height="165" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=abhishekthatguy&layout=compact&hide_border=true" alt="Top Languages" height="165" />
  <br />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=abhishekthatguy&hide_border=true" alt="GitHub Streak" />
</div>

---

## 🐍 Contribution Snake

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/abhishekthatguy/abhishekthatguy/output/github-contribution-grid-snake-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/abhishekthatguy/abhishekthatguy/output/github-contribution-grid-snake.svg" />
    <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/abhishekthatguy/abhishekthatguy/output/github-contribution-grid-snake.svg" />
  </picture>
</div>

---

## 🔬 Currently Exploring

- Autonomous agent collaboration patterns
- Tool-based reasoning frameworks
- AI observability & evaluation systems
- Production LLM reliability engineering

---

## 💼 Open To

- **Applied AI Engineer** roles  
- **AI Automation Architect**  
- **AI Systems Engineer** (Product Teams)

---

## 📬 Contact

- **Portfolio:** [abhishekthatguy.in](https://abhishekthatguy.in)
- **GitHub:** [github.com/abhishekthatguy](https://github.com/abhishekthatguy)
- **LinkedIn:** [linkedin.com/in/abhishekthatguy](https://linkedin.com/in/abhishekthatguy)

---

## 📦 This Repo: Portfolio Site

This repository is the source for **[abhishekthatguy.in](https://abhishekthatguy.in)** — a performant, theme-aware portfolio built with Next.js.

### Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | Next.js 14, React 18, Tailwind CSS 3, Framer Motion 12, PostCSS |
| **Contact** | n8n webhook (URL in `.env`) → Postgres / Email / WhatsApp / CRM; fallback: Nodemailer |
| **Testing** | Jest 29, React Testing Library |
| **Lint** | ESLint, eslint-config-next |
| **Hosting** | Vercel |

### How to Start

**Requirements:** Node.js **20+** (LTS). Use `.nvmrc` / `.node-version` for nvm/fnm (`nvm use` or `fnm use`).

**Development**

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown).

**Build & run**

```bash
yarn build
yarn start
```

**Deploy to Vercel**

```bash
yarn deploy          # Automated (recommended)
yarn deploy:quick   # Quick prod deploy
yarn deploy:local   # Local Vercel preview
```

### Environment Variables

Configure in `.env` (see [.env.example](./.env.example)). Do not commit `.env`.

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_WEBHOOK_URL` | n8n webhook URL; contact form POSTs here first |
| `MAIL_SERVER`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD` | SMTP for Nodemailer fallback when webhook fails |
| `RECIPIENT_EMAIL` | Inbox for fallback emails (defaults to `MAIL_USERNAME`) |

### Project Structure

```
├── public/                 # Static assets (favicon, images)
├── docs/
│   └── ARCHITECTURE.md     # Contact flow (webhook → n8n → Postgres)
├── src/
│   ├── app/                # Next.js App Router (pages, layout)
│   ├── components/         # Hero, About, Skills, Projects, Contact, etc.
│   ├── data/               # projects, skills
│   ├── hooks/               # useTheme, useThemeStyles
│   ├── constants/          # techStack
│   └── styles/             # theme, animations
├── scripts/
├── vercel.json
└── package.json
```

### Documentation

| Guide | Description |
|-------|-------------|
| [Quick Start](./QUICK_START.md) | Get deployed in 15 minutes |
| [Vercel Deployment](./VERCEL_DEPLOYMENT_GUIDE.md) | Full setup and env vars |
| [Architecture](./docs/ARCHITECTURE.md) | Contact flow: Portfolio → Webhook (n8n) → Postgres → Email/WhatsApp/CRM |

---

<div align="center">

**© 2026 Abhishek Singh. All rights reserved.**

</div>
