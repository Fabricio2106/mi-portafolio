import { Briefcase, GraduationCap } from "lucide-react";

const bloques = [
  {
    titulo: "Experiencia",
    Icono: Briefcase,
    cargo: "Desarrollador Full Stack",
    lugar: "Hannah Lab",
    detalle: "Trabajo actual",
  },
  {
    titulo: "Educación",
    Icono: GraduationCap,
    cargo: "Desarrollo de Sistemas Frontend y Backend",
    lugar: "IDAT",
    detalle: "Cursando el 7.º ciclo · egreso previsto en 2027",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold sm:text-3xl">Sobre mí</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {bloques.map(({ titulo, Icono, cargo, lugar, detalle }) => (
          <article
            key={titulo}
            className="rounded-2xl border border-white/10 bg-oscuro p-6"
          >
            <h3 className="flex items-center gap-2 text-sm uppercase tracking-widest text-acento">
              <Icono className="size-4" />
              {titulo}
            </h3>
            <p className="mt-4 text-lg font-semibold">{cargo}</p>
            <p className="text-white/85">{lugar}</p>
            <p className="mt-2 text-sm text-white/60">{detalle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
