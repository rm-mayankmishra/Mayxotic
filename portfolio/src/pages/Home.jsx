import { Link } from 'react-router-dom'
import './Home.css'

const RESUME_LINK = 'YOUR_RESUME_LINK_HERE' // 🔗 Replace with your resume link

export default function Home() {
  return (
    <div className="home page-enter">
      {/* Hero */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="container hero-inner">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>
          <h1 className="hero-title">
            <span className="hero-hi">Hi, I'm</span>
            <span className="hero-name">Mayank<br/>Mishra</span>
          </h1>
          <p className="hero-role">
            <span className="role-item">Frontend Developer</span>
            <span className="role-sep">·</span>
            <span className="role-item">AI Enthusiast</span>
            <span className="role-sep">·</span>
            <span className="role-item">Data Engineer</span>
          </p>
          <p className="hero-desc">
            B.Tech CS (AI) graduate from IIMT College of Engineering, New Delhi.
            I build fast, accessible web interfaces and AI-powered applications.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="btn-primary">View Projects →</Link>
            <a href={RESUME_LINK} target="_blank" rel="noreferrer" className="btn-secondary">Download Resume ↗</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/rm-mayankmishra" target="_blank" rel="noreferrer" className="social-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mayank-mishra-381b68290" target="_blank" rel="noreferrer" className="social-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-avatar-zone">
          <div className="avatar-ring">
            <div className="avatar-core">MM</div>
            <div className="orbit orbit-1">
  <span className="orbit-dot" title="React" style={{ '--c': '#61DAFB' }}>⚛</span>
</div>
<div className="orbit orbit-2">
  <span className="orbit-dot" title="Python" style={{ '--c': '#FFD43B' }}>🐍</span>
</div>
<div className="orbit orbit-3">
  <span className="orbit-dot" title="AI" style={{ '--c': '#7c6aff' }}>🤖</span>
</div>
<div className="orbit orbit-4">
  <span className="orbit-dot" title="JavaScript" style={{ '--c': '#F7DF1E' }}>JS</span>
</div>
<div className="orbit orbit-5">
  <span className="orbit-dot" title="Database" style={{ '--c': '#336791' }}>🗄️</span>
</div>
<div className="orbit orbit-6">
  <span className="orbit-dot" title="Git" style={{ '--c': '#F05032' }}>🌿</span>
</div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-bar">
        <div className="container stats-inner">
          {[
            { n: '9+', label: 'GitHub Repos' },
            { n: '3+', label: 'Live Projects' },
            { n: '3', label: 'Certifications' },
            { n: '1', label: 'Internship' },
          ].map(s => (
            <div className="stat-item" key={s.label}>
              <span className="stat-num">{s.n}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="featured container">
        <div className="section-header">
          <h2 className="section-title">Featured Work</h2>
          <Link to="/projects" className="see-all">See all →</Link>
        </div>
        <div className="featured-grid">
          <div className="feat-card feat-card--big">
            <div className="feat-tag">AI · Web App</div>
            <h3>Krishi Mitra App</h3>
            <p>An AI-powered farming assistant using Google's Gemini API to help farmers with crop advice, pest detection, and agricultural guidance. Built with TypeScript.</p>
            <div className="feat-tech">
              <span>TypeScript</span><span>Gemini API</span><span>AI/ML</span>
            </div>
            <a href="https://github.com/rm-mayankmishra/Krishi-Mitra-App" target="_blank" rel="noreferrer" className="feat-link">View on GitHub →</a>
          </div>
          <div className="feat-card">
            <div className="feat-tag">Data Analysis</div>
            <h3>E-Commerce Analysis</h3>
            <p>Data mining and visualization on e-commerce datasets to extract business insights.</p>
            <div className="feat-tech"><span>Python</span><span>Pandas</span><span>Matplotlib</span></div>
            <a href="https://github.com/rm-mayankmishra/ECom" target="_blank" rel="noreferrer" className="feat-link">View on GitHub →</a>
          </div>
          <div className="feat-card">
            <div className="feat-tag">Machine Learning</div>
            <h3>Stock Price Prediction</h3>
            <p>ML model for predicting stock prices using historical data and time-series analysis.</p>
            <div className="feat-tech"><span>Python</span><span>Jupyter</span><span>ML</span></div>
            <a href="https://github.com/rm-mayankmishra/Stock-Price-Prediction" target="_blank" rel="noreferrer" className="feat-link">View on GitHub →</a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner container">
        <div className="cta-inner">
          <h2>Let's build something together</h2>
          <p>Open to frontend, full-stack, and AI engineering roles.</p>
          <Link to="/contact" className="btn-primary">Get In Touch →</Link>
        </div>
      </section>
    </div>
  )
}
