import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './Projects.css'

export function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.h2
          className="projects-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          what I do
        </motion.h2>

        <div className="projects-grid">
          {profile.projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <div className="project-thumb" aria-hidden="true">
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p>{project.stack.join(' · ')}</p>
              </div>
              <span className="project-go" aria-hidden="true">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
