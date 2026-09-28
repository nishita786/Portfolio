import { profile } from '../data/profile'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-brand">
          {profile.brand}
          <span>{profile.brandAccent}</span>
        </p>
        <p className="footer-copy">
          © 2026 {profile.name} · {profile.education.school}
        </p>
      </div>
    </footer>
  )
}
