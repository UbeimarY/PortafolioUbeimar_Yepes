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

        <div className="max-w-5xl mx-auto bg-card backdrop-blur-sm rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="hidden md:block space-y-3">
              <div className="h-2 w-20 bg-accent rounded"></div>
              <div className="h-2 w-28 bg-accent rounded"></div>
              <div className="h-2 w-24 bg-accent rounded"></div>
              <div className="h-2 w-32 bg-accent rounded"></div>
              <div className="h-2 w-16 bg-accent rounded"></div>
              <div className="h-2 w-24 bg-accent rounded"></div>
              <div className="h-2 w-28 bg-accent rounded"></div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden border border-border shadow-2xl">
                <Image src="/profile.jpeg" alt="UBER" width={288} height={288} className="object-cover w-full h-full" priority />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -right-6 top-6 w-24 h-24 rounded-full bg-accent blur-xl" />
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center gap-3 font-extrabold text-3xl text-muted-foreground tracking-widest">
              <span>U</span><span>B</span><span>E</span><span>R</span>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Soy un desarrollador full stack especializado en crear aplicaciones web modernas con React, TypeScript, Next.js y Node.js. 
              Experiencia con Python, práctica en Java y programación de bajo nivel para embebidos y microchips. 
              Me interesa la escritura y la música, integrando perspectivas técnicas y creativas.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Node.js", "Python"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-sm bg-accent border border-border text-accent-foreground hover:bg-accent transition">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mt-10">
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <h3 className="font-bold text-lg mb-2 text-foreground">Desarrollo Full Stack</h3>
            <p className="text-muted-foreground">Experiencia en React, Next.js, Python y Node.js</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <h3 className="font-bold text-lg mb-2 text-foreground">Diseño UI/UX</h3>
            <p className="text-muted-foreground">Interfaces intuitivas y experiencias de usuario</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <h3 className="font-bold text-lg mb-2 text-foreground">Escritura</h3>
            <p className="text-muted-foreground">Contenido técnico y narrativas creativas</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <h3 className="font-bold text-lg mb-2 text-foreground">Música</h3>
            <p className="text-muted-foreground">Expresión artística y formatos audiovisuales</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <h3 className="font-bold text-lg mb-2 text-foreground">Docencia</h3>
            <p className="text-muted-foreground">Prácticas pedagógicas y colaboración profesional</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <h3 className="font-bold text-lg mb-2 text-foreground">Educación</h3>
            <p className="text-muted-foreground">Segundo año en Tecnología y Metodologías Digitales</p>
          </div>
        </div>
      </div>
    </section>
  );
}
