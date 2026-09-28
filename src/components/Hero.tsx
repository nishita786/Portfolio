import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { heroRoles, heroSlides } from '../data/profile'
import { Orb } from './Orb'
import { Typewriter } from './Typewriter'
import './Hero.css'

const ease = [0.22, 1, 0.36, 1] as const

type HeroProps = {
  mouseX: number
  mouseY: number
}

export function Hero({ mouseX, mouseY }: HeroProps) {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(0)
  const [zooming, setZooming] = useState(false)
  const timers = useRef<number[]>([])
  const n = heroSlides.length
  const active = heroSlides[index]
  const prev = heroSlides[(index - 1 + n) % n]
  const next = heroSlides[(index + 1) % n]

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id))
    timers.current = []
  }

  useEffect(() => () => clearTimers(), [])

  const go = (nextIndex: number, direction: number) => {
    if (zooming) return
    setDir(direction)
    setIndex((nextIndex + n) % n)
  }

  const zoomToOverview = () => {
    if (zooming) return
    clearTimers()
    setZooming(true)

    const scrollId = window.setTimeout(() => {
      document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 520)

    const resetId = window.setTimeout(() => {
      setZooming(false)
    }, 1400)

    timers.current = [scrollId, resetId]
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setDir(-1)
        setIndex((i) => (i - 1 + n) % n)
      }
      if (e.key === 'ArrowRight') {
        setDir(1)
        setIndex((i) => (i + 1) % n)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [n])

  return (
    <section className={`hero${zooming ? ' is-zooming' : ''}`} id="home">
      <motion.div
        className={`hero-content${zooming ? ' is-zooming' : ''}`}
        animate={zooming ? { opacity: 0, scale: 0.92, y: -12 } : { x: mouseX * -12, y: mouseY * -8, opacity: 1, scale: 1 }}
        transition={
          zooming
            ? { duration: 0.45, ease }
            : { type: 'spring', stiffness: 80, damping: 20 }
        }
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={active.id}
            className={`hero-copy${active.intro ? ' hero-copy--intro' : ''}`}
            custom={dir}
            initial={{ opacity: 0, filter: 'blur(14px)', y: 10 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, filter: 'blur(12px)', y: -6 }}
            transition={{ duration: 0.55, ease }}
          >
            {active.intro ? (
              <>
                <h1 className="hero-title hero-title--intro">{active.title}</h1>
                <p className="hero-role" aria-live="polite">
                  <Typewriter phrases={heroRoles} />
                </p>
              </>
            ) : (
              <>
                <p className="hero-label">{active.label}</p>
                <h1 className="hero-title">{active.title}</h1>
                <div className="hero-rule" aria-hidden="true" />
                <p className="hero-desc">{active.description}</p>
                <a className="hero-cta" href={active.target}>
                  {active.cta}
                </a>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <button
        type="button"
        className="hero-nav hero-nav--left"
        onClick={() => go(index - 1, -1)}
        aria-label={`Previous: ${prev.peek}`}
        disabled={zooming}
      >
        <span aria-hidden="true">‹</span>
        <span className="hero-nav-label">{prev.peek}</span>
      </button>

      <button
        type="button"
        className="hero-nav hero-nav--right"
        onClick={() => go(index + 1, 1)}
        aria-label={`Next: ${next.peek}`}
        disabled={zooming}
      >
        <span className="hero-nav-label">{next.peek}</span>
        <span aria-hidden="true">›</span>
      </button>

      <motion.div
        className={`hero-stage${zooming ? ' is-zooming' : ''}`}
        animate={
          zooming
            ? { scale: 4.2, opacity: 0, x: 0, y: 40 }
            : { x: mouseX * 22, y: mouseY * 14, scale: 1, opacity: 1 }
        }
        style={{ transformOrigin: '51.5% 54%' }}
        transition={
          zooming
            ? { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
            : { type: 'spring', stiffness: 60, damping: 18 }
        }
      >
        <div className="hero-orb-wrap">
          <Orb size="hero" zooming={zooming} onLocationClick={zoomToOverview} />
        </div>
      </motion.div>

      <AnimatePresence>
        {zooming ? (
          <motion.div
            className="hero-zoom-veil"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: [0, 0.55, 0], scale: [0.7, 1.35, 1.8] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />
        ) : null}
      </AnimatePresence>

      <a className="hero-scroll" href="#overview" aria-label="Scroll to overview">
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}
