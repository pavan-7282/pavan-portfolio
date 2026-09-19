import React from "react";
import "./Home.css";
import profileImage from "../../assets/profile.jpg";
import { ArrowRight, Download } from "lucide-react";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">

        {/* LEFT CONTENT */}
        <div className="home-content">
          <div className="hello-tag">
            <span className="line"></span>
            HELLO, I'M
          </div>

          <h1 className="hero-title">
            Pavan <br />
            <span className="highlight">Bollam</span>
          </h1>

          <h2 className="hero-role">
            Full Stack <span className="accent">Developer</span>
          </h2>

          <p className="hero-description">
            I build modern, scalable web applications that solve
            real-world problems and deliver exceptional user
            experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" download className="btn-secondary">
              <Download size={18} /> Download CV
            </a>
          </div>

          <div className="home-footer-tags">
            <span className="footer-line"></span>
            <div className="tags-wrapper">
              <span>CODE</span>
              <span className="separator">/</span>
              <span>BUILD</span>
              <span className="separator">/</span>
              <span>LEARN</span>
              <span className="separator">/</span>
              <span>GROW</span>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="home-visual">
          <div className="visual-wrapper">
            <div className="profile-glow-ring">
              <div className="profile-image-container">
                <img src={profileImage} alt="Pavan Bollam" />
              </div>
            </div>

            {/* Decorative orbit dots */}
            <div className="orbit-dot dot-top"></div>
            <div className="orbit-dot dot-right"></div>
            <div className="orbit-dot dot-bottom"></div>

            {/* Floating tilted text */}
            <div className="visual-decorative-text">
              Turning <br />
              Ideas into <br />
              Real Solutions
            </div>
          </div>
        </div>

      </div>

      {/* Availability Status */}
      <div className="availability-bar">
        <span className="status-dot"></span>
        Available for new opportunities
      </div>
    </section>
  );
};

export default Home;
