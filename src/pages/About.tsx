import Card from '../components/common/Card'
import { Helmet } from 'react-helmet-async'
import './About.css'
import { 
  FaGraduationCap, 
  FaCode, 
  FaUsers, 
  FaSitemap 
} from 'react-icons/fa6'


import ubImage from '../assets/ub.jpeg'
import wonoImage from '../assets/wono.jpeg'
import kknImage from '../assets/kkn.png'
import arscImage from '../assets/arsc.png'
import bangelanImage from '../assets/bangelan.jpg'

const About = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>About | Muhammad Agung Ferdiansyah</title>
        <meta name="description" content="Learn about Muhammad Agung Ferdiansyah's education, work experience, and skills as a Full Stack and Machine Learning Engineer." />
        <link rel="canonical" href="https://muhammadagungferdiansyah.vercel.app/about" />
        <meta name="keywords" content="software engineer background, machine learning education, Brawijaya University, full stack developer experience" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Muhammad Agung Ferdiansyah",
              "description": "Information about Muhammad Agung Ferdiansyah's education, experience, and skills in software engineering and machine learning.",
              "mainEntity": {
                "@type": "Person",
                "name": "Muhammad Agung Ferdiansyah",
                "alumniOf": "Brawijaya University",
                "jobTitle": "Full Stack and Machine Learning Engineer"
              }
            }
          `}
        </script>
      </Helmet>
      <section className="about-intro">
        <div className="section-header">
          <h1>About Me</h1>
          <div className="decorative-line"></div>
        </div>
        <p className="intro-text">
          I am a fresh graduate from Brawijaya University with a strong focus on machine learning engineering 
          and backend development. My expertise includes building optimized ML models, developing IoT systems, 
          and creating full-stack applications.
        </p>
      </section>

      <section className="education">
        <div className="section-header">
          <FaGraduationCap className="section-icon" />
          <h2>Education</h2>
        </div>
        <Card 
          title="Brawijaya University"
          subtitle="Agricultural Engineering and Biosystem, Faculty of Agricultural Technology"
          timeframe="August 2020 – February 2025"
          description={["GPA: 3.49", "Relevant Coursework: Data Structures, Machine Learning, IoT Systems"]}
          image={ubImage}
        />
      </section>

      <section className="experience">
        <div className="section-header">
          <FaCode className="section-icon" />
          <h2>Experience</h2>
        </div>
        <Card 
          title="KTH Wonosantri Abadi"
          subtitle="Full-Stack Developer Intern"
          timeframe="August – September 2023"
          description={[
            "Built complete coffee stock management system from raw material to packaging",
            "Implemented real-time inventory tracking features"
          ]}
          image={wonoImage}
          badge="Internship"
        />
         <Card 
          title="PTPN XII Bangelan Plantation"
          subtitle="Full Stack Intern"
          timeframe="January – February 2023"
          description={[
            "Developed web app for machine condition monitoring application using Golang",
            "Created employee performance monitoring system with IoT integration"
          ]}
          image={bangelanImage}
          badge="Internship"
        />
      </section>
      
      <section className="organizational-experience">
        <div className="section-header">
          <FaSitemap className="section-icon" />
          <h2>Organizational Experience</h2>
        </div>

        
        <Card 
          title="Agritech Research Center and Study Club (ARSC)"
          subtitle="Junior Staff of Human Resource Development"
          timeframe="January – August 2021"
          description={[
            "Implemented skill development programs, including technical and soft skill training",
            "Coordinated training, workshops, and discussions on IoT and machine learning"
          ]}
          image={arscImage}
        />
      </section>

      <section className="community-service">
        <div className="section-header">
          <FaUsers className="section-icon" />
          <h2>Community Service</h2>
        </div>
        <Card 
          title="Toyomarto Village Development Program"
          subtitle="Team Leader - KKN Initiative"
          timeframe="May – June 2022"
          description={[
            "Led waste management program across 4 neighborhood units",
            "Implemented composting system and medicinal plant education program"
          ]}
          image={kknImage}
          badge="Social Project"
        />
      </section>
    </div>
  )
}

export default About