import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Data Science
          <br />
          &amp; Software
          <br />
          Engineer
        </motion.h1>

        <motion.div
          className="hero-stage"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-character-wrap">
            <motion.img
              className="hero-character"
              src="/nishita-avatar.jpg"
              alt=""
              aria-hidden="true"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            CSE · DS
          </motion.p>
          <motion.p
            className="hero-name"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65 }}
          >
            Nishi<span>ta</span>
          </motion.p>
        </motion.div>

        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Hi, I&apos;m {profile.firstName}. I craft backends, data systems, and sharp solutions —
          currently studying {profile.education.degree} with a specialization in{' '}
          {profile.education.specialization} at {profile.education.school}.
        </motion.p>
      </div>

      <motion.ul
        className="hero-tools"
        aria-label="Tools"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {profile.tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </motion.ul>
    </section>
  )
}
