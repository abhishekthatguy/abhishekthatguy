/**
 * Skills data — modernized with AI & Automation, Backend + DevOps, and trimmed low-value entries.
 */

export const skillsCategories = [
  {
    id: 'ai-automation',
    category: 'AI & Automation',
    emoji: '🤖',
    description: 'I build and integrate AI systems: multi-agent workflows, RAG pipelines, vector search, and LLM routing. I combine prompt engineering with robust async backends (Celery, Redis) to ship production-grade AI features.',
    subcategories: [
      {
        title: 'AI Systems',
        items: [
          { id: 'multi-agent-systems', name: 'Multi-Agent Systems' },
          { id: 'rag', name: 'RAG (Retrieval-Augmented Generation)' },
          { id: 'vector-search', name: 'Vector Search' },
          { id: 'prompt-engineering', name: 'Prompt Engineering' },
          { id: 'multi-llm-routing', name: 'Multi-LLM Routing' },
        ]
      },
      {
        title: 'Async & Task Queues',
        items: [
          { id: 'celery-redis', name: 'Celery + Redis' },
        ]
      },
    ]
  },
  {
    id: 'backend-devops',
    category: 'Backend + DevOps',
    emoji: '⚡',
    description: 'I design and operate scalable backends and deployment pipelines. FastAPI for APIs, PostgreSQL and pgvector for data and embeddings, with Docker, CI/CD, and AWS for reliable delivery.',
    subcategories: [
      {
        title: 'Backend',
        items: [
          { id: 'fastapi', name: 'FastAPI', highlight: true },
          { id: 'postgresql-pgvector', name: 'PostgreSQL + pgvector' },
        ]
      },
      {
        title: 'DevOps & Cloud',
        items: [
          { id: 'docker', name: 'Docker' },
          { id: 'cicd', name: 'CI/CD' },
          { id: 'aws', name: 'AWS' },
        ]
      },
    ]
  },
  {
    id: 'architecture-strategy',
    category: 'Architecture & Technical Strategy',
    emoji: '🏛️',
    description: 'I design scalable, resilient, and performant systems. My architectural approach focuses on creating future-proof solutions that are both robust and efficient, whether you need a free, open-source solution or a premium, enterprise-grade platform.',
    subcategories: [
      {
        title: 'Core Principles',
        items: [
          { id: 'system-design', name: 'System Design' },
          { id: 'ui-architecture', name: 'UI Architecture' },
          { id: 'microservices', name: 'Microservices' },
          { id: 'reusable-component-architecture', name: 'Reusable Component Architecture' },
        ]
      },
      {
        title: 'Performance & Quality',
        items: [
          { id: 'performance-optimization', name: 'Performance Optimization' },
          { id: 'core-web-vitals', name: 'Core Web Vitals' },
          { id: 'e2e-unit-testing', name: 'E2E & Unit Testing' },
        ]
      },
      {
        title: 'Testing Frameworks',
        items: [
          { id: 'jest', name: 'Jest' },
          { id: 'vitest', name: 'Vitest' },
          { id: 'react-testing-library', name: 'React Testing Library' },
        ]
      }
    ]
  },
  {
    id: 'frontend-fullstack',
    category: 'Frontend & Full-Stack',
    emoji: '💻',
    description: 'End-to-end development from pixel-perfect UIs to APIs and integrations. JavaScript/TypeScript, React, Next.js, Vue, and modern UI libraries, with GraphQL, REST, and serverless where it fits.',
    subcategories: [
      {
        title: 'Languages & Markup',
        items: [
          { id: 'javascript-es6', name: 'JavaScript (ES6+)' },
          { id: 'typescript', name: 'TypeScript' },
          { id: 'python', name: 'Python' },
          { id: 'html5', name: 'HTML5' },
          { id: 'css3', name: 'CSS3' },
        ]
      },
      {
        title: 'Frameworks',
        items: [
          { id: 'nextjs-ssr', name: 'Next.js (SSR)' },
          { id: 'reactjs', name: 'React.js' },
          { id: 'vuejs', name: 'Vue.js' },
          { id: 'angularjs', name: 'AngularJS' },
        ]
      },
      {
        title: 'UI Libraries',
        items: [
          { id: 'material-ui', name: 'Material UI' },
          { id: 'vuetify', name: 'Vuetify' },
          { id: 'ant-design', name: 'Ant Design' },
          { id: 'bulma', name: 'Bulma' },
        ]
      },
      {
        title: 'Backend & Data',
        items: [
          { id: 'nodejs', name: 'Node.js' },
          { id: 'graphql', name: 'GraphQL' },
          { id: 'postgresql', name: 'PostgreSQL' },
          { id: 'mongodb', name: 'MongoDB' },
          { id: 'rest-apis', name: 'REST APIs' },
          { id: 'serverless-functions', name: 'Serverless Functions' },
        ]
      },
      {
        title: 'Integrations',
        items: [
          { id: 'stripe', name: 'Stripe' },
          { id: 'razorpay', name: 'Razorpay' },
          { id: 'oauth', name: 'OAuth' },
          { id: 'jwt', name: 'JWT' },
          { id: 'google-tools', name: 'Google Tools (Analytics, GTM)' },
        ]
      }
    ]
  },
  {
    id: 'cms-content',
    category: 'CMS & Content',
    emoji: '📝',
    description: 'Headless CMS and content solutions for modern sites and apps: Strapi, Webflow, and markdown-based setups.',
    subcategories: [
      {
        title: 'Content & CMS',
        items: [
          { id: 'strapi', name: 'Strapi (Headless CMS)' },
          { id: 'webflow', name: 'Webflow' },
          { id: 'markdown-blog', name: 'Markdown Blog Setup' },
        ]
      },
    ]
  },
  {
    id: 'cloud-tooling',
    category: 'Cloud & Tooling',
    emoji: '🔧',
    description: 'Hosting, CDN, and developer tooling to keep applications fast, secure, and easy to deploy.',
    subcategories: [
      {
        title: 'Hosting & CDN',
        items: [
          { id: 'vercel', name: 'Vercel' },
          { id: 'render', name: 'Render' },
          { id: 'nginx', name: 'Nginx' },
          { id: 'cloudflare', name: 'Cloudflare' },
        ]
      },
      {
        title: 'Version Control & CI',
        items: [
          { id: 'git', name: 'Git' },
          { id: 'github-actions', name: 'GitHub Actions' },
        ]
      },
    ]
  },
  {
    id: 'product-management',
    category: 'Product & Project Management (MBA-Enhanced)',
    emoji: '📊',
    description: 'My technical skills are amplified by my MBA in Production & Operations. I lead projects with a strategic mindset, focusing on efficiency, stakeholder alignment, and delivering business value.',
    subcategories: [
      {
        title: 'Methodologies',
        items: [
          { id: 'agile-scrum', name: 'Agile/Scrum' },
        ]
      },
      {
        title: 'Strategic Competencies',
        items: [
          { id: 'strategic-management', name: 'Strategic Management' },
          { id: 'operations-strategy', name: 'Operations Strategy' },
          { id: 'lean-sigma', name: 'Lean Sigma' },
        ]
      },
      {
        title: 'Execution & Planning',
        items: [
          { id: 'project-management', name: 'Project Management' },
          { id: 'stakeholder-management', name: 'Stakeholder Management (CTO, COO)' },
        ]
      },
      {
        title: 'Tools',
        items: [
          { id: 'jira', name: 'Jira' },
          { id: 'confluence', name: 'Confluence' },
          { id: 'figma', name: 'Figma' },
          { id: 'notion', name: 'Notion' },
          { id: 'slack', name: 'Slack' },
          { id: 'teams', name: 'Teams' },
          { id: 'google-microsoft-tools', name: 'Google and Microsoft Tools' },
        ]
      }
    ]
  },
];

// Helper function to get all skills as flat array with category info
export function getAllSkills() {
  const allSkills = [];
  skillsCategories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      subcategory.items.forEach(item => {
        allSkills.push({
          ...item,
          categoryId: category.id,
          categoryName: category.category,
          subcategoryName: subcategory.title,
        });
      });
    });
  });
  return allSkills;
}

// Helper function to get skill by ID
export function getSkillById(id) {
  const allSkills = getAllSkills();
  return allSkills.find(skill => skill.id === id);
}

// Helper function to get category by ID
export function getCategoryById(id) {
  return skillsCategories.find(category => category.id === id);
}
