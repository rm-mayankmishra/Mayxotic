import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData()
    formData.append('access_key', '526a3260-6d5a-4542-b076-d47ef97b643c')
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('subject', form.subject)
    formData.append('message', form.message)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'rm.mayankmishra@gmail.com',
      link: 'mailto:rm.mayankmishra@gmail.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/mayank-mishra-381b68290',
      link: 'https://www.linkedin.com/in/mayank-mishra-381b68290',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/rm-mayankmishra',
      link: 'https://github.com/rm-mayankmishra',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'New Delhi, India',
      link: null,
    },
  ]

  return (
    <div className="contact-page page-enter container">
      <div className="page-hero">
        <div className="page-hero-tag">Contact</div>
        <h1>Let's <span className="gradient-text">work together</span></h1>
        <p className="page-sub">
          I'm actively looking for frontend developer roles and open to freelance projects.
          Drop a message — I typically respond within 24 hours.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p className="contact-blurb">
            Whether you have a job opportunity, a project idea, or just want to connect —
            I'd love to hear from you.
          </p>
          <div className="info-cards">
            {contactInfo.map(item => (
              <div className="info-card" key={item.label}>
                <span className="info-icon">{item.icon}</span>
                <div>
                  <span className="info-label">{item.label}</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer" className="info-value link">
                      {item.value}
                    </a>
                  ) : (
                    <span className="info-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="availability-badge">
            <span className="avail-dot" />
            <span>Available for full-time & freelance work</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Your Name</label>
              <input
                id="name" name="name" type="text"
                placeholder="Rahul Sharma"
                value={form.name} onChange={handleChange} required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email" name="email" type="email"
                placeholder="rahul@example.com"
                value={form.email} onChange={handleChange} required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject" name="subject" type="text"
              placeholder="Frontend Developer Opportunity at XYZ"
              value={form.subject} onChange={handleChange} required
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message" name="message" rows={6}
              placeholder="Hi Mayank, I came across your portfolio and wanted to discuss..."
              value={form.message} onChange={handleChange} required
            />
          </div>

          <button
            type="submit"
            className={`submit-btn${status === 'sending' ? ' loading' : ''}${status === 'sent' ? ' sent' : ''}`}
            disabled={status === 'sending' || status === 'sent'}
          >
            {status === 'sending' ? (
              <><span className="spinner" /> Sending...</>
            ) : status === 'sent' ? (
              <>✓ Message Sent!</>
            ) : (
              <>Send Message →</>
            )}
          </button>

          {status === 'sent' && (
            <p className="success-note">
              🎉 Thanks for reaching out! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="error-note">
              ❌ Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
