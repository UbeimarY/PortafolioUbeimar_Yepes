"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { MdTranslate } from "react-icons/md";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { toggleLang, lang, t } = useLanguage();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);
  const links = [
    { name: t("nav.home"), id: "hero" },
    { name: t("nav.blogs"), id: "blog" },
    { name: t("nav.about"), id: "about" },
    { name: t("nav.experience"), id: "experience" },
    { name: t("nav.education"), id: "education" },
    { name: t("nav.projects"), id: "projects" },
    { name: t("nav.testimonials"), id: "testimonials" },
    { name: t("nav.contact"), id: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/60 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
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

        {/* Controles: tema, idioma y menú móvil */}
        <div className="flex items-center gap-4">
          {/* Toggle de tema */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-300"
            aria-label={theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
            title={theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
          >
            {theme === "light" ? <span className="text-lg">🌞</span> : <span className="text-lg">🌙</span>}
          </button>

          {/* Toggle de idioma */}
          <button
            onClick={toggleLang}
            className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-xl"
            aria-label={lang === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
            title={lang === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
          >
            <MdTranslate />
          </button>

          {/* Menú móvil */}
          <button
            className="md:hidden text-lg text-gray-700 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu + Overlay */}
      {isMenuOpen && (
        <>
          {/* Overlay que cierra el menú al hacer clic */}
          <div
            className="fixed inset-0 z-40 md:hidden bg-black/40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            id="mobile-menu"
            className="md:hidden fixed top-[56px] left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-200 dark:border-white/5"
          >
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
        </>
      )}
    </nav>
  );
}