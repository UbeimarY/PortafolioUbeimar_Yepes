"use client";

import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "Inicio", id: "hero" },
    { name: "Blogs", id: "blog" },
    { name: "About Me", id: "about" },
    { name: "Experiencia", id: "experience" },
    { name: "Educación", id: "education" },
    { name: "Proyectos", id: "projects" },
    { name: "Testimonios", id: "testimonials" },
    { name: "Contacto", id: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-black/10 border-b border-gray-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide text-gray-900 dark:text-white">
          Ubeimar
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <li 
              key={link.id} 
              className="cursor-pointer text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-300"
            aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
          >
            {theme === 'light' ? (
              <span className="text-lg">🌞</span> 
            ) : (
              <span className="text-lg">🌙</span> 
            )}
          </button>
          <button 
            className="md:hidden text-lg text-gray-700 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-200 dark:border-white/5">
          <ul className="px-6 py-4 space-y-4">
            {links.map((link) => (
              <li 
                key={link.id}
                className="cursor-pointer text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 py-2"
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