import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './About.css'

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">About</p>
          <h2 className="section-title">Engineer with orbit.</h2>
          <p className="section-lead">{profile.summary}</p>
          <p className="about-extra">{profile.tagline}</p>
          <div className="about-meta">
            <div>
              <span className="about-meta-label">Education</span>
              <strong>{profile.education.degree}</strong>
              <span>
                {profile.education.school} · {profile.education.year}
              </span>
            </div>
            <div>
              <span className="about-meta-label">Based in</span>
              <strong>{profile.location}</strong>
              <span>Open to SDE · Backend · AI/ML</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.achievements.map((item) => (
            <article key={item.label} className="about-stat">
              <span className="about-stat-value">{item.value}</span>
              <span className="about-stat-label">{item.label}</span>
              <span className="about-stat-detail">{item.detail}</span>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
