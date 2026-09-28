import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import './Skills.css'

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.h2
          className="skills-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          What I&apos;ve Learned
        </motion.h2>
        <motion.p
          className="skills-lede"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          Languages, frameworks, and tools I reach for when turning ideas into working systems.
        </motion.p>

        <div className="skills-groups">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="skills-group"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <h3>{group.title}</h3>
              <ul className="skills-icons" aria-label={group.title}>
                {group.items.map((item) => (
                  <li key={`${group.title}-${item.name}`}>
                    <span className="skills-icon" title={item.name}>
                      <img
                        src={item.icon}
                        alt={item.name}
                        loading="lazy"
                        width={40}
                        height={40}
                        className={item.invert ? 'is-invert' : undefined}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
