import { client } from "@/sanity/lib/client";
import AchievementsUI from "@/components/AchievementsUI";
import SwipeGallery from "@/components/SwipeGallery";

async function getData() {
  const achievements = await client.fetch(`
  *[_type == "achievement"] 
  | order(order asc, year desc){
    _id,
    year,
    title,
    position,
    description,
    category,
    "images": images[].asset->url
  }
`);

  const legacy = await client.fetch(`
    *[_type == "legacy"]{
      _id,
      "image": image.asset->url
    }
  `);

  return { achievements, legacy };
}

export default async function AchievementsPage() {
  const data = await getData();

  return (
    <AchievementsUI
      achievements={data.achievements}
      legacyImages={data.legacy}
    />
  );
}