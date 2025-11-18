// components/Contact.tsx
"use client";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
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
        {/* Encabezado */}
        <div className="text-center mb-10">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-accent border border-border flex items-center justify-center text-accent-foreground text-xl">
            ✉️
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Contacto</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Me encantaría colaborar contigo!
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Columna izquierda: Información de contacto */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-3">Información de Contacto</h2>
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
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:ubeimarlyepes@gmail.com" className="text-sm hover:underline">
                      ubeimarlyepes@gmail.com
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">Envíame un mensaje directo</p>
                  </div>
                </div>
              </div>

              <div className="bg-card backdrop-blur-sm p-5 rounded-xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent border border-border flex items-center justify-center text-accent-foreground text-xl">
                    <MdPhone />
                  </div>
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <a href="tel:+573135220484" className="text-sm hover:underline">
                      +57 (313) 522-0484
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">Llamada o WhatsApp</p>
                  </div>
                </div>
              </div>

              <div className="bg-card backdrop-blur-sm p-5 rounded-xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent border border-border flex items-center justify-center text-accent-foreground text-xl">
                    <MdLocationOn />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ubicación</h3>
                    <p className="text-sm">Pasto, Colombia</p>
                    <p className="text-xs text-muted-foreground mt-1">Disponible para trabajo remoto</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="pt-2">
              <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Sígueme en redes</h4>
              <div className="flex items-center gap-4 text-lg">
                <a href="#" className="hover:text-blue-500" aria-label="GitHub"><FaGithub /></a>
                <a href="#" className="hover:text-blue-500" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" className="hover:text-pink-500" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
          </div>

          {/* Columna derecha: Formulario */}
          <div className="bg-card backdrop-blur-sm p-6 rounded-xl border border-border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm">Nombre *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground placeholder:text-muted-foreground"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">Email *</label>
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
                <label htmlFor="subject" className="text-sm">Asunto *</label>
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
                <label htmlFor="message" className="text-sm">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground placeholder:text-muted-foreground resize-y"
                  placeholder="Cuéntame más detalles sobre tu proyecto, timeline, presupuesto, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent border border-border text-accent-foreground hover:bg-accent transition"
                aria-label="Enviar Mensaje"
              >
                ✈️ Enviar Mensaje
              </button>

              <p className="text-xs text-muted-foreground">
                Respondo a todos los mensajes en menos de 24 horas
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}