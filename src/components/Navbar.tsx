import { profile } from '../data/profile'
import './Navbar.css'

const links = [
  { id: 'projects', label: 'See my work', icon: '◈' },
  { id: 'about', label: 'About me', icon: '◎' },
  { id: 'contact', label: 'Contact', icon: '✦' },
]

type NavbarProps = {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-brand" aria-label="Nishita home">
          <span className="nav-mark" aria-hidden="true" />
          <span>
            nishi<span className="nav-brand-accent">ta</span>
          </span>
        </a>

        <nav className="nav-pills" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'is-active' : undefined}
            >
              <span className="nav-pill-icon" aria-hidden="true">
                {link.icon}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href={profile.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </header>
  )
}
