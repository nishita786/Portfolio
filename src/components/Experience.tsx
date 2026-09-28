import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './Experience.css'

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">The path so far.</h2>
        </motion.div>

        <div className="experience-list">
          {profile.experience.map((job) => (
            <motion.article
              key={job.company}
              className="experience-item"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              <div className="experience-meta">
                <span className="experience-period">{job.period}</span>
                <h3>{job.role}</h3>
                <p className="experience-company">{job.company}</p>
              </div>
              <ul className="experience-points">
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}

          <motion.article
            className="experience-item experience-item--edu"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="experience-meta">
              <span className="experience-period">{profile.education.year}</span>
              <h3>{profile.education.degree}</h3>
              <p className="experience-company">
                {profile.education.school} · {profile.education.specialization}
              </p>
            </div>
            <ul className="experience-points">
              <li>
                Specializing in Data Science with a focus on software engineering, algorithms, and
                building production-minded systems.
              </li>
              <li>
                Active on LeetCode and HackerRank, with ongoing competitive practice on CodeChef.
              </li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
