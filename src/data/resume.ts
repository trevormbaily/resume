export const profile = {
  name: 'Trevor Baily',
  location: 'Omaha, Nebraska',
  phone: '(402) 957-5167',
  email: 'tbaily24@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/trevor-baily24',
  linkedinLabel: 'linkedin.com/in/trevor-baily24',
  headline:
    'Omaha-based senior engineer. I rebuild high-traffic search experiences and build AI tooling that helps teams move faster without cutting corners.',
  support:
    'Most days that means React, TypeScript, and Vite, owning the path from the UI through the BFF, search, and production.',
}

export const skillGroups = [
  {
    label: 'Frontend',
    items: [
      'React 19',
      'Next.js App Router',
      'TypeScript (strict)',
      'Vite',
      'Three.js / R3F',
      'Tailwind',
      'Design systems',
      'URL-driven state',
    ],
  },
  {
    label: 'Backend',
    items: [
      '.NET BFFs',
      'Java / Spring search',
      'OpenAPI contracts',
      'Stored proc to API migrations',
    ],
  },
  {
    label: 'Quality',
    items: [
      'Vitest / Testing Library',
      'Playwright',
      'Coverage gates',
      'Static analysis',
      'Regression locks',
    ],
  },
  {
    label: 'Platform',
    items: [
      'Kubernetes ingress',
      'Octopus Deploy',
      'Dependabot',
      'Dynatrace / structured logs',
    ],
  },
  {
    label: 'AI-assisted engineering',
    items: [
      'Cursor skills',
      'MCP',
      'Agent workflows',
      'Evals',
      'AGENTS.md',
      'Human review gates',
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
      'Own marketplace search end to end: React/Next UI, .NET BFF, Java search services, and the deploy path. I take the whole vertical, not just a ticket in one layer.',
      'Lead migrations from legacy UIs to Next.js App Router with behavior parity as the bar. Design tokens and URL state keep search shareable and history-correct.',
      'Keep data shaping in the BFF so the UI stays thin. Contract-first FE/BE work, mock-first UI, and contract tests in CI.',
      'Protect quality during migrations. Vitest/Testing Library first, Playwright when a real browser earns its keep, and coverage gates treated as product decisions, not theater.',
      'Build AI-assisted engineering workflows teams can reuse: skills, ticket-to-implement pipelines, and human approval before anything with side effects.',
      'Work carefully across shared repos. Map blast radius before coding, know what we own vs. what we only consume, and keep observability clear enough that QA can block on it.',
      'Earlier at ATG I shipped a payments integration ahead of schedule, worked Spring Boot and legacy Java, ran Gatling performance work, and moved a shared component library onto Next.js / TypeScript.',
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
