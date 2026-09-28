import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './Contact.css'

const socials = [
  { label: 'Gmail', href: profile.links.gmail, mark: 'G' },
  { label: 'GitHub', href: profile.links.github, mark: '⌘' },
  { label: 'LinkedIn', href: profile.links.linkedin, mark: 'in' },
  { label: 'LeetCode', href: profile.links.leetcode, mark: 'LC' },
  { label: 'HackerRank', href: profile.links.hackerrank, mark: 'HR' },
]

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-inner">
        <motion.p
          className="contact-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Connect
        </motion.p>
        <motion.h2
          className="contact-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Let&apos;s collaborate
        </motion.h2>
        <motion.p
          className="contact-copy"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Open to roles, projects, or a good chat about systems. Say hi.
        </motion.p>

        <motion.div
          className="contact-socials"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="contact-social"
            >
              <span className="contact-social-mark" aria-hidden="true">
                {item.mark}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
