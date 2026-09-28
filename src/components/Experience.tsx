import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './Experience.css'

export function Experience() {
  return (
    <section className="section experience" id="path">
      <div className="container">
        <motion.p
          className="experience-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Under pressure
        </motion.p>
        <motion.h2
          className="experience-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Hackathons
        </motion.h2>
        <motion.p
          className="experience-lede"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          Where ideas meet deadlines — building, leading, and shipping under real constraints.
        </motion.p>

        <ol className="path-pipeline">
          {profile.path.map((node, i) => (
            <motion.li
              key={node.stage}
              className="path-node"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="path-rail" aria-hidden="true">
                <span className="path-dot" />
                {i < profile.path.length - 1 ? <span className="path-line" /> : null}
              </div>
              <article className="path-card">
                <div className="path-card-top">
                  <span className="path-stage">{node.stage}</span>
                  <span className="path-period">{node.period}</span>
                </div>
                <h3>{node.title}</h3>
                <p className="path-place">{node.place}</p>
                <div className="path-detail">
                  {node.detail.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <ul className="path-focus">
                  {node.focus.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
