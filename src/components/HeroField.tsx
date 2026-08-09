import { Suspense, lazy, useEffect, useState } from 'react'

const HeroCanvas = lazy(() =>
  import('./HeroCanvas').then((mod) => ({ default: mod.HeroCanvas })),
)

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

  if (!ready || reducedMotion) {
    return <StaticField />
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Suspense fallback={<StaticField />}>
        <HeroCanvas />
      </Suspense>
    </div>
  )
}
