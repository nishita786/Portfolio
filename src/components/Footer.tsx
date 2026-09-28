import { profile } from '../data/profile'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="footer-brand">
          <span>nishi</span>
          <span className="nav-brand-accent">ta</span>
        </a>
        <div className="footer-links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.links.email}>Email</a>
        </div>
        <p className="footer-copy">© 2026 {profile.name}</p>
      </div>
    </footer>
  )
}
