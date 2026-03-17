import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Krishi Mitra App',
    desc: 'An AI-powered farming assistant designed to help farmers in developing countries with crop advice, pest detection, disease diagnosis, and agricultural guidance. Built using Google Gemini API with a comprehensive TypeScript frontend.',
    tech: ['TypeScript', 'Gemini API', 'AI/ML', 'React'],
    category: 'AI',
    github: 'https://github.com/rm-mayankmishra/Krishi-Mitra-App',
    demo: null,
    highlight: true,
  },
  {
    id: 2,
    title: 'E-Commerce Data Analysis',
    desc: 'In-depth data mining and visualization project on e-commerce datasets. Uncovered sales patterns, customer behavior insights, and product performance metrics using Python data tools.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    category: 'Data',
    github: 'https://github.com/rm-mayankmishra/ECom',
    demo: null,
    highlight: false,
  },
  {
    id: 3,
    title: 'Stock Price Prediction',
    desc: 'Machine learning model for predicting stock prices using historical time-series data. Applied regression techniques and feature engineering on financial datasets.',
    tech: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas'],
    category: 'ML',
    github: 'https://github.com/rm-mayankmishra/Stock-Price-Prediction',
    demo: null,
    highlight: false,
  },
  {
    id: 4,
    title: 'Employee Management System',
    desc: 'A full-featured employee management system with CRUD operations, department management, and reporting capabilities built with Python.',
    tech: ['Python', 'SQL', 'CRUD'],
    category: 'Web',
    github: 'https://github.com/rm-mayankmishra/Employee-Management-System',
    demo: null,
    highlight: false,
  },
  {
    id: 5,
    title: 'UBER Data Analysis',
    desc: 'Exploratory data analysis on UBER ride datasets to discover trends in ride frequency, peak hours, popular pickup zones, and demand patterns.',
    tech: ['Python', 'Jupyter', 'Seaborn', 'NumPy'],
    category: 'Data',
    github: 'https://github.com/rm-mayankmishra/UBER-Data-Analysis',
    demo: null,
    highlight: false,
  },
  {
    id: 6,
    title: 'Portfolio Website',
    desc: 'Personal portfolio site with dark modern design, glassmorphism effects, responsive layout, and smooth animations. Deployed on Netlify.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    category: 'Web',
    github: 'https://github.com/rm-mayankmishra',
    demo: 'https://rm-mayankmishra.github.io/Mayxotic',
    highlight: false,
  },
]

const categories = ['All', 'AI', 'ML', 'Data', 'Web']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <div className="projects-page page-enter container">
      <div className="page-hero">
        <div className="page-hero-tag">Projects</div>
        <h1>Things I've <span className="gradient-text">built & shipped</span></h1>
        <p className="page-sub">A collection of projects across AI, machine learning, data analysis, and web development.</p>
      </div>

      <div className="filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn${filter === cat ? ' active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map(proj => (
          <div className={`project-card${proj.highlight ? ' highlight' : ''}`} key={proj.id}>
            {proj.highlight && <div className="highlight-badge">⭐ Featured</div>}
            <div className="proj-top">
              <div className="proj-icon">{getCategoryIcon(proj.category)}</div>
              <span className={`cat-tag cat-${proj.category.toLowerCase()}`}>{proj.category}</span>
            </div>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="proj-tech">
              {proj.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="proj-links">
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
                  GitHub
                </a>
              )}
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noreferrer" className="proj-link demo">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="more-on-github">
        <p>More projects on GitHub →</p>
        <a href="https://github.com/rm-mayankmishra" target="_blank" rel="noreferrer" className="btn-primary">
          View GitHub Profile
        </a>
      </div>
    </div>
  )
}

function getCategoryIcon(cat) {
  const icons = { AI: '🤖', ML: '📈', Data: '📊', Web: '🌐' }
  return icons[cat] || '💡'
}
