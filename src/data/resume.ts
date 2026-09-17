export const profile = {
  name: 'Trevor Baily',
  location: 'Omaha, Nebraska',
  phone: '(402) 957-5167',
  email: 'tbaily24@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/trevor-baily24',
  linkedinLabel: 'linkedin.com/in/trevor-baily24',
  headline:
    'Lead-ready AI-native engineer focused on agentic development and production migrations. Ships Cursor-driven full-stack rewrites, cloud agent environments, and reusable skills and rules. Runs multi-agent systems in daily production use. Based in Omaha.',
  support:
    'React and Next.js through .NET BFFs to Java and Spring on Kubernetes. Led Classic ASP to Next.js App Router migration with Cursor agent workflows. Built cloud agent environments and skills/rules for team adoption. Contract-first APIs and test coverage that keep agent-assisted delivery reliable.',
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
    label: 'AI-assisted engineering',
    items: [
      'Cloud Agent Automations',
      'Cursor skills/rules',
      'MCP',
      'Agent workflows/loops',
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
      'Migrated Classic ASP frontend to Next.js App Router with .NET BFF using Cursor agents. OpenAPI contracts, behavior parity testing, and regular stakeholder sync throughout.',
      'Built cloud agent environments for company repos. Created reusable Cursor skills and rules the team can adopt. I run multi-agent systems in production for personal tooling and have shipped Cloudflare AI workers.',
      'Own search and discovery: React/Next.js UI, .NET BFF, Java/Spring search services, and Elasticsearch on Kubernetes. App Router migrations with full behavior parity.',
      'Quality systems for AI-assisted development. Vitest-first testing, strategic Playwright coverage, enforced minimum coverage gates.',
      'Earlier as SDE: shipped the payments system ahead of schedule. Maintained Spring Boot microservices and legacy Java/ASP. Contributed components to the modern TypeScript UI library.',
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
