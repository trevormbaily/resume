export const profile = {
  name: 'Trevor Baily',
  location: 'Omaha, Nebraska',
  phone: '(402) 957-5167',
  email: 'tbaily24@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/trevor-baily24',
  linkedinLabel: 'linkedin.com/in/trevor-baily24',
  headline:
    'Senior full-stack engineer who migrates high-traffic discovery experiences and builds AI-native engineering systems that make teams faster without lowering the quality bar.',
  support:
    'Vite, React, TypeScript, and platform craft — vertical ownership from UI through BFF, search, and delivery.',
}

export const skillGroups = [
  {
    label: 'Frontend',
    items:
      'React 19, Next.js App Router, TypeScript (strict), Vite, Tailwind design tokens, URL-as-state, design-system-first UI',
  },
  {
    label: 'Backend',
    items:
      '.NET BFF patterns, Java/Spring search services, OpenAPI / contract-first FE↔BE, stored-procedure → API migrations',
  },
  {
    label: 'Quality',
    items:
      'Vitest / React Testing Library, Playwright (discipline), coverage gates, static analysis, behavior locks',
  },
  {
    label: 'Platform',
    items:
      'Kubernetes ingress, Octopus Deploy, Dependabot, structured logging / Dynatrace',
  },
  {
    label: 'AI-native engineering',
    items:
      'Cursor skills-as-product, MCP, agent orchestration, evals / landmines-as-assertions, AGENTS.md, human-in-the-loop gates',
  },
  {
    label: 'Product',
    items: 'Search / discovery, A/B experiments, feature flags, marketplace UX',
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
      { title: 'Senior Software Development Engineer', dates: 'Oct 2024 – Present' },
      { title: 'Software Development Engineer', dates: 'May 2022 – Oct 2024' },
    ],
    bullets: [
      'Own marketplace search / discovery end-to-end: Next.js / React UI → .NET BFF → Java/Spring search gateway → Kubernetes ingress / Octopus deploy — vertical ownership, not single-layer tickets.',
      'Lead legacy → Next.js App Router migrations with 1:1 behavior parity as the spec; design-system-first (tokens); URL-as-state for shareable, history-correct search.',
      'Keep BFF transforms; UI does not reshape — contract-first FE↔BE with identical contracts in parallel PRs, mock-first UI, and CI contract tests.',
      'Ship quality under migration pressure: unit-first pyramid (Vitest/RTL), Playwright only where a real browser/BFF proves value, coverage gates as product decisions, behavior-locks tied to tickets.',
      'Build AI-native engineering systems that industrialize the SDLC: thin skill routers, composable ticket→implement→test pipelines, human gates before side effects, MCP/agent orchestration, evals.',
      'Cross-repo craft: blast-radius mapping before coding, own vs contract-only shared modules, release-impact thinking, Dependabot as backlog, observability QA can block on.',
      'Earlier tenure foundations: payments integration (ahead of schedule); Spring Boot + legacy Java; Gatling performance testing; Datadog / Dynatrace; shared component library → Next.js / TypeScript surfaces.',
    ],
  },
  {
    company: 'Priority Technologies LLC',
    location: '',
    titles: [{ title: 'Senior Frontend Developer', dates: 'Jul 2017 – May 2022' }],
    bullets: [
      'Modernized the front end of an enterprise monolith (1.5M+ LOC) with Vue.js, Vuetify, Tailwind, Pinia — better UX and meaningfully lower page load times.',
      'Sole front-end resource who took a state-based product from idea → production in under 6 months (requirements through design and implementation).',
      'Led Struts 1 → Struts 2 migration as PM + developer with limited knowledge transfer; rolled out to all clients on time and under budget.',
      'Moved dependency management from manual ANT to Maven; cross-referenced security vulnerabilities and updated libraries.',
      'Built consumer-facing web presence that increased exposure and supported acquisition of the state-based product; integrated JasperSoft / HighCharts for embedded BI.',
    ],
  },
]

export const education = {
  school: 'University of Nebraska–Lincoln',
  dates: '2012 – 2016',
  degree: 'Bachelor of Business Administration (B.B.A.), Finance',
  note: 'Self-taught software engineering via mentors + structured platforms → professional web application development.',
}
