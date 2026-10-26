import { Network } from "lucide-react";
import type { ComponentType } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiBootstrap,
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Titulo from "./Titulo";

type Habilidad = {
  nombre: string;
  Icono: ComponentType<{ className?: string }>;
};

const categorias: { titulo: string; items: Habilidad[] }[] = [
  {
    titulo: "Frontend",
    items: [
      { nombre: "HTML5", Icono: SiHtml5 },
      { nombre: "CSS3", Icono: SiCss },
      { nombre: "JavaScript", Icono: SiJavascript },
      { nombre: "TypeScript", Icono: SiTypescript },
      { nombre: "React", Icono: SiReact },
      { nombre: "Next.js", Icono: SiNextdotjs },
      { nombre: "Angular", Icono: SiAngular },
      { nombre: "Bootstrap", Icono: SiBootstrap },
      { nombre: "Tailwind CSS", Icono: SiTailwindcss },
    ],
  },
  {
    titulo: "Backend",
    items: [
      { nombre: "Node.js", Icono: SiNodedotjs },
      { nombre: "Java", Icono: FaJava },
      { nombre: "Spring Boot", Icono: SiSpringboot },
      { nombre: "NestJS", Icono: SiNestjs },
      { nombre: "Python", Icono: SiPython },
      { nombre: "REST APIs", Icono: Network },
    ],
  },
  {
    titulo: "Bases de datos",
    items: [
      { nombre: "MySQL", Icono: SiMysql },
      { nombre: "PostgreSQL", Icono: SiPostgresql },
    ],
  },
  {
    titulo: "Herramientas",
    items: [
      { nombre: "Git", Icono: SiGit },
      { nombre: "GitHub", Icono: SiGithub },
      { nombre: "Visual Studio Code", Icono: VscVscode },
      { nombre: "Postman", Icono: SiPostman },
    ],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="mx-auto max-w-5xl px-6 py-16">
      <Titulo>Habilidades</Titulo>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {categorias.map((categoria) => (
          <div key={categoria.titulo} className="aparecer">
            <h3 className="text-sm uppercase tracking-widest text-acento">
              {categoria.titulo}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {categoria.items.map(({ nombre, Icono }) => (
                <li
                  key={nombre}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-oscuro px-4 py-2 text-sm transition-colors duration-200 hover:border-acento/60 hover:text-acento"
                >
                  <Icono className="size-4 shrink-0" />
                  {nombre}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
