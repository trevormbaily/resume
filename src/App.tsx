import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

import { HeroField } from '@/components/HeroField'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { education, profile, roles, skillGroups } from '@/data/resume'
import { cn } from '@/lib/utils'

const sectionTone = {
  stack: {
    badge: 'border-teal-200 bg-teal-50 text-teal-800',
    rule: 'bg-teal-500',
  },
  experience: {
    badge: 'border-orange-200 bg-orange-50 text-orange-800',
    rule: 'bg-orange-500',
  },
  education: {
    badge: 'border-sky-200 bg-sky-50 text-sky-800',
    rule: 'bg-sky-500',
  },
} as const

function SectionIntro({
  tone,
  label,
  title,
  titleId,
  description,
}: {
  tone: keyof typeof sectionTone
  label: string
  title: string
  titleId: string
  description?: string
}) {
  const colors = sectionTone[tone]
  return (
    <div className="flex flex-col gap-3">
      <Badge variant="outline" className={cn('rounded-md', colors.badge)}>
        {label}
      </Badge>
      <div className="flex flex-col gap-2">
        <h2
          id={titleId}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </h2>
        <div className={cn('h-1 w-12 rounded-full', colors.rule)} />
      </div>
      {description ? (
        <p className="max-w-2xl text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}

export default function App() {
  const [firstName, ...restName] = profile.name.split(' ')
  const lastName = restName.join(' ')

  return (
    <div className="min-h-svh overflow-x-clip bg-background text-foreground">
      <header className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-[#08101c] text-white">
        <HeroField />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_80%_20%,rgba(232,93,4,0.28),transparent_55%),radial-gradient(70%_60%_at_15%_75%,rgba(20,184,166,0.28),transparent_50%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#08101c] via-[#08101c]/70 to-transparent"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-between gap-10 px-6 pt-8 pb-10 sm:px-10 sm:pt-10 sm:pb-14">
          <div className="flex flex-wrap items-center justify-between gap-3 animate-[rise_0.7s_cubic-bezier(0.22,1,0.36,1)_both]">
            <Badge className="rounded-md border-0 bg-teal-400/15 text-teal-100 hover:bg-teal-400/20">
              Omaha · open to Frontend Platform
            </Badge>
            <p className="text-xs tracking-[0.16em] text-white/45 uppercase">
              Vite · React · TypeScript
            </p>
          </div>

          <div className="flex max-w-3xl flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="font-[family-name:var(--font-display)] animate-[rise_0.8s_cubic-bezier(0.22,1,0.36,1)_both] text-[clamp(3.5rem,12vw,7.25rem)] leading-[0.86] font-extrabold tracking-[-0.045em]">
                <span className="block text-white">{firstName}</span>
                <span className="block bg-linear-to-r from-orange-300 via-amber-200 to-teal-200 bg-clip-text text-transparent">
                  {lastName}
                </span>
              </h1>
              <div className="flex items-center gap-2 animate-[rise_0.8s_0.1s_cubic-bezier(0.22,1,0.36,1)_both]">
                <span className="h-1.5 w-10 rounded-full bg-orange-400" />
                <span className="h-1.5 w-6 rounded-full bg-teal-400/80" />
                <span className="h-1.5 w-3 rounded-full bg-sky-300/70" />
              </div>
            </div>

            <p className="max-w-2xl animate-[rise_0.8s_0.15s_cubic-bezier(0.22,1,0.36,1)_both] text-lg leading-snug font-medium text-white/92 sm:text-xl">
              {profile.headline}
            </p>
            <p className="max-w-xl animate-[rise_0.8s_0.25s_cubic-bezier(0.22,1,0.36,1)_both] text-base leading-relaxed text-white/65">
              {profile.support}
            </p>

            <div className="flex flex-wrap gap-2 animate-[rise_0.8s_0.35s_cubic-bezier(0.22,1,0.36,1)_both]">
              <Button
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600"
                render={<a href="#experience" />}
              >
                See experience
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                render={<a href={profile.linkedin} target="_blank" rel="noreferrer" />}
              >
                LinkedIn
                <ArrowUpRight data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-teal-400/15 hover:text-teal-50"
                render={<a href={`mailto:${profile.email}`} />}
              >
                <Mail data-icon="inline-start" />
                Email
              </Button>
            </div>
          </div>

          <div className="animate-[rise_0.8s_0.45s_cubic-bezier(0.22,1,0.36,1)_both] rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md sm:px-5">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-teal-300" />
                <MapPin className="size-3.5 text-teal-200/80" />
                {profile.location}
              </span>
              <a
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                href={`tel:${profile.phone.replace(/\D/g, '')}`}
              >
                <span className="size-1.5 rounded-full bg-orange-300" />
                <Phone className="size-3.5 text-orange-200/80" />
                {profile.phone}
              </a>
              <a
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                href={`mailto:${profile.email}`}
              >
                <span className="size-1.5 rounded-full bg-sky-300" />
                <Mail className="size-3.5 text-sky-200/80" />
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-16 sm:px-10 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute top-24 -left-24 size-64 rounded-full bg-teal-200/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[40%] -right-20 size-72 rounded-full bg-orange-200/20 blur-3xl"
        />

        <section id="skills" aria-labelledby="skills-title" className="relative flex flex-col gap-8">
          <SectionIntro
            tone="stack"
            label="Stack"
            title="Portable vocabulary"
            titleId="skills-title"
            description="The tools and patterns I claim with evidence — frontend platform craft plus AI-native force multiplication."
          />

          <div className="grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <div
                key={group.label}
                className={cn(
                  'flex flex-col gap-3 border-t pt-5',
                  index % 2 === 0 ? 'border-teal-200/80' : 'border-orange-200/70',
                )}
              >
                <h3 className="text-sm font-semibold tracking-tight">{group.label}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className={cn(
                        'h-auto rounded-md px-2.5 py-1 text-[0.8rem] font-normal',
                        index % 2 === 0
                          ? 'border-teal-200/80 bg-teal-50/50 text-teal-950'
                          : 'border-orange-200/80 bg-orange-50/50 text-orange-950',
                      )}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

        <section
          id="experience"
          aria-labelledby="experience-title"
          className="relative flex flex-col gap-10"
        >
          <SectionIntro
            tone="experience"
            label="Experience"
            title="Vertical ownership, not ticket theater"
            titleId="experience-title"
            description="End-to-end product work across UI, BFF, search, and delivery — with quality systems that survive review."
          />

          <div className="flex flex-col gap-12">
            {roles.map((role) => (
              <article
                key={role.company}
                className="relative flex flex-col gap-4 border-l-2 border-orange-300/70 pl-5"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {role.company}
                  </h3>
                  {role.location ? (
                    <p className="text-sm text-muted-foreground">{role.location}</p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-1.5">
                  {role.titles.map((title) => (
                    <div
                      key={title.title}
                      className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <p className="font-medium">{title.title}</p>
                      <p className="shrink-0 text-sm text-orange-700/80 tabular-nums">
                        {title.dates}
                      </p>
                    </div>
                  ))}
                </div>

                <ul className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 before:absolute before:top-[0.55em] before:left-0 before:size-1.5 before:rounded-full before:bg-teal-500/70"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <Separator className="bg-gradient-to-r from-transparent via-teal-200 to-transparent" />

        <section
          id="education"
          aria-labelledby="education-title"
          className="relative flex flex-col gap-6"
        >
          <SectionIntro
            tone="education"
            label="Education"
            title="Foundation"
            titleId="education-title"
          />
          <div className="flex flex-col gap-2 border-l-2 border-sky-300/80 pl-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold tracking-tight">{education.school}</h3>
              <p className="text-sm text-sky-800/70 tabular-nums">{education.dates}</p>
            </div>
            <p className="font-medium">{education.degree}</p>
            <p className="max-w-2xl text-muted-foreground">{education.note}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-teal-100/80 bg-gradient-to-r from-teal-50/40 via-background to-orange-50/40">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>
            Built with{' '}
            <span className="font-medium text-teal-800">Vite</span>
            {' + '}
            <span className="font-medium text-orange-800">React</span>
            {' + Tailwind + shadcn/ui.'}
          </p>
          <Button
            variant="link"
            className="h-auto justify-start px-0 text-orange-800"
            render={<a href={profile.linkedin} target="_blank" rel="noreferrer" />}
          >
            {profile.linkedinLabel}
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        </div>
      </footer>
    </div>
  )
}
