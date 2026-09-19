import React from "react";
import "./Experience.css";

import {
  Briefcase,
  Calendar,
  MapPin,
  Code2,
  GraduationCap,
  BookOpen,
  Cpu,
  Layers,
  Quote,
  ArrowUpRight,
} from "lucide-react";

import experienceImg from "../../assets/expirence.png";

const Experience = () => {
  const experiences = [
    {
      year: "2025 – Present",
      period: "Current",
      title: "Backend Node.js Developer",
      company: "Dha Code Designer Pvt. Ltd.",
      location: "Hyderabad, India",
      description:
        "Building scalable backend APIs, integrating databases and third-party services, and contributing to real-world web applications.",
      icon: <Briefcase size={18} />,
      tech: ["Node.js", "Express.js", "MySQL", "MongoDB", "Git", "Postman"],
      isCurrent: true,
    },

    {
      year: "2025",
      period: "3 Months",
      title: "Backend Developer Intern",
      company: "Dha Code Designer Pvt. Ltd.",
      location: "Hyderabad, India",
      description:
        "Hands-on experience in backend development, REST API development, database integration, and real-world project development.",
      icon: <Code2 size={18} />,
      tech: ["Node.js", "Express.js", "MySQL", "REST APIs", "Git"],
    },

    {
      year: "2024",
      period: "Training",
      title: "MERN Stack Developer Training",
      company: "10000 Coders",
      location: "KPHB, Hyderabad",
      description:
        "Completed MERN Stack training with hands-on projects covering frontend and backend development.",
      icon: <BookOpen size={18} />,
      tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
    },

    {
      year: "2024",
      period: "Graduation",
      title: "Bachelor's Degree",
      company: "Guru Nanak Institutions",
      location: "Ibrahimpatnam, Hyderabad",
      description:
        "Completed graduation in 2024 and built a strong foundation for a career in software development.",
      icon: <GraduationCap size={18} />,
      tech: ["B.Tech / B.E", "Computer Science", "2020 – 2024"],
    },
  ];

  const technologies = [
    "Node.js",
    "React.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Git",
    "REST APIs",
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="experience-page-header">
          <div>
            <div className="journey-tag">
              <span className="tag-dot"></span>
              MY JOURNEY
            </div>

            <h1 className="experience-heading">
              Experience <span>& Growth</span>
            </h1>

            <p className="experience-subtitle">
              A journey of learning, building and growing through real-world
              experiences and opportunities.
            </p>
          </div>

          <div className="header-meta">
            <div className="meta-item">
              <span className="meta-number">01+</span>
              <span className="meta-label">Years Experience</span>
            </div>

            <div className="meta-line"></div>

            <div className="meta-item">
              <span className="meta-number">04</span>
              <span className="meta-label">Career Milestones</span>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <div className="experience-layout">

          {/* =================================================
              TIMELINE
          ================================================= */}
          <div className="experience-left">

            <div className="timeline">

              {experiences.map((exp, index) => (
                <article
                  className={`timeline-item ${
                    exp.isCurrent ? "current-experience" : ""
                  }`}
                  key={index}
                >

                  {/* DATE */}
                  <div className="timeline-date">
                    <span className="timeline-year">
                      {exp.year}
                    </span>

                    <span className="timeline-period">
                      {exp.period}
                    </span>
                  </div>

                  {/* LINE */}
                  <div className="timeline-marker">

                    <div className="timeline-dot">
                      {exp.icon}
                    </div>

                    {index !== experiences.length - 1 && (
                      <div className="timeline-line"></div>
                    )}

                  </div>

                  {/* EXPERIENCE CARD */}
                  <div className="experience-card">

                    <div className="card-top">

                      <div>
                        <div className="card-eyebrow">
                          {exp.isCurrent ? "CURRENT ROLE" : "EXPERIENCE"}
                        </div>

                        <h2>{exp.title}</h2>
                      </div>

                      {exp.isCurrent && (
                        <span className="current-tag">
                          <span></span>
                          Active
                        </span>
                      )}

                    </div>

                    <div className="company-row">

                      <span className="company-name">
                        {exp.company}
                      </span>

                      <span className="location">
                        <MapPin size={13} />
                        {exp.location}
                      </span>

                    </div>

                    <p className="exp-description">
                      {exp.description}
                    </p>

                    <div className="tech-stack">

                      <span className="tech-label">
                        Tech Stack
                      </span>

                      <div className="tech-tags">
                        {exp.tech.map((technology, techIndex) => (
                          <span
                            className="tech-tag"
                            key={techIndex}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>

                </article>
              ))}

            </div>

          </div>

          {/* =================================================
              RIGHT PANEL
          ================================================= */}
          <aside className="experience-right">

            {/* IMAGE */}
            <div className="journey-image-card">

              <img
                src={experienceImg}
                alt="Developer journey"
              />

              <div className="image-gradient"></div>

              <div className="image-caption">
                <span>BUILD</span>
                <span>LEARN</span>
                <span>GROW</span>
              </div>

              <div className="image-badge">
                <span></span>
                Always Learning
              </div>

            </div>


            {/* TECHNOLOGIES */}
            <div className="technology-panel">

              <div className="panel-heading">

                <div className="panel-title">
                  <Cpu size={16} />
                  <span>Core Technologies</span>
                </div>

                <span className="panel-count">
                  08
                </span>

              </div>

              <div className="technology-list">

                {technologies.map((technology, index) => (
                  <div
                    className="technology-item"
                    key={index}
                  >
                    <span className="technology-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{technology}</span>
                  </div>
                ))}

              </div>

            </div>


            {/* QUICK STATS */}
            <div className="quick-stats">

              <div className="panel-heading">

                <div className="panel-title">
                  <Layers size={16} />
                  <span>Quick Stats</span>
                </div>

              </div>

              <div className="stats-row">

                <div className="stat">
                  <strong>1+</strong>
                  <span>Years</span>
                </div>

                <div className="stat">
                  <strong>4</strong>
                  <span>Milestones</span>
                </div>

                <div className="stat">
                  <strong>10+</strong>
                  <span>Technologies</span>
                </div>

              </div>

            </div>


            {/* QUOTE */}
            <div className="experience-quote">

              <Quote size={20} />

              <div>
                <p>
                  Every experience shapes the developer I become.
                </p>

                <span>
                  — Pavan Bollam
                </span>
              </div>

            </div>

          </aside>

        </div>

      </div>

      {/* Decorative background */}
      <div className="experience-orb orb-one"></div>
      <div className="experience-orb orb-two"></div>

    </section>
  );
};

export default Experience;