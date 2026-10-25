import { Mail } from "lucide-react";
import { WHATSAPP_URL } from "../data/contacto";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./Iconos";

const redes = [
  {
    etiqueta: "WhatsApp",
    href: WHATSAPP_URL,
    Icono: WhatsappIcon,
  },
  {
    etiqueta: "Correo",
    href: "mailto:figueroafabricio14@gmail.com",
    Icono: Mail,
  },
  {
    etiqueta: "LinkedIn",
    href: "https://www.linkedin.com/in/fabricio-figueroa-184985397",
    Icono: LinkedinIcon,
  },
  {
    etiqueta: "GitHub",
    href: "https://github.com/Fabricio2106",
    Icono: GithubIcon,
  },
];

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-white/60">
          © 2026 Fabricio Orihuela Figueroa
        </p>
        <ul className="flex gap-5">
          {redes.map(({ etiqueta, href, Icono }) => (
            <li key={href}>
              <a
                href={href}
                aria-label={etiqueta}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-white/60 transition-colors hover:text-acento"
              >
                <Icono className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
