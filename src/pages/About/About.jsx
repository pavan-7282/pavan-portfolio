import React from "react";
import aboutImage from "../../assets/about me .png";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-main">
          {/* Left Content */}
          <div className="about-content">
            <p className="about-tag">
              GET TO KNOW ME <span>●</span>
            </p>

            <h1>
              About <span>Me</span>
            </h1>

            <p className="about-description">
              I'm <strong>Pavan Bollam</strong>, a passionate <span>Full Stack Developer</span>{" "}
              who loves building modern, scalable and impactful web
              applications.
            </p>

            <p className="about-description">
              I enjoy turning complex problems into simple, beautiful and
              intuitive solutions. My journey in tech started with curiosity
              and has grown into a career driven by continuous learning and
              innovation.
            </p>

            {/* Top Cards */}
            <div className="about-cards">
              <div className="about-card">
                <div className="card-icon">🎯</div>
                <div>
                  <h3>Problem Solver</h3>
                  <p>I love solving real-world problems</p>
                </div>
              </div>

              <div className="about-card">
                <div className="card-icon">🚀</div>
                <div>
                  <h3>Quick Learner</h3>
                  <p>Always learning new technologies</p>
                </div>
              </div>

              <div className="about-card">
                <div className="card-icon">💜</div>
                <div>
                  <h3>Clean Code</h3>
                  <p>Writing clean, efficient & scalable code</p>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" className="cv-btn" download>
                Download CV
                <span className="btn-icon">↓</span>
              </a>
            </div>
          </div>

          {/* Right Image Wrapper */}
          <div className="about-image-wrapper">
            <div className="image-glow"></div>
            <div className="about-image-container">
              <img
                src={aboutImage}
                alt="Pavan Bollam"
                className="about-image"
              />

              {/* Floating Badges */}
              <div className="floating-badge badge-1">
                <div className="badge-icon">{"</>"}</div>
                <div className="badge-text">
                  <span>Full Stack</span>
                  <span>Developer</span>
                </div>
              </div>

              <div className="floating-badge badge-2">
                <div className="badge-icon">⚡</div>
                <div className="badge-text">
                  <span>Performance</span>
                  <span>Focused</span>
                </div>
              </div>

              <div className="floating-badge badge-3">
                <div className="badge-icon">📂</div>
                <div className="badge-text">
                  <span>Clean</span>
                  <span>Architecture</span>
                </div>
              </div>

              <div className="floating-badge badge-4">
                <div className="badge-icon">💡</div>
                <div className="badge-text">
                  <span>Always</span>
                  <span>Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    </section>
  );
};

export default About;
