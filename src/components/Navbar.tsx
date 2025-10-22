"use client";

export default function Navbar() {
  const links = [
    "Inicio",
    "About Me",
    "Experiencia",
    "Educación",
    "Proyectos",
    "Contacto",
    "Testimonios",
    "Blog",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/10 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">Ubeimar</h1>

        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link} className="cursor-pointer hover:text-blue-400 transition">
              {link}
            </li>
          ))}
        </ul>

        <button className="text-lg hover:text-blue-400 transition">🌙</button>
      </div>
    </nav>
  );
}
