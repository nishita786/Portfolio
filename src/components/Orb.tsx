type OrbProps = {
  size?: 'hero' | 'peek'
  className?: string
  /** Kept for carousel API compatibility; Earth stays photoreal */
  hue?: number
}

export function Orb({ size = 'hero', className = '' }: OrbProps) {
  return (
    <div className={`orb orb--${size} ${className}`} aria-hidden="true">
      <div className="orb-atmosphere" />
      <div className="orb-sphere">
        <div className="orb-texture" />
        <div className="orb-clouds" />
        <div className="orb-shade" />
        <div className="orb-specular" />
      </div>
      <div className="orb-halo" />
    </div>
  )
}
