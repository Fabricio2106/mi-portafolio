import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import Titulo from "./Titulo";

type Certificado = {
  titulo: string;
  emisor: string;
  fecha: string;
  archivo: string;
  verificacion?: string;
};

const certificados: Certificado[] = [
  {
    titulo: "Claude 101",
    emisor: "Claude Academy · Insignia de finalización de curso",
    fecha: "Octubre de 2026",
    archivo: "/certificados/claude-101.pdf",
    verificacion:
      "https://academy.claude.com/verify/5616054c6837317321f58e1a61629cf8",
  },
  {
    titulo: "IT Essentials: PC Hardware and Software",
    emisor: "Cisco Networking Academy",
    fecha: "Agosto de 2024",
    archivo: "/certificados/cisco-it-essentials.pdf",
  },
];

export default function Certificates() {
  return (
    <section id="certificados" className="mx-auto max-w-5xl px-6 py-16">
      <Titulo>Certificaciones</Titulo>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {certificados.map((certificado) => (
          <article
            key={certificado.titulo}
            className="aparecer flex flex-col rounded-2xl border border-white/10 bg-oscuro p-6 transition duration-200 hover:border-acento/50 motion-safe:hover:-translate-y-1"
          >
            <Award className="size-6 text-acento" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold">{certificado.titulo}</h3>
            <p className="mt-1 text-white/85">{certificado.emisor}</p>
            <p className="mt-1 flex-1 text-sm text-white/60">
              {certificado.fecha}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              <a
                href={certificado.archivo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-acento underline-offset-4 hover:underline"
              >
                Ver certificado
                <ExternalLink className="size-3.5" />
              </a>
              {certificado.verificacion && (
                <a
                  href={certificado.verificacion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-acento underline-offset-4 hover:underline"
                >
                  <BadgeCheck className="size-4" />
                  Verificar
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
