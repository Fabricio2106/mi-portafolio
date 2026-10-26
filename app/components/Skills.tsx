const categorias = [
  {
    titulo: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    titulo: "Backend",
    items: ["Node.js", "Java", "Spring Boot", "NestJS", "Python", "REST APIs"],
  },
  {
    titulo: "Bases de datos",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    titulo: "Herramientas",
    items: ["Git", "GitHub", "Visual Studio Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="aparecer text-2xl font-semibold sm:text-3xl">
        Habilidades
      </h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {categorias.map((categoria) => (
          <div key={categoria.titulo} className="aparecer">
            <h3 className="text-sm uppercase tracking-widest text-acento">
              {categoria.titulo}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {categoria.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-oscuro px-4 py-2 text-sm transition-colors duration-200 hover:border-acento/60 hover:text-acento"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
