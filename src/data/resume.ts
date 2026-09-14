export const profile = {
  name: 'Trevor Baily',
  location: 'Omaha, Nebraska',
  phone: '(402) 957-5167',
  email: 'tbaily24@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/trevor-baily24',
  linkedinLabel: 'linkedin.com/in/trevor-baily24',
  headline:
    'AI-native engineer who ships production systems with agents. I led the first full-system Cursor-powered migration of a legacy codebase to modern Next.js, pioneered cloud agent workflows against enterprise repos, and build personal multi-agent systems used daily. I own the full stack from React frontends through backend services to Kubernetes production, and I bring an agentic-first approach to all of it.',
  support:
    'Proven: rewrote Classic ASP monolith to Next.js + .NET BFF entirely with Cursor; early adopter of cloud agents and environments; built AI workers on Cloudflare. Daily tools: React/Next.js, TypeScript, .NET, Java/Spring Boot, Cursor skills/rules, MCP, agent loops.',
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
    label: 'Agentic engineering',
    items: [
      'Cloud agent workflows',
      'Cursor skills/rules/environments',
      'MCP server integrations',
      'Multi-agent systems',
      'Cloudflare AI Workers',
      'Prompt engineering',
      'Agent-driven migrations',
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
      'Led first full-system agent-powered migration at company: rewrote entire Classic ASP application to Next.js frontend + .NET BFF backend using Cursor, establishing patterns for AI-native development that teams now follow.',
      'Pioneered cloud agent usage in early adoption phase: created custom Cursor skills, rules, and cloud environments against company codebase. Built repeatable agentic workflows that teammates use to ship production changes faster.',
      'Outside of work, build and use personal multi-agent systems for life operations daily, plus AI workers on Cloudflare. This hands-on agentic development directly informs the editor-native agent loops and prompt engineering patterns I bring to the team.',
      'Own marketplace search and discovery stack: React/Next.js UI → .NET BFF → Java/Spring search services → Kubernetes production. Lead App Router migrations with behavior parity, design system integration, URL-as-state UX.',
      'Enforce contract-first integration and quality gates: BFF transformations, OpenAPI contracts, automated contract tests in CI, Vitest unit coverage, Playwright browser scenarios. Maintained throughout legacy-to-modern transitions.',
      'Earlier as SDE: delivered payments integration ahead of schedule; maintained Spring Boot microservices and legacy Java/ASP monoliths; contributed shared components adopted across modern TypeScript UI.',
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
