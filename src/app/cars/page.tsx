import { client } from "@/sanity/lib/client";
import CarsUI from "@/components/CarsUI";
import CarsHero from "@/components/CarsHero";

<CarsHero />

async function getCars() {
  return await client.fetch(`
    *[_type == "car"] | order(year desc) {
      _id,
      name,
      slug,
      year,
      description,
      image
    }
  `);
}

export default async function CarsPage() {
  const cmsCars = await getCars();

  return <CarsUI cmsCars={cmsCars} />;
}