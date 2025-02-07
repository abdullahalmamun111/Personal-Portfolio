import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.jpeg";
import resume from '../assets/Abdullah Resume (1).pdf'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll event to toggle blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observeSections = () => {
      const sections = document.querySelectorAll("section");
      const options = {
        root: null,
        threshold: 0.6, // 60% of the section is visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, options);

      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    };

    window.addEventListener("scroll", handleScroll);
    const cleanupObserver = observeSections();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanupObserver();
    };
  }, []);

  return (
    <div
      className={`fixed px-5 top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-800/70 backdrop-blur-md shadow-lg"
          : "bg-black shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-white flex items-center gap-2">
          <img className="w-10" src={logo} alt="Logo" />
          <span>ABDULLAH</span>
        </div>

        {/* Navigation Menu (Desktop) */}
        <div className="hidden md:flex bg-gray-800/90 py-3 px-6 rounded-full gap-6 text-white">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "project", label: "Project" },
            { id: "contact", label: "Contact" },
          ].map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`relative hover:text-blue-400 transition ${
                activeSection === section.id
                  ? "text-blue-400 font-bold active-link"
                  : ""
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>

        {/* Get Started Button (Desktop) */}
        <div className="hidden md:block">
          <button className="btn bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg shadow-md hover:from-cyan-500 hover:to-blue-500 transition-all duration-300">
            
            <a href={resume}
            download
            >
              Get Resume
            </a>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:bg-gray-700 p-2 rounded focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900 text-white shadow-md transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen p-4" : "max-h-0"
        }`}
      >
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "skills", label: "Skills" },
          { id: "project", label: "Project" },
          { id: "contact", label: "Contact" },
        ].map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="block py-2 hover:text-blue-400 transition"
          >
            {section.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
