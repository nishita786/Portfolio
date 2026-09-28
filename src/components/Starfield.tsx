import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  z: number
  r: number
  a: number
  tw: number
}

type StarfieldProps = {
  mouseX: number
  mouseY: number
}

export function Starfield({ mouseX, mouseY }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    mouse.current = { x: mouseX, y: mouseY }
  }, [mouseX, mouseY])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let stars: Star[] = []
    let raf = 0
    let w = 0
    let h = 0

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      const count = Math.min(220, Math.floor((w * h) / 9000))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random(),
        r: Math.random() * 1.4 + 0.2,
        a: Math.random() * 0.7 + 0.2,
        tw: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      const px = mouse.current.x * 18
      const py = mouse.current.y * 12

      for (const s of stars) {
        const depth = 0.25 + s.z * 0.75
        const x = s.x + px * depth
        const y = s.y + py * depth
        const twinkle = 0.55 + 0.45 * Math.sin(t * 0.0012 + s.tw)
        ctx.beginPath()
        ctx.fillStyle = `rgba(235, 220, 190, ${s.a * twinkle})`
        ctx.arc(x, y, s.r * depth, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas className="starfield" ref={canvasRef} aria-hidden="true" />
}
