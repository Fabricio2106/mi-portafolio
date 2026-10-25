const enlaces = [
  { texto: "Inicio", href: "#inicio" },
  { texto: "Proyectos", href: "#proyectos" },
  { texto: "Habilidades", href: "#habilidades" },
  { texto: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-oscuro/95 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-3 sm:flex-row sm:justify-between sm:py-4">
        <a href="#inicio" className="font-semibold text-acento">
          Fabricio Orihuela
        </a>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm sm:gap-x-6">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a
                href={enlace.href}
                className="transition-colors hover:text-acento"
              >
                {enlace.texto}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
