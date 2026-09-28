import { profile } from '../data/profile'
import './Navbar.css'

const links = [
  { id: 'overview', label: 'Overview' },
  { id: 'path', label: 'Arena' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

type NavbarProps = {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <nav className="nav-links" aria-label="Primary">
          <a href="#home" className="nav-home" aria-label="Home">
            Home
          </a>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'is-active' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href={profile.links.email}>
          Contact Me
        </a>
      </div>
    </header>
  )
}
