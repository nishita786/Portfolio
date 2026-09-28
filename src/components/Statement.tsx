import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './Statement.css'

const platforms = [
  { label: 'LeetCode', href: profile.links.leetcode },
  { label: 'HackerRank', href: profile.links.hackerrank },
  { label: 'GitHub', href: profile.links.github },
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'CodeChef', href: profile.links.codechef },
  { label: 'Solutions', href: profile.links.solutions },
]

export function Statement() {
  return (
    <section className="section statement" id="about">
      <div className="container statement-inner">
        <motion.p
          className="statement-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          About
        </motion.p>
        <motion.h2
          className="statement-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          Crafting reliable systems, sharp algorithms, and data-driven products that actually ship.
        </motion.h2>
        <motion.p
          className="statement-copy"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {profile.summary} {profile.tagline}
        </motion.p>

        <motion.ul
          className="statement-stats"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
        >
          {profile.achievements.map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noreferrer">
                <span className="statement-stat-value">{item.value}</span>
                <span className="statement-stat-label">{item.label}</span>
                <span className="statement-stat-detail">{item.detail}</span>
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.ul
          className="statement-logos"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
        >
          {platforms.map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
