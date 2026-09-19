import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-mark">
          <svg viewBox="0 0 100 100">
            <defs>
              <linearGradient
                id="logoGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#5B9BD5" />
                <stop offset="100%" stopColor="#7DB5E8" />
              </linearGradient>
            </defs>

            <path
              d="M22 15 L58 15 L80 34 L80 70 L52 88 L22 70 Z"
              fill="none"
              stroke="url(#logoGradient)"
              strokeWidth="8"
              strokeLinejoin="round"
            />

            <path
              d="M35 28 L55 28 Q68 28 68 42 Q68 56 55 56 L43 56 L43 76"
              fill="none"
              stroke="url(#logoGradient)"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="logo-text">
          <span>PAVAN</span>
          <span>BOLLAM</span>
        </div>
      </div>

      <nav className="nav-menu">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="header-right">
        <a href="#contact" className="lets-talk-btn">
          Let's Talk
          <span className="plane">➤</span>
        </a>

        <div className="hamburger">
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
