import React from "react";
import "./Services.css";
import {
  Monitor,
  Settings,
  Database,
  Smartphone,
  Layout,
  Wrench,
  Zap,
  Users,
  ShieldCheck,
  Check,
  ArrowRight,
  ChevronRight
} from "lucide-react";

// Import images
import webDevImg from "../../assets/web development.png";
import backendDevImg from "../../assets/backend development.png";
import databaseDevImg from "../../assets/database development.png";
import apiIntegrationImg from "../../assets/api intigration.png";
import frontendDevImg from "../../assets/frontend development.png";
import maintenanceImg from "../../assets/maintainace.png";

const Services = () => {
  const serviceCategories = [
    {
      title: "Web Development",
      description: "Build modern, responsive, and high-performance web applications tailored to your needs.",
      icon: <Monitor size={24} />,
      image: webDevImg,
      features: ["Responsive Design", "Modern UI/UX", "Performance Optimized"]
    },
    {
      title: "Backend Development",
      description: "Develop secure and scalable server-side applications and APIs.",
      icon: <Settings size={24} />,
      image: backendDevImg,
      features: ["RESTful APIs", "Database Integration", "Authentication & Authorization"]
    },
    {
      title: "Database Development",
      description: "Design and manage efficient database solutions for data-driven applications.",
      icon: <Database size={24} />,
      image: databaseDevImg,
      features: ["MySQL / MongoDB", "Database Design", "Data Optimization"]
    },
    {
      title: "API Integration",
      description: "Integrate third-party APIs and services to extend your application's functionality.",
      icon: <Smartphone size={24} />,
      image: apiIntegrationImg,
      features: ["Payment Gateways", "Social Media APIs", "Real-time Services (e.g., Firebase)"]
    },
    {
      title: "Frontend Development",
      description: "Create interactive and visually appealing user interfaces using modern technologies.",
      icon: <Layout size={24} />,
      image: frontendDevImg,
      features: ["React.js", "HTML, CSS, JavaScript", "Component-based Architecture"]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and updates to keep your application running smoothly.",
      icon: <Wrench size={24} />,
      image: maintenanceImg,
      features: ["Bug Fixes", "Feature Updates", "Performance Improvements"]
    }
  ];

  const valueProps = [
    {
      title: "Clean & Scalable Code",
      description: "Writing maintainable and efficient code for long-term success.",
      icon: <Zap size={20} />
    },
    {
      title: "Client-Focused Approach",
      description: "Understanding your needs and delivering solutions that add real value.",
      icon: <Users size={20} />
    },
    {
      title: "On-Time Delivery",
      description: "Committed to delivering high-quality work within deadlines.",
      icon: <ShieldCheck size={20} />
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">

        {/* Header and Value Props Row */}
        <div className="services-header-row">
          <div className="services-header-left">
            <div className="what-pill">
              <Layout size={14} />
              <span>WHAT I DO</span>
            </div>
            <h2 className="section-title">My <span>Services</span></h2>
            <p className="section-desc">
              I help businesses and individuals turn their ideas into real-world digital
              solutions. Here are the services I provide, based on my skills and experience.
            </p>
          </div>

          <div className="value-props">
            {valueProps.map((prop, index) => (
              <div key={index} className="value-item">
                <div className="value-icon-box">
                  {prop.icon}
                </div>
                <div className="value-text">
                  <h4>{prop.title}</h4>
                  <p>{prop.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="decorative-text-turning">
            Turning <br /> Ideas into <br /> Solutions
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {serviceCategories.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-image-wrapper">
                <img src={service.image} alt={service.title} className="service-card-img" />
              </div>
              <div className="service-card-body">
                <div className="service-card-top">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <button className="service-arrow-btn">
                    <ChevronRight size={20} />
                  </button>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="feature-list">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex}>
                        <Check size={14} className="check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Work Together Banner */}
        <div className="work-together-banner">
          <div className="banner-content">
            <span className="banner-sub">HAVE A PROJECT IN MIND?</span>
            <h2 className="banner-title">Let's Work <span>Together</span></h2>
            <p className="banner-desc">
              I'm always open to discussing new opportunities, interesting projects,
              or how I can help bring your ideas to life.
            </p>
          </div>
          <div className="banner-actions">
            <a href="#contact" className="get-in-touch-btn">
              Get In Touch <ArrowRight size={18} />
            </a>
          </div>
          <div className="banner-right-text">
            <span>Ideas</span>
            <span>→ Code</span>
            <span>→ Real Solutions</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
