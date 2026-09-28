import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { heroRoles, heroSlides } from '../data/profile'
import { Orb } from './Orb'
import { Typewriter } from './Typewriter'
import './Hero.css'

const ease = [0.22, 1, 0.36, 1] as const
const INTRO_INDEX = Math.max(
  0,
  heroSlides.findIndex((s) => s.intro),
)

type HeroProps = {
  mouseX: number
  mouseY: number
}

export function Hero({ mouseX, mouseY }: HeroProps) {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(0)
  const [phase, setPhase] = useState<'idle' | 'greeting' | 'zooming'>('idle')
  const timers = useRef<number[]>([])
  const n = heroSlides.length
  const active = heroSlides[index]
  const prev = heroSlides[(index - 1 + n) % n]
  const next = heroSlides[(index + 1) % n]
  const busy = phase !== 'idle'

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id))
    timers.current = []
  }

  useEffect(() => () => clearTimers(), [])

  const go = (nextIndex: number, direction: number) => {
    if (busy) return
    setDir(direction)
    setIndex((nextIndex + n) % n)
  }

  const openFromPin = () => {
    if (busy) return
    clearTimers()

    // 1) Land on "Hi, I'm Nishita"
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (index !== INTRO_INDEX) {
      setDir(index > INTRO_INDEX ? -1 : 1)
      setIndex(INTRO_INDEX)
    }
    setPhase('greeting')

    // 2) Hold the greeting, then zoop into Overview
    const zoomId = window.setTimeout(() => {
      setPhase('zooming')
    }, 1100)

    const scrollId = window.setTimeout(() => {
      document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 1650)

    const resetId = window.setTimeout(() => {
      setPhase('idle')
    }, 2600)

    timers.current = [zoomId, scrollId, resetId]
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (busy) return
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
  }, [n, busy])

  const zooming = phase === 'zooming'
  const greeting = phase === 'greeting'

  return (
    <section
      className={`hero${greeting ? ' is-greeting' : ''}${zooming ? ' is-zooming' : ''}`}
      id="home"
    >
      <motion.div
        className={`hero-content${greeting ? ' is-greeting' : ''}${zooming ? ' is-zooming' : ''}`}
        animate={
          zooming
            ? { opacity: 0, scale: 1.18, y: -28, filter: 'blur(8px)' }
            : greeting
              ? { opacity: 1, scale: 1.06, y: -18, x: 0 }
              : { x: mouseX * -12, y: mouseY * -8, opacity: 1, scale: 1, filter: 'blur(0px)' }
        }
        transition={
          zooming || greeting
            ? { duration: zooming ? 0.55 : 0.65, ease }
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
        disabled={busy}
      >
        <span aria-hidden="true">‹</span>
        <span className="hero-nav-label">{prev.peek}</span>
      </button>

      <button
        type="button"
        className="hero-nav hero-nav--right"
        onClick={() => go(index + 1, 1)}
        aria-label={`Next: ${next.peek}`}
        disabled={busy}
      >
        <span className="hero-nav-label">{next.peek}</span>
        <span aria-hidden="true">›</span>
      </button>

      <motion.div
        className={`hero-stage${greeting ? ' is-greeting' : ''}${zooming ? ' is-zooming' : ''}`}
        animate={
          zooming
            ? { scale: 4.2, opacity: 0, x: 0, y: 40 }
            : greeting
              ? { scale: 0.92, opacity: 0.72, x: 0, y: 18 }
              : { x: mouseX * 22, y: mouseY * 14, scale: 1, opacity: 1 }
        }
        style={{ transformOrigin: '51.5% 54%' }}
        transition={
          zooming || greeting
            ? { duration: zooming ? 0.85 : 0.65, ease: [0.16, 1, 0.3, 1] }
            : { type: 'spring', stiffness: 60, damping: 18 }
        }
      >
        <div className="hero-orb-wrap">
          <Orb size="hero" zooming={zooming} onLocationClick={openFromPin} />
        </div>
      </motion.div>

      <AnimatePresence>
        {greeting ? (
          <motion.div
            className="hero-greeting-veil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            aria-hidden="true"
          />
        ) : null}
      </AnimatePresence>

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
