import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { heroRoles, heroSlides } from '../data/profile'
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
  const n = heroSlides.length
  const active = heroSlides[index]
  const prev = heroSlides[(index - 1 + n) % n]
  const next = heroSlides[(index + 1) % n]

  const go = (nextIndex: number, direction: number) => {
    setDir(direction)
    setIndex((nextIndex + n) % n)
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
    <section className="hero" id="home">
      <div className="hero-tech" aria-hidden="true">
        <div className="hero-tech-grid" />
        <svg className="hero-tech-net" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
          <g className="hero-tech-links">
            <path d="M120 120 L260 180 L420 110 L560 200 L680 140" />
            <path d="M180 320 L300 250 L460 300 L620 240 L700 340" />
            <path d="M260 180 L300 250 L420 110 L460 300 L560 200" />
            <path d="M120 120 L180 320" />
            <path d="M680 140 L700 340" />
          </g>
          <g className="hero-tech-nodes">
            <circle cx="120" cy="120" r="3.5" />
            <circle cx="260" cy="180" r="4.5" />
            <circle cx="420" cy="110" r="3.5" />
            <circle cx="560" cy="200" r="5" />
            <circle cx="680" cy="140" r="3.5" />
            <circle cx="180" cy="320" r="3.5" />
            <circle cx="300" cy="250" r="4" />
            <circle cx="460" cy="300" r="4.5" />
            <circle cx="620" cy="240" r="3.5" />
            <circle cx="700" cy="340" r="4" />
          </g>
        </svg>
      </div>

      <motion.div
        className="hero-content"
        animate={{ x: mouseX * -10, y: mouseY * -6 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
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
      >
        <span aria-hidden="true">‹</span>
        <span className="hero-nav-label">{prev.peek}</span>
      </button>

      <button
        type="button"
        className="hero-nav hero-nav--right"
        onClick={() => go(index + 1, 1)}
        aria-label={`Next: ${next.peek}`}
      >
        <span className="hero-nav-label">{next.peek}</span>
        <span aria-hidden="true">›</span>
      </button>

      <a className="hero-scroll" href="#overview" aria-label="Scroll to overview">
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}
