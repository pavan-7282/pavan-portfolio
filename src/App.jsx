import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SocialSidebar from "./components/SocialSidebar/SocialSidebar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialSidebar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
