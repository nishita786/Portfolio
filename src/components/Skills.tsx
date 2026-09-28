import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './Skills.css'

const groups = [
  { title: 'Languages', items: profile.skills.languages },
  { title: 'Frontend', items: profile.skills.frontend },
  { title: 'Backend', items: profile.skills.backend },
  { title: 'Data & ML', items: profile.skills.data },
  { title: 'Tools', items: profile.skills.tools },
  { title: 'Core CS', items: profile.skills.core },
] as const

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.p
          className="skills-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Toolkit
        </motion.p>
        <motion.h2
          className="skills-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Skills
        </motion.h2>

        <div className="skills-grid">
          {groups.map((group, i) => (
            <motion.article
              key={group.title}
              className="skills-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
