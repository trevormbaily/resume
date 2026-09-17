export const profile = {
  name: 'Trevor Baily',
  location: 'Omaha, Nebraska',
  phone: '(402) 957-5167',
  email: 'tbaily24@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/trevor-baily24',
  linkedinLabel: 'linkedin.com/in/trevor-baily24',
  headline:
    'Lead-ready AI-native engineer specializing in agentic development and production migrations. Ships Cursor-driven full-stack rewrites, cloud agent environments, and reusable skills/rules; operates multi-agent systems in daily production use. Omaha.',
  support:
    'React/Next.js through .NET BFFs to Java/Spring on Kubernetes. Led production migration of Classic ASP to Next.js App Router via Cursor agent workflows. Built cloud agent environments and skills/rules enabling team adoption. Contract-first APIs, comprehensive test coverage, and quality systems that sustain high-velocity agent-assisted development.',
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
      'Led production migration of Classic ASP frontend to Next.js App Router with .NET BFF using Cursor agent workflows. Delivered contract-first OpenAPI specifications, behavior parity validation, and stakeholder alignment throughout migration.',
      'Established cloud agent development environments against company repositories and built reusable Cursor skills and rules enabling team-wide adoption. Operate multi-agent systems in production for personal tooling; deployed Cloudflare AI workers demonstrating end-to-end agentic capabilities.',
      'Own search and discovery platform spanning React/Next.js UI, .NET BFF, Java/Spring search services, and Elasticsearch on Kubernetes. Drove App Router migrations maintaining complete behavior parity.',
      'Implemented quality systems supporting high-velocity agent-assisted development: Vitest-first testing strategy, strategic Playwright coverage, and enforced minimum coverage gates.',
      'As SDE: delivered payments system ahead of schedule against internal services. Maintained Spring Boot microservices and legacy Java/ASP systems; contributed shared components to modern TypeScript UI library.',
    ],
  },
  {
    company: 'Priority Technologies LLC',
    location: '',
    titles: [{ title: 'Senior Frontend Developer', dates: 'Jul 2017 - May 2022' }],
    bullets: [
      'Modernized frontend architecture of enterprise monolith (1.5M+ LOC) with Vue.js, Vuetify, Tailwind, and Pinia. Delivered improved UX and measurably faster page loads.',
      'Independently owned frontend engineering for state-based product launch: gathered requirements, designed interfaces, and shipped production release in under six months.',
      'Led Struts 1 → Struts 2 migration serving as both PM and lead developer with minimal knowledge transfer. Completed rollout to all clients on schedule and under budget.',
      'Migrated dependency management from manual ANT builds to Maven. Conducted security reviews and coordinated library upgrades across the platform.',
      'Built consumer-facing web presence supporting business growth and customer acquisition. Integrated JasperSoft and HighCharts for embedded reporting capabilities.',
    ],
  },
]

export const education = {
  school: 'University of Nebraska-Lincoln',
  dates: '2012 - 2016',
  degree: 'Bachelor of Business Administration (B.B.A.), Finance',
  note: 'Husker alum. Learned software through mentorship and deliberate practice, then built a career in engineering.',
}
