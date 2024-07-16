import React from "react";
import { Pais } from "../types/Countries.types";
import Image from "next/image";

interface TablaProps {
  paises: Pais[];
}

const Tabla: React.FC<TablaProps> = ({ paises }) => {
  return (
    <table className="w-3/4 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="p-4 text-left">Nombre del País</th>
          <th className="p-4 text-left">Capital</th>
          <th className="p-4 text-left">Población</th>
          <th className="p-4 text-left">Bandera</th>
        </tr>
      </thead>
      <tbody>
        {paises?.map((pais) => (
          <tr key={pais.name.common} className="border-b border-gray-200">
            <td className="p-4">{pais.name.common}</td>
            <td className="p-4">{pais.capital}</td>
            <td className="p-4">{pais.population.toLocaleString()}</td>
            <td className="p-4">
              <Image
                src={pais.flags.png}
                alt={pais.name.common}
                className="object-cover"
                width={48}
                height={32}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
