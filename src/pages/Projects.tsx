import './Projects.css'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6' 
import { SiGo, SiPython, SiMysql, SiFlask, SiDocker, SiRaspberrypi, SiHtml5, SiOpencv, SiTensorflow, SiPhp, SiJavascript, SiBootstrap, SiReact, SiTypescript, SiVite } from 'react-icons/si'
import { ReactNode } from 'react'
import storeImage from '../assets/store.png'
import compostImage from '../assets/compost.png'
import cornImage from '../assets/corn.png'
import umkmImage from '../assets/umkm.png'
import walletImage from '../assets/wallet.png'
import pythonCrudImage from '../assets/index.png'
import coffeeImage from '../assets/coffee.png'
import websiteImage from '../assets/website.png'


type ProjectLink = {
  label: string;
  url: string;
}

type ProjectTech = {
  name: string;
  icon: ReactNode;
}

type Project = {
  id: string;
  title: string;
  timeframe: string;
  description: string;
  bulletPoints: string[]; 
  image?: string;
  technologies: ProjectTech[];
  links?: ProjectLink[];
  featured?: boolean;
}

const Projects = () => {
  
  const projects: Project[] = [
    
    {
      id: "golang-web-store",
      title: "Golang Personal Web Store with Midtrans Payment",
      timeframe: "February 2025 – Present",
      description: "A Go-based eCommerce platform with integrated payment gateway, shopping cart and order tracking.",
      image: storeImage,
      bulletPoints: [
        "Built a Go-based eCommerce platform with Midtrans payment gateway integration",
        "Implemented shopping cart, checkout, and order tracking with real-time payment status updates",
        "Developed using Golang, MySQL, and GORM, with a responsive web interface",
        "Deployed to Digital Ocean with CI/CD pipeline"
      ],
      technologies: [
        { name: "Golang", icon: <SiGo /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "HTML/CSS", icon: <SiHtml5 /> },
        { name: "JavaScript", icon: <SiJavascript /> }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/agungferdi/golang-web-payment-itegration" }
      ],
      featured: true
    },
    
    {
      id: "python-crud-app",
      title: "Python Full-Stack CRUD App",
      timeframe: "March 2025 – Present",
      description: "A comprehensive web application for managing customer data with responsive design and Docker containerization.",
      image: pythonCrudImage,
      bulletPoints: [
        "Developed a full-stack web app for customer data management",
        "Built with HTML5, CSS3, Bootstrap 5, and JavaScript",
        "Containerized with Docker and Docker Compose",
        "Integrated MySQL 8 as the relational database"
      ],
      technologies: [
        { name: "Python", icon: <SiPython /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "HTML/CSS", icon: <SiHtml5 /> },
        { name: "JavaScript", icon: <SiJavascript /> }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/agungferdi/python-full-stack-crud-customers" }
      ]
    },
    {
      id: "ml-corn-classifier",
      title: "ML Web App for Corn Seed Classification",
      timeframe: "October - December 2024",
      description: "A machine learning application that classifies and counts corn seeds with 98% accuracy in 0.2 seconds.",
      image: cornImage,
      bulletPoints: [
        "Achieved 98% classification accuracy with just 0.2 seconds processing time per image",
        "Developed user-friendly web interface with camera capture and image upload features",
        "Built with Flask framework and YOLO-based computer vision methods",
        "Created fully responsive design for both desktop and mobile devices"
      ],
      technologies: [
        { name: "Python", icon: <SiPython /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "JavaScript", icon: <SiJavascript /> }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/agungferdi/ml-webapp-corn-classification" }
      ],
      featured: true
    },
    {
      id: "ukm-monitoring",
      title: "UKM Monitoring Web Application",
      timeframe: "January – April 2023",
      description: "A PHP-based monitoring system for Small and Medium Enterprises (UKMs) with financial tracking and performance analytics.",
      image: umkmImage,
      bulletPoints: [
        "Designed and developed a complete monitoring system for small and medium enterprise management",
        "Implemented financial tracking, inventory management, and performance analytics dashboards",
        "Created user management system with role-based access for administrators and business owners",
        "Built with PHP, MySQL, and responsive Bootstrap interface for cross-platform compatibility"
      ],
      technologies: [
        { name: "PHP", icon: <SiPhp /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "HTML/CSS", icon: <SiHtml5 /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "JavaScript", icon: <SiJavascript /> }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/agungferdi/ukm-monitoring-web-app-based-php" }
      ],
      featured: true
    },
    {
      id: "smart-composter",
      title: "Smart Composter Full Stack IoT",
      timeframe: "2023",
      description: "An IoT-based composter with automated controls, designed in AutoCAD and powered by Raspberry Pi.",
      image: compostImage,
      bulletPoints: [
        "Designed automated composting system with temperature and moisture monitoring",
        "Programmed Raspberry Pi to control aeration and mixing based on sensor readings",
        "Created mobile app interface for remote monitoring and control",
        "Implemented data logging for composting process optimization"
      ],
      technologies: [
        { name: "Python", icon: <SiPython /> },
        { name: "Raspberry Pi", icon: <SiRaspberrypi /> },
        { name: "React", icon: <SiReact /> },
        { name: "JavaScript", icon: <SiJavascript /> }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/agungferdi/full-stack-iot-composter-using-react-and-python" }
      ]
    },
    {
      id: "react-personal-website",
      title: "Personal Portfolio Website",
      timeframe: "March 2025 – Present",
      description: "A responsive personal portfolio website built with React and TypeScript, featuring project showcases, skills highlights, and contact functionality.",
      image: websiteImage,
      bulletPoints: [
        "Designed and developed a modern portfolio website with React, TypeScript and custom CSS",
        "Implemented responsive design for optimal viewing across all device sizes",
        "Created interactive components including project cards with hover effects",
        "Built a working contact form with email integration",
        "Deployed with CI/CD pipeline for seamless updates"
      ],
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "HTML/CSS", icon: <SiHtml5 /> }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/agungferdi/react-personal-website.git" }
      ],
      featured: true
    },
    {
      id: "coffee-storage-app",
      title: "Coffee Bean Storage App for KTH Wonosantri",
      timeframe: "June – August 2023",
      description: "CRUD-based system to manage raw coffee stock, processing, and packaging for a real business client.",
      image: coffeeImage,
      bulletPoints: [
        "Created a complete inventory system for KTH Wonosantri Abadi coffee production business",
        "Implemented tracking system for raw coffee beans, processing status, and finished products",
        "Developed user management system with role-based access control",
        "Built with Golang backend and MySQL relational database for data persistence"
      ],
      technologies: [
        { name: "Golang", icon: <SiGo /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "HTML/CSS", icon: <SiHtml5 /> },
        { name: "JavaScript", icon: <SiJavascript /> }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/agungferdi/wonosantri" }
      ]
    },
    {
      id: "wallet-tracker",
      title: "Wallet Tracking Web App",
      timeframe: "February 2023 – March 2023",
      description: "A web application to track wallet balance, expenses, and income with real-time updates.",
      image: walletImage,
      bulletPoints: [
        "Built CRUD-based application for personal finance tracking",
        "Implemented features for adding, editing, and deleting transactions with real-time balance updates",
        "Created interface for transaction categorization and filtering",
        "Developed using Golang, MySQL, and GORM with responsive web interface"
      ],
      technologies: [
        { name: "Golang", icon: <SiGo /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "HTML/CSS", icon: <SiHtml5 /> },
        { name: "JavaScript", icon: <SiJavascript /> }
      ],
      links: [
        { label: "GitHub", url: "https://github.com/agungferdi/go-crud" }
      ]
    },
  ];
  
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p className="subtitle">Here are some of my recent projects that showcase my skills and experience.</p>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            {project.image && (
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
            )}
            <div className="card-content">
              <h3>{project.title}</h3>
              <div className="timeframe">{project.timeframe}</div>
              
              <p className="description">{project.description}</p>
              
              <ul className="bullet-points">
                {project.bulletPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              
              <div className="tech-tags">
                {project.technologies.map((tech, idx) => (
                  <div key={idx} className="tech-tag" title={tech.name}>
                    <span className="tech-icon">{tech.icon}</span>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
              
              {project.links && (
                <div className="project-links">
                  {project.links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      {link.label === "GitHub" ? <FaGithub /> : <FaArrowUpRightFromSquare />}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects