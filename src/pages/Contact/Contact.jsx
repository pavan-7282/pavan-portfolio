import React from "react";
import "./Contact.css";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  ArrowUpRight,
  User,
  Phone,
  Briefcase,
  GraduationCap,
  Target,
  Clock,
  BarChart2,
  Headphones,
  Users,
  Star,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={22} />,
      title: "Email",
      value: "pavanbollam8688@gmail.com",
      desc: "I usually respond within 24 hours.",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=pavanbollam8688@gmail.com",
    },
    {
      icon: <MapPin size={22} />,
      title: "Location",
      value: "Hyderabad, India",
      desc: "Open to remote opportunities worldwide.",
      link: "#",
    },
    {
      icon: <Linkedin size={22} />,
      title: "LinkedIn",
      value: "Connect with me",
      desc: "Let's build professional connections.",
      link: "https://in.linkedin.com/in/pavan-bollam-aa7a7b31a",
    },
    {
      icon: <Github size={22} />,
      title: "GitHub",
      value: "View my work",
      desc: "Check out my projects and contributions.",
      link: "https://github.com/pavan-7282",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <div className="contact-pill">
            <Mail size={14} />
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="contact-title">
            Let's <span>Work Together</span>
          </h1>
          <p className="contact-desc">
            Have a project in mind, a job opportunity, or just want to say hi?
            <br />
            I'd love to hear from you. Let's turn your ideas into real solutions.
          </p>

          <div className="header-decoration">
             <div className="deco-line"></div>
             <div className="deco-text">
                Good Ideas Start with a Message
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M5 5 C 15 35, 35 15, 35 35" stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                  <path d="M30 35 L35 35 L35 30" stroke="var(--text-muted)" strokeWidth="1" fill="none" />
                </svg>
             </div>
          </div>
        </div>

        <div className="contact-main-grid">
          {/* Left side - Info Cards */}
          <div className="contact-info-list">
            {contactInfo.map((info, index) => (
              <a
                href={info.link}
                className="info-card"
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="info-icon-wrapper">{info.icon}</div>
                <div className="info-text">
                  <h3>{info.title}</h3>
                  <p className="info-value">{info.value}</p>
                  <p className="info-sub">{info.desc}</p>
                </div>
                <div className="card-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </a>
            ))}
          </div>

          {/* Right side - About Me Panel */}
          <div className="contact-form-container about-me-panel">
            <div className="form-header">
              <div className="form-icon-box">
                <User size={24} />
              </div>
              <div className="form-title-box">
                <h3>About Me</h3>
                <p>Here are my details. Feel free to reach out!</p>
              </div>
            </div>

            <div className="about-grid">
              <div className="about-field">
                <label>Full Name</label>
                <div className="about-value-box">
                  <User size={18} className="about-icon" />
                  <span>Bollam Pavan</span>
                </div>
              </div>

              <div className="about-field">
                <label>Contact Number</label>
                <a href="tel:+918688030979" className="about-value-box clickable">
                  <Phone size={18} className="about-icon" />
                  <span>+91 8688030979</span>
                </a>
              </div>

              <div className="about-field">
                <label>Email Address</label>
                <div className="about-value-box">
                  <Mail size={18} className="about-icon" />
                  <span>pavanbollam8688@gmail.com</span>
                </div>
              </div>

              <div className="about-field">
                <label>Working At</label>
                <div className="about-value-box">
                  <Briefcase size={18} className="about-icon" />
                  <span>Open to Opportunities</span>
                </div>
              </div>

              <div className="about-field">
                <label>Location</label>
                <div className="about-value-box">
                  <MapPin size={18} className="about-icon" />
                  <span>Hyderabad, India</span>
                </div>
              </div>

              <div className="about-field">
                <label>Experience</label>
                <div className="about-value-box">
                  <BarChart2 size={18} className="about-icon" />
                  <span>1 Year</span>
                </div>
              </div>

              <div className="about-field">
                <label>Education</label>
                <div className="about-value-box">
                  <GraduationCap size={18} className="about-icon" />
                  <span>B.Tech CSE (2020 - 2024)</span>
                </div>
              </div>

              <div className="about-field">
                <label>Looking For</label>
                <div className="about-value-box">
                  <Target size={18} className="about-icon" />
                  <span>Node.js / React / Full Stack Roles</span>
                </div>
              </div>

              <div className="about-field full-width">
                <label>Availability</label>
                <div className="about-value-box">
                  <Clock size={18} className="about-icon" />
                  <span>Available to join immediately</span>
                </div>
              </div>
            </div>

            <div className="about-footer">
               <p>“Let’s build something amazing together!”</p>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="contact-footer-features">
          <div className="feature-item">
            <div className="feature-icon"><Headphones size={20} /></div>
            <div className="feature-text">
              <h4>Quick Response</h4>
              <p>Usually within 24 hours</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Users size={20} /></div>
            <div className="feature-text">
              <h4>Open to Opportunities</h4>
              <p>Full-time, freelance, or collaboration</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Star size={20} /></div>
            <div className="feature-text">
              <h4>Let's Create Something Great</h4>
              <p>Your ideas, my expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="contact-decoration-text">
        TURNING IDEAS INTO SOLUTIONS
      </div>
      <div className="contact-glow glow-1"></div>
      <div className="contact-glow glow-2"></div>
    </section>
  );
};

export default Contact;
