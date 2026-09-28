import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import './Statement.css'

const overviewLinks = [
  { label: 'Gmail', href: profile.links.email },
  { label: 'GitHub', href: profile.links.github },
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'Resume', href: profile.links.resume, download: true },
]

export function Statement() {
  return (
    <section className="section statement" id="overview">
      <div className="container statement-inner">
        <motion.p
          className="statement-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          Introduction
        </motion.p>
        <motion.h2
          className="statement-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          Overview
        </motion.h2>

        <div className="statement-body">
          {profile.overview.map((paragraph, i) => (
            <motion.p
              key={paragraph}
              className={`statement-copy${i === profile.overview.length - 1 ? ' statement-copy--closing' : ''}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.28) }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.ul
          className="statement-links"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {overviewLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                download={link.download ? 'Nishita_Kumari_Resume.pdf' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
