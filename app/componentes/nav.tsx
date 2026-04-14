"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-md transition ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-5xl mx-auto flex items-center gap-4 p-4">
        <Link href="/" className={linkClass("/")}>
          Início
        </Link>

        <Link
          href="/paginas/configuracao"
          className={linkClass("/paginas/configuracao")}
        >
          Configurações
        </Link>

        <Link
          href="/paginas/repositorios"
          className={linkClass("/paginas/repositorios")}
        >
          Repositórios
        </Link>
      </div>
    </nav>
  );
}