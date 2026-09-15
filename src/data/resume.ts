export const profile = {
  name: 'Trevor Baily',
  location: 'Omaha, Nebraska',
  phone: '(402) 957-5167',
  email: 'tbaily24@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/trevor-baily24',
  linkedinLabel: 'linkedin.com/in/trevor-baily24',
  headline:
    'Senior engineer in Omaha. I use agents to spec, plan, and execute multi-step work on a real codebase, own the tests and what ships, and turn that loop into Cursor skills, rules, and cloud environments other engineers can run.',
  support:
    'Helped lead a Classic ASP rewrite to Next.js and a .NET BFF in Cursor. React/TypeScript daily, plus .NET and Java/Spring. Outside work: personal multi-agent systems, a grok bot, and AI workers on Cloudflare.',
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
      '.NET / C# BFFs',
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
      'Contract tests',
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
    label: 'Agentic engineering',
    items: [
      'Spec-to-ship agent loops',
      'Cloud agent environments',
      'Cursor skills/rules',
      'MCP',
      'Multi-agent systems',
      'Team coaching',
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
      'Helped lead a Classic ASP rewrite to Next.js + .NET BFF in Cursor. Agents did the multi-step work across the repo; I owned spec, tests, and what shipped. Packed the loop into skills, rules, and cloud agent environments teammates run on the company codebase.',
      'Own marketplace search and discovery end to end: React/Next.js UI → .NET BFF → Java/Spring search → Kubernetes/Octopus production. App Router migrations with behavior parity, design-system tokens, and URL-as-state.',
      'Keep the quality bar when agents write code: contract tests in CI, Vitest first, Playwright for browser/BFF, coverage gates on the migration.',
      'Earlier as SDE: payments integration ahead of schedule; Spring Boot microservices and legacy Java/ASP; shared components adopted in the modern TypeScript UI.',
    ],
  },
  {
    company: 'Priority Technologies LLC',
    location: '',
    titles: [{ title: 'Senior Frontend Developer', dates: 'Jul 2017 - May 2022' }],
    bullets: [
      'Modernized frontend of 1.5M+ LOC enterprise monolith with Vue.js, Vuetify, Tailwind, and Pinia. Clearer UX and measurably faster page loads.',
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
