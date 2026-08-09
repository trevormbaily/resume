import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  BufferGeometry,
  DoubleSide,
  Float32BufferAttribute,
  type Group,
  type PerspectiveCamera,
  SRGBColorSpace,
  Texture,
  TextureLoader,
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

function logoUrl(slug: string) {
  return new URL(`logos/${slug}.png`, window.location.href).href
}

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

function useLogoTextures() {
  const [textures, setTextures] = useState<(Texture | null)[]>(
    () => TECH_LOGOS.map(() => null),
  )

  useEffect(() => {
    const loader = new TextureLoader()
    let cancelled = false
    const next: (Texture | null)[] = TECH_LOGOS.map(() => null)

    TECH_LOGOS.forEach((logo, index) => {
      loader.load(
        logoUrl(logo.slug),
        (texture) => {
          if (cancelled) {
            texture.dispose()
            return
          }
          texture.colorSpace = SRGBColorSpace
          texture.needsUpdate = true
          next[index] = texture
          setTextures([...next])
        },
        undefined,
        () => {
          if (!cancelled) {
            next[index] = null
            setTextures([...next])
          }
        },
      )
    })

    return () => {
      cancelled = true
      next.forEach((texture) => texture?.dispose())
    }
  }, [])

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
      pts.push(x, y + 1.35, -0.55)
    }
    geo.setAttribute('position', new Float32BufferAttribute(pts, 3))
  })

  return (
    <line>
      <primitive object={geo} attach="geometry" />
      <lineBasicMaterial color={EMERALD} transparent opacity={0.7} />
    </line>
  )
}

function LogoPillar({
  index,
  animate,
  texture,
}: {
  index: number
  animate: boolean
  texture: Texture | null
}) {
  const groupRef = useRef<Group>(null)

  const count = TECH_LOGOS.length
  const spacing = 1.05
  const height = 0.85 + seeded(index * 13.7) * 1.1
  const x = -((count - 1) * spacing) / 2 + index * spacing
  const phase = seeded(index * 4.2) * Math.PI * 2

  useFrame((state) => {
    if (!groupRef.current) return
    const t = animate ? state.clock.elapsedTime : 0
    groupRef.current.position.y = Math.sin(t * 0.9 + phase) * 0.05
  })

  return (
    <group ref={groupRef} position={[x, -0.2, 0.45]}>
      <mesh position={[0, height / 2, 0]}>
        <boxGeometry args={[0.12, height, 0.12]} />
        <meshBasicMaterial color={EMERALD} transparent opacity={0.45} toneMapped={false} />
      </mesh>

      <group position={[0, height + 0.28, 0.08]}>
        <mesh position={[0, 0, -0.02]}>
          <circleGeometry args={[0.52, 32]} />
          <meshBasicMaterial color="#101821" transparent opacity={0.96} toneMapped={false} />
        </mesh>
        <mesh>
          <planeGeometry args={[0.82, 0.82]} />
          {texture ? (
            <meshBasicMaterial
              map={texture}
              transparent
              depthWrite={false}
              toneMapped={false}
              side={DoubleSide}
            />
          ) : (
            <meshBasicMaterial
              color={EMERALD}
              transparent
              opacity={0.55}
              toneMapped={false}
              side={DoubleSide}
            />
          )}
        </mesh>
      </group>
    </group>
  )
}

function LogoCandles({
  animate,
  textures,
}: {
  animate: boolean
  textures: (Texture | null)[]
}) {
  return (
    <group>
      {TECH_LOGOS.map((logo, index) => (
        <LogoPillar
          key={logo.slug}
          index={index}
          animate={animate}
          texture={textures[index] ?? null}
        />
      ))}
    </group>
  )
}

function MarketScene({ animate }: { animate: boolean }) {
  const rootRef = useRef<Group>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const { camera, gl } = useThree()
  const textures = useLogoTextures()

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
      rootRef.current.rotation.y = Math.sin(t * 0.12) * 0.03
    }

    const cam = camera as PerspectiveCamera
    const targetX = pointer.current.x * 0.35
    const targetY = 2.2 + pointer.current.y * 0.22
    cam.position.x += (targetX - cam.position.x) * 0.045
    cam.position.y += (targetY - cam.position.y) * 0.045
    cam.lookAt(0, 0.4, 0)
  })

  return (
    <group ref={rootRef} position={[0, 0.2, 0]}>
      <group rotation={[-0.18, 0.08, 0]}>
        <ChartFloor />
        <PriceRibbon animate={animate} />
      </group>
      <LogoCandles animate={animate} textures={textures} />
    </group>
  )
}

function Scene({ animate }: { animate: boolean }) {
  return (
    <>
      <color attach="background" args={[SLATE]} />
      <fog attach="fog" args={[SLATE, 10, 28]} />
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
        camera={{ position: [0, 2.4, 7.6], fov: 40, near: 0.1, far: 40 }}
        frameloop={visible ? 'always' : 'never'}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <Scene animate={visible} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14181f] via-[#14181f]/35 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_50%_at_75%_28%,rgba(11,110,79,0.16),transparent_62%)]" />
    </div>
  )
}
