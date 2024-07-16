import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-950 p-5 flex justify-between items-center">
      <h1 className="text-white text-xl font-semibold">App de Paises</h1>
      <div>
        <ul className="flex gap-5 text-white">
          <li>
            <Link href="/" className="hover:text-blue-300">
              Todos los Paises
            </Link>
          </li>
          <li>
            <Link href="/search" className="hover:text-blue-300">
              Buscar Pais
            </Link>
          </li>
          <li>
            <Link href="/capital" className="hover:text-blue-300">
              Buscar por Capital
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
