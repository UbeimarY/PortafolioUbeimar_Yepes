// components/Projects.tsx
"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaBrain, FaMapMarkedAlt, FaRocket, FaPalette, FaNodeJs } from "react-icons/fa";

export default function Projects() {
  const { t, lang } = useLanguage();
  // Lista única con destacados (usar 'image' consistentemente)
  const projects = [
    {
      title: lang === "es" ? "Juegos Cognitivos" : "Cognitive Training App",
      description:
        lang === "es"
          ? "App full‑stack de entrenamiento cognitivo con juegos, usuarios y estadísticas. Frontend en Next.js + Tailwind; backend Spring Boot + MongoDB."
          : "Full‑stack cognitive training app with games, user management, and stats. Next.js + Tailwind frontend; Spring Boot + MongoDB backend.",
      tech: ["Next.js", "Tailwind", "Spring Boot", "MongoDB"],
      image: "/globe.svg",
      demoUrl: "https://github.com/UbeimarY/Patrones_Estructura_Proyecto_Final.git",
      repoUrl: "https://github.com/UbeimarY/Patrones_Estructura_Proyecto_Final.git",
      featured: true,
    },
    {
      title: lang === "es" ? "Proyecto Smart" : "Smart Project",
      description:
        lang === "es"
          ? "Plataforma de tareas con gamificación: progreso, insignias y rachas. UI moderna y responsiva."
          : "Gamified task platform: progress tracking, badges, and streaks. Modern, responsive UI.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      image: "/window.svg",
      demoUrl: "https://proyecto-smart.vercel.app/",
      repoUrl: undefined,
      featured: true,
    },
    {
      title: lang === "es" ? "Recreación Mapa" : "Map Recreation",
      description:
        lang === "es"
          ? "Explorador con Leaflet y OpenStreetMap: zoom, capas y ubicación. Ideal para cartografía web."
          : "Explorer using Leaflet & OpenStreetMap: zoom, layers, and location.",
      tech: ["Leaflet", "OpenStreetMap"],
      image: "/globe.svg",
      demoUrl: "https://maps-taller.vercel.app/",
      repoUrl: undefined,
      featured: false,
    },
    {
      title: lang === "es" ? "Diseño de Interfaz" : "Interface Design",
      description:
        lang === "es"
          ? "Pantalla de preferencias con tema, idioma, color y accesibilidad."
          : "Preferences screen with theme, language, accent color and accessibility.",
      tech: ["Next.js", "Tailwind"],
      image: "/next.svg",
      demoUrl: "https://form-detail-61h4.vercel.app/",
      repoUrl: undefined,
      featured: false,
    },
    {
      title: lang === "es" ? "Node Project" : "Node Project",
      description:
        lang === "es"
          ? "Pruebas con Axios y Fetch, almacenamiento local y tiempos de respuesta."
          : "Experiments with Axios/Fetch, local storage, response time benchmarking.",
      tech: ["Node.js", "React"],
      image: "/file.svg",
      demoUrl: "https://node-project-task-wheat.vercel.app/",
      repoUrl: undefined,
      featured: false,
    },
  ];

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative w-full min-h-screen flex items-center justify-center text-foreground py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">{t("projects.title")}</h2>
          <p className="text-muted-foreground mt-2">{t("projects.subtitle")}</p>
        </div>

        <h3 className="text-lg font-semibold mb-4">{t("projects.featured")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {featured.map((p) => (
            <article key={p.title} className="bg-card backdrop-blur-sm rounded-2xl border border-border overflow-hidden">
              <div className="relative h-40">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-yellow-400/90 text-black font-semibold">
                  {lang === "es" ? "Destacado" : "Featured"}
                </span>
              </div>
              <div className="p-6 space-y-4">
                <h4 className="text-lg font-bold">{p.title}</h4>
                <p className="text-muted-foreground text-sm">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((tch) => (
                    <span key={tch} className="px-3 py-1 rounded-full text-xs bg-accent border border-border text-accent-foreground">
                      {tch}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center text-sm px-3 py-2 rounded-lg bg-accent border border-border hover:bg-accent transition"
                  >
                    {t("projects.viewDemo")}
                  </a>
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-2 rounded-lg bg-card border border-border hover:bg-accent transition"
                      aria-label="Ver repositorio"
                    >
                      💻
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-4">{t("projects.others")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((p) => (
            <article key={p.title} className="bg-card backdrop-blur-sm rounded-2xl border border-border overflow-hidden">
              <div className="relative h-32">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-5 space-y-3">
                <h4 className="text-base font-semibold">{p.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((tch) => (
                    <span key={tch} className="px-2 py-1 rounded-full text-xs bg-accent border border-border text-accent-foreground">
                      {tch}
                    </span>
                  ))}
                </div>
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm px-3 py-2 rounded-lg bg-accent border border-border hover:bg-accent transition"
                >
                  {t("projects.viewDemo")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}