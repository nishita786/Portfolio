import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './Experience.css'

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <motion.p
          className="experience-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Career
        </motion.p>
        <motion.h2
          className="experience-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Path
        </motion.h2>

        <div className="experience-list">
          {profile.experience.map((job) => (
            <motion.article
              key={job.company}
              className="experience-item"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="experience-meta">
                <span>{job.period}</span>
                <h3>{job.role}</h3>
                <p>{job.company}</p>
              </div>
              <ul>
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}

          <motion.article
            className="experience-item"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="experience-meta">
              <span>{profile.education.year}</span>
              <h3>{profile.education.degree}</h3>
              <p>
                {profile.education.school} · {profile.education.specialization}
              </p>
            </div>
            <ul>
              <li>
                Specializing in Data Science with a focus on software engineering, algorithms, and
                shipping production-minded systems.
              </li>
              <li>
                Active on LeetCode (74 solved) and HackerRank (Python ★★★, Problem Solving ★★, R
                Basic cert).
              </li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
