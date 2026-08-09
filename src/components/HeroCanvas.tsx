import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  type Group,
  type PerspectiveCamera,
} from 'three'

const SLATE = '#14181f'
const GRID = '#2a3442'
const EMERALD = '#0b6e4f'
const MUTED = '#5a6575'

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
    <lineSegments rotation={[0, 0, 0]} position={[0, -1.35, 0]}>
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
    let y = 0.35
    for (let i = 0; i < pointCount; i += 1) {
      const x = -9 + (i / (pointCount - 1)) * 18
      const drift =
        Math.sin(i * 0.18 + t * 0.55) * 0.55 +
        Math.sin(i * 0.07 + t * 0.22) * 0.35 +
        seeded(i + 3) * 0.12
      y = y * 0.86 + drift * 0.42
      pts.push(x, y, -0.2)
    }
    geo.setAttribute('position', new Float32BufferAttribute(pts, 3))
  })

  return (
    <line>
      <primitive object={geo} attach="geometry" />
      <lineBasicMaterial color={EMERALD} transparent opacity={0.9} />
    </line>
  )
}

type Candle = {
  x: number
  open: number
  close: number
  high: number
  low: number
  up: boolean
}

function Candlesticks({ animate }: { animate: boolean }) {
  const groupRef = useRef<Group>(null)

  const candles = useMemo<Candle[]>(() => {
    const list: Candle[] = []
    let price = 0.2
    for (let i = 0; i < 22; i += 1) {
      const open = price
      const delta = (seeded(i * 17.3) - 0.45) * 0.9
      const close = open + delta
      const high = Math.max(open, close) + seeded(i * 9.1) * 0.25
      const low = Math.min(open, close) - seeded(i * 5.7) * 0.25
      list.push({
        x: -8.5 + i * 0.78,
        open,
        close,
        high,
        low,
        up: close >= open,
      })
      price = close
    }
    return list
  }, [])

  useFrame((state) => {
    if (!groupRef.current || !animate) return
    const t = state.clock.elapsedTime
    groupRef.current.position.y = Math.sin(t * 0.35) * 0.04
  })

  return (
    <group ref={groupRef} position={[0, -0.15, 0.4]}>
      {candles.map((c) => {
        const bodyH = Math.max(0.08, Math.abs(c.close - c.open))
        const bodyY = (c.open + c.close) / 2
        const wickH = Math.max(0.08, c.high - c.low)
        const color = c.up ? EMERALD : MUTED
        return (
          <group key={c.x} position={[c.x, 0, 0]}>
            <mesh position={[0, (c.high + c.low) / 2, 0]}>
              <boxGeometry args={[0.035, wickH, 0.035]} />
              <meshBasicMaterial color={color} transparent opacity={0.55} />
            </mesh>
            <mesh position={[0, bodyY, 0.02]}>
              <boxGeometry args={[0.28, bodyH, 0.12]} />
              <meshBasicMaterial color={color} transparent opacity={0.78} />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}

function VolumeBars({ animate }: { animate: boolean }) {
  const bars = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      x: -9 + i * 0.65,
      h: 0.2 + seeded(i * 11.2) * 1.1,
      phase: seeded(i * 3.4) * Math.PI * 2,
    }))
  }, [])

  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (!groupRef.current || !animate) return
    const t = state.clock.elapsedTime
    groupRef.current.children.forEach((child, i) => {
      const bar = bars[i]
      if (!bar) return
      const scaleY = 0.55 + Math.sin(t * 0.7 + bar.phase) * 0.25
      child.scale.y = Math.max(0.2, bar.h * scaleY)
      child.position.y = -1.35 + child.scale.y / 2
    })
  })

  return (
    <group ref={groupRef}>
      {bars.map((bar) => (
        <mesh key={bar.x} position={[bar.x, -1.0, 1.2]}>
          <boxGeometry args={[0.28, 1, 0.28]} />
          <meshBasicMaterial color={new Color(EMERALD)} transparent opacity={0.18} />
        </mesh>
      ))}
    </group>
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
      <Candlesticks animate={animate} />
      <PriceRibbon animate={animate} />
      <VolumeBars animate={animate} />
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
