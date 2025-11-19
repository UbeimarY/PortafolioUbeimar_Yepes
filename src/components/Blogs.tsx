// components/Blogs.tsx
"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Blogs() {
  const { t, lang } = useLanguage();

  const posts = [
    {
      title: lang === "es" ? "El Futuro del Desarrollo Frontend con React 18" : "The Future of Frontend with React 18",
      date: lang === "es" ? "15 de Marzo, 2024" : "March 15, 2024",
      readTime: lang === "es" ? "8 min" : "8 min",
      tags: lang === "es" ? ["React", "Rendimiento"] : ["React", "Performance"],
      excerpt: lang === "es"
        ? "Exploramos las nuevas características de React 18 y cómo están revolucionando el desarrollo de aplicaciones web modernas."
        : "Exploring new features in React 18 and how they reshape modern web apps.",
      image: "/next.svg",
      url: "#",
    },
    {
      title: "TypeScript: Mejores Prácticas para Proyectos Grandes",
      date: "24 de Marzo, 2024",
      readTime: "10 min",
      tags: ["TypeScript", "Escalabilidad"],
      excerpt:
        "Una guía completa con patrones efectivos para mejorar TypeScript y entregar código robusto en proyectos empresariales grandes.",
      image: "/globe.svg",
      url: "#",
    },
    {
      title: "Microservicios con Node.js y Docker",
      date: "10 de Febrero, 2024",
      readTime: "15 min",
      tags: ["Node.js", "Docker", "Observabilidad"],
      excerpt:
        "Cómo diseñar y desplegar una arquitectura de microservicios escalable utilizando Node.js, Express y Docker.",
      image: "/window.svg",
      url: "#",
    },
    {
      title: "Design Systems: De la Teoría a la Práctica",
      date: "25 de Febrero, 2024",
      readTime: "9 min",
      tags: ["UI/UX", "Componentización"],
      excerpt:
        "Mi experiencia creando y manteniendo design systems escalables, claves de desacoplamiento y buenas prácticas de implementación.",
      image: "/file.svg",
      url: "#",
    },
  ];

  return (
    <section id="blog" className="relative w-full min-h-screen flex items-center justify-center text-foreground py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">{t("blogs.title")}</h2>
          <p className="text-muted-foreground mt-2">{t("blogs.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="bg-card backdrop-blur-sm rounded-2xl border border-border overflow-hidden">
              <div className="relative h-40">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs text-muted-foreground flex items-center gap-3">
                  <span>📅 {p.date}</span>
                  <span>⏱ {p.readTime}</span>
                </div>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs bg-accent border border-border text-accent-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.url} className="inline-block text-sm px-3 py-2 rounded-lg bg-accent border border-border hover:bg-accent transition">
                  {t("blogs.read")}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex gap-3">
            <a href="#" className="text-sm px-4 py-2 rounded-lg bg-accent border border-border hover:bg-accent transition">
              Suscríbete al Newsletter
            </a>
            <a href="#" className="text-sm px-4 py-2 rounded-lg bg-card border border-border hover:bg-accent transition">
              Ver Todos los Artículos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}