import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Home() {
  const result = await sql`SELECT * FROM quotes`;
  const quotes = result.rows;

  return (
    <main>
      <h1>Quotes from The Office</h1>

      <table id="all_quotes_table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Quote</th>
            <th>Title</th>
            <th>Season</th>
            <th>Episode</th>
            <th>Character</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr key={quote.id}>
              <td>{quote.id}</td>
              <td>{quote.quote}</td>
              <td>{quote.title}</td>
              <td>{quote.season}</td>
              <td>{quote.episode}</td>
              <td>{quote.character}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button href="../new">Add Quote</button>
    </main>
  );
}
