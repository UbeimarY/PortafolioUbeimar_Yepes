"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Experience() {
  const { t, lang } = useLanguage();
  const experiences = [
    {
      role: lang === "es" ? "Desarrollador Full Stack" : "Full Stack Developer",
      company: "Tech Solutions",
      place: lang === "es" ? "Remoto" : "Remote",
      period: lang === "es" ? "2023 - Presente" : "2023 - Present",
      description: lang === "es"
        ? "Construcción de aplicaciones web modernas con React, Next.js y Node.js."
        : "Building modern web applications using React, Next.js and Node.js.",
      tech: ["React", "Node.js", "Next.js", "TypeScript", "MongoDB"],
    },
    {
      role: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      place: "Remoto",
      period: "2022 - Presente",
      badge: "Tiempo Completo",
      summary:
        "Líder de desarrollo de aplicaciones web escalables utilizando React, Node.js y AWS. Responsable de la arquitectura y del monitoreo de despliegues.",
      achievements: [
        "Reduje el tiempo de carga de la aplicación principal en 40%",
        "Implementé CI/CD pipeline que mejoró la velocidad de deployment en 60%",
        "Lideré un equipo de 5 desarrolladores de frontend y backend",
        "Migré sistema legacy a arquitectura de microservicios e-commerce",
      ],
      tech: ["React", "Node.js", "AWS", "TypeScript", "Docker", "PostgreSQL"],
    },
    {
      role: "Full Stack Developer",
      company: "StartupX",
      place: "Medellín, Colombia",
      period: "2020 - 2022",
      badge: "Tiempo Completo",
      summary:
        "Desarrollé aplicaciones web y móviles desde cero para una startup fintech. Colaboré con diseño para crear experiencias de usuario excepcionales.",
      achievements: [
        "Desarrollé MVP que consiguió $2M en funding",
        "Optimicé dashboards con 93% de Lighthouse",
        "Diseñé e implementé componentes reutilizables",
        "Optimicé rendimiento de API reduciendo tiempo de respuesta en 50%",
      ],
      tech: ["React", "Node.js", "Next.js", "TypeScript", "MongoDB"],
    },
  ];

  return (
    <section id="experience" className="relative w-full min-h-screen flex items-center justify-center text-foreground py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">{t("experience.title")}</h2>
          <p className="text-muted-foreground mt-2">{t("experience.subtitle")}</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative grid grid-cols-[32px_1fr] gap-4">
                <div className="relative flex items-start justify-center pt-6">
                  <div className="w-5 h-5 rounded-full bg-accent border border-border shadow-md" />
                </div>
                <div className="bg-card backdrop-blur-sm rounded-2xl p-6 border border-border">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                      <div className="mt-1 text-sm text-muted-foreground flex flex-wrap items-center gap-3">
                        <span>🏢 {exp.company}</span>
                        <span>🌍 {exp.place}</span>
                        <span>📅 {exp.period}</span>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-accent border border-border text-accent-foreground">
                      {exp.badge}
                    </span>
                  </div>

                  <p className="text-muted-foreground mt-4">{exp.summary}</p>
                  <div className="mt-5">
                    <h4 className="font-semibold mb-2 text-foreground">Logros principales:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements?.map((a, i) => (<li key={i}>{a}</li>))}
                    </ul>
                  </div>
                  <div className="mt-5">
                    <h4 className="font-semibold mb-2 text-foreground">Tecnologías utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full text-xs bg-accent border border-border text-accent-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}