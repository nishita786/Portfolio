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
        <svg className="hero-tech-net hero-tech-net--back" viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice">
          <g className="hero-tech-links hero-tech-links--faint">
            <path d="M40 80 L180 160 L340 60 L520 150 L720 40 L860 130" />
            <path d="M60 420 L220 340 L400 430 L600 320 L780 410 L880 300" />
            <path d="M180 160 L220 340 L340 60 L400 430 L520 150 L600 320" />
          </g>
        </svg>
        <svg className="hero-tech-net" viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="packet" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(110,168,254,0)" />
              <stop offset="50%" stopColor="rgba(238,243,251,0.95)" />
              <stop offset="100%" stopColor="rgba(110,168,254,0)" />
            </linearGradient>
          </defs>
          <g className="hero-tech-links">
            <path id="link-a" d="M110 140 L250 210 L410 120 L570 230 L760 150" />
            <path id="link-b" d="M150 390 L290 300 L470 360 L650 280 L820 370" />
            <path d="M250 210 L290 300 L410 120 L470 360 L570 230" />
            <path d="M110 140 L150 390" />
            <path d="M760 150 L820 370" />
            <path d="M410 120 L470 360" />
          </g>
          <g className="hero-tech-packets">
            <circle r="3.5" fill="url(#packet)">
              <animateMotion dur="4.5s" repeatCount="indefinite" path="M110 140 L250 210 L410 120 L570 230 L760 150" />
            </circle>
            <circle r="3" fill="url(#packet)">
              <animateMotion dur="5.8s" begin="1.2s" repeatCount="indefinite" path="M150 390 L290 300 L470 360 L650 280 L820 370" />
            </circle>
            <circle r="2.5" fill="url(#packet)">
              <animateMotion dur="3.8s" begin="0.6s" repeatCount="indefinite" path="M250 210 L290 300 L410 120 L470 360 L570 230" />
            </circle>
          </g>
          <g className="hero-tech-nodes">
            <circle cx="110" cy="140" r="3.5" />
            <circle cx="250" cy="210" r="5" className="is-hot" />
            <circle cx="410" cy="120" r="3.5" />
            <circle cx="570" cy="230" r="5.5" className="is-hot" />
            <circle cx="760" cy="150" r="3.5" />
            <circle cx="150" cy="390" r="3.5" />
            <circle cx="290" cy="300" r="4.5" className="is-hot" />
            <circle cx="470" cy="360" r="4" />
            <circle cx="650" cy="280" r="3.5" />
            <circle cx="820" cy="370" r="4.5" className="is-hot" />
            <circle cx="340" cy="250" r="2.5" />
            <circle cx="620" cy="180" r="2.5" />
          </g>
          <g className="hero-tech-rings">
            <circle cx="570" cy="230" r="18" />
            <circle cx="290" cy="300" r="14" />
            <circle cx="250" cy="210" r="16" />
          </g>
        </svg>
        <div className="hero-tech-scan" />
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
