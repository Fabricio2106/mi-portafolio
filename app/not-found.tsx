import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(239,68,68,0.22),transparent_70%)]"
      />
      <div className="relative py-24 text-center">
        <p className="text-sm uppercase tracking-widest text-acento">
          Error 404
        </p>
        <h1 className="mt-4 text-5xl font-bold sm:text-7xl">
          Página no encontrada
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-white/80">
          La dirección que buscas no existe o fue movida. Vuelve al inicio para
          ver mis proyectos.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-acento px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
        >
          <ArrowLeft className="size-4" />
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
