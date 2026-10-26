import { ExternalLink, Globe } from "lucide-react";
import { GithubIcon } from "./Iconos";
import Titulo from "./Titulo";

type Proyecto = {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  repo: string;
  demo?: string;
};

const proyectos: Proyecto[] = [
  {
    titulo: "Sistema de Multicines Iquitos",
    descripcion:
      "Plataforma para comprar entradas de cine en línea con un mapa interactivo de butacas que muestra la disponibilidad en tiempo real. Procesa pagos solo con tarjeta.",
    tecnologias: ["React", "Vite", "JavaScript", "CSS3"],
    repo: "https://github.com/Fabricio2106/Sistema-de-Cine",
    demo: "https://multicines-iquitos-beta.vercel.app",
  },
  {
    titulo: "Tienda en línea Seblaza",
    descripcion:
      "Tienda en línea con catálogo de productos, carrito de compras, pago y seguimiento de pedidos. Incluye registro e inicio de sesión de clientes, reseñas y un panel de administración.",
    tecnologias: ["React", "Vite", "Supabase", "Bootstrap", "EmailJS"],
    repo: "https://github.com/Fabricio2106/ESFRT2-Seblaza",
    demo: "https://seblaza.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-5xl px-6 py-16">
      <Titulo>Proyectos</Titulo>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {proyectos.map((proyecto) => (
          <article
            key={proyecto.titulo}
            className="aparecer flex flex-col rounded-2xl border border-white/10 bg-oscuro p-6 transition duration-200 hover:border-acento/50 motion-safe:hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold">{proyecto.titulo}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-white/85">
              {proyecto.descripcion}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {proyecto.tecnologias.map((tecnologia) => (
                <li
                  key={tecnologia}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs"
                >
                  {tecnologia}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              <a
                href={proyecto.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-acento underline-offset-4 hover:underline"
              >
                <GithubIcon className="size-4" />
                Ver en GitHub
                <ExternalLink className="size-3.5" />
              </a>
              {proyecto.demo && (
                <a
                  href={proyecto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-acento underline-offset-4 hover:underline"
                >
                  <Globe className="size-4" />
                  Ver demo
                  <ExternalLink className="size-3.5" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
