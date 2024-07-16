"use client";

import { useEffect, useState } from "react";
import { Pais } from "../types/Countries.types";
import { searchCountries } from "../lib/searchCountries";
import Tabla from "../components/Tabla";

export default function Home() {
  const [paises, setPaises] = useState<Pais[]>();
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    const fetchCountries = async () => {
      console.log("Fetching countries...");
      const countriesData = await searchCountries(term);
      console.log("Fetched countries:", countriesData);
      setPaises(countriesData);
    };

    fetchCountries();
  }, [term]);

  return (
    <main className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Buscar Países</h1>
      <input
        type="text"
        placeholder="Buscar país..."
        className="w-3/4 p-2 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-md bg-white mx-auto block"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div className="overflow-x-auto w-full overflow-y-auto h-[400px]">
        <Tabla paises={paises!} />
      </div>
    </main>
  );
}
