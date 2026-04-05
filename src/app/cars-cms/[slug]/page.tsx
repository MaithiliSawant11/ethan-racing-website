import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

async function getCar(slug: string) {
  return await client.fetch(
    `*[_type == "car" && slug.current == $slug][0]`,
    { slug }
  );
}

export default async function CarPage({ params }: any) {
  const resolvedParams = await params;   // 🔥 IMPORTANT
  const slug = resolvedParams.slug;

  if (!slug) {
    return <div className="p-10">Slug missing</div>;
  }

  const car = await getCar(slug);

  if (!car) {
    return <div className="p-10">Car not found</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">{car.name}</h1>

      {car.image && (
        <img
          src={urlFor(car.image).width(600).url()}
          alt={car.name}
          className="rounded-lg mb-6"
        />
      )}

      <p className="text-lg mb-4">{car.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Specifications</h2>
      <ul className="list-disc ml-6">
        {car.specs?.map((spec: string, i: number) => (
          <li key={i}>{spec}</li>
        ))}
      </ul>
    </div>
  );
}