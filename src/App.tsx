import {
  education,
  profile,
  roles,
  skillGroups,
} from './data/resume'
import './App.css'

function HeroField() {
  return (
    <svg
      className="hero__field"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e85d04" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#5eb0d6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#f4f7fa" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="node" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e85d04" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e85d04" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g className="hero__grid" stroke="rgba(244,247,250,0.14)" strokeWidth="1">
        {Array.from({ length: 18 }, (_, i) => {
          const x = 40 + i * 80
          return <path key={`v-${i}`} d={`M${x} 0 V900`} />
        })}
        {Array.from({ length: 12 }, (_, i) => {
          const y = 30 + i * 75
          return <path key={`h-${i}`} d={`M0 ${y} H1440`} />
        })}
      </g>
      <g className="hero__orbit">
        <path
          d="M180 720 C420 420, 760 260, 1280 180"
          fill="none"
          stroke="url(#beam)"
          strokeWidth="3"
        />
        <path
          d="M120 200 C480 280, 820 520, 1320 640"
          fill="none"
          stroke="rgba(244,247,250,0.18)"
          strokeWidth="2"
        />
        <circle className="hero__pulse" cx="980" cy="240" r="54" fill="url(#node)" />
        <circle cx="980" cy="240" r="7" fill="#ffb347" />
        <circle cx="620" cy="430" r="5" fill="#f4f7fa" opacity="0.8" />
        <circle cx="360" cy="580" r="4" fill="#f4f7fa" opacity="0.55" />
      </g>
    </svg>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <HeroField />
        <div className="hero__content">
          <h1 className="hero__brand">{profile.name}</h1>
          <hr className="hero__rule" />
          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__support">{profile.support}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#experience">
              See experience
            </a>
            <a
              className="button button--ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="button button--ghost" href={`mailto:${profile.email}`}>
              Email
            </a>
          </div>
          <ul className="hero__meta">
            <li>{profile.location}</li>
            <li>
              <a href={`tel:${profile.phone.replace(/\D/g, '')}`}>{profile.phone}</a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                {profile.linkedinLabel}
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section className="section" id="skills" aria-labelledby="skills-title">
          <p className="section__label">Stack</p>
          <h2 className="section__title" id="skills-title">
            Portable vocabulary
          </h2>
          <div className="skills">
            {skillGroups.map((group) => (
              <article className="skill" key={group.label}>
                <h3 className="skill__label">{group.label}</h3>
                <p className="skill__items">{group.items}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="experience">
          <section className="section" id="experience" aria-labelledby="experience-title">
            <p className="section__label">Experience</p>
            <h2 className="section__title" id="experience-title">
              Vertical ownership, not ticket theater
            </h2>
            {roles.map((role) => (
              <article className="role" key={role.company}>
                <h3 className="role__company">{role.company}</h3>
                {role.location ? (
                  <p className="role__location">{role.location}</p>
                ) : null}
                <ul className="role__titles">
                  {role.titles.map((title) => (
                    <li key={title.title}>
                      <span>{title.title}</span>
                      <span className="role__dates">{title.dates}</span>
                    </li>
                  ))}
                </ul>
                <ul className="role__bullets">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </div>

        <section className="section" id="education" aria-labelledby="education-title">
          <p className="section__label">Education</p>
          <h2 className="section__title" id="education-title">
            Foundation
          </h2>
          <p className="education__school">
            {education.school} · {education.dates}
          </p>
          <p className="education__degree">{education.degree}</p>
          <p className="education__note">{education.note}</p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <span>Built with Vite + React — the stack this Frontend Platform seat ships.</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {profile.linkedinLabel}
          </a>
        </div>
      </footer>
    </div>
  )
}
