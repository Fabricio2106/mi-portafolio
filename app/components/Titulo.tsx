import type { ReactNode } from "react";

export default function Titulo({ children }: { children: ReactNode }) {
  return (
    <h2 className="aparecer text-2xl font-semibold after:mt-3 after:block after:h-1 after:w-12 after:rounded-full after:bg-acento after:content-[''] sm:text-3xl">
      {children}
    </h2>
  );
}
