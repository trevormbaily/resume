export const profile = {
  name: 'Trevor Baily',
  location: 'Omaha, Nebraska',
  phone: '(402) 957-5167',
  email: 'tbaily24@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/trevor-baily24',
  linkedinLabel: 'linkedin.com/in/trevor-baily24',
  headline:
    'Omaha-based senior engineer. I use AI tooling so I can take on more of the work myself, and I help the team move faster without cutting corners.',
  support:
    'Most days that means React, TypeScript, and Vite, owning the path from the UI through the BFF, search, and production. I also build Cursor skills, MCP setups, and cloud agent environments the team can reuse.',
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
      'I work across a lot of the stack: React/Next.js, .NET BFFs, Java/Spring, Kubernetes. I own the path from the UI through the BFF and search services to production.',
      'I push for agentic development on the team: Cursor skills, MCP, and agent workflows people can reuse, plus cloud agent environments against the company codebase.',
      'On a large legacy consolidation, I helped rewrite Classic ASP into a Next.js frontend and .NET BFF using Cursor, and I stay close to stakeholders on it.',
      'Earlier as SDE: performance testing and legacy maintenance; shipped the payments system against existing internal services; kept Spring Boot microservices and Classic ASP/Java monoliths running; contributed to a shared component library now used in the Next.js/TypeScript UI.',
    ],
  },
  {
    company: 'Priority Technologies LLC',
    location: '',
    titles: [{ title: 'Senior Frontend Developer', dates: 'Jul 2017 - May 2022' }],
    bullets: [
      'Modernized the frontend of a large enterprise monolith (1.5M+ LOC) with Vue.js, Vuetify, Tailwind, and Pinia. Clearer UX, and the pages actually loaded faster.',
      'Was the sole frontend engineer who took a state-based product from idea to production in under six months, including requirements and design.',
      'Led a Struts 1 to Struts 2 migration as both PM and developer with thin knowledge transfer, and rolled it out to all clients on time and under budget.',
      'Moved dependency management from manual ANT builds to Maven, including security reviews and library upgrades.',
      'Built the consumer-facing web presence that helped grow exposure and support acquisition of the product, and added JasperSoft / HighCharts for embedded reporting.',
    ],
  },
]

export const education = {
  school: 'University of Nebraska-Lincoln',
  dates: '2012 - 2016',
  degree: 'Bachelor of Business Administration (B.B.A.), Finance',
  note: 'Husker alum. Learned software the long way, mentors and a lot of practice, then made it my career.',
}
