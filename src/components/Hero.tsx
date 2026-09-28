import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.title.replace(' · ', '/')}
          <br />
          &amp; Software Engineer
        </motion.h1>

        <motion.div
          className="hero-stage"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-orb" aria-hidden="true">
            <span className="hero-monogram">N</span>
          </div>
          <p className="hero-eyebrow">CSE · DS</p>
          <p className="hero-name">
            Nishi<span>ta</span>
          </p>
        </motion.div>

        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Hi, I&apos;m {profile.firstName} — a {profile.education.degree} student specializing in{' '}
          {profile.education.specialization} at {profile.education.school}. I build backends, data
          systems, and solve problems on LeetCode &amp; HackerRank.
        </motion.p>
      </div>

      <motion.ul
        className="hero-tools"
        aria-label="Tools"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ delay: 0.35, duration: 0.6 }}
      >
        {profile.tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </motion.ul>
    </section>
  )
}
