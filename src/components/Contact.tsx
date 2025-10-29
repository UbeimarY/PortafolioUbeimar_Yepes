// components/Contact.tsx
"use client";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full min-h-screen flex items-center justify-center text-white py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría colaborar contigo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
              <p className="text-white/80 leading-relaxed">
                Estoy siempre abierto a discutir nuevas oportunidades, proyectos interesantes o simplemente charlar sobre tecnología. 
                No dudes en contactarme a través de cualquiera de estos medios.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <h3 className="font-bold text-lg mb-2 text-blue-400">Email</h3>
                <a 
                  href="mailto:ubeimarlyepes@gmail.com" 
                  className="text-white hover:text-blue-300 transition-colors block mb-1"
                >
                  ubeimarlyepes@gmail.com
                </a>
                <p className="text-white/70 text-sm">Envíame un mensaje directo</p>
              </div>

              {/* Teléfono */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <h3 className="font-bold text-lg mb-2 text-blue-400">Teléfono</h3>
                <a 
                  href="https://wa.me/573135220484" 
                  className="text-white hover:text-blue-300 transition-colors block mb-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +57 (313) 522-0484
                </a>
                <p className="text-white/70 text-sm">Disponible por WhatsApp</p>
              </div>

              {/* Ubicación */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <h3 className="font-bold text-lg mb-2 text-blue-400">Ubicación</h3>
                <p className="text-white mb-1">Pasto, Colombia</p>
                <p className="text-white/70 text-sm">Disponible para trabajar remotamente</p>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Envíame un Mensaje</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Asunto del mensaje"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-bold mb-6">Sígueme en redes:</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-blue-400 transition-colors text-lg">
              LinkedIn
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors text-lg">
              GitHub
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors text-lg">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors text-lg">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}