export default function WaveBackground() {
  return (
    <svg
      className="fixed inset-0 pointer-events-none w-full h-full"
      viewBox="0 0 1200 2400"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Top waves - Hero section */}
      <path
        d="M 0 150 Q 300 100, 600 150 T 1200 150"
        stroke="#a855f7"
        strokeWidth="20"
        fill="none"
        opacity="0.6"
        filter="url(#glow)"
        strokeLinecap="round"
      />
      <path
        d="M 0 250 Q 300 200, 600 250 T 1200 250"
        stroke="#a855f7"
        strokeWidth="16"
        fill="none"
        opacity="0.5"
        filter="url(#glow)"
        strokeLinecap="round"
      />
      <path
        d="M 0 320 Q 300 280, 600 320 T 1200 320"
        stroke="#a855f7"
        strokeWidth="12"
        fill="none"
        opacity="0.4"
        filter="url(#glow)"
        strokeLinecap="round"
      />

      {/* Middle waves - Servicios section */}
      <path
        d="M 0 700 Q 300 650, 600 700 T 1200 700"
        stroke="#a855f7"
        strokeWidth="18"
        fill="none"
        opacity="0.55"
        filter="url(#glow)"
        strokeLinecap="round"
      />
      <path
        d="M 0 800 Q 300 750, 600 800 T 1200 800"
        stroke="#a855f7"
        strokeWidth="14"
        fill="none"
        opacity="0.45"
        filter="url(#glow)"
        strokeLinecap="round"
      />

      {/* Bottom waves - Footer section */}
      <path
        d="M 0 2200 Q 300 2150, 600 2200 T 1200 2200"
        stroke="#a855f7"
        strokeWidth="20"
        fill="none"
        opacity="0.5"
        filter="url(#glow)"
        strokeLinecap="round"
      />
      <path
        d="M 0 2300 Q 300 2250, 600 2300 T 1200 2300"
        stroke="#a855f7"
        strokeWidth="16"
        fill="none"
        opacity="0.4"
        filter="url(#glow)"
        strokeLinecap="round"
      />
    </svg>
  )
}
