import React from "react";
import "./SocialSidebar.css";

const SocialSidebar = () => {
  return (
    <aside className="social-sidebar">
      <a href="#home" className="sidebar-icon active" title="Home">
        ⌂
      </a>

      <a
        href="https://github.com/pavan-7282"
        className="sidebar-icon"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .7C5.73.7.65 5.79.65 12.07c0 4.99 3.24 9.22 7.73 10.71.57.1.78-.25.78-.55v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.3 2.44 2.8 1.73.1-.73.39-1.23.71-1.51-2.51-.29-5.15-1.26-5.15-5.59 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.12 1.16.9-.25 1.87-.38 2.83-.38.96 0 1.93.13 2.83.38 2.17-1.46 3.12-1.16 3.12-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.34-2.65 5.29-5.17 5.58.4.35.76 1.02.76 2.06v3.06c0 .3.21.66.79.55 4.48-1.49 7.72-5.72 7.72-10.71C23.35 5.79 18.27.7 12 .7z" />
        </svg>
      </a>

      <a
        href="https://in.linkedin.com/in/pavan-bollam-aa7a7b31a"
        className="sidebar-icon"
        target="_blank"
        rel="noreferrer"
        title="LinkedIn"
      >
        in
      </a>

      <a href="mailto:pavanbollam8688@gmail.com" className="sidebar-icon" title="Email">
        ✉
      </a>

      <a
        href="https://instagram.com/"
        className="sidebar-icon"
        target="_blank"
        rel="noreferrer"
        title="Instagram"
      >
        ◎
      </a>

      <div className="sidebar-line"></div>
    </aside>
  );
};

export default SocialSidebar;
