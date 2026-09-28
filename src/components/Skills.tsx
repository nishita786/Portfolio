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
]

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">Toolkit</p>
          <h2 className="section-title">Skills in constellation.</h2>
          <p className="section-lead">
            A stack shaped by backends, data, and competitive problem solving.
          </p>
        </motion.div>

        <div className="skills-grid">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              className="skills-group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
