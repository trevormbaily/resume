import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  BufferGeometry,
  CanvasTexture,
  Color,
  Float32BufferAttribute,
  SRGBColorSpace,
  type Group,
  type PerspectiveCamera,
  type Texture,
} from 'three'

const SLATE = '#14181f'
const GRID = '#2a3442'
const EMERALD = '#0b6e4f'

const TECH_LOGOS = [
  { slug: 'react', label: 'React' },
  { slug: 'typescript', label: 'TypeScript' },
  { slug: 'vite', label: 'Vite' },
  { slug: 'nextdotjs', label: 'Next.js' },
  { slug: 'tailwindcss', label: 'Tailwind' },
  { slug: 'threedotjs', label: 'Three.js' },
  { slug: 'vuedotjs', label: 'Vue' },
  { slug: 'dotnet', label: '.NET' },
  { slug: 'spring', label: 'Spring' },
  { slug: 'nodedotjs', label: 'Node.js' },
  { slug: 'kubernetes', label: 'Kubernetes' },
  { slug: 'openapiinitiative', label: 'OpenAPI' },
  { slug: 'github', label: 'GitHub' },
] as const

function useHeroVisible(element: HTMLElement | null) {
  const [inView, setInView] = useState(true)
  const [pageVisible, setPageVisible] = useState(
    () => typeof document === 'undefined' || document.visibilityState === 'visible',
  )

  useEffect(() => {
    if (!element) return

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 },
    )
    io.observe(element)

    const onVisibility = () => {
      setPageVisible(document.visibilityState === 'visible')
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [element])

  return inView && pageVisible
}

function seeded(n: number) {
  const x = Math.sin(n * 127.1) * 43758.5453
  return x - Math.floor(x)
}

function useLogoTextures(slugs: readonly string[]) {
  const [textures, setTextures] = useState<Record<string, Texture>>({})

  useEffect(() => {
    let cancelled = false
    const loaded: Record<string, Texture> = {}

    Promise.all(
      slugs.map(
        (slug) =>
          new Promise<void>((resolve) => {
            const img = new Image()
            img.decoding = 'async'
            img.onload = () => {
              const size = 256
              const canvas = document.createElement('canvas')
              canvas.width = size
              canvas.height = size
              const ctx = canvas.getContext('2d')
              if (!ctx) {
                resolve()
                return
              }
              ctx.clearRect(0, 0, size, size)
              const pad = 28
              ctx.drawImage(img, pad, pad, size - pad * 2, size - pad * 2)
              const texture = new CanvasTexture(canvas)
              texture.colorSpace = SRGBColorSpace
              texture.needsUpdate = true
              loaded[slug] = texture
              resolve()
            }
            img.onerror = () => resolve()
            img.src = `./logos/${slug}.svg`
          }),
      ),
    ).then(() => {
      if (!cancelled) setTextures(loaded)
    })

    return () => {
      cancelled = true
      Object.values(loaded).forEach((texture) => texture.dispose())
    }
  }, [slugs])

  return textures
}

