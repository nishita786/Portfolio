import type { CSSProperties } from 'react'

type OrbProps = {
  hue: number
  size?: 'hero' | 'peek'
  className?: string
}

export function Orb({ hue, size = 'hero', className = '' }: OrbProps) {
  return (
    <div
      className={`orb orb--${size} ${className}`}
      style={{ '--orb-hue': hue } as CSSProperties}
      aria-hidden="true"
    >
      <div className="orb-glow" />
      <div className="orb-core">
        <div className="orb-shine" />
        <div className="orb-ring orb-ring--a" />
        <div className="orb-ring orb-ring--b" />
        <div className="orb-mesh" />
      </div>
    </div>
  )
}
