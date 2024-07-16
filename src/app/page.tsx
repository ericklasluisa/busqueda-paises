"use client";

import { useEffect, useState } from "react";
import { Pais } from "./types/Countries.types";
import { getCountries } from "./lib/getCountries";
import Tabla from "./components/Tabla";

export default function Home() {
  const [paises, setPaises] = useState<Pais[]>();

  useEffect(() => {
    const fetchCountries = async () => {
      console.log("Fetching countries...");
      const countriesData = await getCountries();
      console.log("Fetched countries:", countriesData);
      setPaises(countriesData);
    };

    fetchCountries();
  }, []);

  return (
    <main className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">
        Todos los Países
      </h1>
      <div className="overflow-x-auto w-full overflow-y-auto h-[400px]">
        <Tabla paises={paises!} />
      </div>
    </main>
  );
}
