import { Mail } from "lucide-react";
import { WHATSAPP_URL } from "../data/contacto";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./Iconos";
import Titulo from "./Titulo";

const contactos = [
  {
    texto: "WhatsApp",
    href: WHATSAPP_URL,
    Icono: WhatsappIcon,
  },
  {
    texto: "fabricio.orihuela@hannahlab.com",
    href: "mailto:fabricio.orihuela@hannahlab.com",
    Icono: Mail,
    nota: "Correo de empresa",
  },
  {
    texto: "LinkedIn",
    href: "https://www.linkedin.com/in/fabricio-figueroa-184985397",
    Icono: LinkedinIcon,
  },
  {
    texto: "GitHub",
    href: "https://github.com/Fabricio2106",
    Icono: GithubIcon,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-5xl px-6 py-16">
      <Titulo>Contacto</Titulo>
      <ul className="aparecer mt-8 flex flex-col gap-3">
        {contactos.map(({ texto, href, Icono, nota }) => (
          <li key={href} className="flex flex-wrap items-center gap-x-3">
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-acento underline-offset-4 hover:underline"
            >
              <Icono className="size-5" />
              {texto}
            </a>
            {nota && <span className="text-sm text-white/60">{nota}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
