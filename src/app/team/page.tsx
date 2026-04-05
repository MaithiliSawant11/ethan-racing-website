import { client } from "@/sanity/lib/client";
import TeamUI from "@/components/TeamUI";

async function getTeam() {
  return await client.fetch(`
    *[_type == "team"]{
      _id,
      name,
      role,
      domain,
      year,
      linkedin,
      "image": image.asset->url
    }
  `);
}

export default async function TeamPage() {
  const members = await getTeam();

  return <TeamUI members={members} />;
}