import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './Contact.css'

const socials = [
  { label: 'Email', href: profile.links.email, mark: '✉' },
  { label: 'GitHub', href: profile.links.github, mark: '⌘' },
  { label: 'LinkedIn', href: profile.links.linkedin, mark: 'in' },
  { label: 'X', href: profile.links.twitter, mark: '𝕏' },
  { label: 'LeetCode', href: profile.links.leetcode, mark: 'LC' },
  { label: 'HackerRank', href: profile.links.hackerrank, mark: 'HR' },
]

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
          <p className="section-label">Contact me</p>
          <h2 className="section-title">Let’s build something.</h2>
          <p className="section-lead contact-lead">
            Open to Software Engineer / SDE / Data / Backend roles. Reach out for opportunities,
            collaborations, or a sharp systems conversation.
          </p>
        </motion.div>

        <motion.div
          className="contact-socials"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              className="contact-social"
            >
              <span className="contact-social-mark" aria-hidden="true">
                {item.mark}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
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
