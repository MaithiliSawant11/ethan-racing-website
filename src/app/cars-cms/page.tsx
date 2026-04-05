import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { allCarsQuery } from "@/sanity/queries/carQueries";
import { urlFor } from "@/sanity/lib/image";

async function getCars() {
  return await client.fetch(allCarsQuery);
}

export default async function CarsCMSPage() {
  const cars = await getCars();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Cars from CMS 🚗</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       {cars.map((car: any) => (
  car.slug?.current && (
    <Link key={car._id} href={`/cars-cms/${car.slug.current}`}>
      <div className="bg-gray-900 p-4 rounded-xl cursor-pointer">

        {car.image && (
          <img
            src={urlFor(car.image).width(400).url()}
            alt={car.name}
            className="rounded-lg mb-3"
          />
        )}

        <h2 className="text-xl font-semibold">{car.name}</h2>
        <p className="text-sm text-gray-400">{car.year}</p>

      </div>
    </Link>
  )
))}
      </div>
    </div>
  );
}