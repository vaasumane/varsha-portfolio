import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-[#020817]/90 backdrop-blur-md border-b border-slate-800 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4 md:py-6">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold">
          <span className="text-cyan-400">VM</span>
          <span className="text-gray-400">.dev</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-400">
          <button onClick={() => scrollToSection("about")} className="hover:text-cyan-400">
            About
          </button>
          <button onClick={() => scrollToSection("experience")} className="hover:text-cyan-400">
            Experience
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-cyan-400">
            Projects
          </button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-cyan-400">
            Skills
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-cyan-400">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#020817] border-t border-slate-700 px-4 py-4">
          <div className="flex flex-col gap-4 text-gray-300">
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("experience")}>Experience</button>
            <button onClick={() => scrollToSection("projects")}>Projects</button>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>
        </div>
      )}
    </header>
  );
}