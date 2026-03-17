import './About.css'

export default function About() {
  const timeline = [
    {
      year: '2021–2025',
      title: 'B.Tech Computer Science (AI)',
      org: 'IIMT College of Engineering, New Delhi',
      desc: 'Studied Artificial Intelligence with core computer science fundamentals, data structures, machine learning, and web technologies.',
      type: 'edu',
    },
    {
      year: '2024',
      title: 'Data Mining Intern',
      org: 'Bayslope Business Solutions',
      desc: 'Worked on real-world data mining projects, extracting patterns and insights from business datasets.',
      type: 'work',
    },
    {
      year: '2024',
      title: 'Data Visualization Certificate',
      org: 'ANUDIP Foundation',
      desc: 'Completed a certification in data visualization techniques and tools.',
      type: 'cert',
    },
    {
      year: '2024',
      title: 'Data Science Certificate',
      org: 'Internshala',
      desc: 'Finished comprehensive training in data science including Python, ML algorithms, and analytics.',
      type: 'cert',
    },
    {
      year: '2024',
      title: 'Product Management Certificate',
      org: 'GeeksforGeeks',
      desc: 'Gained foundational knowledge in product management, agile workflows, and tech product lifecycle.',
      type: 'cert',
    },
  ]

  return (
    <div className="about-page page-enter container">
      <div className="page-hero">
        <div className="page-hero-tag">About Me</div>
        <h1>Passionate about building <span className="gradient-text">meaningful products</span></h1>
        <p className="page-sub">
          I'm a Computer Science graduate with a specialization in Artificial Intelligence from New Delhi,
          India. I love merging frontend craft with AI capabilities to build things that matter.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-bio">
          <h2>Who I Am</h2>
          <p>
            I'm Mayank Mishra, a fresh B.Tech CS (AI) grad from IIMT College of Engineering. My journey in tech
            started with Python and data science, and evolved into a deep passion for web development — especially
            building React-powered, AI-integrated apps.
          </p>
          <p>
            When I'm not coding, I'm either studying for competitive exams, exploring new AI tools, or contributing
            to open-source projects. I believe in learning in public and building real things as the fastest path to growth.
          </p>
          <p>
            I'm actively looking for frontend/React developer roles and IT services positions where I can contribute,
            learn, and grow rapidly.
          </p>
          <div className="bio-chips">
            {['New Delhi, India', 'Open to Work', 'Full-Time', 'Internship'].map(c => (
              <span className="bio-chip" key={c}>{c}</span>
            ))}
          </div>
        </div>

        <div className="about-quick">
          <div className="quick-card">
            <h3>Education</h3>
            <div className="quick-item">
              <span className="qi-label">Degree</span>
              <span>B.Tech Computer Science (AI)</span>
            </div>
            <div className="quick-item">
              <span className="qi-label">College</span>
              <span>IIMT College of Engineering</span>
            </div>
            <div className="quick-item">
              <span className="qi-label">Duration</span>
              <span>2021 – 2025</span>
            </div>
          </div>
          <div className="quick-card">
            <h3>Interests</h3>
            <div className="interest-grid">
              {['⚛️ React', '🤖 AI/ML', '📊 Data Science', '🌐 Web Dev', '🔧 APIs', '🧠 DSA'].map(i => (
                <span className="interest-tag" key={i}>{i}</span>
              ))}
            </div>
          </div>
          <div className="quick-card">
            <h3>Looking for</h3>
            <div className="interest-grid">
              {['Frontend Dev', 'React Dev', 'Full-Stack', 'IT Services', 'AI Engineer'].map(i => (
                <span className="interest-tag accent" key={i}>{i}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline-section">
        <h2>My Journey</h2>
        <div className="timeline">
          {timeline.map((item, i) => (
            <div className={`tl-item tl-${item.type}`} key={i}>
              <div className="tl-dot" />
              <div className="tl-content">
                <div className="tl-meta">
                  <span className="tl-year">{item.year}</span>
                  <span className={`tl-badge tl-badge-${item.type}`}>
                    {item.type === 'edu' ? '🎓 Education' : item.type === 'work' ? '💼 Work' : '📜 Certificate'}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <span className="tl-org">{item.org}</span>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
