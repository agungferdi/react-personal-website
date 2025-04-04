import Card from '../components/common/Card'
import './About.css'
import { FaTrophy, FaMedal, FaAward, FaCertificate, FaGraduationCap } from 'react-icons/fa'

const About = () => {
  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>About Me</h1>
        <p>
          I am a fresh graduate from Brawijaya University with a strong focus on machine learning engineering 
          and backend development. I specialize in building and optimizing machine learning models, 
          particularly YOLO, for automation and data analysis. My expertise extends to developing IoT 
          applications using Raspberry Pi and Arduino, integrating real-time data processing with 
          intelligent systems.
        </p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <Card 
          title="Brawijaya University"
          subtitle="Agricultural Engineering and Biosystem, Faculty of Agricultural Technology"
          timeframe="August 2020 – February 2025"
          description={["GPA: 3.49"]}
        />
      </section>

      <section className="experience">
        <h2>Internship Experiences</h2>
        <Card 
          title="Internship at PTPN XII Bangelan Plantation"
          timeframe="January – February 2023"
          description={[
            "Developed a machine condition monitoring application using Golang integrated with IoT.",
            "Created an employee performance monitoring application."
          ]}
        />
        <Card 
          title="Internship at KTH Wonosantri Abadi (Singosari Malang)"
          timeframe="August – September 2023"
          description={[
            "Developed a full-stack web app to manage raw coffee stock, processing, and packaging."
          ]}
        />
      </section>

      <section className="community-service">
        <h2>Community Service Program</h2>
        <Card 
          title="KKN at Toyomarto Village, Singosari, Malang"
          timeframe="May – June 2022"
          description={[
            "Led Focus Group Discussions (FGDs) on village waste management programs.",
            "Managed a waste bank program in four neighborhood units (RT).",
            "Led education programs on medicinal plants for school children, providing hands-on learning experiences.",
            "Conducted training sessions and facilitated the implementation of composting systems."
          ]}
        />
      </section>

      <section className="organizations">
        <h2>Organizational Experience</h2>
        <Card 
          title="Agritech Research Center and Study Club (ARSC)"
          subtitle="Junior Staff of Human Resource Development"
          timeframe="January – August 2021"
          description={[
            "Designed and implemented skill development programs, including technical and soft skill training.",
            "Coordinated training, workshops, and discussions on agricultural technology, IoT, and machine learning."
          ]}
        />
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon bronze">
              <FaMedal />
            </div>
            <div className="achievement-content">
              <h3>Bronze Medal</h3>
              <p>International Agriculture Great Competition (IAGC)</p>
              <span className="achievement-date">March 2021</span>
            </div>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon third">
              <FaTrophy />
            </div>
            <div className="achievement-content">
              <h3>3rd Best</h3>
              <p>Regional Innovation in Health Category and Top 10 in East Java</p>
              <span className="achievement-date">August 2019</span>
            </div>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon third">
              <FaAward />
            </div>
            <div className="achievement-content">
              <h3>3rd Place</h3>
              <p>Scientific League (Scientific Writing in Agricultural Technology)</p>
              <span className="achievement-date">June 2021</span>
            </div>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon third">
              <FaCertificate />
            </div>
            <div className="achievement-content">
              <h3>3rd Place</h3>
              <p>National Paper Competition for Diesnatalis FTP 23rd</p>
              <span className="achievement-date">March 2021</span>
            </div>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon first">
              <FaTrophy />
            </div>
            <div className="achievement-content">
              <h3>1st Place</h3>
              <p>Student Creativity Program (PKM) for Freshmen</p>
              <span className="achievement-date">September 2020</span>
            </div>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon outstanding">
              <FaGraduationCap />
            </div>
            <div className="achievement-content">
              <h3>Outstanding Student Award</h3>
              <p>Agricultural and Biosystem Engineering Program</p>
              <span className="achievement-date">January 2021</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About