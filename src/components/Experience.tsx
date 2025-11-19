"use client";
import { useLanguage } from "@/contexts/LanguageContext";

interface ExperienceItem {
  role: string;
  company: string;
  place: string;
  period: string;
  badge?: string;
  summary: string;
  tech: string[];
  achievements?: string[];
}

export default function Experience() {
  const { t } = useLanguage();
  const experiences: ExperienceItem[] = [
   
    // Artecoser (Multiusos)
    {
      role: t("experience.items.4.role"),
      company: t("experience.items.4.company"),
      place: t("experience.items.4.place"),
      period: t("experience.items.4.period"),
      badge: t("experience.items.4.badge"),
      summary: t("experience.items.4.summary"),
      tech: ["MicroChip", "Electrónica"],
    },
    // Mecánico Independiente
    {
      role: t("experience.items.5.role"),
      company: t("experience.items.5.company"),
      place: t("experience.items.5.place"),
      period: t("experience.items.5.period"),
      badge: t("experience.items.5.badge"),
      summary: t("experience.items.5.summary"),
      tech: ["Mecánica Automotriz"],
    },
    // Docente Independiente
    {
      role: t("experience.items.6.role"),
      company: t("experience.items.6.company"),
      place: t("experience.items.6.place"),
      period: t("experience.items.6.period"),
      badge: t("experience.items.6.badge"),
      summary: t("experience.items.6.summary"),
      tech: ["Educación"],
    },
    // Programación de Servidores (SurviDeath)
    {
      role: t("experience.items.7.role"),
      company: t("experience.items.7.company"),
      place: t("experience.items.7.place"),
      period: t("experience.items.7.period"),
      badge: t("experience.items.7.badge"),
      summary: t("experience.items.7.summary"),
      tech: ["Java", "Minecraft", "Plugins"],
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
                    {exp.badge && (
                      <span className="text-xs px-3 py-1 rounded-full bg-accent border border-border text-accent-foreground">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground mt-4">{exp.summary}</p>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-5">
                      <h4 className="font-semibold mb-2 text-foreground">{t("experience.highlightsTitle")}</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.achievements.map((a: string, i: number) => (<li key={i}>{a}</li>))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-5">
                    <h4 className="font-semibold mb-2 text-foreground">{t("experience.techTitle")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech: string) => (
                        <span key={tech} className="px-3 py-1 rounded-full text-xs bg-accent border border-border text-accent-foreground">
                          {tech}
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