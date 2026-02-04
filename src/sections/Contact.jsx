import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/contact.css'

const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // null | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    // Extract values directly from form
    // Note: ensure your input names match these or use refs
    const formData = new FormData(form.current)
    const payload = {
      title: "Contact Us Porto Web",
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message'),
      time: new Date().toLocaleString(),
    }

    emailjs
      .send(
        'service_sc5wed8',
        'template_vdmuzv4',
        payload,
        'VHG8s1O0LJaV4kyZS'
      )
      .then(
        (result) => {
          console.log(result.text)
          setLoading(false)
          setStatus('success')
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
          setLoading(false)
          setStatus('error')
        }
      )
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side: Info */}
        <div className="contact-info">
          <div className="contact-header">
            <h2>Let's Work <br />Together</h2>
            <p>
              Have a project in mind? looking for a partner? or just want to say hi?
              I'm always open to discussing new projects and opportunities.
            </p>
          </div>

          <div className="info-grid">
            <div className="glass-card info-card">
              <div className="icon-box">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="info-content">
                <h3>Email Me</h3>
                <p>dulcoon.dev@gmail.com</p>
              </div>
            </div>

            <div className="glass-card info-card">
              <div className="icon-box">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Sleman, Yogyakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="glass-card contact-form-wrapper">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="user_name"
                className="glass-input"
                placeholder="Alexandra"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="user_email"
                className="glass-input"
                placeholder="alexandra@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea
                name="message"
                className="glass-input"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="neon-button" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p style={{ color: '#d9f99d', marginTop: '10px' }}>
                Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#ff4d4f', marginTop: '10px' }}>
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
