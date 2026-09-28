type OrbProps = {
  size?: 'hero' | 'peek'
  className?: string
  hue?: number
  zooming?: boolean
  onLocationClick?: () => void
}

export function Orb({
  size = 'hero',
  className = '',
  zooming = false,
  onLocationClick,
}: OrbProps) {
  return (
    <div
      className={`orb orb--${size}${zooming ? ' is-zooming' : ''} ${className}`.trim()}
    >
      <div className="orb-atmosphere" aria-hidden="true" />
      <div className="orb-sphere" aria-hidden="true">
        <div className="orb-texture" />
        <div className="orb-clouds" />
        <div className="orb-shade" />
        <div className="orb-specular" />
      </div>
      <div className="orb-halo" aria-hidden="true" />

      {size === 'hero' ? (
        <button
          type="button"
          className="orb-location"
          onClick={onLocationClick}
          aria-label="Go to Overview from Karnataka, India"
        >
          <span className="orb-location-pulse" aria-hidden="true" />
          <span className="orb-location-pulse orb-location-pulse--delay" aria-hidden="true" />
          <span className="orb-location-marker" aria-hidden="true" />
          <span className="orb-location-hit" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  )
}
