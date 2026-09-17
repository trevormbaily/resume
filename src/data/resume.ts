export const profile = {
  name: 'Trevor Baily',
  location: 'Omaha, Nebraska',
  phone: '(402) 957-5167',
  email: 'tbaily24@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/trevor-baily24',
  linkedinLabel: 'linkedin.com/in/trevor-baily24',
  headline:
    'AI-native engineer shipping agentic development and production migrations. Cursor-driven full-stack rewrites, cloud agent environments, reusable skills and rules teammates use in production. Runs Grok Bot and multi-agent systems in production. Based in Omaha.',
  support:
    'React and Next.js through .NET BFFs to Java and Spring on Kubernetes. Migrated Classic ASP monolith to Next.js App Router using Cursor agents (OpenAPI contracts, behavior parity, stakeholder sync). Built cloud agent environments and skills/rules teammates adopted across company repos. Co-founded software consulting with HIPAA-aware healthcare delivery through beta and production. Contract-first APIs and test coverage that keep agent-assisted delivery reliable.',
}

export const skillGroups = [
  {
    label: 'Frontend',
    items: [
      'React 19',
      'Next.js App Router',
      'TypeScript',
      'Vite',
      'Tailwind',
      'Design systems',
    ],
  },
  {
    label: 'Backend',
    items: [
      '.NET BFFs',
      'Java / Kotlin / Spring Boot',
      'Elasticsearch',
      'OpenAPI contracts',
      'Stored proc to API migrations',
    ],
  },
  {
    label: 'Quality',
    items: [
      'Vitest / Jest',
      'Playwright',
      'Coverage gates',
      'Static analysis',
    ],
  },
  {
    label: 'Platform',
    items: [
      'Kubernetes ingress',
      'NGINX',
      'Cloudflare',
      'AWS',
      'GitHub Actions',
      'Octopus Deploy',
      'Dynatrace / structured logs',
    ],
  },
  {
    label: 'AI-assisted engineering / Personal agents',
    items: [
      'Cloud Agent Automations',
      'Cursor skills/rules',
      'MCP',
      'Agent workflows/loops',
      'Grok Bot / daily life agents',
      'Knowledge graphs/tag libraries',
    ],
  },
  {
    label: 'Product',
    items: [
      'Search and discovery',
      'A/B experiments',
      'Feature flags',
      'Marketplace UX',
    ],
  },
]

export type Role = {
  company: string
  location: string
  titles: { title: string; dates: string }[]
  bullets: string[]
}

export const roles: Role[] = [
  {
    company: 'Auction Technology Group (ATG)',
    location: 'Omaha, NE (remote)',
    titles: [
      { title: 'Senior Software Development Engineer', dates: 'Oct 2024 - Present' },
      { title: 'Software Development Engineer', dates: 'May 2022 - Oct 2024' },
    ],
    bullets: [
      'Migrated user-facing Classic ASP frontend (legacy monolith) to Next.js App Router + .NET BFF end-to-end using Cursor agents. Problem: brittle ASP with no contracts. Approach: OpenAPI-first contracts, behavior parity test suite, stakeholder sync cadence. Result: shipped migration with full parity and cleaner maintainability.',
      'Built cloud agent environments and reusable Cursor skills/rules for company repos. Teammates now use these skills and rules in their agent workflows across the organization.',
      'Run Grok Bot in production (multi-agent system proving agentic patterns in real-world use). Shipped Cloudflare AI workers.',
      'Own search and discovery: React/Next.js UI, .NET BFF, Java/Spring search services, Elasticsearch on Kubernetes. App Router migrations with behavior parity.',
      'Quality systems for AI-assisted development. Vitest-first testing, strategic Playwright coverage, minimum coverage gates.',
      'Earlier as SDE: shipped payments system ahead of schedule. Maintained Spring Boot microservices and legacy Java/ASP. Contributed components to TypeScript UI library.',
    ],
  },
  {
    company: 'Novi Capitis LLC',
    location: 'Omaha, NE',
    titles: [{ title: 'Co-Founder / Software Consultant', dates: '2023 - Present' }],
    bullets: [
      'Partner software consulting with Jordan Schall and Chris Giitter. Full lifecycle client work in HIPAA-aware healthcare and pharma tech.',
      'Led full-stack development for Karry Labs (pharma client) through beta delivery: pharmacy and prescription flows, patient portals, AWS-backed systems in regulated healthcare software environment.',
      'Complete business and product lifecycle experience. Discovery through production delivery, stakeholder cadence, shipping in regulated context.',
    ],
  },
  {
    company: 'Priority Technologies LLC',
    location: '',
    titles: [{ title: 'Senior Frontend Developer', dates: 'Jul 2017 - May 2022' }],
    bullets: [
      'Modernized the frontend of an enterprise monolith (1.5M+ LOC) with Vue.js, Vuetify, Tailwind, and Pinia. Clearer UX, and the pages actually loaded faster.',
      'Sole frontend engineer on a state-based product from requirements to production in under six months.',
      'Led Struts 1 to Struts 2 migration as both PM and lead developer with thin knowledge transfer. Rolled out to all clients on time and under budget.',
      'Moved dependency management from manual ANT builds to Maven, including security reviews and library upgrades.',
      'Built the consumer-facing web presence that helped grow exposure and support acquisition. Integrated JasperSoft and HighCharts for embedded reporting.',
    ],
  },
]

export const education = {
  school: 'University of Nebraska-Lincoln',
  dates: '2012 - 2016',
  degree: 'Bachelor of Business Administration (B.B.A.), Finance',
  note: 'Husker alum. Learned software the long way, mentors and a lot of practice, then made it my career.',
}
