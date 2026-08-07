export function HeroField() {
  return (
    <svg
      className="absolute inset-0 size-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="beam-amber" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e85d04" stopOpacity="0" />
          <stop offset="45%" stopColor="#e85d04" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="beam-tide" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
          <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="glow-amber" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fb923c" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#e85d04" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#e85d04" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow-tide" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5eead4" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wash" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0b3a4a" stopOpacity="0.35" />
          <stop offset="55%" stopColor="#1a2744" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#3b1d0f" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#wash)" />

      {/* Soft diagonal color planes */}
      <g className="opacity-40">
        <path
          d="M-80 720 L520 -40 L760 -40 L120 900 Z"
          fill="#0d9488"
          opacity="0.18"
        />
        <path
          d="M900 -60 L1600 280 L1600 520 L1100 900 L720 900 Z"
          fill="#e85d04"
          opacity="0.14"
        />
      </g>

      {/* Perspective grid — denser near the horizon line */}
      <g stroke="rgba(244,247,250,0.1)" strokeWidth="1">
        {Array.from({ length: 14 }, (_, i) => {
          const y = 180 + i * i * 3.2
          return <path key={`h-${i}`} d={`M0 ${y} H1440`} />
        })}
        {Array.from({ length: 20 }, (_, i) => {
          const x = i * 80 - 80
          return <path key={`v-${i}`} d={`M720 160 L${x} 900`} opacity={0.55} />
        })}
      </g>

      {/* Orbiting signal arcs */}
      <g className="origin-[62%_42%] animate-[orbit-drift_20s_ease-in-out_infinite_alternate]">
        <path
          d="M220 680 C480 360, 820 220, 1320 260"
          fill="none"
          stroke="url(#beam-amber)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M160 240 C520 300, 860 560, 1340 700"
          fill="none"
          stroke="url(#beam-tide)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle
          className="animate-[pulse-glow_5s_ease-in-out_infinite]"
          cx="1040"
          cy="290"
          r="70"
          fill="url(#glow-amber)"
        />
        <circle
          className="animate-[pulse-glow_6s_ease-in-out_infinite_reverse]"
          cx="420"
          cy="520"
          r="48"
          fill="url(#glow-tide)"
        />
        <circle cx="1040" cy="290" r="6" fill="#ffd089" />
        <circle cx="420" cy="520" r="5" fill="#99f6e4" />
        <circle cx="760" cy="400" r="3.5" fill="#f8fafc" opacity="0.85" />
        <circle cx="1180" cy="480" r="3" fill="#7dd3fc" opacity="0.7" />
      </g>
    </svg>
  )
}
