import React from "react";
import "./Skills.css";
import profileImg from "../../assets/profile.jpg";

// Real SVG Technology Icons
import reactIcon from "../../assets/icon/react.svg";
import nodeIcon from "../../assets/icon/node-js.svg";
import jsIcon from "../../assets/icon/javascript.svg";
import expressIcon from "../../assets/icon/express.svg";
import mysqlIcon from "../../assets/icon/mysql.svg";
import mongodbIcon from "../../assets/icon/mongodb.svg";
import githubIcon from "../../assets/icon/github-142.svg";
import htmlIcon from "../../assets/icon/html-5.svg";
import cssIcon from "../../assets/icon/css-3.svg";
import bootstrapIcon from "../../assets/icon/bootstrap.svg";
import tailwindIcon from "../../assets/icon/tailwindcss-icon.svg";
import postmanIcon from "../../assets/icon/postman-icon.svg";
import vscodeIcon from "../../assets/icon/vscode3.svg";
import firebaseIcon from "../../assets/icon/firebase.svg";
import dockerIcon from "../../assets/icon/docker.svg";
import linuxIcon from "../../assets/icon/linux.svg";
import awsIcon from "../../assets/icon/aws.svg";

// ==========================================
// ORBIT SKILLS
// ==========================================

const orbitSkills = [
  {
    name: "React",
    icon: reactIcon,
    angle: 0,
  },
  {
    name: "JavaScript",
    icon: jsIcon,
    angle: 45,
  },
  {
    name: "Express",
    icon: expressIcon,
    angle: 90,
  },
  {
    name: "MongoDB",
    icon: mongodbIcon,
    angle: 135,
  },
  {
    name: "AWS",
    icon: awsIcon,
    angle: 180,
  },
  {
    name: "GitHub",
    icon: githubIcon,
    angle: 225,
  },
  {
    name: "Docker",
    icon: dockerIcon,
    angle: 270,
  },
  {
    name: "Node.js",
    icon: nodeIcon,
    angle: 315,
  },
];

// ==========================================
// AREAS I WORK WITH
// ==========================================

