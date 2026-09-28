type OrbProps = {
  size?: 'hero' | 'peek'
  className?: string
  hue?: number
}

export function Orb({ size = 'hero', className = '' }: OrbProps) {
  return (
    <div className={`orb orb--${size} ${className}`}>
      <div className="orb-atmosphere" aria-hidden="true" />
      <div className="orb-sphere" aria-hidden="true">
        <div className="orb-texture" />
        <div className="orb-clouds" />
        <div className="orb-shade" />
        <div className="orb-specular" />
      </div>
      <div className="orb-halo" aria-hidden="true" />

      {size === 'hero' ? (
        <div
          className="orb-location"
          role="img"
          aria-label="Location pin on Karnataka, India"
        >
          <span className="orb-location-pulse" aria-hidden="true" />
          <span className="orb-location-pulse orb-location-pulse--delay" aria-hidden="true" />
          <span className="orb-location-marker" aria-hidden="true" />
        </div>
      ) : null}
    </div>
  )
}
