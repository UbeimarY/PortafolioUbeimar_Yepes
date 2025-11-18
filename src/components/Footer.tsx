// components/Footer.tsx
"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full text-foreground py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold">Ubeimar Yepes</h3>
            <p className="mt-4 text-muted-foreground">
              Desarrollador Full Stack & UI/UX Designer especializado en crear experiencias digitales
              excepcionales con tecnologías modernas.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span>✉️</span>
                <a href="mailto:ubeimarlyepes@gmail.com" className="hover:underline">ubeimarlyepes@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span>📞</span>
                <a href="tel:+573135220484" className="hover:underline">+57 (313) 522-0484</a>
              </div>
              <div className="flex items-center gap-3">
                <span>📍</span>
                <span>Pasto, Colombia</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4 text-lg">
              <a className="hover:text-blue-500" href="#"><FaGithub /></a>
              <a className="hover:text-blue-500" href="#"><FaLinkedin /></a>
              <a className="hover:text-blue-500" href="#"><FaInstagram /></a>
              <a className="hover:text-blue-500" href="mailto:ubeimarlyepes@gmail.com"><FaEnvelope /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#hero" className="hover:text-foreground">Inicio</a></li>
              <li><a href="#about" className="hover:text-foreground">About Me</a></li>
              <li><a href="#projects" className="hover:text-foreground">Proyectos</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contacto</a></li>
              <li><a href="#testimonials" className="hover:text-foreground">Testimonios</a></li>
              <li><a href="#blog" className="hover:text-foreground">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Desarrollo Frontend</li>
              <li>Desarrollo Backend</li>
              <li>UI/UX Design</li>
              <li>Consultoría Técnica</li>
              <li>Traducción Técnica</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>© {year} Ubeimar Yepes. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Política de Privacidad</a>
            <a href="#" className="hover:text-foreground">Términos de Uso</a>
          </div>
        </div>

        {/* Crédito */}
        <div className="mt-2 text-xs text-muted-foreground flex items-center justify-center gap-2">
          <span>Inspired by Celi</span>
          <span aria-hidden>❤️</span>
        </div>
      </div>
    </footer>
  );
}