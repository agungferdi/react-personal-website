import { useState } from 'react'
import Button from '../components/common/Button'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend or email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    // You could add actual form submission logic here
  }

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      
      <div className="contact-container">
        <div className="contact-info-panel">
          <div className="contact-item">
            <h3>Location</h3>
            <p>Condong, Gading, Probolinggo, East Java, Indonesia (67292)</p>
          </div>
          
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+6282333053353</p>
          </div>
          
          <div className="contact-item">
            <h3>Email</h3>
            <p>muhammad_agungf@student.ub.ac.id</p>
          </div>
          
          <div className="social-links">
            <h3>Connect with me</h3>
            <div className="links-container">
              <a href="https://linkedin.com/in/muhammad-agung-ferdiansyah-" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/agungferdi" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          {submitted ? (
            <div className="success-message">
              <h3>Thank you for your message!</h3>
              <p>I'll get back to you as soon as possible.</p>
              <Button onClick={() => setSubmitted(false)}>Send another message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary">Send Message</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact