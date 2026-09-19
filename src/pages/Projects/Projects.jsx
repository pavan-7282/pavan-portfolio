import React, { useState } from "react";
import "./Projects.css";
import {
  ExternalLink,
  Search,
  Layout,
  Trophy,
  Code,
  ChevronRight,
  Layers
} from "lucide-react";

// Import project images
import ugotaxiImage from "../../assets/ugotaxi.png";
import carRentalImage from "../../assets/car rental.png";
import ecommerceImage from "../../assets/e-commercestore.png";
import fooddeliveryImage from "../../assets/food delivery.png";
import weatherImage from "../../assets/weather.png";
import portfolioImage from "../../assets/portofolio.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = ["All", "Web App", "Full Stack", "Frontend", "Backend", "API Integration", "Database"];

  const stats = [
    { label: "Projects Completed", value: "10+", icon: <Layers size={24} /> },
    { label: "Technologies Used", value: "5+", icon: <Trophy size={24} /> },
    { label: "Hands-on Projects", value: "100%", icon: <Code size={24} /> },
  ];

  const projects = [
    {
      title: "UGO Taxi",
      category: "Full Stack",
      description: "A taxi booking platform with real-time tracking, ride management, and Firebase notifications.",
      tech: ["React", "Node.js", "Firebase", "MySQL"],
      liveLink: "https://play.google.com/store/apps/details?id=com.ugotaxi_rajkumar.user",
      image: ugotaxiImage
    },
    {
      title: "Car Rental Service",
      category: "Full Stack",
      description: "A comprehensive car rental system with vehicle listings, booking management, and user authentication.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      liveLink: "https://react-project-pearl-eight.vercel.app/home",
      image: carRentalImage
    },
    {
      title: "E-Commerce Store",
      category: "Full Stack",
      description: "An e-commerce platform with product management, cart, orders and secure payment integration.",
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      liveLink: "https://pavan-7282.github.io/js-main-project/",
      image: ecommerceImage
    },
    {
      title: "Food Delivery",
      category: "Full Stack",
      description: "A food ordering platform with restaurant listings, real-time order tracking and notifications.",
      tech: ["React", "Node.js", "Firebase", "MySQL"],
      liveLink: "https://food-delivery-using-react-ljuaygj2k-bollam-pavans-projects.vercel.app/home",
      image: fooddeliveryImage
    },
    {
      title: "Weather App",
      category: "Frontend",
      description: "A real-time weather application using OpenWeather API with beautiful UI and location search.",
      tech: ["React", "API", "CSS", "HTML"],
      liveLink: "#",
      image: weatherImage
    },
    {
      title: "Portfolio Website",
      category: "Frontend",
      description: "My personal portfolio to showcase my skills, projects, and journey as a developer.",
      tech: ["React", "CSS", "HTML", "Framer Motion"],
      liveLink: "#",
      image: portfolioImage
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === "All" || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* Header Section */}
        <div className="projects-header">
          <div className="work-pill">
            <Layout size={14} />
            <span>MY WORK</span>
          </div>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-desc">
            Here are some of the projects I have worked on. Each project is a reflection of my skills,
            problem-solving ability, and passion for building real-world solutions.
          </p>

          <div className="projects-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon-wrapper">{stat.icon}</div>
                <div className="stat-info">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters & Search */}
        <div className="filters-row">
          <div className="filter-buttons">
            {filters.map(filter => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="search-bar">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <div className="project-card-header">
                  <h3>{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="action-btn live">
                    Live Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="view-more-container">
          <button className="view-more-btn">
            <Layout size={18} />
            View More Projects
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="keep-building">Keep Building</div>
      </div>
    </section>
  );
};

export default Projects;
