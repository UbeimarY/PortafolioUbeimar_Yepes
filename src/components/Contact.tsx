// components/Contact.tsx
"use client";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      nombre: form.get("name"),
      email: form.get("email"),
      asunto: form.get("subject"),
      mensaje: form.get("message"),
    };
    console.log("Contacto:", payload);
    alert("Gracias por tu mensaje. Te responderé pronto.");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative w-full min-h-screen flex items-center justify-center text-foreground py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-10">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-accent border border-border flex items-center justify-center text-accent-foreground text-xl">✉️</div>
          <h1 className="text-4xl md:text-5xl font-bold">{t("contact.title")}</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Columna izquierda: Información de contacto */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-3">{t("contact.info")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                Siempre abierto a discutir nuevas oportunidades, proyectos interesantes o simplemente charlar sobre tecnología.
                Puedes contactarme por cualquiera de estos medios.
              </p>
            </div>

            {/* Tarjetas */}
            <div className="space-y-4">
              <div className="bg-card backdrop-blur-sm p-5 rounded-xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent border border-border flex items-center justify-center text-accent-foreground text-xl">
                    <MdEmail />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t("contact.email")}</h3>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=ubeimarlyepes@gmail.com&su=Contacto%20Portafolio&body=Hola%20Ubeimar%2C%20me%20gustar%C3%ADa%20contactar%20para%20trabajar%20en%20un%20proyecto."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline"
                    >
                      ubeimarlyepes@gmail.com
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">{t("contact.emailNote")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-card backdrop-blur-sm p-5 rounded-xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent border border-border flex items-center justify-center text-accent-foreground text-xl">
                    <MdPhone />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t("contact.phone")}</h3>
                    <a
                      href="https://wa.me/573135220484?text=Hola%20Ubeimar%2C%20me%20gustar%C3%ADa%20contactar%20para%20trabajar%20en%20un%20proyecto."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline"
                    >
                      +57 (313) 522-0484
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">{t("contact.phoneNote")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-card backdrop-blur-sm p-5 rounded-xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent border border-border flex items-center justify-center text-accent-foreground text-xl">
                    <MdLocationOn />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t("contact.location")}</h3>
                    <p className="text-sm">{t("contact.locationValue")}</p>
                    <p className="text-xs text-muted-foreground mt-1">{t("contact.remote")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="pt-2">
              <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">{t("contact.socials")}</h4>
              <div className="flex items-center gap-4 text-lg">
                <a
                  href="https://github.com/UbeimarY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                  aria-label="Abrir GitHub"
                >
                  <FaGithub />
                </a>
                <a className="hover:text-blue-500" href="#" aria-label="Abrir LinkedIn">
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/ube.yepes09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                  aria-label="Abrir Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha: Formulario */}
          <div className="bg-card backdrop-blur-sm p-6 rounded-xl border border-border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">{t("contact.formTitle")}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label htmlFor="name" className="text-sm">{t("contact.nameLabel")}</label>
              <input id="name" name="name" type="text" required placeholder={t("contact.namePh")} className="w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground placeholder:text-muted-foreground" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">{t("contact.emailLabel")}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground placeholder:text-muted-foreground"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm">{t("contact.subjectLabel")}</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground placeholder:text-muted-foreground"
                  placeholder="¿De qué se trata tu proyecto?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm">{t("contact.messageLabel")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder={t("contact.messagePh")}
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground placeholder:text-muted-foreground resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent border border-border text-accent-foreground hover:bg-accent transition"
                aria-label={t("contact.submit")}
                >
                ✈️ {t("contact.submit")}
              </button>
              <p className="text-xs text-muted-foreground">{t("contact.responseTime")}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}