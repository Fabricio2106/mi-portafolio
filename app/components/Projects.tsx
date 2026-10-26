import { ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "./Iconos";
import Titulo from "./Titulo";

type Proyecto = {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  repo: string;
  demo?: string;
  imagen: { src: string; alt: string };
};

const proyectos: Proyecto[] = [
  {
    titulo: "Sistema de Multicines Iquitos",
    descripcion:
      "Plataforma para comprar entradas de cine en línea con un mapa interactivo de butacas que muestra la disponibilidad en tiempo real. Procesa pagos solo con tarjeta.",
    tecnologias: ["React", "Vite", "JavaScript", "CSS3"],
    repo: "https://github.com/Fabricio2106/Sistema-de-Cine",
    demo: "https://multicines-iquitos.vercel.app",
    imagen: {
      src: "/proyectos/multicines.png",
      alt: "Captura de pantalla de la página de inicio de Multicines Iquitos, con la cartelera en un carrusel",
    },
  },
  {
    titulo: "Tienda en línea Seblaza",
    descripcion:
      "Tienda en línea con catálogo de productos, carrito de compras, pago y seguimiento de pedidos. Incluye registro e inicio de sesión de clientes, reseñas y un panel de administración.",
    tecnologias: ["React", "Vite", "Supabase", "Bootstrap", "EmailJS"],
    repo: "https://github.com/Fabricio2106/ESFRT2-Seblaza",
    demo: "https://seblaza.vercel.app",
    imagen: {
      src: "/proyectos/seblaza.png",
      alt: "Captura de pantalla de la página de inicio de la tienda Seblaza, con el catálogo de productos",
    },
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
            className="aparecer flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-oscuro transition duration-200 hover:border-acento/50 motion-safe:hover:-translate-y-1"
          >
            <Image
              src={proyecto.imagen.src}
              alt={proyecto.imagen.alt}
              width={1280}
              height={720}
              sizes="(min-width: 768px) 512px, 100vw"
              className="aspect-[2/1] w-full border-b border-white/10 object-cover object-top"
            />
            <div className="flex flex-1 flex-col p-6">
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
