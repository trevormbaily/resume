import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  BufferGeometry,
  Float32BufferAttribute,
  type Group,
  type PerspectiveCamera,
} from 'three'

const SLATE = '#14181f'
const GRID = '#2a3442'
const EMERALD = '#0b6e4f'

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
      pts.push(x, y + 0.85, -0.35)
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

function MarketScene({ animate }: { animate: boolean }) {
  const rootRef = useRef<Group>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const { camera, gl } = useThree()

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
    cam.lookAt(0, 0.2, 0)
  })

  return (
    <group ref={rootRef} rotation={[-0.28, 0.14, 0]} position={[0, 0.1, 0]}>
      <ChartFloor />
      <PriceRibbon animate={animate} />
    </group>
  )
}

function Scene({ animate }: { animate: boolean }) {
  return (
    <>
      <color attach="background" args={[SLATE]} />
      <fog attach="fog" args={[SLATE, 9, 26]} />
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
