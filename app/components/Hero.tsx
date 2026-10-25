import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <p className="text-sm uppercase tracking-widest text-acento">
        Desarrollador full stack
      </p>
      <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
        Fabricio Orihuela Figueroa
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
        Soy Fabricio Orihuela Figueroa, tengo 22 años y estudio en IDAT. Soy
        desarrollador full stack y trabajo en Hannah Lab, donde construyo
        soluciones de software para clientes reales. Me gusta aprender
        construyendo, y este portafolio reúne los proyectos en los que he
        trabajado.
      </p>
      <a
        href="#contacto"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-acento px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
      >
        Contáctame
        <ArrowRight className="size-4" />
      </a>
    </section>
  );
}
