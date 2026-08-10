import { education, profile, roles, skillGroups } from '@/data/resume'

export function PrintResume() {
  return (
    <>
      <style>{printStyles}</style>
      <article className="resume">
        <header className="resume-header">
          <h1>{profile.name}</h1>
          <p className="contact">
            {profile.location}
            {' · '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {' · '}
            <a href={`tel:${profile.phone.replace(/\D/g, '')}`}>{profile.phone}</a>
            {' · '}
            <a href={profile.linkedin}>{profile.linkedinLabel}</a>
          </p>
          <p className="summary">{profile.headline}</p>
        </header>

        <section>
          <h2>Skills</h2>
          <ul className="skills">
            {skillGroups.map((group) => (
              <li key={group.label}>
                <span className="skill-label">{group.label}:</span>{' '}
                {group.items.join(', ')}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Experience</h2>
          {roles.map((role) => (
            <div key={role.company} className="role">
              <div className="role-heading">
                <h3>
                  {role.company}
                  {role.location ? (
                    <span className="location"> — {role.location}</span>
                  ) : null}
                </h3>
              </div>
              {role.titles.map((title) => (
                <div key={title.title} className="title-row">
                  <span className="title">{title.title}</span>
                  <span className="dates">{title.dates}</span>
                </div>
              ))}
              <ul>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Education</h2>
          <div className="title-row">
            <h3>{education.school}</h3>
            <span className="dates">{education.dates}</span>
          </div>
          <p className="degree">{education.degree}</p>
        </section>
      </article>
    </>
  )
}

const printStyles = `
  *, *::before, *::after { box-sizing: border-box; }

  html, body {
    margin: 0;
    padding: 0;
    background: #fff;
    color: #111;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 10.5pt;
    line-height: 1.35;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .resume {
    max-width: 8.5in;
    margin: 0 auto;
    padding: 0.55in 0.65in;
  }

  .resume-header {
    margin-bottom: 0.85rem;
    padding-bottom: 0.65rem;
    border-bottom: 1.5px solid #222;
  }

  h1 {
    margin: 0 0 0.25rem;
    font-size: 22pt;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .contact {
    margin: 0 0 0.45rem;
    font-size: 9.5pt;
    color: #333;
  }

  .summary {
    margin: 0;
    font-size: 10pt;
    color: #222;
  }

  section {
    margin-bottom: 0.75rem;
  }

  h2 {
    margin: 0 0 0.35rem;
    font-size: 11pt;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border-bottom: 1px solid #bbb;
    padding-bottom: 0.15rem;
  }

  h3 {
    margin: 0;
    font-size: 11pt;
    font-weight: 700;
  }

  .location {
    font-weight: 400;
    color: #444;
  }

  .skills {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .skills li {
    margin-bottom: 0.15rem;
  }

  .skill-label {
    font-weight: 700;
  }

  .role {
    margin-bottom: 0.65rem;
  }

  .role-heading {
    margin-bottom: 0.1rem;
  }

  .title-row {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: baseline;
    margin-bottom: 0.1rem;
  }

  .title {
    font-weight: 600;
    font-style: italic;
  }

  .dates {
    flex-shrink: 0;
    font-size: 9.5pt;
    color: #333;
    font-variant-numeric: tabular-nums;
  }

  .degree {
    margin: 0.1rem 0 0;
  }

  ul {
    margin: 0.25rem 0 0;
    padding-left: 1.1rem;
  }

  li {
    margin-bottom: 0.18rem;
  }

  @media screen {
    body {
      background: #e8eaed;
    }
    .resume {
      margin: 1.5rem auto;
      background: #fff;
      box-shadow: 0 1px 4px rgba(0,0,0,0.12);
      min-height: 11in;
    }
  }

  @page {
    size: letter;
    margin: 0.45in;
  }

  @media print {
    .resume {
      max-width: none;
      padding: 0;
      margin: 0;
      box-shadow: none;
    }
  }
`
