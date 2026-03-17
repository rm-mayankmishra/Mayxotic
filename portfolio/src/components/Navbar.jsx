import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const RESUME_LINK = 'YOUR_RESUME_LINK_HERE' // 🔗 Replace with your Google Drive / PDF link

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner container">
        <Link to="/" className="nav-logo">
          <span className="logo-bracket">&lt;</span>MM
          <span className="logo-bracket">/&gt;</span>
        </Link>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
            onClick={() => setMenuOpen(false)}
          >
            Resume ↗
          </a>
        </nav>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
