import { ArrowUpRight, Mail } from 'lucide-react'

import { HeroField } from '@/components/HeroField'
import { Button } from '@/components/ui/button'
import { education, profile, roles, skillGroups } from '@/data/resume'

function SectionHeading({
  title,
  titleId,
  description,
}: {
  title: string
  titleId: string
  description?: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2
        id={titleId}
        className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      <div className="h-px w-14 bg-[var(--accent-signal)]" />
      {description ? (
        <p className="max-w-2xl text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-svh overflow-x-clip bg-background text-foreground">
      <header className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-[#14181f] text-white">
        <HeroField />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pt-24 pb-14 sm:px-10 sm:pb-20 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="flex max-w-3xl flex-col gap-5">
            <h1 className="font-[family-name:var(--font-name)] animate-[rise_0.85s_cubic-bezier(0.22,1,0.36,1)_both] text-[clamp(3.25rem,11vw,6.5rem)] leading-[0.92] font-black tracking-[-0.03em] text-white">
              {profile.name}
            </h1>

            <p className="max-w-2xl animate-[rise_0.85s_0.12s_cubic-bezier(0.22,1,0.36,1)_both] text-lg leading-snug font-medium text-white/90 sm:text-xl">
              {profile.headline}
            </p>
            <p className="max-w-xl animate-[rise_0.85s_0.22s_cubic-bezier(0.22,1,0.36,1)_both] text-base leading-relaxed text-white/60">
              {profile.support}
            </p>

            <div className="flex flex-wrap gap-2 animate-[rise_0.85s_0.32s_cubic-bezier(0.22,1,0.36,1)_both]">
              <Button
                size="lg"
                className="bg-[var(--accent-signal)] text-white hover:bg-[var(--accent-signal-hover)]"
                render={<a href="#experience" />}
              >
                See the work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/8 hover:text-white"
                render={
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" />
                }
              >
                LinkedIn
                <ArrowUpRight data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white/85 hover:bg-white/8 hover:text-white"
                render={<a href={`mailto:${profile.email}`} />}
              >
                <Mail data-icon="inline-start" />
                Email
              </Button>
            </div>
          </div>

          <div className="animate-[rise_0.85s_0.2s_cubic-bezier(0.22,1,0.36,1)_both] shrink-0 self-start lg:self-end">
            <div className="relative size-36 overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_0_0_1px_rgba(11,110,79,0.35)] sm:size-44 lg:size-52">
              <img
                src="./portrait.png"
                alt="Trevor Baily"
                width={208}
                height={208}
                className="size-full object-cover object-[50%_18%]"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-16 sm:px-10 sm:py-24">
        <section
          id="skills"
          aria-labelledby="skills-title"
          className="relative flex flex-col gap-8"
        >
          <SectionHeading
            title="Skills"
            titleId="skills-title"
            description="What I reach for day to day: frontend platforms, delivery, and AI-assisted engineering."
          />

          <div className="grid gap-7 sm:grid-cols-2">
            {skillGroups.map((group, groupIndex) => (
              <div
                key={group.label}
                className="skill-group relative flex flex-col gap-3.5 rounded-xl border border-border/80 bg-white/55 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-[2px] sm:p-5"
                style={{ animationDelay: `${0.06 + groupIndex * 0.05}s` }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-[2px] bg-[var(--accent-signal)]"
                  />
                  <h3 className="text-[0.7rem] font-semibold tracking-[0.14em] text-foreground/70 uppercase">
                    {group.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, itemIndex) => (
                    <span
                      key={item}
                      className="skill-chip group/chip relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-[#cfd6de] bg-[#f8fafb] px-2.5 py-1.5 text-[0.8rem] font-medium tracking-tight text-foreground/90 transition-[border-color,background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-signal)]/45 hover:bg-[#eef6f2] hover:shadow-[0_8px_18px_-12px_rgba(11,110,79,0.55)]"
                      style={{
                        animationDelay: `${0.1 + groupIndex * 0.04 + itemIndex * 0.03}s`,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className="size-1 shrink-0 rounded-[1px] bg-[var(--accent-signal)]/70 transition-colors group-hover/chip:bg-[var(--accent-signal)]"
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--accent-signal)]/35 to-transparent" />

        <section
          id="experience"
          aria-labelledby="experience-title"
          className="relative flex flex-col gap-10"
        >
          <SectionHeading
            title="Experience"
            titleId="experience-title"
            description="Product work from the interface through services and deploy, with reviews and tests that hold up."
          />

          <div className="flex flex-col gap-12">
            {roles.map((role) => (
              <article
                key={role.company}
                className="relative flex flex-col gap-4 border-l-2 border-[var(--accent-signal)]/45 pl-5"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {role.company}
                  </h3>
                  {role.location ? (
                    <p className="text-sm text-muted-foreground">
                      {role.location}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-1.5">
                  {role.titles.map((title) => (
                    <div
                      key={title.title}
                      className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <p className="font-medium">{title.title}</p>
                      <p className="shrink-0 text-sm text-muted-foreground tabular-nums">
                        {title.dates}
                      </p>
                    </div>
                  ))}
                </div>

                <ul className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 before:absolute before:top-[0.55em] before:left-0 before:size-1 before:rounded-sm before:bg-[var(--accent-signal)]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--accent-signal)]/35 to-transparent" />

        <section
          id="education"
          aria-labelledby="education-title"
          className="relative flex flex-col gap-6"
        >
          <SectionHeading title="Education" titleId="education-title" />
          <div className="flex flex-col gap-2 border-l-2 border-[var(--accent-signal)]/45 pl-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold tracking-tight">
                {education.school}
              </h3>
              <p className="text-sm text-muted-foreground tabular-nums">
                {education.dates}
              </p>
            </div>
            <p className="font-medium">{education.degree}</p>
            <p className="max-w-2xl text-muted-foreground">{education.note}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-[#eef1f4]/70">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="flex flex-col gap-1">
            <p>
              {profile.location}
              {' · '}
              <a
                className="text-foreground/80 transition-colors hover:text-[var(--accent-signal)]"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
              {' · '}
              <a
                className="text-foreground/80 transition-colors hover:text-[var(--accent-signal)]"
                href={`tel:${profile.phone.replace(/\D/g, '')}`}
              >
                {profile.phone}
              </a>
            </p>
            <p>
              Built with{' '}
              <span className="font-medium text-foreground">Vite</span>
              {' + '}
              <span className="font-medium text-foreground">React</span>
              {' + '}
              <span className="font-medium text-foreground">Three.js</span>.
            </p>
          </div>
          <Button
            variant="link"
            className="h-auto justify-start px-0 text-[var(--accent-signal)]"
            render={
              <a href={profile.linkedin} target="_blank" rel="noreferrer" />
            }
          >
            {profile.linkedinLabel}
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        </div>
      </footer>
    </div>
  )
}
