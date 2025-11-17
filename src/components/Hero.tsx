"use client";
import StarsCanvas from "./StarsCanvas";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Fondo animado ahora está montado globalmente */}
      <StarsCanvas />

      <p className="text-blue-400 mb-2 text-sm">¡Hola! Soy</p>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Ubeimar Yepes</h1>
      <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
        Desarrollador Full Stack & UI/UX Designer
      </h2>

      <p className="max-w-2xl text-gray-400 mb-8">
        Desarrollador Full Stack en formación, especializado en tecnologías modernas como
        TypeScript, Next.js, Node.js y Python. Con experiencia en Java y programación
        embebida para microchips. Creo soluciones funcionales, limpias y eficientes.
      </p>

      <div className="flex gap-4 mb-10">
        <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
          Ver Mis Proyectos
        </button>
        <button className="bg-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Contáctame
        </button>
      </div>

      <div className="flex gap-6 text-xl">
        <a className="hover:text-blue-400 cursor-pointer"><FaGithub /></a>
        <a className="hover:text-blue-400 cursor-pointer"><FaLinkedin /></a>
        <a className="hover:text-blue-400 cursor-pointer"><FaEnvelope /></a>
      </div>
    </section>
  );
}
