"use client";

import { useEffect, useState } from "react";

const enlaces = [
  { texto: "Inicio", id: "inicio" },
  { texto: "Sobre mí", id: "sobre-mi" },
  { texto: "Proyectos", id: "proyectos" },
  { texto: "Habilidades", id: "habilidades" },
  { texto: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const [activo, setActivo] = useState("inicio");

  useEffect(() => {
    const secciones = enlaces
      .map((enlace) => document.getElementById(enlace.id))
      .filter((seccion): seccion is HTMLElement => seccion !== null);

    // Cuenta como activa la sección que cruza la franja del tercio superior.
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) setActivo(entrada.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    secciones.forEach((seccion) => observador.observe(seccion));

    // Al llegar al final de la página, la última sección es corta y puede no
    // llegar a la franja, así que se marca activa por separado.
    const alFinal = () => {
      const llegoAlFinal =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (llegoAlFinal) setActivo(enlaces[enlaces.length - 1].id);
    };
    window.addEventListener("scroll", alFinal, { passive: true });

    return () => {
      observador.disconnect();
      window.removeEventListener("scroll", alFinal);
    };
  }, []);

  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-oscuro/95 backdrop-blur">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-3 sm:flex-row sm:justify-between sm:py-4">
        <a href="#inicio" className="font-semibold text-acento">
          Fabricio Orihuela
        </a>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm sm:gap-x-6">
          {enlaces.map((enlace) => (
            <li key={enlace.id}>
              <a
                href={`#${enlace.id}`}
                aria-current={activo === enlace.id ? "location" : undefined}
                className={`transition-colors hover:text-acento ${
                  activo === enlace.id ? "text-acento" : ""
                }`}
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
