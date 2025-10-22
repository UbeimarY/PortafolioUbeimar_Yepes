"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Inicio", id: "hero" },
    { name: "About Me", id: "about" },
    { name: "Experiencia", id: "experience" },
    { name: "Educación", id: "education" },
    { name: "Proyectos", id: "projects" },
    { name: "Contacto", id: "contact" },
    { name: "Testimonios", id: "testimonials" },
    { name: "Blog", id: "blog" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/10 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">Ubeimar</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <li 
              key={link.id} 
              className="cursor-pointer hover:text-blue-400 transition duration-300"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button className="text-lg hover:text-blue-400 transition duration-300">🌙</button>
          <button 
            className="md:hidden text-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/5">
          <ul className="px-6 py-4 space-y-4">
            {links.map((link) => (
              <li 
                key={link.id}
                className="cursor-pointer hover:text-blue-400 transition duration-300 py-2"
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}