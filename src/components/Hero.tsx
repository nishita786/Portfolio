import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { heroSlides } from '../data/profile'
import { Orb } from './Orb'
import './Hero.css'

const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 40 : -40,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -40 : 40,
  }),
}

export function Hero() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const slide = heroSlides[index]
  const prev = heroSlides[(index - 1 + heroSlides.length) % heroSlides.length]
  const next = heroSlides[(index + 1) % heroSlides.length]

  const go = useCallback((nextIndex: number, dir: number) => {
    setDirection(dir)
    setIndex((nextIndex + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(index + 1, 1)
      if (e.key === 'ArrowLeft') go(index - 1, -1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, index])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection(1)
      setIndex((current) => (current + 1) % heroSlides.length)
    }, 9000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-atmosphere" />

      <button
        type="button"
        className="hero-side hero-side--left"
        onClick={() => go(index - 1, -1)}
        aria-label={`Previous: ${prev.title}`}
      >
        <span className="hero-side-orb" style={{ ['--hue' as string]: prev.orbHue }} />
        <span className="hero-side-label">{prev.title}</span>
      </button>

      <button
        type="button"
        className="hero-side hero-side--right"
        onClick={() => go(index + 1, 1)}
        aria-label={`Next: ${next.title}`}
      >
        <span className="hero-side-label">{next.title}</span>
        <span className="hero-side-orb" style={{ ['--hue' as string]: next.orbHue }} />
      </button>

      <div className="hero-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            className="hero-copy"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero-kicker">{slide.label}</p>
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-desc">{slide.description}</p>
            <a className="pill hero-cta" href={slide.target}>
              {slide.cta}
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="hero-dots" role="tablist" aria-label="Hero slides">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={i === index ? 'is-active' : undefined}
              onClick={() => go(i, i > index ? 1 : -1)}
              aria-label={s.title}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`orb-${slide.id}`}
          className="hero-orb-wrap"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Orb hue={slide.orbHue} />
        </motion.div>
      </AnimatePresence>

      <a href="#about" className="hero-scroll" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  )
}
