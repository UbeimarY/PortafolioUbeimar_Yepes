// components/Education.tsx
"use client";

export default function Education() {
  const education = [
    {
      title: "Bachiller Académico",
      org: "Colegio Nuestra Señora del Carmen (Carmelitas)",
      place: "Pasto, Colombia",
      period: "2019 - 2022",
      highlights: ["Promedio académico: 4.0/5.0"],
    },
    {
      title: "Certificación en Inglés C+",
      org: "Cambridge",
      place: "Pasto, Colombia",
      period: "2019",
      highlights: ["Nivel de Inglés C+", "Licencia de Docente para enseñar Inglés"],
    },
  ];

  return (
    <section id="education" className="relative w-full min-h-screen flex items-center justify-center text-foreground py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">Mi Educación</h2>
          <p className="text-muted-foreground mt-2">Mi formación académica y certificaciones que respaldan mi experiencia profesional</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-6">
            {education.map((ed, idx) => (
              <div key={idx} className="relative grid grid-cols-[32px_1fr] gap-4">
                <div className="relative flex items-start justify-center pt-6">
                  <div className="w-5 h-5 rounded-full bg-accent border border-border shadow-md" />
                </div>
                <div className="bg-card backdrop-blur-sm rounded-2xl p-6 border border-border">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">{ed.title}</h3>
                      <div className="mt-1 text-sm text-muted-foreground flex flex-wrap items-center gap-3">
                        <span>🏫 {ed.org}</span>
                        <span>📍 {ed.place}</span>
                        <span>📅 {ed.period}</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-accent border border-border flex items-center justify-center text-accent-foreground">
                      🎓
                    </div>
                  </div>

                  <div className="mt-5">
                    <h4 className="font-semibold mb-2 text-foreground">Logros destacados:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {ed.highlights.map((h, i) => (<li key={i}>{h}</li>))}
                    </ul>
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