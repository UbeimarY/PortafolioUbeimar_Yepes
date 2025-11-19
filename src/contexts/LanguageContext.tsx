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
    const stored = localStorage.getItem("lang");
    if (stored) {
        const normalized = stored.toLowerCase();
        if (normalized === "es" || normalized === "en") {
            setLang(normalized as Lang);
        } else {
            setLang("es");
        }
    }
  }, []);

  useEffect(() => {
    const normalized = (lang as string).toLowerCase();
    localStorage.setItem("lang", normalized);
    document.documentElement.lang = normalized;
    document.documentElement.classList.toggle("lang-en", normalized === "en");
    document.documentElement.classList.toggle("lang-es", normalized === "es");
  }, [lang]);

  const t = useMemo(
    () => (key: string) => {
      const k = key.trim();
      const L = ((lang as string) || "es").toLowerCase() as Lang;
      // Intento directo
      const direct = translations[k]?.[L];
      if (direct !== undefined) return direct;
      // Tolerar mayúsculas/minúsculas en la clave
      const lowerKey = translations[k.toLowerCase()]?.[L];
      if (lowerKey !== undefined) return lowerKey;
      // Fallback a español si existe
      const fallbackEs = translations[k]?.["es"] ?? translations[k.toLowerCase()]?.["es"];
      return fallbackEs ?? k
    },
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

// contexts/LanguageContext.tsx
const translations: Translations = {
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.blogs": { es: "Blogs", en: "Blogs" },
  "nav.about": { es: "Sobre mí", en: "About Me" },
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
  "about.title": { es: "Sobre mí", en: "About Me" },
  "about.subtitle": {
    es: "Desarrollador, escritor, músico y docente apasionado por crear experiencias digitales excepcionales",
    en: "Developer, writer, musician and teacher passionate about crafting exceptional digital experiences",
  },
  "about.p1": {
    es: "Soy un desarrollador full stack especializado en crear aplicaciones web modernas con React, TypeScript, Next.js y Node.js. Mi expertise incluye desarrollo de servidores con Python, experiencia en Java y conocimientos únicos en programación de bajo nivel para bordadoras y microchips.",
    en: "I am a full‑stack developer specialized in building modern web applications with React, TypeScript, Next.js, and Node.js. My expertise includes server development with Python, experience in Java, and unique knowledge in low‑level programming for embroidery machines and microchips.",
  },
  "about.p2": {
    es: "Más allá de la programación, soy escritor apasionado por las narrativas digitales, músico que encuentra inspiración en instrumentos tradicionales y modernos, y docente comprometido con formar las próximas generaciones de desarrolladores. Esta diversidad enriquece mi enfoque técnico y creativo.",
    en: "Beyond programming, I am a writer passionate about digital narratives, a musician inspired by traditional and modern instruments, and an educator committed to mentoring the next generation of developers. This diversity enriches my technical and creative approach.",
  },
  "about.feature.dev.title": { es: "Desarrollo Full Stack", en: "Full‑Stack Development" },
  "about.feature.dev.desc": { es: "Experiencia en React, Next.js, Python y Node.js", en: "Experience in React, Next.js, Python and Node.js" },
  "about.feature.uiux.title": { es: "Diseño UI/UX", en: "UI/UX Design" },
  "about.feature.uiux.desc": { es: "Interfaces intuitivas y experiencias de usuario", en: "Intuitive interfaces and user experiences" },
  "about.feature.write.title": { es: "Escritura", en: "Writing" },
  "about.feature.write.desc": { es: "Contenido técnico y narrativas creativas", en: "Technical content and creative narratives" },
  "about.feature.music.title": { es: "Música", en: "Music" },
  "about.feature.music.desc": { es: "Expresión artística y formatos audiovisuales", en: "Artistic expression and audiovisual formats" },
  "about.feature.teacher.title": { es: "Docencia", en: "Teaching" },
  "about.feature.teacher.desc": { es: "Prácticas pedagógicas y colaboración profesional", en: "Pedagogical practices and professional collaboration" },
  "about.feature.innovation.title": { es: "Innovación", en: "Innovation" },
  "about.feature.innovation.desc": { es: "Siempre buscando nuevas tecnologías y metodologías", en: "Always exploring new technologies and methodologies" },

  // Projects
  "projects.title": { es: "Mis Proyectos", en: "My Projects" },
  "projects.subtitle": {
    es: "Una selección de proyectos que demuestran mis habilidades técnicas y creatividad.",
    en: "A selection of projects showcasing technical skills and creativity.",
  },
  "projects.featured": { es: "Proyectos Destacados", en: "Featured Projects" },
  "projects.others": { es: "Otros Proyectos", en: "Other Projects" },
  "projects.viewDemo": { es: "Ver Demo", en: "View Demo" },

  // Blogs
  "blogs.title": { es: "Mis Blogs", en: "My Blogs" },
  "blogs.subtitle": {
    es: "Comparto conocimientos, experiencias y tendencias en desarrollo web y tecnología",
    en: "I share knowledge, experiences and trends in web development and technology",
  },
  "blogs.read": { es: "Leer artículo", en: "Read article" },
  "blogs.newsletter": { es: "Suscríbete al Newsletter", en: "Subscribe to Newsletter" },
  "blogs.viewAll": { es: "Ver Todos los Artículos", en: "View All Articles" },

  // Blog posts (ejemplo de 4)
  "blogs.post1.title": { es: "El Futuro del Desarrollo Frontend con React 18", en: "The Future of Frontend with React 18" },
  "blogs.post1.date": { es: "15 de Marzo, 2024", en: "March 15, 2024" },
  "blogs.post1.readTime": { es: "8 min", en: "8 min" },
  "blogs.post1.tag1": { es: "React", en: "React" },
  "blogs.post1.tag2": { es: "Rendimiento", en: "Performance" },
  "blogs.post1.excerpt": {
    es: "Exploramos las nuevas características de React 18 y cómo están revolucionando el desarrollo de aplicaciones web modernas.",
    en: "Exploring new features in React 18 and how they reshape modern web apps.",
  },

  "blogs.post2.title": { es: "TypeScript: Mejores Prácticas para Proyectos Grandes", en: "TypeScript: Best Practices for Large Projects" },
  "blogs.post2.date": { es: "24 de Marzo, 2024", en: "March 24, 2024" },
  "blogs.post2.readTime": { es: "10 min", en: "10 min" },
  "blogs.post2.tag1": { es: "TypeScript", en: "TypeScript" },
  "blogs.post2.tag2": { es: "Escalabilidad", en: "Scalability" },
  "blogs.post2.excerpt": {
    es: "Una guía completa con patrones efectivos para mejorar TypeScript y entregar código robusto en proyectos empresariales grandes.",
    en: "A comprehensive guide with effective patterns to improve TypeScript and deliver robust code in large enterprise projects.",
  },

  "blogs.post3.title": { es: "Microservicios con Node.js y Docker", en: "Microservices with Node.js and Docker" },
  "blogs.post3.date": { es: "10 de Febrero, 2024", en: "February 10, 2024" },
  "blogs.post3.readTime": { es: "15 min", en: "15 min" },
  "blogs.post3.tag1": { es: "Node.js", en: "Node.js" },
  "blogs.post3.tag2": { es: "Docker", en: "Docker" },
  "blogs.post3.tag3": { es: "Observabilidad", en: "Observability" },
  "blogs.post3.excerpt": {
    es: "Cómo diseñar y desplegar una arquitectura de microservicios escalable utilizando Node.js, Express y Docker.",
    en: "How to design and deploy a scalable microservices architecture using Node.js, Express and Docker.",
  },

  "blogs.post4.title": { es: "Design Systems: De la Teoría a la Práctica", en: "Design Systems: From Theory to Practice" },
  "blogs.post4.date": { es: "25 de Febrero, 2024", en: "February 25, 2024" },
  "blogs.post4.readTime": { es: "9 min", en: "9 min" },
  "blogs.post4.tag1": { es: "UI/UX", en: "UI/UX" },
  "blogs.post4.tag2": { es: "Componentización", en: "Componentization" },
  "blogs.post4.excerpt": {
    es: "Mi experiencia creando y manteniendo design systems escalables, claves de desacoplamiento y buenas prácticas de implementación.",
    en: "My experience creating and maintaining scalable design systems, decoupling strategies and implementation best practices.",
  },

  // Experience
  // Dentro del objeto 'translations' en el bloque de Experiencia
  "experience.title": { es: "Mi Experiencia", en: "My Experience" },
  "experience.subtitle": {
    es: "Mi trayectoria profesional desarrollando soluciones tecnológicas innovadoras",
    en: "My professional journey building innovative technology solutions",
  },
  "experience.highlightsTitle": { es: "Logros principales:", en: "Key achievements:" },
  "experience.techTitle": { es: "Tecnologías utilizadas:", en: "Technologies used:" },

  // Experience items
  "experience.items.1.role": { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
  "experience.items.1.company": { es: "Tech Solutions", en: "Tech Solutions" },
  "experience.items.1.place": { es: "Remoto", en: "Remote" },
  "experience.items.1.period": { es: "2023 - Presente", en: "2023 - Present" },
  "experience.items.1.badge": { es: "", en: "" },
  "experience.items.1.summary": {
    es: "Construcción de aplicaciones web modernas con React, Next.js y Node.js.",
    en: "Building modern web applications using React, Next.js and Node.js.",
  },

  "experience.items.2.role": { es: "Desarrollador Full Stack Senior", en: "Senior Full Stack Developer" },
  "experience.items.2.company": { es: "TechCorp Solutions", en: "TechCorp Solutions" },
  "experience.items.2.place": { es: "Remoto", en: "Remote" },
  "experience.items.2.period": { es: "2022 - Presente", en: "2022 - Present" },
  "experience.items.2.badge": { es: "Tiempo Completo", en: "Full Time" },
  "experience.items.2.summary": {
    es: "Líder de desarrollo de aplicaciones web escalables utilizando React, Node.js y AWS. Responsable de la arquitectura y del monitoreo de despliegues.",
    en: "Led development of scalable web apps using React, Node.js and AWS. Responsible for architecture and deployment monitoring.",
  },
  "experience.items.2.ach1": { es: "Reduje el tiempo de carga de la aplicación principal en 40%", en: "Reduced main app load time by 40%" },
  "experience.items.2.ach2": { es: "Implementé CI/CD que mejoró la velocidad de deployment en 60%", en: "Implemented CI/CD pipeline improving deployment speed by 60%" },
  "experience.items.2.ach3": { es: "Lideré un equipo de 5 desarrolladores", en: "Led a team of 5 developers" },
  "experience.items.2.ach4": { es: "Migré sistema legacy a microservicios e‑commerce", en: "Migrated legacy system to microservices e‑commerce" },

  "experience.items.3.role": { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
  "experience.items.3.company": { es: "StartupX", en: "StartupX" },
  "experience.items.3.place": { es: "Medellín, Colombia", en: "Medellín, Colombia" },
  "experience.items.3.period": { es: "2020 - 2022", en: "2020 - 2022" },
  "experience.items.3.badge": { es: "Tiempo Completo", en: "Full Time" },
  "experience.items.3.summary": {
    es: "Desarrollé aplicaciones web y móviles desde cero para una startup fintech. Colaboré con diseño para crear experiencias de usuario excepcionales.",
    en: "Developed web and mobile apps from scratch for a fintech startup. Collaborated with design to deliver outstanding user experiences.",
  },
  "experience.items.3.ach1": { es: "Desarrollé MVP que consiguió $2M en funding", en: "Built MVP that secured $2M funding" },
  "experience.items.3.ach2": { es: "Optimicé dashboards con 93% de Lighthouse", en: "Optimized dashboards to 93% Lighthouse" },
  "experience.items.3.ach3": { es: "Diseñé e implementé componentes reutilizables", en: "Designed and implemented reusable components" },
  "experience.items.3.ach4": { es: "Optimicé rendimiento de API reduciendo tiempo de respuesta en 50%", en: "Improved API performance reducing response time by 50%" },

  // Education
  "education.title": { es: "Mi Educación", en: "My Education" },
  "education.subtitle": {
    es: "Mi formación académica y certificaciones que respaldan mi experiencia profesional",
    en: "My academic background and certifications supporting my professional experience",
  },
  "education.highlightsTitle": { es: "Logros destacados:", en: "Key highlights:" },
  "education.item1.title": { es: "Bachiller Académico", en: "High School Diploma" },
  "education.item1.org": { es: "Colegio Nuestra Señora del Carmen (Carmelitas)", en: "Colegio Nuestra Señora del Carmen (Carmelitas)" },
  "education.item1.place": { es: "Pasto, Colombia", en: "Pasto, Colombia" },
  "education.item1.period": { es: "2019 - 2022", en: "2019 - 2022" },
  "education.item1.hl1": { es: "Promedio académico: 4.9/5.0", en: "Academic GPA: 4.9/5.0" },

  "education.item2.title": { es: "Certificación en Inglés C+", en: "English Certification C+" },
  "education.item2.org": { es: "Cambridge", en: "Cambridge" },
  "education.item2.place": { es: "Pasto, Colombia", en: "Pasto, Colombia" },
  "education.item2.period": { es: "2019", en: "2019" },
  "education.item2.hl1": { es: "Nivel de Inglés C+", en: "English Level C+" },
  "education.item2.hl2": { es: "Licencia de Docente para enseñar Inglés", en: "Teaching license for English" },

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

  // Testimonials items
  "testimonials.items.1.text": {
    es: "Trabajar con Ubeimar en proyectos académicos ha sido una experiencia enriquecedora...",
    en: "Working with Ubeimar on academic projects has been enriching...",
  },
  "testimonials.items.1.author": { es: "Sebastian Rojas", en: "Sebastian Rojas" },
  "testimonials.items.1.role": { es: "Estudiante de Ingeniería de Software", en: "Software Engineering Student" },
  "testimonials.items.1.institution": { es: "Universidad Cooperativa", en: "Cooperative University" },

  "testimonials.items.2.text": {
    es: "Ubeimar demuestra una capacidad excepcional para resolver problemas complejos y su dedicación en cada proyecto es inspiradora. Su enfoque metódico y atención al detalle garantizan resultados de alta calidad en todos los trabajos colaborativos.",
    en: "Ubeimar shows exceptional ability to solve complex problems and his dedication in every project is inspiring. His methodical approach and attention to detail ensure high‑quality results in all collaborative work.",
  },
  "testimonials.items.2.author": { es: "Celeste Paz", en: "Celeste Paz" },
  "testimonials.items.2.role": { es: "Estudiante", en: "Student" },
  "testimonials.items.2.institution": { es: "", en: "" },

  "testimonials.items.3.text": {
    es: "Como colaborador, Ubeimar aporta no solo habilidades técnicas sólidas, sino también una actitud positiva y colaborativa. Su capacidad para explicar conceptos técnicos de manera clara lo convierte en un recurso invaluable para cualquier equipo de desarrollo.",
    en: "As a collaborator, Ubeimar brings not only solid technical skills but also a positive and cooperative attitude. His ability to explain technical concepts clearly makes him invaluable to any development team.",
  },
  "testimonials.items.3.author": { es: "Juan Pablo Lucero", en: "Juan Pablo Lucero" },
  "testimonials.items.3.role": { es: "Estudiante de Ingeniería de Software", en: "Software Engineering Student" },
  "testimonials.items.3.institution": { es: "Universidad Cooperativa", en: "Cooperative University" },

  "testimonials.items.4.text": {
    es: "Colaborar con Ubeimar me ha demostrado el valor de alguien que no se detiene. Su constancia para aprender, refinar su trabajo y avanzar sin perder el enfoque lo vuelve admirable. Además de ser un amigo en el que se puede confiar, aporta claridad y disciplina en cada proyecto. Su manera de crecer y hacer que los demás crezcan con él marca la diferencia en cualquier equipo!",
    en: "Collaborating with Ubeimar has shown me the value of someone who never stops. His consistency in learning, refining his work and moving forward without losing focus is admirable. Beyond being a trustworthy friend, he brings clarity and discipline to every project. The way he grows and helps others grow with him makes a difference in any team!",
  },
  "testimonials.items.4.author": { es: "Samuel Bermejo", en: "Samuel Bermejo" },
  "testimonials.items.4.role": { es: "Fujitsu Technology Solutions S.A.", en: "Fujitsu Technology Solutions S.A." },
  "testimonials.items.4.institution": { es: "Andalucia, España", en: "Andalusia, Spain" },
  
  "contact.title": { es: "Contacto", en: "Contact" },
  "contact.subtitle": {
    es: "Siempre abierto a discutir nuevas oportunidades, proyectos interesantes o simplemente charlar sobre tecnología. Puedes contactarme por cualquiera de estos medios.",
    en: "Always open to discussing new opportunities, interesting projects, or simply chatting about technology. You can contact me through any of these channels.",
  },
  "contact.info": { es: "Información de contacto", en: "Contact Info" },
  "contact.infoDesc": {
    es: "Siempre abierto a discutir nuevas oportunidades, proyectos interesantes o simplemente charlar sobre tecnología. Puedes contactarme por cualquiera de estos medios.",
    en: "Always open to discussing new opportunities, interesting projects, or simply chatting about technology. You can contact me through any of these channels.",
  },
  "contact.email": { es: "Correo electrónico", en: "Email" },
  "contact.emailNote": { es: "Haz clic para escribirme por Gmail", en: "Click to write me via Gmail" },
  "contact.phone": { es: "Teléfono", en: "Phone" },
  "contact.phoneNote": { es: "Envíame un mensaje por WhatsApp", en: "Send me a message on WhatsApp" },
  "contact.location": { es: "Ubicación", en: "Location" },
  "contact.locationValue": { es: "Pasto, Colombia", en: "Pasto, Colombia" },
  "contact.remote": { es: "Trabajo remoto disponible", en: "Remote work available" },
  "contact.socials": { es: "Contactos sociales", en: "Socials" },

  "contact.formTitle": { es: "Formulario de contacto", en: "Contact Form" },
  "contact.nameLabel": { es: "Nombre", en: "Name" },
  "contact.namePh": { es: "Tu nombre", en: "Your name" },
  "contact.emailLabel": { es: "Correo", en: "Email" },
  "contact.emailPh": { es: "tu@email.com", en: "your@email.com" },
  "contact.subjectLabel": { es: "Asunto", en: "Subject" },
  "contact.subjectPh": { es: "¿De qué se trata tu proyecto?", en: "What is your project about?" },
  "contact.messageLabel": { es: "Mensaje", en: "Message" },
  "contact.messagePh": { es: "¿De qué se trata tu proyecto?", en: "What is your project about?" },
  "contact.submit": { es: "Enviar", en: "Send" },
  "contact.responseTime": { es: "Tiempo de respuesta: 24‑48 horas", en: "Response time: 24‑48 hours" },

  // Footer — ÚNICA DEFINICIÓN SIN DUPLICADOS
  "footer.quicklinks": { es: "Enlaces rápidos", en: "Quick Links" },
  "footer.services": { es: "Servicios", en: "Services" },
  "footer.privacy": { es: "Privacidad", en: "Privacy" },
  "footer.terms": { es: "Términos", en: "Terms" },
  "footer.inspired": { es: "Inspirado en Celi", en: "Inspired by Celi" },
  "footer.bio": {
    es: "Desarrollador Full Stack & UI/UX Designer especializado en crear experiencias digitales excepcionales con tecnologías modernas.",
    en: "Full Stack Developer & UI/UX Designer specializing in creating exceptional digital experiences with modern technologies.",
  },
  "footer.service.frontend": { es: "Desarrollo Frontend", en: "Frontend Development" },
  "footer.service.backend": { es: "Desarrollo Backend", en: "Backend Development" },
  "footer.service.uiux": { es: "Diseño UI/UX", en: "UI/UX Design" },
  "footer.service.consulting": { es: "Consultoría Técnica", en: "Technical Consulting" },
  "footer.service.translation": { es: "Traducción Técnica", en: "Technical Translation" },

  // Añadidos: Artecoser, Mecánico y Docente (dentro de translations)
  "experience.items.4.role": { es: "Multiusos", en: "Multi-skilled" },
  "experience.items.4.company": { es: "Artecoser", en: "Artecoser" },
  "experience.items.4.place": { es: "Presencial", en: "On-site" },
  "experience.items.4.period": { es: "2025 - Presente", en: "2025 - Present" },
  "experience.items.4.badge": { es: "Tiempo Completo", en: "Full Time" },
  "experience.items.4.summary": {
    es: "Trabajo en Multifunciones, Programador de Bordadoras y Tecnologías MicroChip.",
    en: "Multifunctional work, Embroidery programmer and MicroChip technologies."
  },

  "experience.items.5.role": { es: "Mecánico", en: "Mechanic" },
  "experience.items.5.company": { es: "Independiente", en: "Freelance" },
  "experience.items.5.place": { es: "Presencial", en: "On-site" },
  "experience.items.5.period": { es: "2022 - Presente", en: "2022 - Present" },
  "experience.items.5.badge": { es: "", en: "" },
  "experience.items.5.summary": {
    es: "Mantenimiento a vehículos tipo carro.",
    en: "Maintenance of car-type vehicles."
  },

  "experience.items.6.role": { es: "Docente", en: "Teacher" },
  "experience.items.6.company": { es: "Independiente", en: "Freelance" },
  "experience.items.6.place": { es: "Presencial", en: "On-site" },
  "experience.items.6.period": { es: "2022 - Presente", en: "2022 - Present" },
  "experience.items.6.badge": { es: "", en: "" },
  "experience.items.6.summary": {
    es: "Docente en diferentes áreas del saber para estudiantes de 9 a 11.",
    en: "Teacher in various knowledge areas for students from 9th to 11th grade."
  },

  // Nuevo: Programación de Servidores (SurviDeath)
  "experience.items.7.role": { es: "Programación de Servidores", en: "Server Programming" },
  "experience.items.7.company": { es: "Proyecto Independiente", en: "Independent Project" },
  "experience.items.7.place": { es: "Remoto", en: "Remote" },
  "experience.items.7.period": { es: "2024", en: "2024" },
  "experience.items.7.badge": { es: "", en: "" },
  "experience.items.7.summary": {
    es: "Proyecto denominado SurviDeath, creado un servidor con plugins para el juego Minecraft.",
    en: "Project called SurviDeath, created a server with plugins for the Minecraft game."
  },
}