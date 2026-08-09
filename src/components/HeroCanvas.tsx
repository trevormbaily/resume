import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  BufferAttribute,
  Color,
  type Group,
  type Mesh,
  type PerspectiveCamera,
} from 'three'

const SLATE = '#14181f'
const WIRE = '#3a4656'
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

function Terrain({ animate }: { animate: boolean }) {
  const primaryRef = useRef<Mesh>(null)
  const accentRef = useRef<Mesh>(null)
  const groupRef = useRef<Group>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const { camera, gl } = useThree()

  const geometryArgs = useMemo(() => [28, 18, 56, 36] as const, [])

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
    const meshes = [primaryRef.current, accentRef.current]

    for (const mesh of meshes) {
      if (!mesh) continue
      const positions = mesh.geometry.getAttribute('position') as BufferAttribute
      const count = positions.count
      for (let i = 0; i < count; i += 1) {
        const x = positions.getX(i)
        const y = positions.getY(i)
        const wave =
          Math.sin(x * 0.38 + t * 0.32) * 0.42 +
          Math.cos(y * 0.3 + t * 0.22) * 0.32 +
          Math.sin((x + y) * 0.18 + t * 0.18) * 0.18
        positions.setZ(i, wave)
      }
      positions.needsUpdate = true
    }

    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(t * 0.08) * 0.03
    }

    const cam = camera as PerspectiveCamera
    const targetX = pointer.current.x * 0.55
    const targetY = 3.1 + pointer.current.y * 0.35
    cam.position.x += (targetX - cam.position.x) * 0.04
    cam.position.y += (targetY - cam.position.y) * 0.04
    cam.lookAt(0, 0, 0)
  })

  return (
    <group ref={groupRef} rotation={[-0.72, 0.18, 0.08]} position={[0, -1.1, 0]}>
      <mesh ref={primaryRef}>
        <planeGeometry args={[...geometryArgs]} />
        <meshBasicMaterial color={new Color(WIRE)} wireframe transparent opacity={0.42} />
      </mesh>
      <mesh ref={accentRef} position={[0, 0, 0.02]} scale={[0.72, 0.72, 1]}>
        <planeGeometry args={[20, 12, 28, 18]} />
        <meshBasicMaterial
          color={new Color(EMERALD)}
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>
      <HorizonLines />
    </group>
  )
}

function HorizonLines() {
  const positions = useMemo(() => {
    const lines: number[] = []
    for (let i = 0; i < 6; i += 1) {
      const y = -2 + i * 1.15
      const depth = -4 - i * 0.35
      lines.push(-16, y, depth, 16, y, depth)
    }
    return new Float32Array(lines)
  }, [])

  return (
    <lineSegments position={[0, 0, -0.4]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial color={EMERALD} transparent opacity={0.22} />
    </lineSegments>
  )
}

function Scene({ animate }: { animate: boolean }) {
  return (
    <>
      <color attach="background" args={[SLATE]} />
      <fog attach="fog" args={[SLATE, 8, 26]} />
      <Terrain animate={animate} />
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
        camera={{ position: [0, 3.2, 7.5], fov: 42, near: 0.1, far: 40 }}
        frameloop={visible ? 'always' : 'never'}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <Scene animate={visible} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14181f] via-[#14181f]/35 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_70%_30%,rgba(11,110,79,0.18),transparent_60%)]" />
    </div>
  )
}
