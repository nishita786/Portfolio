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
          Projects
        </motion.h2>

        <div className="projects-grid">
          {profile.projects.map((project, i) => (
            <motion.article
              key={project.name}
              className="project-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <header className="project-header">
                <div>
                  <p className="project-index">{String(i + 1).padStart(2, '0')}</p>
                  <h3>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  </h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <a
                  className="project-go"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name} on GitHub`}
                >
                  →
                </a>
              </header>

              <ul className="project-points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <ul className="project-stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
