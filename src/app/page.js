import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { sql } from "@vercel/postgres";

export default async function Home() {
  const results = await sql`SELECT * FROM quotes`;
    const quotes = results.rows;

  return (
    <main>
      <h1>Welcome to The Office</h1>
      <Link href="/posts/all">
        <h2>Enter the office</h2>
      </Link>
      {/* <Link href="./posts/all"> Welcome to Dunder Mifflin, Scarnton</Link> */}

      {/* <h1>That is what she said</h1>
      <div>
        {quotes.rows.map((quote) => {
          return (
            <div key={quote.id}>
              <h3>{quote.quote}</h3>
              <p>{quote.title}</p>
              <Image
                 src={`/${quote.title}`.png}
                alt={quote.title}
                width={300}
                height={300}
              />
            </div>
          );
        })}
      </div>
      ); */}
    </main>
  );
}
