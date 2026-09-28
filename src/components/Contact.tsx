import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './Contact.css'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let’s build something.</h2>
          <p className="section-lead contact-lead">
            Open to Software Engineer / SDE / Backend / AI-ML roles. Reach out for opportunities,
            collaborations, or a sharp systems conversation.
          </p>
        </motion.div>

        <motion.div
          className="contact-actions"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <a className="pill" href={profile.links.email}>
            Email Me
          </a>
          <a
            className="pill pill-ghost"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="pill pill-ghost"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </motion.div>

        <motion.p
          className="contact-email"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {profile.email}
        </motion.p>
      </div>
    </section>
  )
}
