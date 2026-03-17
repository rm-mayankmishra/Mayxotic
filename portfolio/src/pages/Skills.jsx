import './Skills.css'

const skillGroups = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'JavaScript (ES6+)', level: 82 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
    ],
  },
  {
    title: 'Backend & Languages',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'SQL', level: 78 },
      { name: 'TypeScript', level: 65 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    title: 'AI & Data',
    icon: '🤖',
    skills: [
      { name: 'Data Mining', level: 82 },
      { name: 'Data Visualization', level: 80 },
      { name: 'Gemini API', level: 72 },
      { name: 'Machine Learning', level: 70 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 82 },
      { name: 'Vite', level: 78 },
      { name: 'Netlify', level: 80 },
      { name: 'Jupyter Notebook', level: 85 },
    ],
  },
]

const databases = ['MySQL', 'PostgreSQL', 'SQLite', 'MS SQL Server']

const tools = [
  'VS Code', 'Git', 'GitHub', 'Netlify', 'Vite', 'npm',
  'Jupyter', 'Google Colab', 'Figma', 'Postman',
]

export default function Skills() {
  return (
    <div className="skills-page page-enter container">
      <div className="page-hero">
        <div className="page-hero-tag">Skills</div>
        <h1>My <span className="gradient-text">technical toolkit</span></h1>
        <p className="page-sub">Technologies and tools I've worked with across frontend development, AI/ML, and data engineering.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map(group => (
          <div className="skill-group" key={group.title}>
            <div className="sg-header">
              <span className="sg-icon">{group.icon}</span>
              <h3>{group.title}</h3>
            </div>
            <div className="skill-bars">
              {group.skills.map(skill => (
                <div className="skill-bar-item" key={skill.name}>
                  <div className="sb-top">
                    <span className="sb-name">{skill.name}</span>
                    <span className="sb-pct">{skill.level}%</span>
                  </div>
                  <div className="sb-track">
                    <div className="sb-fill" style={{ '--w': `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Badges */}
      <div className="tech-cloud-section">
        <h2>Databases</h2>
        <div className="tech-cloud">
          {databases.map(t => (
            <span className="tech-badge db" key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="tech-cloud-section">
        <h2>Tools & Platforms</h2>
        <div className="tech-cloud">
          {tools.map(t => (
            <span className="tech-badge" key={t}>{t}</span>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="certs-section">
        <h2>Certifications</h2>
        <div className="certs-grid">
          {[
            { title: 'Data Visualization', org: 'ANUDIP Foundation', color: '#7c6aff' },
            { title: 'Data Science', org: 'Internshala', color: '#ff6a9b' },
            { title: 'Product Management', org: 'GeeksforGeeks', color: '#6af5c4' },
          ].map(cert => (
            <div className="cert-card" key={cert.title} style={{ '--cert-color': cert.color }}>
              <span className="cert-ribbon">📜</span>
              <h3>{cert.title}</h3>
              <span className="cert-org">{cert.org}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
