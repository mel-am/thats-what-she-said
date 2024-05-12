import { sql } from "@vercel/postgres";

export default async function GetAllData() {
  const categories = await sql`SELECT * FROM quotes`;

  const allData = await categories.rows;
  console.log("All of the quotes data is now showing");
    return allData;
}
