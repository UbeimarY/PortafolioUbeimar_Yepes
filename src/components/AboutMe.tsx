// components/AboutMe.tsx
"use client";

import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Columna izquierda - Foto */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src="/profile.jpeg" // Reemplazar con la ruta real de tu foto
                alt="UBER"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          
          {/* Columna derecha - Texto */}
          <div className="w-full md:w-3/5">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mí</h1>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-white/90">
                Desarrollador, escritor, músico y docente apasionado por crear experiencias digitales excepcionales.
              </p>
              
              <p className="text-white/90">
                Soy un desarrollador full stack especializado en crear aplicaciones web modernas con React, TypeScript, Next.js y Node.js. 
                Mi expertise incluye desarrollo de servicios con Python, experiencia en Java y conocimientos sólidos en programación de 
                bajo nivel para embebidos y microchips.
              </p>
              
              <p className="text-white/90">
                Más allá de la programación, soy escritor apasionado por las narrativas; me interesa explorar diferentes formatos de 
                escritura tanto tradicionales como modernos, y busco comprender prácticas que generen diversidad creativa. 
                Esto enriquece mi enfoque técnico y creativo.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <h3 className="font-bold text-xl mb-2 text-white">Desarrollo Full Stack</h3>
                  <p className="text-white/80">Experto en React, Next.js, Python y Node.js</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <h3 className="font-bold text-xl mb-2 text-white">Diseño UI/UX</h3>
                  <p className="text-white/80">Creación de interfaces intuitivas y experiencias de usuario excepcionales</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <h3 className="font-bold text-xl mb-2 text-white">Escritura</h3>
                  <p className="text-white/80">Creación de contenido técnico y narrativas creativas</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <h3 className="font-bold text-xl mb-2 text-white">Música</h3>
                  <p className="text-white/80">Expresión artística a través de formatos audiovisuales</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <h3 className="font-bold text-xl mb-2 text-white">Docencia</h3>
                  <p className="text-white/80">Comprensión pedagógica e integración de prácticas profesionales</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <h3 className="font-bold text-xl mb-2 text-white">Educación</h3>
                  <p className="text-white/80">Segundo año de Educación en Tecnología y Metodologías Digitales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
