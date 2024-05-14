import { sql } from "@vercel/postgres";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Home() {
  const result = await sql`SELECT * FROM quotes`;
  const quotes = result.rows;
    
    
    
  return (
    <main>
      <h1>Quotes from The Office</h1>

      <div id="all_quotes_container">
        {quotes.map((quote) => (
          
          <section key={quote.id} className="quote_section">
            <p className="quote_title">Quote: {quote.quote}</p>
            <p className="quote_title">Title: {quote.title}</p>
            <p className="quote_title">Season: {quote.season}</p>
            <p className="quote_title">Episode: {quote.episode}</p>
            <p className="quote_title">Character: {quote.character}</p>
            <div className="button_container">
              <Link href={`/posts/${quote.id}`}>
                <button>Edit</button>
              </Link>
            
            </div>
          </section>
        ))}
      </div>
      <Link href="/posts/new">
        <button type="submit">Add new quote</button>
          </Link>
          
      </main>
      
  );
}


