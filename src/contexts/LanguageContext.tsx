// contexts/LanguageContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "es" | "en";
type Translations = Record<string, Record<Lang, string>>;

const LanguageContext = createContext<{
  lang: Lang;
  toggleLang: () => void;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}>({
  lang: "es",
  toggleLang: () => {},
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored) setLang(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle("lang-en", lang === "en");
    document.documentElement.classList.toggle("lang-es", lang === "es");
  }, [lang]);

  const t = useMemo(
    () => (key: string) => translations[key]?.[lang] ?? key,
    [lang]
  );

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

const translations: Translations = {
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.blogs": { es: "Blogs", en: "Blogs" },
  "nav.about": { es: "About Me", en: "About Me" },
  "nav.experience": { es: "Experiencia", en: "Experience" },
  "nav.education": { es: "Educación", en: "Education" },
  "nav.projects": { es: "Proyectos", en: "Projects" },
  "nav.testimonials": { es: "Testimonios", en: "Testimonials" },
  "nav.contact": { es: "Contacto", en: "Contact" },

  // Hero
  "hero.greeting": { es: "¡Hola! Soy", en: "Hello! I am" },
  "hero.name": { es: "Ubeimar Yepes", en: "Ubeimar Yepes" },
  "hero.role": { es: "Desarrollador Full Stack & UI/UX Designer", en: "Full Stack Developer & UI/UX Designer" },
  "hero.description": {
    es: "Desarrollador Full Stack en formación, especializado en tecnologías modernas como TypeScript, Next.js, Node.js y Python. Con experiencia en Java y programación embebida para microchips. Creo soluciones funcionales, limpias y eficientes.",
    en: "Full Stack developer in training, focused on modern tech like TypeScript, Next.js, Node.js and Python. Experience in Java and embedded programming for microchips. I build functional, clean and efficient solutions.",
  },
  "cta.projects": { es: "Ver Mis Proyectos", en: "View My Projects" },
  "cta.contact": { es: "Contáctame", en: "Contact Me" },

  // About
  "about.title": { es: "About Me", en: "About Me" },
  "about.subtitle": {
    es: "Desarrollador, escritor, músico y docente apasionado por crear experiencias digitales excepcionales",
    en: "Developer, writer, musician and teacher passionate about crafting exceptional digital experiences",
  },
  "about.education": { es: "Educación", en: "Education" },
  "about.practice": { es: "Prácticas pedagógicas y colaboración profesional", en: "Pedagogical practice and professional collaboration" },

  // Projects
  "projects.title": { es: "Mis Proyectos", en: "My Projects" },
  "projects.others": { es: "Otros Proyectos", en: "Other Projects" },
  "projects.viewDemo": { es: "Ver Demo", en: "View Demo" },

  // Blogs
  "blogs.title": { es: "Mis Blogs", en: "My Blogs" },
  "blogs.subtitle": {
    es: "Comparto conocimientos, experiencias y tendencias en desarrollo web y tecnología",
    en: "I share knowledge, experiences and trends in web development and technology",
  },
  "blogs.read": { es: "Leer artículo", en: "Read article" },

  // Experience
  "experience.title": { es: "Mi Experiencia", en: "My Experience" },
  "experience.subtitle": {
    es: "Mi trayectoria profesional desarrollando soluciones tecnológicas innovadoras",
    en: "My professional journey building innovative technology solutions",
  },

  // Education
  "education.title": { es: "Mi Educación", en: "My Education" },
  "education.highlightsTitle": { es: "Logros destacados:", en: "Key highlights:" },

  // Contact
  "contact.title": { es: "Contacto", en: "Contact" },
  "contact.subtitle": {
    es: "¿Tienes un proyecto en mente? ¡Me encantaría colaborar contigo!",
    en: "Do you have a project in mind? I’d love to collaborate!",
  },
  "contact.info": { es: "Información de Contacto", en: "Contact Information" },
  "contact.email": { es: "Email", en: "Email" },
  "contact.phone": { es: "Teléfono", en: "Phone" },
  "contact.location": { es: "Ubicación", en: "Location" },
  "contact.locationValue": { es: "Pasto, Colombia", en: "Pasto, Colombia" },
  "contact.socials": { es: "Sígueme en redes", en: "Follow me" },
  "contact.formTitle": { es: "Envíame un mensaje", en: "Send me a message" },
  "contact.nameLabel": { es: "Nombre *", en: "Name *" },
  "contact.emailLabel": { es: "Email *", en: "Email *" },
  "contact.subjectLabel": { es: "Asunto *", en: "Subject *" },
  "contact.messageLabel": { es: "Mensaje *", en: "Message *" },
  "contact.namePh": { es: "Tu nombre completo", en: "Your full name" },
  "contact.emailPh": { es: "tu@email.com", en: "you@email.com" },
  "contact.subjectPh": { es: "¿De qué se trata tu proyecto?", en: "What is your project about?" },
  "contact.messagePh": {
    es: "Cuéntame más detalles sobre tu proyecto, timeline, presupuesto, etc.",
    en: "Tell me more details about your project, timeline, budget, etc.",
  },
  "contact.submit": { es: "Enviar Mensaje", en: "Send Message" },
  "contact.responseTime": { es: "Respondo a todos los mensajes en menos de 24 horas", en: "I respond to messages within 24 hours" },
  "contact.emailNote": { es: "Envíame un mensaje directo", en: "Send me a direct email" },
  "contact.phoneNote": { es: "Llamada o WhatsApp", en: "Call or WhatsApp" },
  "contact.remote": { es: "Disponible para trabajo remoto", en: "Available for remote work" },

  // Testimonials
  "testimonials.title": { es: "Testimonios", en: "Testimonials" },
  "testimonials.subtitle": {
    es: "Lo que dicen mis compañeros y colaboradores sobre trabajar conmigo",
    en: "What peers and collaborators say about working with me",
  },
  "testimonials.ctaTitle": {
    es: "¿Te gustaría ser el próximo en compartir una experiencia exitosa?",
    en: "Would you like to be the next to share a successful experience?",
  },
  "testimonials.ctaDesc": {
    es: "Si hemos trabajado juntos en algún proyecto, me encantaría escuchar tu experiencia. Tu testimonio puede ayudar a otros a conocer mi forma de trabajo y colaboración.",
    en: "If we’ve worked together on any project, I’d love to hear your experience. Your testimonial can help others learn about my way of working and collaboration.",
  },
  "testimonials.ctaContact": { es: "Contáctame", en: "Contact Me" },
  "testimonials.ctaLeave": { es: "Dejar Testimonio", en: "Leave Testimonial" },

  // Footer
  "footer.quicklinks": { es: "Enlaces Rápidos", en: "Quick Links" },
  "footer.services": { es: "Servicios", en: "Services" },
  "footer.privacy": { es: "Política de Privacidad", en: "Privacy Policy" },
  "footer.terms": { es: "Términos de Uso", en: "Terms of Use" },
  "footer.inspired": { es: "Inspirado por Celi", en: "Inspired by Celi" },
};