"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 text-foreground">
      {/* Fondo animado montado globalmente */}
      <p className="text-blue-400 mb-2 text-sm">{t("hero.greeting")}</p>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">{t("hero.name")}</h1>
      <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
        {t("hero.role")}
      </h2>

      <p className="max-w-2xl text-muted-foreground mb-8">
        {t("hero.description")}
      </p>

      <div className="flex gap-4 mb-10">
        <a href="#projects" className="bg-primary-foreground text-primary px-6 py-2 rounded-lg font-medium hover:bg-accent transition" aria-label={t("cta.projects")}>
          {t("cta.projects")}
        </a>
        <a href="#contact" className="bg-primary px-6 py-2 rounded-lg font-medium text-primary-foreground hover:bg-accent transition" aria-label={t("cta.contact")}>
          {t("cta.contact")}
        </a>
        <a
          href="/UbeimarLizardo_YepesPortilla_CV.pdf"
          download
          className="bg-accent px-6 py-2 rounded-lg font-medium text-accent-foreground hover:bg-primary transition"
          aria-label={t("footer.downloadCV")}
        >
          {t("footer.downloadCV")}
        </a>
      </div>

      {/* Socials sin cambios funcionales */}
      <div className="flex gap-6 text-xl">
        <a
          className="hover:text-blue-500"
          href="https://github.com/UbeimarY"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir GitHub"
        >
          <FaGithub />
        </a>
        <a
          className="hover:text-blue-500"
          href="https://www.linkedin.com/in/ubeimar-lizardo-yepes-portilla-211318368/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir LinkedIn"
        >
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
    </section>
  );
}
