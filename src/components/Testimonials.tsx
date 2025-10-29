// components/Testimonials.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Trabajar con Ubeimar en proyectos académicos ha sido una experiencia enriquecedora. Su paciencia para enseñar conceptos complejos y su habilidad para transformar ideas en código funcional son realmente notables. Es un compañero valioso en cualquier equipo.",
      author: "Sebastian Rojas",
      role: "Estudiante de Ingeniería de Software",
      institution: "Universidad Cooperativa",
      avatar: "/avatars/sebastian-rojas.jpeg" 
    },
    {
      id: 2,
      text: "Ubeimar demuestra una capacidad excepcional para resolver problemas complejos y su dedicación en cada proyecto es inspiradora. Su enfoque metódico y atención al detalle garantizan resultados de alta calidad en todos los trabajos colaborativos.",
      author: "Celeste Paz",
      role: "Estudiante",
      avatar: "/avatars/celeste-paz.jpeg"
    },
    {
      id: 3,
      text: "Como colaborador, Ubeimar aporta no solo habilidades técnicas sólidas, sino también una actitud positiva y colaborativa. Su capacidad para explicar conceptos técnicos de manera clara lo convierte en un recurso invaluable para cualquier equipo de desarrollo.",
      author: "Juan Pablo Lucero",
      role: "Estudiante de Ingeniería de Software",
      institution: "Universidad Cooperativa",
      avatar: "/avatars/juan-lucero.jpeg"
    },
    {
      id: 4,
      text: "La creatividad y el pensamiento innovador de Ubeimar han sido fundamentales para el éxito de nuestros proyectos. Su capacidad para encontrar soluciones elegantes a problemas complejos es realmente impresionante.",
      author: "Laura Martínez",
      role: "Diseñadora UX/UI",
      institution: "Proyecto Colaborativo",
      avatar: "/avatars/laura-martinez.jpeg"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const handleImageError = (testimonialId: number) => {
    setImageErrors(prev => ({ ...prev, [testimonialId]: true }));
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  return (
    <section id="testimonials" className="relative w-full min-h-screen flex items-center justify-center text-white py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Testimonios</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Lo que dicen mis compañeros y colaboradores sobre trabajar conmigo
          </p>
        </div>

        {/* Carrusel */}
        <div 
          className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Controles del carrusel */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 z-10"
            aria-label="Testimonio anterior"
          >
            &lsaquo;
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 z-10"
            aria-label="Siguiente testimonio"
          >
            &rsaquo;
          </button>

          {/* Testimonio actual */}
          <div className="text-center px-12 py-6 min-h-[350px] flex flex-col justify-center items-center">
            {/* Avatar */}
            <div className="mb-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-blue-400/50 mx-auto">
                {!imageErrors[testimonials[currentTestimonial].id] ? (
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(testimonials[currentTestimonial].id)}
                  />
                ) : (
                  <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentTestimonial].author.charAt(0)}
                  </div>
                )}
              </div>
            </div>

            {/* Quote */}
            <div className="text-blue-400 text-5xl mb-4 leading-none">&ldquo;</div>
            
            {/* Texto del testimonio */}
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6 italic">
              {testimonials[currentTestimonial].text}
            </p>
            
            {/* Información de la persona */}
            <div className="border-t border-white/10 pt-6 w-full">
              <h4 className="font-bold text-white text-xl mb-2">
                {testimonials[currentTestimonial].author}
              </h4>
              <p className="text-white/70 text-sm mb-1">
                {testimonials[currentTestimonial].role}
              </p>
              {testimonials[currentTestimonial].institution && (
                <p className="text-blue-400 font-medium text-sm">
                  {testimonials[currentTestimonial].institution}
                </p>
              )}
            </div>
          </div>

          {/* Indicadores de posición */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-blue-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador */}
          <div className="text-center mt-4 text-white/60 text-sm">
            {currentTestimonial + 1} / {testimonials.length}
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Te gustaría ser el próximo en compartir una experiencia exitosa?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Si hemos trabajado juntos en algún proyecto, me encantaría escuchar tu experiencia. 
            Tu testimonio puede ayudar a otros a conocer mi forma de trabajo y colaboración.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 inline-block text-center"
            >
              Contáctame
            </a>
            <button 
              className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Dejar Testimonio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}