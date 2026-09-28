import { profile } from '../data/profile'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          <span>{profile.brand}</span>
          <span className="footer-brand-accent">{profile.brandAccent}</span>
        </p>
      </div>
    </footer>
  )
}