const categories = [
  {
    title: "Frontend",
    description: "Build beautiful user interfaces",
    icon: reactIcon,
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    description: "Powerful server-side solutions",
    icon: nodeIcon,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    description: "Store and manage application data",
    icon: mongodbIcon,
    skills: [
      "MongoDB",
      "MySQL",
      "Firebase",
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Deploy and scale applications",
    icon: awsIcon,
    skills: [
      "AWS",
      "Docker",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Tools & Others",
    description: "Tools that improve productivity",
    icon: vscodeIcon,
    skills: [
      "VS Code",
      "Postman",
      "Linux",
    ],
  },
];

// ==========================================
// OTHER TOOLS
// ==========================================

const otherTools = [
  {
    name: "HTML5",
    icon: htmlIcon,
  },
  {
    name: "CSS3",
    icon: cssIcon,
  },
  {
    name: "JavaScript",
    icon: jsIcon,
  },
  {
    name: "React.js",
    icon: reactIcon,
  },
  {
    name: "Node.js",
    icon: nodeIcon,
  },
  {
    name: "Express.js",
    icon: expressIcon,
  },
  {
    name: "MongoDB",
    icon: mongodbIcon,
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
  },
  {
    name: "Firebase",
    icon: firebaseIcon,
  },
  {
    name: "AWS",
    icon: awsIcon,
  },
  {
    name: "Docker",
    icon: dockerIcon,
  },
  {
    name: "GitHub",
    icon: githubIcon,
  },
  {
    name: "Bootstrap",
    icon: bootstrapIcon,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    name: "Postman",
    icon: postmanIcon,
  },
  {
    name: "VS Code",
    icon: vscodeIcon,
  },
  {
    name: "Linux",
    icon: linuxIcon,
  },
];

// ==========================================
// COMPONENT
// ==========================================

const Skills = () => {
  return (
    <section className="skills-section" id="skills">

      <div className="skills-container">

        {/* ==================================
            HEADER
        ================================== */}

        <div className="skills-header-main">

          <div className="expertise-tag">
            <span className="tag-dot"></span>
            MY EXPERTISE
          </div>

          <h1 className="skills-title">
            Skills & <span>Technologies</span>
          </h1>

          <p className="skills-subtitle">
            I work with modern technologies to build scalable,
            secure and high performance web applications.
          </p>

          <div className="header-quote">

            <div className="quote-icon">
              “
            </div>

            <p>
              The right tools, combined with curiosity,
              can build amazing things.
            </p>

            <div className="learning-status">

              <span>Always Learning</span>

              <span>Always Growing</span>

              <div className="rocket-icon">
                🚀
              </div>

            </div>

          </div>

        </div>


        {/* ==================================
            MAIN CONTENT
        ================================== */}

        <div className="skills-content-grid">

          {/* ==================================
              LEFT - AREAS
          ================================== */}

          <div className="categories-column">

            <div className="areas-title">
              <span>WHAT I DO</span>
              <h2>Areas I Work With</h2>
            </div>

            {categories.map((cat, idx) => (

              <div
                key={idx}
                className={`category-item ${
                  idx === 0 ? "active" : ""
                }`}
              >

                {/* Icon */}

                <div className="category-icon-wrapper">

                  <img
                    src={cat.icon}
                    alt={cat.title}
                  />

                </div>


                {/* Text */}

                <div className="category-text">

                  <h3>
                    {cat.title}
                  </h3>

                  <p>
                    {cat.description}
                  </p>

                  <div className="category-skills">

                    {cat.skills.map(
                      (skill, skillIndex) => (

                        <span
                          key={skillIndex}
                          className="category-skill"
                        >
                          {skill}
                        </span>

                      )
                    )}

                  </div>

                </div>


                {/* Arrow */}

                <div className="category-arrow">
                  →
                </div>

              </div>

            ))}

          </div>


          {/* ==================================
              MIDDLE - ORBIT
          ================================== */}

          <div className="orbit-section">

            <div className="orbit-container">

              <div className="orbit-path"></div>

              <div className="orbit-inner-glow"></div>


              {/* Profile */}

              <div className="center-profile">

                <img
                  src={profileImg}
                  alt="Pavan Bollam"
                />

                <div className="profile-glow"></div>

              </div>


              {/* Orbit Technology Logos */}

              {orbitSkills.map((skill, idx) => (

                <div
                  key={idx}
                  className="orbit-skill"
                  style={{
                    "--angle": `${skill.angle}deg`,
                  }}
                >

                  <div className="orbit-icon-card">

                    <img
                      src={skill.icon}
                      alt={skill.name}
                    />

                  </div>

                  <span className="orbit-skill-name">
                    {skill.name}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* ==================================
              RIGHT - AREAS DETAILS
          ================================== */}

          <div className="areas-details">

            <div className="areas-details-header">

              <span>MY SKILL SET</span>

              <h2>
                Technologies I Work With
              </h2>

              <p>
                A combination of frontend, backend,
                database and cloud technologies.
              </p>

            </div>


            <div className="areas-detail-grid">

              <div className="detail-card">

                <div className="detail-number">
                  01
                </div>

                <h3>
                  Frontend Development
                </h3>

                <p>
                  Creating responsive and modern
                  user interfaces with React and
                  JavaScript.
                </p>

                <div className="detail-logos">

                  <img src={reactIcon} alt="React" />
                  <img src={jsIcon} alt="JavaScript" />
                  <img src={htmlIcon} alt="HTML5" />
                  <img src={cssIcon} alt="CSS3" />

                </div>

              </div>


              <div className="detail-card">

                <div className="detail-number">
                  02
                </div>

                <h3>
                  Backend Development
                </h3>

                <p>
                  Building scalable APIs and
                  server-side applications.
                </p>

                <div className="detail-logos">

                  <img src={nodeIcon} alt="Node.js" />
                  <img src={expressIcon} alt="Express.js" />

                </div>

              </div>


              <div className="detail-card">

                <div className="detail-number">
                  03
                </div>

                <h3>
                  Database Development
                </h3>

                <p>
                  Managing structured and
                  unstructured application data.
                </p>

                <div className="detail-logos">

                  <img
                    src={mongodbIcon}
                    alt="MongoDB"
                  />

                  <img
                    src={mysqlIcon}
                    alt="MySQL"
                  />

                  <img
                    src={firebaseIcon}
                    alt="Firebase"
                  />

                </div>

              </div>


              <div className="detail-card">

                <div className="detail-number">
                  04
                </div>

                <h3>
                  Cloud & DevOps
                </h3>

                <p>
                  Deploying, managing and scaling
                  modern applications.
                </p>

                <div className="detail-logos">

                  <img src={awsIcon} alt="AWS" />

                  <img
                    src={dockerIcon}
                    alt="Docker"
                  />

                  <img
                    src={githubIcon}
                    alt="GitHub"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ==================================
            OTHER TOOLS
        ================================== */}

        <div className="bottom-sections">

          <div className="other-tools-container">

            <div className="tools-heading">

              <div>

                <span>
                  TECHNOLOGIES
                </span>

                <h3>
                  Other Tools I Work With
                </h3>

              </div>

              <p>
                Technologies and tools I use to
                build, test and deploy applications.
              </p>

            </div>


            <div className="tools-grid">

              {otherTools.map((tool, idx) => (

                <div
                  key={idx}
                  className="tool-item"
                >

                  <div className="tool-icon-box">

                    <img
                      src={tool.icon}
                      alt={tool.name}
                    />

                  </div>

                  <span>
                    {tool.name}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* ==================================
              ALWAYS LEARNING
          ================================== */}

          <div className="learning-card">

            <div className="learning-icon">
              💡
            </div>

            <div className="learning-content">

              <h4>
                Always Learning
              </h4>

              <p>
                Technology evolves everyday,
                and so do I. I love exploring
                new tools and building better
                solutions.
              </p>

            </div>

            <div className="learning-next-btn">
              →
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;