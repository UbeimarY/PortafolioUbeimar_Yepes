// components/Footer.tsx
"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t, lang } = useLanguage();

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
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ubeimarlyepes@gmail.com&su=Contacto%20Portafolio&body=Hola%20Ubeimar%2C%20me%20gustar%C3%ADa%20contactar%20para%20trabajar%20en%20un%20proyecto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  aria-label="Enviar correo en Gmail"
                >
                  ubeimarlyepes@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span>📞</span>
                <a
                  href="https://wa.me/573135220484?text=Hola%20Ubeimar%2C%20me%20gustar%C3%ADa%20contactar%20para%20trabajar%20en%20un%20proyecto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  aria-label="Enviar mensaje por WhatsApp"
                >
                  +57 (313) 522-0484
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span>📍</span>
                <span>Pasto, Colombia</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4 text-lg">
              <a
                className="hover:text-blue-500"
                href="https://github.com/UbeimarY"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir GitHub"
              >
                <FaGithub />
              </a>
              <a className="hover:text-blue-500" href="#" aria-label="Abrir LinkedIn">
                <FaLinkedin />
              </a>
              <a
                className="hover:text-blue-500"
                href="https://www.instagram.com/ube.yepes09/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="hover:text-blue-500"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ubeimarlyepes@gmail.com&su=Contacto%20Portafolio&body=Hola%20Ubeimar%2C%20me%20gustar%C3%ADa%20contactar%20para%20trabajar%20en%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar correo en Gmail"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">{t("footer.quicklinks")}</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#hero" className="hover:text-foreground">{t("nav.home")}</a></li>
              <li><a href="#about" className="hover:text-foreground">{t("nav.about")}</a></li>
              <li><a href="#projects" className="hover:text-foreground">{t("nav.projects")}</a></li>
              <li><a href="#contact" className="hover:text-foreground">{t("nav.contact")}</a></li>
              <li><a href="#testimonials" className="hover:text-foreground">{t("nav.testimonials")}</a></li>
              <li><a href="#blog" className="hover:text-foreground">{t("nav.blogs")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">{t("footer.services")}</h4>
            {/* Lista de servicios puede permanecer bilingüe si lo deseas */}
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
          <p>© {year} Ubeimar Yepes. {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-foreground">{t("footer.terms")}</a>
          </div>
        </div>

        <div className="mt-2 text-xs text-muted-foreground flex items-center justify-center gap-2">
          <span>{t("footer.inspired")}</span>
          <span aria-hidden>❤️</span>
        </div>
      </div>
    </footer>
  );
}