import './Navbar.css'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Path' },
  { id: 'skills', label: 'Skills' },
]

type NavbarProps = {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-brand" aria-label="Nishita home">
          <span>nishi</span>
          <span className="nav-brand-accent">ta</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={
                activeSection === link.id || (link.id === 'about' && activeSection === 'home')
                  ? 'is-active'
                  : undefined
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Contact
        </a>
      </div>
      <div className="nav-rule" />
    </header>
  )
}
