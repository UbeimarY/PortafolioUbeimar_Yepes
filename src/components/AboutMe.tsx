// components/AboutMe.tsx
"use client";

import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center text-white py-16">
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Me</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Desarrollador, escritor, músico y docente apasionado por crear experiencias digitales excepcionales
          </p>
        </div>

        {/* Tarjeta principal */}
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Izquierda: líneas estilo código */}
            <div className="hidden md:block space-y-3">
              <div className="h-2 w-20 bg-white/20 rounded"></div>
              <div className="h-2 w-28 bg-white/30 rounded"></div>
              <div className="h-2 w-24 bg-white/20 rounded"></div>
              <div className="h-2 w-32 bg-white/25 rounded"></div>
              <div className="h-2 w-16 bg-white/20 rounded"></div>
              <div className="h-2 w-24 bg-white/30 rounded"></div>
              <div className="h-2 w-28 bg-white/20 rounded"></div>
            </div>

            {/* Centro: foto */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src="/profile.jpeg"
                  alt="UBER"
                  width={288}
                  height={288}
                  className="object-cover w-full h-full"
                  priority
                />
                {/* Sutil halo sobre la foto */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -right-6 top-6 w-24 h-24 rounded-full bg-white/10 blur-xl" />
                </div>
              </div>
            </div>

            {/* Derecha: texto vertical UBER */}
            <div className="hidden md:flex flex-col items-center gap-3 font-extrabold text-4xl text-white/60 tracking-widest">
              <span>U</span>
              <span>B</span>
              <span>E</span>
              <span>R</span>
            </div>
          </div>

          {/* Descripción y etiquetas */}
          <div className="mt-8 space-y-6">
            <p className="text-white/90 leading-relaxed">
              Soy un desarrollador full stack especializado en crear aplicaciones web modernas con React, TypeScript, Next.js y Node.js. 
              Experiencia con Python, práctica en Java y programación de bajo nivel para embebidos y microchips. 
              Me interesa la escritura y la música, integrando perspectivas técnicas y creativas.
            </p>

            {/* Etiquetas de tecnologías */}
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Node.js", "Python"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/10 text-white/80 hover:bg-white/15 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Grilla de habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mt-10">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
            <h3 className="font-bold text-lg mb-2 text-white">Desarrollo Full Stack</h3>
            <p className="text-white/80">Experiencia en React, Next.js, Python y Node.js</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
            <h3 className="font-bold text-lg mb-2 text-white">Diseño UI/UX</h3>
            <p className="text-white/80">Interfaces intuitivas y experiencias de usuario</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
            <h3 className="font-bold text-lg mb-2 text-white">Escritura</h3>
            <p className="text-white/80">Contenido técnico y narrativas creativas</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
            <h3 className="font-bold text-lg mb-2 text-white">Música</h3>
            <p className="text-white/80">Expresión artística y formatos audiovisuales</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
            <h3 className="font-bold text-lg mb-2 text-white">Docencia</h3>
            <p className="text-white/80">Prácticas pedagógicas y colaboración profesional</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
            <h3 className="font-bold text-lg mb-2 text-white">Educación</h3>
            <p className="text-white/80">Segundo año en Tecnología y Metodologías Digitales</p>
          </div>
        </div>
      </div>
    </section>
  );
}
