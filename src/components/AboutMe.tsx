// components/AboutMe.tsx
"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutMe() {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center text-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{t("about.title")}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Tarjeta central: dos columnas como en la imagen */}
        <div className="max-w-5xl mx-auto bg-card backdrop-blur-sm rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Columna izquierda: líneas + texto + chips */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="h-2 w-20 bg-accent rounded"></div>
                <div className="h-2 w-28 bg-accent rounded"></div>
                <div className="h-2 w-24 bg-accent rounded"></div>
                <div className="h-2 w-32 bg-accent rounded"></div>
                <div className="h-2 w-16 bg-accent rounded"></div>
                <div className="h-2 w-24 bg-accent rounded"></div>
                <div className="h-2 w-28 bg-accent rounded"></div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Soy un desarrollador full stack especializado en crear aplicaciones web modernas con React, TypeScript, Next.js y Node.js.
                Mi expertise incluye desarrollo de servicios con Python, experiencia en Java y conocimientos en programación de bajo nivel para embebidos y microchips.
                Más allá de la programación, escribo y exploro narrativas digitales y música, con compromiso en formar las próximas generaciones de desarrolladores.
              </p>

              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Node.js", "Python"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-sm bg-accent border border-border text-accent-foreground hover:bg-accent transition">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Columna derecha: imagen + título vertical */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden border border-border shadow-2xl">
                <Image src="/profile.jpeg" alt="UBER" width={288} height={288} className="object-cover w-full h-full" priority />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -right-6 top-6 w-24 h-24 rounded-full bg-accent blur-xl" />
                </div>
              </div>
              <div className="hidden md:flex flex-col items-center gap-3 font-extrabold text-3xl text-muted-foreground tracking-widest ml-6">
                <span>U</span><span>B</span><span>E</span><span>R</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjetas inferiores con iconos como en el diseño */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mt-10">
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-accent border border-border flex items-center justify-center">💻</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Desarrollo Full Stack</h3>
            <p className="text-muted-foreground">Experiencia en React, Next.js, Python y Node.js</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-accent border border-border flex items-center justify-center">🎨</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Diseño UI/UX</h3>
            <p className="text-muted-foreground">Interfaces intuitivas y experiencias de usuario</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-accent border border-border flex items-center justify-center">✍️</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Escritura</h3>
            <p className="text-muted-foreground">Contenido técnico y narrativas creativas</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-accent border border-border flex items-center justify-center">🎵</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Música</h3>
            <p className="text-muted-foreground">Expresión artística y formatos audiovisuales</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-accent border border-border flex items-center justify-center">🎓</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Docencia</h3>
            <p className="text-muted-foreground">Prácticas pedagógicas y colaboración profesional</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-accent border border-border flex items-center justify-center">🚀</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Innovación</h3>
            <p className="text-muted-foreground">Siempre buscando nuevas tecnologías y metodologías</p>
          </div>
        </div>
      </div>
    </section>
  );
}
