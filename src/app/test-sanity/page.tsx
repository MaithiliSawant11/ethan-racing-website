import { client } from "@/sanity/lib/client";
import { allCarsQuery } from "@/sanity/queries/carQueries";

export default async function TestSanity() {
  const data = await client.fetch(allCarsQuery);

  console.log("SANITY DATA:", data);

  return (
    <div className="p-10">
      <h1 className="text-2xl">Sanity Connected ✅</h1>
      <p>Check terminal for data</p>
    </div>
  );
}