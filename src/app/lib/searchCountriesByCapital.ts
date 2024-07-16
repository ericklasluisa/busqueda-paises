import { Pais } from "../types/Countries.types";

export async function searchCountriesByCapital(term: string): Promise<Pais[]> {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow" as RequestRedirect,
  };

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/capital/${term}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Pais[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    return [];
  }
}
