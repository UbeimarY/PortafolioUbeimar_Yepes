"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 text-foreground">
      {/* Fondo animado montado globalmente */}
      <p className="text-blue-400 mb-2 text-sm">¡Hola! Soy</p>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Ubeimar Yepes</h1>
      <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
        Desarrollador Full Stack & UI/UX Designer
      </h2>

      <p className="max-w-2xl text-muted-foreground mb-8">
        Desarrollador Full Stack en formación, especializado en tecnologías modernas como
        TypeScript, Next.js, Node.js y Python. Con experiencia en Java y programación
        embebida para microchips. Creo soluciones funcionales, limpias y eficientes.
      </p>

      <div className="flex gap-4 mb-10">
        <button className="bg-primary-foreground text-primary px-6 py-2 rounded-lg font-medium hover:bg-accent transition">
          Ver Mis Proyectos
        </button>
        <button className="bg-primary px-6 py-2 rounded-lg font-medium text-primary-foreground hover:bg-accent transition">
          Contáctame
        </button>
      </div>

      <div className="flex gap-6 text-xl">
        <a className="hover:text-blue-500 cursor-pointer"><FaGithub /></a>
        <a className="hover:text-blue-500 cursor-pointer"><FaLinkedin /></a>
        <a className="hover:text-blue-500 cursor-pointer"><FaEnvelope /></a>
      </div>
    </section>
  );
}
