import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './Projects.css'

export function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.div
          className="projects-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Projects in motion.</h2>
          <p className="section-lead">
            Systems, assistants, and analytics — a few builds that show how I think and ship.
          </p>
        </motion.div>

        <div className="projects-list">
          {profile.projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="project-row"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <div className="project-index" style={{ color: project.accent }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p>{project.blurb}</p>
              </div>
              <ul className="project-stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </motion.a>
          ))}
        </div>

        <a
          className="pill pill-ghost projects-more"
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
        >
          All on GitHub
        </a>
      </div>
    </section>
  )
}
