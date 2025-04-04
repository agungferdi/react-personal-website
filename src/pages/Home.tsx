import { Link } from 'react-router-dom'
import Button from '../components/common/Button'
import './Home.css'
// Import profile image
import profileImage from '../assets/cek.jpeg'
// Import icons for each technology
import { ReactNode } from 'react'
import { 
  FaPython, 
  FaNodeJs, 
  FaPhp, 
  FaDatabase,
  FaDocker, 
  FaDigitalOcean, 
  FaMicrosoft 
} from 'react-icons/fa6'
import { 
  SiGo, 
  SiTensorflow, 
  SiOpencv, 
  SiScikitlearn 
} from 'react-icons/si'

// Create SkillItem component with proper TypeScript types
type SkillItemProps = {
  icon: ReactNode;
  children: ReactNode;
}

const SkillItem = ({ icon, children }: SkillItemProps) => (
  <li className="skill-item">
    <span className="skill-icon">{icon}</span>
    {children}
  </li>
)

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Muhammad Agung Ferdiansyah</h1>
            <h2>Machine Learning & Full Stack Engineer</h2>
            <p>
              Fresh graduate from Brawijaya University specializing in machine learning engineering 
              and backend development with experience in Python, Golang, and IoT applications.
            </p>
            <div className="cta-buttons">
              <Link to="/projects">
                <Button variant="primary">View Projects</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Contact Me</Button>
              </Link>
            </div>
          </div>
          <div className="profile-image-container">
            <img src={profileImage} alt="Muhammad Agung Ferdiansyah" className="profile-image" />
          </div>
        </div>
      </section>

      <section className="highlights">
        <h2>Core Competencies</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Backend Development</h3>
            <ul>
              <SkillItem icon={<FaPython />}>Python (Flask, FastAPI)</SkillItem>
              <SkillItem icon={<SiGo />}>Golang</SkillItem>
              <SkillItem icon={<FaNodeJs />}>Node.js</SkillItem>
              <SkillItem icon={<FaPhp />}>PHP (Laravel)</SkillItem>
              <SkillItem icon={<FaDatabase />}>SQL (MySQL, PostgreSQL)</SkillItem>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Machine Learning</h3>
            <ul>
              <SkillItem icon={<SiTensorflow />}>TensorFlow & PyTorch</SkillItem>
              <SkillItem icon={<span className="custom-icon yolo">YL</span>}>YOLO</SkillItem>
              <SkillItem icon={<SiOpencv />}>OpenCV</SkillItem>
              <SkillItem icon={<SiScikitlearn />}>Scikit-Learn</SkillItem>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Cloud & DevOps</h3>
            <ul>
              <SkillItem icon={<FaDocker />}>Docker</SkillItem>
              <SkillItem icon={<FaDigitalOcean />}>DigitalOcean</SkillItem>
              <SkillItem icon={<FaMicrosoft />}>Azure</SkillItem>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home