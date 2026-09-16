export const profile = {
  name: 'Trevor Baily',
  location: 'Omaha, Nebraska',
  phone: '(402) 957-5167',
  email: 'tbaily24@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/trevor-baily24',
  linkedinLabel: 'linkedin.com/in/trevor-baily24',
  headline:
    'AI-first senior engineer who ships with agents by default — Cursor migrations, cloud agent environments, skills and rules teams reuse. I run personal multi-agent systems daily. Omaha.',
  support:
    'React/Next.js through .NET BFFs to Java/Spring on Kubernetes. I used Cursor to rewrite Classic ASP into a production Next.js app. Early with cloud agents against company repos. Contract-first, Vitest coverage gates, quality stays up while agents move fast.',
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
      'Used Cursor to rewrite a Classic ASP frontend into Next.js App Router plus .NET BFF — full production system, not a demo. Contract-first OpenAPI, behavior parity migrations, stakeholder checkpoints.',
      'Stood up cloud agent environments against company repos early. Built Cursor skills and rules the team reuses. Run personal multi-agent systems daily for life ops. Ship AI workers on Cloudflare.',
      'Own search and discovery stack: React/Next.js UI → .NET BFF → Java/Spring search services → Elasticsearch on Kubernetes. App Router migrations with full behavior parity.',
      'Quality: Vitest-first, Playwright where it matters, coverage gates enforce minimums. Agents move fast, quality stays up.',
      'Earlier as SDE: shipped payments system ahead of schedule against internal services. Spring Boot microservices, legacy Java/ASP maintenance. Contributed shared components into the modern TypeScript UI.',
    ],
  },
  {
    company: 'Priority Technologies LLC',
    location: '',
    titles: [{ title: 'Senior Frontend Developer', dates: 'Jul 2017 - May 2022' }],
    bullets: [
      'Modernized frontend of a large enterprise monolith (1.5M+ LOC) with Vue.js, Vuetify, Tailwind, Pinia. Clearer UX, faster page loads.',
      'Sole frontend engineer — shipped a state-based product from idea to production in under six months, including requirements and design.',
      'Led Struts 1 → Struts 2 migration as PM and developer with thin knowledge transfer. Rolled out to all clients on time, under budget.',
      'Moved dependency management from manual ANT builds to Maven. Security reviews, library upgrades.',
      'Built consumer-facing web presence that helped grow exposure and support acquisition. Added JasperSoft / HighCharts for embedded reporting.',
    ],
  },
]

export const education = {
  school: 'University of Nebraska-Lincoln',
  dates: '2012 - 2016',
  degree: 'Bachelor of Business Administration (B.B.A.), Finance',
  note: 'Husker alum. Learned software the long way, mentors and a lot of practice, then made it my career.',
}
