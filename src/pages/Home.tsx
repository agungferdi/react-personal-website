import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Button from '../components/common/Button'
import './Home.css'
import profileImage from '../assets/cek.jpeg'
import { ReactNode } from 'react'
import { 
  FaPython, 
  FaNodeJs, 
  FaPhp, 
  FaDatabase,
  FaDocker, 
  FaDigitalOcean, 
  FaMicrosoft,
  FaReact,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa6'
import { 
  SiGo, 
  SiTensorflow, 
  SiOpencv, 
  SiScikitlearn,
  SiSvelte,
  SiBootstrap,
  SiJavascript,
  SiRaspberrypi,
  SiTypescript
} from 'react-icons/si'


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
      <Helmet>
        <title>Muhammad Agung Ferdiansyah | Full Stack & ML Engineer</title>
        <meta name="description" content="Muhammad Agung Ferdiansyah is a Full Stack and Machine Learning Engineer specializing in Python, Golang, and IoT applications." />
        <link rel="canonical" href="https://www.agungferdi.com/" />
        <meta name="keywords" content="full stack developer, machine learning engineer, Python, Golang, React, TypeScript" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Agung Ferdiansyah",
              "jobTitle": "Full Stack and Machine Learning Engineer",
              "url": "https://www.agungferdi.com/",
              "sameAs": [
                "https://github.com/agungferdi",
                "https://www.linkedin.com/in/muhammad-agung-ferdiansyah/"
              ]
            }
          `}
        </script>
      </Helmet>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Muhammad Agung Ferdiansyah</h1>
            <h2>Full Stack and Machine Learning Engineer</h2>
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
              <SkillItem icon={<SiGo />}>Golang</SkillItem>
              <SkillItem icon={<FaPython />}>Python (Flask, FastAPI)</SkillItem>
              <SkillItem icon={<FaNodeJs />}>Node.js</SkillItem>
              <SkillItem icon={<FaPhp />}>PHP (Laravel)</SkillItem>
              <SkillItem icon={<FaDatabase />}>MySQL & PostgreSQL</SkillItem>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <ul>
              <SkillItem icon={<FaReact />}>React</SkillItem>
              <SkillItem icon={<SiSvelte />}>Svelte</SkillItem>
              <SkillItem icon={<SiJavascript />}>JavaScript</SkillItem>
              <SkillItem icon={<SiTypescript />}>TypeScript</SkillItem>
              <SkillItem icon={<SiBootstrap />}>Bootstrap</SkillItem>
              <SkillItem icon={<FaHtml5 />}>HTML5</SkillItem>
              <SkillItem icon={<FaCss3Alt />}>CSS3</SkillItem>
            </ul>
          </div>
          
          <div className="skill-category">
             <h3>Machine Learning</h3>
             <ul>
                <SkillItem icon={<SiTensorflow />}>TensorFlow & PyTorch</SkillItem>
                <SkillItem icon={<span className="custom-icon yolo">YL</span>}>YOLO</SkillItem>
                <SkillItem icon={<SiOpencv />}>OpenCV</SkillItem>
                <SkillItem icon={<SiScikitlearn />}>Scikit-Learn</SkillItem>
                <SkillItem icon={<SiRaspberrypi />}>Raspberry Pi</SkillItem>
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