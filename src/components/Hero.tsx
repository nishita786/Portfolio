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
        <div className="hero-tech-glow" />
        <div className="hero-tech-grid" />
        <div className="hero-tech-floor" />
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
                <p className="hero-thesis">
                  Turning scattered thoughts into systems that learn, decide, and ship.
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

      <div className="hero-thought" aria-hidden="true">
        <svg className="hero-thought-svg" viewBox="0 0 1000 360" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(110,168,254,0)" />
              <stop offset="45%" stopColor="rgba(238,243,251,0.95)" />
              <stop offset="100%" stopColor="rgba(110,168,254,0)" />
            </linearGradient>
          </defs>

          <g className="hero-thought-links">
            <path d="M90 70 L220 180" />
            <path d="M90 180 L220 180" />
            <path d="M90 290 L220 180" />
            <path className="is-main" d="M220 180 L390 180 L560 180 L730 180 L900 180" />
            <path d="M390 180 L390 280" />
            <path d="M560 180 L560 80" />
            <path d="M730 180 L730 280" />
          </g>

          <g className="hero-thought-packets">
            <circle r="3.5" fill="url(#flow)">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path="M220 180 L390 180 L560 180 L730 180 L900 180"
              />
            </circle>
            <circle r="2.5" fill="url(#flow)">
              <animateMotion
                dur="6s"
                begin="1.2s"
                repeatCount="indefinite"
                path="M90 70 L220 180 L390 180"
              />
            </circle>
            <circle r="2.5" fill="url(#flow)">
              <animateMotion
                dur="5.4s"
                begin="0.7s"
                repeatCount="indefinite"
                path="M90 290 L220 180 L390 180 L560 180"
              />
            </circle>
          </g>

          <g className="hero-thought-nodes">
            <circle className="is-seed" cx="90" cy="70" r="4" />
            <circle className="is-seed" cx="90" cy="180" r="3.5" />
            <circle className="is-seed" cx="90" cy="290" r="4" />
            <circle className="is-hot" cx="220" cy="180" r="7" />
            <circle className="is-hot" cx="390" cy="180" r="8" />
            <circle className="is-hot" cx="560" cy="180" r="8" />
            <circle className="is-hot" cx="730" cy="180" r="8" />
            <circle className="is-core" cx="900" cy="180" r="10" />
            <circle cx="390" cy="280" r="4" />
            <circle cx="560" cy="80" r="4" />
            <circle cx="730" cy="280" r="4" />
          </g>

          <g className="hero-thought-rings">
            <circle cx="220" cy="180" r="18" />
            <circle cx="560" cy="180" r="22" />
            <circle cx="900" cy="180" r="26" />
          </g>

          <g className="hero-thought-text">
            <text x="90" y="52" textAnchor="middle">
              curiosity
            </text>
            <text x="90" y="162" textAnchor="middle">
              questions
            </text>
            <text x="90" y="272" textAnchor="middle">
              signals
            </text>
            <text className="is-strong" x="220" y="218" textAnchor="middle">
              thought
            </text>
            <text className="is-strong" x="390" y="218" textAnchor="middle">
              data
            </text>
            <text className="is-strong" x="560" y="218" textAnchor="middle">
              model
            </text>
            <text className="is-strong" x="730" y="218" textAnchor="middle">
              system
            </text>
            <text className="is-core" x="900" y="218" textAnchor="middle">
              insight
            </text>
            <text x="390" y="308" textAnchor="middle">
              clean
            </text>
            <text x="560" y="64" textAnchor="middle">
              learn
            </text>
            <text x="730" y="308" textAnchor="middle">
              ship
            </text>
          </g>
        </svg>
      </div>

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
