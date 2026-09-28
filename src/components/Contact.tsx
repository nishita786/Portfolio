import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './Contact.css'

const socials = [
  { label: 'Gmail', href: profile.links.email, mark: 'G' },
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
        <motion.h2
          className="contact-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Contact me
        </motion.h2>

        <motion.div
          className="contact-socials"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.08 }}
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
      </div>
    </section>
  )
}
