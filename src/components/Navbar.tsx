import './Navbar.css'

const links = [
  { id: 'projects', label: 'See my work', icon: '→' },
  { id: 'experience', label: 'My path', icon: '▣' },
  { id: 'contact', label: 'Contact me', icon: '✓' },
]

type NavbarProps = {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  return (
    <header className="nav">
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
    </header>
  )
}
