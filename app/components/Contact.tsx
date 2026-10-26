import { Mail } from "lucide-react";
import { WHATSAPP_URL } from "../data/contacto";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./Iconos";

const contactos = [
  {
    texto: "WhatsApp",
    href: WHATSAPP_URL,
    Icono: WhatsappIcon,
  },
  {
    texto: "figueroafabricio14@gmail.com",
    href: "mailto:figueroafabricio14@gmail.com",
    Icono: Mail,
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
      <h2 className="aparecer text-2xl font-semibold sm:text-3xl">Contacto</h2>
      <ul className="aparecer mt-8 flex flex-col gap-3">
        {contactos.map(({ texto, href, Icono }) => (
          <li key={href}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-acento underline-offset-4 hover:underline"
            >
              <Icono className="size-5" />
              {texto}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