function ChartFloor() {
  const positions = useMemo(() => {
    const lines: number[] = []
    for (let i = -10; i <= 10; i += 1) {
      lines.push(i, 0, -8, i, 0, 8)
    }
    for (let j = -8; j <= 8; j += 1) {
      lines.push(-10, 0, j, 10, 0, j)
    }
    return new Float32Array(lines)
  }, [])

  return (
    <lineSegments position={[0, -1.35, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color={GRID} transparent opacity={0.35} />
    </lineSegments>
  )
}

function PriceRibbon({ animate }: { animate: boolean }) {
  const geo = useMemo(() => new BufferGeometry(), [])
  const pointCount = 96

  useFrame((state) => {
    const t = animate ? state.clock.elapsedTime : 0
    const pts: number[] = []
    let y = 0.55
    for (let i = 0; i < pointCount; i += 1) {
      const x = -9 + (i / (pointCount - 1)) * 18
      const drift =
        Math.sin(i * 0.18 + t * 0.55) * 0.45 +
        Math.sin(i * 0.07 + t * 0.22) * 0.28 +
        seeded(i + 3) * 0.1
      y = y * 0.86 + drift * 0.42
      pts.push(x, y + 1.15, -0.35)
    }
    geo.setAttribute('position', new Float32BufferAttribute(pts, 3))
  })

  return (
    <line>
      <primitive object={geo} attach="geometry" />
      <lineBasicMaterial color={EMERALD} transparent opacity={0.75} />
    </line>
  )
}

function LogoCandles({
  animate,
  textures,
}: {
  animate: boolean
  textures: Record<string, Texture>
}) {
  const groupRef = useRef<Group>(null)

  const items = useMemo(() => {
    return TECH_LOGOS.map((logo, i) => {
      const height = 0.55 + seeded(i * 13.7) * 1.35
      return {
        ...logo,
        x: -8.2 + i * 1.28,
        height,
        phase: seeded(i * 4.2) * Math.PI * 2,
      }
    })
  }, [])

  useFrame((state) => {
    if (!groupRef.current || !animate) return
    const t = state.clock.elapsedTime
    groupRef.current.position.y = Math.sin(t * 0.35) * 0.04
    groupRef.current.children.forEach((child, i) => {
      const item = items[i]
      if (!item) return
      const bob = Math.sin(t * 0.9 + item.phase) * 0.06
      child.position.y = bob
      child.rotation.y = Math.sin(t * 0.45 + item.phase) * 0.15
    })
  })

  return (
    <group ref={groupRef} position={[0, -0.2, 0.55]}>
      {items.map((item) => {
        const texture = textures[item.slug]
        const stemH = item.height
        return (
          <group key={item.slug} position={[item.x, 0, 0]}>
            <mesh position={[0, stemH / 2 - 1.2, 0]}>
              <boxGeometry args={[0.08, stemH, 0.08]} />
              <meshBasicMaterial color={EMERALD} transparent opacity={0.35} />
            </mesh>
            <mesh position={[0, stemH - 0.85, 0.12]}>
              <planeGeometry args={[0.72, 0.72]} />
              {texture ? (
                <meshBasicMaterial map={texture} transparent depthWrite={false} />
              ) : (
                <meshBasicMaterial color={new Color(EMERALD)} transparent opacity={0.5} />
              )}
            </mesh>
            {/* back face so logos read from both sides while the scene drifts */}
            <mesh position={[0, stemH - 0.85, 0.11]} rotation={[0, Math.PI, 0]}>
              <planeGeometry args={[0.72, 0.72]} />
              {texture ? (
                <meshBasicMaterial map={texture} transparent depthWrite={false} />
              ) : (
                <meshBasicMaterial color={new Color(EMERALD)} transparent opacity={0.5} />
              )}
            </mesh>
          </group>
        )
      })}
    </group>
  )
}

function MarketScene({ animate }: { animate: boolean }) {
  const rootRef = useRef<Group>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const { camera, gl } = useThree()
  const slugs = useMemo(() => TECH_LOGOS.map((logo) => logo.slug), [])
  const textures = useLogoTextures(slugs)

  useEffect(() => {
    const el = gl.domElement
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1
      pointer.current.x = nx
      pointer.current.y = -ny
    }
    el.addEventListener('pointermove', onMove)
    return () => el.removeEventListener('pointermove', onMove)
  }, [gl])

  useFrame((state) => {
    const t = animate ? state.clock.elapsedTime : 0
    if (rootRef.current) {
      rootRef.current.rotation.y = Math.sin(t * 0.12) * 0.04
    }

    const cam = camera as PerspectiveCamera
    const targetX = pointer.current.x * 0.45
    const targetY = 2.4 + pointer.current.y * 0.28
    cam.position.x += (targetX - cam.position.x) * 0.045
    cam.position.y += (targetY - cam.position.y) * 0.045
    cam.lookAt(0, 0, 0)
  })

  return (
    <group ref={rootRef} rotation={[-0.38, 0.22, 0.04]} position={[0.4, 0.2, 0]}>
      <ChartFloor />
      <LogoCandles animate={animate} textures={textures} />
      <PriceRibbon animate={animate} />
    </group>
  )
}

function Scene({ animate }: { animate: boolean }) {
  return (
    <>
      <color attach="background" args={[SLATE]} />
      <fog attach="fog" args={[SLATE, 7, 22]} />
      <MarketScene animate={animate} />
    </>
  )
}

export function HeroCanvas() {
  const hostRef = useRef<HTMLDivElement>(null)
  const [host, setHost] = useState<HTMLDivElement | null>(null)
  const visible = useHeroVisible(host)

  useEffect(() => {
    setHost(hostRef.current)
  }, [])

  return (
    <div ref={hostRef} className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 2.6, 8.2], fov: 40, near: 0.1, far: 40 }}
        frameloop={visible ? 'always' : 'never'}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <Scene animate={visible} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14181f] via-[#14181f]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_50%_at_75%_28%,rgba(11,110,79,0.16),transparent_62%)]" />
    </div>
  )
}
