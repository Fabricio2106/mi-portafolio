import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(239,68,68,0.28),transparent_70%)]"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col-reverse items-start gap-10 px-6 py-20 sm:py-28 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="md:max-w-xl">
          <p className="text-sm uppercase tracking-widest text-acento">
            Desarrollador full stack
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Fabricio Orihuela Figueroa
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Soy Fabricio Orihuela Figueroa, tengo 22 años y estudio en IDAT.
            Soy desarrollador full stack y trabajo en Hannah Lab, donde
            construyo soluciones de software para clientes reales. Me gusta
            aprender construyendo, y este portafolio reúne los proyectos en los
            que he trabajado.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-acento px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
            >
              Contáctame
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium transition-colors hover:border-acento hover:text-acento"
            >
              Ver proyectos
            </a>
            <a
              href="/CV-Fabricio-Orihuela.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium transition-colors hover:border-acento hover:text-acento"
            >
              <Download className="size-4" />
              Descargar CV
            </a>
          </div>
        </div>

        <Image
          src="/foto-perfil.jpg"
          alt="Foto de Fabricio Orihuela Figueroa"
          width={800}
          height={800}
          sizes="(min-width: 768px) 288px, 176px"
          priority
          className="size-44 shrink-0 rounded-full border-2 border-acento/70 object-cover shadow-[0_0_60px_rgba(239,68,68,0.25)] md:size-72"
        />
      </div>
    </section>
  );
}
