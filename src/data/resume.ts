export const profile = {
  name: 'Trevor Baily',
  location: 'Omaha, Nebraska',
  phone: '(402) 957-5167',
  email: 'tbaily24@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/trevor-baily24',
  linkedinLabel: 'linkedin.com/in/trevor-baily24',
  headline:
    'Senior engineer in Omaha specializing in full-stack marketplace search and discovery. I own end-to-end delivery from React frontends through backend services to production, and build AI-assisted workflows that help teams ship faster without sacrificing quality.',
  support:
    'React/Next.js, TypeScript, .NET BFFs, Java/Spring Boot search, Kubernetes deployments. I focus on contract-first integration, test coverage, and legacy-to-modern migrations with behavior parity.',
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
      'Own marketplace search and discovery end-to-end: React/Next.js UI → .NET BFF → Java/Spring search services → Kubernetes/Octopus Deploy production.',
      'Lead legacy-to-Next.js App Router migrations maintaining behavior parity; implement design systems with tokens; use URL-as-state for searchable, shareable UX.',
      'Enforce contract-first frontend/backend integration: BFF handles transformations, UI consumes clean contracts, CI validates with automated contract tests.',
      'Maintain quality during migration: Vitest/RTL unit tests first, Playwright for browser/BFF scenarios, coverage gates block regressions.',
      'Build reusable AI-assisted engineering workflows (Cursor skills, MCP, agent loops) so teammates ship faster without lowering quality bar.',
      'Earlier as SDE: delivered payments system integration ahead of schedule; maintained Spring Boot microservices and legacy Java/ASP monoliths; contributed to shared component library adopted in modern Next.js/TypeScript UI.',
    ],
  },
  {
    company: 'Priority Technologies LLC',
    location: '',
    titles: [{ title: 'Senior Frontend Developer', dates: 'Jul 2017 - May 2022' }],
    bullets: [
      'Modernized frontend of 1.5M+ LOC enterprise monolith with Vue.js, Vuetify, Tailwind, and Pinia—clearer UX and measurably faster page loads.',
      'As sole frontend engineer, shipped a state-based product from idea to production in under six months, including requirements and design.',
      'Led Struts 1 to Struts 2 migration as PM and developer with minimal knowledge transfer; rolled out to all clients on time and under budget.',
      'Migrated dependency management from manual ANT builds to Maven, including security reviews and library upgrades.',
      'Built consumer-facing web presence supporting product acquisition; integrated JasperSoft and HighCharts for embedded reporting.',
    ],
  },
]

export const education = {
  school: 'University of Nebraska-Lincoln',
  dates: '2012 - 2016',
  degree: 'Bachelor of Business Administration (B.B.A.), Finance',
  note: 'Husker alum. Learned software the long way, mentors and a lot of practice, then made it my career.',
}
