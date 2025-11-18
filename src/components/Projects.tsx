// components/Projects.tsx
"use client";
import Image from "next/image";

export default function Projects() {
  const featured = [
    {
      title: "E-Commerce Platform",
      badge: "Destacado",
      description:
        "Plataforma completa de comercio electrónico con dashboard administrativo, gestión de inventario y procesamiento de pagos en tiempo real.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/globe.svg",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Analytics Dashboard",
      badge: "Destacado",
      description:
        "Dashboard de análisis con visualizaciones interactivas, reportes autodidácticos e integración con múltiples fuentes de datos.",
      tech: ["Next.js", "TypeScript", "Supabase", "Chart.js"],
      image: "/window.svg",
      demoUrl: "#",
      repoUrl: "#",
    },
  ];

  const others = [
    { title: "Task Management App", image: "/file.svg" },
    { title: "Design System + Docs", image: "/next.svg" },
    { title: "AI Content Generator", image: "/globe.svg" },
    { title: "Mobile Banking App", image: "/window.svg" },
  ];

  return (
    <section id="projects" className="relative w-full min-h-screen flex items-center justify-center text-foreground py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">Mis Proyectos</h2>
          <p className="text-muted-foreground mt-2">Una selección de proyectos que demuestran mis habilidades técnicas y creatividad</p>
        </div>

        <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-4">Proyectos Destacados</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.map((p) => (
            <div key={p.title} className="bg-card backdrop-blur-sm rounded-2xl border border-border overflow-hidden">
              <div className="relative h-40 md:h-48">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
                <span className="absolute right-3 top-3 text-xs px-2 py-1 rounded-full bg-yellow-400/90 text-black font-semibold">
                  {p.badge}
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-lg font-bold">{p.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs bg-accent border border-border text-accent-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a href={p.demoUrl} className="w-full text-center text-sm px-3 py-2 rounded-lg bg-accent border border-border hover:bg-accent transition">
                    Ver Demo
                  </a>
                  <a href={p.repoUrl} className="text-sm px-3 py-2 rounded-lg bg-card border border-border hover:bg-accent transition" aria-label="Ver repositorio">
                    💻
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-sm uppercase tracking-wide text-muted-foreground mt-10 mb-4">Otros Proyectos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((o) => (
            <div key={o.title} className="bg-card backdrop-blur-sm rounded-xl border border-border overflow-hidden">
              <div className="relative h-28">
                <Image src={o.image} alt={o.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h4 className="text-sm font-semibold">{o.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}