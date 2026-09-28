import { useEffect, useState } from 'react'
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
      <motion.div
        className="hero-content"
        animate={{ x: mouseX * -12, y: mouseY * -8 }}
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
        className="hero-peek hero-peek--left"
        onClick={() => go(index - 1, -1)}
        aria-label={`Previous: ${prev.peek}`}
      >
        <span className="hero-peek-name">{prev.peek}</span>
        <Orb hue={prev.hue} size="peek" />
      </button>

      <button
        type="button"
        className="hero-peek hero-peek--right"
        onClick={() => go(index + 1, 1)}
        aria-label={`Next: ${next.peek}`}
      >
        <Orb hue={next.hue} size="peek" />
        <span className="hero-peek-name">{next.peek}</span>
      </button>

      <motion.div
        className="hero-stage"
        animate={{ x: mouseX * 22, y: mouseY * 14 }}
        transition={{ type: 'spring', stiffness: 60, damping: 18 }}
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={`orb-${active.id}`}
            className="hero-orb-wrap"
            custom={dir}
            initial={{ opacity: 0.2, x: dir >= 0 ? 180 : -180, scale: 0.55 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0.15, x: dir >= 0 ? -220 : 220, scale: 0.5 }}
            transition={{ duration: 0.9, ease }}
          >
            <Orb hue={active.hue} size="hero" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <a className="hero-scroll" href="#overview" aria-label="Scroll to overview">
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}
