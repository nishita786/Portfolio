import { profile } from '../data/profile'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="footer-brand">
          <span className="nav-mark" aria-hidden="true" />
          <span>
            nishi<span className="nav-brand-accent">ta</span>
          </span>
        </a>
        <div className="footer-links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.links.twitter} target="_blank" rel="noreferrer">
            X
          </a>
          <a href={profile.links.leetcode} target="_blank" rel="noreferrer">
            LeetCode
          </a>
          <a href={profile.links.hackerrank} target="_blank" rel="noreferrer">
            HackerRank
          </a>
          <a href={profile.links.email}>Email</a>
        </div>
        <p className="footer-copy">© 2026 {profile.name}</p>
      </div>
    </footer>
  )
}
