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

        <div className="hero-thought">
          <svg className="hero-thought-svg" viewBox="0 0 1000 420" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(110,168,254,0)" />
                <stop offset="45%" stopColor="rgba(238,243,251,0.95)" />
                <stop offset="100%" stopColor="rgba(110,168,254,0)" />
              </linearGradient>
            </defs>

            <g className="hero-thought-links">
              <path d="M90 80 L210 160" />
              <path d="M70 210 L210 160" />
              <path d="M110 300 L210 160" />
              <path className="is-main" d="M210 160 L390 210 L570 210 L750 210 L910 210" />
              <path d="M390 210 L390 320" />
              <path d="M570 210 L570 100" />
              <path d="M750 210 L750 320" />
            </g>

            <g className="hero-thought-packets">
              <circle r="3.5" fill="url(#flow)">
                <animateMotion
                  dur="5s"
                  repeatCount="indefinite"
                  path="M210 160 L390 210 L570 210 L750 210 L910 210"
                />
              </circle>
              <circle r="2.5" fill="url(#flow)">
                <animateMotion
                  dur="6.2s"
                  begin="1.4s"
                  repeatCount="indefinite"
                  path="M90 80 L210 160 L390 210"
                />
              </circle>
              <circle r="2.5" fill="url(#flow)">
                <animateMotion
                  dur="5.6s"
                  begin="0.8s"
                  repeatCount="indefinite"
                  path="M110 300 L210 160 L390 210 L570 210"
                />
              </circle>
            </g>

            <g className="hero-thought-nodes">
              <circle className="is-seed" cx="90" cy="80" r="4" />
              <circle className="is-seed" cx="70" cy="210" r="3.5" />
              <circle className="is-seed" cx="110" cy="300" r="4" />
              <circle className="is-hot" cx="210" cy="160" r="7" />
              <circle className="is-hot" cx="390" cy="210" r="8" />
              <circle className="is-hot" cx="570" cy="210" r="8" />
              <circle className="is-hot" cx="750" cy="210" r="8" />
              <circle className="is-core" cx="910" cy="210" r="10" />
              <circle cx="390" cy="320" r="4" />
              <circle cx="570" cy="100" r="4" />
              <circle cx="750" cy="320" r="4" />
            </g>

            <g className="hero-thought-rings">
              <circle cx="210" cy="160" r="20" />
              <circle cx="570" cy="210" r="24" />
              <circle cx="910" cy="210" r="28" />
            </g>
          </svg>

          <div className="hero-thought-labels">
            <span style={{ left: '8%', top: '12%' }}>curiosity</span>
            <span style={{ left: '4%', top: '46%' }}>questions</span>
            <span style={{ left: '8%', top: '72%' }}>signals</span>
            <span className="is-strong" style={{ left: '18%', top: '28%' }}>
              thought
            </span>
            <span className="is-strong" style={{ left: '34%', top: '40%' }}>
              data
            </span>
            <span className="is-strong" style={{ left: '51%', top: '40%' }}>
              model
            </span>
            <span className="is-strong" style={{ left: '68%', top: '40%' }}>
              system
            </span>
            <span className="is-core" style={{ left: '84%', top: '38%' }}>
              insight
            </span>
            <span style={{ left: '34%', top: '74%' }}>clean</span>
            <span style={{ left: '51%', top: '14%' }}>learn</span>
            <span style={{ left: '68%', top: '74%' }}>ship</span>
          </div>
        </div>
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
