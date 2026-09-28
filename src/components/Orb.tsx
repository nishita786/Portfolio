import { useEffect, useRef } from 'react'
import './Orb.css'

type OrbProps = {
  hue?: number
  className?: string
}

export function Orb({ hue = 195, className = '' }: OrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0

    const resize = () => {
      const parent = canvas.parentElement
      w = parent?.clientWidth || 800
      h = parent?.clientHeight || 400
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (time: number) => {
      const t = time * 0.001
      ctx.clearRect(0, 0, w, h)

      const cx = w * 0.5
      const cy = h * 1.08
      const radius = Math.min(w * 0.42, h * 1.15)

      // soft atmospheric bloom
      const bloom = ctx.createRadialGradient(cx, cy - radius * 0.35, radius * 0.1, cx, cy, radius * 1.35)
      bloom.addColorStop(0, `hsla(${hue}, 90%, 70%, 0.35)`)
      bloom.addColorStop(0.45, `hsla(${hue}, 85%, 45%, 0.18)`)
      bloom.addColorStop(1, 'hsla(210, 80%, 10%, 0)')
      ctx.fillStyle = bloom
      ctx.fillRect(0, 0, w, h)

      // main body
      const body = ctx.createRadialGradient(
        cx - radius * 0.25,
        cy - radius * 0.55,
        radius * 0.05,
        cx,
        cy - radius * 0.1,
        radius,
      )
      body.addColorStop(0, `hsla(${hue}, 80%, 88%, 0.95)`)
      body.addColorStop(0.25, `hsla(${hue}, 85%, 62%, 0.9)`)
      body.addColorStop(0.55, `hsla(${hue + 8}, 75%, 32%, 0.95)`)
      body.addColorStop(0.85, `hsla(${hue + 20}, 70%, 12%, 1)`)
      body.addColorStop(1, `hsla(${hue + 25}, 60%, 6%, 1)`)

      ctx.beginPath()
      ctx.arc(cx, cy, radius, Math.PI, 0, false)
      ctx.fillStyle = body
      ctx.fill()

      // constellation arcs / meridian lines
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, radius, Math.PI, 0, false)
      ctx.clip()

      for (let i = 0; i < 7; i++) {
        const offset = ((t * 18 + i * 28) % 140) - 70
        ctx.beginPath()
        ctx.ellipse(
          cx + offset,
          cy - radius * 0.15,
          radius * 0.18,
          radius * 0.92,
          0,
          0,
          Math.PI * 2,
        )
        ctx.strokeStyle = `hsla(${hue}, 90%, 85%, ${0.08 + (i % 3) * 0.03})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // drifting luminous bands
      for (let i = 0; i < 4; i++) {
        const y = cy - radius * (0.85 - i * 0.18) + Math.sin(t * 0.8 + i) * 8
        const band = ctx.createLinearGradient(cx - radius, y, cx + radius, y)
        band.addColorStop(0, 'transparent')
        band.addColorStop(0.35, `hsla(${hue}, 95%, 80%, 0.08)`)
        band.addColorStop(0.5, `hsla(${hue - 10}, 100%, 90%, 0.18)`)
        band.addColorStop(0.65, `hsla(${hue}, 95%, 80%, 0.08)`)
        band.addColorStop(1, 'transparent')
        ctx.fillStyle = band
        ctx.fillRect(cx - radius, y, radius * 2, 14)
      }

      // spark points
      for (let i = 0; i < 28; i++) {
        const angle = (i / 28) * Math.PI + t * 0.15
        const rr = radius * (0.35 + ((i * 17) % 50) / 100)
        const x = cx + Math.cos(angle) * rr * (0.4 + (i % 5) * 0.12)
        const y = cy - Math.sin(angle * 1.3) * rr * 0.55 - radius * 0.25
        if (y > cy - radius && y < cy) {
          const pulse = 0.3 + Math.sin(t * 2 + i) * 0.3
          ctx.beginPath()
          ctx.fillStyle = `hsla(${hue}, 100%, 92%, ${pulse})`
          ctx.arc(x, y, 1.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.restore()

      // rim glow
      ctx.beginPath()
      ctx.arc(cx, cy, radius, Math.PI, 0, false)
      ctx.strokeStyle = `hsla(${hue}, 95%, 75%, 0.55)`
      ctx.lineWidth = 2.5
      ctx.shadowColor = `hsla(${hue}, 100%, 70%, 0.8)`
      ctx.shadowBlur = 28
      ctx.stroke()
      ctx.shadowBlur = 0

      // outer halo ring
      ctx.beginPath()
      ctx.arc(cx, cy, radius + 10 + Math.sin(t) * 2, Math.PI + 0.08, -0.08, false)
      ctx.strokeStyle = `hsla(${hue}, 90%, 70%, 0.2)`
      ctx.lineWidth = 1
      ctx.stroke()

      raf = requestAnimationFrame(draw)
    }

    resize()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [hue])

  return (
    <div className={`orb-stage ${className}`}>
      <canvas ref={canvasRef} className="orb-canvas" aria-hidden="true" />
      <div className="orb-haze" style={{ ['--orb-hue' as string]: String(hue) }} />
    </div>
  )
}
