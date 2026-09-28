import { profile } from '../data/profile'
import './Navbar.css'

const links = [
  { id: 'overview', label: 'Overview' },
  { id: 'path', label: 'Path' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

type NavbarProps = {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-brand" aria-label={profile.name}>
          {profile.brand}
          <span>{profile.brandAccent}</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
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
