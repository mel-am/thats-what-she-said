import { sql } from "@vercel/postgres";

export default async function GetAllEpisodes() {
  const categories = await sql`SELECT * FROM quotes`;

  const allEpisodes = await categories.rows;
  console.log("All of the episode data is now showing");
  return allEpisodes;
}
