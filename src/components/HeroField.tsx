import { Suspense, lazy, useEffect, useState } from 'react'

import logoDotnet from '@/assets/logos/dotnet.png'
import logoGithub from '@/assets/logos/github.png'
import logoKubernetes from '@/assets/logos/kubernetes.png'
import logoNext from '@/assets/logos/nextdotjs.png'
import logoNode from '@/assets/logos/nodedotjs.png'
import logoOpenapi from '@/assets/logos/openapiinitiative.png'
import logoReact from '@/assets/logos/react.png'
import logoSpring from '@/assets/logos/spring.png'
import logoTailwind from '@/assets/logos/tailwindcss.png'
import logoThree from '@/assets/logos/threedotjs.png'
import logoTypescript from '@/assets/logos/typescript.png'
import logoVite from '@/assets/logos/vite.png'
import logoVue from '@/assets/logos/vuedotjs.png'

const HeroCanvas = lazy(() =>
  import('./HeroCanvas').then((mod) => ({ default: mod.HeroCanvas })),
)

const TECH_LOGOS = [
  { src: logoReact, label: 'React', height: '58%' },
  { src: logoTypescript, label: 'TypeScript', height: '72%' },
  { src: logoVite, label: 'Vite', height: '64%' },
  { src: logoNext, label: 'Next.js', height: '80%' },
  { src: logoTailwind, label: 'Tailwind', height: '54%' },
  { src: logoThree, label: 'Three.js', height: '68%' },
  { src: logoVue, label: 'Vue', height: '60%' },
  { src: logoDotnet, label: '.NET', height: '76%' },
  { src: logoSpring, label: 'Spring', height: '52%' },
  { src: logoNode, label: 'Node.js', height: '70%' },
  { src: logoKubernetes, label: 'Kubernetes', height: '84%' },
  { src: logoOpenapi, label: 'OpenAPI', height: '56%' },
  { src: logoGithub, label: 'GitHub', height: '66%' },
] as const

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function StaticField() {
  return (
    <div
      className="hero-field-fallback absolute inset-0"
      aria-hidden="true"
    />
  )
}

function LogoCandles() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-[8%] z-[1] flex h-[34%] items-end justify-center gap-2 px-4 sm:gap-3 sm:px-8 lg:top-[10%] lg:h-[38%]"
      aria-hidden="true"
    >
      {TECH_LOGOS.map((logo, index) => (
        <div
          key={logo.label}
          className="flex h-full w-[7%] max-w-14 min-w-8 flex-col items-center justify-end gap-2 sm:max-w-16"
          style={{ animationDelay: `${index * 0.06}s` }}
        >
          <div className="flex size-9 items-center justify-center rounded-full bg-[#101821]/95 shadow-[0_0_0_1px_rgba(11,110,79,0.35)] sm:size-11 lg:size-12">
            <img
              src={logo.src}
              alt=""
              width={40}
              height={40}
              className="size-[70%] object-contain"
              decoding="async"
            />
          </div>
          <div
            className="w-1.5 rounded-full bg-[var(--accent-signal)]/45 sm:w-2"
            style={{ height: logo.height }}
          />
        </div>
      ))}
    </div>
  )
}

export function HeroField() {
  const [reducedMotion, setReducedMotion] = useState(true)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReducedMotion(prefersReducedMotion())
    setReady(true)

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReducedMotion(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {!ready || reducedMotion ? (
        <StaticField />
      ) : (
        <Suspense fallback={<StaticField />}>
          <HeroCanvas />
        </Suspense>
      )}
      <LogoCandles />
    </div>
  )
}
