import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>+6282333053353 | muhammad_agungf@student.ub.ac.id</p>
        <p>Condong, Gading, Probolinggo, East Java, Indonesia (67292)</p>
      </div>
      <div className="social-links">
        <a href="https://linkedin.com/in/muhammad-agung-ferdiansyah-" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/agungferdi" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Muhammad Agung Ferdiansyah</p>
    </footer>
  )
}

export default Footer